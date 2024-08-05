import React, { useState, useEffect } from 'react';

var API_SERVER_DOMAIN = 'https://api.lion-commit.shop';

export default function MonthPlanAPI({ yearMonth }) {
    const [monthPlanData, setMonthPlanData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            var accessToken = getCookie('accessToken');
            var refreshToken = getCookie('refreshToken');

            if (accessToken) {
                try {
                    const data = await getMonthPlanInfo(accessToken, yearMonth);
                    setMonthPlanData(data.result);
                } catch (error) {
                    console.error('Failed to fetch timetable:', error);
                    if (refreshToken) {
                        try {
                            const newAccessToken = await getAccessTokenWithRefreshToken(refreshToken);
                            const data = await getMonthPlanInfo(accessToken, yearMonth);
                            setMonthPlanData(data.result);
                        } catch (error) {
                            console.error('Failed to refresh access token:', error);
                            window.location = '/'; // 로그인 페이지로 리디렉션
                        }
                    } else {
                        window.location = '/'; // 로그인 페이지로 리디렉션
                    }
                }
            } else {
                window.location = '/'; // 로그인 페이지로 리디렉션
            }
            setLoading(false);
        };

        fetchData();
    }, [yearMonth]);

    return { monthPlanData, loading };
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

function getAccessTokenWithRefreshToken(refreshToken) {
    return fetch(API_SERVER_DOMAIN + 'auth/reissue', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
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

function getMonthPlanInfo(accessToken, selectedMonth) {
    return fetch(API_SERVER_DOMAIN + `/api/plan/month?yearMonth=${selectedMonth}`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + accessToken,
        },
    }).then((res) => {
        if (!res.ok) {
            throw new Error('Failed to fetch timetable');
        }
        return res.json();
    });
}
