import React, { useState } from 'react'
import "./Home.css";// You can also use <link> for styles
// ..

const Home = () => {
  return (
    <>
      <div className="home-main">
        <div className="bottom">
          <video loop muted autoPlay className='video'>
            <source src='/desktop_bg.mp4' type='video/mp4' />
          </video>
          <div className="texts">
            <h1>NUNGSHIFY</h1>
            <p data-aos="flip-left" data-aos-duration="2000" data-aos-delay="500" >"can hear it..."</p>
          </div>
        </div>
        <img src="/window_view.png" className='top' />

      </div>
    </>
  )
}

export default Home