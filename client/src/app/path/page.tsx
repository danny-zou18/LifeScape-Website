"use client";

import React, { useEffect } from 'react';
import './AdventurePaths.css';

const AdventurePaths: React.FC = () => {
    useEffect(() => {
        const slider = document.querySelector(".items") as HTMLElement;
        const slides = document.querySelectorAll(".item");
        const buttons = document.querySelectorAll(".button");

        let current = 0;
        let prev = slides.length - 1;
        let next = current + 1;

        const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

        const gotoNext = () => current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);

        const gotoNum = (number: number) => {
            current = number;
            prev = current - 1;
            next = current + 1;

            slides.forEach(slide => {
                slide.classList.remove("active", "prev", "next");
            });

            if (next === slides.length) {
                next = 0;
            }

            if (prev === -1) {
                prev = slides.length - 1;
            }

            slides[current].classList.add("active");
            slides[prev].classList.add("prev");
            slides[next].classList.add("next");
        };

        buttons.forEach((button, i) => {
            button.addEventListener("click", () => i === 0 ? gotoPrev() : gotoNext());
        });

        // Clean up event listeners on component unmount
        return () => {
            buttons.forEach((button, i) => {
                button.removeEventListener("click", () => i === 0 ? gotoPrev() : gotoNext());
            });
        };
    }, []);

    return (
        <div className="adventure-paths-container">
            <div className="description">
                <center>
                    <h1>Find Your Adventure Path!</h1>
                    <h3>Discover the best hero class for you to explore</h3>
                </center>
            </div>
            <div className="items">
                <div className="item active">
                    <img src="images/knight.png" alt="Knight" />
                </div>
                <div className="item next">
                    <img src="images/healer.png" alt="Healer" />
                </div>
                <div className="item">
                    <img src="images/mage.png" alt="Mage" />
                </div>
                <div className="item">
                    <img src="images/default.jpg" alt="Default" />
                </div>
                <div className="item prev">
                    <img src="images/default.jpg" alt="Default" />
                </div>
                <div className="button-container">
                    <div className="button">&lt;</div>
                    <div className="button">&gt;</div>
                </div>
            </div>
        </div>
    );
};

export default AdventurePaths;
