




function Header() {
  return (
    
    <header>
      <video src="./video.mp4" loop autoPlay muted></video>
      <h1 id = "title">Optimum AI <br></br> Assess and Improve Your Soft Skills</h1>
      <h2 id = "tagline">Take your Soft skills to the next level with our comprehensive assessment and personalized analysis.</h2>
      <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
          Sign Up
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
          Log in
        </button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
