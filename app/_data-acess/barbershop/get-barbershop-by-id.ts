import "server-only"

import { db } from "@/app/_lib/prisma"
import { Barbershop } from "@prisma/client"

export const getBarbershopById = async (id: string): Promise<Barbershop> => {
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
