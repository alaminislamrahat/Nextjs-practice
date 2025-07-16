"use client"
import React, { useEffect } from 'react'

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <li className='font-bold text-6xl text-red-700'>error fetching data</li>
    </div>
  )
}
