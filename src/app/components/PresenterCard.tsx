import Image, { StaticImageData } from 'next/image'

const PresenterCard = ({
  src,
  name,
  topic,
}: {
  src: StaticImageData
  name: string
  topic: string
}) => {
  return (
    <div className="m-4 max-w-64 overflow-hidden rounded-xl border-2 border-zinc-900/5 bg-white shadow-lg ring-4 ring-zinc-900/5">
      <Image className="w-full" src={src} alt={name} width={200} />
      <div className="px-4 py-4">
        <div className="mb-2 max-w-64 text-center text-xl font-bold">
          {name}
        </div>

        <p className="max-w-64 text-center text-base text-gray-700">{topic}</p>
      </div>
    </div>
  )
}

export default PresenterCard
