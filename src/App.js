import React from "react";
import About from './components/About'
import Navigation from './components/Navigation'
import Project from './components/Project'
import Footer from './components/Footer'

export default function App() {
  return (
    <main>
      <Navigation />
      <About />
      <Project />
      <Footer />
    </main>
  );
}