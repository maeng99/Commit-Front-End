import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import Button from '../components/button.tsx';
import Date from '../components/date.tsx';
import Nav from '../components/nav.tsx';
import SmallCalendar from '../components/smallCalendar.tsx';
import TimeTableDiv from '../components/timeTableDiv.tsx';
import TodayPlanDiv from '../components/todayPlanDiv.tsx';
import PlanData from '../database/planData.tsx';
import '../App.css';

const events = PlanData();

function getClosestEvents(events) {
    const today = moment(); // Get today's date
    const closestEvents = events.filter(
        (event) => moment(event.date) >= today || moment(event.date).isSame(today, 'day')
    ); // Filter future events
    closestEvents.sort((a, b) => moment(a.date) - moment(b.date)); // Sort events by date
    return closestEvents.slice(0, 3); // Get the closest 3 events
}

export default function Main() {
    const today = new Date();
    const closestEvents = getClosestEvents(events);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateSelect = (selectedDate: Date) => {
        setSelectedDate(selectedDate);
    };

    useEffect(() => {
        if (selectedDate !== null && moment(selectedDate).format('YYYY-MM-DD') !== moment(today).format('YYYY-MM-DD')) {
            console.log(selectedDate);
            window.location = '/plan';
        }
    }, [selectedDate]);

    return (
        <div>
            <Nav type="main" />
            <div className="background">
                <div className="main_contents_div">
                    <Date />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ width: '510px' }}>
                            <div
                                className="progress_bar"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '20px',
                                    padding: '5px',
                                    backgroundColor: '#fff',
                                    border: '1px #ddd solid',
                                    borderRadius: '20px',
                                }}
                            >
                                <div
                                    style={{
                                        width: '88%',
                                        height: '25px',
                                        backgroundColor: '#eee',
                                        borderRadius: '15px',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '40%',
                                            height: '25px',
                                            background: 'linear-gradient(90deg, #4470F3 0%, #02A9A1 100%)',
                                            borderRadius: 100,
                                            borderRadius: '15px',
                                            animation: 'huerotator 6s infinite alternate',
                                        }}
                                    ></div>
                                </div>
                                <div
                                    style={{
                                        fontFamily: 'Pretendard-ExtraBold',
                                        fontSize: '14px',
                                        color: '#0D2259',
                                        width: '10%',
                                    }}
                                >
                                    <span>40</span>%
                                </div>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '550px',
                                    backgroundColor: '#fff',
                                    borderRadius: '20px',
                                    border: '1px #ddd solid',
                                }}
                            >
                                <div
                                    style={{
                                        width: '470px',
                                        margin: '0 auto',
                                        fontSize: '20px',
                                        fontFamily: 'Pretendard-SemiBold',
                                        color: '#0D2259',
                                        padding: '20px 0',
                                        textAlign: 'left',
                                    }}
                                >
                                    오늘의 일정
                                </div>
                                <div
                                    style={{
                                        width: '510px',
                                        height: '470px',
                                        margin: '0 auto',
                                        backgroundColor: '#eee',
                                        borderRadius: '20px',
                                        overflow: 'auto',
                                    }}
                                >
                                    <TodayPlanDiv />
                                </div>
                            </div>
                        </div>

                        <div style={{ width: '350px' }}>
                            <div
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '540px',
                                    backgroundColor: '#fff',
                                    borderRadius: '20px',
                                    border: '1px #ddd solid',
                                }}
                            >
                                <div
                                    style={{
                                        width: '310px',
                                        fontSize: '20px',
                                        fontFamily: 'Pretendard-SemiBold',
                                        color: '#0D2259',
                                        margin: '0 auto',
                                        padding: '25px 0',
                                        textAlign: 'left',
                                    }}
                                >
                                    타임 테이블
                                </div>
                                <div
                                    style={{
                                        width: '350px',
                                        height: '450px',
                                        overflow: 'auto',
                                        margin: '0 auto',
                                    }}
                                >
                                    <TimeTableDiv type="after" />
                                </div>
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                <Button
                                    type="primary"
                                    size="large"
                                    title={
                                        <>
                                            오늘 하루 마무리하러 가기&emsp;&emsp;
                                            <img
                                                src="../img/btn/check_enabled.png"
                                                style={{ width: '22px', verticalAlign: 'middle' }}
                                            />
                                        </>
                                    }
                                    onClick={() => {
                                        window.location = '/plan';
                                    }}
                                />
                            </div>
                        </div>

                        <div
                            style={{
                                width: '320px',
                                background: '#fff',
                                borderRadius: '20px',
                                border: '1px #ddd solid',
                            }}
                        >
                            <div
                                style={{
                                    width: '100%',
                                    height: '320px',
                                    borderRadius: '20px',
                                    marginBottom: '5px',
                                    overflow: 'auto',
                                }}
                            >
                                <SmallCalendar onDateSelect={handleDateSelect} />
                            </div>
                            <hr
                                style={{
                                    width: '280px',
                                    margin: '0 auto',
                                    border: 'none',
                                    height: '1px',
                                    backgroundColor: '#eee',
                                }}
                            />
                            <div>
                                <div
                                    style={{
                                        width: '280px',
                                        fontFamily: 'Pretendard-SemiBold',
                                        fontSize: '20px',
                                        color: '#0D2259',
                                        margin: '0 auto',
                                        padding: '15px 0',
                                        textAlign: 'left',
                                        display: 'flex',
                                    }}
                                >
                                    앞으로의 주요 일정
                                    <img
                                        src="../img/btn/next.png"
                                        style={{
                                            width: '24px',
                                            marginLeft: '108px',
                                            verticalAlign: 'middle',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => {
                                            window.location = '/calendar';
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        width: '280px',
                                        height: '210px',
                                        margin: '0 auto',
                                    }}
                                >
                                    {closestEvents.length > 0 ? (
                                        closestEvents.map((event) => (
                                            <div
                                                key={event.id}
                                                style={{
                                                    width: '260px',
                                                    height: '40px',
                                                    fontFamily: 'Pretendard-SemiBold',
                                                    fontSize: '16px',
                                                    color: '#0D2259',
                                                    border: '1px #eee solid',
                                                    borderRadius: '10px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'left',
                                                    padding: '10px',
                                                    marginBottom: '10px',
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        fontFamily: 'Pretendard-SemiBold',
                                                        fontSize: '16px',
                                                        color: '#0D2259',
                                                        backgroundColor: '#C9D9FD',
                                                        borderRadius: '10px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        marginRight: '20px',
                                                    }}
                                                >
                                                    {moment(event.date).format('D')}
                                                </div>
                                                {event.title}
                                            </div>
                                        ))
                                    ) : (
                                        <div
                                            style={{
                                                width: '260px',
                                                height: '40px',
                                                fontFamily: 'Pretendard-SemiBold',
                                                fontSize: '16px',
                                                color: '#0D2259',
                                                border: '1px #eee solid',
                                                borderRadius: '10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'left',
                                                padding: '10px',
                                                marginBottom: '10px',
                                            }}
                                        >
                                            예정된 일정이 없습니다.
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
