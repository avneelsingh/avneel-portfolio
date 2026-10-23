import { useEffect } from "react";
import { Route, Routes, useRoutePath } from "./lib/router";
import { initLenis } from "./lib/lenis";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const knownPaths = ["/", "/about", "/projects", "/contact"];

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Avneel Singh — Software & Computer Science",
    description: "Portfolio of Avneel Singh, M.Tech Computer Science student at IIT Bhubaneswar, showcasing software development, web projects, and applied AI/ML work.",
  },
  "/about": {
    title: "About — Avneel Singh",
    description: "Education, skills, achievements, and technical interests of Avneel Singh, a Computer Science postgraduate at IIT Bhubaneswar.",
  },
  "/projects": {
    title: "Projects — Avneel Singh",
    description: "Selected web development and machine-learning projects by Avneel Singh, including implementation details and technology stacks.",
  },
  "/contact": {
    title: "Contact — Avneel Singh",
    description: "Contact Avneel Singh about software engineering, projects, research, and AI/ML.",
  },
};

export default function App() {
  const path = useRoutePath();

  useEffect(() => {
    const lenis = initLenis();
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [path]);

  useEffect(() => {
    const metadata = pageMetadata[path] || {
      title: "Page not found — Avneel Singh",
      description: "The requested page could not be found. Return to Avneel Singh’s portfolio homepage.",
    };
    const pageUrl = new URL(path, window.location.origin).href;
    document.title = metadata.title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const twitterTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
    const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');

    if (description) description.content = metadata.description;
    if (ogTitle) ogTitle.content = metadata.title;
    if (ogDescription) ogDescription.content = metadata.description;
    if (ogUrl) ogUrl.content = pageUrl;
    if (canonical) canonical.href = pageUrl;
    if (twitterTitle) twitterTitle.content = metadata.title;
    if (twitterDescription) twitterDescription.content = metadata.description;
    if (robots) robots.content = knownPaths.includes(path) ? "index, follow" : "noindex, follow";
  }, [path]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        {knownPaths.includes(path) ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        ) : (
          <NotFound />
        )}
      </main>
      <Footer />
    </>
  );
}