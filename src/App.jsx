import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Services />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
