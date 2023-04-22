import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ScrollToTop from 'react-scroll-to-top';
import './ScrollToTop.css'

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <div className='scroll-top'>
      {/* <a href='#top'>
        <ArrowUpwardIcon fontSize='large' />
      </a> */}
      <ScrollToTop smooth component={<ArrowUpwardIcon fontSize='large' />} />
    </div>
  ) : null
}

export default ScrollTop
