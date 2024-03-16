export const Header = ({ date }: { date: string }) => {
  return (
    <div className="mb-8 text-center">
      <p className="absolute left-0 top-0 p-2 text-6xl font-bold text-zinc-200">
        {date}
      </p>
      <h1 className="mb-4 mt-0 text-6xl font-extrabold leading-normal tracking-tight text-gray-900 sm:mt-20">
        <mark className="rounded bg-sky-500 px-4 py-1 text-white">Ways</mark>{' '}
        <span className="">of</span>{' '}
        <mark className="rounded bg-sky-500 px-4 py-1 text-white">Working</mark>{' '}
      </h1>
    </div>
  )
}
