import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

// TODO: receber agendamento como prop
const BookingItem = () => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-0">
        <div className="flex flex-col gap-2 py-5 pl-5">
          <Badge className="w-fit">Confirmado</Badge>
          <h3 className="text-lg font-semibold">Corte de cabelo</h3>

          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
                alt=""
              />
            </Avatar>
            <p className="text-md">Barbearia</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-5">
          <p className="text-sm">Março</p>
          <p className="text-2xl">17</p>
          <p className="text-sm">20:00</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default BookingItem
