import React from 'react'
import { App, Sidebar } from 'react-admin-core'

export default function ({ children }) {
  return (
    <App
      isLogin={() => false}
      sidebar={
        <Sidebar
          config={[
            {
              title: '主页',
              page: 'index',
            },
          ]}
        />
      }
    >
      {children}
    </App>
  )
}
