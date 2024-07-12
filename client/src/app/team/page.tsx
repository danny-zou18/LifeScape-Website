import React from 'react';
import './TeamPage.css';

const TeamPage: React.FC = () => {
    return (
        <div>
            <div className="rcos2024">
                <h1>Meet the RCOS Team of Summer 2024!</h1>
            </div>
        
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src="danny.jpg" alt="Danny" style={{ width: "100%" }} />
                        <div className="container">
                            <h2>Danny Zou</h2>
                            <p className="title">Founder / Lead Programmer</p>
                            <p>description</p>
                            <p>example@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="justin.jpg" alt="Justin" style={{ width: "100%" }} />
                        <div className="container">
                            <h2>Justin Kim</h2>
                            <p className="title">Programmer</p>
                            <p>Some bio</p>
                            <p>example@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="ramzey.jpg" alt="Ramzey" style={{ width: "100%" }} />
                        <div className="container">
                            <h2>Ramzey Youss</h2>
                            <p className="title">Programmer</p>
                            <p>Some bio</p>
                            <p>example@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;
