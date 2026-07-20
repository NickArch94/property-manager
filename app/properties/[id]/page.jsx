'use client'

import { useRouter, useParams, useSearchParams, usePathName } from 'next/navigation'

const PropertyPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { id } = useParams();
  const name = searchParams.get('name');
  const pathName = usePathName();

  return (
    <div>
      <h1 className='text-3xl font-bold'>Property Page</h1>
      <button onClick={() => router.push('/')} className='bg-blue-700 p-2'>Go Home! {pathName}</button>
    </div>
  )
}

export default PropertyPage
