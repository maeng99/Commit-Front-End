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
        padding: 20px 30px;
        background-color: none;
    }

    /* 전체 폰트 컬러 */
    .react-calendar__month-view {
        abbr {
            font-size: 18px;
        }
    }

    /* 네비게이션 가운데 정렬 */
    .react-calendar__navigation {
        justify-content: center;
    }

    /* 네비게이션 폰트 설정 */
    .react-calendar__navigation button {
        font-family: Pretendard-ExtraBold;
        font-size: 30px;
        color: #4470f3;
        border-radius: 10px;
    }

    /* 네비게이션 버튼 컬러 */
    .react-calendar__navigation button:focus {
        background-color: #fff;
    }

    /* 네비게이션 비활성화 됐을때 스타일 */
    .react-calendar__navigation button:disabled {
        background-color: white;
        color: #4470f3;
    }

    /* 년/월 상단 네비게이션 칸 크기 줄이기 */
    .react-calendar__navigation__label {
        flex-grow: 0 !important;
    }

    /* 요일 간격 */
    .react-calendar__month-view__weekdays {
        padding: 13px 0;
        border-top: 2px #a4bcfd solid;
        border-bottom: 2px #eee solid;
    }

    /* 요일 밑줄 제거 */
    .react-calendar__month-view__weekdays abbr {
        font-family: Pretendard-ExtraBold;
        font-size: 20px;
        color: #0d2259;
        text-decoration: none;
    }

    /* 오늘 날짜 폰트 컬러 */
    .react-calendar__tile--now {
        border-radius: 10px;
        background-color: #c9d9fd;
    }

    /* 네비게이션 현재 월 스타일 적용*/
    .react-calendar__tile--hasActive {
        border: 2px #4470f3 solid;
        background-color: #fff;
        border-radius: 10px;
        abbr {
            color: #4470f3;
        }
    }

    /* 일 날짜 스타일 적용 */
    .react-calendar__month-view__days__day {
        border-bottom: 2px #eee solid;
        font-family: Pretendard-SemiBold;
        padding: 5px 0px 60px;
        position: relative;
        text-align: left;
        abbr {
            padding-left: 5px;
        }
    }

    /* 네비게이션 월 스타일 적용 */
    .react-calendar__year-view__months__month {
        border-radius: 15px;
        background-color: none;
        flex: 0 0 calc(33.3333% - 10px) !important;
        margin-inline-start: 5px !important;
        margin-inline-end: 5px !important;
        margin-block-end: 10px;
        padding: 30px 6.6667px;
        font-family: Pretendard-ExtraBold;
        font-size: 14px;
        color: #000;
    }

    /* 선택한 날짜 스타일 적용 */
    .react-calendar__tile:enabled:hover {
        background-color: #eee;
        border-radius: 10px;
        color: #666;
    }
    .react-calendar__tile:enabled:focus,
    .react-calendar__tile--active {
        border: 2px #4470f3 solid;
        background-color: #fff;
        border-radius: 10px;
        color: #4470f3;
    }
`;

const StyledCalendar = styled(Calendar)``;

/* 오늘 버튼 스타일 */
const StyledTodayBtn = styled.div`
    position: absolute;
    right: 30px;
    top: 35px;
    background-color: #c9d9fd;
    color: #000;
    width: 60px;
    min-width: fit-content;
    height: 20px;
    text-align: center;
    margin: 0 auto;
    border-radius: 15px;
    font-family: Pretendard-Regular;
    font-size: 15px;
    cursor: pointer;
    &:hover {
        font-family: Pretendard-SemiBold;
    }
`;

/* 이벤트 출력 칸 */
const StyledEvent = styled.div`
    font-family: Pretendard-Regular;
    font-size: 13px;
    color: #000;
    line-height: 20px;
    border-radius: 10px;
    width: 100%;
    height: 20px;
    padding: 0 5px;
    position: absolute;
    top: ${(props) => props.top}px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const events = [
    { date: '2024-07-23', title: '오후 6시 싸이 흠뻑쇼' },
    { date: '2024-07-23', title: '결혼식' },
    { date: '2024-07-24', title: '여행' },
    { date: '2024-07-29', title: '프로젝트 회의' },
    { date: '2024-08-06', end: '2024-08-07', title: '멋사 12기 종강 해커톤' },
];

export default function SmallCalendar() {
    const today = new Date();
    const [date, setDate] = useState<Value>(today);
    const [activeStartDate, setActiveStartDate] = useState<Date | null>(new Date());

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
                locale="en-US"
                showNeighboringMonth={true}
                next2Label={null}
                prev2Label={null}
                minDetail="year"
                // 오늘 날짜로 돌아오는 기능을 위해 필요한 옵션 설정
                activeStartDate={activeStartDate === null ? undefined : activeStartDate}
                onActiveStartDateChange={({ activeStartDate }) => setActiveStartDate(activeStartDate)}
                // 오늘 날짜에 'Today' 텍스트 삽입하고 출석한 날짜에 점 표시를 위한 설정
                tileContent={({ date, view }) => {
                    const eventsOnDate = events.filter((event) => event.date === moment(date).format('YYYY-MM-DD'));
                    if (eventsOnDate.length > 0) {
                        return (
                            <div>
                                {eventsOnDate.slice(0, 2).map((event, index) => (
                                    <StyledEvent
                                        key={index}
                                        style={{
                                            backgroundColor: index === 0 ? '#e9effd' : '#C9D9FD',
                                            top: index === 0 ? 30 : 55,
                                        }}
                                    >
                                        {event.title}
                                    </StyledEvent>
                                ))}
                            </div>
                        );
                    }
                    return null;
                }}
            />
            <StyledTodayBtn onClick={handleTodayClick}>Today</StyledTodayBtn>
        </StyledCalendarWrapper>
    );
}
