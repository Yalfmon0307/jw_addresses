import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <h1>jw_addresses</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </>
  );
}
