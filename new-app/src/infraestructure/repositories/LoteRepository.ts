import { Lote } from '../../domain/entities/LoteEntity'
import type { ILoteRepository } from '../../domain/repositories/ILoteRepository'

export class LoteRepository implements ILoteRepository {
  async save(lote: Lote): Promise<Lote> {
    return lote
  }

  async getAll(): Promise<Lote[]> {
    return []
  }

  async get(id: number): Promise<Lote> {
    return new Lote(id, '')
  }

  async update(id: number, lote: Lote): Promise<Lote> {
    return lote
  }
}
