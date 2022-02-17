import './App.css';
import Bottomnav from './component/Bottomnav';
import Faqs from './component/Faqs';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import Pagesafehaven from './component/Pagesafehaven';
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
import Boobytrap from './component/Boobytrap';

function App() {

  return (
    <div className="App" id='App'>
      <Router>
        <Navbar />
        <Bottomnav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="safehaven" element={<Pagesafehaven />} >
            <Route path="projectowner" element={<Ownercards />} />
            <Route path="influencers" element={<Influencers />} />
            <Route path="developers" element={<Devcards />} />
            <Route path="promoters" element={<Promoters />} />
            <Route path="safuprojects" element={<Safecards/>}/>
            <Route path="boobytrap" element={<Boobytrap/>}/>
            <Route path="upcomingprojects" element={<UpcomingCards/>}/>
            <Route path="ongoingprojects" element={<Ongoingcards/>}/>
          </Route>
          <Route path="/safehaven/projectowner/:slug/:id/" element={<Ownerprofile />}/>
          <Route path="/safehaven/developers/:slug/:id/" element={<Devprofile />}/>
          <Route path="/safehaven/influencers/:slug/:id/" element={<InfluencerProfile/>}/>
          <Route path="/safehaven/promoters/:slug/:id/" element={<PromoterProfile/>}/>
          <Route path="/safehaven/safuprojects/:slug/:id" element={<Projectpage/>}/>
          <Route path="/safehaven/ongoingprojects/:slug/:id" element={<Ongoingpage/>}/>
          <Route path="/safehaven/upcomingprojects/:slug/:id" element={<Projectpage/>}/>
          <Route path="/safehaven/boobytrap/:slug/:id" element={<Projectpage/>}/>
          <Route path="*" element={<Page404/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;