'use client'

import React, { useState } from 'react'
import { useTimer } from 'react-timer-hook'

export const Timer = () => {
  const [showTimer, setShowTimer] = useState(true)
  const [inputMinutes, setInputMinutes] = useState(0)
  const [inputSeconds, setInputSeconds] = useState(0)
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
    <div>
      <button onClick={toggleTimer}>
        {showTimer ? 'Hide Timer' : 'Show Timer'}
      </button>
      {showTimer && (
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
                value={inputMinutes}
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
                value={inputSeconds}
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
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
              >
                <path
                  d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="m-1 rounded-full bg-red-500 p-2 text-white hover:bg-red-700"
              onClick={resetTimer}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
              >
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
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
