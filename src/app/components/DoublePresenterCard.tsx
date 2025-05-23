import Image, { StaticImageData } from 'next/image'

export const DoublePresenterCard = ({
  src1,
  name1,
  src2,
  name2,
  topic,
}: {
  src1: StaticImageData
  src2: StaticImageData
  name1: string
  name2: string
  topic: string
}) => {
  return (
    <div className="m-4 max-w-5xl overflow-hidden rounded-xl border-2 border-zinc-900/5 bg-white shadow-lg ring-4 ring-zinc-900/5 dark:ring-zinc-500/50">
      <div className="flex justify-between">
        <Image className="" src={src1} alt={name1} width={300} priority />
        <Image className="" src={src2} alt={name2} width={300} priority />
      </div>
      <div className="px-2 py-4">
        <div className="mb-2 flex justify-between border-b-4 border-cyan-500 dark:border-fuchsia-600">
          <div className="w-1/2 p-2 text-center text-xl font-bold text-nowrap text-black">
            {name1}
          </div>
          <div className="w-1/2 p-2 text-center text-xl font-bold text-nowrap text-black">
            {name2}
          </div>
        </div>
        <p className="p-2 text-center text-xl text-gray-700">{topic}</p>
      </div>
    </div>
  )
}
