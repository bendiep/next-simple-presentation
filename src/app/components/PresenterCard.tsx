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
    <div className="max-w-64 rounded-xl overflow-hidden shadow-lg bg-white m-4 border-zinc-900/5 ring-zinc-900/5 border-2 ring-4">
      <Image className="w-full" src={src} alt={name} width={200} />
      <div className="px-4 py-4">
        <div className="text-center max-w-64 font-bold text-xl mb-2">
          {name}
        </div>
        <p className="max-w-64 text-gray-700 text-base text-center">{topic}</p>
      </div>
    </div>
  );
};

export default PresenterCard;
