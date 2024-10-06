import { TQuestion } from "@/types";
import Link from "next/link";
import React from "react";
import RenderTag from "../RenderTag";
import Metric from "../Metric";
import { formatAndDivideNumber } from "@/lib/utils";

type TQuestionCardProp = {
  question: TQuestion
}
const QuestionCard = ({ question }: TQuestionCardProp) => {
  return <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
    <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
      <div>
        <span className="subtle-regular text-dark400_light700_line">{question.createAt}</span>
        <Link href={`/question/${question._id}`}>
          <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1">
            {question.title}
          </h3>
        </Link>
      </div>
    </div>
    <div className="mt-3.5 flex flex-wrap gap-2">
      {question.tags.map(tag => (
        <RenderTag key={tag._id} _id={tag._id} name={tag.name} totalQuestions={1} />
      ))}
    </div>

    <div className="flex-between mt-6 w-full flex-wrap gap-3">
      <div>Author</div>
      <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="Upvotes"
          value={formatAndDivideNumber(question.upvotes)}
          title=" Votes"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={formatAndDivideNumber(question.answers)}
          title=" Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatAndDivideNumber(question.views)}
          title=" Views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
    </div>
  </div>;
};

export default QuestionCard;
