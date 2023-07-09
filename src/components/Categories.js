import React from 'react'

const Categories = () => {
  return (
    <div class="grid grid-rows-2  items-center justify-center">
      {/* First Row */}
      <div >
        <h1 class="text-xl text-white flex justify-center">ROOMS CATEGORIES</h1>
      </div>
      {/* Second Row */}
      {/* <div class="join space-y-3"> */}
      {/* <img src="https://i.ibb.co/YLvmhgn/room1.jpg" class="join-item w-auto" alt="room1" />
  <img src="https://i.ibb.co/BPG7QKj/room3.jpg" class="join-item" alt="room1" />
  <img src="https://i.ibb.co/YLvmhgn/room1.jpg" class="join-item w-auto" alt="room3" /> */}
      {/* </div> */}
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img src="https://i.ibb.co/YLvmhgn/room1.jpg" class="w-80" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-ghost text-black">❮</a>
            <a href="#slide2" class="btn btn-ghost text-black">❯</a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src="https://i.ibb.co/BPG7QKj/room2.jpg" class="w-80" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-ghost text-black">❮</a>
            <a href="#slide3" class="btn btn-ghost text-black">❯</a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src="https://i.ibb.co/hdKJstd/room3.jpg" class="w-80" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-ghost text-black">❮</a>
            <a href="#slide1" class="btn btn-ghost text-black">❯</a>
          </div>
        </div>

      </div>


    </div>

  )
}

export default Categories