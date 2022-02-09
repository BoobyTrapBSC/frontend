import React from 'react'
import {Link} from 'react-router-dom'
import safu from '../images/vetted_graphic.png'
import scam from '../images/vetted_scammers.png'

export default function Keyfeatures() {
    return (
        <div id='keyfeatures-cont' className='py-5 overflow-hidden'>
            <div className="row" id='keyfeature-align'>
                <div className="col-lg-4 mb-4">
                    <div className="card flex-column border-0">
                        <img src={safu} alt=""/>

                        <div className="card-body">
                            <p className="card-title">Vetted Projects</p>
                            <p className="card-text">$BBT team of experienced DEVS will apply their expertise and post legit projects on our “Safe Haven” Dashboard where investors can invest without having to worry about Rugpulls and Honeypots.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card flex-column border-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="125" viewBox="0 0 332.832 164">
                            <g id="diamond_graphic" transform="translate(-699 -1309)">
                                <g id="card" transform="translate(125.5)">
                                    <g id="Rectangle_1623" data-name="Rectangle 1623" transform="translate(699 1309)" fill="#fff" stroke="#355a9b" strokeWidth="2">
                                        <rect width="114.5" height="77" rx="10" stroke="none" />
                                        <rect x="1" y="1" width="112.5" height="75" rx="9" fill="none" />
                                    </g>
                                    <g id="user-Filled" transform="translate(698 1315)">
                                        <rect id="Path" width="65" height="65" fill="rgba(255,255,255,0)" />
                                        <path id="user-Filled_1_" d="M694.271,2713.042a13.542,13.542,0,1,1,13.542,13.542A13.557,13.557,0,0,1,694.271,2713.042Zm24.692,16.442a6.232,6.232,0,0,0-4.523.59,13.667,13.667,0,0,1-13.255,0,6.27,6.27,0,0,0-4.523-.59,12.213,12.213,0,0,0-9.162,11.906v2.738a9.575,9.575,0,0,0,1.335,4.891,4.053,4.053,0,0,0,3.48,1.942h30.991a4.043,4.043,0,0,0,3.48-1.945,9.559,9.559,0,0,0,1.335-4.888v-2.738A12.207,12.207,0,0,0,718.962,2729.484Z" transform="translate(-675.312 -2692.729)" fill="#355a9b" />
                                    </g>
                                    <rect id="Rectangle_1624" data-name="Rectangle 1624" width="53" height="8" rx="4" transform="translate(750 1316)" fill="#355a9b" />
                                    <rect id="Rectangle_1625" data-name="Rectangle 1625" width="35" height="9" rx="4.5" transform="translate(768 1331)" fill="#355a9b" />
                                </g>
                                <g id="card-2" data-name="card" transform="translate(1)">
                                    <g id="Rectangle_1623-2" data-name="Rectangle 1623" transform="translate(699 1309)" fill="#fff" stroke="#cbd6d5" strokeWidth="2">
                                        <rect width="114.5" height="77" rx="10" stroke="none" />
                                        <rect x="1" y="1" width="112.5" height="75" rx="9" fill="none" />
                                    </g>
                                    <g id="user-Filled-2" data-name="user-Filled" transform="translate(698 1315)">
                                        <rect id="Path-2" data-name="Path" width="65" height="65" fill="rgba(255,255,255,0)" />
                                        <path id="user-Filled_1_2" data-name="user-Filled_1_" d="M694.271,2713.042a13.542,13.542,0,1,1,13.542,13.542A13.557,13.557,0,0,1,694.271,2713.042Zm24.692,16.442a6.232,6.232,0,0,0-4.523.59,13.667,13.667,0,0,1-13.255,0,6.27,6.27,0,0,0-4.523-.59,12.213,12.213,0,0,0-9.162,11.906v2.738a9.575,9.575,0,0,0,1.335,4.891,4.053,4.053,0,0,0,3.48,1.942h30.991a4.043,4.043,0,0,0,3.48-1.945,9.559,9.559,0,0,0,1.335-4.888v-2.738A12.207,12.207,0,0,0,718.962,2729.484Z" transform="translate(-675.312 -2692.729)" fill="#cbd6d5" />
                                    </g>
                                    <rect id="Rectangle_1624-2" data-name="Rectangle 1624" width="53" height="8" rx="4" transform="translate(750 1316)" fill="#cbd6d5" />
                                    <rect id="Rectangle_1625-2" data-name="Rectangle 1625" width="35" height="9" rx="4.5" transform="translate(768 1331)" fill="#cbd6d5" />
                                </g>
                                <g id="card-3" data-name="card" transform="translate(125.5 87)">
                                    <g id="Rectangle_1623-3" data-name="Rectangle 1623" transform="translate(699 1309)" fill="#fff" stroke="#cbd6d5" strokeWidth="2">
                                        <rect width="114.5" height="77" rx="10" stroke="none" />
                                        <rect x="1" y="1" width="112.5" height="75" rx="9" fill="none" />
                                    </g>
                                    <g id="user-Filled-3" data-name="user-Filled" transform="translate(698 1315)">
                                        <rect id="Path-3" data-name="Path" width="65" height="65" fill="rgba(255,255,255,0)" />
                                        <path id="user-Filled_1_3" data-name="user-Filled_1_" d="M694.271,2713.042a13.542,13.542,0,1,1,13.542,13.542A13.557,13.557,0,0,1,694.271,2713.042Zm24.692,16.442a6.232,6.232,0,0,0-4.523.59,13.667,13.667,0,0,1-13.255,0,6.27,6.27,0,0,0-4.523-.59,12.213,12.213,0,0,0-9.162,11.906v2.738a9.575,9.575,0,0,0,1.335,4.891,4.053,4.053,0,0,0,3.48,1.942h30.991a4.043,4.043,0,0,0,3.48-1.945,9.559,9.559,0,0,0,1.335-4.888v-2.738A12.207,12.207,0,0,0,718.962,2729.484Z" transform="translate(-675.312 -2692.729)" fill="#cbd6d5" />
                                    </g>
                                    <rect id="Rectangle_1624-3" data-name="Rectangle 1624" width="53" height="8" rx="4" transform="translate(750 1316)" fill="#cbd6d5" />
                                    <rect id="Rectangle_1625-3" data-name="Rectangle 1625" width="35" height="9" rx="4.5" transform="translate(768 1331)" fill="#cbd6d5" />
                                </g>
                                <g id="card-4" data-name="card" transform="translate(1 87)">
                                    <g id="Rectangle_1623-4" data-name="Rectangle 1623" transform="translate(699 1309)" fill="#fff" stroke="#cbd6d5" strokeWidth="2">
                                        <rect width="114.5" height="77" rx="10" stroke="none" />
                                        <rect x="1" y="1" width="112.5" height="75" rx="9" fill="none" />
                                    </g>
                                    <g id="user-Filled-4" data-name="user-Filled" transform="translate(698 1315)">
                                        <rect id="Path-4" data-name="Path" width="65" height="65" fill="rgba(255,255,255,0)" />
                                        <path id="user-Filled_1_4" data-name="user-Filled_1_" d="M694.271,2713.042a13.542,13.542,0,1,1,13.542,13.542A13.557,13.557,0,0,1,694.271,2713.042Zm24.692,16.442a6.232,6.232,0,0,0-4.523.59,13.667,13.667,0,0,1-13.255,0,6.27,6.27,0,0,0-4.523-.59,12.213,12.213,0,0,0-9.162,11.906v2.738a9.575,9.575,0,0,0,1.335,4.891,4.053,4.053,0,0,0,3.48,1.942h30.991a4.043,4.043,0,0,0,3.48-1.945,9.559,9.559,0,0,0,1.335-4.888v-2.738A12.207,12.207,0,0,0,718.962,2729.484Z" transform="translate(-675.312 -2692.729)" fill="#cbd6d5" />
                                    </g>
                                    <rect id="Rectangle_1624-4" data-name="Rectangle 1624" width="53" height="8" rx="4" transform="translate(750 1316)" fill="#cbd6d5" />
                                    <rect id="Rectangle_1625-4" data-name="Rectangle 1625" width="35" height="9" rx="4.5" transform="translate(768 1331)" fill="#cbd6d5" />
                                </g>
                                <g id="diamond" transform="translate(5.15 -102)">
                                    <path id="Path_6891" data-name="Path 6891" d="M990.757,1431.9l-7.243,10.671L998,1462.1l15.143-19.529-7.529-10.671Z" fill="none" stroke="#355a9b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    <path id="Path_6892" data-name="Path 6892" d="M983.514,1442.206h28.442" fill="none" stroke="#355a9b" strokeWidth="2" />
                                    <path id="Path_6893" data-name="Path 6893" d="M995.895,1431.549l-5.395,10.465,6.986,19.068,7.617-19.068-5.612-10.44Z" transform="translate(0.522 0.375)" fill="none" stroke="#355a9b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    <g id="Group_6252" data-name="Group 6252" transform="translate(23 102)">
                                        <path id="Path_6896" data-name="Path 6896" d="M975.083,1318.917v-7.892" fill="none" stroke="#355a9b" strokeLinecap="round" strokeWidth="2" />
                                        <path id="Path_6897" data-name="Path 6897" d="M975.083,1318.917v-7.892" transform="translate(0 55)" fill="none" stroke="#355a9b" strokeLinecap="round" strokeWidth="2" />
                                        <path id="Path_6898" data-name="Path 6898" d="M975.083,1318.917v-7.892" transform="translate(1650.155 -173.211) rotate(60)" fill="none" stroke="#355a9b" strokeLinecap="round" strokeWidth="2" />
                                        <path id="Path_6899" data-name="Path 6899" d="M975.083,1318.917v-7.892" transform="translate(1602.524 -145.711) rotate(60)" fill="none" stroke="#355a9b" strokeLinecap="round" strokeWidth="2" />
                                        <path id="Path_6898-2" data-name="Path 6898" d="M0,0V7.892" transform="translate(954.684 1330.694) rotate(120)" fill="none" stroke="#355a9b" strokeLinecap="round" strokeWidth="2" />
                                        <path id="Path_6899-2" data-name="Path 6899" d="M0,0V7.892" transform="translate(1002.316 1358.194) rotate(120)" fill="none" stroke="#355a9b" strokeLinecap="round" strokeWidth="2" />
                                    </g>
                                </g>
                            </g>
                        </svg>

                        <div className="card-body">
                            <p className="card-title">Diamond Hodlers</p>
                            <p className="card-text">The $BBT Hodlers will benefit the most as community. They would be the first to know about upcoming PROMISING and SAFU projects on BSC.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card flex-column border-0">
                        <img src={scam} alt='' style={{marginTop:"0"}}/>

                        <div className="card-body">
                            <p className="card-title">Scammers Booby-Trapped</p>
                            <p className="card-text">Our “BOOBY-TRAP” Dashboard will list all potential scams (Rugpulls & Honeypots) to help our community stay away from Frauds on DEFI.</p>
                        </div>
                    </div>
                </div>
                <Link to="/faqs" className="btn button-blue m-auto" style={{maxWidth:"125px"}}>FAQs</Link>
            </div>
        </div>
    )
}
