import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { MapLoad } from "./components/MapLoad/MapLoad";
import { ServiceSection } from "./components/ServiceSection";
import { Widget } from "./components/Widget";

export function App() {
  return (
    <>
      <Header />

      <MainContent />

      <ServiceSection />

      <MapLoad libraries={["places"]}/>

      <Footer />

      <Widget />
    </>
  )
}