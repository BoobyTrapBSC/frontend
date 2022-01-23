import React from 'react'
import Carousel from 'react-grid-carousel'
import cake from '../images/cake.svg'
import ryoshi from '../images/ryoshilogo.svg'
import venus from '../images/venus.svg'
import everrise from '../images/everrise.svg'
import tokonft from '../images/tokonft-logo.svg'
import { BiUserCircle } from 'react-icons/bi'

export default function CarouselHome() {

    return (
        <div id="carousel-container">
            <div className="container mt-5">
                <p>911 of DeFi World with over 600+ BSC projects, influencers, projects and devs already audited.</p>
            </div>

            {/* LISTED TOKENS SLIDER */}
            <div className="token-slider mt-5 mx-auto">
                <Carousel cols={5} rows={1} gap={10} loop={true} scrollSnap={true} autoplay={3000} responsiveLayout={[
                {
                  breakpoint: 1200,
                  cols: 4,
                },
                {
                  breakpoint: 990,
                  cols: 3,
                },
              ]}
              mobileBreakpoint={670}>
                    <Carousel.Item>
                        <div style={{ backgroundColor: "#f1f1f1", width: "fit-content", padding: "8px 25px", borderRadius: "10px" }}>
                            <img src={cake} alt=''/>
                            <span className='mx-2'>Project A</span>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ backgroundColor: "#f1f1f1", width: "fit-content", padding: "8px 25px", borderRadius: "10px" }}>
                            <img src={tokonft} alt=''/>
                            <span className='mx-2'>Project B</span>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ backgroundColor: "#f1f1f1", width: "fit-content", padding: "8px 25px", borderRadius: "10px" }}>
                            <img src={venus}  alt=''/>
                            <span className='mx-2'>Project C</span>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ backgroundColor: "#f1f1f1", width: "fit-content", padding: "8px 25px", borderRadius: "10px" }}>
                            <img src={everrise} alt=''/>
                            <span className='mx-2'>Project D</span>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ backgroundColor: "#f1f1f1", width: "fit-content", padding: "8px 25px", borderRadius: "10px" }}>
                            <img src={ryoshi} alt=''/>
                            <span className='mx-2'>Project E</span>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* RATING SLIDER */}
            <div className="rating-slider mt-5 mx-auto">
                <Carousel rows={2} cols={3} gap={10} scrollSnap={true} loop={true} autoplay={3000} responsiveLayout={[
                {
                  breakpoint: 1200,
                  cols: 2,
                  rows:2
                },
                {
                  breakpoint: 990,
                  cols: 2,
                  rows:2
                },
              ]}
              mobileBreakpoint={670}>
                    <Carousel.Item>
                        <div className="card mb-3 p-2">
                            <div className="row">
                                <div className="col d-flex m-auto">
                                    <BiUserCircle size={45} className='mx-2 my-1'/>
                                    <div className="ratingfor mx-auto">
                                        <h5 className="card-title">$BBT Dev</h5>
                                        <p className="card-text"><small className="text-muted">0x0000000000...</small></p>
                                    </div>
                                    <h4 className='mx-2'>1.3</h4>
                                </div>
                                <div className="card-body">
                                    <p className="card-text text-justify">I have had it good and bad with TokoNFT but my story has changed for good since I joined Unlock Asset (they give you great value for your money), words don't cut...</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="card mb-3 p-2">
                            <div className="row">
                                <div className="col d-flex m-auto">
                                    <BiUserCircle size={45} className='mx-2 my-1'/>
                                    <div className="ratingfor mx-auto">
                                        <h5 className="card-title">$BBT Dev</h5>
                                        <p className="card-text"><small className="text-muted">0x0000000000...</small></p>
                                    </div>
                                    <h4 className='mx-2'>8.4</h4>
                                </div>
                                <div className="card-body">
                                    <p className="card-text text-justify">I have had it good and bad with TokoNFT but my story has changed for good since I joined Unlock Asset (they give you great value for your money), words don't cut...</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="card mb-3 p-2">
                            <div className="row">
                                <div className="col d-flex m-auto">
                                    <BiUserCircle size={45} className='mx-2 my-1'/>
                                    <div className="ratingfor mx-auto">
                                        <h5 className="card-title">$BBT Dev</h5>
                                        <p className="card-text"><small className="text-muted">0x0000000000...</small></p>
                                    </div>
                                    <h4 className='mx-2'>5.0</h4>
                                </div>
                                <div className="card-body">
                                    <p className="card-text text-justify">I have had it good and bad with TokoNFT but my story has changed for good since I joined Unlock Asset (they give you great value for your money), words don't cut...</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="card mb-3 p-2">
                            <div className="row">
                                <div className="col d-flex m-auto">
                                    <BiUserCircle size={45} className='mx-2 my-1'/>
                                    <div className="ratingfor mx-auto">
                                        <h5 className="card-title">$BBT Dev</h5>
                                        <p className="card-text"><small className="text-muted">0x0000000000...</small></p>
                                    </div>
                                    <h4 className='mx-2'>3.4</h4>
                                </div>
                                <div className="card-body">
                                    <p className="card-text text-justify">I have had it good and bad with TokoNFT but my story has changed for good since I joined Unlock Asset (they give you great value for your money), words don't cut...</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="card mb-3 p-2">
                            <div className="row">
                                <div className="col d-flex m-auto">
                                    <BiUserCircle size={45} className='mx-2 my-1'/>
                                    <div className="ratingfor mx-auto">
                                        <h5 className="card-title">$BBT Dev</h5>
                                        <p className="card-text"><small className="text-muted">0x0000000000...</small></p>
                                    </div>
                                    <h4 className='mx-2'>7.9</h4>
                                </div>
                                <div className="card-body">
                                    <p className="card-text text-justify">I have had it good and bad with TokoNFT but my story has changed for good since I joined Unlock Asset (they give you great value for your money), words don't cut...</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="card mb-3 p-2">
                            <div className="row">
                                <div className="col d-flex m-auto">
                                    <BiUserCircle size={45} className='mx-2 my-1'/>
                                    <div className="ratingfor mx-auto">
                                        <h5 className="card-title">$BBT Dev</h5>
                                        <p className="card-text"><small className="text-muted">0x0000000000...</small></p>
                                    </div>
                                    <h4 className='mx-2'>9.5</h4>
                                </div>
                                <div className="card-body">
                                    <p className="card-text text-justify">I have had it good and bad with TokoNFT but my story has changed for good since I joined Unlock Asset (they give you great value for your money), words don't cut...</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    {/* <Carousel.Item>
                    <div className="card mb-3 p-2">
                            <div className="row">
                                <div className="col d-flex m-auto">
                                    <BiUserCircle size={45} className='mx-2 my-1'/>
                                    <div className="ratingfor mx-auto">
                                        <h5 className="card-title">$BBT Dev</h5>
                                        <p className="card-text"><small className="text-muted">0x0000000000...</small></p>
                                    </div>
                                    <h4 className='mx-2'>1.3</h4>
                                </div>
                                <div className="card-body">
                                    <p className="card-text text-justify">I have had it good and bad with TokoNFT but my story has changed for good since I joined Unlock Asset (they give you great value for your money), words don’t cut...</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="card mb-3 p-2">
                            <div className="row">
                                <div className="col d-flex m-auto">
                                    <BiUserCircle size={45} className='mx-2 my-1'/>
                                    <div className="ratingfor mx-auto">
                                        <h5 className="card-title">$BBT Dev</h5>
                                        <p className="card-text"><small className="text-muted">0x0000000000...</small></p>
                                    </div>
                                    <h4 className='mx-2'>1.3</h4>
                                </div>
                                <div className="card-body">
                                    <p className="card-text text-justify">I have had it good and bad with TokoNFT but my story has changed for good since I joined Unlock Asset (they give you great value for your money), words don’t cut...</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item> */}
                </Carousel>
            </div>
        </div>
    )
}