import { Response } from "express"
import { AuthenticatedRequest } from "../middlewares/auth"
import { favoriteService } from "../services/favoriteService"

export const favoritesController = {
  //POST /favorites
  save: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id 
    const { courseId } = req.body

    try {
      const favorite = await favoriteService.create(userId, Number(courseId))
      return res.status(200).json(favorite)
    } catch (err) {
      if(err instanceof Error) {
        return res.status(401).json({
          message: err.message
        })
      }
    }
  }
}