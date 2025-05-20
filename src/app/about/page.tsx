import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Sudhamma Business Group',
  description: 'Learn about Sudhamma Business Group, our history, mission, and the team behind our success.',
  keywords: ['about us', 'business history', 'mission', 'team', 'sudhamma'],
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=600&fit=crop" 
            alt="About Sudhamma Business Group" 
            fill 
            priority
            className="object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl">Learn about our journey, mission, and the team that makes Sudhamma Business Group successful.</p>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-700">Our Background</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, Sudhamma Business Group began as a small family business with a vision to provide exceptional services to our local community. Over the years, we&apos;ve grown into a diverse business group with multiple units serving various industries.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey has been marked by a commitment to quality, innovation, and customer satisfaction. From our humble beginnings, we&apos;ve expanded our operations while maintaining the core values that define our business approach.
              </p>
              <p className="text-gray-700">
                Today, Sudhamma Business Group encompasses several successful business units, each specializing in different sectors but united by our common goal of excellence in everything we do.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                alt="Sudhamma Business Group History" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-700">Our Mission & Vision</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-700">Our Mission</h3>
              <p className="text-gray-700">
                To provide exceptional products and services that exceed customer expectations, create value for our stakeholders, and positively impact the communities we serve.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-700">Our Vision</h3>
              <p className="text-gray-700">
                To be a leading business group recognized for excellence, innovation, and integrity across all our business units, while fostering sustainable growth and making a positive difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-700">Meet Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 - Owner */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-64 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" 
                  alt="Company Owner" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-700">John Smith</h3>
                <p className="text-blue-600 mb-4">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 20 years of industry experience, John leads Sudhamma Business Group with a vision for innovation and excellence.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-64 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?w=400&h=400&fit=crop" 
                  alt="Team Member" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-700">Sarah Johnson</h3>
                <p className="text-blue-600 mb-4">Chief Operations Officer</p>
                <p className="text-gray-600">
                  Sarah oversees the day-to-day operations across all business units, ensuring efficiency and quality in everything we do.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-64 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" 
                  alt="Team Member" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-700">Michael Chen</h3>
                <p className="text-blue-600 mb-4">Director of Business Development</p>
                <p className="text-gray-600">
                  Michael leads our expansion efforts, identifying new opportunities and strategic partnerships to grow our business portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-700">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-700">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our business, from product quality to customer service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-700">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical practices at all times.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-700">Innovation</h3>
              <p className="text-gray-600">
                We embrace change and continuously seek innovative solutions to meet evolving customer needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a4 4 0 00-4-4H8.8a4 4 0 00-2.6.9l-.7.7a4 4 0 00-.9 2.6V8" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-700">Community</h3>
              <p className="text-gray-600">
                We are committed to making a positive impact in the communities where we operate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
