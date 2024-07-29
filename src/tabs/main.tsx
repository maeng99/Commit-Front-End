import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import Button from '../components/button.tsx';
import Date from '../components/date.tsx';
import Nav from '../components/nav.tsx';
import SmallCalendar from '../components/smallCalendar.tsx';
import '../App.css';

const events = [
    { date: '2024-07-23', title: '오후 6시 싸이 흠뻑쇼' },
    { date: '2024-07-23', title: '결혼식' },
    { date: '2024-07-24', title: '여행' },
    { date: '2024-07-29', title: '프로젝트 회의' },
    { date: '2024-08-06', end: '2024-08-07', title: '멋사 12기 종강 해커톤' },
];

function getClosestEvents(events) {
    const today = moment(); // Get today's date
    const futureEvents = events.filter((event) => moment(event.date) >= today); // Filter future events
    futureEvents.sort((a, b) => moment(a.date) - moment(b.date)); // Sort events by date
    return futureEvents.slice(0, 3); // Get the closest 3 events
}

export default function Main() {
    const closestEvents = getClosestEvents(events);
    console.log(closestEvents);

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
                            <div
                                style={{
                                    fontFamily: 'Pretendard-ExtraBold',
                                    fontSize: '14px',
                                    color: '#0D2259',
                                    width: '10%',
                                }}
                            >
                                <span>40</span>%
                            </div>
                        </div>
                        <div style={{ width: '100%', height: '550px', backgroundColor: '#fff', borderRadius: '20px' }}>
                            <div
                                style={{
                                    width: '470px',
                                    margin: '0 auto',
                                    fontSize: '20px',
                                    fontFamily: 'Pretendard-SemiBold',
                                    color: '#0D2259',
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
                                    fontSize: '20px',
                                    fontFamily: 'Pretendard-SemiBold',
                                    color: '#0D2259',
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
                                 <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      marginTop: "10px",
                      color: "#0D2259",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      fontSize: "12px",
                      marginLeft: "3px",
                      marginRight: "16px",
                    }}
                  >
                    <span style={{ lineHeight: "1" }}>00:00</span>
                    <span>-</span>
                    <span style={{ lineHeight: "1" }}>07:00</span>
                  </div>

                  <span
                    style={{
                      width: "240px",
                      height: "52px",
                      backgroundColor: "white",
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "11px",
                      marginRight: "5px",
                      borderTopRightRadius: "18px",
                      borderBottomRightRadius: "18px",
                      border: "1px solid #A4BCFD",
                      borderLeft: "none",
                      paddingRight:"10px",
                    }}
                  >
                    <span
                      style={{
                        width: "10px",
                 
                        backgroundColor: "#CACACA",
                      }}
                    ></span>

                    <span style={{ color: "#0D2259",paddingTop:"13px",paddingRight:"125px"}}>수면시간</span>
                    <img
                      src="../img/btn/edit_disabled.png"
                      style={{ width: "22px", height: "21px" ,paddingTop:"13px"}}
                    />
                  </span>
                </div>

                                {/*세빈작업}
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
                                    fontFamily: 'Pretendard-SemiBold',
                                    fontSize: '20px',
                                    color: '#0D2259',
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
                                }}
                            >
                                {closestEvents.length > 0 ? (
                                    closestEvents.map((event, index) => (
                                        <div
                                            style={{
                                                width: '260px',
                                                height: '40px',
                                                fontFamily: 'Pretendard-SemiBold',
                                                fontSize: '16px',
                                                color: '#0D2259',
                                                border: '1px #eee solid',
                                                borderRadius: '10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'left',
                                                padding: '10px',
                                                marginBottom: '10px',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    fontFamily: 'Pretendard-SemiBold',
                                                    fontSize: '16px',
                                                    color: '#0D2259',
                                                    backgroundColor: '#C9D9FD',
                                                    borderRadius: '10px',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    marginRight: '20px',
                                                }}
                                            >
                                                {moment(event.date).format('D')}
                                            </div>
                                            {event.title}
                                        </div>
                                    ))
                                ) : (
                                    <div
                                        style={{
                                            width: '260px',
                                            height: '40px',
                                            fontFamily: 'Pretendard-SemiBold',
                                            fontSize: '16px',
                                            color: '#0D2259',
                                            border: '1px #eee solid',
                                            borderRadius: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'left',
                                            padding: '10px',
                                            marginBottom: '10px',
                                        }}
                                    >
                                        예정된 일정이 없습니다.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
