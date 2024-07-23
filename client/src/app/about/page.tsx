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
