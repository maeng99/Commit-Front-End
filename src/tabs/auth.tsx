// AuthPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const access = queryParams.get('access');
        const refresh = queryParams.get('refresh');
        
        setCookie('accessToken', access);
        setCookie('refreshToken', refresh);

        window.location = '/main';

    }, );

    function setCookie(name, value) {
        var expires = '';
        document.cookie = name + '=' + value + expires + '; path=/';
    }

    return <div>Loading...</div>;

};

export default AuthPage;
