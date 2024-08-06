import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../components/button.tsx';
import SignupAPI from '../api/user/signupAPI.tsx';
import '../App.css';

export default function Signup() {
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

    // 비밀번호 유효성 검사 패턴
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,12}$/;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
                <div style={{ position: 'absolute', top: '20px', left: '25px' }}>
                    <img
                        src="..\img\btn\back.png"
                        style={{ width: '40px', cursor: 'pointer' }}
                        onClick={() => {
                            window.location = '/';
                        }}
                    />
                </div>
                <div style={{ marginTop: '80px', marginBottom: '10px' }}>
                    <img src="..\img\main_logo.png" style={{ width: '220px', marginBottom: '40px' }} />
                </div>

                <div style={{ width: '400px', margin: '0 auto' }}>
                    <form style={{ textAlign: 'left', width: '400px', margin: '0 auto' }}>
                        <div style={{ height: '370px', margin: '0 auto', marginBottom: '10px', overflow: 'auto' }}>
                            <div style={{ width: '360px', margin: '2px auto' }}>
                                <label
                                    htmlFor="email"
                                    style={{ fontFamily: 'Pretendard-Regular', fontSize: '15px', color: '#777' }}
                                >
                                    이메일
                                </label>
                                <input
                                    type="text"
                                    {...register('Email', {
                                        required: '이메일을 입력해주세요.',
                                        pattern: {
                                            value: emailPattern,
                                            message: '유효한 이메일 주소를 입력해주세요.',
                                        },
                                    })}
                                    style={{ width: '336px', height: '20px', marginTop: '3px' }}
                                />
                                {errors.Email && (
                                    <span
                                        style={{ display: 'block', color: 'red', fontSize: '12px', textAlign: 'left' }}
                                    >
                                        * {errors.Email.message}
                                    </span>
                                )}
                            </div>
                            <div style={{ width: '360px', margin: '2px auto' }}>
                                <label
                                    htmlFor="password"
                                    style={{ fontFamily: 'Pretendard-Regular', fontSize: '15px', color: '#777' }}
                                >
                                    비밀번호
                                </label>
                                <input
                                    type="password"
                                    {...register('Password', {
                                        required: '비밀번호를 입력해주세요.',
                                        pattern: {
                                            value: passwordPattern,
                                            message: '영어, 숫자, 특수문자 포함 8-12자리를 입력해주세요.',
                                        },
                                    })}
                                    style={{ width: '336px', height: '20px', marginTop: '3px' }}
                                />
                                {errors.Password && (
                                    <span
                                        style={{ display: 'block', color: 'red', fontSize: '12px', textAlign: 'left' }}
                                    >
                                        * {errors.Password.message}
                                    </span>
                                )}
                            </div>
                            <div style={{ width: '360px', margin: '2px auto' }}>
                                <label
                                    htmlFor="id"
                                    style={{ fontFamily: 'Pretendard-Regular', fontSize: '15px', color: '#777' }}
                                >
                                    비밀번호 확인
                                </label>
                                <input
                                    type="password"
                                    {...register('RePassword', {
                                        required: '비밀번호를 확인해주세요.',
                                        validate: (value) =>
                                            value === getValues('Password') || '비밀번호가 일치하지 않습니다.',
                                    })}
                                    style={{ width: '336px', height: '20px', marginTop: '3px' }}
                                />
                                {errors.RePassword && (
                                    <span
                                        style={{ display: 'block', color: 'red', fontSize: '12px', textAlign: 'left' }}
                                    >
                                        * {errors.RePassword.message}
                                    </span>
                                )}
                            </div>
                            <div style={{ width: '360px', margin: '2px auto' }}>
                                <label
                                    htmlFor="id"
                                    style={{ fontFamily: 'Pretendard-Regular', fontSize: '15px', color: '#777' }}
                                >
                                    이름
                                </label>
                                <input
                                    type="text"
                                    {...register('Name', {
                                        required: '이름을 입력해주세요.',
                                    })}
                                    style={{ width: '336px', height: '20px', marginTop: '3px' }}
                                />
                                {errors.Name && (
                                    <span
                                        style={{ display: 'block', color: 'red', fontSize: '12px', textAlign: 'left' }}
                                    >
                                        * {errors.Name.message}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div style={{ width: '350px', margin: '10px auto', textAlign: 'center' }}>
                            <Button
                                type="secondary"
                                size="large"
                                title="계정 생성"
                                onClick={handleSubmit(onValid, onInvalid)}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
