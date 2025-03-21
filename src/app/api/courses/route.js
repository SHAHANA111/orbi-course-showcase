
import connectToDatabase from '@/lib/mongodb';
import Course from '@/models/Course';
import { NextResponse } from 'next/server';

// GET all courses
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const featured = searchParams.get('featured');

    await connectToDatabase();

    let query = {};
    
    // Filter by category if specified
    if (category && category !== 'all') {
      query.category = category;
    }
    
    // Filter by search term if specified
    if (search) {
      query = {
        ...query,
        $or: [
          { title: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
        ],
      };
    }
    
    // Filter featured courses if specified
    if (featured === 'true') {
      query.featured = true;
    }

    const courses = await Course.find(query);
    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST create a new course
export async function POST(request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    const course = await Course.create(body);
    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
