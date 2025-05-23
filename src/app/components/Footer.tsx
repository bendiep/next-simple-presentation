import Image from 'next/image'

import logo from '@/images/logo.png'

export const Footer = () => {
  return (
    <footer className="mt-16 mb-16">
      <div className="absolute right-0 bottom-0 p-2">
        <Image
          className="rounded-lg p-2 dark:grayscale"
          src={logo}
          alt="Logo"
          width={250}
        />
      </div>
    </footer>
  )
}
