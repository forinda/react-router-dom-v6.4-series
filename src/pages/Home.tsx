import { useLocation, useNavigate } from 'react-router-dom'

import React from 'react'

const Home = () => {
  const state =useLocation().state
  const navigate = useNavigate()
  navigate('/about')
  
  return (
    <div>Home</div>
  )
}

export default Home