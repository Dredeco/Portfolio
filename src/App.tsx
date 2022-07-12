import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";


export function App() {
  return (
    <div className="relative max-w-[1920px] h-full align-middle text-center justify-center">
      <Header />

      <Home />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>
  )
  }
