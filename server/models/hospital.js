import { model, Schema } from 'mongoose';

const HospitalSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String },
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
});

export default model('Hospital', HospitalSchema);
