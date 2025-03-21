import { MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SidebarSheetContent from "./sidebar-sheet"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Sheet, SheetTrigger } from "./ui/sheet"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
        </Link>

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
      </CardContent>
    </Card>
  )
}

export default Header
