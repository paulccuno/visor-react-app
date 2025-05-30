import { Lot } from '../../domain/entities/LotEntity'
import type { ILotRepository } from '../../domain/repositories/ILotRepository'

export class LotRepository implements ILotRepository {
  async save(lot: Lot): Promise<Lot> {
    return lot
  }

  async getAll(): Promise<Lot[]> {
    return []
  }

  async get(id: number): Promise<Lot> {
    return new Lot(id, '', 0, '', 0, 0, 0, '', true)
  }

  async update(id: number, lot: Lot): Promise<Lot> {
    return lot
  }
}
