import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Play } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const featuredWorks = [
  {
    title: "صدای سکوت",
    type: "فیلم سینمایی",
    description: "اولین فیلم بلند گروه تشکل زاویه",
    year: "1402",
    image: "https://source.unsplash.com/random/800x600?film",
    id: "1"
  },
  {
    title: "رویای آبی",
    type: "مستند",
    description: "مستند تحسین‌شده درباره دریای خزر",
    year: "1401",
    image: "https://source.unsplash.com/random/800x600?sea",
    id: "2"
  },
  {
    title: "آخرین ماموریت",
    type: "فیلم کوتاه",
    description: "برنده جایزه بهترین فیلم کوتاه در جشنواره فجر",
    year: "1402",
    image: "https://source.unsplash.com/random/800x600?mission",
    id: "3"
  }
]

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background z-10" />
        <Image
          src="https://source.unsplash.com/random/1920x1080?cinema"
          alt="تصویر پس‌زمینه"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">ساخت آثار هنری ماندگار</h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">با زاویه دید خود مستند بسازید، اما با کمک ما</p>
          <div className="flex justify-center gap-4">
            <Link href="/works">
              <Button size="lg">
                مشاهده آثار
                <Play className="mr-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/biography">
              <Button size="lg" variant="outline">
                درباره ما
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="container py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">آخرین آثار ما</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWorks.map((work, index) => (
            <Link href={`/works/${work.id}`} key={index}>
              <Card className="bg-card hover:bg-accent transition-colors">
                <CardHeader>
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={400}
                    height={225}
                    className="rounded-lg object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{work.title}</CardTitle>
                  <div className="mt-2">
                    <span className="text-blue-500">{work.type}</span>
                    <p className="mt-1 text-sm text-muted-foreground">{work.description}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">{work.year}</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

