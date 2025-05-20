import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// This is a dynamic page that will generate metadata based on the business unit
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // In a real application, you would fetch this data from an API or CMS
  const businessUnit = businessUnits.find(unit => unit.slug === params.slug);
  
  if (!businessUnit) {
    return {
      title: 'Business Unit Not Found',
      description: 'The requested business unit could not be found.'
    };
  }
  
  return {
    title: `${businessUnit.name} - Sudhamma Business Group`,
    description: businessUnit.description,
    keywords: [businessUnit.name, 'business unit', 'sudhamma', businessUnit.type],
  };
}

// Mock data for business units (same as in the main business units page)
const businessUnits = [
  {
    id: 'hospitality',
    slug: 'hospitality',
    name: 'Sudhamma Hospitality',
    description: 'Our hospitality division operates premium hotels and resorts with a focus on exceptional guest experiences and comfort.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop',
    location: 'Multiple Locations',
    type: 'Hospitality Services',
    detailedDescription: 'Sudhamma Hospitality represents our commitment to excellence in the hospitality industry. With multiple premium hotels and resorts across key destinations, we offer guests an unforgettable experience combining luxury accommodations, exceptional dining, and personalized service. Our properties feature modern amenities, comfortable rooms, and dedicated staff committed to making every stay memorable.',
    services: [
      'Luxury Accommodations',
      'Fine Dining Restaurants',
      'Conference & Event Facilities',
      'Wellness & Spa Services',
      'Concierge Services'
    ],
    operatingHours: 'Open 24/7',
    contactPhone: '+1 (123) 456-7890',
    specialOfferings: 'Event catering, Wedding packages, Corporate retreats'
  },
  {
    id: 'retail',
    slug: 'retail',
    name: 'Sudhamma Retail',
    description: 'Our retail division offers a wide range of quality products through our chain of stores across the region.',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=500&fit=crop',
    location: 'Nationwide',
    type: 'Retail Services',
    detailedDescription: 'Sudhamma Retail operates a nationwide chain of stores offering quality products across multiple categories. From fashion and home goods to electronics and specialty items, our retail outlets are designed to provide customers with an enjoyable shopping experience. We focus on curating products that combine quality, value, and innovation to meet diverse customer needs.',
    services: [
      'Fashion & Apparel',
      'Home & Lifestyle Products',
      'Electronics & Gadgets',
      'Beauty & Personal Care',
      'Customer Loyalty Program'
    ],
    operatingHours: 'Mon-Sat: 9:00 AM - 9:00 PM, Sun: 10:00 AM - 7:00 PM',
    contactPhone: '+1 (123) 456-7891',
    specialOfferings: 'Seasonal sales, Member-exclusive discounts, Gift wrapping'
  },
  {
    id: 'food',
    slug: 'food-and-beverage',
    name: 'Sudhamma Food & Beverage',
    description: 'From restaurants to catering services, our F&B division delivers exceptional culinary experiences.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
    location: 'Major Cities',
    type: 'Food & Beverage',
    detailedDescription: 'Sudhamma Food & Beverage brings culinary excellence to the table through our diverse portfolio of restaurants, cafes, and catering services. Each establishment is designed to offer unique dining experiences, from casual eateries to fine dining restaurants. Our culinary team crafts menus using quality ingredients, innovative recipes, and attention to detail that satisfies diverse palates.',
    services: [
      'Fine Dining Restaurants',
      'Casual Dining Outlets',
      'Cafes & Bakeries',
      'Corporate Catering',
      'Event Catering Services'
    ],
    operatingHours: 'Restaurants: 11:00 AM - 10:00 PM, Cafes: 7:00 AM - 8:00 PM',
    contactPhone: '+1 (123) 456-7892',
    specialOfferings: 'Private dining, Custom event menus, Cooking classes'
  },
  {
    id: 'logistics',
    slug: 'logistics',
    name: 'Sudhamma Logistics',
    description: 'Our logistics division provides efficient transportation and supply chain solutions for businesses of all sizes.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop',
    location: 'Regional',
    type: 'Logistics Services',
    detailedDescription: 'Sudhamma Logistics specializes in comprehensive supply chain solutions, transportation services, and logistics management. We help businesses optimize their supply chains, reduce costs, and improve efficiency through our network of transportation resources, warehousing facilities, and logistics expertise. Our technology-driven approach ensures reliable tracking and timely delivery.',
    services: [
      'Freight Transportation',
      'Warehousing & Distribution',
      'Supply Chain Management',
      'Inventory Management',
      'Last-Mile Delivery'
    ],
    operatingHours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 1:00 PM',
    contactPhone: '+1 (123) 456-7893',
    specialOfferings: 'Express shipping, Temperature-controlled transport, Custom logistics solutions'
  },
  {
    id: 'tech',
    slug: 'technology',
    name: 'Sudhamma Technology',
    description: 'Our technology division develops innovative solutions to help businesses thrive in the digital age.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
    location: 'Tech Hubs',
    type: 'Technology Services',
    detailedDescription: 'Sudhamma Technology is at the forefront of digital innovation, offering cutting-edge solutions that help businesses navigate the digital landscape. Our team of experienced developers, designers, and consultants work collaboratively to create custom software, mobile applications, and digital strategies that drive growth and efficiency for our clients across various industries.',
    services: [
      'Software Development',
      'Mobile App Development',
      'Web Design & Development',
      'Digital Transformation',
      'IT Support & Maintenance'
    ],
    operatingHours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    contactPhone: '+1 (123) 456-7894',
    specialOfferings: 'Digital strategy workshops, Technology audits, Innovation labs'
  },
  {
    id: 'consulting',
    slug: 'consulting',
    name: 'Sudhamma Consulting',
    description: 'Our consulting division offers expert advice and strategies to help businesses grow and succeed.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
    location: 'Nationwide',
    type: 'Business Consulting',
    detailedDescription: 'Sudhamma Consulting provides strategic advisory services to help businesses overcome challenges, identify opportunities, and achieve sustainable growth. Our team of experienced consultants brings expertise across various industries and functional areas, offering tailored solutions that address specific client needs. We partner with organizations of all sizes to develop and implement effective business strategies.',
    services: [
      'Strategic Planning',
      'Business Process Optimization',
      'Market Research & Analysis',
      'Financial Advisory',
      'Change Management'
    ],
    operatingHours: 'Mon-Fri: 9:00 AM - 5:30 PM',
    contactPhone: '+1 (123) 456-7895',
    specialOfferings: 'Executive coaching, Industry-specific consulting, Start-up mentoring'
  }
];

