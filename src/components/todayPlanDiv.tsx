import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

type TodayPlanType = 'after' | 'before';
type TodayPlanProps = {
    type?: TimeTableType;
    date: Date;
};

export default function TodayPlanDiv(props: TodayPlanProps) {
    const { type, date } = props;
    // 색상 매핑 객체
    const colors = {
        A: { box: '#1F48BB', text: '#1F48BB' },
        B: { box: '#4470F3', text: '#4470F3' },
        C: { box: '#A4BCFD', text: '#A4BCFD' },
        D: { box: '#B0B0B0', text: '#B0B0B0' },
    };

    // 이미지 경로 결정 함수
    const getImageSrc = (btn, status) => {
        const statusMap = {
            NONE: 'none',
            COMPLETE: 'check',
            PUTOFF: 'putoff',
            DELETE: 'delete',
        };
        if (statusMap[status] === btn) {
            return `../img/btn/${btn}_enabled.png`;
        }
        return `../img/btn/${btn}_disabled.png`;
    };

    // 버튼 클릭 핸들러
    const clickCheck = () => {};
    const clickPutoff = () => {};
    const clickDelete = () => {};

    const todayPlanList = [
        {
            planId: 1,
            content: '학교가기',
            priority: 'A',
            type: 'WORK',
            date: '2024-08-04',
            startTime: {
                hour: 8,
                minute: 0,
                second: 0,
                nano: 0,
            },
            endTime: {
                hour: 13,
                minute: 0,
                second: 0,
                nano: 0,
            },
            createdAt: '2024-08-04T19:23:33.296Z',
            updatedAt: '2024-08-04T19:23:33.296Z',
            status: 'COMPLETE',
            childPlan: 0,
            userId: 0,
            complete: true,
            delayed: true,
        },
        {
            planId: 2,
            content: 'PC방',
            priority: 'C',
            type: 'LIFE',
            date: '2024-08-04',
            startTime: {
                hour: 17,
                minute: 0,
                second: 0,
                nano: 0,
            },
            endTime: {
                hour: 19,
                minute: 0,
                second: 0,
                nano: 0,
            },
            createdAt: '2024-08-04T19:23:33.296Z',
            updatedAt: '2024-08-04T19:23:33.296Z',
            status: 'NONE',
            childPlan: 0,
            userId: 0,
            complete: true,
            delayed: true,
        },
        {
            planId: 2,
            content: '공모전 준비',
            priority: 'A',
            type: 'WORK',
            date: '2024-08-04',
            startTime: {
                hour: 17,
                minute: 0,
                second: 0,
                nano: 0,
            },
            endTime: {
                hour: 19,
                minute: 0,
                second: 0,
                nano: 0,
            },
            createdAt: '2024-08-04T19:23:33.296Z',
            updatedAt: '2024-08-04T19:23:33.296Z',
            status: 'PUTOFF',
            childPlan: 0,
            userId: 0,
            complete: true,
            delayed: true,
        },
        {
            planId: 2,
            content: '회쏘',
            priority: 'B',
            type: 'WORK',
            date: '2024-08-04',
            startTime: {
                hour: 17,
                minute: 0,
                second: 0,
                nano: 0,
            },
            endTime: {
                hour: 19,
                minute: 0,
                second: 0,
                nano: 0,
            },
            createdAt: '2024-08-04T19:23:33.296Z',
            updatedAt: '2024-08-04T19:23:33.296Z',
            status: 'PUTOFF',
            childPlan: 0,
            userId: 0,
            complete: true,
            delayed: true,
        },
    ];

    return (
        <div
            style={{
                width: '470px',
                margin: '0 auto',
            }}
        >
            {todayPlanList
                .filter((plan) => plan.status === 'NONE')
                .map((plan) => (
                    <div
                        key={plan.planId}
                        style={{
                            display: 'flex',
                            width: '320px',
                            height: '60px',
                            alignItems: 'center',
                            gap: '30px',
                            borderRadius: '0px 15px 15px 0px',
                            backgroundColor: '#E9EFFD',
                            position: 'relative',
                            paddingLeft: '20px',
                            marginBottom: '10px',
                            paddingRight: '10px',
                        }}
                    >
                        <div
                            style={{
                                width: '10px',
                                height: '60px',
                                flexShrink: 0,
                                borderRadius: '3px 0px 0px 3px',
                                backgroundColor: colors[plan.priority].box,
                                position: 'absolute',
                                left: '0px',
                            }}
                        ></div>
                        <div
                            style={{
                                width: '236px',
                                flexShrink: 0,
                                color: '#0D2259',
                                fontSize: '19px',
                                fontFamily: 'Pretendard-Regular',
                                lineHeight: 'normal',
                                textAlign: 'left',
                                paddingLeft: '13px',
                            }}
                        >
                            {plan.content}
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                flexShrink: 0,
                                borderRadius: '20px',
                                backgroundColor: '#C9D9FD',
                                color: colors[plan.priority].text,
                                textAlign: 'center',
                                fontSize: '25px',
                                fontFamily: 'Pretendard-Bold',
                            }}
                        >
                            {plan.priority}
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '13px',
                            }}
                        >
                            <img
                                src="../img/btn/check_disabled.png"
                                style={{
                                    width: '25px',
                                    cursor: 'pointer',
                                }}
                                onMouseOver={(event) => {
                                    event.target.src = `../img/btn/check_enabled.png`;
                                }}
                                onMouseOut={(event) => {
                                    event.target.src = `../img/btn/check_disabled.png`;
                                }}
                                onClick={() => {
                                    clickCheck();
                                }}
                            />
                            <img
                                src="../img/btn/putoff_disabled.png"
                                style={{
                                    width: '25px',
                                    cursor: 'pointer',
                                }}
                                onMouseOver={(event) => {
                                    event.target.src = `../img/btn/putoff_enabled.png`;
                                }}
                                onMouseOut={(event) => {
                                    event.target.src = `../img/btn/putoff_disabled.png`;
                                }}
                                onClick={() => {
                                    clickPutoff();
                                }}
                            />
                            <img
                                src="../img/btn/delete_disabled.png"
                                style={{
                                    width: '25px',
                                    cursor: 'pointer',
                                }}
                                onMouseOver={(event) => {
                                    event.target.src = `../img/btn/delete_enabled.png`;
                                }}
                                onMouseOut={(event) => {
                                    event.target.src = `../img/btn/delete_disabled.png`;
                                }}
                                onClick={() => {
                                    clickDelete();
                                }}
                            />
                        </div>
                    </div>
                ))}
            <hr style={{ margin: '20px 0', border: 'none', height: '1px', backgroundColor: '#ccc' }} />
            {todayPlanList
                .filter((plan) => plan.status !== 'NONE')
                .map((plan) => (
                    <div
                        key={plan.planId}
                        style={{
                            display: 'flex',
                            width: '320px',
                            height: '60px',
                            alignItems: 'center',
                            gap: '30px',
                            borderRadius: '0px 15px 15px 0px',
                            backgroundColor: '#E9EFFD',
                            position: 'relative',
                            paddingLeft: '20px',
                            marginBottom: '10px',
                            paddingRight: '10px',
                        }}
                    >
                        <div
                            style={{
                                width: '10px',
                                height: '60px',
                                flexShrink: 0,
                                borderRadius: '3px 0px 0px 3px',
                                backgroundColor: colors[plan.priority].box,
                                position: 'absolute',
                                left: '0px',
                            }}
                        ></div>
                        <div
                            style={{
                                width: '236px',
                                flexShrink: 0,
                                color: '#0D2259',
                                fontSize: '19px',
                                fontFamily: 'Pretendard-Regular',
                                lineHeight: 'normal',
                                textAlign: 'left',
                                paddingLeft: '13px',
                            }}
                        >
                            {plan.content}
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                flexShrink: 0,
                                borderRadius: '20px',
                                backgroundColor: '#C9D9FD',
                                color: colors[plan.priority].text,
                                textAlign: 'center',
                                fontSize: '25px',
                                fontFamily: 'Pretendard-Bold',
                            }}
                        >
                            {plan.priority}
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '13px',
                            }}
                        >
                            <img
                                src={getImageSrc('check', plan.status)}
                                style={{
                                    width: '25px',
                                    cursor: 'pointer',
                                }}
                                onMouseOver={(event) => {
                                    event.target.src = `../img/btn/check_enabled.png`;
                                }}
                                onMouseOut={(event) => {
                                    event.target.src = getImageSrc('check', plan.status);
                                }}
                                onClick={() => {
                                    clickCheck();
                                }}
                            />
                            <img
                                src={getImageSrc('putoff', plan.status)}
                                style={{
                                    width: '25px',
                                    cursor: 'pointer',
                                }}
                                onMouseOver={(event) => {
                                    event.target.src = `../img/btn/putoff_enabled.png`;
                                }}
                                onMouseOut={(event) => {
                                    event.target.src = getImageSrc('putoff', plan.status);
                                }}
                                onClick={() => {
                                    clickPutoff();
                                }}
                            />
                            <img
                                src={getImageSrc('delete', plan.status)}
                                style={{
                                    width: '25px',
                                    cursor: 'pointer',
                                }}
                                onMouseOver={(event) => {
                                    event.target.src = `../img/btn/delete_enabled.png`;
                                }}
                                onMouseOut={(event) => {
                                    event.target.src = getImageSrc('delete', plan.status);
                                }}
                                onClick={() => {
                                    clickDelete();
                                }}
                            />
                        </div>
                    </div>
                ))}
        </div>
    );
}
