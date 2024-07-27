import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import moment from 'moment';
import '../App.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const StyledCalendarWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    .react-calendar {
        width: 100%;
        border: none;
        padding: 3% 5%;
        background-color: none;
    }

    /* 전체 폰트 컬러 */
    .react-calendar__month-view {
        abbr {
            font-size: 15px;
        }
    }

    /* 네비게이션 가운데 정렬 */
    .react-calendar__navigation {
        justify-content: center;
    }

    /* 네비게이션 폰트 설정 */
    .react-calendar__navigation button {
        font-weight: 800;
        font-size: 18px;
        color: #0d2259;
    }

    /* 네비게이션 버튼 컬러 */
    .react-calendar__navigation button:focus {
        background-color: #fff;
    }

    /* 네비게이션 비활성화 됐을때 스타일 */
    .react-calendar__navigation button:disabled {
        background-color: white;
        color: #0d2259;
    }

    /* 년/월 상단 네비게이션 칸 크기 줄이기 */
    .react-calendar__navigation__label {
        flex-grow: 0 !important;
    }

    /* 요일 밑줄 제거 */
    .react-calendar__month-view__weekdays abbr {
        text-decoration: none;
        font-weight: 800;
    }

    /* 오늘 날짜 폰트 컬러 */
    .react-calendar__tile--now {
        background: #fff;
        border-radius: 10px;
        background-color: #c9d9fd;
    }

    /* 네비게이션 현재 월 스타일 적용 */
    .react-calendar__tile--hasActive {
        background-color: #4470f3;
        abbr {
            color: #fff;
        }
        &:hover {
            abbr {
                color: #000;
            }
        }
    }

    /* 일 날짜 간격 */
    .react-calendar__tile {
        padding: 5px 0px 17px;
        position: relative;
    }

    /* 네비게이션 월 스타일 적용 */
    .react-calendar__year-view__months__month {
        border-radius: 15px;
        background-color: none;
        flex: 0 0 calc(33.3333% - 10px) !important;
        margin-inline-start: 5px !important;
        margin-inline-end: 5px !important;
        margin-block-end: 10px;
        padding: 15px 6.6667px;
        font-size: 14px;
        font-weight: 600;
        color: #000;
    }

    /* 선택한 날짜 스타일 적용 */
    .react-calendar__tile:enabled:hover {
        background-color: #eee;
        border-radius: 10px;
        color: #000;
    }
    .react-calendar__tile:enabled:focus,
    .react-calendar__tile--active {
        background-color: #4470f3;
        border-radius: 10px;
        color: #fff;
    }
`;

const StyledCalendar = styled(Calendar)``;

/* 오늘 버튼 스타일 */
const StyledDate = styled.div`
    position: absolute;
    right: 30px;
    top: 30px;
    background-color: #c9d9fd;
    color: #000;
    width: 13%;
    min-width: fit-content;
    height: 18px;
    text-align: center;
    margin: 0 auto;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
`;

/* 오늘 날짜에 텍스트 삽입 스타일
const StyledToday = styled.div`
    font-size: x-small;
    color: #c9d9fd;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
`;
 */

/* 출석한 날짜에 점 표시 스타일 */
const StyledDot = styled.div`
    background-color: red;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    position: absolute;
    top: 28px;
    left: 50%;
    transform: translateX(-50%);
`;

export default function SmallCalendar() {
    const today = new Date();
    const [date, setDate] = useState<Value>(today);
    const [activeStartDate, setActiveStartDate] = useState<Date | null>(new Date());
    const events = [
        { date: '2024-07-23', title: '오후 6시 싸이 흠뻑쇼' },
        { date: '2024-07-27', title: '프로젝트 회의' },
        { date: '2024-08-03', title: '몇사 12기 종강 해커톤' },
    ];

    const handleDateChange = (newDate: Value) => {
        setDate(newDate);
    };

    const handleTodayClick = () => {
        const today = new Date();
        setActiveStartDate(today);
        setDate(today);
    };

    return (
        <StyledCalendarWrapper>
            <StyledCalendar
                value={date}
                onChange={handleDateChange}
                formatDay={(locale, date) => moment(date).format('D')}
                formatYear={(locale, date) => moment(date).format('YYYY')}
                formatMonthYear={(locale, date) => moment(date).format('YYYY. MM')}
                calendarType="gregory"
                showNeighboringMonth={false}
                next2Label={null}
                prev2Label={null}
                minDetail="year"
                // 오늘 날짜로 돌아오는 기능을 위해 필요한 옵션 설정
                activeStartDate={activeStartDate === null ? undefined : activeStartDate}
                onActiveStartDateChange={({ activeStartDate }) => setActiveStartDate(activeStartDate)}
                // 오늘 날짜에 'Today' 텍스트 삽입하고 출석한 날짜에 점 표시를 위한 설정
                tileContent={({ date, view }) => {
                    let html = [];
                    /*if (
                        view === 'month' &&
                        date.getMonth() === today.getMonth() &&
                        date.getDate() === today.getDate()
                    ) {
                        html.push(<StyledToday key={'today'}>Today</StyledToday>);
                    }*/
                    if (events.find((event) => event.date === moment(date).format('YYYY-MM-DD'))) {
                        html.push(<StyledDot key={moment(date).format('YYYY-MM-DD')} />);
                    }
                    return <>{html}</>;
                }}
            />
            <StyledDate onClick={handleTodayClick}>Today</StyledDate>
        </StyledCalendarWrapper>
    );
}