// Define the page component with correct typing for Next.js 15
type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function BusinessUnitPage({ params, searchParams }: Props) {
  // Find the business unit based on the slug
  const businessUnit = businessUnits.find(unit => unit.slug === params.slug);
  
  // If business unit not found, display a not found message
  if (!businessUnit) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">Business Unit Not Found</h1>
        <p className="text-gray-800 mb-8">The business unit you are looking for does not exist or has been moved.</p>
        <Link 
          href="/business-units" 
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          View All Business Units
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src={businessUnit.image} 
            alt={businessUnit.name} 
            fill 
            priority
            className="object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{businessUnit.name}</h1>
            <p className="text-xl">{businessUnit.description}</p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-blue-500 bg-opacity-30 text-white text-sm font-medium px-3 py-1 rounded-full border border-blue-400">
                {businessUnit.type}
              </span>
              <span className="bg-gray-500 bg-opacity-30 text-white text-sm font-medium px-3 py-1 rounded-full border border-gray-400">
                {businessUnit.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-700">About {businessUnit.name}</h2>
              <p className="text-gray-900 mb-8 text-lg leading-relaxed">
                {businessUnit.detailedDescription}
              </p>
              
              {/* Services List */}
              <h3 className="text-2xl font-bold mb-4 text-gray-700">Our Services</h3>
              <ul className="space-y-2 mb-8">
                {businessUnit.services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-900">{service}</span>
                  </li>
                ))}
              </ul>
              
              {/* Image Gallery */}
              <h3 className="text-2xl font-bold mb-4 text-gray-700">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="h-64 relative rounded-lg overflow-hidden">
                  <Image 
                    src={`https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop`} 
                    alt={`${businessUnit.name} Gallery 1`} 
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="h-64 relative rounded-lg overflow-hidden">
                  <Image 
                    src={`https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop`} 
                    alt={`${businessUnit.name} Gallery 2`} 
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Special Offerings */}
              <h3 className="text-2xl font-bold mb-4 text-gray-700">Special Offerings</h3>
              <p className="text-gray-900 mb-8">
                {businessUnit.specialOfferings}
              </p>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2 text-gray-700">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-700">Phone:</p>
                    <p className="text-gray-800">{businessUnit.contactPhone}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Email:</p>
                    <p className="text-gray-800">{businessUnit.slug}@sudhamma.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Operating Hours:</p>
                    <p className="text-gray-800">{businessUnit.operatingHours}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Interested in our services?</h3>
                <p className="text-gray-900 mb-6">
                  Contact us today to learn more about how {businessUnit.name} can help you.
                </p>
                <Link 
                  href="/contact" 
                  className="block text-center bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Business Units */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">Explore Other Business Units</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessUnits
              .filter(unit => unit.id !== businessUnit.id)
              .slice(0, 3)
              .map((unit) => (
                <div key={unit.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-48 relative">
                    <Image 
                      src={unit.image} 
                      alt={unit.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-700">{unit.name}</h3>
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
          
          <div className="text-center mt-8">
            <Link 
              href="/business-units" 
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-900 transition-colors"
            >
              View All Business Units
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
