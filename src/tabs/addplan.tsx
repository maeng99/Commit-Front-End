import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import moment from 'moment';
import Button from '../components/button.tsx';
import Date from '../components/date.tsx';
import Nav from '../components/nav.tsx';
import NewPlanDiv from '../components/newPlanDiv.tsx';
import TimeTableDiv from '../components/timeTableDiv.tsx';
import CompletePlanAPI from '../api/plan/completePlanAPI.tsx';
import '../App.css';

const Popup = ({ onClose }) => {
    return (
        <div className="popup-background">
            <div
                style={{
                    width: '500px',
                    position: 'relative',
                    marginLeft: '130px',
                    marginTop: '20px',
                }}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        border: 'none',
                        background: 'transparent',
                        fontSize: '20px',
                        cursor: 'pointer',
                        color: 'black',
                        zIndex: '1001',
                    }}
                >
                    &times;
                </button>
                <img src="../img/write_guide.png" alt="Guide" style={{ width: '100%' }} />
            </div>
        </div>
    );
};

export default function Addplan() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const [showPopup, setShowPopup] = useState(false);
    const selectedDate = localStorage.getItem('smallDate');

    const handleIconClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const onSubmit = async (data) => {
        const accessToken = getCookie('accessToken');
        const refreshToken = getCookie('refreshToken');

        if (!accessToken) {
            window.location = '/'; // Redirect to login page
            return;
        }

        for (const box of data.boxes) {
            try {
                await CompletePlanAPI(accessToken, box.scheduleId, box.startTime, box.endTime);
            } catch (error) {
                console.error('Failed to add calendar info:', error);
                if (refreshToken) {
                    try {
                        const newAccessToken = await getAccessTokenWithRefreshToken(refreshToken);
                        await AddCalendarAPI(newAccessToken, box.scheduleId, box.startTime, box.endTime);
                    } catch (error) {
                        console.error('Failed to refresh access token:', error);
                        window.location = '/'; // Redirect to login page
                    }
                } else {
                    alert('ERROR');
                    window.location = '/'; // Redirect to login page
                }
            }
        }
    };
    function getCookie(name) {
        var nameEQ = name + '=';
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length, cookie.length);
            }
        }
        return null;
    }

    function getAccessTokenWithRefreshToken(accessToken, refreshToken) {
        return fetch(API_SERVER_DOMAIN + 'auth/reissue', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                accessToken: accessToken,
                refreshToken: refreshToken,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to refresh access token');
                }
                return response.json();
            })
            .then((data) => {
                return data.accessToken;
            });
    }

    return (
        <div>
            <Nav type="plan" />
            <div className="background">
                <div className="main_contents_div">
                    <Date />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div
                            style={{
                                position: 'relative',
                                width: '350px',
                                height: '605px',
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
                                    height: '515px',
                                    margin: '0 auto',
                                    overflow: 'auto',
                                }}
                            >
                                <TimeTableDiv type="after" date={moment(selectedDate).format('YYYY-MM-DD')} />
                            </div>
                        </div>

                        <div
                            style={{
                                width: '510px',
                                height: '605px',
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
                                    display: ' flex',
                                    justifyContent: 'space-between',
                                    padding: '20px 0',
                                    textAlign: 'left',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {moment(selectedDate).format('YY년 M월 D일')}의 일정 {/* 간격 조정용 */}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ fontSize: '14px', color: '#888' }}>일정 작성 가이드라인</span>
                                    <img
                                        src="../img/btn/info.png"
                                        alt="Guide"
                                        style={{ width: '20px', height: '20px', marginLeft: '8px', cursor: 'pointer' }}
                                        onClick={handleIconClick}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    width: '510px',
                                    height: '525px',
                                    margin: '0 auto',
                                    borderRadius: '20px',
                                    overflowY: 'auto',
                                }}
                            >
                                <NewPlanDiv register={register} control={control} errors={errors} />
                            </div>
                        </div>

                        <div style={{ width: '320px' }}>
                            <div
                                style={{
                                    width: '100%',
                                    height: '540px',
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
                                        margin: '0 auto',
                                        padding: '15px 0',
                                        textAlign: 'left',
                                    }}
                                >
                                    나만의 플래너 작성 규칙
                                </div>
                                <div
                                    style={{
                                        width: '280px',
                                        height: '470px',
                                        margin: '0 auto',
                                        backgroundColor: '#EDF0F5',
                                        borderRadius: '20px',
                                        textAlign: 'left',
                                        fontFamily: 'Pretendard-Regular',
                                        fontSize: '16px',
                                    }}
                                >
                                    <div style={{ padding: '20px 20px 0px' }}>• 목표 워라벨 : </div>
                                    <div style={{ padding: '20px 20px 0px' }}>• 목표 수면시간 : </div>
                                    <div style={{ padding: '20px 20px 0px' }}>• 목표 운동시간 : </div>
                                    <div style={{ padding: '20px 20px 0px' }}>• 세부사항 :</div>
                                    <div></div>
                                </div>
                            </div>
                            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                                <Button type="primary" size="large" title="저장" onClick={handleSubmit(onSubmit)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showPopup && <Popup onClose={handleClosePopup} />}
        </div>
    );
}
