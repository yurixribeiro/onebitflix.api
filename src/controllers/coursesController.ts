import { Request, Response } from 'express'
import { courseService } from "../services/courseService"

export const coursesController = {
  //GET /courses/featured 
  featured: async (req: Request, res: Response) => {
    try {
      const featuredCourses = await courseService.getRandomFeatureddCourses()
      return res.json(featuredCourses)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },
  //GET /courses/:id
  show: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
      const course = await courseService.findbyIdWithEpisodes(id)
      return res.json(course)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}