import React from 'react'

type Props = {
  children:React.ReactNode
}

const HText = ({children}: Props) => {
  return (
    <div>
      
      <h1 className='bg-violet-400 hover:bg-red-400 w-35 rounded-lg font  text-white text-center py-2'>
        {children}
      </h1>
      
    </div>
  )
}

export default HText