'use client'

import React, { useState } from 'react'
import { useTimer } from 'react-timer-hook'

export const Timer = () => {
  const [inputMinutes, setInputMinutes] = useState(0)
  const [inputSeconds, setInputSeconds] = useState(0)

  const expiryTimestamp = new Date()

  const { seconds, minutes, hours, days, isRunning, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('Timer expired'),
    autoStart: false,
  })

  const startTimer = () => {
    const time = new Date()
    time.setSeconds(time.getSeconds() + inputMinutes * 60 + inputSeconds)
    restart(time)
  }

  const resetTimer = () => {
    setInputMinutes(0)
    setInputSeconds(0)
    restart(expiryTimestamp, false) // Pass false to stop the timer
  }
  const formatTime = (time: number) => {
    return time.toString().padStart(2, '0')
  }

  const formattedHours = formatTime(hours)
  const formattedMinutes = formatTime(minutes)
  const formattedSeconds = formatTime(seconds)

  return (
    <div className="text-center">
      <div className="text-6xl font-medium">
        <span>{formattedHours}</span>:<span>{formattedMinutes}</span>:
        <span>{formattedSeconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <div className="md:flex">
        <div className="w-50 relative mt-2 rounded-md shadow-sm md:mr-2">
          <input
            type="number"
            name="timer-minutes"
            id="timer-minutes"
            className="w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            placeholder="0"
            aria-describedby="timer-minutes"
            onChange={(e) => setInputMinutes(parseInt(e.target.value))}
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 sm:text-sm" id="timer-minutes">
              min
            </span>
          </div>
        </div>
        <div className="w-50 relative mt-2 rounded-md shadow-sm">
          <input
            type="number"
            name="timer-seconds"
            id="timer-seconds"
            className="w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            placeholder="0"
            aria-describedby="timer-seconds"
            onChange={(e) => setInputSeconds(parseInt(e.target.value))}
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 sm:text-sm" id="timer-seconds">
              sec
            </span>
          </div>
        </div>
      </div>
      <br />
      <div>
        <button
          type="button"
          className="hover:bg-blue-70 m-1 rounded-full bg-blue-500 p-2 text-white"
          onClick={startTimer}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
          </svg>
        </button>
        <button
          type="button"
          className="m-1 rounded-full bg-red-500 p-2 text-white hover:bg-red-700"
          onClick={resetTimer}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
