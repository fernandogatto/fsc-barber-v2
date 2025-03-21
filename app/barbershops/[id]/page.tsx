import PhoneItem from "@/app/_components/phone-item"
import BarbershopServiceItem from "@/app/_components/service-item"
import SidebarSheetContent from "@/app/_components/sidebar-sheet"
import TitleSection from "@/app/_components/title-section"
import { Button } from "@/app/_components/ui/button"
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet"
import { getBarbershopById } from "@/app/_data-acess/barbershop/get-barbershop-by-id"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const id = params.id
  const barbershop = await getBarbershopById(id)

  return (
    <div>
      {/* IMAGEM */}
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop.name}
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="absolute right-4 top-4"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SidebarSheetContent />
        </Sheet>
      </div>

      {/* TÍTULO */}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="flex items-center gap-2">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-sm">5,0 (499 avaliações)</p>
        </div>
      </div>

      {/* DESCRIÇÃO */}
      <div className="space-y-3 border-b border-solid p-5">
        <TitleSection>Sobre nós</TitleSection>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>

      {/* SERVIÇOS */}
      <div className="space-y-3 p-5">
        <TitleSection>Serviços</TitleSection>
        {barbershop.services.map((service) => (
          <BarbershopServiceItem key={service.id} service={service} />
        ))}
      </div>

      {/* CONTATO */}
      <div className="space-y-3 border-t border-solid p-5">
        <TitleSection>Contato</TitleSection>
        {barbershop.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  )
}

export default BarbershopPage
