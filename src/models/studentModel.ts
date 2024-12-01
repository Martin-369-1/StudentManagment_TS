import { Schema, model, Document, Types } from "mongoose";

interface IStudent extends Document {
  userID: Types.ObjectId;
  name: string;
  DOB: Date;
  gender: "male" | "female";
  admissionNo: number;
  grade: number;
  enrollmentDate: Date;
}

const StudentSchema = new Schema<IStudent>({
  userID: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  admissionNo: {
    type: Number,
    required: true,
    unique: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  enrollmentDate: {
    type: Date,
    required: true,
  },
});

const Student = model<IStudent>("students", StudentSchema);

export default Student;
