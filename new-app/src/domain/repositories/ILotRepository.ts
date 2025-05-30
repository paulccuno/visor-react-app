import type { Lot } from '../entities/LotEntity'

export interface ILotRepository {
  save(lote: Lot): Promise<Lot>

  getAll(): Promise<Lot[]>

  get(id: number): Promise<Lot>

  update(id: number, lote: Lot): Promise<Lot>
}
