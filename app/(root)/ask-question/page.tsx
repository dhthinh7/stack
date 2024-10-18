import React from "react";
import Question from "@/components/forms/Question";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.actions";

const AskQuestion = async () => {
  // const isUserLoggedIn = false;
  const { userId } = auth()

  if (!userId) redirect('/sign-in')

  const userMongo = await getUserById(userId)
  console.log('userMongo', JSON.stringify(userMongo));

  return <div>
    <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
    <div>
      <Question userId={JSON.stringify(userMongo._id)} />
    </div>
  </div>;
};

export default AskQuestion;
