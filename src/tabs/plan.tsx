import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button.tsx';
import Date from '../components/date.tsx';
import Nav from '../components/nav.tsx';
import FeedbackPopup from '../tabs/feedbackPopup.tsx';
import SmallCalendar from '../components/smallCalendar.tsx';
import '../App.css';

export default function Plan() {
    const [isPopupVisible, setPopupVisible] = useState(true);

    const closePopup = () => {
        setPopupVisible(false);
    };

    useEffect(() => {
        // 컴포넌트가 로드될 때 팝업을 표시
        setPopupVisible(true);
    }, []);

    return (
        <div className="background">
            <Nav type="plan" />
            <div className="main_contents_div">
                <Date />
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ width: '320px' }}>
                        <div
                            style={{
                                width: '100%',
                                height: '320px',
                                borderRadius: '20px',
                                marginBottom: '20px',
                                overflow: 'auto',
                            }}
                        >
                            <SmallCalendar />
                        </div>
                        <div style={{ width: '100%', height: '265px', backgroundColor: '#fff', borderRadius: '20px' }}>
                            <div
                                style={{
                                    width: '280px',
                                    fontSize: '18px',
                                    fontWeight: '600',
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
                        <div style={{ width: '100%', height: '550px', backgroundColor: '#fff', borderRadius: '20px' }}>
                            <div
                                style={{
                                    width: '470px',
                                    margin: '0 auto',
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    padding: '15px 0',
                                    textAlign: 'left',
                                }}
                            >
                                오늘의 일정
                            </div>
                            <div
                                style={{
                                    width: '470px',
                                    height: '480px',
                                    margin: '0 auto',
                                    backgroundColor: '#eee',
                                    borderRadius: '20px',
                                }}
                            >
                                {/*세리 작업 공간*/}
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '350px' }}>
                        <div style={{ width: '100%', height: '540px', backgroundColor: '#fff', borderRadius: '20px' }}>
                            <div
                                style={{
                                    width: '310px',
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    margin: '0 auto',
                                    padding: '15px 0',
                                    textAlign: 'left',
                                }}
                            >
                                타임 테이블
                            </div>
                            <div
                                style={{
                                    width: '310px',
                                    height: '470px',
                                    margin: '0 auto',
                                    backgroundColor: '#eee',
                                    borderRadius: '20px',
                                }}
                            ></div>
                        </div>
                        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                            <Button
                                type="secondary"
                                size="medium"
                                title="일정 수정"
                                onClick={() => {
                                    window.location = '/addplan';
                                }}
                            />
                            <Button
                                type="primary"
                                size="medium"
                                title="하루 마무리"
                                onClick={() => {
                                    window.location = '/plan';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {isPopupVisible && <FeedbackPopup onClose={closePopup} />}
        </div>
    );
}
