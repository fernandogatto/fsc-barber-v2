import "server-only"

import { BarbershopDto } from "@/app/_interfaces/barbershop/barbershop-dto"
import { db } from "@/app/_lib/prisma"

export const getPopularBarbershops = async (): Promise<BarbershopDto[]> => {
  const barbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return barbershops.map((barbershop) => ({
    id: barbershop.id,
    name: barbershop.name,
    address: barbershop.address,
    imageUrl: barbershop.imageUrl,
    phones: barbershop.phones,
    description: barbershop.description,
  })) as BarbershopDto[]
}
