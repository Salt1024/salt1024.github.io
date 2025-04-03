import{d as W,w as Se,h as g,m as re,u as G,c as w,a as K,T as ne,v as Z,r as R,i as Be,b as Ee,e as ie,o as Re,p as N,t as J,f as Me,g as Fe,j as He,k as _e,l as Te,n as Oe,q as Y,s as E,x as D,y as I,z as De,A as Ie,F as Q,B as q,C as Pe,D as Ne,E as We,G as je}from"./index-Cp6fhwDE.js";import{d as se,c as b,a as y,b as a,u as j,e as ae,f as Ae,g as Le,h as A,i as S,j as Ue,k as B,_ as Xe}from"./plugin-vueexport-helper-D9wwmuuy.js";import{f as V,s as Ye,F as qe,S as Ke,c as Ve,u as Ge,d as le,a as Ze,p as Je,m as Qe,b as et,L as tt,z as ot,e as ee,g as rt,h as nt}from"./Scrollbar-DOu6PVvG.js";function it(e){const{textColorBase:t,opacity1:o,opacity2:s,opacity3:d,opacity4:r,opacity5:i}=e;return{color:t,opacity1Depth:o,opacity2Depth:s,opacity3Depth:d,opacity4Depth:r,opacity5Depth:i}}const st={common:se,self:it},at=b("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[y("color-transition",{transition:"color .3s var(--n-bezier)"}),y("depth",{color:"var(--n-color)"},[a("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),a("svg",{height:"1em",width:"1em"})]),lt=Object.assign(Object.assign({},j.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),te=W({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:lt,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=G(e),s=j("Icon","-icon",at,st,e,t),d=w(()=>{const{depth:i}=e,{common:{cubicBezierEaseInOut:u},self:c}=s.value;if(i!==void 0){const{color:x,[`opacity${i}Depth`]:C}=c;return{"--n-bezier":u,"--n-color":x,"--n-opacity":C}}return{"--n-bezier":u,"--n-color":"","--n-opacity":""}}),r=o?ae("icon",w(()=>`${e.depth||"d"}`),d,e):void 0;return{mergedClsPrefix:t,mergedStyle:w(()=>{const{size:i,color:u}=e;return{fontSize:V(i),color:u}}),cssVars:o?void 0:d,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{$parent:t,depth:o,mergedClsPrefix:s,component:d,onRender:r,themeClass:i}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&Se("icon","don't wrap `n-icon` inside `n-icon`"),r==null||r(),g("i",re(this.$attrs,{role:"img",class:[`${s}-icon`,i,{[`${s}-icon--depth`]:o,[`${s}-icon--color-transition`]:o!==void 0}],style:[this.cssVars,this.mergedStyle]}),d?g(d):this.$slots)}});function dt(e){const{modalColor:t,textColor1:o,textColor2:s,boxShadow3:d,lineHeight:r,fontWeightStrong:i,dividerColor:u,closeColorHover:c,closeColorPressed:x,closeIconColor:C,closeIconColorHover:M,closeIconColorPressed:F,borderRadius:$,primaryColorHover:H}=e;return{bodyPadding:"16px 24px",borderRadius:$,headerPadding:"16px 24px",footerPadding:"16px 24px",color:t,textColor:s,titleTextColor:o,titleFontSize:"18px",titleFontWeight:i,boxShadow:d,lineHeight:r,headerBorderBottom:`1px solid ${u}`,footerBorderTop:`1px solid ${u}`,closeIconColor:C,closeIconColorHover:M,closeIconColorPressed:F,closeSize:"22px",closeIconSize:"18px",closeColorHover:c,closeColorPressed:x,closeBorderRadius:$,resizableTriggerColorHover:H}}const ct=Ae({name:"Drawer",common:se,peers:{Scrollbar:Ye},self:dt}),ut=W({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=R(!!e.show),o=R(null),s=Be(le);let d=0,r="",i=null;const u=R(!1),c=R(!1),x=w(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:C,mergedRtlRef:M}=G(e),F=Le("Drawer",M,C),$=n,H=l=>{c.value=!0,d=x.value?l.clientY:l.clientX,r=document.body.style.cursor,document.body.style.cursor=x.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",z),document.body.addEventListener("mouseleave",$),document.body.addEventListener("mouseup",n)},T=()=>{i!==null&&(window.clearTimeout(i),i=null),c.value?u.value=!0:i=window.setTimeout(()=>{u.value=!0},300)},L=()=>{i!==null&&(window.clearTimeout(i),i=null),u.value=!1},{doUpdateHeight:U,doUpdateWidth:X}=s,_=l=>{const{maxWidth:m}=e;if(m&&l>m)return m;const{minWidth:v}=e;return v&&l<v?v:l},O=l=>{const{maxHeight:m}=e;if(m&&l>m)return m;const{minHeight:v}=e;return v&&l<v?v:l};function z(l){var m,v;if(c.value)if(x.value){let p=((m=o.value)===null||m===void 0?void 0:m.offsetHeight)||0;const k=d-l.clientY;p+=e.placement==="bottom"?k:-k,p=O(p),U(p),d=l.clientY}else{let p=((v=o.value)===null||v===void 0?void 0:v.offsetWidth)||0;const k=d-l.clientX;p+=e.placement==="right"?k:-k,p=_(p),X(p),d=l.clientX}}function n(){c.value&&(d=0,c.value=!1,document.body.style.cursor=r,document.body.removeEventListener("mousemove",z),document.body.removeEventListener("mouseup",n),document.body.removeEventListener("mouseleave",$))}Ee(()=>{e.show&&(t.value=!0)}),ie(()=>e.show,l=>{l||n()}),Re(()=>{n()});const h=w(()=>{const{show:l}=e,m=[[Z,l]];return e.showMask||m.push([Ve,e.onClickoutside,void 0,{capture:!0}]),m});function f(){var l;t.value=!1,(l=e.onAfterLeave)===null||l===void 0||l.call(e)}return Ge(w(()=>e.blockScroll&&t.value)),N(Ze,o),N(Je,null),N(Qe,null),{bodyRef:o,rtlEnabled:F,mergedClsPrefix:s.mergedClsPrefixRef,isMounted:s.isMountedRef,mergedTheme:s.mergedThemeRef,displayed:t,transitionName:w(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:f,bodyDirectives:h,handleMousedownResizeTrigger:H,handleMouseenterResizeTrigger:T,handleMouseleaveResizeTrigger:L,isDragging:c,isHoverOnResizeTrigger:u}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?K(g("div",{role:"none"},g(qe,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>g(ne,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>K(g("div",re(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?g("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?g("div",{class:[`${t}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},e):g(Ke,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${t}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[Z,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:ht,cubicBezierEaseOut:mt}=A;function ft({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-bottom"}={}){return[a(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${ht}`}),a(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${mt}`}),a(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),a(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),a(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),a(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}const{cubicBezierEaseIn:gt,cubicBezierEaseOut:vt}=A;function bt({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-left"}={}){return[a(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${gt}`}),a(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${vt}`}),a(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),a(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),a(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),a(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:pt,cubicBezierEaseOut:yt}=A;function wt({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-right"}={}){return[a(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${pt}`}),a(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${yt}`}),a(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),a(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),a(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),a(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:xt,cubicBezierEaseOut:zt}=A;function Ct({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-top"}={}){return[a(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${xt}`}),a(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${zt}`}),a(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),a(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),a(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),a(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const $t=a([b("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[wt(),bt(),Ct(),ft(),y("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),y("native-scrollbar",[b("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),S("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[y("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),b("drawer-content-wrapper",`
 box-sizing: border-box;
 `),b("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[y("native-scrollbar",[b("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),b("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),b("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),b("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[S("main",`
 flex: 1;
 `),S("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),b("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),y("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[S("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),y("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[S("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),y("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[S("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),y("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `,[S("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),a("body",[a(">",[b("drawer-container",`
 position: fixed;
 `)])]),b("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[a("> *",`
 pointer-events: all;
 `)]),b("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[y("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),et({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),kt=Object.assign(Object.assign({},j.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),St=W({name:"Drawer",inheritAttrs:!1,props:kt,setup(e){const{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:s}=G(e),d=Ue(),r=j("Drawer","-drawer",$t,ct,e,t),i=R(e.defaultWidth),u=R(e.defaultHeight),c=ee(J(e,"width"),i),x=ee(J(e,"height"),u),C=w(()=>{const{placement:n}=e;return n==="top"||n==="bottom"?"":V(c.value)}),M=w(()=>{const{placement:n}=e;return n==="left"||n==="right"?"":V(x.value)}),F=n=>{const{onUpdateWidth:h,"onUpdate:width":f}=e;h&&B(h,n),f&&B(f,n),i.value=n},$=n=>{const{onUpdateHeight:h,"onUpdate:width":f}=e;h&&B(h,n),f&&B(f,n),u.value=n},H=w(()=>[{width:C.value,height:M.value},e.drawerStyle||""]);function T(n){const{onMaskClick:h,maskClosable:f}=e;f&&_(!1),h&&h(n)}function L(n){T(n)}const U=rt();function X(n){var h;(h=e.onEsc)===null||h===void 0||h.call(e),e.show&&e.closeOnEsc&&nt(n)&&(U.value||_(!1))}function _(n){const{onHide:h,onUpdateShow:f,"onUpdate:show":l}=e;f&&B(f,n),l&&B(l,n),h&&!n&&B(h,n)}N(le,{isMountedRef:d,mergedThemeRef:r,mergedClsPrefixRef:t,doUpdateShow:_,doUpdateHeight:$,doUpdateWidth:F});const O=w(()=>{const{common:{cubicBezierEaseInOut:n,cubicBezierEaseIn:h,cubicBezierEaseOut:f},self:{color:l,textColor:m,boxShadow:v,lineHeight:p,headerPadding:k,footerPadding:de,borderRadius:ce,bodyPadding:ue,titleFontSize:he,titleTextColor:me,titleFontWeight:fe,headerBorderBottom:ge,footerBorderTop:ve,closeIconColor:be,closeIconColorHover:pe,closeIconColorPressed:ye,closeColorHover:we,closeColorPressed:xe,closeIconSize:ze,closeSize:Ce,closeBorderRadius:$e,resizableTriggerColorHover:ke}}=r.value;return{"--n-line-height":p,"--n-color":l,"--n-border-radius":ce,"--n-text-color":m,"--n-box-shadow":v,"--n-bezier":n,"--n-bezier-out":f,"--n-bezier-in":h,"--n-header-padding":k,"--n-body-padding":ue,"--n-footer-padding":de,"--n-title-text-color":me,"--n-title-font-size":he,"--n-title-font-weight":fe,"--n-header-border-bottom":ge,"--n-footer-border-top":ve,"--n-close-icon-color":be,"--n-close-icon-color-hover":pe,"--n-close-icon-color-pressed":ye,"--n-close-size":Ce,"--n-close-color-hover":we,"--n-close-color-pressed":xe,"--n-close-icon-size":ze,"--n-close-border-radius":$e,"--n-resize-trigger-color-hover":ke}}),z=s?ae("drawer",void 0,O,e):void 0;return{mergedClsPrefix:t,namespace:o,mergedBodyStyle:H,handleOutsideClick:L,handleMaskClick:T,handleEsc:X,mergedTheme:r,cssVars:s?void 0:O,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender,isMounted:d}},render(){const{mergedClsPrefix:e}=this;return g(tt,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),K(g("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?g(ne,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?g("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,g(ut,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[ot,{zIndex:this.zIndex,enabled:this.show}]])}})}});var P={},oe;function Bt(){if(oe)return P;oe=1,Object.defineProperty(P,"__esModule",{value:!0});const e=Me(),t={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"};return P.default=(0,e.defineComponent)({name:"MenuOutline",render:function(s,d){return(0,e.openBlock)(),(0,e.createElementBlock)("svg",t,d[0]||(d[0]=[(0,e.createElementVNode)("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M80 160h352"},null,-1),(0,e.createElementVNode)("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M80 256h352"},null,-1),(0,e.createElementVNode)("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M80 352h352"},null,-1)]))}}),P}var Et=Bt();const Rt=Fe(Et),Mt={class:"menu"},Ft=["onClick"],Ht=W({__name:"Home",setup(e){const t=_e(),o=je(),s=He({list:[],active:"",isExpanded:!1});s.active=t.meta.key||t.meta.menuKey,s.list=Te[0].children.map(r=>({label:r.meta.label,key:r.name.toString(),icon:Oe(r.meta.icon)}));function d(r){s.active=r.key,o.push({name:r.key}),s.isExpanded=!1}return ie(t,r=>{var i,u;(i=r==null?void 0:r.meta)!=null&&i.menuKey?s.active=r.meta.menuKey:(u=r==null?void 0:r.meta)!=null&&u.key&&(s.active=r.meta.key)}),(r,i)=>{const u=De("router-view");return q(),Y(Q,null,[E("header",null,[D(I(te),{component:I(Rt),size:"28",style:{cursor:"pointer"},onClick:i[0]||(i[0]=c=>s.isExpanded=!0)},null,8,["component"])]),E("main",null,[D(u)]),D(I(St),{show:s.isExpanded,"onUpdate:show":i[1]||(i[1]=c=>s.isExpanded=c),placement:"left"},{default:Ie(()=>[E("nav",null,[i[2]||(i[2]=E("div",{class:"logo"},"Salt1024",-1)),E("ul",Mt,[(q(!0),Y(Q,null,Pe(s.list,c=>(q(),Y("li",{key:c.key,class:Ne([{"menu-item-active":c.key===s.active},"menu-item"]),onClick:x=>d(c)},[D(I(te),{component:c.icon,class:"menu-item-icon",size:"24"},null,8,["component"]),E("span",null,We(c.label),1)],10,Ft))),128))])])]),_:1},8,["show"])],64)}}}),Dt=Xe(Ht,[["__scopeId","data-v-13d42d44"]]);export{Dt as default};
