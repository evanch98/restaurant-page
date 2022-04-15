(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Square+Peg&display=swap);"]),a.push([t.id,":root {\n    font-family: 'Square Peg', cursive;\n    font-weight: 600;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: #E7DEC8;\n    width: 100vw;\n    height: 100vh;\n\n    display: flex;\n}\n\n#content {\n    width: 100%;\n    height: 100%;\n\n    background-color: #E7DEC8;\n    border-top: 100px solid #CBAF87;\n    border-bottom: 50px solid #CBAF87;\n}\n\n#main {\n    width: 100%;\n    height: 100%;\n\n    padding-right: 50px;\n    padding-left: 50px;\n\n    display: grid;\n    grid-template-columns: 1fr 0.5fr 1fr;\n\n    position: relative;\n}\n\n#tab1, #tab2, #tab3 {\n    width: 150px;\n    height: 50px;\n\n    font-size: 24px;\n\n    background-color: #7E8A97;\n\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    cursor: pointer;\n}\n\n#tab1 {\n    top: 75px;\n    right: 500px;\n}\n\n#tab2 {\n    top: 75px;\n    right: 300px;\n}\n\n#tab3 {\n    top: 75px;\n    right: 100px;\n}\n\n.name {\n    position: fixed;\n    top: 25px;\n    left: 10px;\n    width: 400px;\n    height: 50px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 30px;\n}\n\n.about, .intro {\n    height: 100%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.about {\n    font-size: 60px;\n}\n\n.intro {\n    font-size: 30px;\n}\n\n.right {\n    display: grid;\n    grid-template-rows: 200px 200px;\n    align-content: center;\n    gap: 5px;\n}\n\n.mid > img {\n    width: 300px;\n    height: 300px;\n}\n\n.mid {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.bottom {\n    font-size: 24px;\n\n    position: fixed;\n    bottom: 0px;\n    width: 100%;\n    height: 50px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}",""]);const c=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var s=r(t,o),d=0;d<i.length;d++){var l=n(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),i=n(569),a=n.n(i),c=n(565),s=n.n(c),d=n(216),l=n.n(d),p=n(589),u=n.n(p),m=n(426),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=n.p+"5f3b4c6145f90affdd76.jpeg";function v(){const t=new Image;t.src=f,document.querySelector("body");const e=document.querySelector("div"),n=document.createElement("div");n.setAttribute("id","main");const r=document.createElement("div");r.textContent="Home",r.setAttribute("id","tab1"),r.style.backgroundColor="#30475E",r.style.color="white";const o=document.createElement("div");o.textContent="Menu",o.setAttribute("id","tab2");const i=document.createElement("div");i.textContent="Contact Us",i.setAttribute("id","tab3");const a=document.createElement("div");a.textContent="Little Myanmar Town",a.classList.add("name");const c=document.createElement("div");c.textContent="Myanmar Cuisine Beyond its boundaries.",c.classList.add("about");const s=document.createElement("div");s.classList.add("right");const d=document.createElement("div");d.textContent="At Little Myanmar Town, we are constantly searching for the aromas and flavors of Myanmar. Join us in the world of Little Myanmar Town, share our passion and     let us present our country's harvest in the most delicious light.",d.classList.add("intro");const l=document.createElement("div");l.innerHTML="Lunch: 12:00 pm - 2:00 pm (Thursday to Saturday) <br>    Dinner: 6:00 pm to 8:45 pm (Monday to Saturday)",l.classList.add("intro");const p=document.createElement("div");p.classList.add("mid"),p.appendChild(t);const u=document.createElement("div");u.classList.add("bottom"),u.textContent="Created by Kyaw Thu. Little Myanmar Town © 2022 | All Rights Reserved",s.appendChild(d),s.appendChild(l),n.appendChild(a),n.appendChild(r),n.appendChild(o),n.appendChild(i),n.appendChild(c),n.appendChild(p),n.appendChild(s),n.appendChild(u),e.appendChild(n)}const y=document.querySelector("#content");v(),document.querySelector("#tab1").addEventListener("click",(()=>{y.removeChild(y.firstChild),v(),alert("Home")})),document.querySelector("#tab2").addEventListener("click",(()=>{y.removeChild(y.firstChild),function(){document.querySelector("body");const t=document.querySelector("div"),e=document.createElement("div");e.setAttribute("id","main");const n=document.createElement("div");n.textContent="Home",n.setAttribute("id","tab1"),n.style.backgroundColor="#30475E",n.style.color="white";const r=document.createElement("div");r.textContent="Menu",r.setAttribute("id","tab2");const o=document.createElement("div");o.textContent="Contact Us",o.setAttribute("id","tab3");const i=document.createElement("div");i.textContent="Little Myanmar Town",i.classList.add("name");const a=document.createElement("div");a.classList.add("bottom"),a.textContent="Created by Kyaw Thu. Little Myanmar Town © 2022 | All Rights Reserved",e.appendChild(i),e.appendChild(n),e.appendChild(r),e.appendChild(o),e.appendChild(a),t.appendChild(e)}(),alert("Menu")}))})()})();