import mongoose from 'mongoose'

let isConnected: boolean = false

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true)
  if (!process.env.MONGODB_URL) return console.log('Missing MongoDB')

  if (isConnected) {
    return console.log('Mongoose is connected')
  } else {
    try {
      await mongoose.connect(process.env.MONGODB_URL, {
        dbName: process.env.DB_NAME
      })

      isConnected = true
      console.log('Mongoose is connected');
      
    } catch (error) {
      console.log('Mongoose connection fail: ' + error)
    }
  }
}