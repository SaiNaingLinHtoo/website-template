import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// Mock data for news items (same as in the news page)
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
    id: 'award-recognition',
    slug: 'award-recognition',
    title: 'Award Recognition for Excellence',
    excerpt: 'Sudhamma Business Group commits to environmental sustainability with new comprehensive program...',
    content: 'Today, Sudhamma Business Group announces the launch of our comprehensive sustainability initiative, "Sudhamma Goes Green." This program represents our commitment to reducing our environmental footprint across all business units. Key components include transitioning to renewable energy sources, implementing waste reduction strategies, and adopting eco-friendly practices throughout our operations. We\'ve set ambitious targets to reduce carbon emissions by 30% by 2030 and achieve carbon neutrality by 2040. This initiative reflects our responsibility to the planet and future generations.',
    date: 'April 22, 2025',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop',
    author: 'Michael Chen',
    category: 'Awards'
  }
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const newsItem = newsItems.find(item => item.slug === params.slug);
  
  if (!newsItem) {
    return {
      title: 'News Item Not Found',
      description: 'The requested news item could not be found.'
    };
  }
  
  return {
    title: `${newsItem.title} - Sudhamma Business Group`,
    description: newsItem.excerpt,
    keywords: ['news', 'updates', 'sudhamma', newsItem.category.toLowerCase()],
  };
}

// Define the page component with correct typing for Next.js 15
type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function NewsItemPage({ params, searchParams }: Props) {
  // Find the news item based on the slug
  const newsItem = newsItems.find(item => item.slug === params.slug);
  
  // If news item not found, display a not found message
  if (!newsItem) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">News Item Not Found</h1>
        <p className="text-gray-700 mb-8">The news item you are looking for does not exist or has been moved.</p>
        <Link 
          href="/news" 
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Back to News
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
            src={newsItem.image} 
            alt={newsItem.title} 
            fill 
            priority
            className="object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                {newsItem.category}
              </span>
              <span className="bg-gray-700 text-white text-sm font-medium px-3 py-1 rounded-full">
                {newsItem.date}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{newsItem.title}</h1>
            <p className="text-lg">By {newsItem.author}</p>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <p className="text-xl font-semibold mb-6 text-gray-700">{newsItem.excerpt}</p>
                
                {/* Split the content into paragraphs for better readability */}
                {newsItem.content.split('. ').map((paragraph, index, array) => (
                  <p key={index} className="mb-4 text-gray-700">
                    {index < array.length - 1 ? `${paragraph}.` : paragraph}
                  </p>
                ))}
              </article>
              
              {/* Share Links */}
              {/* <div className="mt-12 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold mb-4 text-gray-700">Share this article:</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-700 hover:text-blue-600">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-700 hover:text-blue-400">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-700 hover:text-blue-800">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div> */}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2 text-gray-700">Recent News</h3>
                <div className="space-y-4">
                  {newsItems
                    .filter(item => item.id !== newsItem.id)
                    .slice(0, 3)
                    .map((item) => (
                      <div key={item.id} className="flex items-start">
                        <div className="w-16 h-16 relative flex-shrink-0">
                          <Image 
                            src={item.image} 
                            alt={item.title} 
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm text-gray-500">{item.date}</p>
                          <Link 
                            href={`/news/${item.slug}`} 
                            className="font-medium hover:text-blue-600 text-gray-600"
                          >
                            {item.title}
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link 
                    href="/news" 
                    className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
                  >
                    View All News
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-blue-800 ">Subscribe to Updates</h3>
                <p className="text-gray-900 mb-4">
                  Stay informed about the latest news and announcements from Sudhamma Business Group.
                </p>
                <NewsletterForm />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
