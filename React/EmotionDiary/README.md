<div align="center">
  <h1>감정 일기장 (Emotion Diary)</h1>
  <img src='https://github.com/user-attachments/assets/52a1e967-6921-48a5-a4ea-9a14783a0a3b'/>
  <p>이 프로젝트는 감정을 함께 기록할 수 있는 <b>감정 일기장 웹 애플리케이션</b>입니다.<br />
사용자는 해당 날짜의 일기를 작성하면서 감정도 같이 기록할 수 있습니다.</p>
</div>

<br/>

## 1. 기능
- **감정 선택**: 사용자는 하루의 감정을 **완전좋음, 좋음, 그럭저럭, 나쁨, 끔찍함** 으로 선택할 수 있습니다.
- **일기 CRUD**: 일기를 생성,삭제,수정 할 수 있습니다.
- **일기 필터링**: 사용자는 원하는 달또는 날짜의 최신 순,오래된 순으로 필터링 가능합니다.
- **저장 기능**: 작성한 일기는 로컬 스토리지에 저장되어, 나중에 다시 볼 수 있습니다.

<br/>

## 2. 개발 환경
### 개발언어
<div>
    <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
    <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/>
</div>

### 라이브러리
<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
</div>

### 배포
<div>
  <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
</div>

<br />

## 3. UI
<div>
  <div>
    <h3>Home Page</h3>
    <p>웹에 접속했을 때, 사용자가 처음 보는 페이지입니다
    <br />다이어리 Item 목록을 볼 수 있고 날짜를 기준으로 필터링해서 볼 수 있습니다.</p>
    <img src='https://github.com/user-attachments/assets/9538738e-1b43-415a-b135-047eb4bc88d6'/>
  </div>
  <br/>
  <div>
    <h4>New Page</h4>
    <p>새로운 일기를 작성할때 보이는 페이지입니다.</p>
    <img src='https://github.com/user-attachments/assets/e8ddcb9e-51e8-4c36-9f91-56a73d13ba4c'/>
  </div>
    <br/>
  <div>
    <h4>Edit Page</h4>
    <p>기존 일기를 수정할 수 있는 페이지입니다.</p>
    <img src='https://github.com/user-attachments/assets/13eed34f-cc52-46b6-afa0-d86735c0ccb0'/>
  </div>
  <br/>
  <div>
    <h4>Diary Page</h4>
    <p>특정 일기의 상세내용을 볼 수 있는 페이지입니다.</p>
    <img src='https://github.com/user-attachments/assets/01c0260b-d95b-4152-b07a-7ac06e21572f'/>
  </div>
  <br/>  
</div>

<br/>

## 4. Commit Convention
| 커밋 유형    | 의미                                     | 깃모지      |
|--------------|------------------------------------------|-----------------|
| **Feat**     | 새로운 기능 추가                         |  :sparkles:   |
| **Fix**      | 버그를 고친 경우                         |  :bug:        |
| **Docs**     | 문서 수정                                |  :memo:       |
| **Refactor** | 코드 리팩토링                            |  :recycle:    |
| **Chore**    | 패키지 매니저 수정, 그 외 기타 수정      |  :white_check_mark:    |
| **Design**   | CSS 등 사용자 UI 디자인 변경             |  :lipstick:        |
| **Change**   | 파일명 변경, 파일 삭제 등 기타           |  :wrench:     |
| **Test**     | 테스트 코드, 리팩토링 테스트 코드 추가   |  :clown_face: |

<br/>

## 5. 프로젝트 구조
```
\---src
	    |   App.jsx
	    |   index.css
	    |   main.jsx
	    +---assets
	    |       emotion1.png
	    |       ...
	    +---components
	    |       Header.jsx
	    |       ...
	    +---hooks
	    |       ...
	    +---pages
	    |       Home.jsx
	    |       ...
	    +---styles
	    |   |   global.css
	    |   \---components
	    |           header.css
	|           ...
	\---util
	        ...
```
