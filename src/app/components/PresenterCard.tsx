import Image, { StaticImageData } from "next/image";

const PresenterCard = ({
  src,
  name,
  topic,
}: {
  src: StaticImageData;
  name: string;
  topic: string;
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <Image className="w-full" src={src} alt={name} width={200} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{topic}</p>
      </div>
    </div>
  );
};

export default PresenterCard;
