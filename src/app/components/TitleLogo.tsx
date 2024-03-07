import Image from "next/image";

import logo from "@/images/fd-logo.gif";

const TitleLogo = () => {
  return (
    <div className="text-center mb-8">
      <Image className="rounded-lg" src={logo} alt="Logo" width={300} />
      <h1 className="mt-20 mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <mark className="px-3 py-1 text-white bg-sky-500 rounded dark:bg-sky-500">
          Ways
        </mark>{" "}
        of{" "}
        <mark className="px-3 py-1 text-white bg-sky-500 rounded dark:bg-sky-500">
          Working
        </mark>{" "}
      </h1>
    </div>
  );
};

export default TitleLogo;
