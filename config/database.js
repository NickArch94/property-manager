import mongoose from "mongoose"

let connected = false

const connectDB = async () => {
    mongoose.set('strictQuery', true)

//No letting the database connect more than once!

if (connected) {
    console.log("MongoDB is already connected")
    return
}

//For connecting...

try {
    await mongoose.connect(process.env.MONGODB_URI)
    connected = true
    console.log('MongoDB connected.')

} catch (error) {
    console.error('Error connecting to MongoDB: ', error)
}
}

export default connectDB
