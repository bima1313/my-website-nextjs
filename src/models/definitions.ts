import { Timestamp } from "next/dist/server/lib/cache-handlers/types";
import { ImageData } from "@/models/image-data";
export type Portfolio = {
  id: number;
  createAt: Timestamp;
  title: string;
  categories: string[];
  image: ImageData;
};

export type About = {
  id: number;
  title: string;
  images: ImageData[];
};