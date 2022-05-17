import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          {new Date().getFullYear()} copyright text{" "}
          <Link className="grey-text text-lighten-4 right" to="/">
            Repo
          </Link>
        </div>
      </div>
    </footer>
  );
}
