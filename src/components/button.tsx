import React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import '../App.css';

type ButtonType = 'primary' | 'secondary' | 'destructive' | 'logout';
type Size = 'small' | 'medium' | 'large';

type ButtonProps = {
    onClick?: () => void;
    type?: ButtonType;
    size?: Size;
    title: string;
};

const ButtonContainer = styled.div<{
    type: 'primary' | 'secondary' | 'destructive' | 'logout';
    size: 'small' | 'medium' | 'large';
}>`
    border: ${(props) => (props.type === 'logout' ? '1px #000 solid' : '1px #ddd solid')};
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
    background-color: ${(props) =>
        props.type === 'primary'
            ? '#4470F3'
            : props.type === 'secondary'
            ? '#C9D9FD'
            : props.type === 'destructive'
            ? '#FFF6F6'
            : '#FFF'};
    color: ${(props) =>
        props.type === 'primary'
            ? '#fff'
            : props.type === 'secondary'
            ? '#4470F3'
            : props.type === 'destructive'
            ? '#FF3E3E'
            : '#000'};
    cursor: pointer;

    ${(props) =>
        props.size === 'large' &&
        css`
            height: 45px;
            font-size: 20px;
            width: 350px;
            text-align: center;
        `}
    ${(props) =>
        props.size === 'medium' &&
        css`
            height: 40px;
            font-size: 18px;
            width: 200px;
            text-align: center;
        `}
    ${(props) =>
        props.size === 'sub' &&
        css`
            height: 40px;
            font-size: 18px;
            width: 130px;
            text-align: center;
        `}
    ${(props) =>
        props.size === 'small' &&
        css`
            height: 18px;
            font-size: 0.75rem;
            width: 60px;
            text-align: center;
        `}
    &:hover {
        opacity: 0.8;
        & p {
            font-family: Pretendard-ExtraBold;
        }
    }
`;

const ButtonTitle = styled.p`
    font-family: Pretendard-SemiBold;
`;

export default function Button(props: ButtonProps) {
    const { type, size, title, onClick = () => {} } = props;
    const [hover, setHover] = useState(false);
    return (
        <ButtonContainer
            type={type}
            size={size}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <ButtonTitle>{title}</ButtonTitle>
        </ButtonContainer>
    );
}
