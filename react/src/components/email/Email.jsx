import "./Email.css"

const Email = () => {
  return (
    <div className="email-container">
      <h1 className="email-title">Save time, save money!</h1>
      <span className="email-desc">Sign up and we'll send the best deals to you</span>
      <div className="email-inputs">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Email