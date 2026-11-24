/* 한/영 전환: 화면의 한글 문구를 사전(EN)으로 바꿔 끼운다. 원문은 노드에 보관해 KO로 되돌린다. */
(function(){
var EN={
"적용 분야":"Applications","진행 절차":"Process","서비스":"Services","인증서":"Certificates","서비스 요청":"Request Service",
"해양 안전의":"Your Trusted Partner","믿음직한 파트너":"in Marine Safety",
"해양 산업을 위한 안전성, 신뢰성, 그리고 기술적 우수성.":"Safety, Reliability and Technical Excellence for the Maritime Industry.",
"서비스 요청하기":"Request Service","서비스 보기":"View Services",
"안전은 단순한 사업이 아니라":"Safety is not just our business.","우리의 약속입니다":"It is our commitment.",
"구명정과 소방설비(FFE)의 점검·정비, LOAD TEST까지 한 곳에서 처리합니다.":"Inspection, maintenance and LOAD TEST of lifeboats and fire-fighting equipment (FFE), all in one place.",
"인증 현황 보기":"View Certificates",
"다양한 선종과 해양 시설의 안전 설비를 관리합니다":"We manage safety equipment for a wide range of vessel types and offshore facilities",
"상선·화물선":"Merchant & Cargo Vessels","미군함":"U.S. Naval Vessels","조선소 신조·수리":"Shipyard Newbuilding & Repair","여객선":"Passenger Vessels","어선·작업선":"Fishing & Work Vessels","유조선·화학제품선":"Tankers & Chemical Carriers","해양플랜트·OFFSHORE":"Offshore Platforms","관공선·군함":"Government & Naval Vessels",
"모든 선종에 구명정 점검·정비(연차검사, 5년차검사), 소방설비(FFE) 점검, 구명설비(LSA) 점검, LOAD TEST를 제공합니다.":"For all vessel types we provide lifeboat inspection & maintenance (annual and 5-year surveys), FFE inspection, LSA inspection and LOAD TEST.",
"서비스 요청부터 완료 보고까지 5단계":"Five steps from service request to completion report",
"문의부터 완료 보고까지 단계별로 진행 상황을 공유합니다.":"We keep you updated at every step, from inquiry to completion report.",
"선박 정보와 작업 내용을 접수합니다.":"We receive your vessel information and work details.",
"견적 안내":"Quotation","작업 범위와 일정, 비용을 안내합니다.":"We provide the scope of work, schedule and cost.",
"현장 점검":"Site Inspection","엔지니어가 설비 상태를 확인합니다.":"Our engineers check the condition of the equipment.",
"검사":"Testing & Inspection","작동시험과 하중시험 등 항목별 검사를 수행합니다.":"We carry out item-by-item inspections, including operational and load tests.",
"완료 보고":"Completion Report","점검 결과서와 증빙 자료를 제출합니다.":"We submit inspection results and supporting documents.",
"SM KOREA가 하는 일":"What SM KOREA Does",
"구명정과 소방설비(FFE)의 점검·정비, LOAD TEST까지 한 곳에서 처리합니다. 네 가지 서비스를 나란히 비교해 보세요.":"Inspection, maintenance and LOAD TEST of lifeboats and fire-fighting equipment (FFE), all in one place. Compare the four services side by side.",
"구명정 점검·정비":"Lifeboat Inspection & Maintenance","소방설비(FFE) 점검":"Fire-Fighting Equipment (FFE) Inspection","구명설비(LSA) 점검":"Life-Saving Appliances (LSA) Inspection","하중 시험 (LOAD TEST)":"LOAD TEST",
"3D로 보기":"View in 3D","자세히 보기":"View details","이 구간 건너뛰기 ↓":"Skip this section ↓","점검 대상":"Scope",
"구명정 선체, 진수 장치, 엔진, 훅 릴리즈 장치":"Lifeboat hull, launching appliances, engine, hook release gear",
"소화기, 소화 배관, 소화 펌프, 화재 감지·경보 장치":"Fire extinguishers, piping, pumps, fire detection and alarm systems",
"선박의 구명설비":"Ship life-saving appliances","구명정과 진수 장치, 크레인":"Lifeboats, launching appliances, cranes",
"세부 항목":"Items","개":"items","대표 항목":"Key items","적용 선종":"Vessel types","모든 선종":"All vessel types",
"점검 결과서와 증빙 자료":"Inspection results and supporting documents",
"구명정과 소방설비를 한 곳에서 관리하세요":"Manage your lifeboats and fire-fighting equipment in one place",
"정기 검사 준비부터 수리까지 같은 팀이 맡습니다.":"The same team handles everything from periodic survey preparation to repairs.",
"구명정 선체, 진수 장치, 엔진 및 훅 릴리즈 장치를 정기적으로 점검하고 정비합니다.":"Periodic inspection and repair of the lifeboat hull, launching appliances, engine and hook release gear.",
"소화기, 소화 배관, 소화 펌프, 화재 감지·경보 장치를 점검하고 성능을 확인합니다.":"We inspect fire extinguishers, fire-fighting piping, pumps and fire detection and alarm systems, and verify their performance.",
"선박의 구명설비를 점검하고 성능을 확인합니다.":"Inspection and performance checks of ship life-saving appliances.",
"구명정과 진수 장치의 하중 시험(Load Test)을 수행하고 결과 보고서를 제출합니다.":"We perform load tests on lifeboats and launching appliances and submit a test report.",
"점검 항목 닫기":"Close items",
"훅 릴리즈 장치":"Hook release gear","이탈 장치 작동 점검":"Release gear operation check","엔진·추진부":"Engine & propulsion","엔진 및 추진 계통 정비":"Engine and propulsion maintenance","선체":"Hull","선체와 해치 상태 점검":"Hull and hatch condition check","진수 와이어":"Launching wire",
"실린더 밸브":"Cylinder valves","용기·밸브 점검":"Cylinder and valve inspection","소화 배관":"Fire-fighting piping","매니폴드·배관 점검":"Manifold and piping inspection","압력 게이지":"Pressure gauge","성능 확인":"Performance check",
"반사 테이프":"Reflective tape","LIFEBUOY 상태 점검":"LIFEBUOY condition check","붙잡이 줄":"Grab line","구명설비(LSA) 성능 확인":"LSA performance check",
"로드셀":"Load cell","하중 계측·결과 보고서":"Load measurement and test report","워터백":"Water bag","하중 시험(LOAD TEST)":"LOAD TEST","크레인 훅":"Crane hook",
"드래그하면 직접 돌려 볼 수 있습니다":"Drag to rotate the model",
"SM KOREA에게 안전은 단순한 사업이 아니라":"At SM KOREA, safety is not just our business — it is","우리의 약속":"our commitment","입니다.":".",
"라이센스, 선급, 기국별 승인 및 인증 현황":"Approvals and certifications by licensor, classification society and flag state",
"제조사 서비스 엔지니어 인증과 선급·기국 승인을 보유하고 있습니다.":"We hold manufacturer service-engineer certifications and classification society and flag state approvals.",
"제조사 라이센스":"Manufacturer licenses","선급 승인":"Class approvals","기국 승인":"Flag state approvals",
"라이센스":"Licenses","선급":"Classification Societies","기국":"Flag States","유효기간 만료":"Expired","만료 임박":"Expiring soon","구명정":"Lifeboat","소방설비(FFE)":"FFE",
"증서 원본이 필요하시면 문의해 주세요.":"Please contact us if you need copies of the certificates.",
"서비스 요청 및 견적 문의":"Service Request & Quotation Inquiry",
"선박명과 작업 내용을 남겨 주시면 담당자가 확인 후 연락드립니다.":"Leave your vessel name and work details, and our team will contact you after review.",
"네이버 지도":"Naver Map","구글 지도":"Google Map","회사명":"Company Name","담당자 / 연락처":"Contact Person / Phone","서비스 종류":"Service Type","선박명 / 입항 항구 / 요청 내용":"Vessel Name / Port of Call / Request Details",
"견적 요청 메일 작성하기":"Write Quotation Request Email",
"메일 앱이 열리지 않으면 아래 내용을 복사해":"If your mail app does not open, copy the text below and send it to","으로 보내 주세요.":".",
"내용 복사":"Copy text","복사했습니다":"Copied","복사하지 못했습니다. 직접 선택해 복사해 주세요":"Could not copy. Please select the text and copy it yourself",
"SM KOREA 홈페이지":"SM KOREA Homepage",
/* 대체 텍스트·라벨 */
"SM KOREA 홈":"SM KOREA Home","SM KOREA 로고":"SM KOREA logo","메뉴 열기":"Open menu","주요 메뉴":"Main menu","대표 화면":"Hero",
"선박 측면에 설치된 구명정과 데빗":"Lifeboats and davits installed along the side of a vessel","항해 중인 선박 측면에 줄지어 설치된 구명정":"Lifeboats lined along the side of a vessel under way",
"문의":"Contact","이전 슬라이드":"Previous slide","다음 슬라이드":"Next slide","맨 위로":"Back to top","이전 분야":"Previous","다음 분야":"Next","슬라이드 일시정지":"Pause slides","슬라이드 재생":"Play slides","1번 슬라이드":"Slide 1","2번 슬라이드":"Slide 2",
"서비스 비교표":"Service comparison table","제공 서비스":"Our Services","스크롤과 드래그로 회전하는 3D 설비 모델":"3D equipment model that rotates as you scroll or drag",
"와이어에 매달린 주황색 밀폐형 구명정":"Orange enclosed lifeboat hanging from wires","붉은 CO2 소화 가스 실린더 6본과 매니폴드 배관":"Six red CO2 cylinders with manifold piping","주황색 구명부환과 구명조끼":"Orange lifebuoy and life jacket","크레인 훅과 로드셀에 매달린 파란색 하중 시험 워터백":"Blue load-test water bag hanging from a crane hook and load cell",
"미군함의 구명·소방 설비 점검을 울산에서 지원합니다":"Lifeboat and fire-fighting equipment service for U.S. naval vessels, from Ulsan",
"한국에서 정기 수리를 받는 미군함의 구명정, 소방설비(FFE), 구명설비(LSA) 점검과 LOAD TEST를 수행합니다. 입항 전에 미리 문의해 주시면 작업 범위와 일정을 안내해 드립니다.":"We carry out lifeboat, FFE and LSA inspection and LOAD TEST for U.S. naval vessels undergoing scheduled repair in Korea. Contact us ahead of your port call and we will advise the scope of work and schedule.",
"미국 메이커 서비스 라이센스 보유":"Licensed service provider for a U.S. maker","구명정·소방설비(FFE) 선급 승인":"Class approval for lifeboat and FFE service","울산 남구 소재, 본선 점검과 자사 공장 테스트 병행":"Based in Nam-gu, Ulsan. On-board inspection and in-house workshop testing",
"항해 중인 군함":"Naval vessel under way","미국 메이커":"U.S. maker",
"항목을 누르면 작동 영상·사진이 열립니다":"Select an item to see it in operation","스프링클러 수막 탈출 영상":"Sprinkler water-curtain escape video",
"이 항목의 영상·사진은 준비 중입니다.":"Video and photos for this item are being prepared.","닫기":"Close",
"인증 구분":"Certificate type","적용 분야 목록":"Applications"};
var HAN=/[가-힣]/,lang='ko',titleKo=document.title;
function tr(k){if(EN[k])return EN[k];var m=/^점검 항목 (\d+)개 보기$/.exec(k);return m?'View '+m[1]+' items':null}
function attr(e,a){var key='__ko_'+a,v=e.getAttribute(a);if(v==null)return;if(HAN.test(v))e[key]=v;if(e[key]===undefined)return;var t=lang==='en'?tr(e[key]):null;e.setAttribute(a,t||e[key])}
function apply(l){
  lang=l;window.SMLANG=l;
  var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),n;
  while(n=w.nextNode()){var p=n.parentNode;if(!p||/^(SCRIPT|STYLE|PRE|TEXTAREA)$/.test(p.nodeName))continue;
    if(HAN.test(n.nodeValue))n.__ko=n.nodeValue;if(n.__ko===undefined)continue;
    var k=n.__ko.trim(),t=l==='en'?tr(k):null,v=t?n.__ko.replace(k,function(){return t}):n.__ko;if(n.nodeValue!==v)n.nodeValue=v}
  Array.prototype.forEach.call(document.querySelectorAll('[alt],[aria-label]'),function(e){attr(e,'alt');attr(e,'aria-label')});
  document.title=l==='en'?EN[titleKo]||titleKo:titleKo;document.documentElement.lang=l;
  Array.prototype.forEach.call(document.querySelectorAll('.lang button'),function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-lang')===l))});
}
Array.prototype.forEach.call(document.querySelectorAll('.lang button'),function(b){b.addEventListener('click',function(){var l=b.getAttribute('data-lang');apply(l);try{localStorage.setItem('smlang',l)}catch(e){}})});
/* 버튼을 눌러 문구가 바뀌는 경우(점검 항목 열기·복사 등) 현재 언어로 다시 맞춘다 */
document.addEventListener('click',function(e){if(lang==='en'&&!(e.target.closest&&e.target.closest('.lang')))setTimeout(function(){apply('en')},0)});
var saved=null;try{saved=localStorage.getItem('smlang')}catch(e){}
/* 저장된 선택이 없으면 기기 언어를 따른다: 한국어 기기만 KO, 그 외는 EN */
var auto=/^ko\b/i.test(navigator.language||'')?'ko':'en';
window.SMLANG='ko';if((saved||auto)==='en')apply('en');
})();
