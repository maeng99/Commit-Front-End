import React from 'react';
import '../App.css';

// analysis.tsx
export default function WeekData() {
    return [
        { name: '월', Life: 4.5, Work: 5.5, Exercise: 30, Sleep: 9 }, // Add Exercise data
        { name: '화', Life: 3.5, Work: 6.5, Exercise: 40, Sleep: 9 },
        { name: '수', Life: 4, Work: 6, Exercise: 0, Sleep: 5 },
        { name: '목', Life: 5, Work: 5, Exercise: 40, Sleep: 8 },
        { name: '금', Life: 6, Work: 4, Exercise: 35, Sleep: 9 },
        { name: '토', Life: 2, Work: 8, Exercise: 50, Sleep: 6 },
        { name: '일', Life: 5, Work: 5, Exercise: 65, Sleep: 10 },
    ];
}
