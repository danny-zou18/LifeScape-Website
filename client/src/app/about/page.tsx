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
                        LifeScape provides a unique environment where users can set personal goals on a daily, weekly, monthly, yearly, or custom basis, track their progress, and stay motivated.
                        In LifeScape, your reallife tasks and objectives become exciting quests.
                        Completing these goals is akin to completing a quest in a game, unlocking new levels and rewards that mirror your accomplishments in real life.
                        Each user has their own character that they can level up and upgrade using the rewards earned from completing quests.
                        This gamified approach adds an extra layer of motivation to everyday activities.
                        Moreover, LifeScape allows users to tailor their characters to specific classes based on their daily activities.
                        For example, a user who studies a lot can develop their character into a mage, while someone who works out frequently can evolve their character into a barbarian of some sort.
                        This customization adds a personalized touch to the experience, making the journey of personal growth more relatable and enjoyable.
                        By turning personal development into a game-like adventure, LifeScape aims to make personal growth and productivity both fun and rewarding.
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
