import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode } from "../../models";
import { categoryResourceOptionns } from "./category";
import { courseResourceOptions } from "./course";
import { episodeResourceOptions } from "./episodes";

export const adminJsResources: ResourceWithOptions[] = [
  {  resource: Category,
    options: categoryResourceOptionns
  },
  {
    resource: Course,
    options: courseResourceOptions
  },
  {
    resource: Episode,
    options: episodeResourceOptions
  }
]