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
import CalendarPlanAPI from '../api/plan/calendarPlanAPI.tsx';
import '../App.css';

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
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const { calendarPlanList, loading } = CalendarPlanAPI();

    const handleDateSelect = (selectedDate: Date) => {
        setSelectedDate(selectedDate);
    };

    useEffect(() => {
        if (selectedDate !== null && moment(selectedDate).format('YYYY-MM-DD') !== moment(today).format('YYYY-MM-DD')) {
            window.location = '/plan';
        }
    }, [selectedDate]);

    const datePlanData = [
        {
            planId: 1,
            content: '학교가기',
            priority: 'A',
            type: 'WORK',
            date: '2024-08-04',
            startTime: {
                hour: 8,
                minute: 0,
                second: 0,
                nano: 0,
            },
            endTime: {
                hour: 13,
                minute: 0,
                second: 0,
                nano: 0,
            },
            createdAt: '2024-08-04T19:23:33.296Z',
            updatedAt: '2024-08-04T19:23:33.296Z',
            status: null,
            childPlan: 0,
            userId: 0,
            complete: true,
            delayed: true,
        },
        {
            planId: 2,
            content: 'PC방',
            priority: 'C',
            type: 'LIFE',
            date: '2024-08-04',
            startTime: {
                hour: 17,
                minute: 0,
                second: 0,
                nano: 0,
            },
            endTime: {
                hour: 19,
                minute: 0,
                second: 0,
                nano: 0,
            },
            createdAt: '2024-08-04T19:23:33.296Z',
            updatedAt: '2024-08-04T19:23:33.296Z',
            status: 'COMPLETE',
            childPlan: 0,
            userId: 0,
            complete: true,
            delayed: true,
        },
    ];

    /*
    서버 연결
    const { datePlanData, loading } = DatePlanAPI({ date });
    if (loading) {
        return <div>Loading...</div>;
    }
    if (!datePlanData) {
        return <div>No data available</div>;
    }
    */

    const calAchiev = (datePlanData.filter((plan) => plan.status === 'COMPLETE').length / datePlanData.length) * 100;

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!calendarPlanList) {
        return <div>No data available</div>;
    }

    const closestEvents = getClosestEvents(calendarPlanList);

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
                                            width: `${calAchiev}%`,
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
                                    {calAchiev}%
                                </div>
                            </div>
                            <div
                                style={{
                                    position: 'relative',
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
                                        borderRadius: '20px',
                                        overflow: 'auto',
                                    }}
                                >
                                    <TodayPlanDiv type="today" date={moment(today).format('YYYY-MM-DD')} />
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
                                    <TimeTableDiv type="after" date={moment(today).format('YYYY-MM-DD')} />
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
                                                {event.content}
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
