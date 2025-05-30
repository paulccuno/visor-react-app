import { CreateLot } from '../../application/use-cases/lots/CreateLot'
import { GetAllLots } from '../../application/use-cases/lots/GetAllLots'
import { LotRepository } from '../../infraestructure/repositories/LotRepository'

const repo = new LotRepository()

export const createLot = new CreateLot(repo)
export const getAllLots = new GetAllLots(repo)
