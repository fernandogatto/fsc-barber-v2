import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { getServerSession } from "next-auth"
import Image from "next/image"
import Link from "next/link"
import BarbershopItem from "./_components/barbershop-item"
import BookingItem from "./_components/booking-item"
import Header from "./_components/header"
import Search from "./_components/search"
import TitleSection from "./_components/title-section"
import { Button } from "./_components/ui/button"
import { quickSearchOptions } from "./_constants/search"
import { getBarbershops } from "./_data-acess/barbershop/get-barbershops"
import { getPopularBarbershops } from "./_data-acess/barbershop/get-popular-barbershops"
import { getConfirmedBookings } from "./_data-acess/booking/get-confirmed-bookings"
import { authOptions } from "./_lib/auth"

const Home = async () => {
  const session = await getServerSession(authOptions)
  const barbershops = await getBarbershops()
  const popularBarbershops = await getPopularBarbershops()
  const confirmedBookings = await getConfirmedBookings()

  return (
    <div>
      <Header />

      <div className="p-5">
        {/* APRESENTAÇÃO */}
        <h2 className="text-xl font-bold">
          Olá, {session?.user ? session.user.name : "bem vindo"}!
        </h2>
        <p>
          <span className="capitalize">
            {format(new Date(), "EEEE, dd", { locale: ptBR })}
          </span>
          <span>&nbsp;de&nbsp;</span>
          <span className="capitalize">
            {format(new Date(), "MMMM", { locale: ptBR })}
          </span>
        </p>

        {/* BUSCA */}
        <div className="mt-6 flex items-center gap-2">
          <Search />
        </div>

        {/* BUSCA RÁPIDA */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                {option.title}
              </Link>
            </Button>
          ))}
        </div>

        {/* IMAGEM */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            alt="Agende nos melhores com FSW Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {confirmedBookings.length > 0 && (
          <>
            <div className="mt-6 space-y-3">
              <TitleSection>Agendamentos</TitleSection>
              <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                {confirmedBookings.map((booking) => (
                  <BookingItem key={booking.id} booking={booking} />
                ))}
              </div>
            </div>
          </>
        )}

        <div className="mt-6 space-y-3">
          <TitleSection>Recomendados</TitleSection>
          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <TitleSection>Populares</TitleSection>
          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
            {popularBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
