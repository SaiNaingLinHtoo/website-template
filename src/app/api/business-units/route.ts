import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Mock data for business units (same as in the business units page)
const businessUnits = [
  {
    id: 'hospitality',
    slug: 'hospitality',
    name: 'Sudhamma Hospitality',
    description: 'Our hospitality division operates premium hotels and resorts with a focus on exceptional guest experiences and comfort.',
    image: '/business-hospitality.jpg',
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
    image: '/business-retail.jpg',
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
    image: '/business-food.jpg',
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
    image: '/business-logistics.jpg',
    location: 'Regional',
    type: 'Logistics Services',
    detailedDescription: 'Sudhamma Logistics specializes in comprehensive supply chain solutions, transportation services, and logistics management. We help businesses optimize their supply chains, reduce costs, and improve efficiency through our network of transportation resources, warehousing facilities, and logistics expertise. Our technology-driven approach ensures reliable tracking and timely delivery.',
    services: [
      'Freight Transportation',
      'Warehousing & Distribution',
      'Supply Chain Consulting',
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
    image: '/business-tech.jpg',
    location: 'Tech Hubs',
    type: 'Technology Services',
    detailedDescription: 'Sudhamma Technology is at the forefront of digital innovation, offering cutting-edge solutions that help businesses navigate the digital landscape. Our team of experienced developers, designers, and consultants work collaboratively to create custom software, mobile applications, and digital strategies that drive growth and efficiency for our clients across various industries.',
    services: [
      'Custom Software Development',
      'Mobile App Development',
      'Web Development & Design',
      'Digital Transformation Consulting',
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
    image: '/business-consulting.jpg',
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

export async function GET(request: NextRequest) {
  try {
    // Get the URL parameters
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    
    // If a slug is provided, return the specific business unit
    if (slug) {
      const businessUnit = businessUnits.find(unit => unit.slug === slug);
      
      if (!businessUnit) {
        return NextResponse.json(
          { error: 'Business unit not found' },
          { status: 404 }
        );
      }
      
      return NextResponse.json(businessUnit);
    }
    
    // Otherwise, return all business units
    return NextResponse.json(businessUnits);
    
  } catch (error) {
    console.error('Error fetching business units:', error);
    
    return NextResponse.json(
      { error: 'Failed to fetch business units. Please try again later.' },
      { status: 500 }
    );
  }
}
