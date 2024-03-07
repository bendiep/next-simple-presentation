import Image from "next/image";

// import logo from "@/images/example-logo.webp";
// import logo from "@/images/fd-logo.jpeg";
import logo from "@/images/fd-logo.gif";

const TitleLogo = ({ title }: { title: string }) => {
  return (
    <div className="text-center mb-8">
      <Image className="rounded-lg" src={logo} alt="Logo" width={300} />
      <h1 className="text-5xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        {title}
      </h1>
    </div>
  );
};

export default TitleLogo;
