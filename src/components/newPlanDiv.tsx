import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

type TodayPlanType = 'after' | 'before';
type TodayPlanProps = {
    type?: TimeTableType;
    date: Date;
};

export default function TodayPlanDiv(props: TodayPlanProps) {
    const [showNewBox, setShowNewBox] = useState(false);
    const [isRightBoxClicked, setIsRightBoxClicked] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [newBoxes, setNewBoxes] = useState([]);

    const colors = {
        A: { box: '#1F48BB', text: '#1F48BB' },
        B: { box: '#4470F3', text: '#4470F3' },
        C: { box: '#A4BCFD', text: '#A4BCFD' },
        D: { box: '#B0B0B0', text: '#B0B0B0' },
    };

    const handleButtonClick = () => {
        setShowNewBox(true);
    };

    const handleRightBoxClick = (index) => {
        const updatedBoxes = [...newBoxes];
        updatedBoxes[index].isRightBoxClicked = !updatedBoxes[index].isRightBoxClicked;
        setNewBoxes(updatedBoxes);
    };

    const handleCategoryClick = (index, category) => {
        const updatedBoxes = [...newBoxes];
        updatedBoxes[index].selectedCategory = updatedBoxes[index].selectedCategory === category ? null : category;
        setNewBoxes(updatedBoxes);
    };

    const handleAddBox = () => {
        setNewBoxes([...newBoxes, { selectedCategory: null, isRightBoxClicked: false }]);
    };

    const handleRemoveBox = (index) => {
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
            {/* 기존 버튼 */}
            {!showNewBox && (
                <button
                    onClick={handleButtonClick}
                    style={{
                        width: '470px',
                        height: '50px',
                        flexShrink: '0',
                        borderRadius: '10px',
                        border: '1px solid #eee',
                        backgroundColor: '#C9D9FD',
                        display: 'flex',
                        cursor: 'pointer',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <span
                        style={{
                            height: '55px',
                            flexShrink: '0',
                            color: '#4470F3',
                            fontSize: '50px',
                        }}
                    >
                        +
                    </span>
                </button>
            )}

            {/* 새로운 네모 칸 */}
            {newBoxes.map((box, index) => (
                <div
                    key={index}
                    style={{
                        width: '450px',
                        height: '101px',
                        flexShrink: '0',
                        borderRadius: '10px',
                        backgroundColor: '#EDEDED',
                        display: 'flex',
                        alignItems: 'center',
                        position: 'relative',
                        marginRight: '20px',
                        zIndex: 2,
                        marginBottom: '10px',
                    }}
                >
                    <div
                        style={{
                            width: '10px',
                            height: '101px',
                            flexShrink: '0',
                            borderRadius: '3px 0px 0px 3px',
                            background: box.selectedCategory ? colors[box.selectedCategory].box : '#333',
                        }}
                    ></div>
                    <input
                        type="text"
                        placeholder="일정 내용(최대 12자)"
                        maxLength="12"
                        style={{
                            marginLeft: '50px',
                            width: '200px',
                            height: '20px',
                            border: 'none',
                            borderRadius: '5px',
                            padding: '10px',
                            fontSize: '18px',
                            backgroundColor: '#EDEDED',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal',
                        }}
                    />
                    {/*오른쪽 중간에 넣은 한 줄*/}
                    <div
                        style={{
                            width: '190px',
                            height: '1px',
                            background: 'var(--gray20, #E2E2E2)',
                            position: 'absolute',
                            top: '66px',
                            left: '260px',
                        }}
                    ></div>
                    <span
                        style={{
                            position: 'absolute',
                            top: '77px',
                            left: '275px',
                            width: '42px',
                            height: '14px',
                            color: 'var(--gray60, #545454)',
                            fontFamily: 'Pretendard',
                            fontSize: '12px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal',
                        }}
                    >
                        카테고리
                    </span>
                    <span
                        style={{
                            position: 'absolute',
                            top: '77px',
                            left: '390px',
                            width: '28px',
                            height: '14px',
                            color: 'var(--gray60, #545454)',
                            fontFamily: 'Pretendard',
                            fontSize: '12px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal',
                        }}
                    >
                        선택
                    </span>
                    {/* 버튼 추가 */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            display: 'flex',
                            gap: '5px',
                        }}
                    >
                        {Object.keys(colors).map((key) => (
                            <button
                                key={key}
                                onClick={() => handleCategoryClick(index, key)}
                                style={{
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '20px',
                                    backgroundColor:
                                        selectedCategory === key ? 'var(--blue10, #C9D9FD)' : 'var(--gray5, #F6F6F6)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 2px',
                                    position: 'relative',
                                }}
                            >
                                <span
                                    style={{
                                        color:
                                            box.selectedCategory === key ? colors[key].text : 'var(--gray40, #B0B0B0)',
                                        fontSize: '24px',
                                        textAlign: 'center',
                                        fontFamily: 'Pretendard',
                                        fontWeight: '700',
                                        fontStyle: 'normal',
                                        lineHeight: 'normal',
                                    }}
                                >
                                    {key}
                                </span>
                            </button>
                        ))}
                    </div>
                    {/* 삭제버튼 */}
                    <button
                        onClick={() => handleRemoveBox(index)}
                        style={{
                            width: '39px',
                            height: '101px',
                            flexShrink: '0',
                            borderRadius: '0px 20px 20px 0px',
                            background: isRightBoxClicked ? 'var(--red1, #EE3579)' : 'var(--gray30, #CACACA)',
                            position: 'absolute',
                            right: '-20px',
                            top: '0',
                            border: 'none',
                            cursor: 'pointer',
                            zIndex: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span
                            style={{
                                width: '12px',
                                height: '12px',
                                color: '#FFFFFF',
                                fontSize: '12px',
                                fontWeight: '900',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                zIndex: 1,
                                lineHeight: '12px',
                            }}
                        >
                            X
                        </span>
                    </button>
                </div>
            ))}

            {/* + 버튼 (하단으로 이동) */}
            {showNewBox && (
                <button
                    onClick={handleAddBox}
                    style={{
                        width: '470px',
                        height: '46px',
                        flexShrink: '0',
                        borderRadius: '10px',
                        border: '0.5px solid var(--gray20, #E2E2E2)',
                        background: 'rgba(201, 217, 253, 0.4)',
                        display: 'flex',
                        cursor: 'pointer',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <span
                        style={{
                            width: '27px',
                            height: '27px',
                            flexShrink: '0',
                            color: '#4470F3',
                            fontSize: '24px',
                        }}
                    >
                        +
                    </span>
                </button>
            )}
        </div>
    );
}
