import "server-only"

import { BarbershopDto } from "@/app/_interfaces/barbershop/barbershop-dto"
import { db } from "@/app/_lib/prisma"

export const getBarbershopById = async (id: string): Promise<BarbershopDto> => {
  const barbershop = await db.barbershop.findFirstOrThrow({
    where: {
      id,
    },
    include: {
      services: true,
    },
  })

  return barbershop
}
