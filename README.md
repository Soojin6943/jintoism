# 📸 JINTOISM 

JINTOISM은 **리액트 기반 네컷 사진 촬영 서비스**로,
사용자가 촬영한 네 장의 사진을 선택한 프레임에 담아 **최종 이미지를 생성하고**,
**QR 코드로 다운로드 링크를 제공하는** 웹 애플리케이션입니다.


##  기능 목록

### 1. 홈 화면

* 촬영 시작 버튼 제공


### 2. 사진 촬영

* **카메라 권한 요청**
* 아이패드/모바일 친화적인 촬영 화면
* 셀카 비율 카메라 (cover 방식)
* 총 6장의 사진 연속 촬영



### 3. 사진 선택

* 사용자가 촬영한 이미지 중 원하는 4장을 선택
* 선택된 사진은 다음 단계로 전달



### 4. 프레임 선택

* 4컷 이미지를 미리보기와 함께 확인 가능
* 사용자가 제공된 프레임 중 원하는 하나를 선택
* 선택 시 실시간으로 미리보기 반영



### 5. 최종 이미지 생성 (Canvas)

* 각 사진을 슬롯 비율에 맞도록 crop (cover)
* 선택한 프레임 PNG를 오버레이하여 합성
* 최종 4컷 이미지를 Base64 → File 변환


### 6. 서버 업로드

* 서버는 UUID 기반으로 이미지 저장
* `/image/{id}`로 접근 가능한 URL 생성



### 7. QR 코드 제공

* 업로드된 URL을 QR로 생성
* 팝업 UI를 통해 QR 표시
* QR을 스캔해 최종 이미지를 누구나 다운로드 가능



##  프로젝트 구조

### **Frontend (React)**

```
src
 ┣ component
 ┃ ┣ Home.js
 ┃ ┣ Camera.js
 ┃ ┣ PhotoSelect.js
 ┃ ┣ PreviewFrame.js
 ┃ ┣ Frame.js
 ┃ ┗ LoadingPopup.js
 ┣ utils
 ┃ ┗ createFinalImage.js
 ┗ index.js
```

### **Backend (Spring Boot)**

```
src
 ┣ main
 ┃ ┣ java/org.example
 ┃ ┃ ┣ JintoismApplication.java
 ┃ ┃ ┗ controller/UploadController.java
 ┃ ┗ resources/application.properties
```



##  기술 스택

### Frontend

* React
* React Router
* react-slick
* HTML Canvas API
* GitHub Pages 배포

### Backend

* Java 21
* Spring Boot 3
* Multipart upload


##  실행 방법

###  Frontend

```
npm install
npm start
```
