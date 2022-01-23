import React from 'react'
import defibg from '../images/graphic_dashboard.png'

export default function Defiloss() {
    return (
        <div id='defiloss-cont' className='text-start py-5 mx-auto'>
            <div className="defi-main px-0">
                <h2>In the past year, the DeFi world<br/>has seen over $12 billion in fraud.</h2>
                <p>Scammers are out there planning new and innovative ways to commit frauds and rob millions of people of their hard earned income. Not everyone is expert at identifying potential Rugpulls and Honeypots and most novice investors fall in the trap of these scams. $BBT is building a Booby-Trap for such scammers by calling them out at the earliest on our “Booby Trap” Dashboard.</p>
            </div>
            <div className="container secondary-cont px-0 pt-0" style={{display:"flex",}}>
                <div className="col">
                    <div className="defi-desc">
                        <p>Safe Heaven</p>
                        <p>Fear of fraud leads to most investors missing out on legit projects and thus unfulfilled dream of financial freedom. $BBT will bring legit projects on its “Safe Heavens” Dashboard and let investors benefit by investing in SAFU projects.</p>
                    </div>
                    <div className="defi-desc">
                        <p>Booby Trap</p>
                        <p>Booby Trap will list information on all potential Rugpulls and Honeypots, keeping track of the exploits found in their contracts and the transfers from these wallets. This dashboard will help investors make well-informed decisions.</p>
                    </div>
                </div>
                <div className="col w-50">
                    <img className='defibg' src={defibg} alt="" />
                </div>
            </div>
        </div>
    )
}