import React, { useState } from 'react'

const useDisclouse = () => {
    const [isOpen,setIsopen]=useState(false)

  const onOpen=()=>{
    setIsopen(true)
  }

  const onClose=()=>{
    setIsopen(false)
  }
  return { onClose , onOpen, isOpen}
}

export default useDisclouse
