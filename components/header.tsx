'use client'

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/گروه زاویه.PNG"
            alt="لوگوی گروه زاویه"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex">
            <NavigationMenuItem>
              <Link href="/news" className={navigationMenuTriggerStyle()}>
                اخبار
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/biography" className={navigationMenuTriggerStyle()}>
                بیوگرافی
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/faq" className={navigationMenuTriggerStyle()}>
                پرسش‌های متداول
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" className={navigationMenuTriggerStyle()}>
                تماس با ما
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/cooperate" className={navigationMenuTriggerStyle()}>
                همکاری با ما
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/colleagues" className={navigationMenuTriggerStyle()}>
                همکاران
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4 space-x-reverse">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">جستجو</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

