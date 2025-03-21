
import connectToDatabase from '@/lib/mongodb';
import Course from '@/models/Course';
import { NextResponse } from 'next/server';

// GET a single course by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectToDatabase();
    
    const course = await Course.findById(id);
    
    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }
    
    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT update a course
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    await connectToDatabase();
    
    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      body,
      { new: true, runValidators: true }
    );
    
    if (!updatedCourse) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }
    
    return NextResponse.json(updatedCourse);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE a course
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await connectToDatabase();
    
    const deletedCourse = await Course.findByIdAndDelete(id);
    
    if (!deletedCourse) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Course deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
