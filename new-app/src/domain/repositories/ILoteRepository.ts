import type { Lote } from '../entities/LoteEntity'

export interface ILoteRepository {
  save(lote: Lote): Promise<Lote>

  getAll(): Promise<Lote[]>

  get(id: number): Promise<Lote>

  update(id: number, lote: Lote): Promise<Lote>
}
