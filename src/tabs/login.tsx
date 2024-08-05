import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../components/button.tsx';
import LoginAPI from '../api/user/loginAPI.tsx';
import '../App.css';

export default function Login() {
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onValid = (e) => {
        console.log(e, 'onValid');
        LoginAPI(e.Email, e.Password);
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
                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                }}
            >
                <div style={{ marginTop: '80px', marginBottom: '60px' }}>
                    <img src="..\img\main_logo.png" style={{ width: '250px' }} />
                    <br />
                    {/*<img src="..\img\main_text.png" style={{ width: '250px' }} />*/}
                </div>

                <div style={{ width: '400px', margin: '0 auto' }}>
                    <form style={{ textAlign: 'left', width: '400px', margin: '0 auto' }}>
                        <div style={{ height: '200px', margin: '0 auto', marginBottom: '10px', overflow: 'auto' }}>
                            <div style={{ width: '360px', margin: '2px auto', marginBottom: '10px' }}>
                                <label
                                    htmlFor="email"
                                    style={{ fontFamily: 'Pretendard-Regular', fontSize: '15px', color: '#777' }}
                                >
                                    이메일
                                </label>
                                <input
                                    id="email"
                                    type="text"
                                    {...register('Email', {
                                        required: '이메일을 입력해주세요.',
                                    })}
                                    style={{ width: '330px', height: '20px', marginTop: '3px' }}
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
                                    id="password"
                                    type="password"
                                    {...register('Password', {
                                        required: '비밀번호를 입력해주세요.',
                                    })}
                                    style={{ width: '330px', height: '20px', marginTop: '3px' }}
                                />
                                {errors.Password && (
                                    <span
                                        style={{ display: 'block', color: 'red', fontSize: '12px', textAlign: 'left' }}
                                    >
                                        * {errors.Password.message}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div style={{ width: '350px', margin: '10px auto', textAlign: 'center' }}>
                            <Button
                                type="primary"
                                size="large"
                                title="로그인"
                                onClick={handleSubmit(onValid, onInvalid)}
                            />
                        </div>
                        <div style={{ width: '350px', margin: '10px auto', textAlign: 'center' }}>
                            <Button
                                type="secondary"
                                size="large"
                                title="회원가입"
                                onClick={() => {
                                    window.location = '/signup';
                                }}
                            />
                        </div>
                        <div style={{ width: '350px', margin: '10px auto', textAlign: 'center' }}>
                            <img src="../img/or.png" style={{ width: '350px', marginTop: '10px' }} />
                        </div>
                        <div style={{ width: '330px', margin: '10px auto', textAlign: 'center' }}>
                            <img
                                src="../img/btn/kakao_login.png"
                                style={{ width: '330px', height: '50px', borderRadius: '20px', cursor: 'pointer' }}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
