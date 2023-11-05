import {useEffect, useState} from 'preact/hooks'
import Bio from "./components/BioPage";
import Contact from "./components/ContactPage";
import Portfolio from "./components/PortfolioPage";
import Tech from "./components/TechPage";
import {CSSTransition, SwitchTransition} from "react-transition-group";

export function App() {
    const [showComponent, setShowComponent] = useState(window.location.hash.slice(1));

    const btns = [
        {id: 1, name: "Bio", value: "bio"},
        {id: 2, name: "Technologies", value: "tech"},
        {id: 3, name: "Portfolio", value: "portfolio"},
        {id: 4, name: "Contact", value: "contact"}
    ]

    useEffect(() => {
        window.location.hash = showComponent;
    }, [showComponent]);

    useEffect(() => {
        const handleHashChange = () => {
            const newHash = window.location.hash.slice(1);
            if (newHash) {
                setShowComponent(newHash);
            }
        };

        window.addEventListener('hashchange', handleHashChange);

        // Call the handler right away in case the page is loaded with a hash already
        handleHashChange();

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const handleButtonClick = (componentName) => {
        setShowComponent(componentName); // Update the component to be shown
    };

    const displayContent = showComponent || 'bio';

    return (
        <main id="site-content" className="site-content">
            <div className="intro">
                <div className="intro__text">
                    Hi! This is Stan
                </div>
            </div>

            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={displayContent}
                    addEndListener={(node, done) => {
                        node.addEventListener('transitionend', done, false);
                    }}
                    classNames="fade"
                >
                    <div>
                        {displayContent === 'bio' && <Bio />}
                        {displayContent === 'tech' && <Tech />}
                        {displayContent === 'portfolio' && <Portfolio />}
                        {displayContent === 'contact' && <Contact />}
                    </div>
                </CSSTransition>
            </SwitchTransition>


                <nav className="menu-main container" role="navigation" aria-label="Main">
                    {
                        btns.map(btn => {
                            return <button
                                key={btn.id}
                                className={`button ${showComponent === btn.value ? "button--active" : ""}`}
                                onClick={() => handleButtonClick(btn.value)}
                            >
                                {btn.name}
                            </button>
                        })
                    }
                </nav>
        </main>
)
}
