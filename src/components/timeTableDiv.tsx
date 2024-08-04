import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const datas = {
    start_time: '12:43',
    end_time: '14:12',
};

type TimeTableType = 'after' | 'before';

export default function TimeTableDiv(props: TimeTableType) {
    const { type } = props;
    const [xy, setXY] = useState({ x: -1000, y: -1000 });
    const [data, setData] = useState(null);
    const [isTimePopupVisible, setTimePopupVisible] = useState(true);
    const [popupStyle, setPopupStyle] = useState({ position: 'fixed' });

    const handleTime = (event, data) => {
        const parentRect = event.currentTarget.parentElement.parentElement.parentElement.getBoundingClientRect();
        const clickedX = event.clientX - parentRect.left;
        const clickedY = event.clientY - parentRect.top;

        setXY({ x: clickedX, y: clickedY });
        setData(data);
    };

    useEffect(() => {
        if (isTimePopupVisible) {
            setTimePopupVisible(false);
        } else {
            setTimePopupVisible(true);
        }
    }, [xy]);

    return (
        <div
            style={{
                width: '310px',
                margin: '0 auto',
            }}
        >
            {/*세빈이 작업 공간*/}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                {isTimePopupVisible ? (
                    <form
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
                        }}
                    >
                        <div
                            style={{
                                width: '160px',
                                height: '80px',
                                backgroundColor: '#fff',
                                borderTopLeftRadius: '10px',
                                borderBottomRightRadius: '10px',
                                borderTopRightRadius: '10px',
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
                                    placeholder="00 : 00"
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
                                ></input>
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
                                    placeholder="00 : 00"
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
                                ></input>
                            </div>
                        </div>
                        <img
                            src="../img/btn/nextSmall.png"
                            style={{
                                width: '11px',
                                height: '15px',
                                cursor: 'pointer',
                                paddingTop: '30px 10px',
                            }}
                        />
                    </form>
                ) : (
                    <></>
                )}

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
                    <span style={{ lineHeight: '1' }}>00:00</span>
                    <span>-</span>
                    <span style={{ lineHeight: '1' }}>07:00</span>
                </div>
                <span
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
                                수면시간
                            </span>
                        </div>
                    ) : (
                        <div
                            style={{
                                width: '230px',
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
                                수면시간
                            </span>
                        </div>
                    )}
                    {type === 'after' ? (
                        <img
                            src="../img/btn/edit_disabled.png"
                            style={{ width: '22px', cursor: 'pointer' }}
                            onClick={(event) => {
                                handleTime(event, datas);
                            }}
                        />
                    ) : (
                        <></>
                    )}
                </span>
            </div>
            {/*세빈작업*/}
        </div>
    );
}
