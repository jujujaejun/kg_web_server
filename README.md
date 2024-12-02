# 프로젝트 소개

클라이언트와 상호작용하며 로봇을 제어하는 웹 서버 구축

이 프로젝트는 **도서관 회원**이 웹에서 도서를 예약하고, **로봇이 예약을 처리**하는 과정에서 **실시간 데이터 전송**과 **3D 모델을 활용한 시각적 랜더링**을 포함한 웹 서버 시스템을 구축하는 것을 목표로 합니다.

[KG Library App](https://kgwebserver-14978e851dae.herokuapp.com)

## 주요 기능
- **도서 예약 확인**: 도서관 회원이 웹을 통해 도서를 예약하면, 서버가 예약 가능 여부를 확인합니다.
- **로봇 명령 전달**: 예약이 확인되면 로봇에게 최소한의 데이터를 전달하여 지정된 명령을 수행합니다. 예) 예약 시간, 책 고유 아이디 등.
- **실시간 데이터 전송**: 로봇의 카메라 영상, 현재 위치 등의 데이터를 서버로 전송하여, 사용자가 실시간으로 확인할 수 있는 페이지에 표시합니다.
- **3D 모델 활용**: 웹에서 도서관 회원이 로봇의 현재 상황을 3D 모델로 시각화하여 볼 수 있도록 구현하였습니다.

## 사용한 기술 스택
| 기술 | 설명 |
|:--:|:--:|
| **API** | 국회도서관 API를 사용하여 도서 정보를 조회 및 예약 확인 |
| **데이터베이스** | **MongoDB**를 사용하여 예약 정보, 사용자 정보 등을 저장 및 관리 |
| **배포 플랫폼** | **Heroku**를 이용하여 웹 서버 배포 |
| **MERN 스택** | **MongoDB, Express.js, React, Node.js**를 사용하여 웹 애플리케이션을 구축 |
| **3D 모델 랜더링** | 웹에서 **Blender**로 만든 3D 모델을 활용하여 로봇의 상태를 시각화 |

## 프로젝트 사용 예시
도서관 회원이 웹 애플리케이션에 접속하여 도서를 예약하면 서버가 해당 도서의 예약 가능 여부를 확인합니다. 예약이 가능한 경우, **로봇에게 최소한의 데이터를 전달**하여 예약 절차를 진행하게 되며, 이때 로봇은 도서관 내에서 지정된 위치로 이동하여 작업을 수행합니다. 
![Alt text](https://github.com/jujujaejun/kg_web_server/blob/main/home1.png?raw=true)
![Alt text](https://github.com/jujujaejun/kg_web_server/blob/main/reservation.png?raw=true)
![Alt text](https://github.com/jujujaejun/kg_web_server/blob/main/send.png?raw=true)

실시간 데이터는 로봇의 **카메라**와 **위치 센서**를 통해 서버로 전송되며, 웹 페이지에서는 이러한 데이터를 **3D 모델을 활용한 시각적 랜더링**을 통해 사용자가 직관적으로 확인할 수 있습니다.
![Alt text](https://github.com/jujujaejun/kg_web_server/blob/main/robot.png?raw=true)

## 주요 기술 설명
- **React**: 사용자가 쉽게 도서를 예약하고, 로봇의 상태를 시각적으로 확인할 수 있도록 프론트엔드를 구현했습니다.
- **Express.js**: Node.js를 기반으로 서버 사이드 로직을 구현하기 위해 사용했습니다.
- **Blender**: 로봇의 3D 모델을 생성하여 사용자가 웹 페이지에서 현재 로봇의 상태를 직관적으로 확인할 수 있게 하였습니다.
- **MongoDB**: 도서 예약 및 회원 정보를 저장하기 위해 사용되었습니다.
- **Heroku**: 배포 및 서버 관리에 사용된 클라우드 플랫폼입니다.


## 프로젝트 구조

이 프로젝트는 **프론트엔드**, **백엔드**, **로봇 제어** 파트를 명확히 분리하여 개발하였습니다. 각 디렉토리의 역할은 다음과 같습니다.

### **설명**:

1. **/client**: **React**를 사용한 **프론트엔드** 애플리케이션을 포함합니다. `src` 폴더 아래에는 애플리케이션의 소스 코드와 UI 컴포넌트들이 위치합니다.
   
2. **/robot**: **로봇 제어 관련 코드**로, 로봇의 동작과 관련된 로직이 들어 있습니다.

3. **/server**: **서버 사이드** 로직을 포함하는 디렉터리입니다. 여기에는 **API** 라우트와 데이터베이스 모델, 서비스 로직이 포함됩니다.


## 설치 및 실행 방법
1. **의존성 설치**:
   ``` npm install ```
2. **로컬 서버 실행**:
   ``` npm start ```


## 기여 방법
기여를 환영합니다! 이 프로젝트에 기여하려면 **이슈**를 등록하거나 **풀 리퀘스트(Pull Request)**를 보내주세요.
기여할 수 있는 항목 예시:
- **도서 검색 UI 개선**
- **도서 예약 기능 개선**
- **실시간 로봇 제어 기능 추가**
- **커뮤니티 공간 개설** (이미지, 파일, 텍스트)
- **구독 시스템 설계**

## 라이선스
이 프로젝트는 **MIT 라이선스** 하에 배포됩니다.
