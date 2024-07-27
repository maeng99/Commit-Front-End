import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function FeedbackPopup({ onClose }) {
    return (
        <div className="popup-background">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <div>hi</div>
                {/*Popup contents*/}
            </div>
        </div>
    );
}
