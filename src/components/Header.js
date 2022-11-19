import logo from "../assets/images/logo_transparent.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center -translate-x-1/2 left-1/2 mt-5 px-8 py-2 backdrop-blur-md rounded-lg w-11/12 fixed">
      <Link to="/">
        <img src={logo} alt="logo" width="100px" />
      </Link>
      <nav className="flex flex-row">
        {nav_items.map((item, key) => (
          <Link
            id={key}
            to={item.url}
            className="ml-3 px-2 py-2 hover:underline hover:text-emerald-700 decoration-emerald-600 duration-300"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

const nav_items = [
  { label: "About", url: "/about" },
  { label: "Blog", url: "/blog" },
  { label: "Contact", url: "/contact" },
];
