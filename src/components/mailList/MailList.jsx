import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <form  action="https://formspree.io/f/xrgvydqy" method="post">
      <div className="mailInputContainer">
        <input type="email" name="email" placeholder="Your Email" />
        <button type="submit" >Subscribe</button>
      </div>
      </form>
    </div>
  )
}

export default MailList