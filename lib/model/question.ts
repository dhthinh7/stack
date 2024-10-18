import { IRevalidateSystem } from "."

export interface IQuestion {
  title: string
  content: string
  tags: string[]
  views: number
  upVotes: string[]
  downVotes: string[]
  author: string
  answers: string[]
  createdAt: Date
}

export interface ICreateQuestion extends IRevalidateSystem, Omit<IQuestion, 'upVotes' | 'downVotes' | 'views' | 'answers' | 'createdAt'> { }
