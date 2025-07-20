import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: {
    type: String, 
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String, 
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String, 
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
