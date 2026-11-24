# SM KOREA 홈페이지 사용 설명서

이 폴더는 SM KOREA 홈페이지 전체입니다. 인터넷 연결만 있으면 별도 프로그램 설치 없이 열립니다.

## 1. 열어 보는 방법

1. 이 폴더(`홈피`)를 엽니다.
2. `index.html` 파일을 더블클릭합니다.
3. 크롬이나 엣지 브라우저에서 홈페이지가 열립니다.
4. 마우스 휠로 아래로 내리면 화면이 차례로 바뀝니다.

글꼴은 인터넷에서 불러옵니다. 인터넷이 끊겨 있으면 글꼴만 기본 글꼴로 보이고 나머지는 그대로 동작합니다.

## 2. 폴더 안의 파일

| 파일 / 폴더 | 역할 |
|---|---|
| `index.html` | 홈페이지 본문. 화면 구성, 문구, 인증 목록이 모두 여기에 있습니다. |
| `i18n.js` | 한국어/영어 전환. 영어 문구 사전이 들어 있습니다. |
| `scene.js` | 서비스 구간의 3D 모델(구명정, CO2 실린더, 구명부환, 워터백). |
| `vendor/three.min.js` | 3D를 그리는 공개 라이브러리(Three.js). 수정하지 않습니다. |
| `img/` | 사진과 로고. |
| `media/` | 항목별 작동 영상·사진을 넣는 폴더. 처음에는 비어 있습니다. |

## 3. 동작 원리

- **한/영 전환**: 처음 열 때 기기 언어를 확인합니다. 한국어 기기는 한국어, 그 밖의 기기는 영어로 열립니다. 오른쪽 위 `KO / EN` 버튼을 누르면 직접 바꿀 수 있고, 한 번 고른 언어는 다음 방문 때도 유지됩니다.
- **영어 문구**: 화면의 한국어 문장을 `i18n.js` 사전에서 찾아 영어로 바꿉니다. 사전에 없는 문장은 한국어 그대로 남습니다.
- **3D 서비스 구간**: 스크롤 위치를 숫자(0~1)로 바꿔 3D 모델의 회전·이동에 연결합니다. 모델을 마우스로 끌면 직접 돌릴 수 있습니다. 화면이 좁은 휴대폰에서는 3D 대신 사진으로 보여 줍니다.
- **항목 영상·사진**: 점검 항목을 누르면 `media` 폴더에서 같은 이름의 파일을 찾습니다. 영상(.mp4)이 있으면 영상을, 없으면 사진(.jpg)을, 둘 다 없으면 "준비 중" 안내를 보여 줍니다.

## 4. 항목별 작동 영상·사진 넣는 방법

1. 넣을 영상이나 사진 파일을 준비합니다. 영상은 `.mp4`, 사진은 `.jpg` 형식이어야 합니다.
2. 아래 표에서 해당 항목의 파일 이름을 찾습니다.
3. 파일 이름을 표의 이름과 똑같이 바꿉니다. 영어 소문자와 `-`만 씁니다.
4. 이 폴더 안의 `media` 폴더에 넣습니다.
5. `index.html`을 새로 고침(F5)한 뒤 그 항목을 눌러 확인합니다.

예: CO2 시스템 작동 영상이면 파일 이름을 `fixed-high-low-co2-system.mp4`로 바꿔 `media` 폴더에 넣습니다.

구명정 화면의 "스프링클러 수막 탈출 영상" 버튼은 `media/lifeboat-sprinkler.mp4` 파일을 엽니다.

### 구명정 점검·정비

| 화면의 항목 이름 | 넣을 파일 이름 (영상 또는 사진) |
|---|---|
| ANNUAL THOROUGH EXAMINATION | `annual-thorough-examination.mp4` 또는 `annual-thorough-examination.jpg` |
| 5-YEAR THOROUGH EXAMINATION | `5-year-thorough-examination.mp4` 또는 `5-year-thorough-examination.jpg` |
| LOAD TEST | `load-test.mp4` 또는 `load-test.jpg` |
| WIRE REPLACEMENT | `wire-replacement.mp4` 또는 `wire-replacement.jpg` |
| SPARE PARTS | `spare-parts.mp4` 또는 `spare-parts.jpg` |
| REPAIR | `repair.mp4` 또는 `repair.jpg` |

### 소방설비(FFE) 점검

