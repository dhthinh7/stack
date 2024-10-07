import { BADGE_CRITERIA } from "@/constants"

export type TTheme = 'dark' | 'light' | 'system'

export type TThemes = {
  value: TTheme
  label: string
  icon: string
}

export type TSidebarLink = {
  imgURL: string;
  route: string;
  label: string;
}

export interface Job {
  id?: string;
  employer_name?: string;
  employer_logo?: string | undefined;
  employer_website?: string;
  job_employment_type?: string;
  job_title?: string;
  job_description?: string;
  job_apply_link?: string;
  job_city?: string;
  job_state?: string;
  job_country?: string;
}

export interface Country {
  name: {
    common: string;
  };
}

export interface ParamsProps {
  params: { id: string };
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

export interface BadgeCounts {
  GOLD: number;
  SILVER: number;
  BRONZE: number;
}

export type BadgeCriteriaType = keyof typeof BADGE_CRITERIA;

export type TFilters = {
  name: string
  value: string
}

export type TTag = {
  _id: number
  name: string
}

export type TAuthor = {
  _id: number
  name: string
}

export type TQuestion = {
  _id: number
  title: string
  tags: TTag[]
  author: TAuthor
  upvotes: number
  views: number
  answers: number
  createAt: Date
}