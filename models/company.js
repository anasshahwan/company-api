const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  company_code: { type: String, required: true, unique: true },
  company_name: { type: String, required: true },
  company_ceo: { type: String, required: true },
  company_turnover: { type: String, required: true },
  company_website: { type: String, required: true },
  stock_exchange: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Company", companySchema);
