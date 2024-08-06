import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../components/button.tsx';
import SignupAPI from '../api/user/signupAPI.tsx';
import '../App.css';

export default function SetRule() {
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [hover, setHover] = useState(false);

    const onValid = (e) => {
        console.log(e, 'onValid');
        SignupAPI(e.Email, e.Password, e.Name);
    };

    const onInvalid = (e) => {
        console.log(e, 'onInvalid');
        alert('입력한 정보를 다시 확인해주세요.');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div
                style={{
                    width: '1000px',
                    height: '100vh',
                    backgroundColor: '#4470F3',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <img src="..\img\login_background.png" style={{ width: '780px', margin: '0 auto' }} />
            </div>

            <div
                style={{
                    width: '640px',
                    height: '100vh',
                    margin: '0 auto',
                    backgroundColor: '#fff',
                    position: 'relative',
                }}
            >
                <p
                    style={{
                        fontFamily: 'Pretendard-ExtraBold',
                        fontSize: '20px',
                        color: '#4470F3',
                        marginTop: '65px',
                        marginBottom: '8px',
                    }}
                >
                    나만의 플래너 작성 규칙을 작성해보세요!
                </p>
                <p
                    style={{
                        fontFamily: 'Pretendard-Regular',
                        fontSize: '11px',
                        color: '#757575',
                        margin: '0',
                        marginBottom: '44px',
                    }}
                >
                    아래는 기본으로 제공되는 권장 규칙입니다. 직접 자신에 맞게 수정해보세요
                </p>

                <div
                    style={{
                        width: 'auto',
                        height: '510px',
                        margin: '10px',

                        backgroundColor: 'white',
                        borderRadius: '20px',
                        fontFamily: 'Pretendard-Regular',
                        border: '1px solid #EDEDED',
                    }}
                >
                    <div style={{ display: 'flex' }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '15px',
                                    padding: '21px 22px 10px',
                                }}
                            >
                                목표 <span style={{ fontFamily: 'Pretendard-ExtraBold' }}>워라밸 : </span>
                            </div>
                            <div
                                style={{
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '15px',
                                    padding: '24px 20px 10px',
                                }}
                            >
                                하루 목표 <span style={{ fontFamily: 'Pretendard-ExtraBold' }}>수면시간 : </span>
                            </div>
                            <div
                                style={{
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '15px',
                                    padding: '26px 20px 10px',
                                }}
                            >
                                하루 목표 <span style={{ fontFamily: 'Pretendard-ExtraBold' }}>운동시간 : </span>
                            </div>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                color: '#fff',
                                justifyContent: 'space-between',
                                marginLeft: '20px',
                                marginTop: '5px',
                                paddingTop: '6px',
                                width: '300px',
                                height: '150px',
                            }}
                        >
                            {/*#EDEDED*/}

                            <input
                                type="text"
                                placeholder="목표 워라벨 비율을 입력해주세요"
                                style={{
                                    backgroundColor: '#EDEDED',
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '16px',
                                    height: '12px',
                                }}
                            ></input>
                            <input
                                type="text"
                                placeholder="목표 운동시간을 입력해주세요"
                                style={{
                                    backgroundColor: '#EDEDED',
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '16px',
                                    height: '12px',
                                }}
                            ></input>
                            <input
                                type="text"
                                placeholder="목표 운동시간을 입력해주세요"
                                style={{
                                    backgroundColor: '#EDEDED',
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '16px',
                                    height: '12px',
                                }}
                            ></input>
                        </div>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}
                    >
                        <div
                            style={{
                                fontFamily: 'Pretendard-Regular',
                                fontSize: '15px',
                                padding: '20px 25px 10px',
                            }}
                        >
                            그 외 세부 사항
                        </div>
                        <textarea
                            placeholder="그 외 세부 사항을 입력해주세요."
                            style={{
                                width: '580px',
                                height: '260px ',
                                margin: '17px',

                                color: 'black',
                                backgroundColor: '#EDEDED',
                                resize: 'none',
                                border: 'none', // 기본 테두리 제거
                                borderRadius: '15px',
                                padding: '10px', // 여백 추가
                                boxSizing: 'border-box', // 패딩을 포함한 전체 크기 설정
                                fontFamily: 'Pretendard-Regular',
                                fontSize: '16px',
                            }}
                        ></textarea>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
                    <button
                        style={{
                            backgroundColor: '#A4BCFD',
                            color: 'white',
                            fontSize: '22px',
                            border: 'none',
                            borderRadius: '30px',
                            padding: '10px 30px',
                            fontFamily: 'Pretendard-Regular',
                            cursor: 'pointer',
                            transition: 'backgroundColor 0.3s',
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(68, 112, 243, 1)')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#A4BCFD')}
                        onClick={() => {
                            window.location = '/signup';
                        }}
                    >
                        다음에 하기
                    </button>
                    <button
                        style={{
                            backgroundColor: 'rgba(68, 112, 243, 1)',
                            color: 'white',
                            fontSize: '22px',
                            border: 'none',
                            borderRadius: '30px',
                            fontFamily: 'Pretendard-Regular',
                            padding: '10px 30px',
                            cursor: 'pointer',
                            transition: 'backgroundColor 0.3s',
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(68, 112, 243, 1)')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#A4BCFD')}
                        onClick={() => {
                            window.location = '/signup';
                        }}
                    >
                        저장 및 로그인
                    </button>
                </div>
            </div>
        </div>
    );
}
