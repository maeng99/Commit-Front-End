import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Button from '../components/button.tsx';
import TimeTableDiv from '../components/timeTableDiv.tsx';
import UserAPI from '../api/user/userAPI.tsx';
import DateFeedbackAPI from '../api/chatGPT/dateFeedbackAPI.tsx';
import '../App.css';

export default function FeedbackPopup({ onClose }) {
    const { userData, loading } = UserAPI();

    var date = moment(moment().subtract(1, 'day').toDate()).format('YYYY-MM-DD');
    const { dateFeedbackData, dateFeedbackLoading } = DateFeedbackAPI({ date });
    /*
    const dateFeedbackData = {
        analysisResult: {
            wlBalance:
                '사용자 일정에서 워크 & 라이프 밸런스 비율은 약 3:7로 파악됩니다. 목표인 4:6에 비해 조금 더 여유로운 생활을 보냈습니다.',
            sleep: '사용자의 어제 수면 시간은 약 7시간 33분으로, 목표 수면 시간인 7시간을 충족하고 있습니다. 충분한 수면을 취한 것으로 보여집니다.',
            workOut:
                '어제 운동 시간은 27분으로, 목표 운동 시간인 1시간에 비해 부족합니다. 추가적으로 운동 시간을 확보하는 것이 좋습니다.',
            meal: '아침 식사, 점심 식사, 저녁 식사를 모두 규칙적으로 했습니다. 다만, 아침 식사 시간이 매우 짧았습니다. 좀 더 여유롭게 아침 식사를 할 필요가 있습니다.',
            review: '전체적으로 매우 균형 잡힌 일정을 보냈습니다. 다만, 운동 시간을 늘리고 아침 식사를 좀 더 여유롭게 즐기는 것이 좋을 것 같습니다.',
        },
    };*/
    if (loading) {
        return <div>Loading...</div>;
    }
    if (!userData) {
        return <div>No Data exists...</div>;
    }

    return (
        <div className="popup-background">
            <div style={{ width: '100%', marginLeft: '170px', marginRight: '60px' }}>
                <div className="popup-content">
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>

                    <div style={{ paddingTop: '40px', marginBottom: '20px' }}>
                        <div style={{ fontFamily: 'Pretendard-SemiBold', fontSize: '18px' }}>
                            오늘의 기록을 기반으로 한 내일의 일정 추천
                        </div>
                        <div
                            style={{
                                fontFamily: 'Pretendard-ExtraBold',
                                fontSize: '32px',
                                letterSpacing: '10px',
                                color: '#0D2259',
                            }}
                        >
                            {userData.name}님 <span style={{ color: '#4470F3' }}>맞춤 AI 피드백</span>
                        </div>
                    </div>

                    <div
                        style={{
                            width: '1200px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            margin: '0 auto',
                        }}
                    >
                        <div
                            style={{
                                width: '350px',
                                height: '465px',
                                backgroundColor: '#E9EFFD',
                                borderRadius: '20px',
                                border: '1px #ddd solid',
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: 'Pretendard-SemiBold',
                                    fontSize: '20px',
                                    margin: '10px auto',
                                }}
                            >
                                오늘의 타임 테이블
                            </div>
                            <div
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '465px',
                                    backgroundColor: '#fff',
                                    borderRadius: '20px',
                                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                                }}
                            >
                                <div
                                    style={{
                                        width: '310px',
                                        fontFamily: 'Pretendard-SemiBold',
                                        fontSize: '18px',
                                        color: '#0D2259',
                                        margin: '0 auto',
                                        padding: '25px 0',
                                        textAlign: 'left',
                                    }}
                                >
                                    타임 테이블
                                </div>
                                <div
                                    style={{
                                        width: '350px',
                                        height: '375px',
                                        overflow: 'auto',
                                        margin: '0 auto',
                                    }}
                                >
                                    <TimeTableDiv type="before" date={moment().format('YYYY-MM-DD')} />
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                width: '800px',
                                height: '510px',
                                borderRadius: '20px',
                                position: 'relative',
                                textAlign: 'center',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div
                                style={{
                                    width: '350px',
                                    height: '465px',
                                    backgroundColor: '#eee',
                                    borderRadius: '20px',
                                    zIndex: '2',
                                    border: '1px #ddd solid',
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily: 'Pretendard-SemiBold',
                                        fontSize: '20px',
                                        margin: '10px auto',
                                    }}
                                >
                                    사용자의 하루를 분석한 결과
                                </div>
                                <div
                                    style={{
                                        width: '100%',
                                        height: '465px',
                                        backgroundColor: '#fff',
                                        borderRadius: '20px',
                                        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '310px',
                                            height: '430px',
                                            margin: '0 auto',
                                            textAlign: 'left',
                                            fontFamily: 'Pretendard-Regular',
                                            fontSize: '14px',
                                            overflow: 'auto',
                                        }}
                                    >
                                        <div style={{ padding: '10px 10px 5px' }}>
                                            <span style={{ fontFamily: 'Pretendard-SemiBold' }}>• 워라밸</span>
                                            <br />: {dateFeedbackData.analysisResult.wlBalance}
                                        </div>
                                        <div style={{ padding: '10px 10px 5px' }}>
                                            <span style={{ fontFamily: 'Pretendard-SemiBold' }}>• 수면</span>
                                            <br />: {dateFeedbackData.analysisResult.sleep}
                                        </div>
                                        <div style={{ padding: '10px 10px 5px' }}>
                                            <span style={{ fontFamily: 'Pretendard-SemiBold' }}>• 운동</span>
                                            <br />: {dateFeedbackData.analysisResult.workOut}
                                        </div>
                                        <div style={{ padding: '10px 10px 5px' }}>
                                            <span style={{ fontFamily: 'Pretendard-SemiBold' }}>• 식사</span>
                                            <br />: {dateFeedbackData.analysisResult.meal}
                                        </div>
                                        <div style={{ padding: '10px 10px 5px' }}>
                                            <span style={{ fontFamily: 'Pretendard-SemiBold', color: '#4470F3' }}>
                                                • 총평
                                            </span>
                                            <br />: {dateFeedbackData.analysisResult.review}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                src="../img/feedback_backimg.png"
                                style={{
                                    width: '200px',
                                    marginTop: '70px',
                                    paddingLeft: '300px',
                                    position: 'absolute',
                                }}
                            />
                            <div style={{ width: '350px', zIndex: '2', position: 'relative' }}>
                                <div
                                    style={{
                                        width: '100%',
                                        height: '410px',
                                        backgroundColor: '#4470F3',
                                        borderRadius: '20px',
                                        border: '1px #ddd solid',
                                    }}
                                >
                                    <div
                                        style={{
                                            fontFamily: 'Pretendard-SemiBold',
                                            fontSize: '20px',
                                            color: '#fff',
                                            margin: '0px auto',
                                            padding: '10px 0',
                                        }}
                                    >
                                        AI 추천 내일의 고정테이블
                                    </div>
                                    <div
                                        style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '410px',
                                            backgroundColor: '#fff',
                                            borderRadius: '20px',
                                            boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: '350px',
                                                height: '370px',
                                                overflow: 'auto',
                                                margin: '0 auto',
                                            }}
                                        >
                                            <TimeTableDiv type="before" date={moment().format('YYYY-MM-DD')} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: '60px', display: 'flex', justifyContent: 'space-between' }}>
                                    <Button type="secondary" size="sub" title="적용 안함" onClick={onClose} />
                                    <Button
                                        type="primary"
                                        size="medium"
                                        title={
                                            <>
                                                추천 일정 적용&nbsp;&nbsp;
                                                <img
                                                    src="../img/btn/check_enabled.png"
                                                    style={{ width: '18px', verticalAlign: 'middle' }}
                                                />
                                            </>
                                        }
                                        onClick={onClose}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
