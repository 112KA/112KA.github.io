(function(t){function i(i){for(var n,s,a=i[0],u=i[1],l=i[2],c=0,h=[];c<a.length;c++)s=a[c],r[s]&&h.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(i);while(h.length)h.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,i=0;i<o.length;i++){for(var e=o[i],n=!0,a=1;a<e.length;a++){var u=e[a];0!==r[u]&&(n=!1)}n&&(o.splice(i--,1),t=s(s.s=e[0]))}return t}var n={},r={index:0},o=[];function s(i){if(n[i])return n[i].exports;var e=n[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,i,e){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)s.d(e,n,function(i){return t[i]}.bind(null,n));return e},s.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=i,a=a.slice();for(var l=0;l<a.length;l++)i(a[l]);var p=u;o.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("3999")},3999:function(t,i,e){"use strict";e.r(i);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("h1",[t._v("Tiling Squere Image")]),e("Tile",{attrs:{images:t.images,nDivH:15,nDivV:10}})],1)},o=[],s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div")},a=[],u=(e("c5f6"),e("d225")),l=e("b0b4"),p=function(){function t(i,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;Object(u["a"])(this,t),this.nDivH=i,this.nDivV=e,this.map=[],this.maxSize=n,this.space=this.nDiv,this.position=0}return Object(l["a"])(t,[{key:"next",value:function(){var t,i,e=this.position+this.nDivH*this.maxSize;for(t=this.position;t<e;t++)if(this.map.length===t||!this.map[t]){this.position=t;break}var n=~~(this.position/this.nDivH);if(!(n>=this.nDivV)){var r=Math.ceil((this.position+1)/this.nDivH)*this.nDivH,o=this.nDivV-n,s=0;for(t=this.position;t<r;t++){if(this.map[t])break;s++}var a=1+~~(Math.min(s,this.maxSize,o)*Math.random()),u=this.position;for(i=0;i<a;i++){for(t=0;t<a;t++)this.map[u++]=1;u+=this.nDivH-a}return u=this.position,this.position+=a,{x:u%this.nDivH,y:~~(u/this.nDivH),size:a}}}}]),t}(),c={props:{images:{type:Array,required:!0},nDivH:{type:Number,required:!1,defalut:10},nDivV:{type:Number,required:!1,defalut:10}},mounted:function(){console.log(this.nDivH),this.layout=new p(this.nDivH,this.nDivV);var t=this.images.map(function(t){var i=new Image;return i.src=t,i});console.log(t);var i,e=40;while(i=this.layout.next()){var n=t[0].cloneNode(!0),r=n.style;r.position="absolute",r.width=i.size*e+"px",r.transform="translate("+i.x*e+"px, "+i.y*e+"px)",this.$el.appendChild(n)}}},h=c,f=e("2877"),v=Object(f["a"])(h,s,a,!1,null,"b5548f0e",null),d=v.exports,m={name:"app",components:{Tile:d},data:function(){return{images:["./images/squere-tiling/256x256.png","./images/squere-tiling/256x256.png","./images/squere-tiling/256x256.png","./images/squere-tiling/256x256.png"]}}},g=m,b=(e("8744"),Object(f["a"])(g,r,o,!1,null,null,null)),y=b.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(y)}}).$mount("#app")},"433a":function(t,i,e){},8744:function(t,i,e){"use strict";var n=e("433a"),r=e.n(n);r.a}});
//# sourceMappingURL=index.aebef7f1.js.map