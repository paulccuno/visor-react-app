export class Lot {
  public readonly id!: number
  public path!: string
  public block!: number
  public lot!: string
  public area!: number
  public price!: number
  public pricexm2!: number
  public disponibility!: string
  public price_visibility!: boolean

  constructor(
    id: number,
    path: string,
    block: number,
    lot: string,
    area: number,
    price: number,
    pricexm2: number,
    disponibility: string,
    price_visibility: boolean,
  ) {
    this.id = id
    this.path = path
    this.block = block
    this.lot = lot
    this.area = area
    this.price = price
    this.pricexm2 = pricexm2
    this.disponibility = disponibility
    this.price_visibility = price_visibility
  }
}
