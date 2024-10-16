"use server"

import { connectToDatabase } from "../mongoose"

export async function createQuestion(params) {
  try {
    // Connect to DB
    connectToDatabase()
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    // console.log('response', JSON.stringify(response.json()))
  } catch (error) {
    // 
  }
}