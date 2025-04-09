import { Schema, model, models } from "mongoose";


const driverProfileSchema = new Schema({
    // Personal Information
    personalInfo: {
        cnicNumber: {
            type: String,
            required: true,
            unique: true
        },
        dateOfBirth: {
            type: String,
            required: true
        }
    },
    
    // License Information
    licenseInfo: {
        licenseNumber: {
            type: String,
            required: true,
            unique: true
        },
        licenseExpiry: {
            type: String,
            required: true
        },
        licenseFront: {
            type: String,
            required: true
        },
        licenseBack: {
            type: String,
            required: true
        }
    },
    
    // Vehicle Information
    vehicleInfo: {
        type: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        },
        registrationDocument: {
            type: String,
            required: true
        }
    },
    
    // Documents
    documents: {
        cnicFront: {
            type: String,
            required: true
        },
        cnicBack: {
            type: String,
            required: true
        }
    },
    
    // Status
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationStatus: {
        type: String,
        default: 'pending'
    },
    rejectionReason: {
        type: String
    },
    
    // Operational
    isOnline: {
        type: Boolean,
        default: false
    },
    joinedDate: {
        type: Date,
        default: Date.now
    },
    
    // Payment
    paymentDetails: {
        accountName: String,
        accountNumber: String,
        bankName: String,
        iban: String
    }
});

const userSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
        },
       profilePicture: {
        type: String,
        default: null,
        },

        currentProfileStatus: {
            type: String,
            enum: ['driver', 'passenger'],
        },
        isDriver: {
            type: Boolean,
            default: false,
        },
        driverProfile: {
            type: driverProfileSchema,
            default: null,
        },
        // New field to track driver's live location
        location: {
            type: {
                type: String,
                enum: ['Point'], // GeoJSON type
                // required: true,
                default: 'Point',
            },
            coordinates: {
                type: [Number], // [longitude, latitude]
                // required: true,
                default: [0, 0], // Default location
            },
        },
        locationUpdatedAt: {
            type: Date,
            default: Date.now, // Timestamp for when the location was last updated
        },
    },
    {
        timestamps: true,
    }
);

// Create a geospatial index on the `location` field for efficient queries
userSchema.index({ location: '2dsphere' });

const User = models.User || model("User", userSchema);

export default User;
