## collab-lotto

> **우아한테크코스 4~5주차 오픈미션**  
> Java 백엔드와 JavaScript 프론트엔드로 구성된 **로또 협업 프로젝트**입니다.  
> 프론트와 백엔드를 분리하여, 실제 서비스 환경에서의 API 통신과 협업 과정을 경험하는 것을 목표로 합니다.

---

### 🚀 프로젝트 개요

**collab-lotto**는 기존 3주차 미션 로또를 확장하여  
서버-클라이언트 구조로 리팩터링하고 2명에서 협업하여 **풀스택 로또 애플리케이션**입니다.

- **Frontend**: 사용자의 입력과 결과 화면을 담당
    
- **Backend**: 로또 번호 생성, 검증, 당첨 결과 계산 로직 및 API 제공
    

---

### 🛠️ 기술 스택

|구분|기술|
|---|---|
|**Frontend**|JavaScript (ES6+), HTML, CSS|
|**Backend**|Java 17, Spring Boot|
|**Build & Tools**|Gradle, Vite, npm|
|**협업**|Git, GitHub, RESTful API|
|**기타**|Prettier, ESLint, JUnit5|

---

### 🧱 프로젝트 구조

```
collab-lotto/
 ├── frontend/            # 프론트엔드 코드
 │   ├── index.html
 │   ├── src/
 │   └── ...
 │
 ├── backend/             # 백엔드 코드
 │   ├── src/
 │   │   ├── main/
 │   │   └── test/
 │   └── build.gradle
 │
 ├── README.md
 └── .gitignore
```

---

### 🎯 주요 기능

#### Frontend

- 사용자로부터 로또 구입 금액 입력
    
- 자동/수동 로또 번호 입력 기능
    
- 결과 확인 및 당첨 통계 표시
    
- 백엔드 API와 비동기 통신 (fetch)
    

#### Backend

- 로또 번호 자동 생성 및 유효성 검증
    
- 당첨 결과 계산 로직
    
- JSON 형태의 API 응답 제공
    
- 테스트 코드 기반 서비스 검증
    

---

### 🔄 API 명세 (예시)

|Method|Endpoint|Description|
|---|---|---|
|`POST`|`/api/lotto`|로또 번호 생성 및 구매 처리|
|`GET`|`/api/result`|당첨 결과 조회|
|`GET`|`/api/statistics`|통계 데이터 반환|

---

### 👥 팀 협업 방식

|역할|담당 내용|
|---|---|
|Frontend|UI 개발, API 연동, 이벤트 처리|
|Backend|비즈니스 로직, API 설계 및 문서화|
|공통|Git 브랜치 전략, 코드 리뷰, 기능 테스트|

> 브랜치 전략: `main` - `frontend/feature/*`, `backend/feature/*`  
> 코드 리뷰 및 PR 병합 후 main 반영

---

### 🌱 학습 포인트

- 프론트엔드-백엔드 간 **RESTful 통신 구조 이해**
    
- JSON 기반 데이터 교환과 응답 처리
    
- 클린 코드 및 단위 테스트 작성
    
- 협업 중심 브랜치 관리 및 코드 리뷰 경험
    

---

### 🧑‍💻 Contributors

|Name|Role|
|---|---|
|FE|[GitHub ID or Name]|
|BE|[GitHub ID or Name]|