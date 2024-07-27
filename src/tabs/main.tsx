import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/button.tsx';
import Date from '../components/date.tsx';
import Nav from '../components/nav.tsx';
import SmallCalendar from '../components/smallCalendar.tsx';
import '../App.css';

export default function Main() {
    return (
        <div className="background">
            <Nav type="main" />

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
                                        width: '40%',
                                        height: '25px',
                                        background: 'linear-gradient(90deg, #4470F3 0%, #02A9A1 100%)',
                                        borderRadius: 100,
                                        borderRadius: '15px',
                                        animation: 'huerotator 6s infinite alternate',
                                    }}
                                ></div>
                            </div>
                            <div style={{ fontFamily: 'Pretendard-ExtraBold', fontSize: '14px', width: '10%' }}>
                                <span>40</span>%
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
                            ></div>
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
                            >
                                {/*세빈이 작업 공간*/}
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

                    <div style={{ width: '320px', background: '#fff', borderRadius: '20px' }}>
                        <div
                            style={{
                                width: '100%',
                                height: '320px',
                                borderRadius: '20px',
                                marginBottom: '5px',
                                overflow: 'auto',
                            }}
                        >
                            <SmallCalendar />
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
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    margin: '0 auto',
                                    padding: '15px 0',
                                    textAlign: 'left',
                                }}
                            >
                                앞으로의 주요 일정
                            </div>
                            <div
                                style={{
                                    width: '280px',
                                    height: '210px',
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
    );
}
