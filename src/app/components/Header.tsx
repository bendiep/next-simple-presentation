import { ThemeToggle } from './ThemeToggle'

export const Header = ({ date }: { date: string }) => {
  return (
    <div className="text-center md:mt-16 md:mb-8">
      <p className="p-2 text-left text-6xl font-bold text-zinc-200 md:absolute md:top-0 md:left-0 dark:text-zinc-500/50">
        {date}
      </p>
      <div className="absolute top-0 right-0 p-2">
        <ThemeToggle />
      </div>
    </div>
  )
}
