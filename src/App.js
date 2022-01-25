import './App.css';
import Bottomnav from './component/Bottomnav';
import Faqs from './component/Faqs';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import Pagesafedefi from './component/Pagesafedefi';
import Ownercards from './component/Ownercards';
import Promoters from './component/Promoters';
import Influencers from './component/Influencers';
import Devcards from './component/Devcards';
import Ownerprofile from './component/Ownerprofile';

function App() {
  return (
    <div className="App">
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
          </Route>
          <Route path="/safedefi/projectowner/ownerprofile" element={<Ownerprofile />}/>
            {/* <Route></Route>
          </Route> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;