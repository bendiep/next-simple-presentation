import Image from 'next/image'

import logo from '@/images/logo.png'

export const Footer = () => {
  return (
    <footer className="mb-16 mt-16">
      <Image
        className="absolute bottom-0 right-0 rounded-lg p-2 grayscale"
        src={logo}
        alt="Logo"
        width={250}
      />
    </footer>
  )
}
