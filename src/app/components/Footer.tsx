import Image from 'next/image'

import logo from '@/images/logo.png'

export const Footer = () => {
  return (
    <footer className="mb-16 mt-16">
      <div className="absolute md:bottom-0 md:right-0">
        <Image
          className="rounded-lg p-2 grayscale"
          src={logo}
          alt="Logo"
          width={250}
        />
      </div>
      {/* <Image
        className="rounded-lg p-2 grayscale md:absolute md:bottom-0 md:right-0"
        src={logo}
        alt="Logo"
        width={250}
      /> */}
    </footer>
  )
}
