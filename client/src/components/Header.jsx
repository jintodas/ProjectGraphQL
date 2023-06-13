
import logo from "./assets/logo.png";

export default function Header() {
  return (
    <nav className="navbar" bg-light mb-4 p->
      <div className="container">
        <a className="navabr-brand" href="/">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div> GraphQL project</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
