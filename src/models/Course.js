
import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this course'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for this course'],
  },
  longDescription: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: [true, 'Please provide an image URL for this course'],
  },
  category: {
    type: String,
    required: [true, 'Please specify a category for this course'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  instructor: {
    type: String,
    required: false,
    default: 'Orbi Education Team',
  },
  duration: {
    type: String,
    required: false,
    default: '4 weeks',
  },
  lessons: {
    type: Number,
    required: false,
    default: 12,
  },
  students: {
    type: Number,
    required: false,
    default: 0,
  },
  rating: {
    type: Number,
    required: false,
    default: 4.5,
  },
  price: {
    type: String,
    required: false,
    default: 'Free',
  },
  curriculum: [{
    title: String,
    lessons: [String],
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);
