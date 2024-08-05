import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import Button from '../components/button.tsx';
import Date from '../components/date.tsx';
import Nav from '../components/nav.tsx';
import SmallCalendar from '../components/smallCalendar.tsx';
import TimeTableDiv from '../components/timeTableDiv.tsx';
import TodayPlanDiv from '../components/todayPlanDiv.tsx';
import FeedbackPopup from '../tabs/feedbackPopup.tsx';
import '../App.css';

export default function Plan() {
    const today = moment();
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [selectedDate, setSelectedDate] = useState<Date>(today);
    const [text, setText] = useState(null);

    const handleDateSelect = (selectedDate: Date) => {
        setSelectedDate(selectedDate);
        localStorage.setItem('smallDate', selectedDate);
    };

    const [isPopupVisible, setPopupVisible] = useState(false);

    const closePopup = () => {
        setPopupVisible(false);
        window.location = '/plan';
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const onValid = (e) => {
        console.log(e, 'onValid');
        window.location = '/plan';
    };

    const onInvalid = (e) => {
        console.log(e, 'onInvalid');
        alert('입력한 정보를 다시 확인해주세요.');
    };

    return (
        <div>
            <Nav type="plan" />
            <div className="background">
                <div className="main_contents_div">
                    <Date />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ width: '320px' }}>
                            <div
                                style={{
                                    width: '100%',
                                    height: '320px',
                                    backgroundColor: '#fff',
                                    borderRadius: '20px',
                                    marginBottom: '20px',
                                    overflow: 'auto',
                                    border: '1px #ddd solid',
                                }}
                            >
                                <SmallCalendar onDateSelect={handleDateSelect} />
                            </div>
                            {moment(selectedDate).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD') ? (
                                <form
                                    style={{
                                        width: '100%',
                                        height: '265px',
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
                                            color: '#0D2259',
                                            margin: '0 auto',
                                            padding: '15px 0',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <div>이날의 기록사항</div>
                                        <div>
                                            <Button
                                                type="secondary"
                                                size="small"
                                                title="작성완료"
                                                onClick={handleSubmit(onValid, onInvalid)}
                                            />
                                        </div>
                                    </div>

                                    <textarea
                                        placeholder="하루에 대한 짧은 감상이나 기록해야될 사항에 대해 작성해주세요."
                                        style={{
                                            width: '280px',
                                            height: '195px',
                                            margin: '0 auto',
                                            backgroundColor: '#EDF0F5',
                                            borderRadius: '20px',
                                            resize: 'none',
                                            border: 'none',
                                            borderRadius: '20px',
                                            padding: '15px', // 여백 추가
                                            boxSizing: 'border-box', // 패딩을 포함한 전체 크기 설정
                                            fontFamily: 'Pretendard-Regular',
                                            fontSize: '15px',
                                        }}
                                        {...register('Content', {
                                            required: '기록사항을 입력해주세요.',
                                        })}
                                        value={text}
                                        onChange={handleChange}
                                    />
                                </form>
                            ) : (
                                <form
                                    style={{
                                        width: '100%',
                                        height: '265px',
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
                                            color: '#0D2259',
                                            margin: '0 auto',
                                            padding: '15px 0',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <div>이날의 기록사항</div>
                                        <div></div>
                                    </div>

                                    <textarea
                                        style={{
                                            width: '280px',
                                            height: '195px',
                                            margin: '0 auto',
                                            backgroundColor: '#EDF0F5',
                                            borderRadius: '20px',
                                            resize: 'none',
                                            border: 'none',
                                            borderRadius: '20px',
                                            padding: '15px', // 여백 추가
                                            boxSizing: 'border-box', // 패딩을 포함한 전체 크기 설정
                                            fontFamily: 'Pretendard-Regular',
                                            fontSize: '15px',
                                        }}
                                        {...register('Content', {
                                            required: '기록사항을 입력해주세요.',
                                        })}
                                        value={text}
                                        readOnly={true}
                                    />
                                </form>
                            )}
                        </div>

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
                                    border: '1px #ddd solid',
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
                                            width: '100%',
                                            height: '25px',
                                            background: 'linear-gradient(90deg, #4470F3 0%, #02A9A1 100%)',
                                            borderRadius: 100,
                                            borderRadius: '15px',
                                            animation: 'huerotator 6s infinite alternate',
                                        }}
                                    ></div>
                                </div>
                                <div style={{ fontFamily: 'Pretendard-ExtraBold', fontSize: '14px', width: '10%' }}>
                                    <span>100</span>%
                                </div>
                            </div>
                            <div
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '550px',
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
                                        color: '#0D2259',
                                        padding: '20px 0',
                                        textAlign: 'left',
                                    }}
                                >
                                    {!selectedDate ||
                                    moment(selectedDate).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')
                                        ? '오늘'
                                        : moment(selectedDate).format('YY년 M월 D일')}
                                    의 일정
                                </div>
                                <div
                                    style={{
                                        width: '510px',
                                        height: '470px',
                                        margin: '0 auto',
                                        borderRadius: '20px',
                                    }}
                                >
                                    {moment(selectedDate).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD') ? (
                                        <TodayPlanDiv type="today" />
                                    ) : (
                                        <TodayPlanDiv type="notToday" />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div style={{ width: '350px' }}>
                            <div
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '545px',
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
                                        color: '#0D2259',
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
                                        height: '455px',
                                        overflow: 'auto',
                                        margin: '0 auto',
                                    }}
                                >
                                    {!selectedDate ? (
                                        <TimeTableDiv type="after" date={moment().format('YYYY-MM-DD')} />
                                    ) : moment(selectedDate).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD') ? (
                                        <TimeTableDiv type="after" date={moment(selectedDate).format('YYYY-MM-DD')} />
                                    ) : (
                                        <TimeTableDiv type="before" date={moment(selectedDate).format('YYYY-MM-DD')} />
                                    )}
                                </div>
                            </div>
                            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                                <Button
                                    type="secondary"
                                    size="sub"
                                    title="일정 수정"
                                    onClick={() => {
                                        window.location = '/addplan';
                                    }}
                                />
                                <Button
                                    type="primary"
                                    size="medium"
                                    title={
                                        <>
                                            하루 마무리&nbsp;&nbsp;
                                            <img
                                                src="../img/btn/check_enabled.png"
                                                style={{ width: '18px', verticalAlign: 'middle' }}
                                            />
                                        </>
                                    }
                                    onClick={() => {
                                        localStorage.clear();
                                        const completeDate = localStorage.getItem('completeDate');
                                        const todayDate = moment().format('YYYY-MM-DD');

                                        if (completeDate !== todayDate) {
                                            if (window.confirm('정말 하루를 마무리하시겠습니까?')) {
                                                setPopupVisible(true);
                                                localStorage.setItem('completeDate', moment().format('YYYY-MM-DD'));
                                            }
                                        } else {
                                            window.alert('이미 하루를 마무리하셨습니다.');
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isPopupVisible && <FeedbackPopup onClose={closePopup} />}
        </div>
    );
}
