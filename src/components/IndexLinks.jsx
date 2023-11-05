import { useState } from "preact/hooks"

const IndexLinks = ({titles, setActiveLink, activeLink}) => {

    return (
        <div className="portfolio__index">
            {
                titles.map((title, index) => {
                    return (
                        <button
                            key={index}
                            className={`portfolio__title ${activeLink === title.data_id || (activeLink === null && index === 0) ? 'portfolio__title--active' : ''}`}
                            onClick={() => setActiveLink(title.data_id)}
                            data-project=""
                            data-id={title.data_id}
                        >
                            {title.name}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default IndexLinks;
