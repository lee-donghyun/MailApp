# Mail App
## 1. 설명
React Hooks를 사용한 메일 앱입니다. Media Query로 반응형 웹을 구현합니다.
Gmail API를 활용합니다. (Demo : [Mail App](https://lee-donghyun.github.io/MailApp/)) 

## 2. 사용 기술
| 사용 기술 | 설명 |
|--|--|
| React Hooks | ES6+을 기반으로 한 Hooks로 작성 |
| React-Transition-Group | 컴포넌트 전환 시 애니메이션 |
| React-Router | 애플리케이션 라우팅 (BrowserRouter) |
| Gmail API | Gmail 받아오기 |
| styled-components | CSS-in-JS |
| ant-design| Menu, icon등 디자인 컴포넌트 |

## 3. Google API
| func | 설명 |
|--|--|
| initClient() | Google Cloud API 초기화 |
| getInbox() | 'messages.id' inbox[]저장 |
| updateListData() | inbox[] id값으로 리소스 서버에 데이터 요청 |

## 4. 실행 화면
<img src='https://user-images.githubusercontent.com/62923776/117198953-982be000-ae24-11eb-972f-012a3208a238.gif' height='500px'/>
<img src='https://user-images.githubusercontent.com/62923776/117198962-9a8e3a00-ae24-11eb-93f6-168ef7c00e8e.gif' height='500px'/>
