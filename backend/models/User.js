import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: {
    type: String, // Clerk user ID
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String, // Optional: if you want to store a unique username
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String, // Optional profile image
    required: false,
  },
  branch: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
