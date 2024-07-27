import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button.tsx';
import Date from '../components/date.tsx';
import Nav from '../components/nav.tsx';
import '../App.css';

export default function Addplan() {
    return (
        <div className="background">
            <Nav type="plan" />

            <div className="main_contents_div">
                <Date />
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ width: '350px', height: '605px', backgroundColor: '#fff', borderRadius: '20px' }}>
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
                                height: '535px',
                                margin: '0 auto',
                                backgroundColor: '#eee',
                                borderRadius: '20px',
                            }}
                        ></div>
                    </div>

                    <div style={{ width: '510px', height: '605px', backgroundColor: '#fff', borderRadius: '20px' }}>
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
                            <span>24년 7월 22일</span>의 일정
                        </div>
                        <div
                            style={{
                                width: '470px',
                                height: '535px',
                                margin: '0 auto',
                                backgroundColor: '#eee',
                                borderRadius: '20px',
                            }}
                        ></div>
                    </div>

                    <div style={{ width: '320px' }}>
                        <div style={{ width: '100%', height: '540px', backgroundColor: '#fff', borderRadius: '20px' }}>
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
                                작성 시 유의사항
                            </div>
                            <div
                                style={{
                                    width: '280px',
                                    height: '470px',
                                    margin: '0 auto',
                                    backgroundColor: '#eee',
                                    borderRadius: '20px',
                                }}
                            ></div>
                        </div>
                        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                            <Button
                                type="primary"
                                size="large"
                                title="저장"
                                onClick={() => {
                                    window.location = '/plan';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
