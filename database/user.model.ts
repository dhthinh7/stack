import { Document, model, models, Schema } from "mongoose";

export interface IUser extends Document {
  clerkId: string
  name: string
  userName: string
  email: string
  password?: string
  bio?: string
  picture: string
  location?: string
  portfolioWebsite?: string
  reputation?: string
  saved: Schema.Types.ObjectId[]
  joinedDate: Date
}

// User Schema
const UserSchema = new Schema<IUser>({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Optional field
  bio: { type: String }, // Optional field
  picture: { type: String, required: true },
  location: { type: String }, // Optional field
  portfolioWebsite: { type: String }, // Optional field
  reputation: { type: String }, // Optional field
  saved: [{ type: Schema.Types.ObjectId, ref: 'SavedItem' }], // Array of ObjectIds
  joinedDate: { type: Date, default: Date.now }, // Automatically sets to current date
});

const User = models.User || model<IUser>('User', UserSchema)

export default User