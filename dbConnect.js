import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database connected ✅"));
        mongoose.connection.on('error', (err) => console.log("DB connection error ❌", err));

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
    }
}

export default connectDB;