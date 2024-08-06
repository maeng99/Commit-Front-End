import React from 'react';
import '../App.css';

// analysis.tsx
export default function WeekData() {
    return [
        {
            start_date: '2024-07-29',
            end_date: '2024-08-04',
            week_day: [
                { name: '월', Life: 5, Work: 5, Exercise: 30, Sleep: 6 }, // Add Exercise data
                { name: '화', Life: 3.5, Work: 6.5, Exercise: 30, Sleep: 7 },
                { name: '수', Life: 4, Work: 6, Exercise: 30, Sleep: 8 },
                { name: '목', Life: 5, Work: 5, Exercise: 30, Sleep: 8 },
                { name: '금', Life: 7, Work: 3, Exercise: 60, Sleep: 3 },
                { name: '토', Life: 7, Work: 3, Exercise: 70, Sleep: 8 },
                { name: '일', Life: 9, Work: 1, Exercise: 110, Sleep: 9 },
            ],
        },
        {
            start_date: '2024-07-22',
            end_date: '2024-07-28',
            week_day: [
                { name: '월', Life: 4.5, Work: 5.5, Exercise: 120, Sleep: 9 }, // Add Exercise data
                { name: '화', Life: 3.5, Work: 6.5, Exercise: 40, Sleep: 9 },
                { name: '수', Life: 4, Work: 6, Exercise: 0, Sleep: 5 },
                { name: '목', Life: 5, Work: 5, Exercise: 40, Sleep: 8 },
                { name: '금', Life: 6, Work: 4, Exercise: 35, Sleep: 9 },
                { name: '토', Life: 2, Work: 8, Exercise: 50, Sleep: 6 },
                { name: '일', Life: 5, Work: 5, Exercise: 65, Sleep: 10 },
            ],
        },
        {
            start_date: '2024-07-15',
            end_date: '2024-07-21',
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
            start_date: '2024-07-08',
            end_date: '2024-07-14',
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
