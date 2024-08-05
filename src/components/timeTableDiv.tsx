import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TimeTableAPI from '../api/plan/timetableAPI.tsx';
import '../App.css';

type TimeTableType = 'after' | 'before';
type TimeTableProps = {
    type?: TimeTableType;
    date: Date;
};

export default function TimeTableDiv(props: TimeTableProps) {
    const { type, date } = props;
    const [xy, setXY] = useState({ x: -1000, y: -1000 });
    const [data, setData] = useState(null);
    const [isTimePopupVisible, setTimePopupVisible] = useState(true);
    const [popupStyle, setPopupStyle] = useState({ position: 'fixed' });
    const popupRef = useRef(null);

    const timeTableDate = {
        fixedPlans: [
            {
                planId: 0,
                startTime: {
                    hour: 0,
                    minute: 0,
                    second: 0,
                    nano: 0,
                },
                endTime: {
                    hour: 0,
                    minute: 0,
                    second: 0,
                    nano: 0,
                },
                content: 'string',
                isFixed: true,
                priority: 0,
                fixed: true,
            },
        ],
        plans: [
            {
                planId: 0,
                startTime: {
                    hour: 0,
                    minute: 0,
                    second: 0,
                    nano: 0,
                },
                endTime: {
                    hour: 0,
                    minute: 0,
                    second: 0,
                    nano: 0,
                },
                content: 'string',
                isFixed: true,
                priority: 0,
                fixed: true,
            },
        ],
    };

    /*
    const timeTableList = [...timeTableData.fixedPlans, ...timeTableData.Plans].sort((a, b) => {
        const startA = a.startTime.hour * 60 + a.startTime.minute;
        const startB = b.startTime.hour * 60 + b.startTime.minute;
        return startA - startB;
    });
    */
    const timeTableList = [
        {
            planId: 0,
            startTime: {
                hour: 11,
                minute: 0,
                second: 0,
                nano: 0,
            },
            endTime: {
                hour: 12,
                minute: 0,
                second: 0,
                nano: 0,
            },
            content: '수면시간',
            isFixed: true,
            priority: 0,
            fixed: true,
        },
        {
            planId: 0,
            startTime: {
                hour: 8,
                minute: 0,
                second: 0,
                nano: 0,
            },
            endTime: {
                hour: 11,
                minute: 0,
                second: 0,
                nano: 0,
            },
            content: '아침식사',
            isFixed: true,
            priority: 0,
            fixed: true,
        },
    ];

    const handleTime = (event) => {
        const parentRect = event.currentTarget.parentElement.parentElement.parentElement.getBoundingClientRect();
        const clickedX = event.clientX - parentRect.left;
        const clickedY = event.clientY - parentRect.top;

        setXY({ x: clickedX, y: clickedY });
        //setData(data);
    };

    const padZero = (num) => num.toString().padStart(2, '0');

    useEffect(() => {
        if (isTimePopupVisible) {
            setTimePopupVisible(false);
        } else {
            setTimePopupVisible(true);
        }
    }, [xy]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setTimePopupVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [popupRef]);

    return (
        <div
            style={{
                width: '310px',
                margin: '0 auto',
            }}
        >
            {/*세빈이 작업 공간*/}
            {timeTableList.map((plan) => (
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    {isTimePopupVisible ? (
                        <form
                            ref={popupRef}
                            style={{
                                width: '190px',
                                height: '80px',
                                position: 'absolute',
                                left: `${xy.x + 20}px`,
                                top: `${xy.y - 5}px`,
                                backgroundColor: '#aaa',
                                borderRadius: '10px',
                                zIndex: '10',
                                boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4470F3')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#aaa')}
                        >
                            <div
                                style={{
                                    width: '160px',
                                    height: '80px',
                                    backgroundColor: '#fff',
                                    borderTopLeftRadius: '10px',
                                    borderBottomRightRadius: '10px',
                                    borderTopRightRadius: '10px',
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '16px',
                                    color: '#000',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    시작
                                    <input
                                        type="time"
                                        style={{
                                            position: 'relative',
                                            width: '70px',
                                            height: '5px',
                                            borderRadius: '4px',
                                            margin: '5px 0 5px 15px',
                                            border: '1px solid #4470F3',
                                            fontSize: '12px',
                                        }}
                                    ></input>
                                </div>
                                <hr
                                    style={{
                                        backgroundColor: '#ddd',
                                        border: 'none',
                                        height: '1px',
                                        margin: '0',
                                    }}
                                />
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    종료
                                    <input
                                        type="time"
                                        style={{
                                            position: 'relative',
                                            width: '70px',
                                            height: '5px',
                                            borderRadius: '4px',
                                            margin: '5px 0 5px 15px',
                                            border: '1px solid #4470F3',
                                            fontSize: '12px',
                                        }}
                                    ></input>
                                </div>
                            </div>
                            <img
                                type="submit"
                                src="../img/btn/next2.png"
                                style={{
                                    width: '10px',
                                    height: '15px',
                                    cursor: 'pointer',
                                    padding: '32px 10px',
                                }}
                                onClick={() => {
                                    window.location = '/main ';
                                }}
                            />
                        </form>
                    ) : (
                        <></>
                    )}

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
                        <span style={{ lineHeight: '1' }}>
                            {padZero(plan.startTime.hour)}:{padZero(plan.startTime.minute)}
                        </span>
                        <span>-</span>
                        <span style={{ lineHeight: '1' }}>
                            {padZero(plan.endTime.hour)}:{padZero(plan.endTime.minute)}
                        </span>
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
                        {type === 'after' ? (
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
                                    {plan.content}
                                </span>
                            </div>
                        ) : (
                            <div
                                style={{
                                    width: '230px',
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
                                    {plan.content}
                                </span>
                            </div>
                        )}
                        {type === 'after' ? (
                            <img
                                src="../img/btn/edit_disabled.png"
                                style={{ width: '22px', cursor: 'pointer' }}
                                onClick={(event) => {
                                    handleTime(event);
                                }}
                            />
                        ) : (
                            <></>
                        )}
                    </span>
                </div>
            ))}
            {/*세빈작업*/}
        </div>
    );
}
