import React from 'react';

var API_SERVER_DOMAIN = 'https://api.lion-commit.shop';

// mypage.tsx, feedbackPopup.tsx
export default function UserAPI() {
    var accessToken = getCookie('accessToken');
    var refreshToken = getCookie('refreshToken');

    if (accessToken) {
        getUserInfo(accessToken)
            .then((data) => {
                const userData = data.result;
            })
            .catch((error) => {
                console.error('Failed to fetch user:', error);
                if (refreshToken) {
                    getAccessTokenWithRefreshToken(refreshToken)
                        .then((newAccessToken) => {
                            getUserInfo(newAccessToken)
                                .then((data) => {
                                    const userData = data.result;
                                })
                                .catch((error) => {
                                    console.error('Failed to fetch user:', error);
                                    window.location = '/';
                                });
                        })
                        .catch((error) => {
                            console.error('Failed to refresh access token:', error);
                            window.location = '/'; // Redirect to login page
                        });
                } else {
                    window.location = '/'; // Redirect to login page
                }
            });
    } else {
        window.location = '/'; // Redirect to login page
    }

    return userData;
}

function getCookie(name) {
    var nameEQ = name + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function getAccessTokenWithRefreshToken(accessToken, refreshToken) {
    return fetch(API_SERVER_DOMAIN + 'auth/reissue', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            accessToken: accessToken,
            refreshToken: refreshToken,
        }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to refresh access token');
            }
            return response.json();
        })
        .then((data) => {
            return data.accessToken;
        });
}

function getUserInfo(accessToken) {
    return fetch(API_SERVER_DOMAIN + '/api/user', {
        method: 'GET',
        header: {
            Authorization: 'Bearer ' + accessToken,
        },
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json();
    });
}
