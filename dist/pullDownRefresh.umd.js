!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.pullDownRefresh=e.pullDownRefresh||{})}(this,function(e){function t(e){L=e.callback,i(),r()}function n(){d(M),j=!1,i(),r()}function o(){console.log("load!!!"),u(),f("Loading..."),j=!0,d(0),L()}function i(){s=M,h=p=15,g=m=Y/15,y=[Y/2,M-p],v=[Y/2,M-p],b=[v[0]-m/2,v[1]],x=[Y/2,v[1]],P=[y[0]-g/2,y[1]],T=[v[0]+m/2,v[1]],w=x,S=[y[0]+g/2,y[1]]}function c(){D.beginPath(),D.arc(y[0],y[1],g/2,0,2*Math.PI),D.strokeStyle=R,D.fillStyle=R,D.fill(),D.beginPath(),D.arc(v[0],v[1],m/2,0,2*Math.PI),D.strokeStyle=R,D.fill()}function l(){D.beginPath(),D.moveTo(b[0],b[1]),D.quadraticCurveTo(x[0],x[1],P[0],P[1]),D.lineTo(S[0],S[1]),D.quadraticCurveTo(w[0],w[1],T[0],T[1]),D.lineTo(b[0],b[1]),D.strokeStyle=R,D.fillStyle=R,D.fill()}function f(e){D.font="12px",D.textAlign="center",D.fillText(e,Y/2,M/2)}function r(){u(),c(),l()}function u(){D.clearRect(0,0,Y,M)}function a(e){console.log(e),y=[y[0],y[1]-e],b=[v[0]-m/2,v[1]],P=[y[0]-g/2,y[1]],T=[v[0]+m/2,v[1]],w=[Y/2,(v[1]-y[1])/2+y[1]],S=[y[0]+g/2,y[1]],x=w,r()}function d(e){e>100||e<0||(B.style.transform="translate(0,-"+e+"px)")}var s,h,p,g,m,y,v,b,x,P,T,w,S,k,C,E,L,Y=window.innerWidth,M=100,R="#b1b1b1",j=!1,q=document.createElement("canvas"),B=document.body;q.width=Y,q.height=M,q.style.borderBottom="1px solid #ccc",B.style.transform="translate(0,-"+M+"px)",B.insertBefore(q,B.firstChild);var D=q.getContext("2d");document.addEventListener("touchstart",function(e){j||(k=e.pageY||e.touches[0].pageY)},!1),document.addEventListener("touchmove",function(e){if(!j){if(C=e.pageY||e.touches[0].pageY,E=C-k>0?1:-1,k=C,s-=E,d(s),s<10)return void o();y[1]<=h||y[1]>M-p||s>70||(m-=E/5,g-=E/8,a(E))}},!1),document.addEventListener("touchend",function(e){j||(d(M),i(),r())}),e.init=t,e.end=n,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=pullDownRefresh.umd.js.map