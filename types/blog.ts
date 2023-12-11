import { ReactNode } from "react";

type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string | JSX.Element;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
  description?: ReactNode;
};
