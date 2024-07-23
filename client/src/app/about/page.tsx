import React from 'react';
import './AboutPage.css';

const AboutPage: React.FC = () => {
    return (
        <div>
            <section className="about">
                <h1>About Us</h1>
                <p style={{ fontWeight: 'bold' }}>
                    LifeScape is revolutionary way to combine traditional RPG style games with modern day fitness tracking...
                </p>
                <div className="about-info">
                    <div className="about-img">
                        <img src="" alt="logo_pic" />
                    </div>
                    <div>
                        <p>
                        LifeScape is an innovative mobile application designed to transform your personal growth and productivity journey into an engaging and immersive experience.
                        Inspired by the dynamic elements of Massively Multiplayer Online Role-Playing Games (MMO-RPGs),
                        LifeScape provides a unique environment where users can set personal goals on a daily, weekly, monthly, yearly, or custom basis, track their progress,and stay motivated.
                        We are a passionate startup emerging from the Rensselaer Center for Open Source (RCOS) during the summer ARCH semester of 2024.
                        Our vision is to revolutionize the way individuals approach personal development by turning everyday tasks into exciting quests.
                        </p>
                        <button>Read More...</button>
                    </div>
                </div>
            </section>


            <footer>
                <p>&copy; Founded 2024 RCOS Summer.</p>
            </footer>
        </div>
    );
};

export default AboutPage;
