import React from "react";
import { useNavigate } from "react-router-dom";

const validateAndRedirect = (user) => {
  // Assuming you have a 'user' object with registration information
  // You can replace this with your actual user validation logic
  const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

   const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

  if (isPasswordCorrect) {
    // If user is registered, redirect to the root page
    navigate("/")
  } else {
    // If user is not registered, display an error message or take appropriate action
    alert('You are not registered. Please sign up to continue.');
    // You can also redirect to a registration page instead of showing an alert
     // navigate("/"register)
  }
};


export default function Login(){
    return(
        <div class="grid grid-rows-4 grid-flow-col gap-4 flex items-center justify-center py-20">
  {/* Login Heading */}
  <div><h1 class="text-4xl font-bold text-white flex justify-center">Log In</h1></div>

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
<div class="flex justify-center"><button class="btn btn-primary" onClick={handleClick}>Log In</button></div>
</div>




        
    )
}
