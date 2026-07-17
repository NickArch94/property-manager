import React from 'react'
import Link from 'next/link'

const PropertiesPage = () => {
  return (
    <div>
      <h1 className="text-3xl">Properties</h1>
      <Link href="/" className="text-blue-500 hover:underline">Go Home! Haven't You Seen Enough?</Link>
    </div>
  )
}

export default PropertiesPage
