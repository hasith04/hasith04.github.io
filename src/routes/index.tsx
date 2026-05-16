import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Photography from "@/components/Photography";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jai Hasith — CSE Student, Designer & Tech Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Jai Hasith Chinnakotla — CSE student at Apollo University. Creative design, Android modding, photography and modern web experiences.",
      },
      { property: "og:title", content: "Jai Hasith — Portfolio" },
      {
        property: "og:description",
        content:
          "Designer · Developer · Photographer. A premium portfolio of work, services and pixels.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Photography />
      <Contact />
      <Footer />
      <Toaster theme="dark" position="bottom-center" />
    </main>
  );
}
