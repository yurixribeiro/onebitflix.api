import { ResourceWithOptions } from "adminjs";
import { Category, Course } from "../../models";
import { categoryResourceOptionns } from "./category";
import { courseResourceOptions } from "./course";

export const adminJsResources: ResourceWithOptions[] = [
  {  resource: Category,
    options: categoryResourceOptionns
  },
  {
    resource: Course,
    options: courseResourceOptions
  }
]