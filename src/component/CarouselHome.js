import React, { useState, useEffect } from 'react'
import Carousel from 'react-grid-carousel'
import { BiUserCircle } from 'react-icons/bi'
import Slider from "react-slick";
import client from '../client';
import {Link} from 'react-router-dom'

export default function CarouselHome() {

    const [safuProject, setSafuProject] = useState([])

    useEffect(() => {
        client.fetch(
            `*[_type in ["lprojects", "uprojects"] && trappoints == 0][0...10] {
                name,
                tracker,
                slug,
                id,
                image{
                    asset -> {
                        _id,
                        url
                    },
                    alt
                }
            }`
        ).then((data) => setSafuProject(data)).catch(console.error)
    }, []);

    const renderProjects = (safuProject, index) => {
        return (
            <div className='d-flex shadow-sm justify-content-evenly p-2 item' key={index}>
                <img src={safuProject.image.asset.url} alt='' />
                <Link style={{textDecoration:"none", color:"#000", fontSize:"16px"}} to={{ pathname: `/safehaven/safuprojects/${safuProject.slug.current}/${safuProject.id}`, state:{id:safuProject.id}}}><span className='m-auto'>{safuProject.name}</span></Link>
            </div>
        )
    }

    return (
        <div id="carousel-container">
            <div className="container mt-5">
                <p>911 of DeFi World with over 600+ BSC projects, influencers, projects and devs already audited.</p>
            </div>

            {/* LISTED TOKENS SLIDER */}
            <div className="token-slider mt-5 mx-auto">
                <div className="f-slider">
                    <Slider
                        dots={false}
                        slidesToShow={5}
                        slidesToScroll={1}
                        autoplay={true}
                        rows={1}
                        autoplaySpeed={3000}
                        responsive={[
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 4,
                                    infinite: true,
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 3,
                                    initialSlide: 2
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 2,
                                }
                            }
                        ]}
                    >
                        {safuProject.map(renderProjects)}
                    </Slider>
                </div>
            </div>

            {/* RATING SLIDER */}
            <div className="rating-slider mt-5 mx-auto">
                <Carousel rows={2} cols={3} gap={10} scrollSnap={true} loop={true} autoplay={3000} responsiveLayout={[
                    {
                        breakpoint: 1200,
                        cols: 2,
                        rows: 2
                    },
                    {
                        breakpoint: 990,
                        cols: 2,
                        rows: 2
                    },
                ]}
                    mobileBreakpoint={670}>
                    <Carousel.Item>
                        <div className="card mb-3 p-2">
                            <div className="row">
                                <div className="col d-flex m-auto">
                                    <BiUserCircle size={45} className='mx-2 my-1' />
                                    <div className="ratingfor mx-auto">
                                        <h5 className="card-title">$BBT Dev</h5>
                                        <p className="card-text"><small className="text-muted">0x0000000000...</small></p>
                                    </div>
                                    <h4 className='mx-2'>1.3</h4>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card mb-3 p-2">
                            <div className="row">
                                <div className="col d-flex m-auto">
                                    <BiUserCircle size={45} className='mx-2 my-1' />
                                    <div className="ratingfor mx-auto">
                                        <h5 className="card-title">$BBT Dev</h5>
                                        <p className="card-text"><small className="text-muted">0x0000000000...</small></p>
                                    </div>
                                    <h4 className='mx-2'>8.4</h4>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card mb-3 p-2">
                            <div className="row">
                                <div className="col d-flex m-auto">
                                    <BiUserCircle size={45} className='mx-2 my-1' />
                                    <div className="ratingfor mx-auto">
                                        <h5 className="card-title">$BBT Dev</h5>
                                        <p className="card-text"><small className="text-muted">0x0000000000...</small></p>
                                    </div>
                                    <h4 className='mx-2'>5.0</h4>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card mb-3 p-2">
                            <div className="row">
                                <div className="col d-flex m-auto">
                                    <BiUserCircle size={45} className='mx-2 my-1' />
                                    <div className="ratingfor mx-auto">
                                        <h5 className="card-title">$BBT Dev</h5>
                                        <p className="card-text"><small className="text-muted">0x0000000000...</small></p>
                                    </div>
                                    <h4 className='mx-2'>3.4</h4>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card mb-3 p-2">
                            <div className="row">
                                <div className="col d-flex m-auto">
                                    <BiUserCircle size={45} className='mx-2 my-1' />
                                    <div className="ratingfor mx-auto">
                                        <h5 className="card-title">$BBT Dev</h5>
                                        <p className="card-text"><small className="text-muted">0x0000000000...</small></p>
                                    </div>
                                    <h4 className='mx-2'>7.9</h4>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card mb-3 p-2">
                            <div className="row">
                                <div className="col d-flex m-auto">
                                    <BiUserCircle size={45} className='mx-2 my-1' />
                                    <div className="ratingfor mx-auto">
                                        <h5 className="card-title">$BBT Dev</h5>
                                        <p className="card-text"><small className="text-muted">0x0000000000...</small></p>
                                    </div>
                                    <h4 className='mx-2'>9.5</h4>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}