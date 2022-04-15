(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Beau+Rivage&display=swap);"]),i.push([t.id,":root {\n    font-family: 'Beau Rivage', cursive;\n    font-weight: 600;\n    font-size: 20px;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: #E7DEC8;\n    width: 100vw;\n    height: 100vh;\n\n    display: flex;\n}\n\n#content {\n    width: 100%;\n    height: 100%;\n\n    background-color: #E7DEC8;\n    border-top: 100px solid #CBAF87;\n    border-bottom: 50px solid #CBAF87;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n}\n\n#tab1, #tab2, #tab3 {\n    width: 150px;\n    height: 50px;\n\n    background-color: #7E8A97;\n\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    cursor: pointer;\n}\n\n#tab1 {\n    top: 75px;\n    right: 500px;\n}\n\n#tab2 {\n    top: 75px;\n    right: 300px;\n}\n\n#tab3 {\n    top: 75px;\n    right: 100px;\n}",""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,p="".concat(u," ").concat(d);a[u]=d+1;var l=n(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var v=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=r(t,o),u=0;u<a.length;u++){var d=n(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},298:(t,e,n)=>{n.d(e,{L:()=>b});var r=n(379),o=n.n(r),a=n(795),i=n.n(a),c=n(569),s=n.n(c),u=n(565),d=n.n(u),p=n(216),l=n.n(p),f=n(589),v=n.n(f),h=n(426),m={};function b(){const t=document.querySelector("body"),e=document.createElement("div");e.setAttribute("id","content"),e.textContent="Hello, World!";const n=document.createElement("div");n.textContent="Home",n.setAttribute("id","tab1"),n.style.backgroundColor="#30475E",n.style.color="white";const r=document.createElement("div");r.textContent="Menu",r.setAttribute("id","tab2");const o=document.createElement("div");o.textContent="Contact Us",o.setAttribute("id","tab3"),e.appendChild(n),e.appendChild(r),e.appendChild(o),t.appendChild(e)}m.styleTagTransform=v(),m.setAttributes=d(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l(),o()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(0,n(298).L)()})();