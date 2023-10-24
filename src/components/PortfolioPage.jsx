import {useEffect, useState} from "preact/hooks"
import SelfOrder from "../assets/img/selforder.png"
import YoordiImg from "../assets/img/yoordi.png"
import KrImg from "../assets/img/kr_hp.png"
import FwgImg from "../assets/img/fwg_hp.png"
import NegishiImg from "../assets/img/negishi_hp.png"
import DieciImg from "../assets/img/negishi_hp.png"
import InProgImg from "../assets/img/mark-konig-Uu5fnOkFAdA-unsplash.jpg"
import LoasiaImg from "../assets/img/loasia.png"
import ElektImg from "../assets/img/elektron_hp.png"
import GuaveIntImg from "../assets/img/guave_int.png"
import GuaveMotImg from "../assets/img/guave_motion.png"
import EatComImg from "../assets/img/eatcommerce.png"
import PekaImg from "../assets/img/peka.png"
import BaulinkImg from "../assets/img/baulink_hp.png"
import IndexLinks from "./IndexLinks";
import data from "../assets/data/data.json"

function showWorks() {
    // Get all links from portfolio__index
    const indexLinks = document.querySelectorAll('.portfolio__index .portfolio__title');

    // Get all links from portfolio__grid
    const gridLinks = document.querySelectorAll('.portfolio__grid .portfolio__single-link');

    indexLinks.forEach(link => {
        link.addEventListener('click', () => {
            const dataId = link.getAttribute('data-id');

            gridLinks.forEach(el => {
                el.classList.add('hide')
            })
            const correspondingLink = document.querySelector(`.portfolio__grid .portfolio__single-link[data-id="${dataId}"]`);
            if (correspondingLink) {
                correspondingLink.classList.remove('hide');
            }
        });
    });
}


