import React from 'react';
import './TeamPage.css';

const TeamPage: React.FC = () => {
    return (
        <div>
            <br />

            <div className="rcos2024">
                <center>
                    <h1>Meet the RCOS Team of Summer 2024!</h1>
                </center>
            </div>

            <br />
        
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src="images/danny.png" alt="Danny_Pic" />
                        <div className="container">
                            <h2>Danny Zou</h2>
                            <p className="title">Founder / Lead Programmer</p>
                            <p>I worked on Full-Stack features, this included functionality for user creation, character creation, character overview, tasks, habits and routines.</p>
                            <p>zoud@rpi.edu</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="images/justin.png" alt="Justin_Pic" />
                        <div className="container">
                            <h2>Justin Kim</h2>
                            <p className="title">Programmer</p>
                            <p>I worked on the navigation bar as well as the subpages including the about page, team page, adventure paths, etc.</p>
                            <p>kims35@rpi.edu</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="images/default.jpg" alt="Ramzey_Pic" />
                        <div className="container">
                            <h2>Ramzey Youss</h2>
                            <p className="title">Programmer</p>
                            <p>I designed UI components for the home page,  the  login / signup screens, and the users page for the website.</p>
                            <p>youssr@rpi.edu</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;
