const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  //sub-Document collection. array of RecipientSchema Object
  //array of records that conform to the recipient schema.
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  //_user is reference feild.
  //servey is assigned to User who owns this record.
  //ref: User is the reference of users are belong to User Collection
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);
