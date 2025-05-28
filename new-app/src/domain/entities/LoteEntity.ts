export class Lote {
  public readonly id!: number
  public disponibility!: string

  constructor(id: number, disponibility: string) {
    this.id = id
    this.disponibility = disponibility
  }
}
