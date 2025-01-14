import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import DatePlanAPI from '../api/plan/datePlanAPI.tsx';
import CompletePlanAPI from '../api/plan/completePlanAPI.tsx';
import '../App.css';

type TodayPlanType = 'today' | 'notToday';
type TodayPlanProps = {
    type?: TodayPlanType;
    date: Date;
};

export default function TodayPlanDiv(props: TodayPlanProps) {
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { type, date } = props;
    const [xy, setXY] = useState({ x: -1000, y: -1000 });
    const [dateXy, setDateXY] = useState({ x: -1000, y: -1000 });
    const [isTimePopupVisible, setTimePopupVisible] = useState(false);
    const [isDatePopupVisible, setDatePopupVisible] = useState(false);
    const popupRef = useRef(null);
    const datePopupRef = useRef(null);

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
        const handleClickOutside = (event) => {
            if (datePopupRef.current && !datePopupRef.current.contains(event.target)) {
                setDatePopupVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [datePopupRef]);

    useEffect(() => {
        setTimePopupVisible((prev) => !prev);
    }, [xy]);
    useEffect(() => {
        setDatePopupVisible((prev) => !prev);
    }, [dateXy]);

    // 이미지 경로 결정 함수
    const getImageSrc = (btn, status) => {
        const statusMap = {
            COMPLETE: 'check',
            DELAYED: 'putoff',
            CANCELED: 'delete',
        };
        if (statusMap[status] === btn) {
            return `../img/btn/${btn}_enabled.png`;
        }
        return `../img/btn/${btn}_disabled.png`;
    };

    // 버튼 클릭 핸들러
    const handleTime = (event) => {
        const parentRect = event.currentTarget.parentElement.parentElement.parentElement.getBoundingClientRect();
        const clickedX = event.clientX - parentRect.left;
        const clickedY = event.clientY - parentRect.top;

        setXY({ x: clickedX, y: clickedY });
    };
    const handleDate = (event) => {
        const parentRect = event.currentTarget.parentElement.parentElement.parentElement.getBoundingClientRect();
        const clickedX = event.clientX - parentRect.left;
        const clickedY = event.clientY - parentRect.top;

        setDateXY({ x: clickedX, y: clickedY });
    };

    const clickDelete = () => {
        alert('정말 취소하시겠습니까?');
        window.location.reload();
    };

    /*
    서버 연결
    const { datePlanData, loading } = DatePlanAPI({ date });
    if (loading) {
        return <div>Loading...</div>;
    }
    if (!datePlanData) {
        return <div>No data available</div>;
    }
    */

    const datePlanData = [
        {
            planId: 1,
            content: '학교가기',
            priority: 'A',
            type: 'WORK',
            date: '2024-08-04',
            startTime: {
                hour: 8,
                minute: 0,
                second: 0,
                nano: 0,
            },
            endTime: {
                hour: 13,
                minute: 0,
                second: 0,
                nano: 0,
            },
            createdAt: '2024-08-04T19:23:33.296Z',
            updatedAt: '2024-08-04T19:23:33.296Z',
            status: null,
            childPlan: 0,
            userId: 0,
            complete: true,
            delayed: true,
        },
        {
            planId: 2,
            content: 'PC방',
            priority: 'C',
            type: 'LIFE',
            date: '2024-08-04',
            startTime: {
                hour: 17,
                minute: 0,
                second: 0,
                nano: 0,
            },
            endTime: {
                hour: 19,
                minute: 0,
                second: 0,
                nano: 0,
            },
            createdAt: '2024-08-04T19:23:33.296Z',
            updatedAt: '2024-08-04T19:23:33.296Z',
            status: null,
            childPlan: 0,
            userId: 0,
            complete: true,
            delayed: true,
        },
    ];

    const handleMouseEnter = () => {
        if (popupRef.current) {
            popupRef.current.style.backgroundColor = '#4470F3';
        }
    };
    const handleMouseDateEnter = () => {
        if (datePopupRef.current) {
            datePopupRef.current.style.backgroundColor = '#4470F3';
        }
    };

    const handleMouseLeave = () => {
        if (popupRef.current) {
            popupRef.current.style.backgroundColor = '#aaa';
        }
    };
    const handleMouseDateLeave = () => {
        if (datePopupRef.current) {
            datePopupRef.current.style.backgroundColor = '#aaa';
        }
    };

    const onValidDate = (e) => {
        console.log(e, 'onValid');
        setDatePopupVisible(false);
    };

    const onInvalidDate = (e) => {
        console.log(e, 'onInvalid');
        alert('입력한 정보를 다시 확인해주세요.');
    };

    const onValid = (e) => {
        // form의 유효성 검사 후 실행됨
        const formData = getValues();
        console.log(formData, 'onValid');

        // 서버로 전송할 데이터 생성
        const postData = {
            startTime: formData.StartTime, // 입력된 시작 시간
            endTime: formData.EndTime, // 입력된 종료 시간
        };

        // API 호출 함수 호출
        CompletePlanAPI(postData.planId, postData.startTime, postData.endTime);

        // 팝업 숨기기
        setTimePopupVisible(false);
    };

    const onInvalid = (e) => {
        console.log(e, 'onInvalid');
        alert('입력한 정보를 다시 확인해주세요.');
    };

    // 색상 매핑 객체
    const colors = {
        A: { box: '#1F48BB', text: '#1F48BB' },
        B: { box: '#4470F3', text: '#4470F3' },
        C: { box: '#A4BCFD', text: '#A4BCFD' },
        D: { box: '#B0B0B0', text: '#B0B0B0' },
    };

    return (
        <div
            style={{
                width: '470px',
                margin: '0 auto',
            }}
        >
            {isDatePopupVisible ? (
                <form
                    ref={datePopupRef}
                    style={{
                        width: '240px',
                        height: '40px',
                        position: 'absolute',
                        left: `${dateXy.x + 20}px`,
                        top: `${dateXy.y + 25}px`,
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
                            width: '210px',
                            height: '40px',
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
                            연기할 날짜
                            <input
                                type="date"
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
                                    required: '연기할 날짜를 입력해주세요.',
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
                            padding: '15px 10px',
                        }}
                        onMouseEnter={handleMouseDateEnter}
                        onMouseLeave={handleMouseDateLeave}
                        onClick={handleSubmit(onValidDate, onInvalidDate)}
                    />
                </form>
            ) : (
                <></>
            )}
            {isTimePopupVisible ? (
                <form
                    ref={popupRef}
                    style={{
                        width: '190px',
                        height: '80px',
                        position: 'absolute',
                        left: `${xy.x + 20}px`,
                        top: `${xy.y - 15}px`,
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
            {datePlanData
                .filter((plan) => plan.status === null)
                .map((plan) => (
                    <div
                        key={plan.planId}
                        style={{
                            display: 'flex',
                            width: '320px',
                            height: '60px',
                            alignItems: 'center',
                            gap: '30px',
                            borderRadius: '3px 15px 15px 3px',
                            backgroundColor: '#E9EFFD',
                            position: 'relative',
                            paddingLeft: '20px',
                            marginBottom: '10px',
                            paddingRight: '10px',
                        }}
                    >
                        <div
                            style={{
                                width: '10px',
                                height: '60px',
                                flexShrink: 0,
                                borderRadius: '3px 0px 0px 3px',
                                backgroundColor: colors[plan.priority].box,
                                position: 'absolute',
                                left: '0px',
                            }}
                        ></div>
                        <div
                            style={{
                                width: '236px',
                                flexShrink: 0,
                                color: '#0D2259',
                                fontSize: '19px',
                                fontFamily: 'Pretendard-Regular',
                                lineHeight: 'normal',
                                textAlign: 'left',
                                paddingLeft: '13px',
                            }}
                        >
                            {plan.content}
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                flexShrink: 0,
                                borderRadius: '20px',
                                backgroundColor: '#C9D9FD',
                                color: colors[plan.priority].text,
                                textAlign: 'center',
                                fontSize: '25px',
                                fontFamily: 'Pretendard-Bold',
                            }}
                        >
                            {plan.priority}
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '13px',
                            }}
                        >
                            <img
                                src="../img/btn/check_disabled.png"
                                style={{
                                    width: '25px',
                                    cursor: 'pointer',
                                }}
                                onMouseOver={(event) => {
                                    event.target.src = `../img/btn/check_enabled.png`;
                                }}
                                onMouseOut={(event) => {
                                    event.target.src = `../img/btn/check_disabled.png`;
                                }}
                                onClick={(event) => {
                                    handleTime(event);
                                }}
                            />
                            <img
                                src="../img/btn/putoff_disabled.png"
                                style={{
                                    width: '25px',
                                    cursor: 'pointer',
                                }}
                                onMouseOver={(event) => {
                                    event.target.src = `../img/btn/putoff_enabled.png`;
                                }}
                                onMouseOut={(event) => {
                                    event.target.src = `../img/btn/putoff_disabled.png`;
                                }}
                                onClick={(event) => {
                                    handleDate(event);
                                }}
                            />
                            <img
                                src="../img/btn/delete_disabled.png"
                                style={{
                                    width: '25px',
                                    cursor: 'pointer',
                                }}
                                onMouseOver={(event) => {
                                    event.target.src = `../img/btn/delete_enabled.png`;
                                }}
                                onMouseOut={(event) => {
                                    event.target.src = `../img/btn/delete_disabled.png`;
                                }}
                                onClick={() => {
                                    clickDelete();
                                }}
                            />
                        </div>
                    </div>
                ))}
            {datePlanData.filter((plan) => plan.status !== null).length === 0 ||
            datePlanData.filter((plan) => plan.status === null).length === 0 ? (
                <></>
            ) : (
                <hr style={{ margin: '20px 0', border: 'none', height: '1px', backgroundColor: '#ccc' }} />
            )}
            {datePlanData
                .filter((plan) => plan.status !== null)
                .map((plan) => (
                    <div
                        key={plan.planId}
                        style={{
                            display: 'flex',
                            width: '320px',
                            height: '60px',
                            alignItems: 'center',
                            gap: '30px',
                            borderRadius: '3px 15px 15px 3px',
                            backgroundColor: '#E9EFFD',
                            position: 'relative',
                            paddingLeft: '20px',
                            marginBottom: '10px',
                            paddingRight: '10px',
                        }}
                    >
                        <div
                            style={{
                                width: '10px',
                                height: '60px',
                                flexShrink: 0,
                                borderRadius: '3px 0px 0px 3px',
                                backgroundColor: colors[plan.priority].box,
                                position: 'absolute',
                                left: '0px',
                            }}
                        ></div>
                        <div
                            style={{
                                width: '236px',
                                flexShrink: 0,
                                color: '#0D2259',
                                fontSize: '19px',
                                fontFamily: 'Pretendard-Regular',
                                lineHeight: 'normal',
                                textAlign: 'left',
                                paddingLeft: '13px',
                            }}
                        >
                            {plan.content}
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                flexShrink: 0,
                                borderRadius: '20px',
                                backgroundColor: '#C9D9FD',
                                color: colors[plan.priority].text,
                                textAlign: 'center',
                                fontSize: '25px',
                                fontFamily: 'Pretendard-Bold',
                            }}
                        >
                            {plan.priority}
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '13px',
                            }}
                        >
                            <img
                                src={getImageSrc('check', plan.status)}
                                style={{
                                    width: '25px',
                                    cursor: 'pointer',
                                }}
                                onMouseOver={(event) => {
                                    event.target.src = `../img/btn/check_enabled.png`;
                                }}
                                onMouseOut={(event) => {
                                    event.target.src = getImageSrc('check', plan.status);
                                }}
                                onClick={(event) => {
                                    handleTime(event);
                                }}
                            />
                            <img
                                src={getImageSrc('putoff', plan.status)}
                                style={{
                                    width: '25px',
                                    cursor: 'pointer',
                                }}
                                onMouseOver={(event) => {
                                    event.target.src = `../img/btn/putoff_enabled.png`;
                                }}
                                onMouseOut={(event) => {
                                    event.target.src = getImageSrc('putoff', plan.status);
                                }}
                                onClick={(event) => {
                                    handleDate(event);
                                }}
                            />
                            <img
                                src={getImageSrc('delete', plan.status)}
                                style={{
                                    width: '25px',
                                    cursor: 'pointer',
                                }}
                                onMouseOver={(event) => {
                                    event.target.src = `../img/btn/delete_enabled.png`;
                                }}
                                onMouseOut={(event) => {
                                    event.target.src = getImageSrc('delete', plan.status);
                                }}
                                onClick={() => {
                                    clickDelete();
                                }}
                            />
                        </div>
                    </div>
                ))}
        </div>
    );
}
