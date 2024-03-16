export const Title = ({ date }: { date: string }) => {
  return (
    <div className="mb-8 text-center">
      <p className="absolute left-0 top-0 text-6xl font-bold  text-zinc-200">
        {date}
      </p>
      <h1 className="mb-4 mt-0 text-6xl font-extrabold leading-none tracking-tight text-gray-900">
        <mark className="rounded bg-sky-500 px-3 py-1 text-white">Ways</mark> of{' '}
        <mark className="rounded bg-sky-500 px-3 py-1 text-white">Working</mark>{' '}
      </h1>
    </div>
  )
}
