import './App.css';
import Bottomnav from './component/Bottomnav';
import Faqs from './component/Faqs';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import Pagesafedefi from './component/Pagesafedefi';
import Ownercards from './component/Ownercards';
import Promoters from './component/Promoters';
import Influencers from './component/Influencers';
import Devcards from './component/Devcards';
import Ownerprofile from './component/Ownerprofile';
import Page404 from './component/Page404';
import Safecards from './component/Safecards';
import Projectpage from './component/Projectpage';
import UpcomingCards from './component/upcomingCards';
import Devprofile from './component/Devprofile';
import InfluencerProfile from './component/InfluencerProfile';
import PromoterProfile from './component/PromoterProfile';
import Ongoingcards from './component/Ongoingcards';
import Ongoingpage from './component/Ongoingpage';


function App() {

  return (
    <div className="App" id='App'>
      <Router>
        <Navbar />
        <Bottomnav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="safedefi" element={<Pagesafedefi />} >
            <Route path="projectowner" element={<Ownercards />} />
            <Route path="influencers" element={<Influencers />} />
            <Route path="developers" element={<Devcards />} />
            <Route path="promoters" element={<Promoters />} />
            <Route path="safuprojects" element={<Safecards/>}/>
            <Route path="upcomingprojects" element={<UpcomingCards/>}/>
            <Route path="ongoingprojects" element={<Ongoingcards/>}/>
          </Route>
          <Route path="/safedefi/projectowner/:slug/:id/" element={<Ownerprofile />}/>
          <Route path="/safedefi/developers/:slug/:id/" element={<Devprofile />}/>
          <Route path="/safedefi/influencers/:slug/:id/" element={<InfluencerProfile/>}/>
          <Route path="/safedefi/promoters/:slug/:id/" element={<PromoterProfile/>}/>
          <Route path="/safedefi/safuprojects/:slug/" element={<Projectpage/>}/>
          <Route path="/safedefi/ongoingprojects/:slug/:id" element={<Ongoingpage/>}/>
          <Route path="*" element={<Page404/>} />
            {/* <Route></Route>
          </Route> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;