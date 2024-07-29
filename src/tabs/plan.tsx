import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button.tsx';
import Date from '../components/date.tsx';
import Nav from '../components/nav.tsx';
import SmallCalendar from '../components/smallCalendar.tsx';
import TimeTableDiv from '../components/timeTableDiv.tsx';
import FeedbackPopup from '../tabs/feedbackPopup.tsx';
import '../App.css';

export default function Plan() {
    // 색상 매핑 객체
    const colors = {
        A: { box: '#1F48BB', text: '#1F48BB' },
        B: { box: '#4470F3', text: '#4470F3' },
        C: { box: '#A4BCFD', text: '#A4BCFD' },
        D: { box: '#B0B0B0', text: '#B0B0B0' },
    };

    // 스케줄 아이템을 렌더링하는 함수
    const renderScheduleItem = (text, letter) => (
        <div
        key={letter} // key 속성을 추가
        style={{
            display: 'flex',
            width: '320px',
            height: '60px',
            alignItems: 'center',
            gap: '30px',
            borderRadius: '0px 20px 20px 0px',
            backgroundColor: 'var(--blue5, #E9EFFD)',
            position: 'relative',
            paddingLeft: '20px',
            marginBottom: '10px', // Add margin-bottom to create space between items
        }}
        >
        <div
            style={{
            width: '10px',
            height: '60px',
            flexShrink: 0,
            borderRadius: '0px 3px 3px 0px',
            backgroundColor: colors[letter].box,
            position: 'absolute',
            left: '0px',
            }}
        />
        <div
            style={{
            width: '236px',
            flexShrink: 0,
            color: 'var(--blue70, #0D2259)',
            fontFamily: 'Pretendard',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            textAlign: 'left',
            paddingLeft: '13px',
            }}
        >
            {text}
        </div>
        <div
            style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '41px',
            height: '41px',
            flexShrink: 0,
            borderRadius: '20px',
            backgroundColor: 'var(--blue10, #C9D9FD)',
            color: colors[letter].text,
            textAlign: 'center',
            fontFamily: 'Pretendard',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: 'normal',
            marginLeft: '-10px',
            }}
        >
            {letter}
        </div>
        </div>
    );
  
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
                                    width: '470px',
                                    height: '470px',
                                    margin: '0 auto',
                                    backgroundColor: '#eee',
                                    borderRadius: '20px',
                                }}
                            >
                                {/* 이런 식으로 요소 추가하면 됨, 내용이랑 중요도 */}
                                {renderScheduleItem('은행 업무 보기', 'A')}
                                {renderScheduleItem('미팅', 'B')}
                                {renderScheduleItem('점심 약속', 'C')}
                                {renderScheduleItem('운동', 'D')}
                            </div>
                        </div>
                     </div>

                    <div style={{ width: '350px' }}>
                        <div style={{ width: '100%', height: '545px', backgroundColor: '#fff', borderRadius: '20px' }}>
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
                                <TimeTableDiv />
                            </div>
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
            {isPopupVisible && <FeedbackPopup onClose={closePopup} />}
        </div>
    );
}
