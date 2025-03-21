
import connectToDatabase from '@/lib/mongodb';
import Course from '@/models/Course';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    
    // Fetch distinct categories from Course collection
    const categories = await Course.distinct('category');
    
    // Format response to match the frontend expected format
    const formattedCategories = [
      { id: 'all', name: 'All Categories' },
      ...categories.map(category => ({
        id: category.toLowerCase(),
        name: category
      }))
    ];
    
    return NextResponse.json(formattedCategories);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
