'use client'

import React, { useState } from 'react'
import { useTimer } from 'react-timer-hook'

const StartIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      className="h-5 w-5"
      viewBox="-1 0 24 24"
      fill="none"
      stroke="#ffffff"
      {...props}
    >
      <path
        d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ResetIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#ffffff">
      <path
        d="M12 2.99982C16.9706 2.99982 21 7.02925 21 11.9998C21 16.9704 16.9706 20.9998 12 20.9998C7.02944 20.9998 3 16.9704 3 11.9998C3 9.17255 4.30367 6.64977 6.34267 4.99982"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{' '}
      <path
        d="M3 4.49982H7V8.49982"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ThreeDotsIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#000000" stroke="none">
      <g fill="#9ca3af">
        <rect width="5" height="5" x="3" y="10" rx="2"></rect>{' '}
        <rect width="5" height="5" x="10" y="10" rx="2"></rect>{' '}
        <rect width="5" height="5" x="17" y="10" rx="2"></rect>{' '}
      </g>
    </svg>
  )
}

export const Timer = () => {
  const [showTimer, setShowTimer] = useState(false)
  const [isMenuHovered, setIsMenuHovered] = useState(false)
  const [inputMinutes, setInputMinutes] = useState('0')
  const [inputSeconds, setInputSeconds] = useState('0')
  const expiryTimestamp = new Date()

  const { seconds, minutes, hours, isRunning, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('Timer expired'),
    autoStart: false,
  })

  const toggleTimer = () => {
    setShowTimer(!showTimer)
  }

  const startTimer = () => {
    const time = new Date()
    const mins = parseInt(inputMinutes === '' ? '0' : inputMinutes)
    const secs = parseInt(inputSeconds === '' ? '0' : inputSeconds)
    time.setSeconds(time.getSeconds() + mins * 60 + secs)
    restart(time)
  }

  const resetTimer = () => {
    setInputMinutes('0')
    setInputSeconds('0')
    restart(expiryTimestamp, false) // Pass false to stop the timer
  }

  const formatTime = (time: number) => {
    return time.toString().padStart(2, '0')
  }

  const formattedHours = formatTime(hours)
  const formattedMinutes = formatTime(minutes)
  const formattedSeconds = formatTime(seconds)

  return (
    <div className="text-center md:mt-8">
      <div className={`mt-4 text-center ${showTimer ? '' : 'invisible'}`}>
        <p className="font-sans text-stone-400">
          {isRunning ? 'starting in...' : 'idle'}
        </p>
        <div className="w-80 font-sans text-6xl font-normal text-stone-600">
          <span>
            {formattedHours}
            <span className="font-sans text-sm font-medium">h</span>{' '}
          </span>
          <span>
            {formattedMinutes}
            <span className="font-sans text-sm font-medium">m</span>{' '}
          </span>
          <span>
            {formattedSeconds}
            <span className="font-sans text-sm font-medium">s</span>
          </span>
        </div>
        <div
          className={`md:flex md:justify-center ${isRunning ? 'invisible' : ''}`}
        >
          <div className="relative mt-2 rounded-md shadow-sm md:mr-2 md:w-32">
            <input
              type="number"
              name="timer-minutes"
              id="timer-minutes"
              className="w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              placeholder="0"
              min="0"
              value={inputMinutes}
              onChange={(e) => {
                setInputMinutes(e.target.value)
              }}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm" id="timer-minutes">
                min
              </span>
            </div>
          </div>
          <div className="relative mt-2 rounded-md shadow-sm md:w-32">
            <input
              type="number"
              name="timer-seconds"
              id="timer-seconds"
              className="w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              placeholder="0"
              min="0"
              value={inputSeconds}
              onChange={(e) => {
                setInputSeconds(e.target.value)
              }}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm" id="timer-seconds">
                sec
              </span>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className={`${!isRunning ? '' : 'invisible'}`}>
            <button
              type="button"
              className="m-1 rounded-full bg-gray-400 p-2 text-white hover:bg-gray-500"
              onClick={startTimer}
            >
              <StartIcon />
            </button>
          </div>
        </div>
      </div>
      <div
        onMouseEnter={() => setIsMenuHovered(true)}
        onMouseLeave={() => setIsMenuHovered(false)}
        className="flex justify-center"
      >
        <div className="w-24">
          <div className={`${isMenuHovered ? '' : 'invisible'}`}>
            <div className={`${showTimer && isRunning ? '' : 'invisible'}`}>
              <button
                type="button"
                className="rounded-full bg-gray-400 p-2 text-white hover:bg-gray-500"
                onClick={resetTimer}
              >
                <ResetIcon />
              </button>
              <br />
            </div>
            <button className="text-sm text-stone-400" onClick={toggleTimer}>
              {showTimer ? 'Hide Timer' : 'Show Timer'}
            </button>
          </div>
          <div className={`${!isMenuHovered ? '' : 'invisible'}`}>
            <button className="p-2 text-sm text-stone-400">
              <ThreeDotsIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
