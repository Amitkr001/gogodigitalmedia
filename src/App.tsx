import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

const SellMusicPage = lazy(() => import("./components/pages/SellMusicPage"));
const ServicesPage = lazy(() => import("./components/pages/ServicesPage"));
const ArtistsPage = lazy(() => import("./components/pages/ArtistsPage"));
const BlogPage = lazy(() => import("./components/pages/BlogPage"));
const AboutPage = lazy(() => import("./components/pages/AboutPage"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell-music" element={<SellMusicPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
