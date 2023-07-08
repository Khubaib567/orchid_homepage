import React from 'react'

const Subscribe = () => {
  return (
    <div class="grid grid-rows-5 flex justify-center bg-black space-y-2">
        <div><h1 class="flex justify-center text-xl text-white pt-5">Save Time,Save Money!</h1></div>
        <div><p class="flex justify-center text-sm text-white pt-3">Sign up and we'll send the best deals to you.</p></div>

        {/* Email row */}
        <div class="form-control">
  <label class="label">
  </label>
  <label class="input-group">
    <span>Email</span>
    <input type="text" placeholder="info@site.com" class="input input-bordered bg-white" />
  
  </label>
</div>
    {/* button row */}
<div class="flex justify-center">
<button class="btn join-item bg-blue-500">Subscribe</button>
</div>
    </div>
  )
}

export default Subscribe