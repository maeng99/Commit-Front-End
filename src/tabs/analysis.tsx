import React from 'react';
import { Link } from 'react-router-dom';
import Date from '../components/date.tsx';
import Nav from '../components/nav.tsx';
import WeekRange from '../components/weekRange.tsx';
import '../App.css';

export default function Analysis() {
    return (
        <div className="background">
            <Nav type="analysis" />
            <div className="main_contents_div">
                <div style={{ textAlign: 'left', marginBottom: '10px', fontFamily: 'Pretendard-SemiBold' }}>
                    <span style={{ fontFamily: 'Pretendard-ExtraBold', fontSize: '28px', color: '#0D2259' }}>
                        주간 생활 분석 및 피드백
                    </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ width: '400px' }}>
                        <div
                            style={{
                                width: '100%',
                                height: '50px',
                                borderRadius: '20px',
                                marginBottom: '20px',
                                backgroundColor: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <WeekRange />
                        </div>
                        <div
                            style={{
                                width: '100%',
                                height: '535px',
                                backgroundColor: '#fff',
                                borderRadius: '20px',
                            }}
                        >
                            <div
                                style={{
                                    width: '360px',
                                    fontSize: '20px',
                                    fontFamily: 'Pretendard-SemiBold',
                                    margin: '0 auto',
                                    padding: '15px 0',
                                    textAlign: 'left',
                                }}
                            >
                                워라벨<span style={{ color: '#ccc' }}> Work-Life Balance</span>
                            </div>
                            <div
                                style={{
                                    width: '360px',
                                    height: '465px',
                                    margin: '0 auto',
                                    backgroundColor: '#eee',
                                    borderRadius: '20px',
                                }}
                            ></div>
                        </div>
                    </div>

                    <div style={{ width: '840px', height: '585px', borderRadius: '20px' }}>
                        <div
                            style={{
                                width: '100%',
                                height: '215px',
                                backgroundColor: '#fff',
                                marginBottom: '20px',
                                borderRadius: '20px',
                            }}
                        >
                            <div
                                style={{
                                    width: '800px',
                                    fontSize: '20px',
                                    fontFamily: 'Pretendard-SemiBold',
                                    margin: '0 auto',
                                    padding: '15px 0',
                                    textAlign: 'left',
                                }}
                            >
                                종합 피드백
                            </div>
                            <div
                                style={{
                                    width: '800px',
                                    height: '145px',
                                    margin: '0 auto',
                                    backgroundColor: '#eee',
                                    borderRadius: '20px',
                                }}
                            ></div>
                        </div>
                        <div
                            style={{
                                width: '100%',
                                height: '370px',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div style={{ width: '410px', backgroundColor: '#fff', borderRadius: '20px' }}>
                                <div
                                    style={{
                                        width: '370px',
                                        fontSize: '20px',
                                        fontFamily: 'Pretendard-SemiBold',
                                        margin: '0 auto',
                                        padding: '15px 0',
                                        textAlign: 'left',
                                    }}
                                >
                                    운동 시간
                                </div>
                                <div
                                    style={{
                                        width: '370px',
                                        height: '300px',
                                        margin: '0 auto',
                                        backgroundColor: '#eee',
                                        borderRadius: '20px',
                                    }}
                                ></div>
                            </div>
                            <div style={{ width: '410px', backgroundColor: '#fff', borderRadius: '20px' }}>
                                <div
                                    style={{
                                        width: '370px',
                                        fontSize: '20px',
                                        fontFamily: 'Pretendard-SemiBold',
                                        margin: '0 auto',
                                        padding: '15px 0',
                                        textAlign: 'left',
                                    }}
                                >
                                    수면 시간
                                </div>
                                <div
                                    style={{
                                        width: '370px',
                                        height: '300px',
                                        margin: '0 auto',
                                        backgroundColor: '#eee',
                                        borderRadius: '20px',
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
