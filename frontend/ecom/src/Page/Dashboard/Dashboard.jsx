import React from 'react'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import SalesOverviewByMonths from './Components/SalesOverviewByMonths'

export default function Dashboard() {
  return (
    <div>
        <Navbar/>
        <Body/>
        <SalesOverviewByMonths/>
    </div>
  )
}
