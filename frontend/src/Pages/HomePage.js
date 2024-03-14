import React from 'react'
import '../style.css'
import Navbar from '../Components/Navbar';

function HomePage() {
  return (
    <div className="home">
        < Navbar/>
      <div className="main">
        <div className="main-center">
          <h1>Welcome to our website</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas omnis cumque, dolores dignissimos molestiae <br /> adipisci amet necessitatibus quam. Ut, consequatur.</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage