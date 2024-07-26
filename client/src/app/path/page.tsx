import React from 'react';
import './AdventurePaths.css';
import initCarousel from './AdventurePaths';

const AdventurePaths: React.FC = () => {
    return (
        <div>
            <center>
                <h1>Choose Your Adventure Path!</h1>
                <h3>Select Your Class</h3>
            </center>

            <div id="carousel-wrapper">
                <div id="menu">
                    <div id="current-option">
                        <span id="current-option-text1" data-previous-text="" data-next-text=""></span>
                        <span id="current-option-text2" data-previous-text="" data-next-text=""></span>
                    </div>
                    <button id="previous-option"></button>
                    <button id="next-option"></button>
                </div>
                <div id="image"></div>
            </div>

        </div>
    );
};

export default AdventurePaths;
