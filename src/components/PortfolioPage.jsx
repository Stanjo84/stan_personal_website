import {useEffect, useState} from "preact/hooks"
import IndexLinks from "./IndexLinks";
import data from "../data/data.json"
import workData from "../data/works.json"

function Portfolio() {
    const [extractedData, setExtractedData] = useState([])
    const [worksData, setWorksData] = useState([])
    const [activeLink, setActiveLink] = useState(null);


    useEffect(() => {
        setWorksData(workData)
    }, []);

    useEffect(() => {
        setExtractedData(data);
    }, []);


    return (
        <div className="text container" data-id="portfolio">
            <div className="text__content">
                <div className="portfolio">
                    <div className="portfolio__grid">
                        {worksData.length > 0 && worksData.map((item, index) => (
                            <a href={item.link} className={`portfolio__single-link ${activeLink === item.data_id || (activeLink === null && index === 0) ? '' : 'hide'}`} data-link="" data-id={item.data_id} key={item.data_id} target={"_blank"}>
                                <div className={`portfolio__single ${item.app ? ' portfolio__single--app': '' }`}>
                                    <img src={`/assets/img/${item.image}`} alt="" />
                                </div>
                                <div className="portfolio__single-info">
                                    {item.info}
                                    <div className="tag">
                                        {item.tags.map(tag => (
                                            <div className="tag__single" key={tag}>{tag}</div>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {
                        extractedData.length > 0 &&  <IndexLinks titles={extractedData} setActiveLink={setActiveLink} activeLink={activeLink} />
                    }
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
