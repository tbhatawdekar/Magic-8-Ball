'use client'

import { useState } from 'react'
import Image from 'next/image'

const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]

export default function Home() {
  const [answer, setAnswer] = useState('')
  const [isShaking, setIsShaking] = useState(false)

  const askQuestion = () => {
    setIsShaking(true)
    setAnswer('')
    setTimeout(() => {
      setIsShaking(false)
      setAnswer(responses[Math.floor(Math.random() * responses.length)])
    }, 1000)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-4">
      <h1 className="mb-8 text-4xl font-bold text-purple-500">Magic 8 Ball</h1>
      <div className="relative">
        <Image
          src="/magic-8-ball.png"
          alt="Magic 8 Ball"
          width={300}
          height={300}
          className={`rounded-full ${isShaking ? 'animate-shake' : ''}`}
        />
        {answer && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xl font-bold text-white bg-black bg-opacity-50 p-4 rounded-full animate-fade-in">
              {answer}
            </p>
          </div>
        )}
      </div>
      <button
        onClick={askQuestion}
        className="mt-8 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
      >
        Ask
      </button>
    </main>
  )
}

