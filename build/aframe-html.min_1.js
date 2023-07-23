!function(e){"use strict";class t extends e.Mesh{constructor(t){const s=new i(t),n=new e.PlaneGeometry(.001*s.image.width,.001*s.image.height),r=new e.MeshBasicMaterial({map:s,toneMapped:!1,transparent:!0});function l(e){r.map.dispatchDOMEvent(e)}super(n,r),this.addEventListener("mousedown",l),this.addEventListener("mousemove",l),this.addEventListener("mouseup",l),this.addEventListener("click",l),this.dispose=function(){n.dispose(),r.dispose(),r.map.dispose(),o.delete(t),this.removeEventListener("mousedown",l),this.removeEventListener("mousemove",l),this.removeEventListener("mouseup",l),this.removeEventListener("click",l)}}}class i extends e.CanvasTexture{constructor(t){super(s(t)),this.dom=t,this.anisotropy=16,this.encoding=e.sRGBEncoding,this.minFilter=e.LinearFilter,this.magFilter=e.LinearFilter;const i=new MutationObserver((()=>{this.scheduleUpdate||(this.scheduleUpdate=setTimeout((()=>this.update()),16))}));i.observe(t,{attributes:!0,childList:!0,subtree:!0,characterData:!0}),this.observer=i}dispatchDOMEvent(e){e.data&&function(e,t,i,o){const s={clientX:i*e.offsetWidth+e.offsetLeft,clientY:o*e.offsetHeight+e.offsetTop,view:e.ownerDocument.defaultView},n=e.getBoundingClientRect();function r(e){if(e.nodeType!==Node.TEXT_NODE&&e.nodeType!==Node.COMMENT_NODE){const n=e.getBoundingClientRect();if(i>n.left&&i<n.right&&o>n.top&&o<n.bottom&&(e.dispatchEvent(new MouseEvent(t,s)),e instanceof HTMLInputElement&&"range"===e.type&&("mousedown"===t||"click"===t))){const[t,o]=["min","max"].map((t=>parseFloat(e[t]))),s=n.width,r=(i-n.x)/s;e.value=t+(o-t)*r,e.dispatchEvent(new InputEvent("input",{bubbles:!0}))}for(let t=0;t<e.childNodes.length;t++)r(e.childNodes[t])}}i=i*n.width+n.left,o=o*n.height+n.top,r(e)}(this.dom,e.type,e.data.x,e.data.y)}update(){this.image=s(this.dom),this.needsUpdate=!0,this.scheduleUpdate=null}dispose(){this.observer&&this.observer.disconnect(),this.scheduleUpdate=clearTimeout(this.scheduleUpdate),super.dispose()}}const o=new WeakMap;function s(t){const i=document.createRange(),s=new e.Color;function n(e,t,i,o){""!==o&&("uppercase"===e.textTransform&&(o=o.toUpperCase()),d.font=e.fontWeight+" "+e.fontSize+" "+e.fontFamily,d.textBaseline="top",d.fillStyle=e.color,d.fillText(o,t,i+.1*parseFloat(e.fontSize)))}function r(e,t,i,o,s){i<2*s&&(s=i/2),o<2*s&&(s=o/2),d.beginPath(),d.moveTo(e+s,t),d.arcTo(e+i,t,e+i,t+o,s),d.arcTo(e+i,t+o,e,t+o,s),d.arcTo(e,t+o,e,t,s),d.arcTo(e,t,e+i,t,s),d.closePath()}function l(e,t,i,o,s,n){const r=e[t+"Width"],l=e[t+"Style"],a=e[t+"Color"];"0px"!==r&&"none"!==l&&"transparent"!==a&&"rgba(0, 0, 0, 0)"!==a&&(d.strokeStyle=a,d.lineWidth=parseFloat(r),d.beginPath(),d.moveTo(i,o),d.lineTo(i+s,o+n),d.stroke())}const a=t.getBoundingClientRect();let h=o.get(t);void 0===h&&(h=document.createElement("canvas"),h.width=a.width,h.height=a.height,o.set(t,h));const d=h.getContext("2d"),c=new function(e){const t=[];let i=!1;function o(){if(i&&(i=!1,e.restore()),0===t.length)return;let o=-1/0,s=-1/0,n=1/0,r=1/0;for(let e=0;e<t.length;e++){const i=t[e];o=Math.max(o,i.x),s=Math.max(s,i.y),n=Math.min(n,i.x+i.width),r=Math.min(r,i.y+i.height)}e.save(),e.beginPath(),e.rect(o,s,n-o,r-s),e.clip(),i=!0}return{add:function(e){t.push(e),o()},remove:function(){t.pop(),o()}}}(d);return function e(t,o){let h=0,u=0,p=0,m=0;if(t.nodeType===Node.TEXT_NODE){i.selectNode(t);const e=i.getBoundingClientRect();h=e.left-a.left-.5,u=e.top-a.top-.5,p=e.width,m=e.height,n(o,h,u,t.nodeValue.trim())}else{if(t.nodeType===Node.COMMENT_NODE)return;if(t instanceof HTMLCanvasElement){if("none"===t.style.display)return;d.save();const e=window.devicePixelRatio;d.scale(1/e,1/e),d.drawImage(t,0,0),d.restore()}else{if("none"===t.style.display)return;const e=t.getBoundingClientRect();h=e.left-a.left-.5,u=e.top-a.top-.5,p=e.width,m=e.height;const i=(o=window.getComputedStyle(t)).backgroundColor;r(h,u,p,m,parseFloat(o.borderRadius)),"transparent"!==i&&"rgba(0, 0, 0, 0)"!==i&&(d.fillStyle=i,d.fill());const v=["borderTop","borderLeft","borderBottom","borderRight"];let f=!0,g=null;for(const e of v){if(g&&(f=o[e+"Width"]===o[g+"Width"]&&o[e+"Color"]===o[g+"Color"]&&o[e+"Style"]===o[g+"Style"]),!f)break;g=e}if(f){const e=parseFloat(o.borderTopWidth);"0px"!==o.borderTopWidth&&"none"!==o.borderTopStyle&&"transparent"!==o.borderTopColor&&"rgba(0, 0, 0, 0)"!==o.borderTopColor&&(d.strokeStyle=o.borderTopColor,d.lineWidth=e,d.stroke())}else l(o,"borderTop",h,u,p,0),l(o,"borderLeft",h,u,0,m),l(o,"borderBottom",h,u+m,p,0),l(o,"borderRight",h+p,u,0,m);if(t instanceof HTMLInputElement){let e=o.accentColor;void 0!==e&&"auto"!==e||(e=o.color),s.set(e);const i=Math.sqrt(.299*s.r**2+.587*s.g**2+.114*s.b**2)<.5?"white":"#111111";if("radio"===t.type&&(r(h,u,p,m,m),d.fillStyle="white",d.strokeStyle=e,d.lineWidth=1,d.fill(),d.stroke(),t.checked)){const t=2;r(h+t,u+t,p-2*t,m-2*t,m),d.fillStyle=e,d.strokeStyle=i,d.lineWidth=t,d.fill(),d.stroke()}if("checkbox"===t.type&&(r(h,u,p,m,2),d.fillStyle=t.checked?e:"white",d.strokeStyle=t.checked?i:e,d.lineWidth=1,d.stroke(),d.fill(),t.checked)){const e=d.textAlign;d.textAlign="center",n({color:i,fontFamily:o.fontFamily,fontSize:m+"px",fontWeight:"bold"},h+p/2,u,"✔"),d.textAlign=e}if("range"===t.type){const[o,s,n]=["min","max","value"].map((e=>parseFloat(t[e]))),l=(n-o)/(s-o)*(p-m);r(h,u+.25*m,p,.5*m,.25*m),d.fillStyle=i,d.strokeStyle=e,d.lineWidth=1,d.fill(),d.stroke(),r(h,u+.25*m,l+.5*m,.5*m,.25*m),d.fillStyle=e,d.fill(),r(h+l,u,m,m,.5*m),d.fillStyle=e,d.fill()}"color"!==t.type&&"text"!==t.type&&"number"!==t.type||(c.add({x:h,y:u,width:p,height:m}),n(o,h+parseInt(o.paddingLeft),u+parseInt(o.paddingTop),t.value),c.remove())}}}const v="auto"===o.overflow||"hidden"===o.overflow;v&&c.add({x:h,y:u,width:p,height:m});for(let i=0;i<t.childNodes.length;i++)e(t.childNodes[i],o);v&&c.remove()}(t),h}const n={type:"",data:new THREE.Vector2};AFRAME.registerComponent("html",{schema:{html:{type:"selector"},cursor:{type:"selector"}},init(){this.rerender=this.rerender.bind(this),this.handle=this.handle.bind(this),this.onClick=e=>this.handle("click",e),this.onMouseLeave=e=>this.handle("mouseleave",e),this.onMouseEnter=e=>this.handle("mouseenter",e),this.onMouseUp=e=>this.handle("mouseup",e),this.onMouseDown=e=>this.handle("mousedown",e),this.mouseMoveDetail={detail:{cursorEl:null,intersection:null}}},play(){this.el.addEventListener("click",this.onClick),this.el.addEventListener("mouseleave",this.onMouseLeave),this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("mouseup",this.onMouseUp),this.el.addEventListener("mousedown",this.onMouseDown)},pause(){this.el.removeEventListener("click",this.onClick),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("mouseup",this.onMouseUp),this.el.removeEventListener("mousedown",this.onMouseDown)},update(){if(this.remove(),!this.data.html)return;const e=new t(this.data.html);this.el.setObject3D("html",e),this.data.html.addEventListener("input",this.rerender),this.data.html.addEventListener("change",this.rerender),this.cursor=this.data.cursor?this.data.cursor.object3D:null},tick(){if(this.activeRaycaster){const e=this.activeRaycaster.components.raycaster.getIntersection(this.el);this.mouseMoveDetail.detail.cursorEl=this.activeRaycaster,this.mouseMoveDetail.detail.intersection=e,this.handle("mousemove",this.mouseMoveDetail)}},handle(e,t){const i=t.detail.intersection,o=t.detail.cursorEl;if("mouseenter"===e&&(this.activeRaycaster=o),"mouseleave"===e&&this.activeRaycaster===o&&(this.activeRaycaster=null),this.cursor&&(this.cursor.visible=!1),i){const t=this.el.getObject3D("html"),o=i.uv;n.type=e,n.data.set(o.x,1-o.y),t.dispatchEvent(n),this.cursor&&(this.cursor.visible=!0,this.cursor.parent.worldToLocal(this.cursor.position.copy(i.point)))}},rerender(){const e=this.el.getObject3D("html");e&&!e.material.map.scheduleUpdate&&(e.material.map.scheduleUpdate=setTimeout((()=>e.material.map.update()),16))},remove(){const e=this.el.getObject3D("html");e&&(this.el.removeObject3D("html"),this.data.html.removeEventListener("input",this.rerender),this.data.html.removeEventListener("change",this.rerender),e.dispose()),this.activeRaycaster=null,this.mouseMoveDetail.detail.cursorEl=null,this.mouseMoveDetail.detail.intersection=null,this.cursor=null}})}(THREE);
//# sourceMappingURL=aframe-html.min.js.map