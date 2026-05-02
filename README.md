# 강의실 에너지 낭비 점검 웹앱

365호, 367호, 369호를 순회 점검하면서 시간표와 실제 강의실 이용 상태, 전력기기 상태를 기록하는 웹앱입니다.

## 확정된 기록 흐름

1. 새 순회를 시작합니다.
2. 강의실을 선택합니다.
3. 기록 시간, 시간표상 상태, 시간표상 수업명은 강의실 선택 시점 기준으로 자동 입력됩니다.
4. 기록자를 선택합니다.
5. 실제 강의/활동 상태를 선택합니다.
6. 실제 점유 상태를 선택합니다.
7. 시간표와 실제 상태가 어긋나면 사유를 선택합니다.
8. 사람 유무와 관계없이 모든 전력기기 상태를 필수로 선택합니다.
9. 각 강의실 기록은 먼저 브라우저에 저장됩니다.
10. 한 순회에서 365호, 367호, 369호가 모두 기록되면 배포 환경에서는 Google Sheets로 자동 전송됩니다.
11. 필요하면 로컬 기록을 CSV로도 추출할 수 있습니다.

## 저장 데이터

한 행은 한 순회 중 한 강의실을 한 번 점검한 결과입니다.

- `record_id`
- `patrol_id`
- `recorded_at`
- `saved_at`
- `observer`
- `room`
- `timetable_status`
- `scheduled_course_name`
- `actual_activity`
- `occupancy_status`
- `exception_reason`
- `lighting_status`
- `lighting_factor`
- `hvac_status`
- `computer_status`
- `smart_board_status`
- `google_sheet_status`
- `note`

## 선택지

조명:

- 꺼짐
- 0.5 켜짐
- 켜짐

냉난방기구, 컴퓨터, 스마트 칠판:

- 꺼짐
- 켜짐
- 판단 어려움

시간표와 실제 상태가 다른 이유:

- 조기 종료
- 휴강
- 개인적 이용
- 확인 불가

시간표상 상태:

- 수업 있음
- 수업 없음

## 실행

브라우저에서 `index.html`을 열면 로컬 기록용으로 사용할 수 있습니다.

로컬 서버로 실행할 수도 있습니다.

```bash
python3 -m http.server 4173
```

그 다음 `http://127.0.0.1:4173/`로 접속합니다.

## GitHub/Vercel 배포

여러 명이 함께 쓰려면 GitHub에 이 폴더를 올리고 Vercel로 배포하는 방식을 권장합니다.

1. Google Cloud에서 서비스 계정을 만듭니다.
2. 서비스 계정에 Google Sheets API 권한을 사용할 수 있게 설정합니다.
3. 기록을 받을 Google Sheet를 만들고, 서비스 계정 이메일에 편집 권한을 공유합니다.
4. GitHub 저장소를 Vercel에 연결합니다.
5. Vercel 프로젝트 환경변수에 아래 값을 넣습니다.

| 환경변수 | 값 |
|---|---|
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | 서비스 계정 이메일 |
| `GOOGLE_PRIVATE_KEY` | 서비스 계정 private key |
| `GOOGLE_SHEET_ID` | Google Sheet URL 안의 스프레드시트 ID |
| `GOOGLE_SHEET_TAB` | 선택 사항, 기본값 `inspection_logs` |

배포 후 앱은 한 순회의 세 강의실 기록이 모두 완료되면 `/api/log`를 통해 Google Sheets에 3개 행을 한 번에 추가합니다. 사용자는 별도의 Google Sheets URL을 입력하지 않습니다.

## Google Sheets 저장 방식

- 배포 환경에서 연결이 정상일 때: 순회 완료 시 Google Sheets로 전송
- 순회가 미완료된 경우: 브라우저 로컬 저장소에서 업로드 대기
- 연결 확인 전 또는 실패 시: 브라우저 로컬 저장소에 보관
- `미전송 기록 보내기`: 로컬에 남아 있는 완료 순회를 다시 전송
- `CSV 다운로드`: Google Sheets 전송과 별개로 로컬 기록을 추출

## 운영상 안전장치

- 기록자 선택은 필수입니다.
- 같은 순회에서 같은 강의실을 다시 저장하면 확인창이 뜹니다.
- 전체 삭제는 두 번 확인합니다.
- CSV 데이터는 화면에서도 확인할 수 있습니다.
