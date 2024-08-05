import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button.tsx';
import '../App.css';

type NavType = 'main' | 'plan' | 'analysis' | 'calender' | 'mypage';

export default function Nav(props: NavType) {
    const { type } = props;
    return (
        <div className="nav">
            <div style={{ width: '120px', position: 'absolute', top: '30px' }}>
                <Link to="/main">
                    <img src="../img/main_logo.png" style={{ width: '100px' }} />
                </Link>
            </div>
            <div>
                <Link to="/main" style={{ textDecoration: 'none' }}>
                    <img
                        src="../img/nav_img/nav_main.png"
                        className="nav_img"
                        style={
                            props.type === 'main'
                                ? {
                                      borderRight: '4px #5a89fe solid',
                                      width: '30px',
                                      height: '30px',
                                      padding: '17.5px 43px',
                                  }
                                : {}
                        }
                    />
                </Link>
                <Link to="/plan" style={{ textDecoration: 'none' }}>
                    <img
                        src="../img/nav_img/nav_plan.png"
                        className="nav_img"
                        style={
                            props.type === 'plan'
                                ? {
                                      borderRight: '4px #5a89fe solid',
                                      width: '30px',
                                      height: '30px',
                                      padding: '17.5px 43px',
                                  }
                                : {}
                        }
                    />
                </Link>
                <Link to="/analysis" style={{ textDecoration: 'none' }}>
                    <img
                        src="../img/nav_img/nav_analysis.png"
                        className="nav_img"
                        style={
                            props.type === 'analysis'
                                ? {
                                      borderRight: '4px #5a89fe solid',
                                      width: '30px',
                                      height: '30px',
                                      padding: '17.5px 43px',
                                  }
                                : {}
                        }
                    />
                </Link>
                <Link to="/calendar" style={{ textDecoration: 'none' }}>
                    <img
                        src="../img/nav_img/nav_calendar.png"
                        className="nav_img"
                        style={
                            props.type === 'calendar'
                                ? {
                                      borderRight: '4px #5a89fe solid',
                                      width: '30px',
                                      height: '30px',
                                      padding: '17.5px 43px',
                                  }
                                : {}
                        }
                    />
                </Link>
                <Link to="/mypage" style={{ textDecoration: 'none' }}>
                    <img
                        src="../img/nav_img/nav_mypage.png"
                        className="nav_img"
                        style={
                            props.type === 'mypage'
                                ? {
                                      borderRight: '4px #5a89fe solid',
                                      width: '30px',
                                      height: '30px',
                                      padding: '17.5px 43px',
                                  }
                                : {}
                        }
                    />
                </Link>
            </div>
            <div style={{ width: '60px', position: 'absolute', bottom: '20px', left: '50%', marginLeft: '-30px' }}>
                <img
                    src="../img/nav_img/nav_logout_disabled.png"
                    style={{ width: '25px', cursor: 'pointer' }}
                    onClick={() => {
                        window.location = '/';
                    }}
                />
            </div>
        </div>
    );
}
