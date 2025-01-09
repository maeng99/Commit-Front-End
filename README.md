<img src="https://github.com/user-attachments/assets/eed9ebec-e85f-411f-8034-f3181b662517" width="100%"/>

# 📆[Top8 본선 진출] 멋사 대학 12기 중앙 해커톤 - "Commit": 현대인들을 위한 맞춤형 AI 일상 플래너 (작심삼일팀)📆
- "멋쟁이사자처럼 대학 12기 중앙 해커톤" Top8 본선 진출
    - "멋쟁이사자처럼 ‘건강관리 서비스 개발’ 해커톤 성료… 전국에서 1500명 학생 참가"<br />(https://www.newswire.co.kr/newsRead.php?no=994864)
    - "[멋사 대학] 12기 중앙 해커톤 본선 발표_상명대학교(서울)_3팀_commit"<br />(https://www.youtube.com/watch?v=ZGmCeFzy-Zo&t=163s)
<div align="center">
  <img src="https://github.com/user-attachments/assets/9f941a4b-d1cd-40fa-8fc9-55958dd767e5" width="800px"/>
</div>
<br/>
<br/>

## 1. Project Overview
- 프로젝트 이름: **"Commit"**
- 프로젝트 설명: 현대인들을 위한 맞춤형 AI 일상 플래너
- 프로젝트 기간: 2024.07. ~ 2024.08. (1개월)
- 해커톤 본선: 2024.08.06 ~ 2024.08.07 (1박2일)
<br/>

## 2. Team Members
Team: **"작심삼일팀"**
| 김동현 | 백종우 | 맹의현 | 안세빈 | 유세리 | 윤현수 |
|:------:|:------:|:------:|:------:|:------:|:------:|
| PM/BE | BE | FE | FE | FE | Design |
<br/>

## 3. Key Features
- **오늘의 일정 추천**:
  - 어제 일정에 대해 (워라밸, 수면, 운동, 식사, 총평) 총 5가지의 카테고리로 하루 피드백 제공
  - 어제의 일정과 하루 피드백을 종합하여 오늘의 일정 추천
  <br />
  <img src="https://github.com/user-attachments/assets/296b0d79-ac09-467d-b6db-d36b4317c15d" width="600px"/>

- **주간 생활 분석 및 피드백**:
  - 워라밸, 운동 시간, 수면 시간에 대한 주간 데이터로 중강기적인 시각에서의 자신의 생활패턴을 이해하고 개선할 수 있도록 피드백 제공
  <br />
  <img src="https://github.com/user-attachments/assets/691d1ff4-0f2a-477d-a50e-5c02e0e910e8" width="600px"/>

- **나만의 플래너 작성 규칙**:
  - 자신의 목표로 하는 워라밸 비율, 하루 수면시간, 하루 운동시간 및 개인적인 세부사항을 설정해둠으로써 AI를 통한 피드백 시 부가적인 정보로 활용 가능
  <br />
  <img src="https://github.com/user-attachments/assets/05c6156d-93ed-4ace-b5a2-5fa8021bb4b6" width="600px"/>

- **일정 성취도 기록**:
  - 편리한 UI/UX를 제공하여 하루 일정에 대해서 (달성, 연기, 미달성)을 기록 가능
  <br />
  <img src="https://github.com/user-attachments/assets/34829d81-3c6d-46b4-a92d-e35fc2bf9c48" width="600px"/>
<br/>
<br/>

## 4. Technology Stack
- **Design:** Figma
  
- **FrontEnd:** React.js
  
- **BackEnd:** Spring
  
- **Database:** MySQL

- **Cooperation:** Git, Notion
<br/>

## 5. Project Structure(FE)
```plaintext
─Commit-Front-Ecd
│  │  index.html
│  │  manifest.json
│  │  robots.txt
│  │
│  └─img/
│
└─src/
    │  App.css
    │  App.js
    │  App.test.js
    │  index.css
    │  index.js
    │  reportWebVitals.js
    │  setupTests.js
    │  source.txt
    │
    ├─api/
    │  ├─chatGPT/
    │  │      dateFeedbackAPI.tsx
    │  │
    │  ├─plan/
    │  │      addCalendarAPI.tsx
    │  │      calendarPlanAPI.tsx
    │  │      completePlanAPI.tsx
    │  │      datePlanAPI.tsx
    │  │      editTimeTable.tsx
    │  │      timetableAPI.tsx
    │  │
    │  └─user/
    │          createRuleSetAPI.tsx
    │          loginAPI.tsx
    │          ruleSetAPI.tsx
    │          signupAPI.tsx
    │          updatePasswordAPI.tsx
    │          userAPI.tsx
    │
    ├─components/
    │      bigCalendar.tsx
    │      button.tsx
    │      date.tsx
    │      nav.tsx
    │      newPlanDiv.tsx
    │      smallCalendar.tsx
    │      timeTableDiv.tsx
    │      todayPlanDiv.tsx
    │      weekRange.tsx
    │
    ├─database/
    │      planData.tsx
    │      weekData.tsx
    │
    └─tabs/
            addplan.tsx
            analysis.tsx
            auth.tsx
            calendar.tsx
            feedbackPopup.tsx
            login.tsx
            main.tsx
            mypage.tsx
            plan.tsx
            setRule.tsx
            signup.tsx
```
<br/>

## 6. 발표 PDF
- 프로젝트 자세히 알아보기<br />[📄 Commit_PDF](https://github.com/maeng99/Commit-Front-End/blob/main/%EC%83%81%EB%AA%85%EB%8C%80%ED%95%99%EA%B5%90(%EC%84%9C%EC%9A%B8)_3%ED%8C%80_commit.pdf)
