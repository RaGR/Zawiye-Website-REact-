'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import { toast } from "@/components/ui/use-toast"

export default function Cooperate() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message })
    toast({
      title: "درخواست ارسال شد",
      description: "ما به زودی با شما تماس خواهیم گرفت.",
    })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">همکاری با ما</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>اطلاعات تماس</CardTitle>
              <CardDescription>از طریق راه‌های زیر با ما در ارتباط باشید</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4 space-x-reverse">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>info@zaviye.com</span>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse">
                <Instagram className="h-5 w-5 text-muted-foreground" />
                <span>@zaviye_group</span>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8">
            <Image
              src="/placeholder.svg"
              alt="تصویر همکاری"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>فرم درخواست همکاری</CardTitle>
            <CardDescription>لطفاً فرم زیر را پر کنید تا با شما تماس بگیریم</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id="name"
                    placeholder="نام و نام خانوادگی"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id="email"
                    type="email"
                    placeholder="ایمیل"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Textarea
                    placeholder="پیام شما"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
              <Button className="mt-4 w-full" type="submit">ارسال درخواست</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

