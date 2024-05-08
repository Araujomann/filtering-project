import React from "react";
import "./style.css";
import { FiArrowRight } from "react-icons/fi";
import { PiTrademarkRegisteredBold } from "react-icons/pi";

export const Footer = ({ acronym, phrase }) => {
    return (
        <footer className="footer">
            <div className="brand-button">
                <div className="brand">
                    <h1>
                        {acronym}
                        <PiTrademarkRegisteredBold className="registered" />
                    </h1>
                </div>

                <div className="phrase-button">
                    <h2 className="phrase">{phrase}</h2>
                    <button>
                        Get Started
                        <FiArrowRight />
                    </button>
                </div>
            </div>
            <div className="right-side">
                <div className="mini-section">
                    <h3>Company</h3>
                    <p>Conpany</p>
                    <p>Resources</p>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Learn</p>
                    <p>Blog</p>
                    <p>Follow Us</p>
                </div>
                <div className="mini-section">
                    <h3>Resources</h3>
                    <p>Advertise</p>
                    <p>Partners</p>
                    <p>Affiliate</p>
                    <p>Docs</p>
                    <p>Support</p>
                    <p>Suggestions</p>
                    <p>Verification Request</p>
                    <p>Leaderboard</p>
                </div>
                <div className="mini-section">
                    <h3>Connect</h3>
                    <p>Newslatter</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Linkedin</p>
                    <p>TikTok</p>
                </div>
            </div>
        </footer>
    );
};