| 화면의 항목 이름 | 넣을 파일 이름 (영상 또는 사진) |
|---|---|
| FIXED HIGH/LOW CO2 SYSTEM | `fixed-high-low-co2-system.mp4` 또는 `fixed-high-low-co2-system.jpg` |
| FIXED HIGH/LOW FOAM SYSTEM | `fixed-high-low-foam-system.mp4` 또는 `fixed-high-low-foam-system.jpg` |
| DRY CHEMICAL POWDER SYSTEM | `dry-chemical-powder-system.mp4` 또는 `dry-chemical-powder-system.jpg` |
| WATER MIST SYSTEM | `water-mist-system.mp4` 또는 `water-mist-system.jpg` |
| FM200 SYSTEM | `fm200-system.mp4` 또는 `fm200-system.jpg` |
| HALON SYSTEM | `halon-system.mp4` 또는 `halon-system.jpg` |
| NOVEC 1230 SYSTEM | `novec-1230-system.mp4` 또는 `novec-1230-system.jpg` |
| INERGEN SYSTEM | `inergen-system.mp4` 또는 `inergen-system.jpg` |
| FIRE DETECTION & ALARM SYSTEM | `fire-detection-and-alarm-system.mp4` 또는 `fire-detection-and-alarm-system.jpg` |
| GALLEY DUCT SYSTEM | `galley-duct-system.mp4` 또는 `galley-duct-system.jpg` |
| GALLEY DEEP FAT FRYER SYSTEM | `galley-deep-fat-fryer-system.mp4` 또는 `galley-deep-fat-fryer-system.jpg` |
| FIRE EXTINGUISHER | `fire-extinguisher.mp4` 또는 `fire-extinguisher.jpg` |
| FOAM APPLICATOR | `foam-applicator.mp4` 또는 `foam-applicator.jpg` |
| E.E.B.D | `e-e-b-d.mp4` 또는 `e-e-b-d.jpg` |
| S.C.B.A | `s-c-b-a.mp4` 또는 `s-c-b-a.jpg` |
| FIREMAN'S OUTFIT | `fireman-s-outfit.mp4` 또는 `fireman-s-outfit.jpg` |
| CHEMICAL SUIT | `chemical-suit.mp4` 또는 `chemical-suit.jpg` |
| MEDICAL OXYGEN | `medical-oxygen.mp4` 또는 `medical-oxygen.jpg` |
| AIR COMPRESSOR QUALITY | `air-compressor-quality.mp4` 또는 `air-compressor-quality.jpg` |

### 구명설비(LSA) 점검

| 화면의 항목 이름 | 넣을 파일 이름 (영상 또는 사진) |
|---|---|
| IMMERSION SUIT | `immersion-suit.mp4` 또는 `immersion-suit.jpg` |
| LIFE JACKET | `life-jacket.mp4` 또는 `life-jacket.jpg` |
| LIFEBUOY | `lifebuoy.mp4` 또는 `lifebuoy.jpg` |
| EMBARKATION LADDER | `embarkation-ladder.mp4` 또는 `embarkation-ladder.jpg` |
| PILOT LADDER | `pilot-ladder.mp4` 또는 `pilot-ladder.jpg` |
| THERMAL PROTECTIVE AID | `thermal-protective-aid.mp4` 또는 `thermal-protective-aid.jpg` |

### 하중 시험 (LOAD TEST)

| 화면의 항목 이름 | 넣을 파일 이름 (영상 또는 사진) |
|---|---|
| LIFEBOAT & DAVIT | `lifeboat-and-davit.mp4` 또는 `lifeboat-and-davit.jpg` |
| HEAVY CRANE (UP TO 1,000 TONS) | `heavy-crane-up-to-1-000-tons.mp4` 또는 `heavy-crane-up-to-1-000-tons.jpg` |
| PROVISION CRANE | `provision-crane.mp4` 또는 `provision-crane.jpg` |
| MONORAIL CRANE | `monorail-crane.mp4` 또는 `monorail-crane.jpg` |
| ENGINE ROOM OVERHEAD CRANE | `engine-room-overhead-crane.mp4` 또는 `engine-room-overhead-crane.jpg` |
| LOOSE GEAR EQUIPMENT | `loose-gear-equipment.mp4` 또는 `loose-gear-equipment.jpg` |
| EMBARKATION LADDER | `embarkation-ladder.mp4` 또는 `embarkation-ladder.jpg` |
| ACCOMMODATION LADDER | `accommodation-ladder.mp4` 또는 `accommodation-ladder.jpg` |
| FALL ARRESTOR | `fall-arrestor.mp4` 또는 `fall-arrestor.jpg` |
| RESCUE TRIPOD | `rescue-tripod.mp4` 또는 `rescue-tripod.jpg` |
| PERSONNEL TRANSFER BASKET | `personnel-transfer-basket.mp4` 또는 `personnel-transfer-basket.jpg` |
| CONTAINER SPREADER (20FT/40FT) | `container-spreader-20ft-40ft.mp4` 또는 `container-spreader-20ft-40ft.jpg` |

## 5. 문구·인증 목록 고치는 방법

`index.html`을 메모장으로 열어 고칩니다. 저장할 때 인코딩은 UTF-8로 둡니다.

- **라이센스 추가**: `var LIC=[` 로 시작하는 줄을 찾습니다. `['업체 이름','유효기간']` 형식으로 한 건을 추가합니다. 예: `['KIDDE','2030-12-31']`. 유효기간이 지나면 "유효기간 만료", 120일 이내면 "만료 임박"이 자동으로 표시됩니다.
- **선급·기국 추가**: 바로 아래 `var CLS=[`, `var FLAG=[` 줄을 같은 방식으로 고칩니다.
- **인증서 화면의 숫자(16·9·3)**: `data-n="16"` 부분의 숫자를 목록 개수에 맞게 고칩니다.
- **영어 문구**: 한국어 문장을 새로 넣었으면 `i18n.js`에 `"한국어 문장":"English sentence",` 한 줄을 추가합니다. 한국어 문장은 화면의 글자와 정확히 같아야 합니다.

## 6. 인터넷에 올릴 때

이 폴더를 통째로 웹 호스팅에 올리면 됩니다. 폴더 구조와 파일 이름은 바꾸지 않습니다.
