import { useState, useEffect } from 'react'

const useWindow = () => {
  const [windowWidth, setWindowWidth] = useState(undefined)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth)
      }
      window.addEventListener('resize', handleResize)

      handleResize()

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])
  return windowWidth
}

export default useWindow
