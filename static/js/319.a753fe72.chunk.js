"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[319],{9160:function(n,e,t){t.d(e,{Ai:function(){return i},HW:function(){return o},SB:function(){return p},fS:function(){return s},yd:function(){return f}});var r=t(4165),a=t(5861),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="8ae0eb13b175efdd49cca3af4a1ffe3d",o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(c,"&include_adult=false&language=en-US&page=1&query=").concat(e));case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},8649:function(n,e,t){t.d(e,{Z:function(){return d}});var r,a,u,c=t(7689),o=t(168),i=t(7109),s=t(1087),f=i.Z.ul(r||(r=(0,o.Z)(["\n  list-style-type: none;\n"]))),p=i.Z.li(a||(a=(0,o.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),l=(0,i.Z)(s.OL)(u||(u=(0,o.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),v=t(184),d=function(n){var e=n.films,t=(0,c.TH)();return(0,v.jsx)(f,{children:e.map((function(n){var e=n.id,r=n.title;return(0,v.jsx)(p,{children:(0,v.jsx)(l,{to:"/movies/".concat(e),state:{from:t},children:r})},e)}))})}},5319:function(n,e,t){t.r(e);var r=t(4165),a=t(5861),u=t(9439),c=t(9160),o=t(7938),i=t(8649),s=t(1686),f=t.n(s),p=t(2791),l=t(184);e.default=function(){var n=(0,p.useState)([]),e=(0,u.Z)(n,2),t=e[0],s=e[1],v=(0,p.useState)(!1),d=(0,u.Z)(v,2),Z=d[0],h=d[1];return(0,p.useEffect)((function(){var n=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,c.HW)();case 4:e=n.sent,s(e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),f().Notify.failure("Something went wrong. Try to reload your page!");case 11:return n.prev=11,h(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,l.jsxs)("main",{children:[(0,l.jsx)("h1",{children:"Trending today"}),(0,l.jsx)(i.Z,{films:t}),Z&&(0,l.jsx)(o.Z,{})]})}}}]);
//# sourceMappingURL=319.a753fe72.chunk.js.map