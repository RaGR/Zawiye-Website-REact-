import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-gray-100 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Image src="/گروه زاویه.PNG" alt="لوگوی گروه زاویه" width={100} height={100} className="w-16 h-16" />
        <nav>
          <ul className="flex space-x-4 space-x-reverse">
            <li><Link href="/news" className="hover:text-gray-600">اخبار</Link></li>
            <li><Link href="/biography" className="hover:text-gray-600">بیوگرافی</Link></li>
            <li><Link href="/faq" className="hover:text-gray-600">سوالات متداول</Link></li>
            <li><Link href="/contact" className="hover:text-gray-600">تماس با ما</Link></li>
            <li><Link href="/cooperate" className="hover:text-gray-600">همکاری با ما</Link></li>
            <li><Link href="/colleagues" className="hover:text-gray-600">همکاران</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

