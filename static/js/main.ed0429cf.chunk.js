(this.webpackJsonpmailstats=this.webpackJsonpmailstats||[]).push([[0],{183:function(e,t,a){},251:function(e,t,a){},256:function(e,t,a){},258:function(e,t,a){},259:function(e,t,a){},260:function(e,t,a){},393:function(e,t,a){},394:function(e,t,a){},397:function(e,t,a){},398:function(e,t,a){},399:function(e,t,a){"use strict";a.r(t);var c,s=a(0),r=a(215),n=a.n(r),i=(a(251),a(10)),l=a(28),o=a(5),j=a(46),u=(a(256),a(419)),d=a(3),b=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(!1),n=Object(o.a)(r,2),b=n[0],h=n[1],m=function(){var e=Object(l.a)(Object(i.a)().mark((function e(){var t,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),console.log("trigger Axios"),e.next=4,j.a.get("https://mailstats-api.onrender.com/api/v1/queueStats");case 4:t=e.sent,console.log(t.data),a=t.data.sort((function(e,t){return Number(new Date(e.documentID))-Number(new Date(t.documentID))})),200===t.status&&(c(a),h(!1));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){m()}),[]),Object(s.useEffect)((function(){var e=setInterval((function(){return m()}),3e4);return function(){return clearInterval(e)}}),[]);var O=Object(d.jsx)(u.a,{color:"#4f5e7d",loading:b,size:33}),f=a.filter((function(e){return"NoData"!==e.serverName}));return console.log(f),Object(d.jsxs)("div",{className:"QueueStats",children:[Object(d.jsx)("div",{className:"pagelabel",children:Object(d.jsx)("p",{children:"SMTP Queue Stats"})}),Object(d.jsx)("div",{className:"spinnerQueue",children:O}),f.map((function(e){return Object(d.jsx)("div",{className:"listItemWrapperQueue",children:Object(d.jsx)("div",{className:"listItemWrapperInnerQueue",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:"listItemQueue1",children:Object(d.jsx)("div",{className:"serverlabelQueue",children:Object(d.jsx)("p",{children:e.serverName})})}),Object(d.jsxs)("li",{className:"listItemQueue2",children:[Object(d.jsxs)("div",{className:"queueLabel",children:[Object(d.jsx)("p",{className:"label",children:"Queue:"})," ",e.queueName]}),Object(d.jsx)("div",{className:"messageCount",children:e.messageCount})]})]})})})}))]})},h=(a(258),function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(!1),n=Object(o.a)(r,2),b=n[0],h=n[1],m=function(){var e=Object(l.a)(Object(i.a)().mark((function e(){var t,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),console.log("trigger Axios"),e.next=4,j.a.get("https://mailstats-api.onrender.com/api/v1/serviceStats");case 4:t=e.sent,console.log(t.data),a=t.data.sort((function(e,t){return Number(new Date(e.documentID))-Number(new Date(t.documentID))})),200===t.status&&(c(a),h(!1));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){m()}),[]),Object(s.useEffect)((function(){var e=setInterval((function(){return m()}),3e4);return function(){return clearInterval(e)}}),[]);var O=Object(d.jsx)(u.a,{color:"#4f5e7d",loading:b,size:33}),f=a.filter((function(e){return"NoData"!==e.serverName}));return console.log(f),Object(d.jsxs)("div",{className:"ServiceStats",children:[Object(d.jsx)("div",{className:"pagelabelsvc",children:Object(d.jsx)("p",{children:"SMTP Service Stats"})}),Object(d.jsx)("div",{className:"spinnerSVC",children:O}),f.map((function(e){return Object(d.jsx)("div",{className:"listItemWrapperSVC",children:Object(d.jsx)("div",{className:"listItemWrapperInner",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:"listItemSVC",children:Object(d.jsx)("div",{className:"serverlabelsvc",children:Object(d.jsx)("p",{children:e.serverName})})}),Object(d.jsx)("li",{className:"listItemSVC",children:Object(d.jsxs)("div",{className:"serviceDetails",children:[Object(d.jsx)("p",{className:"servicelabel",children:"Service:"}),Object(d.jsx)("p",{children:e.serviceName})]})})]})})})}))]})}),m=(a(259),a(260),function(e){console.log(e.data);var t=e.data;return Object(d.jsx)("div",{children:t.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"serverlabelDisk",children:Object(d.jsx)("p",{children:e.serverName})}),Object(d.jsxs)("div",{className:"displayFrame",children:[Object(d.jsx)("div",{className:"header",children:"Drive"}),Object(d.jsx)("div",{className:"header",children:"Total Space"}),Object(d.jsx)("div",{className:"header",children:"Free Space"}),Object(d.jsx)("div",{className:"headerBar"}),Object(d.jsx)("div",{className:"header",children:"% Free"})]}),e.volumes.map((function(e){var t,a;console.log(e.capacityGB,e.freeSpaceGB),t=e.capacityGB>=1024?Math.floor(e.capacityGB/1024).toString().concat(" TB"):Math.floor(e.capacityGB).toString().concat(" GB"),a=e.freeSpaceGB>=1024?Math.floor(e.freeSpaceGB/1024).toString().concat(" TB"):Math.floor(e.freeSpaceGB).toString().concat(" GB");var c,s=Math.floor(e.freeSpaceGB/e.capacityGB*100),r=s.toString().concat("%");c=s<15?s<8?"IndianRed":"Gold":"YellowGreen",console.log(r);var n={backgroundColor:c,width:r};return Object(d.jsxs)("div",{className:"volumesMainGrid",children:[Object(d.jsx)("div",{className:"driveLabelDisk",children:e.label}),Object(d.jsx)("div",{className:"totalSizeDisk",children:t}),Object(d.jsx)("div",{className:"freeSpaceDisk",children:a}),Object(d.jsx)("div",{className:"freeSpaceChartBarDisk",children:Object(d.jsx)("div",{className:"diskBar",style:n})}),Object(d.jsxs)("div",{className:"freeSpacePerCentDisk",children:[s,"%"]})]})}))]})}))})}),O=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(!1),n=Object(o.a)(r,2),b=n[0],h=n[1],O=function(){var e=Object(l.a)(Object(i.a)().mark((function e(){var t,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),console.log("trigger Axios"),e.next=4,j.a.get("https://mailstats-api.onrender.com/api/v1/diskStats");case 4:t=e.sent,a=t.data.sort((function(e,t){return e.serverName.localeCompare(t.serverName)})),200===t.status&&(c(a),h(!1));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){O()}),[]),Object(s.useEffect)((function(){var e=setInterval((function(){return O()}),3e5);return function(){return clearInterval(e)}}),[]);var f=Object(d.jsx)(u.a,{color:"#4f5e7d",loading:b,size:33}),v=a.filter((function(e){return"NoData"!==e.serverName}));return console.log(v),Object(d.jsxs)("div",{className:"DiskStats",children:[Object(d.jsx)("div",{className:"pagelabelDisk",children:Object(d.jsx)("p",{children:"Exchange Disk Stats"})}),Object(d.jsx)("div",{className:"spinnerSVC",children:f}),Object(d.jsx)("div",{className:"WrapperDisk",children:Object(d.jsx)(m,{data:v})})]})},f=(a(183),a(234)),v=a(416),p=a(415),x=a(418),N=a(408),g=a(412),S=a(232),y=a(233),k=a(118),D=a(115),I=a(238),w=["MicrosoftExchange329e71ec88ae4615bbc36ab6ce41109e@mahidol.ac.th"],C=function(e){var t=Object(s.useState)([]),a=Object(o.a)(t,2),r=a[0],n=a[1],b=Object(s.useState)(!1),h=Object(o.a)(b,2),m=h[0],O=h[1],f=Object(s.useState)(!1),v=Object(o.a)(f,2),p=v[0],x=v[1],C=Object(s.useState)(25e3),E=Object(o.a)(C,2),B=E[0],G=E[1],M=[0,25e3],H=e.date.start.getFullYear(),P=e.date.start.getMonth()+1,Q=e.date.start.getDate();P=String(P).padStart(2,0),Q=String(Q).padStart(2,0);var q="".concat(H,"-").concat(P,"-").concat(Q),T=function(){var e=Object(l.a)(Object(i.a)().mark((function e(t){var a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O(!1),x(!0),"1999-0-1"===t){e.next=7;break}return e.next=5,j.a.get("https://mailstats-api.onrender.com/api/v1/spamStats/?date=".concat(t));case 5:200===(a=e.sent).status&&x(!1);case 7:return e.abrupt("return",a.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function A(){return A=Object(l.a)(Object(i.a)().mark((function e(t){var a,s,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t);case 2:a=e.sent,s=a.sort((function(e,t){return Number(t.messageCount)-Number(e.messageCount)})),r=s.filter((function(e,t){return t<25})),(c=r.filter((function(e){return!w.includes(e.sender)}))).length>0&&(console.log(c[0].messageCount),G(c[0].messageCount)),n(c),c.length&&O(!0);case 9:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}Object(s.useEffect)((function(){!function(e){A.apply(this,arguments)}(q)}),[q]);var L=Object(d.jsx)(u.a,{color:"#4f5e7d",loading:p,size:33});return M[1]=Number(B),p?Object(d.jsx)("div",{className:"spinnerSVC",children:L}):m?Object(d.jsx)("div",{children:Object(d.jsxs)(N.a,{layout:"vertical",width:1e3,height:800,data:r,margin:{top:60,right:180,left:180,bottom:5},children:[Object(d.jsx)(g.a,{strokeDasharray:"3 3"}),Object(d.jsx)(S.a,{type:"number",dataKey:"messageCount",domain:M}),Object(d.jsx)(y.a,{type:"category",dataKey:"sender"}),Object(d.jsx)(k.a,{}),Object(d.jsx)(D.a,{}),Object(d.jsx)(I.a,{dataKey:"messageCount",fill:"#3397a5"})]})}):void 0},E=function(){var e=Object(s.useState)({month:10,year:2022}),t=Object(o.a)(e,2),a=t[0],c=a.month,r=a.year,n=t[1],u=Object(s.useState)({start:new Date("1999-1-1"),end:new Date("1999-1-1")}),b=Object(o.a)(u,2),h=b[0],m=b[1],O=Object(s.useState)([]),N=Object(o.a)(O,2),g=N[0],S=N[1],y=Object(s.useState)([]),k=Object(o.a)(y,2),D=k[0],I=k[1],w=function(){var e=Object(l.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://mailstats-api.onrender.com/api/v1/spamStatsDates");case 2:(t=e.sent).status,S(t.data),console.log(t.data[0]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){w()}),[]);var E=[];Object(s.useEffect)((function(){!function(e,t){var a=String(e+1).padStart(2,0),c="".concat(t,"-").concat(a),s=document.getElementsByClassName("Polaris-DatePicker__Day");Array.from(s).forEach((function(e){var t=String(e.innerText).padStart(2,0),a="".concat(c,"-").concat(t);if(g.includes(a)&&e.classList.toggle("Polaris-DatePicker__Day__withData"),!g.includes(a)){var s=a.concat("T00:00:00");E.push(new Date(s))}})),I(E)}(c,r)}),[c,r,g]);var B=Object(s.useCallback)((function(e,t){return n({month:e,year:t})}),[]);return Object(d.jsxs)("div",{className:"SpamStats",children:[Object(d.jsx)("div",{className:"pagelabelSpam",children:Object(d.jsx)("p",{children:"Top Senders"})}),Object(d.jsx)("div",{className:"datePicker",children:Object(d.jsx)(v.a,{i18n:f,children:Object(d.jsx)(p.a,{children:Object(d.jsx)(x.a,{month:c,year:r,onChange:m,onMonthChange:B,selected:h,disableDatesBefore:new Date("2022-10-31"),disableDatesAfter:new Date,disableSpecificDates:D})})})}),Object(d.jsx)("div",{className:"WrapperSpam",children:Object(d.jsx)(C,{date:h})})]})},B=(a(393),a(420)),G=a(150),M=(a(394),function(e){console.log(e.data);var t,a=e.data;return console.log(a),Object(d.jsx)(B.a,{children:a.map((function(e){return console.log(e[Object.keys(e)[0]]),t="unhealthy"===e[Object.keys(e)[0]].queuesHealth||"unhealthy"===e[Object.keys(e)[0]].servicesHealth||"unhealthy"===e[Object.keys(e)[0]].diskHealth?{borderLeft:"10px solid IndianRed"}:{borderLeft:"10px solid YellowGreen"},Object(d.jsx)("div",{style:t,children:Object(d.jsx)(B.a.Item,{title:Object.keys(e)[0],children:Object(d.jsxs)(G.c,{children:[Object(d.jsxs)("div",{className:"heatlhItemGrid",children:[Object(d.jsx)("div",{className:"healthItemPara",children:"Services : "}),Object(d.jsx)("div",{className:"healthItemParaStatus",children:e[Object.keys(e)[0]].servicesHealth})]}),Object(d.jsxs)("div",{className:"heatlhItemGrid",children:[Object(d.jsx)("div",{className:"healthItemPara",children:"Mail Queues : "}),Object(d.jsx)("div",{className:"healthItemParaStatus",children:e[Object.keys(e)[0]].queuesHealth})]}),Object(d.jsxs)("div",{className:"heatlhItemGrid",children:[Object(d.jsx)("div",{className:"healthItemPara",children:"Disk Space : "}),Object(d.jsx)("div",{className:"healthItemParaStatus",children:e[Object.keys(e)[0]].diskHealth})]})]})})},Object.keys(e)[0])}))})});var H=function(){var e,t,a=Object(s.useState)([]),c=Object(o.a)(a,2),r=c[0],n=c[1],b=Object(s.useState)(!1),h=Object(o.a)(b,2),m=h[0],O=h[1],f=function(){var a=Object(l.a)(Object(i.a)().mark((function a(){var c,s,r,l,o,u,d,b,h,m,f;return Object(i.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return O(!0),a.next=3,j.a.get("https://mailstats-api.onrender.com/api/v1/diskStats");case 3:return c=a.sent,s=c.data.sort((function(e,t){return e.serverName.localeCompare(t.serverName)})),r=s.filter((function(e){return"NoData"!==e.serverName})),console.log(r),t=new Array(0),r.forEach((function(e){t.push(e.serverName)})),e=new Array(0),t.forEach((function(t){var a={};a[t]={diskHealth:"healthy",servicesHealth:"healthy",queuesHealth:"healthy"},e.push(a)})),r.forEach((function(t){t.volumes.forEach((function(a){a.freeSpaceGB/a.capacityGB<.15&&(console.log("".concat(t.serverName," unheathy volumes")),e.find((function(e){return Object.keys(e).includes(t.serverName)}))[t.serverName].diskHealth="unhealthy")}))})),a.next=14,j.a.get("https://mailstats-api.onrender.com/api/v1/serviceStats");case 14:return l=a.sent,o=l.data.sort((function(e,t){return e.serverName.localeCompare(t.serverName)})),u=o.filter((function(e){return"NoData"!==e.serverName})),console.log(u),d=[],u.forEach((function(e){return d.push(e.serverName)})),console.log(d),t.forEach((function(t){d.includes(t)&&(e.find((function(e){return Object.keys(e).includes(t)}))[t].servicesHealth="unhealthy")})),a.next=24,j.a.get("https://mailstats-api.onrender.com/api/v1/queueStats");case 24:b=a.sent,h=b.data.sort((function(e,t){return e.serverName.localeCompare(t.serverName)})),m=h.filter((function(e){return"NoData"!==e.serverName})),console.log(m),f=[],m.forEach((function(e){return f.push(e.serverName)})),console.log(f),t.forEach((function(t){f.includes(t)&&(e.find((function(e){return Object.keys(e).includes(t)}))[t].queuesHealth="unhealthy")})),200===b.status&&(console.log(e),n(e),O(!1));case 33:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();Object(s.useEffect)((function(){f()}),[]),Object(s.useEffect)((function(){var e=setInterval((function(){f()}),3e4);return function(){return clearInterval(e)}}),[]);var v=Object(d.jsx)(u.a,{color:"#4f5e7d",loading:m,size:33});return console.log(r),Object(d.jsxs)("div",{className:"home",children:[Object(d.jsx)("p",{children:"Mail Stats"}),Object(d.jsx)("div",{className:"spinnerSVC",children:v}),Object(d.jsx)("div",{className:"WrapperAccordion",children:Object(d.jsx)(M,{data:r})})]})},P=a(77),Q=a(9),q=a(414),T=a(421),A=a(97);a(397);var L=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(d.jsxs)(q.a,{isOpen:a,onClose:function(){return c(!1)},children:[Object(d.jsx)(q.a.Trigger,{children:Object(d.jsx)(T.a,{variant:"secondary",icon:Object(d.jsx)(A.c,{}),"aria-label":"toggle menu",onClick:function(){return c(!a)}})}),Object(d.jsx)(q.a.List,{children:Object(d.jsxs)("div",{className:"menuList",children:[Object(d.jsx)(P.b,{to:"/Home",component:q.a.Item,as:"a",children:"Home"}),Object(d.jsx)(q.a.Divider,{}),Object(d.jsx)(P.b,{to:"/queuestats",component:q.a.Item,as:"a",children:"Mail Queue Statistics"}),Object(d.jsx)(q.a.Divider,{}),Object(d.jsx)(P.b,{to:"/servicestats",component:q.a.Item,as:"a",children:"Mail Service Statistics"}),Object(d.jsx)(q.a.Divider,{}),Object(d.jsx)(P.b,{to:"/diskstats",component:q.a.Item,as:"a",children:"Server Disk Statistics"}),Object(d.jsx)(q.a.Divider,{}),Object(d.jsx)(P.b,{to:"/spamstats",component:q.a.Item,as:"a",children:"Top Senders"})]})})]})},V=(a(398),function(){return Object(d.jsx)("div",{className:"AppFrame",children:Object(d.jsxs)(P.a,{children:[Object(d.jsx)("div",{className:"burger",children:Object(d.jsx)(L,{})}),Object(d.jsxs)(Q.c,{children:[Object(d.jsx)(Q.a,{exact:!0,path:"/",element:Object(d.jsx)(H,{})}),Object(d.jsx)(Q.a,{path:"/home",element:Object(d.jsx)(H,{})}),Object(d.jsx)(Q.a,{path:"/queuestats",element:Object(d.jsx)(b,{})}),Object(d.jsx)(Q.a,{path:"/servicestats",element:Object(d.jsx)(h,{})}),Object(d.jsx)(Q.a,{path:"/diskstats",element:Object(d.jsx)(O,{})}),Object(d.jsx)(Q.a,{path:"/spamstats",element:Object(d.jsx)(E,{})})]})]})})});n.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(V,{}))}},[[399,1,2]]]);
//# sourceMappingURL=main.ed0429cf.chunk.js.map