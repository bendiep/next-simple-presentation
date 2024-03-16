export const Header = ({ date }: { date: string }) => {
  return (
    <div className="text-center md:mb-8">
      <p className="p-2 text-left text-6xl font-bold text-zinc-200 md:absolute md:left-0 md:top-0">
        {date}
      </p>
      <h1 className="mb-4 mt-0 text-6xl font-extrabold leading-normal tracking-tight text-gray-900">
        <mark className="rounded bg-sky-500 px-4 py-1 text-white">Ways</mark>{' '}
        <span className="">of</span>{' '}
        <mark className="rounded bg-sky-500 px-4 py-1 text-white">Working</mark>{' '}
      </h1>
    </div>
  )
}
