import { TFilters } from "@/types";

export const answerFilters: TFilters[] = [
  { name: "Highest Upvotes", value: "highestUpvotes" },
  { name: "Lowest Upvotes", value: "lowestUpvotes" },
  { name: "Most Recent", value: "recent" },
  { name: "Oldest", value: "old" },
];

export const userFilters: TFilters[] = [
  { name: "New Users", value: "new_users" },
  { name: "Old Users", value: "old_users" },
  { name: "Top Contributors", value: "top_contributors" },
];

export const questionFilters: TFilters[] = [
  { name: "Most Recent", value: "most_recent" },
  { name: "Oldest", value: "oldest" },
  { name: "Most Voted", value: "most_voted" },
  { name: "Most Viewed", value: "most_viewed" },
  { name: "Most Answered", value: "most_answered" },
];

export const tagFilters: TFilters[] = [
  { name: "Popular", value: "popular" },
  { name: "Recent", value: "recent" },
  { name: "Name", value: "name" },
  { name: "Old", value: "old" },
];

export const homePageFilters: TFilters[] = [
  { name: "Newest", value: "newest" },
  { name: "Recommended", value: "recommended" },
  { name: "Frequent", value: "frequent" },
  { name: "Unanswered", value: "unanswered" },
];

export const globalSearchFilters: TFilters[] = [
  { name: "Question", value: "question" },
  { name: "Answer", value: "answer" },
  { name: "User", value: "user" },
  { name: "Tag", value: "tag" },
];