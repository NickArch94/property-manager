import React from 'react'
import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'
import AuthProvider from '@/components/AuthProvider'

export const metadata = {
    title: 'Property Manager Training | Discover the Best Practices for Property Management',
    description: 'Learn the ins and outs of property management with our comprehensive training program. Gain valuable insights, tips, and strategies to excel in the property management industry.',
    keywords: 'property management, training, best practices, property management industry, property management tips, property management strategies',
}

const MainLayout = ({children}) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <div>{children}</div>
        </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout
