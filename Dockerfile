# Stage 1: Build the application
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Prune development dependencies
RUN npm prune --production

# Stage 2: Production image
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

# Copy necessary files from the builder stage
COPY --from=builder /app/public ./public
# Copy the standalone output. Note the trailing slash on the source path.
COPY --from=builder /app/.next/standalone/ ./ 
# Copy static assets
COPY --from=builder /app/.next/static ./.next/static 

EXPOSE 3000

ENV PORT 3000

# Run the Next.js application
CMD ["node", "server.js"] 