import { Category } from './../models/Category';
import { Request, Response } from 'express'

export const categoriesController = {
  index: async (req: Request, res: Response) => {
    try {
      const categories = await Category.findAll({
        attributes: ['id', 'name', 'position'],
        order: [['position', 'ASC']]
      })
      return res.json(categories)
    } catch (err) {
        if(err instanceof Error) {
          return res.status(400).json({ message: err.message})
        }
    }
  }
}