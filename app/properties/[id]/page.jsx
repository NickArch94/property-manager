'use client'
import { useEffect, useState } from 'react'
import { useParams  } from 'next/navigation'
import { fetchProperty } from '@/Utils/requests'

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchPropertyData = async () => {
      if(!id) return
      try {
        const property = await fetchProperty(id)
        setProperty(property)
      } catch (error) {
        console.error('Error fetching property:', error)
      } finally {
        setLoading(false)
      }
    }

    if (property === null) {
      fetchPropertyData()
    }

  }, [id, property])
  
  return (
    <div>
      <h1 className='text-3xl font-bold'>Property Page</h1>
      <button onClick={() => window.location.href = '/'} className='bg-blue-700 p-2'>Go Home!</button>
    </div>
  )
}

export default PropertyPage
