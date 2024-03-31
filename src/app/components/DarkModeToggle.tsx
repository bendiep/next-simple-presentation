'use client'

export const DarkModeToggle = () => {
  function SunIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
      <svg
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
        <path
          d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
          fill="none"
        />
      </svg>
    )
  }

  function MoonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
      <svg fill="none" viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        />
      </svg>
    )
  }

  function toggleMode() {
    const htmlElement = document.documentElement
    htmlElement.classList.toggle('light')
    htmlElement.classList.toggle('dark')
  }

  function ThemeToggle() {
    return (
      <button
        type="button"
        className="group px-3 py-3"
        onClick={() => toggleMode()}
      >
        <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden" />
        <MoonIcon className="hidden h-6 w-6 fill-zinc-100 stroke-zinc-500/50 transition group-hover:fill-zinc-300 group-hover:stroke-zinc-500/50 dark:block" />
      </button>
    )
  }

  return <ThemeToggle />
}
