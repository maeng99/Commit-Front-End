import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button.tsx';
import '../App.css';

type NavType = 'main' | 'plan' | 'analysis' | 'calender' | 'mypage';

export default function Nav(props: NavProps) {
    const { type } = props;
    return (
        <div className="nav">
            <Link to="/main">
                <img src="../img/small_logo.png" style={{ width: '60px', marginTop: '20px', marginBottom: '40px' }} />
            </Link>
            <Link to="/main" style={{ textDecoration: 'none' }}>
                <img
                    src="../img/nav_img/nav_main.png"
                    className="nav_img"
                    style={props.type === 'main' ? { borderRight: '4px #5a89fe solid', width: '30px' } : {}}
                />
            </Link>
            <Link to="/plan" style={{ textDecoration: 'none' }}>
                <img
                    src="../img/nav_img/nav_addplan.png"
                    className="nav_img"
                    style={props.type === 'plan' ? { borderRight: '4px #5a89fe solid', width: '30px' } : {}}
                />
            </Link>
            <Link to="/analysis" style={{ textDecoration: 'none' }}>
                <img
                    src="../img/nav_img/nav_analysis.png"
                    className="nav_img"
                    style={props.type === 'analysis' ? { borderRight: '4px #5a89fe solid', width: '30px' } : {}}
                />
            </Link>
            <Link to="/calendar" style={{ textDecoration: 'none' }}>
                <img
                    src="../img/nav_img/nav_calendar.png"
                    className="nav_img"
                    style={props.type === 'calendar' ? { borderRight: '4px #5a89fe solid', width: '30px' } : {}}
                />
            </Link>
            <Link to="/mypage" style={{ textDecoration: 'none' }}>
                <img
                    src="../img/nav_img/nav_mypage.png"
                    className="nav_img"
                    style={props.type === 'mypage' ? { borderRight: '4px #5a89fe solid', width: '30px' } : {}}
                />
            </Link>
            <div style={{ width: '60px', position: 'absolute', bottom: '15px', left: '50%', marginLeft: '-30px' }}>
                <Button
                    type="logout"
                    size="small"
                    title="로그아웃"
                    onClick={() => {
                        window.location = '/';
                    }}
                />
            </div>
        </div>
    );
}
