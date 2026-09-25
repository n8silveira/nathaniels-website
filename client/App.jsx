import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BibleStudies from "./pages/BibleStudies.jsx";
import Projects from "./pages/Projects.jsx";
import Ideas from "./pages/Ideas.jsx";
import About from "./pages/About.jsx";

const navigation = [
  ["/", "Home"],
  ["/bible-studies", "Bible studies"],
  ["/projects", "Projects"],
  ["/ideas", "Ideas"],
  ["/about", "About"],
];

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header>
        <div className="shell header-inner">
          <Link to="/" className="brand" aria-label="Nathaniel home">
            nathaniel<span>.</span>
          </Link>
          <nav aria-label="Main navigation">
            {navigation.map(([path, label]) => (
              <NavLink key={path} to={path} end={path === "/"}>
                {/* Preserve the About navigation edit from your local file. */}
                {path === "/about" && /^\/about\/?$/.test(pathname)
                  ? "aaa"
                  : label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bible-studies" element={<BibleStudies />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <main id="main" className="shell page">
              <h1>Page not found</h1>
              <Link to="/">Return home</Link>
            </main>
          }
        />
      </Routes>

      <footer>
        <div className="shell footer-inner">
          <span>Nathaniel Silveira</span>
          <span>A collection, always growing.</span>
        </div>
      </footer>
    </>
  );
}
