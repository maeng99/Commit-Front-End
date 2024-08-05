import React from 'react';

var API_SERVER_DOMAIN = 'https://api.lion-commit.shop';

// signup.tsx
export default async function SignupAPI(email, password, name) {
    // event.preventDefault(); // 기본 제출 동작을 막습니다.

    // 사용자가 입력한 이메일과 비밀번호를 가져옵니다.
    var email: string = email;
    var password: string = password;
    var name: string = name;

    try {
        /* 아이디와 닉네임의 존재 여부를 확인합니다.
        let checkResponse = await fetch(API_SERVER_DOMAIN + '/api/user/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
            }),
        });

        let checkData = await checkResponse.json();

        if (checkData.exists) {
            // 아이디나 닉네임이 존재할 경우
            alert('아이디나 닉네임이 이미 사용중입니다.');
            return;
        }
        */

        // 서버에 회원가입 요청을 보냅니다.
        let signupResponse = await fetch(API_SERVER_DOMAIN + '/api/user/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
        });

        if (!signupResponse.ok) {
            throw new Error('Signup failed');
        }

        let signupData = await signupResponse.json();
        var accessToken = signupData.accessToken;
        var refreshToken = signupData.refreshToken;

        // 토큰을 쿠키에 저장합니다.
        setCookie('accessToken', accessToken, 1);
        setCookie('refreshToken', refreshToken, 1);

        // 회원가입이 성공하면 다음 동작을 수행합니다.
        window.location = '/';
    } catch (error) {
        alert('회원가입 중 오류가 발생했습니다.', error);
    }
}

function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}
