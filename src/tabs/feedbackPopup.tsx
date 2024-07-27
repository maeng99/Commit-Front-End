import React from 'react';
import { Link } from 'react-router-dom';
import Date from '../components/date.tsx';
import Nav from '../components/nav.tsx';
import '../App.css';

export default function Calendar() {
    const colorInfoPopup = () => {
        const popup = document.getElementById('popup');
        popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    };

    // 클릭 이벤트가 팝업 외부에서 발생하면 팝업을 닫음
    window.onclick = function (event) {
        const popup = document.getElementById('popup');
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    };

    return (
        <div className="background">
            <div id="popup" class="popup">
                <div class="popup-content">
                    <span class="close" onclick="colorInfoPopup()">
                        &times;
                    </span>
                    <img src="./img/color_info.png" class="write_color_info_img" alt="Popup Image" />
                </div>
            </div>
        </div>
    );
}
