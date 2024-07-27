import React from 'react';
import { Link } from 'react-router-dom';
import Date from '../components/date.tsx';
import Nav from '../components/nav.tsx';
import '../App.css';

export default function Mypage() {
    return (
        <div className="background">
            <Nav type="mypage" />
            <div className="main_contents_div">
                <Date />
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ width: '480px', height: '585px', backgroundColor: '#fff', borderRadius: '20px' }}>
                        <div
                            style={{
                                width: '440px',
                                fontFamily: 'Pretendard-ExtraBold',
                                fontSize: '20px',
                                color: '#4470F3',
                                margin: '0 auto',
                                padding: '20px 0',
                                textAlign: 'left',
                            }}
                        >
                            내 계정
                        </div>
                        <div
                            style={{
                                width: '440px',
                                height: '500px',
                                margin: '0 auto',
                                backgroundColor: '#eee',
                                borderRadius: '20px',
                            }}
                        ></div>
                    </div>

                    <div style={{ width: '770px', height: '585px', backgroundColor: '#fff', borderRadius: '20px' }}>
                        <div
                            style={{
                                width: '710px',
                                fontFamily: 'Pretendard-ExtraBold',
                                fontSize: '20px',
                                color: '#4470F3',
                                margin: '0 auto',
                                padding: '20px 0',
                                textAlign: 'left',
                            }}
                        >
                            나만의 일정표 커스텀 규칙
                        </div>
                        <div
                            style={{
                                width: '710px',
                                height: '500px',
                                margin: '0 auto',
                                backgroundColor: '#eee',
                                borderRadius: '20px',
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
