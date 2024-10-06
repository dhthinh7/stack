import React from "react";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Filter from "@/components/shared/Filter";
import { homePageFilters } from "@/constants/filters";
import HomeFilters from "@/components/shared/home/HomeFilters";
import { questions } from "@/constants";
import NoResultFound from "@/components/shared/NoResultFound";
import QuestionCard from "@/components/shared/cards/QuestionCard";

const Home = () => {

  return <section>
    <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
      <h1 className="h1-bold text-dark100_light900">All Questions</h1>

      <Link href="/ask-question" className="flex justify-end max-sm:w-full">
        <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
          Ask a Question
        </Button>
      </Link>
    </div>

    <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
      <LocalSearchBar route="/" iconPosition="left" placeHolder="Search for questions" imgSrc="/assets/icons/search.svg" otherClasses="flex-1" />
      <Filter filters={homePageFilters} className="min-h-[56px] sm:min-w-[170px]" containerClasses="hidden lg:block" />
    </div>

    <HomeFilters />

    <div className="mt-10 flex w-full flex-col gap-6">
      {questions.length > 0 ? (
        questions.map(question => (
          <QuestionCard key={question._id} question={question} />
        ))
      ) : (
        <NoResultFound
          title="There’s no question to show"
          description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
          link="/ask-question"
          linkTitle="Ask a Question" />
      )}
    </div>
  </section>;
};

export default Home;
