import { DarkModeToggle } from './DarkModeToggle'

export const Header = ({ date }: { date: string }) => {
  return (
    <div className="text-center md:mb-8 md:mt-16">
      <p className="p-2 text-left text-6xl font-bold text-zinc-200 md:absolute md:left-0 md:top-0 dark:text-zinc-500/50">
        {date}
      </p>
      <div className="absolute right-0 top-0 p-2">
        <DarkModeToggle />
      </div>
    </div>
  )
}
