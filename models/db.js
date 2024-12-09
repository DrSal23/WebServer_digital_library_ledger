const mongoose = require('mongoose');

/**
 * Connects to MongoDB database.
 */
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/libraryLedger', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
