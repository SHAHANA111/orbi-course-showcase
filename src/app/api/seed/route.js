
import connectToDatabase from '@/lib/mongodb';
import Course from '@/models/Course';
import { NextResponse } from 'next/server';

// Sample course data
const sampleCourses = [
  {
    title: "Dropshipping 101: Getting Started",
    description: "Learn the fundamentals of dropshipping and set up your first store on Orbi.pk.",
    longDescription: "This comprehensive course covers everything you need to know to start a successful dropshipping business on Orbi.pk. From selecting profitable products to setting up your store, managing orders, and scaling your business, you'll learn the proven strategies used by successful dropshippers. By the end of this course, you'll have a fully operational dropshipping business ready to make sales.",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "Dropshipping",
    featured: true,
    instructor: "Ahmed Khan",
    duration: "6 weeks",
    lessons: 24,
    students: 1240,
    rating: 4.8,
    price: "Free",
    curriculum: [
      {
        title: "Getting Started with Dropshipping",
        lessons: [
          "Introduction to E-commerce & Dropshipping",
          "How Dropshipping Works on Orbi.pk",
          "Setting Up Your Orbi Seller Account"
        ]
      },
      {
        title: "Finding Profitable Products",
        lessons: [
          "Market Research Fundamentals",
          "Product Selection Criteria",
          "Analyzing Competition",
          "Validating Product Ideas"
        ]
      },
      {
        title: "Setting Up Your Store",
        lessons: [
          "Store Design Principles",
          "Creating Compelling Product Listings",
          "Pricing Strategies",
          "Payment Processing"
        ]
      },
      {
        title: "Managing Operations",
        lessons: [
          "Order Fulfillment Process",
          "Customer Service Best Practices",
          "Returns & Refunds Handling",
          "Scaling Your Business"
        ]
      }
    ]
  },
  {
    title: "Vendor Negotiation Mastery",
    description: "Develop your negotiation skills and build better relationships with suppliers.",
    longDescription: "Learn how to negotiate effectively with vendors to secure better prices, terms, and service levels. This course covers proven negotiation techniques specifically tailored for e-commerce business owners who want to improve their vendor relationships and boost their profit margins.",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5lZ290aWF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    category: "Vendor Relations",
    featured: false,
    instructor: "Sarah Ahmed",
    duration: "4 weeks",
    lessons: 16,
    students: 890,
    rating: 4.7,
    price: "Free",
    curriculum: [
      {
        title: "Negotiation Fundamentals",
        lessons: [
          "Understanding the Negotiation Process",
          "Preparing for Vendor Negotiations",
          "Key Negotiation Styles & Strategies"
        ]
      },
      {
        title: "Building Vendor Relationships",
        lessons: [
          "Communication Techniques",
          "Cultural Considerations in Global Sourcing",
          "Building Long-term Partnerships"
        ]
      }
    ]
  },
  {
    title: "Import Essentials: From Source to Warehouse",
    description: "Navigate international sourcing, shipping, customs, and local logistics.",
    longDescription: "A complete guide to importing products from international suppliers to your local warehouse. Learn about finding reliable suppliers, navigating customs regulations, managing shipping logistics, and optimizing your supply chain for efficiency and cost-effectiveness.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1wb3J0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    category: "Importing",
    featured: false,
    instructor: "Ali Raza",
    duration: "8 weeks",
    lessons: 32,
    students: 750,
    rating: 4.9,
    price: "Free",
    curriculum: [
      {
        title: "International Sourcing",
        lessons: [
          "Finding Reliable Suppliers",
          "Evaluating Product Quality",
          "Sample Ordering and Verification"
        ]
      },
      {
        title: "Shipping & Logistics",
        lessons: [
          "International Shipping Methods",
          "Documentation Requirements",
          "Customs Clearance Procedures",
          "Local Transportation Options"
        ]
      }
    ]
  },
  {
    title: "Mastering the Orbi.pk Marketplace",
    description: "Learn how to optimize your product listings, manage inventory, and increase sales on Orbi.pk.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    category: "Direct Selling",
    featured: true,
    instructor: "Fatima Khan",
    duration: "5 weeks",
    lessons: 20,
    students: 1560,
    rating: 4.6,
    price: "Free"
  },
  {
    title: "E-commerce Marketing Strategies",
    description: "Drive traffic and convert visitors into customers with proven marketing techniques.",
    image: "https://images.unsplash.com/photo-1565698764020-27d557fd5af0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Marketing",
    featured: true,
    instructor: "Zainab Malik",
    duration: "6 weeks",
    lessons: 24,
    students: 2100,
    rating: 4.8,
    price: "Free"
  },
  {
    title: "Advanced Dropshipping Techniques",
    description: "Scale your dropshipping business with automation, customer service, and retention strategies.",
    image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "Dropshipping",
    featured: false,
    instructor: "Omar Hassan",
    duration: "7 weeks",
    lessons: 28,
    students: 950,
    rating: 4.7,
    price: "Free"
  },
  {
    title: "Supply Chain & Vendor Management",
    description: "Build resilient supply chains and manage multiple vendor relationships effectively.",
    image: "https://images.unsplash.com/photo-1570648349256-148cd42e3ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VwcGx5JTIwY2hhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "Vendor Relations",
    featured: false,
    instructor: "Hamza Ali",
    duration: "6 weeks",
    lessons: 24,
    students: 680,
    rating: 4.5,
    price: "Free"
  },
  {
    title: "Psychology of Selling Online",
    description: "Understanding customer behavior and optimizing your store for higher conversions.",
    image: "https://images.unsplash.com/photo-1521118702313-63fca89fe771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBzeWNob2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "Direct Selling",
    featured: false,
    instructor: "Ayesha Khan",
    duration: "4 weeks",
    lessons: 16,
    students: 1200,
    rating: 4.9,
    price: "Free"
  }
];

export async function GET() {
  try {
    await connectToDatabase();
    
    // Clear existing courses
    await Course.deleteMany({});
    
    // Insert sample courses
    await Course.insertMany(sampleCourses);
    
    return NextResponse.json({ 
      message: 'Database seeded successfully',
      count: sampleCourses.length
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
