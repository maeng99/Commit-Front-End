import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function TimeTableDiv() {
    // 색상 매핑 객체
    const colors = {
        A: { box: '#1F48BB', text: '#1F48BB' },
        B: { box: '#4470F3', text: '#4470F3' },
        C: { box: '#A4BCFD', text: '#A4BCFD' },
        D: { box: '#B0B0B0', text: '#B0B0B0' },
    };

    // 클릭된 버튼을 관리하는 상태 변수
    const [clickedButton, setClickedButton] = useState(null);

    const [images, setImages] = useState({
        check: '../img/btn/check_disabled.png',
        putoff: '../img/btn/putoff_disabled.png',
        delete: '../img/btn/delete_disabled.png',
    });

    // 이미지 경로 결정 함수
    const getImageSrc = (btn) => {
        return clickedButton === btn ? `../img/btn/${btn}_enabled.png` : `../img/btn/${btn}_disabled.png`;
    };

    // 버튼 마우스 오버 핸들러
    const handleMouseOver = (btn) => {
        if (clickedButton !== btn) {
            setImages((prevImages) => ({
                ...prevImages,
                [btn]: `../img/btn/${btn}_enabled.png`,
            }));
        }
    };

    // 버튼 마우스 아웃 핸들러
    const handleMouseOut = (btn) => {
        if (clickedButton !== btn) {
            setImages((prevImages) => ({
                ...prevImages,
                [btn]: `../img/btn/${btn}_disabled.png`,
            }));
        }
    };

    // 버튼 클릭 핸들러
    const handleClick = (btn) => {
        setClickedButton((prevButton) => {
            const newButton = prevButton === btn ? null : btn;
            setImages((prevImages) => ({
                ...prevImages,
                [btn]: `../img/btn/${btn}_${newButton === btn ? 'enabled' : 'disabled'}.png`,
            }));
            return newButton;
        });
    };

    // 스케줄 아이템을 렌더링하는 함수
    const renderScheduleItem = (text, letter) => (
        <div
            key={letter} // key 속성을 추가
            style={{
                display: 'flex',
                width: '320px',
                height: '60px',
                alignItems: 'center',
                gap: '30px',
                borderRadius: '0px 20px 20px 0px',
                backgroundColor: 'var(--blue5, #E9EFFD)',
                position: 'relative',
                paddingLeft: '20px',
                marginBottom: '10px', // Add margin-bottom to create space between items
            }}
        >
            <div
                style={{
                    width: '10px',
                    height: '60px',
                    flexShrink: 0,
                    borderRadius: '0px 3px 3px 0px',
                    backgroundColor: colors[letter].box,
                    position: 'absolute',
                    left: '0px',
                }}
            />
            <div
                style={{
                    width: '236px',
                    flexShrink: 0,
                    color: 'var(--blue70, #0D2259)',
                    fontFamily: 'Pretendard',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal',
                    textAlign: 'left',
                    paddingLeft: '13px',
                }}
            >
                {text}
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '41px',
                    height: '41px',
                    flexShrink: 0,
                    borderRadius: '20px',
                    backgroundColor: 'var(--blue10, #C9D9FD)',
                    color: colors[letter].text,
                    textAlign: 'center',
                    fontFamily: 'Pretendard',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: 'normal',
                    marginLeft: '-10px',
                }}
            >
                {letter}
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    marginLeft: '-7px',
                }}
            >
                <img
                    src={images.check}
                    alt="Button 1"
                    style={{
                        width: '24px',
                        height: '24px',
                        flexShrink: 0,
                    }}
                    onMouseOver={() => handleMouseOver('check')}
                    onMouseOut={() => handleMouseOut('check')}
                    onClick={() => handleClick('check')}
                />
                <img
                    src={images.putoff}
                    alt="Button 2"
                    style={{
                        width: '24px',
                        height: '24px',
                        flexShrink: 0,
                    }}
                    onMouseOver={() => handleMouseOver('putoff')}
                    onMouseOut={() => handleMouseOut('putoff')}
                    onClick={() => handleClick('putoff')}
                />
                <img
                    src={images.delete}
                    alt="Button 3"
                    style={{
                        width: '24px',
                        height: '24px',
                        flexShrink: 0,
                    }}
                    onMouseOver={() => handleMouseOver('delete')}
                    onMouseOut={() => handleMouseOut('delete')}
                    onClick={() => handleClick('delete')}
                />
            </div>
        </div>
    );

    return (
        <div
            style={{
                width: '470px',
                margin: '0 auto',
            }}
        >
            {/*세리 작업 공간*/}
            {renderScheduleItem('은행 업무 보기', 'A')}
            {renderScheduleItem('미팅', 'B')}
            {renderScheduleItem('점심 약속', 'C')}
            {renderScheduleItem('운동', 'D')}
            {/*세리작업*/}
        </div>
    );
}
