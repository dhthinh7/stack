"use server"

import { ICreateQuestion } from "../model/question"
import { connectToDatabase } from "../mongoose"
import Tag, { ITag } from "@/database/tag.model"
import Question, { IQuestion } from "@/database/question.model"

export async function createQuestion(params: ICreateQuestion) {
  try {
    // Connect to DB
    connectToDatabase()
    const { title, content, tags, author, path } = params

    // Create the question to get id of question
    const question: IQuestion = await Question.create({
      title,
      content,
      author: JSON.parse(author),
      createdAt: Date.now()
    })

    const tagDocument = []
    // Create the tag and get theme if they already exist
    // Update tag with question id
    for (const tag of tags) {
      const existingTag: ITag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, 'i') } },
        {
          $setOnInsert: { name: tag },
          $push: {
            question: question._id
          }
        },
        { upsert: true, new: true }
      )

      tagDocument.push(existingTag._id)
    }

    // Update tag list in question
    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocument } }
    })

    const questionResponse = await Question.findOne({
      _id: question._id
    })

    return JSON.parse(JSON.stringify(questionResponse))

  } catch (error) {
    console.log('createQuestion error', error);

  }
}