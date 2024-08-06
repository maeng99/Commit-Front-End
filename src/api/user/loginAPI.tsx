import React from 'react';

var API_SERVER_DOMAIN = 'https://api.lion-commit.shop';

// login.tsx
export default function LoginAPI(email, password) {
    // event.preventDefault(); // 기본 제출 동작을 막습니다.

    // 사용자가 입력한 이메일과 비밀번호를 가져옵니다.
    var email = email;
    var password = password;
    console.log(email, password);

    // 서버에 로그인 요청을 보냅니다.
    fetch(API_SERVER_DOMAIN + '/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Login failed');
            }
            return response.json();
        })
        .then((data) => {
            var accessToken = data.accessToken;
            var refreshToken = data.refreshToken;

            setCookie('accessToken', accessToken, 1);
            setCookie('refreshToken', refreshToken, 7);

            // 로그인이 성공하면 다음 동작을 수행합니다.
            window.location = '/main';
        })
        .catch((error) => {
            console.log(error);
            alert('아이디나 비밀번호가 일치하지 않습니다.', error);
            // 로그인 실패 시 사용자에게 메시지를 표시하는 등의 동작을 수행할 수 있습니다.
        });
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
