import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Welcome to the Property Manager Training Program</h1>
      <Link href="/properties" className="text-blue-500 hover:underline">Show Properties</Link>
    </div>
  )
};

export default HomePage;
