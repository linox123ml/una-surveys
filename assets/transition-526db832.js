import{a as oe,C as se,g,t as ue,d as de,u as x,l as p,c as fe,H as Z,p as ve,e as pe,o as X}from"./use-outside-click-e120de29.js";import{q as _,l as b,y as k,i as F,s as w,x as G,p as A,z as me,A as H,n as ce,B as j}from"./index-60e059b7.js";function he(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function ge(){return/Android/gi.test(window.navigator.userAgent)}function je(){return he()||ge()}function q(){let e=[],t={addEventListener(n,r,l,a){return n.addEventListener(r,l,a),t.add(()=>n.removeEventListener(r,l,a))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);t.add(()=>clearTimeout(r))},style(n,r,l){let a=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:l}),this.add(()=>{Object.assign(n.style,{[r]:a})})},group(n){let r=q();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let l of e.splice(r,1))l()}},dispose(){for(let n of e.splice(0))n()}};return t}function be(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function $(e,...t){e&&t.length>0&&e.classList.add(...t)}function L(e,...t){e&&t.length>0&&e.classList.remove(...t)}var P=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(P||{});function ye(e,t){let n=q();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:l}=getComputedStyle(e),[a,i]=[r,l].map(o=>{let[s=0]=o.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,d)=>d-u);return s});return a!==0?n.setTimeout(()=>t("finished"),a+i):t("finished"),n.add(()=>t("cancelled")),n.dispose}function Y(e,t,n,r,l,a){let i=q(),o=a!==void 0?be(a):()=>{};return L(e,...l),$(e,...t,...n),i.nextFrame(()=>{L(e,...n),$(e,...r),i.add(ye(e,s=>(L(e,...r,...t),$(e,...l),o(s))))}),i.add(()=>L(e,...t,...n,...r,...l)),i.add(()=>o("cancelled")),i.dispose}function h(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let D=Symbol("TransitionContext");var we=(e=>(e.Visible="visible",e.Hidden="hidden",e))(we||{});function Ee(){return j(D,null)!==null}function Se(){let e=j(D,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Te(){let e=j(M,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let M=Symbol("NestingContext");function C(e){return"children"in e?C(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function J(e){let t=b([]),n=b(!1);w(()=>n.value=!0),G(()=>n.value=!1);function r(a,i=g.Hidden){let o=t.value.findIndex(({id:s})=>s===a);o!==-1&&(x(i,{[g.Unmount](){t.value.splice(o,1)},[g.Hidden](){t.value[o].state="hidden"}}),!C(t)&&n.value&&(e==null||e()))}function l(a){let i=t.value.find(({id:o})=>o===a);return i?i.state!=="visible"&&(i.state="visible"):t.value.push({id:a,state:"visible"}),()=>r(a,g.Unmount)}return{children:t,register:l,unregister:r}}let K=oe.RenderStrategy,Le=_({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:l}){let a=b(0);function i(){a.value|=p.Opening,t("beforeEnter")}function o(){a.value&=~p.Opening,t("afterEnter")}function s(){a.value|=p.Closing,t("beforeLeave")}function u(){a.value&=~p.Closing,t("afterLeave")}if(!Ee()&&se())return()=>k(Ae,{...e,onBeforeEnter:i,onAfterEnter:o,onBeforeLeave:s,onAfterLeave:u},r);let d=b(null),E=F(()=>e.unmount?g.Unmount:g.Hidden);l({el:d,$el:d});let{show:m,appear:U}=Se(),{register:R,unregister:B}=Te(),f=b(m.value?"visible":"hidden"),V={value:!0},y=ue(),S={value:!1},N=J(()=>{!S.value&&f.value!=="hidden"&&(f.value="hidden",B(y),u())});w(()=>{let v=R(y);G(v)}),A(()=>{if(E.value===g.Hidden&&y){if(m.value&&f.value!=="visible"){f.value="visible";return}x(f.value,{hidden:()=>B(y),visible:()=>R(y)})}});let z=h(e.enter),I=h(e.enterFrom),ee=h(e.enterTo),Q=h(e.entered),te=h(e.leave),ne=h(e.leaveFrom),re=h(e.leaveTo);w(()=>{A(()=>{if(f.value==="visible"){let v=X(d);if(v instanceof Comment&&v.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function ae(v){let O=V.value&&!U.value,c=X(d);!c||!(c instanceof HTMLElement)||O||(S.value=!0,m.value&&i(),m.value||s(),v(m.value?Y(c,z,I,ee,Q,T=>{S.value=!1,T===P.Finished&&o()}):Y(c,te,ne,re,Q,T=>{S.value=!1,T===P.Finished&&(C(N)||(f.value="hidden",B(y),u()))})))}return w(()=>{me([m],(v,O,c)=>{ae(c),V.value=!1},{immediate:!0})}),H(M,N),de(F(()=>x(f.value,{visible:p.Open,hidden:p.Closed})|a.value)),()=>{let{appear:v,show:O,enter:c,enterFrom:T,enterTo:Ce,entered:Be,leave:Oe,leaveFrom:$e,leaveTo:xe,...W}=e,ie={ref:d},le={...W,...U.value&&m.value&&fe.isServer?{class:ce([n.class,W.class,...z,...I])}:{}};return Z({theirProps:le,ourProps:ie,slot:{},slots:r,attrs:n,features:K,visible:f.value==="visible",name:"TransitionChild"})}}}),Fe=Le,Ae=_({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r}){let l=ve(),a=F(()=>e.show===null&&l!==null?(l.value&p.Open)===p.Open:e.show);A(()=>{if(![!0,!1].includes(a.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let i=b(a.value?"visible":"hidden"),o=J(()=>{i.value="hidden"}),s=b(!0),u={show:a,appear:F(()=>e.appear||!s.value)};return w(()=>{A(()=>{s.value=!1,a.value?i.value="visible":C(o)||(i.value="hidden")})}),H(M,o),H(D,u),()=>{let d=pe(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),E={unmount:e.unmount};return Z({ourProps:{...E,as:"template"},theirProps:{},slot:{},slots:{...r,default:()=>[k(Fe,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...E,...d},r.default)]},attrs:{},features:K,visible:i.value==="visible",name:"Transition"})}}});export{Ae as S,Le as h,je as n,q as r,he as t};
