import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { ServiceSection } from "./components/ServiceSection";
import { Widget } from "./components/Widget";

export function App() {
  return (
    <>
      <Header />

      <MainContent />

      <ServiceSection />

      <Footer />

      <Widget />
    </>
  )
}