import "../stylesheets/navbar.scss";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="personal-logo">
          <img
            src="https://deandingprojects.s3.us-east-2.amazonaws.com/mstp-icon.png"
            alt="mstp-logo"
          />
        </div>
      </div>

      <div className="navbar-right">
        <a href="https://github.com/yuhmanashi/mapStatesToPosts" target="_blank">
          <button className="nav-button">
            <div className="button-logo">
              <img
                src="https://deandingprojects.s3.us-east-2.amazonaws.com/github-logo.png"
                alt="github-logo"
              />
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
