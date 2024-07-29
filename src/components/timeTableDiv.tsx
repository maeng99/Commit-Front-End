import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function TimeTableDiv() {
    return (
        <div
            style={{
                width: '310px',
                margin: '0 auto',
                overflow: 'auto',
            }}
        >
            {/*세빈이 작업 공간*/}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div
                    style={{
                        color: '#0D2259',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        fontSize: '12px',
                        marginRight: '15px',
                    }}
                >
                    <span style={{ lineHeight: '1' }}>00:00</span>
                    <span>-</span>
                    <span style={{ lineHeight: '1' }}>07:00</span>
                </div>
                <span
                    style={{
                        width: '280px',
                        height: '55px',
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderTopRightRadius: '20px',
                        borderBottomRightRadius: '20px',
                        border: '1px solid #A4BCFD',
                        borderLeft: 'none',
                        paddingRight: '10px',
                    }}
                >
                    <span
                        style={{
                            width: '10px',
                            height: '55px',
                            backgroundColor: '#CACACA',
                        }}
                    ></span>
                    <div
                        style={{
                            width: '200px',
                            textAlign: 'left',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        <span
                            style={{
                                fontFamily: 'Pretendard-Regular',
                                fontSize: '17px',
                                color: '#000',
                            }}
                        >
                            수면시간
                        </span>
                    </div>
                    <img src="../img/btn/edit_disabled.png" style={{ width: '22px', cursor: 'pointer' }} />
                </span>
            </div>
            {/*세빈작업*/}
            {/*세빈이 작업 공간*/}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                    style={{
                        color: '#0D2259',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        fontSize: '12px',
                        marginRight: '15px',
                    }}
                >
                    <span style={{ lineHeight: '1' }}>07:30</span>
                    <span>-</span>
                    <span style={{ lineHeight: '1' }}>08:00</span>
                </div>
                <span
                    style={{
                        width: '280px',
                        height: '55px',
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderTopRightRadius: '20px',
                        borderBottomRightRadius: '20px',
                        border: '1px solid #A4BCFD',
                        borderLeft: 'none',
                        paddingRight: '10px',
                    }}
                >
                    <span
                        style={{
                            width: '10px',
                            height: '55px',
                            backgroundColor: '#ccc',
                        }}
                    ></span>
                    <div
                        style={{
                            width: '200px',
                            textAlign: 'left',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        <span
                            style={{
                                fontFamily: 'Pretendard-Regular',
                                fontSize: '17px',
                                color: '#000',
                            }}
                        >
                            아침 식사
                        </span>
                    </div>
                    <img src="../img/btn/edit_disabled.png" style={{ width: '22px', cursor: 'pointer' }} />
                </span>
            </div>
        </div>
    );
}