function Portfolio() {
    const [extractedData, setExtractedData] = useState([])


    useEffect(() => {
        showWorks()
    }, []);

    useEffect(() => {
      // let extractedData = JSON.parse(JSON.stringify(data));
        setExtractedData(data);
    }, []);


    return (
        <div className="text container" data-id="portfolio">
            <div className="text__content">
                <div className="portfolio">
                    <div className="portfolio__grid">
                        <a href="javascript:void(0)" className="portfolio__single-link" data-link="" data-id="fso">
                            <div className="portfolio__single portfolio__single--app">
                                <img src={SelfOrder} alt=""/>
                            </div>
                            <div className="portfolio__single-info">
                                SPA for Self Ordering Stations for Familie Wiesner Gastronomie restaurant brands build with Vue
                                <div className="tag">
                                    <div className="tag__single">HTML</div>
                                    <div className="tag__single">SCSS</div>
                                    <div className="tag__single">VUE</div>
                                    <div className="tag__single">Vuex</div>
                                    <div className="tag__single">Webpack</div>
                                    <div className="tag__single">Grunt</div>
                                </div>
                            </div>
                        </a>

                        <a href="javascript:void(0)" className="portfolio__single-link hide" data-link="" data-id="yoordi">
                            <div className="portfolio__single portfolio__single--app">
                                <img src={YoordiImg} alt=""/>
                            </div>
                            <div className="portfolio__single-info">
                                Customization and design integration for a restaurant's in-house order and pay SPA built with React for Familie Wiesner Gastronomie
                                <div className="tag">
                                    <div className="tag__single">tsx</div>
                                    <div className="tag__single">ts</div>
                                    <div className="tag__single">React</div>
                                    <div className="tag__single">Strapi</div>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.kitchen-republic.ch/de/home" className="portfolio__single-link hide" data-link="" target="_blank" data-id="kr">
                            <div className="portfolio__single">
                                <img src={KrImg} alt=""/>
                            </div>
                            <div className="portfolio__single-info">
                                Implementation of design for E-Commerce Website Familie Wiesner Gastronomie restaurant with Food Delivery System inc. custom Vue components
                                <div className="tag">
                                    <div className="tag__single">html</div>
                                    <div className="tag__single">scss</div>
                                    <div className="tag__single">vue</div>
                                    <div className="tag__single">vuex</div>
                                    <div className="tag__single">PHP</div>
                                    <div className="tag__single">Contao</div>
                                    <div className="tag__single">Webpack</div>
                                    <div className="tag__single">Grunt</div>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.fwg.ch/de/" className="portfolio__single-link hide" data-link="" target="_blank" data-id="fwgch">
                            <div className="portfolio__single">
                                <img src={FwgImg} alt=""/>
                            </div>
                            <div className="portfolio__single-info">
                                Company Website for Familie Wiesner Gastronomie
                                <div className="tag">
                                    <div className="tag__single">HTML</div>
                                    <div className="tag__single">SCSS</div>
                                    <div className="tag__single">JS</div>
                                    <div className="tag__single">DDEV</div>
                                    <div className="tag__single">PHP</div>
                                    <div className="tag__single">Contao</div>
                                    <div className="tag__single">Webpack</div>
                                    <div className="tag__single">Grunt</div>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.negishi.ch/de/" className="portfolio__single-link hide" data-link="" target="_blank" data-id="negishi">
                            <div className="portfolio__single">
                                <img src={NegishiImg} alt=""/>
                            </div>
                            <div className="portfolio__single-info">
                                Implement design for E-Commerce Page for Familie Wiesner Gastronomie restaurant inc. custom Vue components
                                <p>tech: Contao, Vue, Vuex</p>
                                Company Website for Familie Wiesner Gastronomie
                                <div className="tag">
                                    <div className="tag__single">HTML</div>
                                    <div className="tag__single">SCSS</div>
                                    <div className="tag__single">vue</div>
                                    <div className="tag__single">vuex</div>
                                    <div className="tag__single">PHP</div>
                                    <div className="tag__single">Contao</div>
                                    <div className="tag__single">Webpack</div>
                                    <div className="tag__single">Grunt</div>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.dieci.ch/de/" className="portfolio__single-link hide" data-link="" target="_blank" data-id="dieci">
                            <div className="portfolio__single">
                                <img src={DieciImg} alt=""/>
                            </div>
                            <div className="portfolio__single-info">
                                Integrated frontend design for Pizza delivery system (integrated with Simply) inc. custom Vue components
                                <div className="tag">
                                    <div className="tag__single">HTML</div>
                                    <div className="tag__single">SCSS</div>
                                    <div className="tag__single">js</div>
                                    <div className="tag__single">vue</div>
                                    <div className="tag__single">PHP</div>
                                    <div className="tag__single">Contao</div>
                                    <div className="tag__single">Webpack</div>
                                    <div className="tag__single">Grunt</div>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.josefdolder.ch/" className="portfolio__single-link hide" data-link="" target="_blank" data-id="dolder">
                            <div className="portfolio__single">
                                <img src={InProgImg} alt="Photo by Mark König on Unsplash"/>
                            </div>
                            <div className="portfolio__single-info">
                                New Frontend & E-Commerce Store (work-in-progress)
                                <div className="tag">
                                    <div className="tag__single">HTML</div>
                                    <div className="tag__single">SCSS</div>
                                    <div className="tag__single">vue</div>
                                    <div className="tag__single">pinia</div>
                                    <div className="tag__single">twig</div>
                                    <div className="tag__single">Contao</div>
                                    <div className="tag__single">DDEV</div>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.loasia.ch/de/" className="portfolio__single-link hide" data-link="" target="_blank" data-id="loasia">
                            <div className="portfolio__single">
                                <img src={LoasiaImg} alt=""/>
                            </div>
                            <div className="portfolio__single-info">
                                Frontend design integration for Classic Asian food Restaurant
                                <div className="tag">
                                    <div className="tag__single">HTML</div>
                                    <div className="tag__single">SCSS</div>
                                    <div className="tag__single">js</div>
                                    <div className="tag__single">PHP</div>
                                    <div className="tag__single">Contao</div>
                                    <div className="tag__single">Webpack</div>
                                    <div className="tag__single">Grunt</div>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.elektron.ch/de/" className="portfolio__single-link hide" data-link="" target="_blank" data-id="elektron">
                            <div className="portfolio__single">
                                <img src={ElektImg} alt=""/>
                            </div>
                            <div className="portfolio__single-info">
                                Company Website with custom layout for E-Commerce product presentation.
                                <div className="tag">
                                    <div className="tag__single">HTML</div>
                                    <div className="tag__single">SCSS</div>
                                    <div className="tag__single">js</div>
                                    <div className="tag__single">PHP</div>
                                    <div className="tag__single">Contao</div>
                                    <div className="tag__single">Webpack</div>
                                    <div className="tag__single">Grunt</div>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.guaveinteractive.ch/" className="portfolio__single-link hide" data-link="" target="_blank" data-id="guaveint">
                            <div className="portfolio__single">
                                <img src={GuaveIntImg} alt=""/>
                            </div>
                            <div className="portfolio__single-info">
                                Company Website Frontend Development
                                <div className="tag">
                                    <div className="tag__single">HTML</div>
                                    <div className="tag__single">SCSS</div>
                                    <div className="tag__single">js</div>
                                    <div className="tag__single">twig</div>
                                    <div className="tag__single">Contao</div>
                                    <div className="tag__single">Webpack</div>
                                    <div className="tag__single">Grunt</div>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.guavemotion.ch/" className="portfolio__single-link hide" data-link="" target="_blank" data-id="guavemot">
                            <div className="portfolio__single">
                                <img src={GuaveMotImg} alt=""/>
                            </div>
                            <div className="portfolio__single-info">
                                Company Website Frontend Development
                                <div className="tag">
                                    <div className="tag__single">HTML</div>
                                    <div className="tag__single">SCSS</div>
                                    <div className="tag__single">js</div>
                                    <div className="tag__single">twig</div>
                                    <div className="tag__single">Contao</div>
                                    <div className="tag__single">Webpack</div>
                                    <div className="tag__single">Grunt</div>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.eatcommerce.ch/" className="portfolio__single-link hide" data-link="" target="_blank" data-id="eatcom">
                            <div className="portfolio__single">
                                <img src={EatComImg} alt=""/>
                            </div>
                            <div className="portfolio__single-info">
                                Integrated Frontend Design for Guave Interactive E-Commerce Solutions
                                <div className="tag">
                                    <div className="tag__single">HTML</div>
                                    <div className="tag__single">SCSS</div>
                                    <div className="tag__single">js</div>
                                    <div className="tag__single">php</div>
                                    <div className="tag__single">Contao</div>
                                    <div className="tag__single">Grunt</div>
                                    <div className="tag__single">Webpack</div>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.peka.ch/" className="portfolio__single-link hide" data-link="" target="_blank" data-id="peka">
                            <div className="portfolio__single">
                                <img src={PekaImg} alt=""/>
                            </div>
                            <div className="portfolio__single-info">
                                Re-Build of company website with custom elements for E-Commerce
                                <div className="tag">
                                    <div className="tag__single">HTML</div>
                                    <div className="tag__single">SCSS</div>
                                    <div className="tag__single">js</div>
                                    <div className="tag__single">php</div>
                                    <div className="tag__single">Contao</div>
                                    <div className="tag__single">Grunt</div>
                                    <div className="tag__single">Webpack</div>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.baulink.ch/" className="portfolio__single-link hide" data-link="" target="_blank" data-id="baulink">
                            <div className="portfolio__single">
                                <img src={BaulinkImg} alt=""/>
                            </div>
                            <div className="portfolio__single-info">
                                Continuous Development for company website inc. Employee Portal. Re-design integration (still in progress)
                                <div className="tag">
                                    <div className="tag__single">HTML</div>
                                    <div className="tag__single">SCSS</div>
                                    <div className="tag__single">js</div>
                                    <div className="tag__single">php</div>
                                    <div className="tag__single">WordPress</div>
                                    <div className="tag__single">Vite</div>
                                    <div className="tag__single">DDEV</div>
                                </div>
                            </div>
                        </a>
                    </div>

                    {
                        console.log('%c --> ', 'background: tomato; color: white', extractedData)
                    }

                    {
                        extractedData.length > 0 && <IndexLinks titles={extractedData} />
                    }
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
