import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { WaveSeparator } from "@/components/wave-separator"

const works = [
  {
    id: "silence-voice",
    title: "صدای سکوت",
    type: "فیلم سینمایی",
    description: "اولین فیلم بلند گروه تشکل زاویه",
    year: "1402",
    image: "https://source.unsplash.com/random/800x600?film",
    fullDescription: "این فیلم روایتگر داستان زندگی افرادی است که در سکوت زندگی می‌کنند...",
    credits: "کارگردان: علی محمدی\nفیلمبردار: مریم احمدی\nتدوین: رضا کریمی",
    awards: ["جایزه بهترین فیلم - جشنواره فجر ۱۴۰۲", "جایزه ویژه هیئت داوران - جشنواره سینما حقیقت"]
  },
  {
    id: "blue-dream",
    title: "رویای آبی",
    type: "مستند",
    description: "مستند تحسین‌شده درباره دریای خزر",
    year: "1401",
    image: "https://source.unsplash.com/random/800x600?sea",
    fullDescription: "مستندی درباره زندگی ماهیگیران دریای خزر و چالش‌های زیست محیطی...",
    credits: "کارگردان: مریم احمدی\nفیلمبردار: علی محمدی\nتدوین: رضا کریمی",
    awards: ["بهترین مستند محیط زیست - جشنواره سینما حقیقت"]
  },
  {
    id: "last-mission",
    title: "آخرین ماموریت",
    type: "فیلم کوتاه",
    description: "برنده جایزه بهترین فیلم کوتاه در جشنواره فجر",
    year: "1402",
    image: "https://source.unsplash.com/random/800x600?mission",
    fullDescription: "داستان یک آتش‌نشان در آخرین روز خدمت خود...",
    credits: "کارگردان: رضا کریمی\nفیلمبردار: علی محمدی\nتدوین: مریم احمدی",
    awards: ["بهترین فیلم کوتاه - جشنواره فجر ۱۴۰۲"]
  }
]

export default function Works() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background -z-10" />
      <div className="container py-24">
        <h1 className="text-4xl font-bold text-center mb-4">نمونه کارها</h1>
        <p className="text-xl text-muted-foreground text-center mb-12">مجموعه‌ای از آثار تولید شده توسط گروه زاویه</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <Link href={`/works/${work.id}`} key={work.id}>
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                  <div className="text-sm text-primary mb-2">{work.type}</div>
                  <p className="text-muted-foreground">{work.description}</p>
                  <div className="mt-4 text-sm text-muted-foreground">{work.year}</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <WaveSeparator />
    </div>
  )
}

