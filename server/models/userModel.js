import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      min: 6,
      max: 64,
    },
    picture: {
      type: String,
      default: "/avatar.png",
    },
    role: {
      type: [String],
      default: "Subscriber",
      enum: ["Subscriber", "Instructor", "Admin"],
    },
    stripe_account_id: {},
    stripe_seller: {},
    stripeSession: {},
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
