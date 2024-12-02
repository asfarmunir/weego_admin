import { Schema,model,models } from 'mongoose';

const bookingSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    property: { type: Schema.Types.ObjectId, ref: 'Property' },
    bookingFirstname: { type: String,  },
    bookingLastname: { type: String,  },
    bookingEmail: { type: String,  },
    bookingPhone: { type: String,  },
    totalAmount: { type: Number,  },
    checkIn: { type: Date,  },
    checkOut: { type: Date,  },
    guests: { type: Number,  },
    reviewed: { type: Boolean, default: false },
    paymentStatus: { type: String, enum: ['pending', 'completed'], default: 'pending' },    
}, { timestamps: true });

const Booking = models.Booking || model('Booking', bookingSchema);

export default Booking;