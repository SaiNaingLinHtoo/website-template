import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Business Units - Sudhamma Business Group',
  description: 'Explore the diverse portfolio of business units under the Sudhamma Business Group.',
  keywords: ['business units', 'services', 'portfolio', 'sudhamma'],
};

// Mock data for business units
const businessUnits = [
  {
    id: 'hospitality',
    slug: 'hospitality',
    name: 'Sudhamma Hospitality',
    description: 'Our hospitality division operates premium hotels and resorts with a focus on exceptional guest experiences and comfort.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop',
    location: 'Multiple Locations',
    type: 'Hospitality Services'
  },
  {
    id: 'retail',
    slug: 'retail',
    name: 'Sudhamma Retail',
    description: 'Our retail division offers a wide range of quality products through our chain of stores across the region.',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=500&fit=crop',
    location: 'Nationwide',
    type: 'Retail Services'
  },
  {
    id: 'food',
    slug: 'food-and-beverage',
    name: 'Sudhamma Food & Beverage',
    description: 'From restaurants to catering services, our F&B division delivers exceptional culinary experiences.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
    location: 'Major Cities',
    type: 'Food & Beverage'
  },
  {
    id: 'logistics',
    slug: 'logistics',
    name: 'Sudhamma Logistics',
    description: 'Our logistics division provides efficient transportation and supply chain solutions for businesses of all sizes.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop',
    location: 'Regional',
    type: 'Logistics Services'
  },
  {
    id: 'tech',
    slug: 'technology',
    name: 'Sudhamma Technology',
    description: 'Our technology division develops innovative solutions to help businesses thrive in the digital age.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
    location: 'Tech Hubs',
    type: 'Technology Services'
  },
  {
    id: 'consulting',
    slug: 'consulting',
    name: 'Sudhamma Consulting',
    description: 'Our consulting division offers expert advice and strategies to help businesses grow and succeed.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
    location: 'Nationwide',
    type: 'Business Consulting'
  }
];

export default function BusinessUnitsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop" 
            alt="Sudhamma Business Units" 
            fill 
            priority
            className="object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Business Units</h1>
            <p className="text-xl">Explore our diverse portfolio of businesses, each specializing in different sectors but united by our commitment to excellence.</p>
          </div>
        </div>
      </section>

      {/* Business Units Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessUnits.map((unit) => (
              <div key={unit.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-56 relative">
                  <Image 
                    src={unit.image} 
                    alt={unit.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-700">{unit.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {unit.type}
                    </span>
                    <span className="bg-gray-200 text-gray-900 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {unit.location}
                    </span>
                  </div>
                  <p className="text-gray-800 mb-4">{unit.description}</p>
                  <Link 
                    href={`/business-units/${unit.slug}`} 
                    className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-700">Why Choose Our Business Units</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-700">Quality Assurance</h3>
              <p className="text-gray-800 text-center">
                All our business units adhere to strict quality standards, ensuring consistent excellence in products and services.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-700">Innovation Focus</h3>
              <p className="text-gray-800 text-center">
                We continuously innovate across all business units to stay ahead of market trends and exceed customer expectations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-700">Expert Teams</h3>
              <p className="text-gray-800 text-center">
                Each business unit is staffed with industry experts and professionals dedicated to delivering exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Partnering With Us?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Whether you&apos;re looking to collaborate with one of our business units or explore potential opportunities, we&apos;d love to hear from you.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
