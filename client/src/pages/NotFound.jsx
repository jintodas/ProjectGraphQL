import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="d-flex flex-colum
      justify-content-center align-items-center mt-5"
    >
      <FaExclamationTriangle className="text-danger" size="5em" />
      <h1>404</h1>
      <p className="lead">Page Not Found</p>

      <Link to='/' className="btn btn-primary">Go Back</Link>
    </div>
  );
}
