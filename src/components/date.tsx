import React from 'react';
import '../App.css';

export default function ShowDate() {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()}`;

    return (
        <div style={{ fontFamily: 'Pretendard-SemiBold', fontSize: '18px', textAlign: 'left', marginBottom: '10px' }}>
            Today.&nbsp;
            <span style={{ fontFamily: 'Pretendard-ExtraBold', fontSize: '28px', color: '#0D2259' }}>
                {formattedDate}
            </span>
        </div>
    );
}
