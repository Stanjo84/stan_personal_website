import {useState} from 'preact/hooks'
import Bio from "./components/BioPage";
import Contact from "./components/ContactPage";
import Portfolio from "./components/PortfolioPage";
import Tech from "./components/TechPage";

export function App() {
    const [showComponent, setShowComponent] = useState('bio');
    const [activeLink, setActiveLink] = useState(false);

    const btns = [
        {id: 1, name: "Bio", value: "bio"},
        {id: 2, name: "Technologies", value: "tech"},
        {id: 3, name: "Portfolio", value: "portfolio"},
        {id: 4, name: "Contact", value: "contact"}
    ]

    return (
        <main id="site-content" className="site-content">
            <div className="intro">
                <div className="intro__text">
                    Hi! This is Stan
                </div>
            </div>


            {showComponent === 'bio' && <Bio/>}
            {showComponent === 'tech' && <Tech/>}
            {showComponent === 'portfolio' && <Portfolio/>}
            {showComponent === 'contact' && <Contact/>}

            <div className="menu-main container">
                {
                    btns.map(btn => {
                        return <button key={btn.id} className={`button ${activeLink === btn.value && "button--active"}`} onClick={() => {
                            setShowComponent(btn.value)
                            setActiveLink(btn.value);
                        }}>
                            {btn.name}
                        </button>
                    })
                }
            </div>
        </main>
    )
}
