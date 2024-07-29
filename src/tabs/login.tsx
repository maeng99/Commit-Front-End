import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../components/button.tsx';
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
        alert('반갑습니다.');
        window.location = '/main';
    };

    const onInvalid = (e) => {
        console.log(e, 'onInvalid');
        alert('입력한 정보를 다시 확인해주세요.');
    };

    return (
        <div
            style={{ width: '600px', height: '630px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '25px' }}
        >
            <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                <img src="..\img\small_logo.png" style={{ width: '280px' }} />
                <br />
                <img src="..\img\logo_text.png" style={{ width: '320px' }} />
            </div>

            <form style={{ textAlign: 'center' }}>
                <div style={{ width: '400px', margin: '0 auto' }}>
                    <input
                        type="text"
                        {...register('ID', {
                            required: '아이디를 입력해주세요.',
                        })}
                        placeholder="아이디"
                        style={{ width: '400px', height: '20px' }}
                    />
                    {errors.ID && (
                        <span style={{ display: 'block', color: 'red', fontSize: '12px', textAlign: 'left' }}>
                            * {errors.ID.message}
                        </span>
                    )}
                </div>
                <div style={{ width: '400px', margin: '0 auto' }}>
                    <input
                        type="password"
                        {...register('Password', {
                            required: '비밀번호를 입력해주세요.',
                        })}
                        placeholder="비밀번호"
                        style={{ width: '400px', height: '20px', marginTop: '10px' }}
                    />
                    {errors.Password && (
                        <span style={{ display: 'block', color: 'red', fontSize: '12px', textAlign: 'left' }}>
                            * {errors.Password.message}
                        </span>
                    )}
                </div>
                <div style={{ width: '350px', margin: '20px auto', textAlign: 'center' }}>
                    <Button type="primary" size="large" title="로그인" onClick={handleSubmit(onValid, onInvalid)} />
                </div>
            </form>

            <Link to="/signup">
                <span style={{ color: 'black', fontSize: '12px', textDecoration: '1px solid #000' }}>회원가입</span>
            </Link>
        </div>
    );
}
