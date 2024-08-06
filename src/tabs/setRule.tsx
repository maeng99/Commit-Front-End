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
                        marginTop: '37px',
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
                        marginBottom: '24px',
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
                                목표 <span style={{ fontFamily: 'Pretendard-ExtraBold' }}>워라벨 : </span>
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
                                width: '80px',
                                height: '150px',
                            }}
                        >
                            <div style={{ display: 'flex' }}>
                                {/*#EDEDED*/}
                                <select
                                    style={{
                                        width: '55px',
                                        height: '30px',
                                        borderRadius: '4px',
                                        margin: '5px',
                                        border: '1px solid #4470F3',
                                        fontSize: '12px',
                                    }}
                                >
                                    <option disabled selected value="">
                                        Work
                                    </option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                                <div style={{ zIndex: '10', color: 'black', marginTop: '8px' }}>:</div>
                                <select
                                    style={{
                                        width: '58px',
                                        height: '30px',
                                        borderRadius: '4px',
                                        margin: '5px',
                                        border: '1px solid #4470F3',
                                        fontSize: '12px',
                                    }}
                                >
                                    <option disabled selected value="">
                                        Life
                                    </option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </div>

                            <input
                                type="text"
                                placeholder=" 8"
                                style={{
                                    backgroundColor: '#EDEDED',
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '16px',
                                    height: '12px',
                                    width: '20px',
                                }}
                            ></input>
                            <input
                                type="text"
                                placeholder="20"
                                style={{
                                    backgroundColor: '#EDEDED',
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '16px',
                                    height: '12px',
                                    width: '20px',
                                }}
                            ></input>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                color: 'black',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginLeft: '0px',
                                marginTop: '0px',
                                paddingTop: '2px',
                                width: '0px',
                                height: '150px',
                            }}
                        >
                            {/*#EDEDED*/}

                            <p
                                style={{
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '16px',
                                    marginLeft: '130px',
                                    width: '60px',
                                    marginTop: '16px',
                                    color: 'white',
                                }}
                            >
                                워라벨
                            </p>
                            <p
                                style={{
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '16px',
                                    width: '60px',
                                }}
                            >
                                시간
                            </p>
                            <p
                                style={{
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '16px',
                                    width: '60px',
                                }}
                            >
                                분
                            </p>
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
                            placeholder="• 중요한 일과는 오전 9시부터 11시 사이에 배치 집중력이 높은 시간대를 활용합니다.
• 규칙적으로 식사를 합니다.
• 점심 후 1시부터 2시까지 가벼운 업무를 배치 에너지가 낮은 시간대를 효율적 사용합니다.

• 하루에 한 가지 주요 목표를 설정하고, 이를 중심으로 일정을 구성합니다.

• 유연한 일정: 예상치 못한 일이  때를 대비해 하루 일정의 20%는 예비 시간으로 남겨둡니다.
•저녁 계획: 매일 저녁 다음 날의 일정을 미리 계획하여 하루를 체계적으로 준비합니다."
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
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginTop: '20px',
                    }}
                >
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
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#A4BCFD')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'rgba(68, 112, 243, 1)')}
                        onClick={() => {
                            window.location = '/';
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
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#A4BCFD')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'rgba(68, 112, 243, 1)')}
                        onClick={() => {
                            window.location = '/';
                        }}
                    >
                        저장 및 로그인
                    </button>
                </div>
            </div>
        </div>
    );
}
