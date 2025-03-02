import mongoose, { Document, Schema } from "mongoose";
import { TaskPriorityEnumType, TaskStatusEnumType } from "../enums/task.enum";
import { generateInviteCode, generateTaskCode } from "../utils/uuid";

export interface TaskDocument extends Document {
  taskCode: string;
  title: string;
  description: string | null;
  project: mongoose.Types.ObjectId;
  workspace: mongoose.Types.ObjectId;
  status: TaskStatusEnumType;
  priority: TaskPriorityEnumType;
  assignedTo: mongoose.Types.ObjectId | null;
  createdBy: mongoose.Types.ObjectId;
  dueDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const taskSchema = new Schema<TaskDocument>({
  taskCode: {
    type: String,
    unique: true,
    default: generateTaskCode,
  },
});
