import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        }
    },
    {
        timestamp: true,
    })

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)

export default Contact;
