import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
type TodayPlanType = 'after' | 'before';
type TodayPlanProps = {
    type?: TimeTableType;
    date: Date;
};

type Box = {
    selectedCategory: string | null;
    isRightBoxClicked: boolean;
    content: string;
};

export default function TodayPlanDiv(props: TodayPlanProps) {
    const [isRightBoxClicked, setIsRightBoxClicked] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [newBoxes, setNewBoxes] = useState([]);
    const boxRef = useRef(null);
    const colors = {
        A: { box: '#1F48BB', text: '#1F48BB' },
        B: { box: '#4470F3', text: '#4470F3' },
        C: { box: '#A4BCFD', text: '#A4BCFD' },
        D: { box: '#B0B0B0', text: '#B0B0B0' },
    };

    const handleRightBoxClick = (index: number) => {
        const updatedBoxes = [...newBoxes];
        updatedBoxes[index].isRightBoxClicked = !updatedBoxes[index].isRightBoxClicked;
        setNewBoxes(updatedBoxes);
    };

    const handleCategoryClick = (index: number, category: string) => {
        const updatedBoxes = [...newBoxes];
        updatedBoxes[index].selectedCategory = updatedBoxes[index].selectedCategory === category ? null : category;
        setNewBoxes(updatedBoxes);
    };

    const handleContentChange = (index: number, content: string) => {
        const updatedBoxes = [...newBoxes];
        updatedBoxes[index].content = content;
        setNewBoxes(updatedBoxes);
    };

    const handleAddBox = () => {
        setNewBoxes([...newBoxes, { selectedCategory: null, isRightBoxClicked: false }]);
    };

    const handleRemoveBox = (index: number) => {
        setNewBoxes(newBoxes.filter((_, i) => i !== index)); // 특정 인덱스의 네모 칸 제거
    };

    const todayPlanList = [
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
            status: 'COMPLETE',
            childPlan: 0,
            userId: 0,
            complete: true,
            delayed: true,
        },
    ];

    return (
        <div
            style={{
                width: '470px',
                margin: '0 auto',
            }}
        >
            {newBoxes.map((box, index) => (
                <div
                    ref={boxRef}
                    key={index}
                    style={{
                        width: '470px',
                        height: '100px',
                        borderRadius: '5px 20px 20px 5px',
                        backgroundColor: '#ccc',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        position: 'relative',
                        margin: '0 auto',
                        marginBottom: '10px',
                    }}
                >
                    <div
                        style={{
                            width: '460px',
                            height: '100px',
                            backgroundColor: '#eee',
                            borderRadius: '5px 20px 20px 5px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                width: '10px',
                                height: '100px',
                                borderRadius: '5px 0px 0px 5px',
                                background: box.selectedCategory ? colors[box.selectedCategory].box : '#333',
                            }}
                        ></div>
                        <div style={{ width: '190px' }}>
                            <input
                                type="text"
                                value={box.content}
                                onChange={(e) => handleContentChange(index, e.target.value)}
                                placeholder="일정 내용(최대 12자)"
                                maxLength="12"
                                style={{
                                    width: '200px',
                                    border: 'none',
                                    borderRadius: '10px',
                                    padding: '10px 5px',
                                    backgroundColor: 'none',
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '20px',
                                    color: '#0D2259',
                                }}
                            />
                        </div>
                        <div style={{ width: '190px', height: '70px', padding: '0 15px' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    gap: '10px',
                                }}
                            >
                                {Object.keys(colors).map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => handleCategoryClick(index, key)}
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '20px',
                                            backgroundColor: box.selectedCategory === key ? '#C9D9FD' : '#F6F6F6',
                                            border: 'none',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            position: 'relative',
                                        }}
                                    >
                                        <span
                                            style={{
                                                color:
                                                    box.selectedCategory === key
                                                        ? colors[key].text
                                                        : 'var(--gray40, #B0B0B0)',
                                                textAlign: 'center',
                                                fontFamily: 'Pretendard-SemiBold',
                                                fontSize: '22px',
                                            }}
                                        >
                                            {key}
                                        </span>
                                    </button>
                                ))}
                            </div>
                            <hr
                                style={{
                                    width: '190px',
                                    height: '1px',
                                    border: 'none',
                                    background: '#eee',
                                }}
                            />
                            <div
                                style={{
                                    width: '190px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <span
                                    style={{
                                        color: '#444',
                                        fontFamily: 'Pretendard-Regular',
                                        fontSize: '14px',
                                    }}
                                >
                                    카테고리
                                </span>
                                <select
                                    style={{
                                        width: '55px',
                                        height: '20px',
                                        color: 'var(--gray60, #545454)',
                                        fontFamily: 'Pretendard',
                                        fontSize: '12px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal',
                                    }}
                                >
                                    <option disabled selected value="">
                                        선택
                                    </option>
                                    <option value="Work">Work</option>
                                    <option value="Life">Life</option>
                                    <option value="운동">운동</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <img
                        type="submit"
                        src="../img/btn/delete2.png"
                        style={{
                            width: '10px',
                            height: '15px',
                            cursor: 'pointer',
                            padding: '50px 5px',
                        }}
                        onMouseEnter={(event) => {
                            event.currentTarget.parentElement.style.backgroundColor = '#EE3579';
                        }}
                        onMouseLeave={(event) => {
                            event.currentTarget.parentElement.style.backgroundColor = '#ccc';
                        }}
                    />
                </div>
            ))}
            <button
                onClick={handleAddBox}
                style={{
                    width: '470px',
                    height: '50px',
                    borderRadius: '15px',
                    border: '1px solid #eee',
                    backgroundColor: '#E9EFFD',
                    display: 'flex',
                    cursor: 'pointer',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <span
                    style={{
                        height: '55px',
                        color: '#4470F3',
                        fontSize: '45px',
                    }}
                >
                    +
                </span>
            </button>
        </div>
    );
}
