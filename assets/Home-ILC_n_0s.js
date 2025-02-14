import{d as q,w as Y,h as v,T as te,m as ke,v as K,r as E,c as z,u as re,i as Ce,a as $e,b as oe,o as Se,p as P,t as G,e as Be,g as Ee,f as Re,j as Me,k as Fe,l as He,n as j,q as B,s as _,x as D,y as Te,z as Oe,F as J,A as X,B as Ie,C as _e,D as De,E as Ne}from"./index-CACFgO7V.js";import{u as Q,f as V,N as Z}from"./Icon-DLspuhM0.js";import{s as Pe,F as We,S as Ae,c as Le,u as Ue,d as ne,a as je,p as Xe,m as Ye,f as qe,L as Ke,z as Ge,b as Je,e as Qe}from"./Scrollbar-CrXVcVYz.js";import{c as Ve,d as Ze,u as et,a as i,b as W,e as g,f as y,g as $,i as tt,h as ie,j as rt,k as S,_ as ot}from"./plugin-vueexport-helper-CWQnwBKe.js";function nt(e){const{modalColor:r,textColor1:t,textColor2:a,boxShadow3:u,lineHeight:s,fontWeightStrong:l,dividerColor:f,closeColorHover:d,closeColorPressed:x,closeIconColor:R,closeIconColorHover:M,closeIconColorPressed:F,borderRadius:k,primaryColorHover:H}=e;return{bodyPadding:"16px 24px",borderRadius:k,headerPadding:"16px 24px",footerPadding:"16px 24px",color:r,textColor:a,titleTextColor:t,titleFontSize:"18px",titleFontWeight:l,boxShadow:u,lineHeight:s,headerBorderBottom:`1px solid ${f}`,footerBorderTop:`1px solid ${f}`,closeIconColor:R,closeIconColorHover:M,closeIconColorPressed:F,closeSize:"22px",closeIconSize:"18px",closeColorHover:d,closeColorPressed:x,closeBorderRadius:k,resizableTriggerColorHover:H}}const it=Ve({name:"Drawer",common:Ze,peers:{Scrollbar:Pe},self:nt}),st=q({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const r=E(!!e.show),t=E(null),a=Ce(ne);let u=0,s="",l=null;const f=E(!1),d=E(!1),x=z(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:R,mergedRtlRef:M}=re(e),F=et("Drawer",M,R),k=o,H=n=>{d.value=!0,u=x.value?n.clientY:n.clientX,s=document.body.style.cursor,document.body.style.cursor=x.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",w),document.body.addEventListener("mouseleave",k),document.body.addEventListener("mouseup",o)},O=()=>{l!==null&&(window.clearTimeout(l),l=null),d.value?f.value=!0:l=window.setTimeout(()=>{f.value=!0},300)},A=()=>{l!==null&&(window.clearTimeout(l),l=null),f.value=!1},{doUpdateHeight:L,doUpdateWidth:U}=a,T=n=>{const{maxWidth:h}=e;if(h&&n>h)return h;const{minWidth:b}=e;return b&&n<b?b:n},I=n=>{const{maxHeight:h}=e;if(h&&n>h)return h;const{minHeight:b}=e;return b&&n<b?b:n};function w(n){var h,b;if(d.value)if(x.value){let p=((h=t.value)===null||h===void 0?void 0:h.offsetHeight)||0;const C=u-n.clientY;p+=e.placement==="bottom"?C:-C,p=I(p),L(p),u=n.clientY}else{let p=((b=t.value)===null||b===void 0?void 0:b.offsetWidth)||0;const C=u-n.clientX;p+=e.placement==="right"?C:-C,p=T(p),U(p),u=n.clientX}}function o(){d.value&&(u=0,d.value=!1,document.body.style.cursor=s,document.body.removeEventListener("mousemove",w),document.body.removeEventListener("mouseup",o),document.body.removeEventListener("mouseleave",k))}$e(()=>{e.show&&(r.value=!0)}),oe(()=>e.show,n=>{n||o()}),Se(()=>{o()});const c=z(()=>{const{show:n}=e,h=[[K,n]];return e.showMask||h.push([Le,e.onClickoutside,void 0,{capture:!0}]),h});function m(){var n;r.value=!1,(n=e.onAfterLeave)===null||n===void 0||n.call(e)}return Ue(z(()=>e.blockScroll&&r.value)),P(je,t),P(Xe,null),P(Ye,null),{bodyRef:t,rtlEnabled:F,mergedClsPrefix:a.mergedClsPrefixRef,isMounted:a.isMountedRef,mergedTheme:a.mergedThemeRef,displayed:r,transitionName:z(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:m,bodyDirectives:c,handleMousedownResizeTrigger:H,handleMouseenterResizeTrigger:O,handleMouseleaveResizeTrigger:A,isDragging:d,isHoverOnResizeTrigger:f}},render(){const{$slots:e,mergedClsPrefix:r}=this;return this.displayDirective==="show"||this.displayed||this.show?Y(v("div",{role:"none"},v(We,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>v(te,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>Y(v("div",ke(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${r}-drawer`,this.rtlEnabled&&`${r}-drawer--rtl`,`${r}-drawer--${this.placement}-placement`,this.isDragging&&`${r}-drawer--unselectable`,this.nativeScrollbar&&`${r}-drawer--native-scrollbar`]}),[this.resizable?v("div",{class:[`${r}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${r}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?v("div",{class:[`${r}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},e):v(Ae,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${r}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[K,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:at,cubicBezierEaseOut:lt}=W;function dt({duration:e="0.3s",leaveDuration:r="0.2s",name:t="slide-in-from-bottom"}={}){return[i(`&.${t}-transition-leave-active`,{transition:`transform ${r} ${at}`}),i(`&.${t}-transition-enter-active`,{transition:`transform ${e} ${lt}`}),i(`&.${t}-transition-enter-to`,{transform:"translateY(0)"}),i(`&.${t}-transition-enter-from`,{transform:"translateY(100%)"}),i(`&.${t}-transition-leave-from`,{transform:"translateY(0)"}),i(`&.${t}-transition-leave-to`,{transform:"translateY(100%)"})]}const{cubicBezierEaseIn:ct,cubicBezierEaseOut:ut}=W;function ht({duration:e="0.3s",leaveDuration:r="0.2s",name:t="slide-in-from-left"}={}){return[i(`&.${t}-transition-leave-active`,{transition:`transform ${r} ${ct}`}),i(`&.${t}-transition-enter-active`,{transition:`transform ${e} ${ut}`}),i(`&.${t}-transition-enter-to`,{transform:"translateX(0)"}),i(`&.${t}-transition-enter-from`,{transform:"translateX(-100%)"}),i(`&.${t}-transition-leave-from`,{transform:"translateX(0)"}),i(`&.${t}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:ft,cubicBezierEaseOut:mt}=W;function bt({duration:e="0.3s",leaveDuration:r="0.2s",name:t="slide-in-from-right"}={}){return[i(`&.${t}-transition-leave-active`,{transition:`transform ${r} ${ft}`}),i(`&.${t}-transition-enter-active`,{transition:`transform ${e} ${mt}`}),i(`&.${t}-transition-enter-to`,{transform:"translateX(0)"}),i(`&.${t}-transition-enter-from`,{transform:"translateX(100%)"}),i(`&.${t}-transition-leave-from`,{transform:"translateX(0)"}),i(`&.${t}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:gt,cubicBezierEaseOut:vt}=W;function pt({duration:e="0.3s",leaveDuration:r="0.2s",name:t="slide-in-from-top"}={}){return[i(`&.${t}-transition-leave-active`,{transition:`transform ${r} ${gt}`}),i(`&.${t}-transition-enter-active`,{transition:`transform ${e} ${vt}`}),i(`&.${t}-transition-enter-to`,{transform:"translateY(0)"}),i(`&.${t}-transition-enter-from`,{transform:"translateY(-100%)"}),i(`&.${t}-transition-leave-from`,{transform:"translateY(0)"}),i(`&.${t}-transition-leave-to`,{transform:"translateY(-100%)"})]}const wt=i([g("drawer",`
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
 `,[bt(),ht(),pt(),dt(),y("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),y("native-scrollbar",[g("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),$("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[y("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),g("drawer-content-wrapper",`
 box-sizing: border-box;
 `),g("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[y("native-scrollbar",[g("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),g("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),g("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),g("drawer-header",`
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
 `,[$("main",`
 flex: 1;
 `),$("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),g("drawer-footer",`
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
 `,[$("resize-trigger",`
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
 `,[$("resize-trigger",`
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
 `,[$("resize-trigger",`
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
 `,[$("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),i("body",[i(">",[g("drawer-container",`
 position: fixed;
 `)])]),g("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[i("> *",`
 pointer-events: all;
 `)]),g("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[y("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),qe({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),yt=Object.assign(Object.assign({},ie.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),xt=q({name:"Drawer",inheritAttrs:!1,props:yt,setup(e){const{mergedClsPrefixRef:r,namespaceRef:t,inlineThemeDisabled:a}=re(e),u=tt(),s=ie("Drawer","-drawer",wt,it,e,r),l=E(e.defaultWidth),f=E(e.defaultHeight),d=Q(G(e,"width"),l),x=Q(G(e,"height"),f),R=z(()=>{const{placement:o}=e;return o==="top"||o==="bottom"?"":V(d.value)}),M=z(()=>{const{placement:o}=e;return o==="left"||o==="right"?"":V(x.value)}),F=o=>{const{onUpdateWidth:c,"onUpdate:width":m}=e;c&&S(c,o),m&&S(m,o),l.value=o},k=o=>{const{onUpdateHeight:c,"onUpdate:width":m}=e;c&&S(c,o),m&&S(m,o),f.value=o},H=z(()=>[{width:R.value,height:M.value},e.drawerStyle||""]);function O(o){const{onMaskClick:c,maskClosable:m}=e;m&&T(!1),c&&c(o)}function A(o){O(o)}const L=Je();function U(o){var c;(c=e.onEsc)===null||c===void 0||c.call(e),e.show&&e.closeOnEsc&&Qe(o)&&(L.value||T(!1))}function T(o){const{onHide:c,onUpdateShow:m,"onUpdate:show":n}=e;m&&S(m,o),n&&S(n,o),c&&!o&&S(c,o)}P(ne,{isMountedRef:u,mergedThemeRef:s,mergedClsPrefixRef:r,doUpdateShow:T,doUpdateHeight:k,doUpdateWidth:F});const I=z(()=>{const{common:{cubicBezierEaseInOut:o,cubicBezierEaseIn:c,cubicBezierEaseOut:m},self:{color:n,textColor:h,boxShadow:b,lineHeight:p,headerPadding:C,footerPadding:se,borderRadius:ae,bodyPadding:le,titleFontSize:de,titleTextColor:ce,titleFontWeight:ue,headerBorderBottom:he,footerBorderTop:fe,closeIconColor:me,closeIconColorHover:be,closeIconColorPressed:ge,closeColorHover:ve,closeColorPressed:pe,closeIconSize:we,closeSize:ye,closeBorderRadius:xe,resizableTriggerColorHover:ze}}=s.value;return{"--n-line-height":p,"--n-color":n,"--n-border-radius":ae,"--n-text-color":h,"--n-box-shadow":b,"--n-bezier":o,"--n-bezier-out":m,"--n-bezier-in":c,"--n-header-padding":C,"--n-body-padding":le,"--n-footer-padding":se,"--n-title-text-color":ce,"--n-title-font-size":de,"--n-title-font-weight":ue,"--n-header-border-bottom":he,"--n-footer-border-top":fe,"--n-close-icon-color":me,"--n-close-icon-color-hover":be,"--n-close-icon-color-pressed":ge,"--n-close-size":ye,"--n-close-color-hover":ve,"--n-close-color-pressed":pe,"--n-close-icon-size":we,"--n-close-border-radius":xe,"--n-resize-trigger-color-hover":ze}}),w=a?rt("drawer",void 0,I,e):void 0;return{mergedClsPrefix:r,namespace:t,mergedBodyStyle:H,handleOutsideClick:A,handleMaskClick:O,handleEsc:U,mergedTheme:s,cssVars:a?void 0:I,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender,isMounted:u}},render(){const{mergedClsPrefix:e}=this;return v(Ke,{to:this.to,show:this.show},{default:()=>{var r;return(r=this.onRender)===null||r===void 0||r.call(this),Y(v("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?v(te,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?v("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,v(st,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[Ge,{zIndex:this.zIndex,enabled:this.show}]])}})}});var N={},ee;function zt(){if(ee)return N;ee=1,Object.defineProperty(N,"__esModule",{value:!0});const e=Be(),r={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"};return N.default=(0,e.defineComponent)({name:"MenuOutline",render:function(a,u){return(0,e.openBlock)(),(0,e.createElementBlock)("svg",r,u[0]||(u[0]=[(0,e.createElementVNode)("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M80 160h352"},null,-1),(0,e.createElementVNode)("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M80 256h352"},null,-1),(0,e.createElementVNode)("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M80 352h352"},null,-1)]))}}),N}var kt=zt();const Ct=Ee(kt),$t={class:"menu"},St=["onClick"],Bt=q({__name:"Home",setup(e){const r=Me(),t=Ne(),a=Re({list:[],active:"",isExpanded:!1});a.active=r.meta.key||r.meta.menuKey,a.list=Fe[0].children.map(s=>({label:s.meta.label,key:s.name.toString(),icon:He(s.meta.icon)}));function u(s){a.active=s.key,t.push({name:s.key}),a.isExpanded=!1}return oe(r,s=>{var l,f;(l=s==null?void 0:s.meta)!=null&&l.menuKey?a.active=s.meta.menuKey:(f=s==null?void 0:s.meta)!=null&&f.key&&(a.active=s.meta.key)}),(s,l)=>{const f=Te("router-view");return X(),j(J,null,[B("header",null,[_(D(Z),{component:D(Ct),size:"28",style:{cursor:"pointer"},onClick:l[0]||(l[0]=d=>a.isExpanded=!0)},null,8,["component"])]),B("main",null,[_(f)]),_(D(xt),{show:a.isExpanded,"onUpdate:show":l[1]||(l[1]=d=>a.isExpanded=d),placement:"left"},{default:Oe(()=>[B("nav",null,[l[2]||(l[2]=B("div",{class:"logo"},"Salt1024",-1)),B("ul",$t,[(X(!0),j(J,null,Ie(a.list,d=>(X(),j("li",{key:d.key,class:_e([{"menu-item-active":d.key===a.active},"menu-item"]),onClick:x=>u(d)},[_(D(Z),{component:d.icon,class:"menu-item-icon",size:"24"},null,8,["component"]),B("span",null,De(d.label),1)],10,St))),128))])])]),_:1},8,["show"])],64)}}}),Ht=ot(Bt,[["__scopeId","data-v-3f11c80e"]]);export{Ht as default};
