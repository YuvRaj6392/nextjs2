import React from 'react'

export default function loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center">
      <div className="w-16 h-16 relative">
        <div className="absolute top-0 left-0 w-full h-full rounded-full animate-spin-fast bg-gradient-to-r from-blue-500 to-green-500"></div>
      </div>
    </div>
  )
}
