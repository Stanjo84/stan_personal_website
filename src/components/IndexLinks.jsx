import { useState } from "preact/hooks"

const IndexLinks = ({titles}) => {
    const [activeLink, setActiveLink] = useState(null);

    const handleClick = (dataId) => {
        setActiveLink(dataId);
    };
    return (
        <div className="portfolio__index">
            {
                titles.map((title, index) => {
                    return (
                        <a
                            href="javascript:void(0)"
                            key={index}
                            className={`portfolio__title ${activeLink === title.data_id ? 'portfolio__title--active' : ''}`}
                            onClick={() => handleClick(title.data_id)}
                            data-project=""
                            data-id={title.data_id}
                        >
                            {title.name}
                        </a>
                    )
                })
            }
        </div>
    )
}

export default IndexLinks;
