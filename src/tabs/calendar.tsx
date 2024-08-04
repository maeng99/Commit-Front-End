import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Date from '../components/date.tsx';
import Nav from '../components/nav.tsx';
import BigCalendar from '../components/bigCalendar.tsx';
import PlanData from '../database/planData.tsx';
import '../App.css';

const events = PlanData();

export default function Calendar() {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateSelect = (selectedDate: Date) => {
        setSelectedDate(selectedDate); // Update the selected date in the state
    };

    const formatDate = (selectedDate: Date) => {
        const year = selectedDate.getFullYear();
        const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
        const day = selectedDate.getDate().toString().padStart(2, '0');
        const yearMonth = `${year}년 ${month}월`;
        const yearMonthDay: Date = `${year}-${month}-${day}`;
        return { yearMonthDay, yearMonth, day };
    };

    return (
        <div>
            <Nav type="calendar" />
            <div className="background">
                <div className="main_contents_div">
                    <Date />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div
                            style={{
                                width: '900px',
                                height: '606px',
                                backgroundColor: '#fff',
                                borderRadius: '20px',
                                overflow: 'auto',
                                border: '1px #ddd solid',
                            }}
                        >
                            <BigCalendar onDateSelect={handleDateSelect} />
                        </div>

                        <div
                            style={{
                                width: '320px',
                                height: '606px',
                                backgroundColor: '#fff',
                                borderRadius: '20px',
                                border: '1px #ddd solid',
                            }}
                        >
                            <div
                                style={{
                                    width: '280px',
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '13px',
                                    margin: '0 auto',
                                    padding: '15px 0',
                                    textAlign: 'left',
                                    color: '#777',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <div>
                                    <span
                                        style={{
                                            fontFamily: 'Pretendard-ExtraBold',
                                            fontSize: '45px',
                                            color: '#4470F3',
                                        }}
                                    >
                                        {selectedDate ? formatDate(selectedDate).day : moment(today).format('DD')}
                                    </span>
                                    {selectedDate
                                        ? formatDate(selectedDate).yearMonth
                                        : moment(today).format('YYYY년 MM월')}
                                </div>
                                <div>
                                    <img
                                        src="../img/btn/edit_disabled.png"
                                        style={{
                                            width: '30px',
                                            cursor: 'pointer',
                                        }}
                                    />
                                </div>
                            </div>
                            <hr
                                style={{
                                    margin: '0 auto',
                                    marginBottom: '15px',
                                    border: 'none',
                                    height: '1px',
                                    backgroundColor: '#C9D9FD',
                                }}
                            />
                            <div style={{ width: '320px', height: '490px', overflow: 'auto' }}>
                                {/*일정이 없을 때*/}
                                {!selectedDate
                                    ? events.filter((event) => event.date === moment(today).format('YYYY-MM-DD'))
                                          .length === 0 && (
                                          <div
                                              style={{
                                                  width: '280px',
                                                  height: '490px',
                                                  margin: '0 auto',
                                                  backgroundColor: '#eee',
                                                  borderRadius: '20px',
                                              }}
                                          >
                                              <div
                                                  style={{
                                                      fontFamily: 'Pretendard-SemiBold',
                                                      fontSize: '18px',
                                                      paddingTop: '200px',
                                                  }}
                                              >
                                                  작성된 일정이 없습니다.
                                              </div>
                                              <div
                                                  style={{
                                                      fontFamily: 'Pretendard-Regular',
                                                      fontSize: '13px',
                                                      color: '#888',
                                                      marginTop: '8px',
                                                  }}
                                              >
                                                  <div>오른쪽 상단의 버튼을 클릭하면</div>
                                                  <div> 일정을 생성할 수 있습니다.</div>
                                              </div>
                                          </div>
                                      )
                                    : formatDate(selectedDate).yearMonthDay >= moment(today).format('YYYY-MM-DD')
                                    ? events.filter((event) => event.date === formatDate(selectedDate).yearMonthDay)
                                          .length === 0 && (
                                          <div
                                              style={{
                                                  width: '280px',
                                                  height: '490px',
                                                  margin: '0 auto',
                                                  backgroundColor: '#eee',
                                                  borderRadius: '20px',
                                              }}
                                          >
                                              <div
                                                  style={{
                                                      fontFamily: 'Pretendard-SemiBold',
                                                      fontSize: '18px',
                                                      paddingTop: '200px',
                                                  }}
                                              >
                                                  작성된 일정이 없습니다.
                                              </div>
                                              <div
                                                  style={{
                                                      fontFamily: 'Pretendard-Regular',
                                                      fontSize: '13px',
                                                      color: '#888',
                                                      marginTop: '5px',
                                                  }}
                                              >
                                                  <div>오른쪽 상단의 버튼을 클릭하면</div>
                                                  <div> 일정을 생성할 수 있습니다.</div>
                                              </div>
                                          </div>
                                      )
                                    : events.filter((event) => event.date === formatDate(selectedDate).yearMonthDay)
                                          .length === 0 && (
                                          <div
                                              style={{
                                                  width: '280px',
                                                  height: '490px',
                                                  margin: '0 auto',
                                                  backgroundColor: '#eee',
                                                  borderRadius: '20px',
                                              }}
                                          >
                                              <div
                                                  style={{
                                                      fontFamily: 'Pretendard-SemiBold',
                                                      fontSize: '18px',
                                                      paddingTop: '200px',
                                                  }}
                                              >
                                                  작성된 일정이 없습니다.
                                              </div>
                                          </div>
                                      )}
                                {/*일정이 있을 때*/}
                                {selectedDate
                                    ? events.map((event) =>
                                          // Use parentheses instead of curly braces for the ternary operator
                                          // Curly braces are used for block statements, which are not returned implicitly
                                          event.date === formatDate(selectedDate).yearMonthDay ? (
                                              <div
                                                  key={event.id}
                                                  style={{
                                                      width: '280px',
                                                      height: '80px',
                                                      border: '1px #ddd solid',
                                                      borderRadius: '20px',
                                                      margin: '0 auto',
                                                      marginBottom: '10px',
                                                      textAlign: 'left',
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                  }}
                                              >
                                                  <div style={{ padding: '18px' }}>
                                                      <div
                                                          style={{
                                                              fontFamily: 'Pretendard-SemiBold',
                                                              fontSize: '18px',
                                                          }}
                                                      >
                                                          {event.title}
                                                      </div>
                                                      <div
                                                          style={{
                                                              fontFamily: 'Pretendard-Regular',
                                                              fontSize: '12px',
                                                              color: '#888',
                                                          }}
                                                      >
                                                          {event.date} ~ {event.end}
                                                      </div>
                                                  </div>
                                              </div>
                                          ) : (
                                              <></>
                                          )
                                      )
                                    : events.map((event) =>
                                          // Use parentheses instead of curly braces for the ternary operator
                                          // Curly braces are used for block statements, which are not returned implicitly
                                          event.date === moment(today).format('YYYY-MM-DD') ? (
                                              <div
                                                  key={event.id}
                                                  style={{
                                                      width: '280px',
                                                      height: '80px',
                                                      border: '1px #ddd solid',
                                                      borderRadius: '20px',
                                                      margin: '0 auto',
                                                      marginBottom: '10px',
                                                      textAlign: 'left',
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                  }}
                                              >
                                                  <div style={{ padding: '18px' }}>
                                                      <div
                                                          style={{
                                                              fontFamily: 'Pretendard-SemiBold',
                                                              fontSize: '18px',
                                                          }}
                                                      >
                                                          {event.title}
                                                      </div>
                                                      <div
                                                          style={{
                                                              fontFamily: 'Pretendard-Regular',
                                                              fontSize: '12px',
                                                              color: '#888',
                                                              marginTop: '5px',
                                                          }}
                                                      >
                                                          {event.date} ~ {event.end}
                                                      </div>
                                                  </div>
                                              </div>
                                          ) : (
                                              <></>
                                          )
                                      )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
