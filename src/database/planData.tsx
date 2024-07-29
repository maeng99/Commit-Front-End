import React from 'react';
import '../App.css';

// bigCalendar.tsx, smallCalendar.tsx, main.tsx, calendar.tsx
export default function PlanData() {
    return [
        { id: '1', date: '2024-07-23', end: '2024-08-07', title: '오후 6시 싸이 흠뻑쇼' },
        { id: '2', date: '2024-07-23', end: '2024-08-07', title: '결혼식' },
        { id: '3', date: '2024-07-24', end: '2024-08-07', title: '여행' },
        { id: '4', date: '2024-07-29', end: '2024-08-07', title: '프로젝트 회의' },
        { id: '5', date: '2024-08-06', end: '2024-08-07', title: '멋사 12기 종강 해커톤' },
    ];
}
