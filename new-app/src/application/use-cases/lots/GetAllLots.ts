import type { ILotRepository } from '../../../domain/repositories/ILotRepository'

export class GetAllLots {
  constructor(private readonly repo: ILotRepository) {}

  async execute(): Promise<void> {
    await this.repo.getAll()
  }
}
