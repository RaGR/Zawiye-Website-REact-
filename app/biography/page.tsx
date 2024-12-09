import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Biography() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-12">
        <section>
          <h1 className="text-4xl font-bold mb-6">درباره گروه زاویه</h1>
          <Card>
            <CardHeader>
              <CardTitle>هدف ما</CardTitle>
              <CardDescription>داستان‌های واقعی را به تصویر می‌کشیم</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>
                هدف گروه زاویه همیشه تولید مستند دغدغه‌مند در حوزه اجتماعی بوده است. ما با نگاهی عمیق به مسائل اجتماعی، تلاش می‌کنیم تا صدای افرادی باشیم که کمتر شنیده می‌شوند.
              </p>
              <p>
                گروه زاویه در سال ۱۳۹۸ با جمعی از هنرمندان و فیلمسازان متعهد شکل گرفت. هدف ما از همان ابتدا، ایجاد پلی میان هنر مستند و مخاطب عام بود. ما معتقدیم که هر داستانی، اگر درست روایت شود، می‌تواند تأثیرگذار باشد.
              </p>
              <p>
                در طول این سال‌ها، با تولید مستندهای متعدد در حوزه‌های مختلف اجتماعی، فرهنگی و محیط زیستی، توانسته‌ایم جایگاه خود را به عنوان یک گروه مستندساز حرفه‌ای تثبیت کنیم.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">چشم‌انداز ما</h2>
          <Card>
            <CardContent className="pt-6 space-y-4 text-lg">
              <p>
                ما در گروه زاویه به دنبال گسترش مرزهای مستندسازی و ایجاد آثاری هستیم که علاوه بر ارزش هنری، تأثیر اجتماعی پایداری داشته باشند.
              </p>
              <p>
                هدف ما تنها ساخت مستند نیست، بلکه می‌خواهیم با هر اثر، گامی در جهت آگاهی‌بخشی و ایجاد تغییر مثبت در جامعه برداریم.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

