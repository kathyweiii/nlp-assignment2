import { Outlet, Link } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/flashcard">Flashcard</Link>
          </li>
          <li>
            <Link to="/translate">Translate</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
