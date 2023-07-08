import React from 'react'
import { Link } from "react-router-dom";


function Carousel(props) {
  return (
    <>
<div class="carousel w-full">
  <div class="carousel-item w-full bg-[url('https://i.ibb.co/q0K5PDh/image1.jpg')] bg-cover bg-no-repeat h-80">
    
  <div class="card-body">
    <h1 class="card-title text-black font-bold">OUR BRAND TITLE</h1>
    <p class="text-black font-semibold"><q>Experience the exceptional hospitality at Orchads Cottage Hotel Karachi, Pak</q></p>
    <div class="join space-x-1">
        
        {props.pages.map((page) => (
              <Link key={page.id} to={page.path}>
                <button class="btn join-item bg-blue-500">{page.name}</button>
              </Link>
            ))}
            
    </div>
    </div> 
  </div> 
</div> 
    </>
  )
}

export default Carousel