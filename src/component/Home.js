import React from 'react'
// import News from '../component/News';
import Roadmap from '../component/Roadmap';
import Pagesafehaven from '../component/Pagesafehaven';
import Hero from '../component/Hero';
import Keyfeatures from '../component/Keyfeatures';
import CarouselHome from '../component/CarouselHome';
import Categories from '../component/Categories';
import Defiloss from '../component/Defiloss';
import Team from './Team';
// import Mobmap from '../component/Mobmap';

export default function Home() {
    return (
        <div>
            <Hero />
            <Categories />
            <CarouselHome />
            <Keyfeatures />
            <Defiloss />
            <safehaven />
            <Team/>
            <Roadmap />
            {/* <Mobmap/> */}
            {/* <News/> */}
        </div>
    )
}
