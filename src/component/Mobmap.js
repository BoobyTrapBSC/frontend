import { React, useState} from 'react'
import Carousel from 'react-grid-carousel'

export default function Mobmap() {
    
    const [toggleMap, setToggleMap] = useState(1);
    const toggleTab = (index) => {
        setToggleMap(index)
    }
    
    // useEffect(() => {
    // const interval = setInterval(() => {
    //     toggleTab((index) => index + 1);
    // }, 5000);
    //         return () => clearInterval(interval);
    //     }, []);
    return (
        <div className='container-fluid mobmap-cont'>
            <div className="map-nav container mt-3 mb-2">
                <Carousel cols={3} rows={1} gap={1} scrollSnap={true}>
                    <Carousel.Item>
                        <div className={toggleMap === 1 ? "map-head-1 active" : "map-head-1"} onClick={() => toggleTab(1)} id="nav-bubble">
                            <h4>Phase I</h4>
                            <p className='text-muted'>Dec 2021 - Ongoing</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={toggleMap === 2 ? "map-head-2 active" : "map-head-2"} onClick={() => toggleTab(2)} id="nav-bubble">
                            <h4>Phase II</h4>
                            <p className='text-muted'>Feb 2022 - Pending</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={toggleMap === 3 ? "map-head-3 active" : "map-head-3"} onClick={() => toggleTab(3)} id="nav-bubble">
                            <h4>Phase III</h4>
                            <p className='text-muted'>Mar 2022 - Pending</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={toggleMap === 4 ? "map-head-4 active" : "map-head-4"} onClick={() => toggleTab(4)} id="nav-bubble">
                            <h4>Phase IV</h4>
                            <p className='text-muted'>Apr - June 2022</p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="map-content container text-muted">
                <div className={toggleMap === 1 ? "content-child  active" : "content-child"}>
                    <ul>
                        <li className='ongoing'>Private Sale to collect funds for development of platform & presale marketing</li>
                        <li className='ongoing'>Beta Version of $BBT platform with "Safe Haven"</li>
                        <li className='ongoing'>Presale Marketing and promotions</li>
                        <li>Listing of 100+ Project Owners, Developers, Influencers/Promoters</li>
                    </ul>
                </div>
                <div className={toggleMap === 2 ? "content-child  active" : "content-child"}>
                    <ul>
                        <li>V1 of $BBT platform launch</li>
                        <li>Listing of more Project Owners, Developers, Influencers/Promoters</li>
                        <li>Post launch marketing campaign</li>
                        <li>Major Listings & Tendings</li>
                    </ul>
                </div>
                <div className={toggleMap === 3 ? "content-child  active" : "content-child"}>
                    <ul>
                        <li>Launch of Insurance on blockchain for $BBT holders</li>
                        <li>Marketing campaign for Insurance platform</li>
                        <li>Partnerships with major Insurance players</li>
                    </ul>
                </div>
                <div className={toggleMap === 4 ? "content-child  active" : "content-child"}>
                    <ul>
                        <li>Launchpad for projects willing to list on $BBT platform</li>
                        <li>VC Funding and Presale platforms</li>
                        <li>NFT Marketplace to be launched in Metaverse</li>
                        <li>First Insurance provider in Metaverse</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}