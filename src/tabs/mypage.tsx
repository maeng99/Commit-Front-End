import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../components/button.tsx';
import Date from '../components/date.tsx';
import Nav from '../components/nav.tsx';
import '../App.css';

export default function Mypage() {
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isFormVisible, setIsFormVisible] = useState(false);

    const onValid = (e) => {
        console.log(e, 'onValid');
        alert('변경이 완료되었습니다.');
        window.location = '/mypage';
    };

    const onInvalid = (e) => {
        console.log(e, 'onInvalid');
        alert('입력한 정보를 다시 확인해주세요.');
    };

    return (
        <div className="background">
            <Nav type="mypage" />
            <div className="main_contents_div">
                <Date />
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ width: '470px', height: '605px', backgroundColor: '#fff', borderRadius: '20px' }}>
                        <div
                            style={{
                                width: '420px',
                                fontFamily: 'Pretendard-ExtraBold',
                                fontSize: '22px',
                                color: '#4470F3',
                                margin: '0 auto',
                                padding: '20px 0',
                                textAlign: 'left',
                            }}
                        >
                            내 계정
                        </div>
                        <div style={{ width: '420px', height: '520px', margin: '0 auto', textAlign: 'left' }}>
                            <div
                                style={{
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '12px',
                                    color: '#555',
                                    marginBottom: '15px',
                                }}
                            >
                                사용자 이름
                                <br />
                                <span style={{ fontFamily: 'Pretendard-SemiBold', fontSize: '22px' }}>맹의현</span>
                            </div>
                            <div
                                style={{
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '12px',
                                    color: '#555',
                                    marginBottom: '50px',
                                }}
                            >
                                이메일
                                <br />
                                <span style={{ fontFamily: 'Pretendard-SemiBold', fontSize: '22px' }}>
                                    202011111@sangmyung.kr
                                </span>
                            </div>
                            {isFormVisible ? (
                                <form style={{ width: '420px', height: '400px', margin: '0 auto', textAlign: 'left' }}>
                                    <div>
                                        <input
                                            type="password"
                                            {...register('ID', {
                                                required: '현재 비밀번호를 입력해주세요.',
                                            })}
                                            placeholder="현재 비밀번호"
                                            style={{ width: '340px', height: '20px' }}
                                        />
                                        {errors.ID && (
                                            <span
                                                style={{
                                                    display: 'block',
                                                    color: 'red',
                                                    fontSize: '12px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                * {errors.ID.message}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            {...register('Password', {
                                                required: '새 비밀번호를 입력해주세요.',
                                            })}
                                            placeholder="새 비밀번호"
                                            style={{ width: '340px', height: '20px', marginTop: '10px' }}
                                        />
                                        {errors.Password && (
                                            <span
                                                style={{
                                                    display: 'block',
                                                    color: 'red',
                                                    fontSize: '12px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                * {errors.Password.message}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            {...register('RePassword', {
                                                required: '새 비밀번호를 확인해주세요.',
                                            })}
                                            placeholder="새 비밀번호 확인"
                                            style={{ width: '340px', height: '20px', marginTop: '10px' }}
                                        />
                                        {errors.RePassword && (
                                            <span
                                                style={{
                                                    display: 'block',
                                                    color: 'red',
                                                    fontSize: '12px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                * {errors.RePassword.message}
                                            </span>
                                        )}
                                    </div>

                                    <div
                                        style={{
                                            width: '350px',
                                            marginTop: '20px',
                                            paddingBottom: '20px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Button
                                            type="secondary"
                                            size="medium"
                                            title="취소"
                                            onClick={() => setIsFormVisible(false)}
                                        />
                                        <Button
                                            type="primary"
                                            size="medium"
                                            title="변경사항 저장"
                                            onClick={handleSubmit(onValid, onInvalid)}
                                        />
                                    </div>
                                </form>
                            ) : (
                                <Button
                                    type="primary"
                                    size="medium"
                                    title="개인정보 변경"
                                    onClick={() => setIsFormVisible(true)}
                                />
                            )}
                        </div>
                    </div>

                    <div style={{ width: '750px', height: '605px', backgroundColor: '#fff', borderRadius: '20px' }}>
                        <div
                            style={{
                                width: '700px',
                                fontFamily: 'Pretendard-ExtraBold',
                                fontSize: '22px',
                                color: '#4470F3',
                                margin: '0 auto',
                                padding: '20px 0',
                                textAlign: 'left',
                            }}
                        >
                            나만의 일정표 커스텀 규칙
                        </div>
                        <div
                            style={{
                                width: '700px',
                                height: '520px',
                                margin: '0 auto',
                                backgroundColor: '#eee',
                                borderRadius: '20px',
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
