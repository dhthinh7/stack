import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

type THotQuestions = {
  _id: number
  title: string
}

type TTags = {
  _id: number
  name: string
  totalQuestions: number
}

const hotQuestions: THotQuestions[] = [
  { _id: 1, title: 'Would it be appropriate to point out an error in another paper during a referee report?' },
  { _id: 2, title: 'How can an airconditioning machine exist?' },
  { _id: 3, title: 'Interrogated every time crossing UK Border as citizen' },
  { _id: 4, title: 'Low digit addition generator' },
  { _id: 5, title: 'What is an example of 3 numbers that do not make up a vector?' },
]

const popularTags: TTags[] = [
  { _id: 1, name: 'javascript', totalQuestions: 3 },
  { _id: 1, name: 'react', totalQuestions: 5 },
  { _id: 1, name: 'next', totalQuestions: 2 },
  { _id: 1, name: 'vue', totalQuestions: 7 },
]

const RightSidebar = () => {
  return <section className="background-light900_dark200 light-border light-border-sticky left-0 top-0 flex min-h-[100dvh] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-lg:hidden lg:w-[350px]">
    <div>
      <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
      <div className="mt-7 flex w-full flex-col gap-[30px]">
        {hotQuestions.map(question => (
          <Link key={question._id} href={`questions/${question._id}`} className="flex cursor-pointer items-center justify-between gap-7">
            <p className="body-medium text-dark500_light700">{question.title}</p>
            <Image src='/assets/icons/chevron-right.svg' alt="icon" width={20} height={20} />
          </Link>
        ))}
      </div>
    </div>
    <div className="mt-16">
      <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
      <div className="mt-7 flex w-full flex-col gap-[30px]">
        {popularTags.map(tag => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} totalQuestions={tag.totalQuestions} showCount={true} />
        ))}
      </div>
    </div>
  </section>
};

export default RightSidebar;
