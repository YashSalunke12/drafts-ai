import axios from "axios";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type BlogType = {
  _id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  isPublished: boolean;
  subTitle: string;
};

type CommentType = {
  _id: string;
  blog: BlogType;
  name: string;
  content: string;
  isApproved: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type DashboardData = {
  blogs: number | null;
  comments: number | null;
  drafts: number | null;
  recentBlogs: Array<BlogType>;
};

type AppContextType = {
  axios: typeof axios;
  navigate: ReturnType<typeof useNavigate>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  blogs: any[];
  setBlogs: React.Dispatch<React.SetStateAction<any[]>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

type AppProviderProps = {
  children: ReactNode;
};

export type {
  BlogType,
  CommentType,
  DashboardData,
  AppContextType,
  AppProviderProps,
};
