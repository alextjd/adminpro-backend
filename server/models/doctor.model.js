import { model, Schema } from 'mongoose';

const DoctorSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String },
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  hospital: { type: Schema.Types.ObjectId, ref: 'Hospital', required: true },
});

export default model('Doctor', DoctorSchema);
