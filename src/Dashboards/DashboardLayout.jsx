import React from 'react'
import AntdSidebar from '../sidebar/AntdSidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <>
     <div
        style={{
            display: 'flex',
            flexDirection: 'row',
            height: '100vh',
          }}
        >
             <AntdSidebar/>
             <div style={{ flex: 1, padding: '16px', overflow: 'auto' }}>
        <Outlet /> {/* This renders nested route components like Dashboard, Inventory, etc */}
      </div>
        </div>
    </>
  )
}

export default DashboardLayout
