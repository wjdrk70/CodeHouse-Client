(self.webpackChunkfront=self.webpackChunkfront||[]).push([[450],{5450:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>f});var r=o(7294),n=o(3727),i=o(9163);const a=i.ZP.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 1160px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
`,u=i.ZP.div`
  position: relative;
  top: calc(10%);
  left: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 50px;
  margin: 0 auto;
  padding-left: 80px;
  background: url(../../assets/codelog.png) no-repeat left;
  background-size: 103px auto;
  font-size: 43px;
  font-weight: bold;
  line-height: 43px;
`,l=i.ZP.div`
  position: relative;
  top: calc(15%);
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 70%;
  margin: 0 auto;
  background-color: #333333;
  border-radius: 18px;
`,s=i.ZP.h1`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 600px;
  margin: 0 auto;
  padding-top: 80px;
  font-size: 50px;
  color: #ffffff;
`,c=i.ZP.p`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 530px;
  margin: 0 auto;
  font-size: 42px;
  color: #ebebeb;
`,p=i.ZP.div`
  position: relative;
  top: -20%;
  left: 0;
  bottom: 0;
  right: 0;
  width: 600px;
  height: 90px;
  margin: 0 auto;
  background: url(../../assets/kakao_login_large_wide.png);
  cursor: pointer;
`,g=i.ZP.div`
  position: relative;
  top: -17%;
  left: 0;
  bottom: 0;
  right: 0;
  width: 600px;
  height: 90px;
  margin: 0 auto;
  background: url(../../assets/githubLogin.png);
  cursor: pointer;
`;var h=o(5243);const f=({history:t})=>{const[e,o]=(0,h.Z)(["jwt"]);return(0,r.useEffect)((()=>{})),r.createElement(a,null,r.createElement(n.rU,{to:"/"},r.createElement(u,null,"CodeHouse")),r.createElement(l,null,r.createElement(s,null,"Welcome to CodeHouse!"),r.createElement(c,null,"Login to Enjoy CodeHouse")),r.createElement("a",{href:"/api/auth/kakao"},r.createElement(p,null)),r.createElement("a",{href:"/api/auth/github"},r.createElement(g,null)))}},5243:(t,e,o)=>{"use strict";o.d(e,{Z:()=>u});var r=o(7294);const n=o(9585).Z;var i=r.createContext(new n);i.Provider,i.Consumer;const a=i;function u(t){var e=(0,r.useContext)(a);if(!e)throw new Error("Missing <CookiesProvider>");var o=e.getAll(),n=(0,r.useState)(o),i=n[0],u=n[1],l=(0,r.useRef)(i);return(0,r.useEffect)((function(){function o(){var o=e.getAll();(function(t,e,o){if(!t)return!0;for(var r=0,n=t;r<n.length;r++){var i=n[r];if(e[i]!==o[i])return!0}return!1})(t||null,o,l.current)&&u(o),l.current=o}return e.addChangeListener(o),function(){e.removeChangeListener(o)}}),[e]),[i,(0,r.useMemo)((function(){return e.set.bind(e)}),[e]),(0,r.useMemo)((function(){return e.remove.bind(e)}),[e])]}}}]);