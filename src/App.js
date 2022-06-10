import { ThemeProvider } from "styled-components";
import GlobalStyles from './styles/GlobalStyles'
import {light} from "./styles/Themes"


import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from "./components/sections/About";
import Mint from "./components/sections/Mint";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <GlobalStyles/>
    <ThemeProvider theme={light}  >
    <Navigation />
    <Home />
    <About />
    <Mint />
    <Footer />
    </ThemeProvider>
    
    </>
  );
}

export default App;
