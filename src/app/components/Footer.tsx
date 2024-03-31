import Image from 'next/image'

import logo from '@/images/logo.png'

export const Footer = () => {
  return (
    <footer className="mb-16 mt-16 text-center">
      <div className="p-2 md:absolute md:bottom-0 md:right-0">
        <Image className="rounded-lg p-2" src={logo} alt="Logo" width={250} />
      </div>
    </footer>
  )
}
