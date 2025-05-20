import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop" 
            alt="Sudhamma Business Group" 
            fill 
            priority
            className="object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Welcome to Sudhamma Business Group</h1>
            <p className="text-xl mb-8">Providing quality services and products across multiple business units.</p>
            <Link 
              href="/business-units" 
              className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Explore Our Business Units
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-gray-700 font-bold mb-12 text-center">Featured Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=600&h=400&fit=crop" 
                  alt="Business Highlight" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-700">Quality Services</h3>
                <p className="text-gray-800 mb-4">We pride ourselves on delivering exceptional quality across all our business units.</p>
                <Link href="/about" className="text-blue-600 font-medium hover:text-blue-800">
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Highlight 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop" 
                  alt="Business Highlight" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-700">Diverse Portfolio</h3>
                <p className="text-gray-800 mb-4">Explore our wide range of business units serving various market needs.</p>
                <Link href="/business-units" className="text-blue-600 font-medium hover:text-blue-800">
                  View Business Units →
                </Link>
              </div>
            </div>
            
            {/* Highlight 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&h=400&fit=crop" 
                  alt="Business Highlight" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-700">Customer Focused</h3>
                <p className="text-gray-800 mb-4">Our commitment to customer satisfaction drives everything we do.</p>
                <Link href="/contact" className="text-blue-600 font-medium hover:text-blue-800">
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-gray-700 font-bold mb-6">Our Brand Promise</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            At Sudhamma Business Group, we are committed to excellence, innovation, and customer satisfaction. 
            Our diverse portfolio of businesses shares a common goal: to provide exceptional products and services 
            that exceed expectations and create lasting value for our customers and communities.
          </p>
          <Link 
            href="/about" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Learn About Our Mission
          </Link>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8 text-gray-700">
            <h2 className="text-3xl font-bold">Latest News</h2>
            <Link href="/news" className="text-blue-600 font-medium hover:text-blue-800">
              View All News →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* News Item 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-56 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop" 
                  alt="News Item" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-2">May 15, 2025</p>
                <h3 className="text-xl font-bold mb-2 text-gray-700">Sudhamma Expands Operations to New Region</h3>
                <p className="text-gray-700 mb-4">We&apos;re excited to announce the expansion of our operations to serve customers in a new region...</p>
                <Link href="/news/expansion-announcement" className="text-blue-600 font-medium hover:text-blue-800">
                  Read More →
                </Link>
              </div>
            </div>
            
            {/* News Item 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-56 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop" 
                  alt="News Item" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-2">May 5, 2025</p>
                <h3 className="text-xl font-bold mb-2 text-gray-700">New Partnership Announcement</h3>
                <p className="text-gray-700 mb-4">Sudhamma Business Group is proud to announce a strategic partnership with...</p>
                <Link href="/news/partnership-announcement" className="text-blue-600 font-medium hover:text-blue-800">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
