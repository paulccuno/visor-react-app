import type { Lot } from '../../../domain/entities/LotEntity'
import type { ILotRepository } from '../../../domain/repositories/ILotRepository'

export class CreateLot {
  constructor(private readonly repo: ILotRepository) {}

  async execute(lot: Lot): Promise<void> {
    await this.repo.save(lot)
  }
}
