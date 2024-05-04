import React from 'react'
import Home from '../page'
import Header from '@/components/Header'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}
