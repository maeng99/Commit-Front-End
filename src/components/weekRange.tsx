import React, { useState } from 'react';
import moment from 'moment';

function getWeekRange(date) {
    const startOfWeek = moment(date).startOf('week');
    const endOfWeek = moment(date).endOf('week');
    const format = 'YYYY-MM-DD';

    return `${startOfWeek.format(format)} ~ ${endOfWeek.format(format)}`;
}

export default function WeekRange() {
    const defaultDate = moment().subtract(1, 'week').toDate();
    const [currentDate, setCurrentDate] = useState(defaultDate);

    const handlePrevWeek = () => {
        setCurrentDate(moment(currentDate).subtract(1, 'week').toDate());
    };

    const handleNextWeek = () => {
        setCurrentDate(moment(currentDate).add(1, 'week').toDate());
    };

    const weekRange = getWeekRange(currentDate);

    return (
        <div style={{ width: '360px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <img
                src="../img/btn/previous.png"
                onClick={handlePrevWeek}
                style={{
                    width: '22px',
                    cursor: 'pointer',
                }}
            />
            <div style={{ fontFamily: 'Pretendard-ExtraBold', fontSize: '20px', color: '#0D2259' }}>{weekRange}</div>
            <img
                src="../img/btn/next.png"
                onClick={handleNextWeek}
                style={{
                    width: '22px',
                    cursor: 'pointer',
                }}
            />
        </div>
    );
}
