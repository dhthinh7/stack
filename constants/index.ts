import { TQuestion, TSidebarLink, TThemes } from "@/types";

export const themes: TThemes[] = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  // { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: TSidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

export const questions: TQuestion[] = [
  {
    _id: 1,
    title: "How do I learn TypeScript effectively?",
    tags: [
      { _id: 1, name: "TypeScript" },
      { _id: 2, name: "JavaScript" },
      { _id: 3, name: "Programming" },
    ],
    author: "Alice",
    upvotes: 12,
    views: 150,
    answers: 23,
    createAt: "2024-09-30T12:34:56Z",
  },
  {
    _id: 2,
    title: "What are the best practices for writing clean code?",
    tags: [
      { _id: 4, name: "Clean Code" },
      { _id: 5, name: "Best Practices" },
    ],
    author: "Bob",
    upvotes: 8,
    views: 95,
    answers: 10,
    createAt: "2024-09-29T09:20:45Z",
  },
  {
    _id: 3,
    title: "How can I improve my React performance?",
    tags: [
      { _id: 6, name: "React" },
      { _id: 7, name: "Performance" },
    ],
    author: "Charlie",
    upvotes: 15,
    views: 200,
    answers: 9,
    createAt: "2024-09-28T15:15:30Z",
  },
  {
    _id: 4,
    title: "What is the difference between SQL and NoSQL databases?",
    tags: [
      { _id: 8, name: "Databases" },
      { _id: 9, name: "SQL" },
      { _id: 10, name: "NoSQL" },
    ],
    author: "David",
    upvotes: 5,
    views: 120,
    answers: 3,
    createAt: "2024-09-27T11:00:00Z",
  },
  {
    _id: 5,
    title: "What are the latest trends in web development?",
    tags: [
      { _id: 11, name: "Web Development" },
      { _id: 12, name: "Trends" },
    ],
    author: "Eve",
    upvotes: 10,
    views: 180,
    answers: 4,
    createAt: "2024-09-26T08:30:00Z",
  },
];