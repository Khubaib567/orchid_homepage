import React from "react";


export default function AdminLogin(){
    return(
        <div class="grid grid-rows-4 grid-flow-col gap-4 flex items-center justify-center py-20">
  {/* Login Heading */}
  <div><h1 class="text-4xl font-bold text-white flex justify-center">Admin Login</h1></div>

  {/* Email Input */}
  <div class="form-control">
  <label class="input-group input-group-lg">
    <input type="text" placeholder="Email here" class="input input-bordered input-lg bg-white" />
  </label>
</div>
{/* Password Input */}
<div class="form-control">
  <label class="input-group input-group-lg">
    <input type="text" placeholder="Password here" class="input input-bordered input-lg bg-white" />
  </label>
</div>
<div class="flex justify-center"><button class="btn btn-primary">Log In</button></div>
</div>




        
    )
}