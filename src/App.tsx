import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Widget } from "./components/Widget";

import headerImage from './assets/images/header-image.jpg';

export function App() {
  return (
    <>
      <Header />

      <MainContent />

      <Footer />

      <Widget />
    </>
  )
}