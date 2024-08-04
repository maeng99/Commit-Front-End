import React from 'react';
import '../App.css';

// analysis.tsx
export default function WeekData() {
    return [
        {
            start_date: '2024-07-21',
            end_date: '2024-07-27',
            week_day: [
                { name: '월', Life: 4.5, Work: 5.5, Exercise: 30, Sleep: 9 }, // Add Exercise data
                { name: '화', Life: 3.5, Work: 6.5, Exercise: 40, Sleep: 9 },
                { name: '수', Life: 4, Work: 6, Exercise: 0, Sleep: 5 },
                { name: '목', Life: 5, Work: 5, Exercise: 40, Sleep: 8 },
                { name: '금', Life: 6, Work: 4, Exercise: 35, Sleep: 9 },
                { name: '토', Life: 2, Work: 8, Exercise: 50, Sleep: 6 },
                { name: '일', Life: 5, Work: 5, Exercise: 65, Sleep: 10 },
            ],
        },
        {
            start_date: '2024-07-14',
            end_date: '2024-07-20',
            week_day: [
                { name: '월', Life: 2, Work: 8, Exercise: 0, Sleep: 3 }, // Add Exercise data
                { name: '화', Life: 3.5, Work: 6.5, Exercise: 0, Sleep: 3 },
                { name: '수', Life: 6, Work: 4, Exercise: 0, Sleep: 4 },
                { name: '목', Life: 5, Work: 5, Exercise: 0, Sleep: 9 },
                { name: '금', Life: 8, Work: 2, Exercise: 40, Sleep: 9 },
                { name: '토', Life: 9, Work: 1, Exercise: 60, Sleep: 8 },
                { name: '일', Life: 9, Work: 1, Exercise: 80, Sleep: 10 },
            ],
        },
        {
            start_date: '2024-07-07',
            end_date: '2024-07-13',
            week_day: [
                { name: '월', Life: 4.5, Work: 5.5, Exercise: 30, Sleep: 9 }, // Add Exercise data
                { name: '화', Life: 3.5, Work: 6.5, Exercise: 40, Sleep: 9 },
                { name: '수', Life: 4, Work: 6, Exercise: 0, Sleep: 5 },
                { name: '목', Life: 5, Work: 5, Exercise: 40, Sleep: 8 },
                { name: '금', Life: 6, Work: 4, Exercise: 35, Sleep: 9 },
                { name: '토', Life: 2, Work: 8, Exercise: 50, Sleep: 6 },
                { name: '일', Life: 5, Work: 5, Exercise: 65, Sleep: 10 },
            ],
        },
    ];
}
