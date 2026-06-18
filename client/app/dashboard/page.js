import ProtectedRoute from '@/components/auth/ProtectedRoute'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import React, { Children } from 'react'

const page = () => {
  return (
    <ProtectedRoute>
      <DashboardLayout/>
    </ProtectedRoute>
  )
}

export default page
