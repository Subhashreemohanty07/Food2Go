import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://adit2002ad:gfRPeNrlNVsBHRMh@cluster0.ad9g5i1.mongodb.net/food-del"
    )
    .then(() => console.log("DB conncted"));
};
