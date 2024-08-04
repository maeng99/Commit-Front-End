import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Button from '../components/button.tsx';
import Date from '../components/date.tsx';
import Nav from '../components/nav.tsx';
import SmallCalendar from '../components/smallCalendar.tsx';
import TimeTableDiv from '../components/timeTableDiv.tsx';
import TodayPlanDiv from '../components/todayPlanDiv.tsx';
import FeedbackPopup from '../tabs/feedbackPopup.tsx';
import '../App.css';

export default function Plan() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateSelect = (selectedDate: Date) => {
        setSelectedDate(selectedDate); // Update the selected date in the state
    };

    const [isPopupVisible, setPopupVisible] = useState(false);

    const closePopup = () => {
        setPopupVisible(false);
        localStorage.setItem('lastPopupDate', moment().format('YYYY-MM-DD'));
    };

    useEffect(() => {
        // localStorage.clear();
        // Get the last date the popup was shown
        const lastPopupDate = localStorage.getItem('lastPopupDate');
        const todayDate = moment().format('YYYY-MM-DD');

        // Check if the popup has already been shown today
        if (lastPopupDate !== todayDate) {
            setPopupVisible(true);
        }
    }, []);

    return (
        <div>
            <Nav type="plan" />
            <div className="background">
                <div className="main_contents_div">
                    <Date />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ width: '320px' }}>
                            <div
                                style={{
                                    width: '100%',
                                    height: '320px',
                                    backgroundColor: '#fff',
                                    borderRadius: '20px',
                                    marginBottom: '20px',
                                    overflow: 'auto',
                                    border: '1px #ddd solid',
                                }}
                            >
                                <SmallCalendar onDateSelect={handleDateSelect} />
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '265px',
                                    backgroundColor: '#fff',
                                    borderRadius: '20px',
                                    border: '1px #ddd solid',
                                }}
                            >
                                <div
                                    style={{
                                        width: '280px',
                                        fontSize: '20px',
                                        fontFamily: 'Pretendard-SemiBold',
                                        color: '#0D2259',
                                        margin: '0 auto',
                                        padding: '15px 0',
                                        textAlign: 'left',
                                    }}
                                >
                                    이날의 기록사항
                                </div>
                                <div
                                    style={{
                                        width: '280px',
                                        height: '195px',
                                        margin: '0 auto',
                                        backgroundColor: '#eee',
                                        borderRadius: '20px',
                                    }}
                                ></div>
                            </div>
                        </div>

                        <div style={{ width: '510px' }}>
                            <div
                                className="progress_bar"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '20px',
                                    padding: '5px 5px',
                                    backgroundColor: '#fff',
                                    borderRadius: '20px',
                                    border: '1px #ddd solid',
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
                                            width: '100%',
                                            height: '25px',
                                            background: 'linear-gradient(90deg, #4470F3 0%, #02A9A1 100%)',
                                            borderRadius: 100,
                                            borderRadius: '15px',
                                            animation: 'huerotator 6s infinite alternate',
                                        }}
                                    ></div>
                                </div>
                                <div style={{ fontFamily: 'Pretendard-ExtraBold', fontSize: '14px', width: '10%' }}>
                                    <span>100</span>%
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
                                    height: '545px',
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
                                        height: '455px',
                                        overflow: 'auto',
                                        margin: '0 auto',
                                    }}
                                >
                                    <TimeTableDiv type="after" />
                                </div>
                            </div>
                            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                                <Button
                                    type="secondary"
                                    size="sub"
                                    title="일정 수정"
                                    onClick={() => {
                                        window.location = '/addplan';
                                    }}
                                />
                                <Button
                                    type="primary"
                                    size="medium"
                                    title={
                                        <>
                                            하루 마무리&nbsp;&nbsp;
                                            <img
                                                src="../img/btn/check_enabled.png"
                                                style={{ width: '18px', verticalAlign: 'middle' }}
                                            />
                                        </>
                                    }
                                    onClick={() => {
                                        window.location = '/plan';
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isPopupVisible && <FeedbackPopup onClose={closePopup} />}
        </div>
    );
}
