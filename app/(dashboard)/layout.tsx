import TopBar from '@/components/TopBar'
import React from 'react'

const DashboardLayout = (props: {children: React.ReactNode}) => {
  return (
    <div>
      <header>
        <TopBar />
      </header>
      {props.children}</div>
  )
}

export default DashboardLayout