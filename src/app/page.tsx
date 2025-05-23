import { Header } from '@/app/components/Header'
import { Title } from '@/app/components/Title'
import { PresenterCard } from '@/app/components/PresenterCard'
import { Timer } from '@/app/components/Timer'
import { Footer } from '@/app/components/Footer'

import presenterOne from '@/images/example-photo-1.jpeg'
import presenterTwo from '@/images/example-photo-2.jpeg'
import presenterThree from '@/images/example-photo-3.jpeg'
import { DoublePresenterCard } from './components/DoublePresenterCard'

export default function Home() {
  const date = new Date().toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
  })

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
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-zinc-900">
      <Header date={date.toUpperCase()} />
      <Title />
      <h2 className="truncate text-3xl leading-7 font-bold tracking-tight text-gray-700 md:text-4xl dark:text-zinc-100">
        featuring
      </h2>
      <div className="flex flex-wrap justify-center">
        {/* Individual Presenters */}
        {presenters.map((presenter) => (
          <PresenterCard key={presenter.id} {...presenter} />
        ))}

        {/* Double Presenter Card */}
        {/* <DoublePresenterCard
          src1={presenters[0].src}
          name1={presenters[0].name}
          src2={presenters[1].src}
          name2={presenters[1].name}
          topic={presenters[0].topic}
        /> */}
      </div>
      <Timer />
      <Footer />
    </div>
  )
}
