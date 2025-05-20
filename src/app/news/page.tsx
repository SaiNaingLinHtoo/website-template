import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata: Metadata = {
  title: 'News & Updates - Sudhamma Business Group',
  description: 'Stay updated with the latest news, events, and announcements from Sudhamma Business Group.',
  keywords: ['news', 'updates', 'events', 'announcements', 'sudhamma'],
};

// Mock data for news items
const newsItems = [
  {
    id: 'expansion-announcement',
    slug: 'expansion-announcement',
    title: 'Sudhamma Expands Operations to New Region',
    excerpt: 'We\'re excited to announce the expansion of our operations to serve customers in a new region...',
    content: 'Sudhamma Business Group is proud to announce the expansion of our operations to the Eastern region, marking a significant milestone in our growth strategy. This expansion will allow us to better serve customers in this area with our full range of services and products. The new regional headquarters will be located in the heart of the business district, providing convenient access for clients and partners. This move is part of our commitment to reaching more communities and delivering exceptional value to customers across the country.',
    date: 'May 15, 2025',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=500&fit=crop',
    author: 'John Smith',
    category: 'Company News'
  },
  {
    id: 'partnership-announcement',
    slug: 'partnership-announcement',
    title: 'New Partnership Announcement',
    excerpt: 'Sudhamma Business Group is proud to announce a strategic partnership with...',
    content: 'Sudhamma Business Group is excited to announce a strategic partnership with GlobalTech Solutions, a leading technology provider in the industry. This collaboration will enhance our technological capabilities and allow us to offer more innovative solutions to our clients. By combining our expertise with GlobalTech\'s cutting-edge technology, we aim to revolutionize how businesses operate in the digital age. The partnership will focus on developing integrated solutions that address complex business challenges while improving efficiency and customer experience.',
    date: 'May 5, 2025',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=500&fit=crop',
    author: 'Sarah Johnson',
    category: 'Partnerships'
  },
  {
    id: 'sustainability-initiative',
    slug: 'sustainability-initiative',
    title: 'Launching Our New Sustainability Initiative',
    excerpt: 'Sudhamma Business Group commits to environmental sustainability with new comprehensive program...',
    content: 'Today, Sudhamma Business Group announces the launch of our comprehensive sustainability initiative, "Sudhamma Goes Green." This program represents our commitment to reducing our environmental footprint across all business units. Key components include transitioning to renewable energy sources, implementing waste reduction strategies, and adopting eco-friendly practices throughout our operations. We\'ve set ambitious targets to reduce carbon emissions by 30% by 2030 and achieve carbon neutrality by 2040. This initiative reflects our responsibility to the planet and future generations.',
    date: 'April 22, 2025',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop',
    author: 'Michael Chen',
    category: 'Sustainability'
  },
  {
    id: 'community-project',
    slug: 'community-project',
    title: 'Supporting Local Communities Through Education',
    excerpt: 'Our new community project aims to provide educational resources to underserved areas...',
    content: 'Sudhamma Business Group is proud to announce the launch of our "Education for All" initiative, a community project focused on providing educational resources to underserved areas. Through this program, we will be donating computers, books, and learning materials to local schools, as well as offering mentorship opportunities with our team members. Education is a powerful tool for change, and we believe in investing in the future of our communities. The program will initially launch in five locations with plans to expand to additional communities in the coming years.',
    date: 'April 10, 2025',
    image: 'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?w=800&h=500&fit=crop',
    author: 'Lisa Wong',
    category: 'Community'
  },
  {
    id: 'award-recognition',
    slug: 'award-recognition',
    title: 'Sudhamma Receives Industry Excellence Award',
    excerpt: 'We\'re honored to be recognized for our commitment to quality and innovation...',
    content: 'Sudhamma Business Group is honored to announce that we have been awarded the prestigious Industry Excellence Award for our outstanding contributions to the business sector. This recognition celebrates our commitment to quality, innovation, and customer satisfaction across all our business units. The award was presented at the annual Industry Leadership Conference, where our CEO delivered a keynote address on the importance of maintaining high standards while embracing innovation. We share this achievement with our dedicated team members whose hard work and passion make our success possible.',
    date: 'March 28, 2025',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=500&fit=crop',
    author: 'John Smith',
    category: 'Awards'
  },
  {
    id: 'product-launch',
    slug: 'product-launch',
    title: 'Introducing Our Latest Product Line',
    excerpt: 'Discover our newest innovations designed to meet evolving customer needs...',
    content: 'Sudhamma Business Group is excited to announce the launch of our latest product line, designed to meet the evolving needs of our customers. After months of research and development, we\'ve created a range of products that combine functionality, quality, and innovation. The new offerings include advanced technological solutions for businesses, eco-friendly consumer products, and specialized services that address emerging market demands. These products represent our commitment to staying at the forefront of industry developments while maintaining our core values of excellence and customer satisfaction.',
    date: 'March 15, 2025',
    image: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=500&fit=crop',
    author: 'Sarah Johnson',
    category: 'Product News'
  }
];

export default function NewsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=500&fit=crop" 
            alt="News and Updates" 
            fill 
            priority
            className="object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl">Stay informed about the latest developments, announcements, and events from Sudhamma Business Group.</p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Featured News Item */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-700">Featured Story</h2>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto relative">
                  <Image 
                    src={newsItems[0].image} 
                    alt={newsItems[0].title} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {newsItems[0].category}
                    </span>
                    <span className="text-gray-700 text-sm ml-4">{newsItems[0].date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-700">{newsItems[0].title}</h3>
                  <p className="text-gray-800 mb-6">{newsItems[0].content.substring(0, 200)}...</p>
                  <Link 
                    href={`/news/${newsItems[0].slug}`} 
                    className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
                  >
                    Read Full Story
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* News Grid */}
          <h2 className="text-3xl font-bold mb-8 text-gray-700">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(1).map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-gray-700 text-sm ml-2">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-700">{item.title}</h3>
                  <p className="text-gray-800 mb-4">{item.excerpt}</p>
                  <Link 
                    href={`/news/${item.slug}`} 
                    className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
                  >
                    Read More
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

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-700">Subscribe to Our Newsletter</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-700">
            Stay updated with the latest news, events, and announcements from Sudhamma Business Group.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
