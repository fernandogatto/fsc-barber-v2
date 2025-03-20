import { BarbershopService } from "@prisma/client"

export interface BarbershopDto {
  id: string
  name: string
  address: string
  imageUrl: string
  description: string
  phones: string[]
  services: BarbershopService[]
}
