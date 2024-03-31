import Image from 'next/image'

import logo from '@/images/logo.png'

export const Footer = () => {
  return (
    <footer className="mb-16 mt-16">
      <div className="absolute bottom-0 right-0 p-2">
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
