import { BarbershopDto } from "@/app/_interfaces/barbershop/barbershop-dto"
import { db } from "@/app/_lib/prisma"

export const getBarbershops = async (): Promise<BarbershopDto[]> => {
  const barbershops = await db.barbershop.findMany({})

  return barbershops.map((barbershop) => ({
    id: barbershop.id,
    name: barbershop.name,
    address: barbershop.address,
    imageUrl: barbershop.imageUrl,
    phones: barbershop.phones,
  }))
}
