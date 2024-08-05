import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import TimeTableAPI from '../api/plan/timetableAPI.tsx';
import '../App.css';

type TimeTableType = 'after' | 'before';
type TimeTableProps = {
    type?: TimeTableType;
    date: Date;
};

export default function TimeTableDiv(props: TimeTableProps) {
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { type, date } = props;
    const [xy, setXY] = useState({ x: -1000, y: -1000 });
    const [data, setData] = useState(null);
    const [isTimePopupVisible, setTimePopupVisible] = useState(false);
    const [popupStyle, setPopupStyle] = useState({ position: 'fixed' });
    const popupRef = useRef(null);

    const { timeTableData, loading } = TimeTableAPI({ date });

    const splitTime = (timeString) => {
        const [hour, minute, second] = timeString.split(':').map(Number);
        return { hour, minute, second };
    };

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

    useEffect(() => {
        setTimePopupVisible((prev) => !prev);
    }, [xy]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!timeTableData) {
        return <div>No data available</div>;
    }

    var timeTableList = [];
    if (!timeTableData.plans) {
        timeTableList = [...timeTableData.fixedPlans].sort((a, b) => {
            const startA = splitTime(a.startTime).hour * 60 + splitTime(a.startTime).minute;
            const startB = splitTime(b.startTime).hour * 60 + splitTime(a.startTime).minute;
            return startA - startB;
        });
    } else {
        timeTableList = [...timeTableData.fixedPlans, ...timeTableData.plans].sort((a, b) => {
            const startA = splitTime(a.startTime).hour * 60 + splitTime(a.startTime).minute;
            const startB = splitTime(b.startTime).hour * 60 + splitTime(a.startTime).minute;
            return startA - startB;
        });
    }

    const handleTime = (event) => {
        const parentRect = event.currentTarget.parentElement.parentElement.parentElement.getBoundingClientRect();
        const clickedX = event.clientX - parentRect.left;
        const clickedY = event.clientY - parentRect.top;

        setXY({ x: clickedX, y: clickedY });
        //setData(data);
    };

    const padZero = (num) => num.toString().padStart(2, '0');

    const handleMouseEnter = () => {
        if (popupRef.current) {
            popupRef.current.style.backgroundColor = '#4470F3';
        }
    };

    const handleMouseLeave = () => {
        if (popupRef.current) {
            popupRef.current.style.backgroundColor = '#aaa';
        }
    };

    const onValid = (e) => {
        console.log(e, 'onValid');
        setTimePopupVisible(false);
    };

    const onInvalid = (e) => {
        console.log(e, 'onInvalid');
        alert('입력한 정보를 다시 확인해주세요.');
    };

    return (
        <div
            style={{
                width: '310px',
                margin: '0 auto',
            }}
        >
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
                >
                    <div
                        style={{
                            width: '160px',
                            height: '80px',
                            backgroundColor: '#fff',
                            borderRadius: '10px 10px 10px 0',
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
                                {...register('StartTime', {
                                    required: '시작 시간을 입력해주세요.',
                                })}
                            />
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
                                {...register('EndTime', {
                                    required: '종료 시간을 입력해주세요.',
                                })}
                            />
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
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleSubmit(onValid, onInvalid)}
                    />
                </form>
            ) : (
                <></>
            )}
            {timeTableList.map((plan) => (
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
                        <span style={{ lineHeight: '1' }}>
                            {padZero(splitTime(plan.startTime).hour)}:{padZero(splitTime(plan.startTime).minute)}
                        </span>
                        <span>-</span>
                        <span style={{ lineHeight: '1' }}>
                            {padZero(splitTime(plan.endTime).hour)}:{padZero(splitTime(plan.endTime).minute)}
                        </span>
                    </div>
                    <div
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
                            <span style={{ width: '22px' }}></span>
                        )}
                    </div>
                </div>
            ))}
            {/*세빈작업*/}
        </div>
    );
}
