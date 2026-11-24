/* SM KOREA 서비스 3D 장면: Three.js로 구명정·CO2 실린더 랙·구명부환·워터백을 코드로 모델링하고
   스크롤 진행률(idx, loc)에 따라 회전·이동시킨다. 드래그로 직접 돌릴 수 있다. */
(function(){
var T=window.THREE;if(!T)return;
function mat(o){return new T.MeshPhysicalMaterial(o)}
var M={
  orange:mat({color:0xe2440c,roughness:.46,clearcoat:.55,clearcoatRoughness:.3,envMapIntensity:.75}),
  red:mat({color:0xb80f0f,roughness:.3,clearcoat:.85,clearcoatRoughness:.18,envMapIntensity:.8}),
  steel:mat({color:0xc6cace,metalness:1,roughness:.3}),
  frame:mat({color:0x8d949b,metalness:.9,roughness:.45}),
  dark:mat({color:0x14181c,roughness:.8}),
  glass:mat({color:0x0b1822,roughness:.05,metalness:.5}),
  rope:mat({color:0xf2eee6,roughness:.95}),
  brass:mat({color:0xc79a36,metalness:1,roughness:.32}),
  yellow:mat({color:0xf2b400,roughness:.45,clearcoat:.4}),
  blue:mat({envMapIntensity:.7,color:0x164fc0,roughness:.4,clearcoat:.55,clearcoatRoughness:.4,side:T.DoubleSide}),
  white:mat({color:0xf5f5f2,roughness:.5}),
  reflect:mat({color:0xe6ecf0,roughness:.22,metalness:.7}),
  screen:mat({color:0x8fb39a,roughness:.3,emissive:0x2c4a36})
};
function mesh(g,m,p,r,s){var o=new T.Mesh(g,m);if(p)o.position.set(p[0],p[1],p[2]);if(r)o.rotation.set(r[0],r[1],r[2]);if(s)o.scale.set(s[0],s[1],s[2]);return o}
function V(p){return new T.Vector3(p[0],p[1],p[2])}
function tube(pts,rad,m,closed,seg){var c=new T.CatmullRomCurve3(pts.map(V),!!closed);return new T.Mesh(new T.TubeGeometry(c,seg||Math.max(24,pts.length*8),rad,10,!!closed),m)}
function cyl(a,b,rad,m){var va=V(a),vb=V(b),d=vb.clone().sub(va),o=new T.Mesh(new T.CylinderGeometry(rad,rad,d.length(),16),m);o.position.copy(va.clone().add(vb).multiplyScalar(.5));o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize());return o}
function sg(v){return v<0?-1:1}

/* ---------- 구명정 ---------- */
var SX=2.85,SY=.98,SZ=1.02,EA=.58,EB=.78;
function taper(X){var t=X/SX;return t>0?1-.24*t*t*t:1+.06*t*t*t}
function ky(Y){return Y<0?.9:.96}
function surfZ(X,Y){var px=Math.pow(Math.abs(X)/SX,1/EA),f=taper(X),py=Math.pow(Math.abs(Y)/(SY*f*ky(Y)),1/EB),q=1-px*px-py*py;return q<=0?0:SZ*f*Math.pow(Math.sqrt(q),EB)}
function topY(X,Z){var px=Math.pow(Math.abs(X)/SX,1/EA),f=taper(X),pz=Math.pow(Math.abs(Z)/(SZ*f),1/EB),q=1-px*px-pz*pz;return q<=0?0:.96*SY*f*Math.pow(Math.sqrt(q),EB)}
function lifeboat(){
  var g=new T.Group(),geo=new T.SphereGeometry(1,120,80),p=geo.attributes.position,i,x,y,z,X,f;
  for(i=0;i<p.count;i++){x=p.getX(i);y=p.getY(i);z=p.getZ(i);X=SX*sg(x)*Math.pow(Math.abs(x),EA);f=taper(X);
    p.setXYZ(i,X,SY*f*sg(y)*Math.pow(Math.abs(y),EB)*ky(y),SZ*f*sg(z)*Math.pow(Math.abs(z),EB))}
  geo.computeVertexNormals();g.add(new T.Mesh(geo,M.orange));
  // 고무 펜더(선체 둘레)
  var rail=[],t;for(i=0;i<64;i++){t=i/64*Math.PI*2;X=SX*sg(Math.cos(t))*Math.pow(Math.abs(Math.cos(t)),EA);f=taper(X);rail.push([X*1.004,.02,SZ*f*sg(Math.sin(t))*Math.pow(Math.abs(Math.sin(t)),EB)*1.004])}
  g.add(tube(rail,.062,M.dark,true,200));
  // 용골
  g.add(mesh(new T.BoxGeometry(3.4,.14,.12),M.orange,[-.1,-.9,0]));
  [-1.2,0,1.1].forEach(function(xx){[1,-1].forEach(function(s){g.add(mesh(new T.BoxGeometry(.16,.2,.1),M.orange,[xx,-.86,s*.42],[s*.35,0,0]))})});
  // 조타실
  var tw=new T.BoxGeometry(1.05,.62,1.02,1,1,1),tp=tw.attributes.position;
  for(i=0;i<tp.count;i++){if(tp.getY(i)>0){tp.setX(i,tp.getX(i)*.78+.04);tp.setZ(i,tp.getZ(i)*.76)}}
  tw.computeVertexNormals();var tower=new T.Group();tower.position.set(-1.1,1.12,0);tower.add(new T.Mesh(tw,M.orange));
  tower.add(mesh(new T.BoxGeometry(.03,.27,.66),M.glass,[.492,.06,0],[0,0,.2]));
  tower.add(mesh(new T.BoxGeometry(.035,.33,.74),M.steel,[.478,.06,0],[0,0,.2]));
  [1,-1].forEach(function(s){
    tower.add(mesh(new T.BoxGeometry(.3,.24,.03),M.glass,[.2,.06,s*.466],[s*-.2,0,0]));
    tower.add(mesh(new T.BoxGeometry(.36,.3,.03),M.steel,[.2,.06,s*.455],[s*-.2,0,0]));
    tower.add(mesh(new T.BoxGeometry(.22,.24,.03),M.glass,[-.2,.06,s*.466],[s*-.2,0,0]));
    tower.add(mesh(new T.BoxGeometry(.28,.3,.03),M.steel,[-.2,.06,s*.455],[s*-.2,0,0]))});
  tower.add(tube([[.36,.33,.34],[.36,.45,.34],[-.3,.45,.34],[-.3,.45,-.34],[.36,.45,-.34],[.36,.33,-.34]],.018,M.steel));
  tower.add(mesh(new T.CylinderGeometry(.06,.07,.12,20),M.steel,[0,.37,0]));
  tower.add(mesh(new T.SphereGeometry(.055,16,12),M.steel,[0,.44,0]));
  g.add(tower);
  // 측면 해치·현창·핸드레일·구명줄
  [1,-1].forEach(function(s){
    var hx=.35,hy=.44,z0=surfZ(hx,hy),sl=Math.atan2(surfZ(hx,hy-.25)-surfZ(hx,hy+.25),.5),h=new T.Group();
    h.position.set(hx,hy,s*(z0+.012));h.rotation.x=s*sl;
    h.add(mesh(new T.BoxGeometry(.62,.6,.035),M.orange));
    h.add(mesh(new T.BoxGeometry(.1,.035,.05),M.steel,[.27,.18,s*.02]));h.add(mesh(new T.BoxGeometry(.1,.035,.05),M.steel,[.27,-.18,s*.02]));
    h.add(mesh(new T.BoxGeometry(.035,.12,.05),M.steel,[-.26,0,s*.02]));g.add(h);
    [1.15,1.6].forEach(function(px){var py=.5,pz=surfZ(px,py),pr=mesh(new T.CylinderGeometry(.085,.085,.04,24),M.glass,[px,py,s*(pz+.005)],[Math.PI/2-s*.5,0,0]);g.add(pr);
      g.add(mesh(new T.TorusGeometry(.09,.016,10,28),M.steel,[px,py,s*(pz+.012)],[-s*.5,0,0]))});
    var hr=[],xx;for(xx=-.45;xx<=1.75;xx+=.2){hr.push([xx,topY(xx,.4)+.15,s*.4])}
    g.add(tube(hr,.02,M.steel));
    for(xx=-.45;xx<=1.75;xx+=.55){g.add(cyl([xx,topY(xx,.4)-.02,s*.4],[xx,topY(xx,.4)+.15,s*.4],.016,M.steel))}
    var gl=[],n=8,a,b,k;for(k=0;k<=n;k++){a=-1.95+k*(3.9/n);gl.push([a,-.2,s*(surfZ(a,-.2)+.035)]);g.add(mesh(new T.SphereGeometry(.04,12,10),M.steel,[a,-.2,s*(surfZ(a,-.2)+.03)]));
      if(k<n){var st=3.9/n;[[.22,-.36],[.5,-.44],[.78,-.36]].forEach(function(q){b=a+st*q[0];gl.push([b,q[1],s*(surfZ(b,q[1])+.045)])})}}
    g.add(tube(gl,.02,M.rope,false,320));
  });
  // 추진부
  var prop=new T.Group();prop.position.set(-2.82,-.5,0);
  g.add(mesh(new T.TorusGeometry(.3,.06,16,40),M.orange,[-2.82,-.5,0],[0,Math.PI/2,0],[1,1,2.2]));
  g.add(cyl([-2.4,-.5,0],[-2.86,-.5,0],.05,M.brass));
  g.add(mesh(new T.BoxGeometry(.3,.5,.06),M.orange,[-2.68,-.2,0]));
  for(i=0;i<4;i++){var bl=mesh(new T.SphereGeometry(1,16,10),M.brass,null,null,[.02,.15,.085]);bl.position.set(0,Math.cos(i*Math.PI/2)*.15,Math.sin(i*Math.PI/2)*.15);bl.rotation.x=i*Math.PI/2;bl.rotation.y=.5;prop.add(bl)}
  prop.add(mesh(new T.SphereGeometry(.06,16,12),M.brass));g.add(prop);g.userData.prop=prop;
  // 훅·와이어
  [2.0,-2.2].forEach(function(hx){var y0=topY(hx,0);
    g.add(mesh(new T.BoxGeometry(.16,.12,.1),M.steel,[hx,y0+.04,0]));
    g.add(mesh(new T.TorusGeometry(.085,.024,10,24),M.steel,[hx,y0+.17,0]));
    g.add(mesh(new T.TorusGeometry(.1,.036,12,28,Math.PI*1.45),M.yellow,[hx,y0+.36,0],[0,0,-.6]));
    g.add(mesh(new T.TorusGeometry(.07,.022,10,24),M.steel,[hx,y0+.53,0],[0,Math.PI/2,0]));
    g.add(cyl([hx,y0+.58,0],[hx,y0+.8,0],.04,M.steel));
    g.add(cyl([hx,y0+.8,0],[hx,y0+14,0],.026,M.frame))});
  g.userData.hot=[{p:[2.0,topY(2.0,0)+.36,0],t:'훅 릴리즈 장치',d:'이탈 장치 작동 점검'},{p:[-2.82,-.5,.3],t:'엔진·추진부',d:'엔진 및 추진 계통 정비'},{p:[.35,.44,surfZ(.35,.44)+.05],t:'선체',d:'선체와 해치 상태 점검'},{p:[-2.2,2.4,0],t:'진수 와이어',d:'WIRE REPLACEMENT'}];
  g.scale.setScalar(.86);return g}

/* ---------- CO2 실린더 랙 ---------- */
function rack(){
  var g=new T.Group(),i,x;
  for(i=0;i<6;i++){x=(i-2.5)*.36;
    g.add(mesh(new T.CylinderGeometry(.15,.15,1.4,40),M.red,[x,0,0]));
    g.add(mesh(new T.SphereGeometry(.15,40,20,0,Math.PI*2,0,Math.PI/2),M.red,[x,.7,0],null,[1,1.15,1]));
    g.add(mesh(new T.CylinderGeometry(.15,.13,.05,40),M.red,[x,-.72,0]));
    g.add(mesh(new T.CylinderGeometry(.045,.05,.1,20),M.red,[x,.9,0]));
    g.add(mesh(new T.BoxGeometry(.1,.11,.1),M.brass,[x,1,0]));
    g.add(cyl([x,1,0],[x+.12,1,0],.03,M.brass));g.add(mesh(new T.CylinderGeometry(.05,.05,.03,16),M.brass,[x,1.08,0]));
    g.add(tube([[x,1.08,0],[x,1.25,-.02],[x+.04,1.42,-.12],[x+.04,1.58,-.16]],.03,M.dark));
    g.add(mesh(new T.CylinderGeometry(.04,.04,.07,16),M.steel,[x+.04,1.6,-.16]));
    [.32,-.38].forEach(function(y){g.add(mesh(new T.TorusGeometry(.155,.014,8,40),M.steel,[x,y,0],[Math.PI/2,0,0]))});
  }
  g.add(cyl([-1.25,1.66,-.16],[1.2,1.66,-.16],.055,M.steel));
  g.add(mesh(new T.CylinderGeometry(.1,.1,.04,24),M.steel,[-1.25,1.66,-.16],[0,0,Math.PI/2]));
  g.add(tube([[1.2,1.66,-.16],[1.32,1.66,-.16],[1.38,1.6,-.16],[1.38,1.46,-.16]],.055,M.steel));
  g.add(mesh(new T.CylinderGeometry(.09,.09,.03,24),M.steel,[1.38,1.45,-.16]));
  g.add(cyl([.95,1.7,-.16],[.95,1.84,-.16],.018,M.brass));
  g.add(mesh(new T.CylinderGeometry(.1,.1,.05,32),M.steel,[.95,1.94,-.16],[Math.PI/2,0,0]));
  g.add(mesh(new T.CylinderGeometry(.085,.085,.052,32),M.white,[.95,1.94,-.158],[Math.PI/2,0,0]));
  g.add(mesh(new T.BoxGeometry(.008,.07,.004),M.dark,[.95,1.96,-.13],[0,0,-.7]));
  [-1.14,1.14].forEach(function(fx){[.24,-.3].forEach(function(fz){g.add(mesh(new T.BoxGeometry(.07,2.5,.07),M.frame,[fx,.42,fz]))});
    g.add(mesh(new T.BoxGeometry(.07,.07,.6),M.frame,[fx,-.8,-.03]));g.add(mesh(new T.BoxGeometry(.07,.07,.6),M.frame,[fx,1.2,-.03]));
    g.add(mesh(new T.BoxGeometry(.2,.03,.2),M.frame,[fx,-.84,.24]));g.add(mesh(new T.BoxGeometry(.2,.03,.2),M.frame,[fx,-.84,-.3]))});
  [[-.8,.24],[-.8,-.3],[1.2,.24],[1.2,-.3],[.32,.2],[-.38,.2]].forEach(function(b){g.add(mesh(new T.BoxGeometry(2.3,.06,.04),M.frame,[0,b[0],b[1]]))});
  g.add(cyl([-1.14,-.8,-.3],[-1.14,1.2,.24],.022,M.frame));
  g.userData.hot=[{p:[-.9,1,.12],t:'실린더 밸브',d:'용기·밸브 점검'},{p:[0,1.66,-.1],t:'소화 배관',d:'매니폴드·배관 점검'},{p:[.95,1.94,-.1],t:'압력 게이지',d:'성능 확인'}];
  g.position.y=-.5;var w=new T.Group();w.add(g);w.userData.hot=g.userData.hot;w.userData.inner=g;w.scale.setScalar(1.22);return w}

/* ---------- 구명부환 ---------- */
function buoy(){
  var g=new T.Group(),i,a;
  g.add(new T.Mesh(new T.TorusGeometry(.66,.185,32,120),M.orange));
  for(i=0;i<4;i++){a=i*Math.PI/2+Math.PI/4;g.add(mesh(new T.TorusGeometry(.66,.192,32,20,.4),M.reflect,null,[0,0,a-.2]))}
  var rp=[];for(i=0;i<16;i++){a=i/16*Math.PI*2;var r=i%4===0?.86:(i%2?.98:1.03);rp.push([Math.cos(a)*r,Math.sin(a)*r,i%4===0?0:.05])}
  g.add(tube(rp,.026,M.rope,true,220));
  for(i=0;i<4;i++){a=i*Math.PI/2;g.add(mesh(new T.BoxGeometry(.12,.1,.16),M.orange,[Math.cos(a)*.84,Math.sin(a)*.84,0],[0,0,a]))}
  g.userData.hot=[{p:[.47,.47,.2],t:'반사 테이프',d:'LIFEBUOY 상태 점검'},{p:[-1,0,.05],t:'붙잡이 줄',d:'구명설비(LSA) 성능 확인'}];
  g.scale.setScalar(1.45);return g}

/* ---------- 하중 시험 워터백 ---------- */
function bag(){
  var g=new T.Group(),i,a,prof=[[.05,-1],[.3,-.96],[.58,-.78],[.8,-.48],[.88,-.12],[.82,.24],[.64,.56],[.42,.8],[.27,.95],[.22,1.02]];
  var pts=new T.SplineCurve(prof.map(function(p){return new T.Vector2(p[0],p[1])})).getPoints(60);
  g.add(new T.Mesh(new T.LatheGeometry(pts,96),M.blue));
  var sp=pts.map(function(p){return new T.Vector2(p.x*1.012+.004,p.y)});
  for(i=0;i<8;i++){a=i/8*Math.PI*2;g.add(new T.Mesh(new T.LatheGeometry(sp,6,a-.07,.14),M.yellow));
    g.add(cyl([Math.sin(a)*.23,1.02,Math.cos(a)*.23],[Math.sin(a)*.03,1.6,Math.cos(a)*.03],.02,M.yellow))}
  g.add(mesh(new T.TorusGeometry(.225,.035,12,40),M.blue,[0,1.02,0],[Math.PI/2,0,0]));
  g.add(mesh(new T.TorusGeometry(.1,.03,12,28),M.steel,[0,1.68,0]));
  g.add(mesh(new T.BoxGeometry(.34,.28,.16),M.frame,[0,1.96,0]));g.add(mesh(new T.BoxGeometry(.2,.09,.02),M.screen,[0,1.99,.082]));
  g.add(mesh(new T.TorusGeometry(.085,.028,12,28),M.steel,[0,2.18,0]));
  g.add(mesh(new T.TorusGeometry(.13,.045,14,30,Math.PI*1.45),M.yellow,[0,2.42,0],[0,0,-2.2]));
  g.add(cyl([0,2.52,0],[0,2.72,0],.05,M.steel));
  g.add(mesh(new T.BoxGeometry(.4,.46,.22),M.yellow,[0,2.94,0]));g.add(mesh(new T.CylinderGeometry(.06,.06,.26,20),M.steel,[0,2.96,0],[Math.PI/2,0,0]));
  [-.1,.1].forEach(function(x){g.add(cyl([x,3.17,0],[x,16,0],.026,M.frame))});
  g.add(cyl([0,-1,0],[0,-1.14,0],.055,M.steel));g.add(mesh(new T.BoxGeometry(.14,.03,.03),M.red,[.08,-1.08,0]));
  g.add(tube([[0,-1.14,0],[0,-1.3,0],[.12,-1.4,0],[.4,-1.42,0]],.04,M.blue));
  g.userData.hot=[{p:[0,1.96,.12],t:'로드셀',d:'하중 계측·결과 보고서'},{p:[.86,-.1,.2],t:'워터백',d:'하중 시험(LOAD TEST)'},{p:[0,2.42,.1],t:'크레인 훅',d:'CRANE LOAD TEST'}];
  g.position.y=-.95;var w=new T.Group();w.add(g);w.userData.hot=g.userData.hot;w.userData.inner=g;w.scale.setScalar(.82);return w}

/* ---------- 장면 ---------- */
var S={ok:false};
// 모델별 연출: 기본 회전, 스크롤 구간 동안 도는 양(yaw), 위아래 기울임 폭(pitch)
var CH=[{yaw0:.35,turn:Math.PI*2.25,pitch:.42,roll:.0},{yaw0:-.5,turn:Math.PI*1.5,pitch:.22},{yaw0:-.9,turn:Math.PI*1.9,pitch:.3},{yaw0:-.3,turn:Math.PI*1.6,pitch:.2}];
S.start=function(box,hotLayer){
  var renderer;try{renderer=new T.WebGLRenderer({antialias:true,alpha:true})}catch(e){return false}
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=.86;
  var cv=renderer.domElement;cv.className='gl';cv.setAttribute('aria-label','스크롤과 드래그로 회전하는 3D 설비 모델');cv.setAttribute('role','img');box.insertBefore(cv,box.firstChild);
  var scene=new T.Scene(),cam=new T.PerspectiveCamera(27,1,.1,100);cam.position.set(0,.15,11.5);
  var es=new T.Scene();es.background=new T.Color(0x7d858e);
  function pan(w,h,p,v){var m=new T.Mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({color:new T.Color(v,v,v),side:T.DoubleSide}));m.position.set(p[0],p[1],p[2]);m.lookAt(0,0,0);es.add(m)}
  pan(14,7,[0,11,3],6);pan(7,9,[-11,3,5],3);pan(6,8,[11,1,-2],2.2);pan(10,5,[2,2,12],1);pan(24,24,[0,-11,0],.35);
  var pm=new T.PMREMGenerator(renderer);scene.environment=pm.fromScene(es,.04).texture;
  var key=new T.DirectionalLight(0xfff4e6,1.25);key.position.set(5,7,8);scene.add(key);scene.add(new T.AmbientLight(0xffffff,.12));
  var models=[lifeboat(),rack(),buoy(),bag()],pivots=models.map(function(m){var p=new T.Group();p.add(m);p.visible=false;scene.add(p);return p});
  // 핫스폿
  var hots=[];models.forEach(function(m,i){(m.userData.hot||[]).forEach(function(h){var b=document.createElement('button');b.type='button';b.className='hs';b.innerHTML='<i></i><span><b>'+h.t+'</b>'+h.d+'</span>';
    b.addEventListener('click',function(){b.classList.toggle('open')});hotLayer.appendChild(b);hots.push({el:b,i:i,m:m.userData.inner||m,v:V(h.p)})})});
  var st={idx:0,loc:0,cur:0,uy:0,up:0,vy:0,drag:false,lx:0,ly:0,run:false,W:1,H:1,t0:performance.now()};
  function size(){st.W=box.clientWidth;st.H=box.clientHeight;renderer.setSize(st.W,st.H,false);cam.aspect=st.W/st.H;cam.updateProjectionMatrix()}
  size();if(window.ResizeObserver)new ResizeObserver(size).observe(box);else window.addEventListener('resize',size);
  cv.addEventListener('pointerdown',function(e){st.drag=true;st.lx=e.clientX;st.ly=e.clientY;cv.setPointerCapture(e.pointerId);cv.classList.add('grabbing');box.classList.add('dragged')});
  cv.addEventListener('pointermove',function(e){if(!st.drag)return;st.uy+=(e.clientX-st.lx)*.008;st.up=Math.max(-.9,Math.min(.9,st.up+(e.clientY-st.ly)*.006));st.lx=e.clientX;st.ly=e.clientY});
  function up(){st.drag=false;cv.classList.remove('grabbing')}cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
  function sm(x){x=Math.max(0,Math.min(1,x));return x*x*(3-2*x)}
  var tmp=new T.Vector3(),ctr=new T.Vector3();
  function frame(now){
    if(!st.run)return;requestAnimationFrame(frame);
    var t=(now-st.t0)/1000,i=st.idx,c=CH[i];st.cur+=(st.loc-st.cur)*.09;var l=st.cur;
    if(!st.drag){st.uy*=.965;st.up*=.965}
    var off=Math.min(2.1,st.W/st.H*1.05),x=off;
    if(i>0)x+=(1-sm(l/.16))*9;if(i<models.length-1)x-=sm((l-.84)/.16)*11;
    pivots.forEach(function(p,k){p.visible=k===i});
    var p=pivots[i];p.position.set(x,Math.sin(t*.9)*.05+.15,0);
    p.rotation.y=c.yaw0+(l-.5)*c.turn+st.uy;p.rotation.x=Math.sin((l-.15)*Math.PI*1.7)*c.pitch+.12+st.up;p.rotation.z=Math.sin(t*.7)*.025;
    var sc=.86+.14*sm(l/.2)-.1*sm((l-.8)/.2);p.scale.setScalar(sc);
    var pr=models[0].userData.prop;if(pr)pr.rotation.x=t*5;
    renderer.render(scene,cam);
    p.getWorldPosition(ctr);var dc=ctr.distanceTo(cam.position);
    hots.forEach(function(h){if(h.i!==i){h.el.style.opacity=0;h.el.style.pointerEvents='none';return}
      tmp.copy(h.v);h.m.localToWorld(tmp);var d=tmp.distanceTo(cam.position);tmp.project(cam);
      var vis=d<dc+.25&&Math.abs(tmp.x)<.98&&Math.abs(tmp.y)<.9&&l>.14&&l<.86;
      h.el.style.transform='translate('+((tmp.x*.5+.5)*st.W).toFixed(1)+'px,'+((-tmp.y*.5+.5)*st.H).toFixed(1)+'px)';
      h.el.style.opacity=vis?1:0;h.el.style.pointerEvents=vis?'auto':'none';if(!vis)h.el.classList.remove('open')});
  }
  S.set=function(idx,loc){if(idx!==st.idx){st.cur=idx>st.idx?0:1;st.idx=idx;st.uy=0;st.up=0}st.loc=loc};
  S.run=function(on){if(on&&!st.run){st.run=true;requestAnimationFrame(frame)}else if(!on)st.run=false};
  S.ok=true;return true};
window.SMScene=S;
})();
