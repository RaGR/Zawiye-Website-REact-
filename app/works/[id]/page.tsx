import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

// This would typically come from a database or CMS
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

export default function WorkPage({ params }: { params: { id: string } }) {
  const work = works.find(w => w.id === params.id)
  
  if (!work) {
    return <div>اثر مورد نظر یافت نشد.</div>
  }

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background -z-10" />
      
      <div className="container py-12">
        <Link href="/works" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ChevronRight className="h-4 w-4 ml-1" />
          بازگشت به آثار
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={work.image}
              alt={work.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">{work.title}</h1>
              <div className="text-lg text-primary mb-4">{work.type}</div>
              <p className="text-xl text-muted-foreground">{work.description}</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">درباره اثر</h2>
                <p className="text-muted-foreground whitespace-pre-line">{work.fullDescription}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">عوامل</h2>
                <p className="text-muted-foreground whitespace-pre-line">{work.credits}</p>
              </CardContent>
            </Card>

            {work.awards.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">جوایز</h2>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {work.awards.map((award, index) => (
                      <li key={index}>{award}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

