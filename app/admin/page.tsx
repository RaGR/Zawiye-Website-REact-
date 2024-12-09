'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"

export default function AdminPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === 'admin' && password === 'admin1') {
      setIsLoggedIn(true)
      toast({
        title: "ورود موفق",
        description: "شما با موفقیت وارد پنل مدیریت شدید.",
      })
    } else {
      toast({
        title: "خطا در ورود",
        description: "نام کاربری یا رمز عبور اشتباه است.",
        variant: "destructive",
      })
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto mt-20 max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>ورود به پنل مدیریت</CardTitle>
            <CardDescription>لطفاً نام کاربری و رمز عبور خود را وارد کنید.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id="username"
                    placeholder="نام کاربری"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id="password"
                    type="password"
                    placeholder="رمز عبور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <Button className="mt-4 w-full" type="submit">ورود</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">پنل مدیریت محتوا</h1>
      <Tabs defaultValue="news">
        <TabsList className="mb-4">
          <TabsTrigger value="news">اخبار</TabsTrigger>
          <TabsTrigger value="works">آثار</TabsTrigger>
          <TabsTrigger value="team">اعضای تیم</TabsTrigger>
        </TabsList>
        <TabsContent value="news">
          <Card>
            <CardHeader>
              <CardTitle>مدیریت اخبار</CardTitle>
              <CardDescription>اخبار جدید را اضافه کنید یا اخبار موجود را ویرایش کنید.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input id="title" placeholder="عنوان خبر" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Textarea placeholder="متن خبر" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">انصراف</Button>
              <Button>ذخیره</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="works">
          <Card>
            <CardHeader>
              <CardTitle>مدیریت آثار</CardTitle>
              <CardDescription>آثار جدید را اضافه کنید یا آثار موجود را ویرایش کنید.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input id="title" placeholder="عنوان اثر" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Input id="type" placeholder="نوع اثر (مستند، فیلم کوتاه، و غیره)" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Textarea placeholder="توضیحات اثر" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">انصراف</Button>
              <Button>ذخیره</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle>مدیریت اعضای تیم</CardTitle>
              <CardDescription>اعضای جدید را اضافه کنید یا اطلاعات اعضای موجود را ویرایش کنید.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input id="name" placeholder="نام و نام خانوادگی" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Input id="role" placeholder="سمت" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Textarea placeholder="بیوگرافی" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">انصراف</Button>
              <Button>ذخیره</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

