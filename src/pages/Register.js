import React from "react";


export default function Register(){
    return(
<div class="grid grid-rows-7  gap-4 flex items-center justify-center py-14">
  {/* Login Heading */}
  <div><h1 class="text-4xl font-bold text-white flex justify-center">Register</h1></div>

  {/* Username Input */}
  <div class="form-control">
  <label class="input-group input-group-lg">
    <input type="text" placeholder="Username here" class="input input-bordered input-lg bg-white" />
  </label>
</div>
{/* Email Input */}
<div class="form-control">
  <label class="input-group input-group-lg">
    <input type="text" placeholder="Email here" class="input input-bordered input-lg bg-white" />
  </label>
</div>
{/* Phone Input */}
<div class="form-control">
  <label class="input-group input-group-lg">
    <input type="text" placeholder="Phone here" class="input input-bordered input-lg bg-white" />
  </label>
</div>

{/* Password Input */}
<div class="form-control">
  <label class="input-group input-group-lg">
    <input type="text" placeholder="Password here" class="input input-bordered input-lg bg-white" />
  </label>
</div>

{/*ConfirmPassword Input */}
<div class="form-control">
  <label class="input-group input-group-lg">
    <input type="text" placeholder="confirmPassword here" class="input input-bordered input-lg bg-white" />
  </label>
</div>
<div class="flex justify-center"><button class="btn btn-primary">Get Reigster</button></div>
</div>





        
    )
}