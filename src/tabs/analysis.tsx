import React from 'react';
import { Link } from 'react-router-dom';
import Date from '../components/date.tsx';
import Nav from '../components/nav.tsx';
import '../App.css';

export default function Analysis() {
    return (
        <div className="background">
            <Nav type="analysis" />
            <div className="main_contents_div">
                <div style={{ textAlign: 'left', marginBottom: '10px', fontWeight: '600' }}>
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
                            }}
                        ></div>
                        <div
                            style={{
                                width: '100%',
                                height: '515px',
                                backgroundColor: '#fff',
                                borderRadius: '20px',
                            }}
                        >
                            <div
                                style={{
                                    width: '370px',
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    margin: '0 auto',
                                    padding: '15px 0',
                                    textAlign: 'left',
                                }}
                            >
                                워라벨
                            </div>
                            <div
                                style={{
                                    width: '370px',
                                    height: '445px',
                                    margin: '0 auto',
                                    backgroundColor: '#eee',
                                    borderRadius: '20px',
                                }}
                            ></div>
                        </div>
                    </div>

                    <div style={{ width: '880px', height: '585px', borderRadius: '20px' }}>
                        <div
                            style={{
                                width: '100%',
                                height: '205px',
                                backgroundColor: '#fff',
                                marginBottom: '20px',
                                borderRadius: '20px',
                            }}
                        >
                            <div
                                style={{
                                    width: '850px',
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    margin: '0 auto',
                                    padding: '15px 0',
                                    textAlign: 'left',
                                }}
                            >
                                종합 피드백
                            </div>
                            <div
                                style={{
                                    width: '850px',
                                    height: '135px',
                                    margin: '0 auto',
                                    backgroundColor: '#eee',
                                    borderRadius: '20px',
                                }}
                            ></div>
                        </div>
                        <div
                            style={{
                                width: '100%',
                                height: '360px',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div style={{ width: '430px', backgroundColor: '#fff', borderRadius: '20px' }}>
                                <div
                                    style={{
                                        width: '400px',
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        margin: '0 auto',
                                        padding: '15px 0',
                                        textAlign: 'left',
                                    }}
                                >
                                    운동 시간
                                </div>
                                <div
                                    style={{
                                        width: '400px',
                                        height: '290px',
                                        margin: '0 auto',
                                        backgroundColor: '#eee',
                                        borderRadius: '20px',
                                    }}
                                ></div>
                            </div>
                            <div style={{ width: '430px', backgroundColor: '#fff', borderRadius: '20px' }}>
                                <div
                                    style={{
                                        width: '400px',
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        margin: '0 auto',
                                        padding: '15px 0',
                                        textAlign: 'left',
                                    }}
                                >
                                    수면 시간
                                </div>
                                <div
                                    style={{
                                        width: '400px',
                                        height: '290px',
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
