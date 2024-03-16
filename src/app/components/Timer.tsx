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

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '100px' }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <div>
        <div className="w-100 relative mt-2 rounded-md shadow-sm">
          <input
            type="number"
            name="timer-minutes"
            id="timer-minutes"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
        <div className="w-100 relative mt-2 rounded-md shadow-sm">
          <input
            type="number"
            name="timer-seconds"
            id="timer-seconds"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
      <br />
      <button onClick={startTimer}>Start</button>
      <br />
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}
