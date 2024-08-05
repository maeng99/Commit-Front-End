import React from 'react';

var API_SERVER_DOMAIN = 'https://api.lion-commit.shop';

// timeTable.tsx
export default function DatePlanAPI(date) {
    var accessToken = getCookie('accessToken');
    var refreshToken = getCookie('refreshToken');

    if (accessToken) {
        getDatePlanInfo(accessToken, date)
            .then((data) => {
                const datePlanData = data.result;
            })
            .catch((error) => {
                console.error('Failed to fetch timetable:', error);
                if (refreshToken) {
                    getAccessTokenWithRefreshToken(refreshToken)
                        .then((newAccessToken) => {
                            getDatePlanInfo(accessToken, date)
                                .then((data) => {
                                    const datePlanData = data.result;
                                })
                                .catch((error) => {
                                    console.error('Failed to fetch timetable:', error);
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

    return datePlanData;
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

function getDatePlanInfo(accessToken, date) {
    return fetch(API_SERVER_DOMAIN + '/api/plan/date', {
        method: 'GET',
        header: {
            Authorization: 'Bearer ' + accessToken,
        },
        body: JSON.stringify({
            date: date,
        }),
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch timetable');
        }
        return response.json();
    });
}
