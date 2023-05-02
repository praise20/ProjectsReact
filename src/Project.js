import React from 'react'

function Header(){
    return(
      <div className='theme'>
        <h1>My React Journey</h1>
        {/* <p><a className='float' target='_blank' href='https://journey-mu.vercel.app/'>My Javascript Journey</a></p>    */}
      </div>
    )
  }
  function Main(){
    return(
      <>
      <h2 style={{padding:20}}>Here are some of my react projects</h2>
      <ul>
        <li>Business Card: project to learn react basics <button><a  className='link'  href='https://profile-one-red.vercel.app/' target='_blank'>View</a></button></li>
        <li>Short stays website: projects focused on props and map() <button><a className='link' href='https://rentals-sooty.vercel.app' target='_blank'>View</a></button></li>
        <li>Travel Bucketlist website: projects that's also focused on props and map() <button><a className='link' href='https://travel-sand-iota.vercel.app/' target='_blank'>View</a></button></li>
        <li>Counter webpage: projects focused on useState <button><a className='link' href='https://counter-react-taupe.vercel.app' target='_blank'>View</a></button></li>
        <li>Meme generator: projects focused useState,conditional rendering, forms and useEffect <button><a className='link' href='https://meme-generator-rho-lake.vercel.app/' target='_blank'>View</a></button></li>
      </ul>
      </>
    )
  }

function Project() {
  return (
    <>
    <Header />
    <Main />
    </>
  )
}

export default Project