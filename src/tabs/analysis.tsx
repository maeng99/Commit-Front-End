import React from 'react';
import { Link } from 'react-router-dom';
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    Label,
} from 'recharts';
import Date from '../components/date.tsx';
import Nav from '../components/nav.tsx';
import WeekRange from '../components/weekRange.tsx';
import WeekData from '../database/weekData.tsx';
import '../App.css';

const data = WeekData();

export default function Analysis() {
    const renderCustomLegend = (props) => {
        const { payload } = props;
        return (
            <ul style={{ listStyleType: 'none', display: 'flex', padding: '0', margin: '0' }}>
                {payload.map((entry, index) => (
                    <li
                        key={`item-${index}`}
                        style={{
                            marginRight: 20,
                            color: '#0D2259',
                            fontFamily: 'Pretendard-Regular',
                            fontSize: '13px',
                        }}
                    >
                        <span style={{ backgroundColor: entry.color, padding: '0 6px', marginRight: 5 }}>&nbsp;</span>
                        {entry.value}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <Nav type="analysis" />
            <div className="background">
                <div className="main_contents_div">
                    <div style={{ textAlign: 'left', marginBottom: '10px', fontFamily: 'Pretendard-SemiBold' }}>
                        <span style={{ fontFamily: 'Pretendard-ExtraBold', fontSize: '28px', color: '#0D2259' }}>
                            주간 생활 분석 및 피드백
                        </span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ width: '400px' }}>
                            <div
                                style={{
                                    width: '100%',
                                    height: '50px',
                                    borderRadius: '20px',
                                    marginBottom: '20px',
                                    backgroundColor: '#fff',
                                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <WeekRange />
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '535px',
                                    backgroundColor: '#fff',
                                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                                    borderRadius: '20px',
                                }}
                            >
                                <div
                                    style={{
                                        width: '360px',
                                        fontSize: '20px',
                                        fontFamily: 'Pretendard-SemiBold',
                                        margin: '0 auto',
                                        padding: '15px 0',
                                        textAlign: 'left',
                                    }}
                                >
                                    워라밸<span style={{ color: '#ccc' }}> Work-Life Balance</span>
                                </div>
                                <div
                                    style={{
                                        width: '360px',
                                        height: '465px',
                                        margin: '0 auto',
                                    }}
                                >
                                    <div>
                                        <BarChart
                                            width={360}
                                            height={190}
                                            data={data}
                                            margin={{
                                                right: 20,
                                                left: 20,
                                                bottom: 25,
                                            }}
                                            barSize={10}
                                        >
                                            <CartesianGrid horizontal={false} vertical={false} />
                                            <ReferenceLine y={2} stroke="#eee" />
                                            <ReferenceLine y={4} stroke="#eee" />
                                            <ReferenceLine y={6} stroke="#eee" />
                                            <ReferenceLine y={8} stroke="#eee" />
                                            <XAxis
                                                dataKey="name"
                                                tick={{ fontFamily: 'Pretendard-Regular', fontSize: 14, fill: '#999' }}
                                            />
                                            <YAxis domain={[0, 10]} hide={true} />
                                            <Tooltip />
                                            <Legend content={renderCustomLegend} />
                                            <Bar dataKey="Work" stackId="a" fill="#4470F3" />
                                            <Bar dataKey="Life" stackId="a" fill="#A4BCFD" />
                                        </BarChart>
                                    </div>
                                    <div style={{ textAlign: 'left' }}>
                                        <div
                                            style={{
                                                fontFamily: 'Pretendard-SemiBold',
                                                fontSize: '19px',
                                                marginBottom: '10px',
                                            }}
                                        >
                                            주중 평균 워라밸:
                                            <span
                                                style={{
                                                    fontFamily: 'Pretendard-ExtraBold',
                                                    fontSize: '36px',
                                                    color: '#193A97',
                                                    paddingLeft: '20px',
                                                }}
                                            >
                                                5.7 : 4.3
                                            </span>
                                        </div>
                                        <div
                                            style={{
                                                width: '360px',
                                                height: '220px',
                                                margin: '0 auto',
                                                backgroundColor: '#eee',
                                                fontFamily: 'Pretendard-Regular',
                                                fontSize: '14px',
                                                overflow: 'auto',
                                            }}
                                        >
                                            <div style={{ padding: '10px 10px 5px' }}>
                                                • 주말을 제외한 주중 워라밸에 대한 피드백입니다.
                                            </div>
                                            <div style={{ padding: '10px 10px 5px' }}>
                                                • 사용자는 주중 일과 생활의 균형을 잘 맞추고 있으며, 평균적인 워라밸
                                                비율이 5.7 : 4.3으로 매우 안정적입니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ width: '840px', height: '585px', borderRadius: '20px' }}>
                            <div
                                style={{
                                    width: '100%',
                                    height: '215px',
                                    backgroundColor: '#fff',
                                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                                    marginBottom: '20px',
                                    borderRadius: '20px',
                                }}
                            >
                                <div
                                    style={{
                                        width: '800px',
                                        fontSize: '20px',
                                        fontFamily: 'Pretendard-SemiBold',
                                        margin: '0 auto',
                                        padding: '15px 0',
                                        textAlign: 'left',
                                    }}
                                >
                                    종합 피드백
                                </div>
                                <div
                                    style={{
                                        width: '800px',
                                        height: '145px',
                                        margin: '0 auto',
                                        backgroundColor: '#eee',
                                        fontFamily: 'Pretendard-Regular',
                                        fontSize: '14px',
                                        textAlign: 'left',
                                        overflow: 'auto',
                                    }}
                                >
                                    <div style={{ padding: '10px 10px 5px' }}>
                                        • 주말을 제외한 주중 워라밸에 대한 피드백입니다.
                                    </div>
                                    <div style={{ padding: '10px 10px 5px' }}>
                                        • 사용자는 주중 일과 생활의 균형을 잘 맞추고 있으며, 평균적인 워라밸 비율이 5.7
                                        : 4.3으로 매우 안정적입니다.
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    height: '370px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <div
                                    style={{
                                        width: '410px',
                                        backgroundColor: '#fff',
                                        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                                        borderRadius: '20px',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '370px',
                                            fontSize: '20px',
                                            fontFamily: 'Pretendard-SemiBold',
                                            margin: '0 auto',
                                            padding: '15px 0',
                                            textAlign: 'left',
                                        }}
                                    >
                                        운동 시간
                                    </div>
                                    <div
                                        style={{
                                            width: '370px',
                                            height: '300px',
                                            margin: '0 auto',
                                        }}
                                    >
                                        <div>
                                            <LineChart
                                                width={360}
                                                height={140}
                                                data={data}
                                                margin={{
                                                    right: 20,
                                                    left: 20,
                                                }}
                                            >
                                                <CartesianGrid horizontal={false} vertical={false} />
                                                {[...Array(10)].map((_, index) => (
                                                    <ReferenceLine key={index} y={index * 10} stroke="#eee">
                                                        {/*<Label value={`${index * 10}`} position="insideTopLeft" />*/}
                                                    </ReferenceLine>
                                                ))}
                                                <XAxis
                                                    dataKey="name"
                                                    tick={{
                                                        fontFamily: 'Pretendard-Regular',
                                                        fontSize: 14,
                                                        fill: '#999',
                                                    }}
                                                />
                                                <YAxis hide={true} />
                                                <Tooltip />
                                                <Line
                                                    type="monotone"
                                                    dataKey="Exercise"
                                                    stroke="#02A9A1"
                                                    strokeWidth={2}
                                                />
                                            </LineChart>
                                        </div>
                                        <div style={{ textAlign: 'left' }}>
                                            <div
                                                style={{
                                                    fontFamily: 'Pretendard-SemiBold',
                                                    fontSize: '19px',
                                                    marginBottom: '10px',
                                                }}
                                            >
                                                평균 운동 시간:
                                                <span
                                                    style={{
                                                        fontFamily: 'Pretendard-ExtraBold',
                                                        fontSize: '36px',
                                                        color: '#02A9A1',
                                                        paddingLeft: '20px',
                                                    }}
                                                >
                                                    46
                                                </span>
                                                분
                                            </div>
                                            <div
                                                style={{
                                                    width: '360px',
                                                    height: '105px',
                                                    margin: '0 auto',
                                                    backgroundColor: '#eee',
                                                    fontFamily: 'Pretendard-Regular',
                                                    fontSize: '14px',
                                                    overflow: 'auto',
                                                }}
                                            >
                                                <div style={{ padding: '10px 10px 5px' }}>
                                                    • 주말을 제외한 주중 워라밸에 대한 피드백입니다.
                                                </div>
                                                <div style={{ padding: '10px 10px 5px' }}>
                                                    • 사용자는 주중 일과 생활의 균형을 잘 맞추고 있으며, 평균적인 워라밸
                                                    비율이 5.7 : 4.3으로 매우 안정적입니다.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        width: '410px',
                                        backgroundColor: '#fff',
                                        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                                        borderRadius: '20px',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '370px',
                                            fontSize: '20px',
                                            fontFamily: 'Pretendard-SemiBold',
                                            margin: '0 auto',
                                            padding: '15px 0',
                                            textAlign: 'left',
                                        }}
                                    >
                                        수면 시간
                                    </div>
                                    <div
                                        style={{
                                            width: '370px',
                                            height: '300px',
                                            margin: '0 auto',
                                        }}
                                    >
                                        <div>
                                            <LineChart
                                                width={360}
                                                height={140}
                                                data={data}
                                                margin={{
                                                    right: 20,
                                                    left: 20,
                                                }}
                                            >
                                                <CartesianGrid horizontal={false} vertical={false} />
                                                {[...Array(10)].map((_, index) => (
                                                    <ReferenceLine key={index} y={index * 2} stroke="#eee">
                                                        {/*<Label value={`${index * 10}`} position="insideTopLeft" />*/}
                                                    </ReferenceLine>
                                                ))}
                                                <XAxis
                                                    dataKey="name"
                                                    tick={{
                                                        fontFamily: 'Pretendard-Regular',
                                                        fontSize: 14,
                                                        fill: '#999',
                                                    }}
                                                />
                                                <YAxis hide={true} />
                                                <Tooltip />
                                                <Line
                                                    type="monotone"
                                                    dataKey="Sleep"
                                                    stroke="#FEC515"
                                                    strokeWidth={2}
                                                />
                                            </LineChart>
                                        </div>
                                        <div style={{ textAlign: 'left' }}>
                                            <div
                                                style={{
                                                    fontFamily: 'Pretendard-SemiBold',
                                                    fontSize: '19px',
                                                    marginBottom: '10px',
                                                }}
                                            >
                                                평균 수면 시간:
                                                <span
                                                    style={{
                                                        fontFamily: 'Pretendard-ExtraBold',
                                                        fontSize: '36px',
                                                        color: '#FEC515',
                                                        paddingLeft: '20px',
                                                    }}
                                                >
                                                    7.3
                                                </span>
                                                시간
                                            </div>
                                            <div
                                                style={{
                                                    width: '360px',
                                                    height: '105px',
                                                    margin: '0 auto',
                                                    backgroundColor: '#eee',
                                                    fontFamily: 'Pretendard-Regular',
                                                    fontSize: '14px',
                                                    overflow: 'auto',
                                                }}
                                            >
                                                <div style={{ padding: '10px 10px 5px' }}>
                                                    • 주말을 제외한 주중 워라밸에 대한 피드백입니다.
                                                </div>
                                                <div style={{ padding: '10px 10px 5px' }}>
                                                    • 사용자는 주중 일과 생활의 균형을 잘 맞추고 있으며, 평균적인 워라밸
                                                    비율이 5.7 : 4.3으로 매우 안정적입니다.
                                                </div>
                                                <div style={{ padding: '10px 10px 5px' }}>
                                                    • 사용자는 주중 일과 생활의 균형을 잘 맞추고 있으며, 평균적인 워라밸
                                                    비율이 5.7 : 4.3으로 매우 안정적입니다.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
