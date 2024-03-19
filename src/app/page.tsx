import { Header } from './components/Title'
import { PresenterCard } from './components/PresenterCard'
import { Timer } from './components/Timer'
import { Footer } from './components/Footer'

import presenterOne from '@/images/example-photo-1.jpeg'
import presenterTwo from '@/images/example-photo-2.jpeg'
import presenterThree from '@/images/example-photo-3.jpeg'

export default function Home() {
  const date = '16 Mar'
  const presenters = [
    {
      id: 1,
      src: presenterOne,
      name: 'Alexander Bennett',
      topic: 'Effective Time Management',
    },
    {
      id: 2,
      src: presenterTwo,
      name: 'Sophia Marshall',
      topic: 'Workplace Communication',
    },
    {
      id: 3,
      src: presenterThree,
      name: 'Jonathan Pierce',
      topic: 'Fostering Resilience',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <Header date={date.toUpperCase()} />
      <h2 className="truncate text-3xl font-bold leading-7 tracking-tight text-gray-900 md:text-4xl">
        featuring
      </h2>
      <div className="flex flex-wrap justify-center">
        {presenters.map((presenter) => (
          <PresenterCard key={presenter.id} {...presenter} />
        ))}
      </div>
      <Timer />
      <Footer />
    </div>
  )
}
