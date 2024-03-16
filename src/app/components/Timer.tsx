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
      <button onClick={startTimer}>Start</button>
      <br />
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}
