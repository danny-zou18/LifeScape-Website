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
                            <p>Some bio</p>
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
                            <p>Some bio</p>
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
                            <p>Some bio</p>
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
