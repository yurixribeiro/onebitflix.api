import { AuthenticatedRequest } from '../middlewares/auth';
import { episodeService } from './../services/episodeService';
import { Request, Response } from 'express'

export const episodeController = {
  //GET /episodes/stream?videoUrl=
  stream: async (req: Request, res: Response) => {
    const { videoUrl } = req.query

    try {
      if (typeof videoUrl !== 'string') throw new Error('videoUrl param must be of type string')     

      const range = req.headers.range 

      episodeService.streamEpisodeToResponse(res, videoUrl, range)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },
  // GET /episode/:id/watchTime
  getWatchTime: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id
    const episodeId = req.params.id

    try {
      const watchTime = await episodeService.getWatchTime(userId, Number(episodeId))
      return res.json(watchTime)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },
    // POST /episode/:id/watchTime
    setWatchTime: async (req: AuthenticatedRequest, res: Response) => {
      const userId = req.user!.id
      const episodeId = Number(req.params.id)
      const { seconds } = req.body
  
      try {
        const watchTime = await episodeService.setWatchTime({
          episodeId,
          userId,
          seconds
        })
        return res.json(watchTime)
      } catch (err) {
        if (err instanceof Error) {
          return res.status(400).json({ message: err.message })
        }
      }
    }
}