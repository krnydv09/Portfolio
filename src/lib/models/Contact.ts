import mongoose from 'mongoose';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const contactSchema = new mongoose.Schema<ContactMessage>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Contact || mongoose.model<ContactMessage>('Contact', contactSchema); 