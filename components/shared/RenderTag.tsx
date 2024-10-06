import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import ConditionRender from "./ConditionRender";

type TRenderTag = {
  _id: number
  name: string
  totalQuestions?: number
  showCount?: boolean
}

const RenderTag = ({ _id, name, totalQuestions, showCount }: TRenderTag) => {
  return <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
    <Badge className="subtle-medium background-light800_dark300 text-light400_light500  rounded-[10px] border-none px-4 py-2 uppercase">{name}</Badge>
    <ConditionRender condition={showCount && !!totalQuestions}>
      <p className="small-medium text-dark500_light700">{totalQuestions}</p>
    </ConditionRender>
  </Link>
};

export default RenderTag;
