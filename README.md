# ToDoList2 (완료 21/07/04)

모듈화가 되지 않은 vanillaJS todo로 ToDo의 가장 기본이 되는 버전이다.<br>
ToDoList3 진행 시엔 모듈화를 고려하고, 로컬 스토리지를 이용해 개발할 것이다.

[투두앱 링크] (https://zealous-liskov-9a341d.netlify.app/)

### 1. 디자인
[figma로 보기](https://www.figma.com/file/UWosTHRLB7efj3iRSHn0k5/TODO?node-id=0%3A1)
<br>
![image](https://user-images.githubusercontent.com/44112843/117540394-2f25b180-b04a-11eb-9577-f19c6e07ad5b.png)
<br><br>
### 2. 색상
![todocolor](https://user-images.githubusercontent.com/44112843/124387492-e290e680-dd19-11eb-89f1-51f0435a7a8e.png)
<br><br>
### 3. 기능요구사항
- 오늘 날짜를 상단에서 확인
- 하단에 있는 input창에 todo를 입력하고, +버튼을 눌러(또는 엔터키를 눌러) 해당 text를 추가
- todo 좌측에 있는 버튼을 클릭하면 완료처리 (이 때, 해당 todo가 완료되었음을 알려주는 스타일을 적용)
- todo 우측에 있는 x 버튼을 클릭하여 해당 todo 삭제
- 날짜 하단에 프로그래스바를 추가하여 진행 상태
<br><br>
### 4. 기술 스택
- vanillaJS
- Third part library:moment


