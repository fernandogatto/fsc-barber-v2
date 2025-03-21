import "server-only"

import { BarbershopDto } from "@/app/_interfaces/barbershop/barbershop-dto"
import { db } from "@/app/_lib/prisma"
import { BarbershopsPageProps } from "@/app/barbershops/page"

export const getBarbershopsBySearch = async ({
  searchParams,
}: BarbershopsPageProps): Promise<BarbershopDto[]> => {
  const barbershops = await db.barbershop.findMany({
    where: {
      OR: [
        searchParams?.title
          ? {
              name: {
                contains: searchParams?.title,
                mode: "insensitive",
              },
            }
          : {},
        searchParams.service
          ? {
              services: {
                some: {
                  name: {
                    contains: searchParams.service,
                    mode: "insensitive",
                  },
                },
              },
            }
          : {},
      ],
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
