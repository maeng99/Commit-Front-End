import React from 'react';
import { Link } from 'react-router-dom';
import Date from '../components/date.tsx';
import Nav from '../components/nav.tsx';
import BigCalendar from '../components/bigCalendar.tsx';
import '../App.css';

export default function Calendar() {
    return (
        <div className="background">
            <Nav type="calendar" />
            <div className="main_contents_div">
                <Date />
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <div
                        style={{
                            width: '900px',
                            height: '605px',
                            backgroundColor: '#fff',
                            borderRadius: '20px',
                            overflow: 'auto',
                        }}
                    >
                        <BigCalendar />
                    </div>

                    <div style={{ width: '320px', height: '605px', backgroundColor: '#fff', borderRadius: '20px' }}>
                        <div
                            style={{
                                width: '280px',
                                fontFamily: 'Pretendard-Regular',
                                fontSize: '13px',
                                margin: '0 auto',
                                padding: '15px 0',
                                textAlign: 'left',
                                color: '#777',
                            }}
                        >
                            <span style={{ fontFamily: 'Pretendard-ExtraBold', fontSize: '45px', color: '#4470F3' }}>
                                22
                            </span>
                            2024년 7월
                        </div>
                        <hr
                            style={{
                                margin: '0 auto',
                                marginBottom: '15px',
                                border: 'none',
                                height: '1px',
                                backgroundColor: '#C9D9FD',
                            }}
                        />
                        <div
                            style={{
                                width: '280px',
                                height: '490px',
                                margin: '0 auto',
                                backgroundColor: '#eee',
                                borderRadius: '20px',
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
