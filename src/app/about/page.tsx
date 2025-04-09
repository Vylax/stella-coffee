import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About Us | Bakery Bliss Café",
  description: "Learn the story behind Bakery Bliss Café, our founders, values, and commitment to quality.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-brand-green mb-8 text-center">Our Story</h1>

      <div className="max-w-3xl mx-auto space-y-6 text-lg text-brand-brown">
        <section>
          <h2 className="text-2xl text-brand-green mb-3">Blending Cultures</h2>
          <p>
            Bakery Bliss Café started with a dream: to merge the rich culinary traditions of the Basque Country
            with the vibrant, modern aesthetic of American coffee culture. We wanted to create more than just a
            coffee shop; we envisioned a community hub, a place where artistry meets comfort.
          </p>
          <div className="my-6 h-64 bg-gray-200 rounded-md relative overflow-hidden">
            <Image 
              src="/images/cofees.jpg" 
              alt="Bakery Bliss Cafe ambiance placeholder" 
              layout="fill" 
              objectFit="cover"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl text-brand-green mb-3">Our Values</h2>
          <p>
            Quality, community, and authenticity are at the heart of everything we do. We meticulously source
            our ingredients, partner with local suppliers whenever possible, and strive to create a warm,
            welcoming atmosphere for everyone who walks through our doors.
          </p>
        </section>

        <section>
           <h2 className="text-2xl text-brand-green mb-3">Meet the Team</h2>
           <p>
             Our passionate team of baristas, bakers, and hospitality professionals are dedicated to making your
             experience exceptional. [Add brief team bios or a group photo placeholder here].
           </p>
        </section>
      </div>
    </div>
  );
} 