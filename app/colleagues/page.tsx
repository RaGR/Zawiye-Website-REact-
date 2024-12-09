import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const colleagues = [
  {
    name: "علی محمدی",
    role: "کارگردان",
    experience: "۱۰ سال",
    bio: "علی با بیش از یک دهه تجربه در ساخت مستندهای اجتماعی، برنده‌ی چندین جایزه‌ی معتبر داخلی و بین‌المللی است. تخصص او در روایت داستان‌های انسانی و اجتماعی است.",
    image: "/placeholder.svg"
  },
  {
    name: "مریم احمدی",
    role: "تصویربردار",
    experience: "۸ سال",
    bio: "مریم با تخصص در تصویربرداری در شرایط چالش‌برانگیز، نقش کلیدی در خلق تصاویر ماندگار مستندهای ما دارد. او دانش‌آموخته‌ی دانشگاه هنر است.",
    image: "/placeholder.svg"
  },
  {
    name: "رضا کریمی",
    role: "تدوینگر",
    experience: "۱۵ سال",
    bio: "رضا با تجربه‌ی گسترده در تدوین فیلم‌های مستند و داستانی، مسئول خلق ریتم و ساختار نهایی آثار ماست. او برنده‌ی جایزه بهترین تدوین از جشنواره سینما حقیقت است.",
    image: "/placeholder.svg"
  }
]

export default function Colleagues() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">همکاران ما</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {colleagues.map((colleague, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-64">
              <Image
                src={colleague.image}
                alt={colleague.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>{colleague.name}</CardTitle>
              <CardDescription>
                {colleague.role} | سابقه: {colleague.experience}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{colleague.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

