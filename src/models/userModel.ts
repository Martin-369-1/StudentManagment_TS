import { Model, Schema, Document, model } from "mongoose";

interface IUser extends Document {
  username: string;
  password: string;
  email: string;
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = model<IUser>("users", UserSchema);

export default User;
