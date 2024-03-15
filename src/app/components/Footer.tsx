import Image from "next/image";

import logo from "@/images/fd-logo.gif";

const Footer = () => {
  return (
    <footer className="mt-16 mb-16">
      <Image className="rounded-lg" src={logo} alt="Logo" width={50} />
    </footer>
  );
};

export default Footer;
