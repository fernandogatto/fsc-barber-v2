import BarbershopItem from "../_components/barbershop-item"
import Header from "../_components/header"
import Search from "../_components/search"
import TitleSection from "../_components/title-section"
import { getBarbershopsBySearch } from "../_data-acess/barbershop/get-barbershops-by-search"

export interface BarbershopsPageProps {
  searchParams: {
    title?: string
    service?: string
  }
}

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {
  const barbershops = await getBarbershopsBySearch({ searchParams })

  return (
    <div>
      <Header />

      <div className="my-6 px-5">
        <Search />
      </div>

      <div className="space-y-3 px-5">
        <TitleSection>
          Resultados para &quot;{searchParams?.title || searchParams?.service}
          &quot;
        </TitleSection>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarbershopsPage
