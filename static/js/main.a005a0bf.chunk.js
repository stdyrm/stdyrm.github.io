(this.webpackJsonpcovidcompare=this.webpackJsonpcovidcompare||[]).push([[0],{167:function(e,t,a){e.exports=a(178)},176:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(11),r=a.n(i),l=a(24),c=a(8),s=a(220),d=a(16),u=a(100),m=a(88),h=a.n(m),f=a(20),p=o.a.createContext(),b=o.a.createContext(),g=o.a.createContext(),k={dateFormatter:c.k("%m-%d-%y"),dateParser:c.l("%m-%d-%y")},w={width:window.innerWidth,height:750,margin:{top:80,right:100,bottom:120,left:100}},v={width:w.width-w.margin.left-w.margin.right,height:w.height-w.margin.top-w.margin.bottom},y=function(e){var t=e.focus,a=e.overlay,o=e.linesStates,i=Object(n.useContext)(p).dataStates,r=Object(n.useContext)(b).selectedStates,l=(Object(n.useContext)(g).theme,c.i().domain(c.e(i,(function(e){return e.dayOfOutbreak}))).range([0,v.width])),s=c.i().domain(c.e(i,(function(e){return e.casesPerThousand}))).range([v.height,0]);return Object(n.useEffect)((function(){if(a){a.on("mousemove",(function(){var n=l.invert(c.g(this)[0]),o=c.c((function(e){return e.dayOfOutbreak})).left;Object.keys(r).sort().filter((function(e){return!0===r[e].selected})).forEach((function(c,d){var u=i.filter((function(e){return e.state===c})),m=r[c].htmlFormat,h=o(u,n,0),f=u[h]?u[h].casesPerThousand:u[u.length-1].casesPerThousand,p=u[h]?u[h].dayOfOutbreak:u[u.length-1].dayOfOutbreak,b=u[h]?k.dateFormatter(u[h].date):k.dateFormatter(u[u.length-1].date),g=u[h]?u[h].cases:u[u.length-1].cases;a.on("click",(function(){e=!e})),e||(t.select("#circle-".concat(m)).attr("cy",s(f)).attr("cx",l(p)),t.select("#d-label-".concat(m)).text("".concat(r[c].abbreviation," => ").concat(b," (Day: ").concat(p,")")).attr("fill",r[c].color),t.select("#d-label-b-".concat(m)).text("".concat(g," cases (").concat(f.toFixed(3)," per 1000)")).attr("fill",r[c].color))}))}));var e=!1}}),[o]),null},O=function(e){var t=e.focus,a=e.overlay,i=Object(n.useContext)(b).selectedStates,r=Object(n.useContext)(p).dataStates,s=Object(n.useContext)(g),d=s.theme,u=(s.setTheme,Object(n.useState)([])),m=Object(l.a)(u,2),h=m[0],k=m[1];return Object(n.useEffect)((function(){return function(){t.selectAll(["circle","text"]).attr("display","none")}}),[i]),Object(n.useEffect)((function(){if(r.length>0){var e=c.i().domain(c.e(r,(function(e){return e.dayOfOutbreak}))).range([0,v.width]),a=c.i().domain(c.e(r,(function(e){return e.casesPerThousand}))).range([v.height,0]),n=c.f().x((function(t){return e(t.dayOfOutbreak)})).y((function(e){return a(e.casesPerThousand)})),o={};Object.keys(i).sort().filter((function(e){return!0===i[e].selected})).forEach((function(l,c){var s=r.filter((function(e){return e.state===l})),u=f[l].htmlFormat,m=s[s.length-1].dayOfOutbreak,h=s[s.length-1].casesPerThousand,p=(i[l].lockdown-s[0].date)/864e5+1,b=s.filter((function(e){return e.dayOfOutbreak===p}))[0];o[l]=b?{line:n(s),lineLabelX:e(m)+3,lineLabelY:a(h),lockdownMarkerX:e(p),lockdownMarkerY:a(b.casesPerThousand)}:{line:n(s),lineLabelX:e(m)+3,lineLabelY:a(h)};var g=0,k=0;c>12&&(g+=200,k=520),t.append("circle").attr("id","circle-".concat(u)).attr("r",5).attr("fill",i[l].color).attr("stroke",d.palette.text.primary),c<26&&(t.append("text").attr("id","d-label-".concat(u)).attr("x",10+g).attr("y",10+40*c-k).style("font-size",12),t.append("text").attr("id","d-label-b-".concat(u)).attr("x",10+g).attr("y",25+40*c-k).style("font-size",12))})),k(o)}}),[r,i]),o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{focus:t,overlay:a,linesStates:h}),r.length>0?Object.keys(h).sort().map((function(e,t){var a=f[e].htmlFormat;return o.a.createElement("g",{key:t,id:"bounds-render-".concat(a)},o.a.createElement("path",{fill:"none",stroke:i[e].color,strokeWidth:2,strokeLinejoin:"round",strokeLinecap:"round",d:h[e].line}),o.a.createElement("circle",{id:"line-marker-lockdown",r:4,fill:h[e].lockdownMarkerX?i[e].color:"none",cx:h[e].lockdownMarkerX,cy:h[e].lockdownMarkerY}),o.a.createElement("text",{id:"line-label-".concat(a),className:"line-label",style:{fill:d.palette.text.primary,fontSize:"14px"},x:h[e].lineLabelX,y:h[e].lineLabelY},i[e].abbreviation))})):o.a.createElement("g",null))},E=a(205),C=w.width,j=w.height,x=w.margin,S=Object(E.a)((function(e){return{title:{fill:e.palette.text.primary,fontSize:"2.5vh"},axes:{fill:e.palette.text.primary},axisLabel:{fill:e.palette.text.primary,fontSize:"2vh"},footnotes:{fontSize:"10px"}}})),F=function(){var e=Object(n.useContext)(p).dataStates,t=Object(n.useContext)(g).theme,a=Object(n.useRef)(null),i=Object(n.useRef)(null),r=Object(n.useRef)(null),l=Object(n.useRef)(null),s=S(),d=c.j(l.current).append("g").attr("class","focus").style("display","none"),u=c.j(l.current).append("rect").attr("class","overlay").attr("width",v.width).attr("height",v.height).attr("opacity","0").on("mouseover",(function(){return d.style("display",null)}));return Object(n.useEffect)((function(){var t=c.i().domain(c.e(e,(function(e){return e.dayOfOutbreak}))).range([0,v.width]),n=c.i().domain(c.e(e,(function(e){return e.casesPerThousand}))).range([v.height,0]),o=c.b().scale(n),r=c.a().scale(t);c.j(i.current).call(r),c.j(a.current).call(o)}),[e,window.innerWidth]),o.a.createElement("div",{height:j,width:C},o.a.createElement("svg",{id:"chart",height:j,width:C,ref:r},o.a.createElement("text",{className:s.title,style:{fill:t.palette.text.primary},textAnchor:"middle",transform:"translate (".concat(x.left+v.width/2,", ").concat(x.top/2,")")},"COVID-19 US State Comparison"),o.a.createElement("text",{className:s.axisLabel,style:{fill:t.palette.text.primary},textAnchor:"middle",transform:"translate(".concat(x.left+v.width/2,", ").concat(v.height+x.top+40,")")},"Day of Outbreak"),o.a.createElement("text",{className:s.axisLabel,style:{fill:t.palette.text.primary},textAnchor:"middle",transform:"translate(".concat(C-v.width-x.right-40,", ").concat(v.height/2,") rotate(-90)")},"Cases per 1000 people"),o.a.createElement("text",{className:s.footnotes,textAnchor:"left",style:{fill:t.palette.text.primary},transform:"translate(".concat(x.left,", ").concat(v.height+x.top+60,")")},"*Data from The New York Times, based on reports from state and local health agencies."),o.a.createElement("text",{className:s.footnotes,textAnchor:"left",style:{fill:t.palette.text.primary},transform:"translate(".concat(x.left,", ").concat(v.height+x.top+80,")")},"**Population data from US Census Bureau (2019)."),o.a.createElement("text",{className:s.footnotes,textAnchor:"left",style:{fill:t.palette.text.primary},transform:"translate(".concat(x.left,", ").concat(v.height+x.top+100,")")},"***2/27 is earliest possible 'Day 1,' since prior cases were isolated and may skew insights of \"community spread\""),o.a.createElement("g",{id:"bounds",transform:"translate(".concat(x.left,", ").concat(x.top,")"),ref:l},o.a.createElement("g",{ref:a,id:"y-axis",style:{color:t.palette.text.primary}}),o.a.createElement("g",{ref:i,id:"x-axis",transform:"translate(0,".concat(v.height,")"),style:{color:t.palette.text.primary}}),o.a.createElement(O,{focus:d,overlay:u}))))},M=a(42),L=a(13),N=a(218),A=a(214),T=a(213),P=a(219),B=a(225),D=a(217),W=a(3),I=a(208),G=a(102),R=a(224),H=a(221),Y=function(){var e=Object(n.useContext)(b),t=e.selectedStates,a=e.setSelectedStates,i=(Object(n.useContext)(g).theme,Object(n.useState)(null)),r=Object(l.a)(i,2),c=r[0],s=r[1],d=Object(n.useState)(null),u=Object(l.a)(d,2),m=u[0],h=u[1],f=Object(n.useState)(new Date),p=Object(l.a)(f,2),k=p[0],w=p[1],v=Object(n.useRef)(null),y=function(e){s(e.currentTarget),h(e.currentTarget.name)},O=function(){s(null),h(null)},E=function(e){var n={},o=Object.keys(t).sort((function(e,a){return t[a].latestCaseCount-t[e].latestCaseCount})),i=Object.keys(t).sort((function(e,a){return t[a].latestCaseCount/t[a].population-t[e].latestCaseCount/t[e].population}));"cases-top-12"===e.target.id?o.forEach((function(e,a){n[e]=Object(L.a)({},t[e],{selected:a<12})})):"cases-bottom-12"===e.target.id?o.reverse().forEach((function(e,a){n[e]=Object(L.a)({},t[e],{selected:a<12})})):"cases-top-12-per-1000"===e.target.id?i.forEach((function(e,a){n[e]=Object(L.a)({},t[e],{selected:a<12})})):"cases-bottom-12-per-1000"===e.target.id&&i.reverse().forEach((function(e,a){n[e]=Object(L.a)({},t[e],{selected:a<12})})),a(n),O()},C=function(e){var n={};"all-with-lockdown"===e.target.id?Object.keys(t).forEach((function(e){n[e]=Object(L.a)({},t[e],{selected:t[e].lockdown<new Date})})):"all-without-lockdown"===e.target.id&&Object.keys(t).forEach((function(e){n[e]=Object(L.a)({},t[e],{selected:!(t[e].lockdown<new Date)})})),a(n),O()},j=function(e){var n={},o=Object.keys(t).sort((function(e,a){return t[a].population-t[e].population}));"population-top-12"===e.target.id?o.forEach((function(e,a){n[e]=Object(L.a)({},t[e],{selected:a<12})})):o.reverse().forEach((function(e,a){n[e]=Object(L.a)({},t[e],{selected:a<12})})),a(n),O()},x=function(e){var n={},o=Object.keys(t).filter((function(a){return t[a].region===e.target.id}));Object.keys(t).forEach((function(e){o.includes(e)?n[e]=Object(L.a)({},t[e],{selected:!0}):n[e]=Object(L.a)({},t[e],{selected:!1})})),a(n),O()};return Object(n.useEffect)((function(){var e={};"lockdown-before"===v.current?Object.keys(t).forEach((function(a){e[a]=Object(L.a)({},t[a],{selected:t[a].lockdown<k})})):"lockdown-after"===v.current&&Object.keys(t).forEach((function(a){e[a]=Object(L.a)({},t[a],{selected:t[a].lockdown>k})})),a(e),O()}),[k]),o.a.createElement("span",null,o.a.createElement(I.a,{id:"filter-cases",name:"cases",onClick:y},"Filter by Case Counts"),o.a.createElement(G.a,{id:"filter-cases-menu",anchorEl:c,keepMounted:!0,open:Boolean("cases"===m),onClose:O},o.a.createElement(R.a,{id:"cases-top-12",onClick:E},"Highest 12 (total)"),o.a.createElement(R.a,{id:"cases-bottom-12",onClick:E},"Lowest 12 (total)"),o.a.createElement(R.a,{id:"cases-top-12-per-1000",onClick:E},"Highest 12 (per 1000)"),o.a.createElement(R.a,{id:"cases-bottom-12-per-1000",onClick:E},"Lowest 12 (per 1000)")),o.a.createElement(I.a,{id:"filter-lockdown",name:"lockdown",onClick:y},"Filter by Lockdown Date"),o.a.createElement(G.a,{id:"filter-lockdown-menu",anchorEl:c,keepMounted:!0,open:Boolean("lockdown"===m),onClose:O},o.a.createElement(R.a,{id:"all-with-lockdown",onClick:C},"All with lockdown"),o.a.createElement(R.a,{id:"all-without-lockdown",onClick:C},"All without lockdown"),o.a.createElement(R.a,{id:"lockdown-before",ref:v,onClick:function(e){return v.current=e.currentTarget.id}},"Lockdown before:",o.a.createElement(H.a,{variant:"inline",disableToolbar:!0,autoOk:!0,value:k,onChange:function(e){w(e)},disableFuture:!0,format:"MM/dd/yyyy"})),o.a.createElement(R.a,{id:"lockdown-after",ref:v,onClick:function(e){return v.current=e.currentTarget.id}},"Lockdown after:",o.a.createElement(H.a,{variant:"inline",disableToolbar:!0,autoOk:!0,value:k,onChange:function(e){return w(e)},disableFuture:!0,format:"MM/dd/yyyy"}))),o.a.createElement(I.a,{id:"filter-population",name:"population",onClick:y},"Filter by Total Population"),o.a.createElement(G.a,{id:"filter-population-menu",anchorEl:c,keepMounted:!0,open:Boolean("population"===m),onClose:O},o.a.createElement(R.a,{id:"population-top-12",onClick:j},"Highest 12"),o.a.createElement(R.a,{id:"population-bottom-12",onClick:j},"Lowest 12")),o.a.createElement(I.a,{id:"filter-region",name:"region",onClick:y},"Filter by Region"),o.a.createElement(G.a,{id:"filter-region-menu",anchorEl:c,keepMounted:!0,open:Boolean("region"===m),onClose:O},o.a.createElement(R.a,{id:"northeast",onClick:x},"Northeast"),o.a.createElement(R.a,{id:"midwest",onClick:x},"Midwest"),o.a.createElement(R.a,{id:"south",onClick:x},"South"),o.a.createElement(R.a,{id:"west",onClick:x},"West")))},V=a(215),z=a(216),q=a(181),K=a(222),X=["AliceBlue","AntiqueWhite","Aquamarine","Azure","Beige","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Aqua","Coral","Cornsilk","Crimson","Cyan","DeepPink","DeepSkyBlue","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Ivory","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"],J=a(93),U=a.n(J),Z=a(94),$=a.n(Z),_=function(){var e=Object(n.useContext)(p).dataStates,t=Object(n.useContext)(b),a=t.selectedStates,i=t.setSelectedStates,r=function(e){i(Object(L.a)({},a,Object(M.a)({},e.target.name,Object(L.a)({},a[e.target.name],{selected:e.target.checked}))))};return Object(n.useEffect)((function(){var t=Object(c.l)("%m-%d-%y"),a={};Object.keys(f).forEach((function(e,n){a[e]=Object(L.a)({},f[e],{lockdown:f[e].lockdown.startsWith("none")?f[e].lockdown:t(f[e].lockdown),color:X[n]})}));var n=Object(c.h)().key((function(e){return e.state})).entries(e);Object.keys(n).forEach((function(e){var t=n[e].key,o=n[e].values.length-1,i=n[e].values[o].cases;a[t]=Object(L.a)({},a[t],{latestCaseCount:i})})),i(a)}),[e]),o.a.createElement("div",null,o.a.createElement(V.a,{style:{alignItems:"left",backgroundColor:"#29293d"}},o.a.createElement(z.a,{id:"select-all",label:"Select All",name:"Select All",onClick:function(e){var t={};Object.keys(a).forEach((function(e,n){t[e]=Object(L.a)({},a[e],{selected:!0})})),i(t)},control:o.a.createElement(T.a,{id:"selector-all",name:"select-all",style:{color:"green"}},o.a.createElement(U.a,null))}),o.a.createElement(z.a,{id:"deselect-all",label:"Deselect All",name:"Deselect All",onClick:function(e){var t={};Object.keys(a).forEach((function(e,n){t[e]=Object(L.a)({},a[e],{selected:!1})})),i(t)},control:o.a.createElement(T.a,{id:"deselector-all",name:"deselect-all",style:{color:"red"}},o.a.createElement($.a,null))}),o.a.createElement("br",null),o.a.createElement(q.a,{variant:"h6"},"Selected"),o.a.createElement(D.a,{style:{backgroundColor:"white"}}),a?Object.keys(a).sort().filter((function(e){return!0===a[e].selected})).map((function(e,t){return o.a.createElement(z.a,{key:t,id:a[e].htmlFormat,name:e,checked:a[e].selected,onChange:r,control:o.a.createElement(K.a,{name:e,style:{color:a[e].color}}),label:"".concat(e," (").concat(a[e].abbreviation,")")})})):o.a.createElement("div",null),o.a.createElement("br",null),o.a.createElement(q.a,{variant:"h6"},"Not Selected"),o.a.createElement(D.a,{style:{backgroundColor:"white"}}),a?Object.keys(a).sort().filter((function(e){return!1===a[e].selected})).map((function(e,t){return o.a.createElement(z.a,{key:t,id:a[e].htmlFormat,name:e,checked:a[e].selected,onChange:r,control:o.a.createElement(K.a,{name:e,style:{color:a[e].color}}),label:"".concat(e," (").concat(a[e].abbreviation,")")})})):o.a.createElement("div",null)))},Q=a(95),ee=a.n(Q),te=a(96),ae=a.n(te),ne=Object(E.a)((function(e){return{root:{display:"flex",backgroundColor:e.palette.primary.main},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(250,"px)"),marginLeft:250,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2),color:e.palette.text.primary},hide:{display:"none"},drawer:{width:250,flexShrink:1},drawerPaper:{width:250},drawerHeader:Object(L.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end",backgroundColor:e.palette.background.default})}})),oe=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],i=t[1],r=Object(n.useContext)(g),c=r.theme,s=(r.setTheme,ne());return o.a.createElement("div",{className:s.root},o.a.createElement(N.a,{position:"relative",className:Object(W.a)(s.appBar,Object(M.a)({},s.appBarShift,a)),style:{backgroundColor:c.palette.primary.main,color:c.palette.primary.contrastText}},o.a.createElement(A.a,null,o.a.createElement(T.a,{onClick:function(){i(!0)},edge:"start",className:Object(W.a)(s.menuButton,a&&s.hide),style:{color:c.palette.text.primary}},o.a.createElement(ee.a,null)),o.a.createElement(Y,null))),o.a.createElement(P.a,{onClickAway:function(e){e.x>250&&e.y>70&&a&&i(!1)}},o.a.createElement(B.a,{className:s.drawer,variant:"persistent",anchor:"left",open:a,classes:{paper:s.drawerPaper},style:{color:c.palette.text.primary}},o.a.createElement("div",{className:s.drawerHeader},o.a.createElement(T.a,{color:"inherit",edge:"end",onClick:function(){i(!1)}},o.a.createElement(ae.a,null))),o.a.createElement(D.a,null),o.a.createElement(_,null))))},ie=a(97),re=(a(176),a(226)),le=a(99),ce=a.n(le),se=w.margin,de=Object(E.a)((function(e){return{root:{color:"#f2ffcc",textAlign:"left",padding:0,fontSize:10,marginLeft:se.left,marginRight:se.right},saveButton:{float:"left",marginLeft:se.left,padding:0},themeButton:{color:e.palette.text.secondary,float:"left",marginLeft:20,padding:0}}})),ue=function(){var e=de(),t=Object(n.useContext)(g),a=t.theme;t.selectTheme;return o.a.createElement("div",{style:{backgroundColor:a.palette.background.default}},o.a.createElement("p",{className:e.root},"Line marking indicates day of lockdown order/advisory"),o.a.createElement("p",{className:e.root},"Freeze/unfreeze focus by clicking on chart"),o.a.createElement(re.a,{title:"Save chart as image",placement:"right"},o.a.createElement(T.a,{onClick:function(){Object(ie.saveSvgAsPng)(document.querySelector("#chart"),"covid-19_chart.png",{backgroundColor:a.palette.background.default,encoderOptions:1})},className:e.saveButton,style:{color:a.palette.text.primary}},o.a.createElement(ce.a,null))))},me=a(101),he=Object(me.a)({palette:{primary:{main:"#000018",contrastText:"#fff"},background:{default:"#29293d"},text:{primary:"#f2ffcc",secondary:"#fff"},contrastThreshold:3},typography:{fontFamily:"Raleway, Arial"},overrides:{MuiMenu:{root:{color:"#fff"},paper:{backgroundColor:"#29293d",textColor:"#fff"}},MuiMenuItem:{root:{backgroundColor:"#29293d",color:"#fff"}},MuiButton:{root:{color:"#fff"}},MuiInputBase:{root:{color:"#fff",maxWidth:100,paddingLeft:10}},MuiPickersCalendarHeader:{switchHeader:{color:"#29293d"}},MuiPickersDay:{day:{color:"#29293d"},daySelected:{backgroundColor:"#29293d"},dayDisabled:{color:"#29293d"},current:{color:"#29293d"}}}});Object(me.a)({palette:{primary:{main:"#80deea",contrastText:"#fff"},background:{default:"#fff"},text:{primary:"#29293d",secondary:"#000018"},contrastThreshold:3},typography:{fontFamily:"Raleway, Arial"},overrides:{MuiMenu:{paper:{backgroundColor:"#29293d"}},MuiPickersCalendarHeader:{switchHeader:{color:"#29293d"}},MuiPickersDay:{day:{color:"#29293d"},daySelected:{backgroundColor:"#29293d"},dayDisabled:{color:"#29293d"},current:{color:"#29293d"}}}});var fe=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)([]),m=Object(l.a)(r,2),k=m[0],w=m[1],v=Object(n.useState)(he),y=Object(l.a)(v,2),O=y[0],E=y[1],C=Object(n.useState)(!0),j=Object(l.a)(C,2);return j[0],j[1],Object(n.useEffect)((function(){c.d(h.a).then((function(e){var t=c.l("%Y-%m-%d");e.forEach((function(e){e.date=t(e.date),e.fips=parseInt(e.fips),e.cases=parseInt(e.cases),e.deaths=parseInt(e.deaths)})),e=e.filter((function(e){return e.date>new Date(2020,1,26)&&Object.keys(f).includes(e.state)})),Object.keys(f).forEach((function(t){var a=e.filter((function(e){return e.state===t}));a.forEach((function(e){e.dayOfOutbreak=(e.date-a[0].date)/864e5+1,e.casesPerThousand=e.cases/f[t].population*1e3,e.deathsPerThousand=e.deaths/f[t].population*1e3}))})),i(e),console.log("imported dataset")}))}),[]),o.a.createElement("div",{minWidth:"sm",style:{backgroundColor:O.palette.background.default}},o.a.createElement(d.a,{utils:u.a},o.a.createElement(p.Provider,{value:{dataStates:a,setDataStates:i}},o.a.createElement(b.Provider,{value:{selectedStates:k,setSelectedStates:w}},o.a.createElement(g.Provider,{value:{theme:O,setTheme:E}},o.a.createElement(s.a,{theme:he},o.a.createElement(oe,{className:"header"}),o.a.createElement(F,{className:"chart"}),o.a.createElement(ue,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},20:function(e){e.exports=JSON.parse('{"Alabama":{"name":"Alabama","abbreviation":"AL","htmlFormat":"alabama","lockdown":"04-04-20","population":4903185,"region":"south","division":"east south central","selected":false},"Alaska":{"name":"Alaska","abbreviation":"AK","htmlFormat":"alaska","lockdown":"03-28-20","population":731545,"region":"west","division":"pacific","selected":false},"Arizona":{"name":"Arizona","abbreviation":"AZ","htmlFormat":"arizona","lockdown":"03-31-20","population":7278717,"region":"west","division":"mountain","selected":false},"Arkansas":{"name":"Arkansas","abbreviation":"AR","htmlFormat":"arkansas","lockdown":"none as of 04-13","population":3017804,"region":"south","division":"west south central","selected":false},"California":{"name":"California","abbreviation":"CA","htmlFormat":"california","lockdown":"03-19-20","population":39512223,"region":"west","division":"pacific","selected":true},"Colorado":{"name":"Colorado","abbreviation":"CO","htmlFormat":"colorado","lockdown":"03-26-20","population":5758736,"region":"west","division":"mountain","selected":false},"Connecticut":{"name":"Connecticut","abbreviation":"CT","htmlFormat":"connecticut","lockdown":"03-23-20","population":3565287,"region":"northeast","division":"new england","selected":false},"Delaware":{"name":"Delaware","abbreviation":"DE","htmlFormat":"delaware","lockdown":"03-24-20","population":973764,"region":"south","division":"south atlantic","selected":false},"District of Columbia":{"name":"District of Columbia","abbreviation":"DC","htmlFormat":"district-of-columbia","lockdown":"04-01-20","population":705749,"region":"south","division":"south atlantic","selected":false},"Florida":{"name":"Florida","abbreviation":"FL","htmlFormat":"florida","lockdown":"04-02-20","population":21477737,"region":"south","division":"south atlantic","selected":true},"Georgia":{"name":"Georgia","abbreviation":"GA","htmlFormat":"georgia","lockdown":"none as of 04-13","population":10617423,"region":"south","division":"south atlantic","selected":false},"Hawaii":{"name":"Hawaii","abbreviation":"HI","htmlFormat":"hawaii","lockdown":"03-25-20","population":1415872,"region":"west","division":"pacific","selected":true},"Idaho":{"name":"Idaho","abbreviation":"ID","htmlFormat":"idaho","lockdown":"03-25-20","population":1787065,"region":"west","division":"mountain","selected":false},"Illinois":{"name":"Illinois","abbreviation":"IL","htmlFormat":"illinois","lockdown":"03-21-20","population":12671821,"region":"midwest","division":"east north central","selected":true},"Indiana":{"name":"Indiana","abbreviation":"IN","htmlFormat":"indiana","lockdown":"03-24-20","population":6732219,"region":"midwest","division":"east north central","selected":false},"Iowa":{"name":"Iowa","abbreviation":"IA","htmlFormat":"iowa","lockdown":"none as of 04-13","population":3155070,"region":"midwest","division":"west north central","selected":false},"Kansas":{"name":"Kansas","abbreviation":"KS","htmlFormat":"kansas","lockdown":"03-30-20","population":2913314,"region":"midwest","division":"west north central","selected":false},"Kentucky":{"name":"Kentucky","abbreviation":"KY","htmlFormat":"kentucky","lockdown":"03-26-20","population":4467673,"region":"south","division":"east south central","selected":false},"Louisiana":{"name":"Louisiana","abbreviation":"LA","htmlFormat":"louisiana","lockdown":"03-23-20","population":4648794,"region":"south","division":"west south central","selected":true},"Maine":{"name":"Maine","abbreviation":"ME","htmlFormat":"maine","lockdown":"04-02-20","population":1344212,"region":"northeast","division":"new england","selected":false},"Maryland":{"name":"Maryland","abbreviation":"MD","htmlFormat":"maryland","lockdown":"03-30-20","population":6045680,"region":"south","division":"south atlantic","selected":false},"Massachusetts":{"name":"Massachusetts","abbreviation":"MA","htmlFormat":"massachusetts","lockdown":"03-24-20","population":6892503,"region":"northeast","division":"new england","selected":false},"Michigan":{"name":"Michigan","abbreviation":"MI","htmlFormat":"michigan","lockdown":"03-24-20","population":9986857,"region":"midwest","division":"east north central","selected":true},"Minnesota":{"name":"Minnesota","abbreviation":"MN","htmlFormat":"minnesota","lockdown":"03-27-20","population":5639632,"region":"midwest","division":"west north central","selected":false},"Mississippi":{"name":"Mississippi","abbreviation":"MS","htmlFormat":"mississippi","lockdown":"04-03-20","population":2976149,"region":"south","division":"east south central","selected":false},"Missouri":{"name":"Missouri","abbreviation":"MO","htmlFormat":"missouri","lockdown":"04-06-20","population":6137428,"region":"midwest","division":"west north central","selected":false},"Montana":{"name":"Montana","abbreviation":"MT","htmlFormat":"montana","lockdown":"03-28-20","population":1068778,"region":"west","division":"mountain","selected":false},"Nebraska":{"name":"Nebraska","abbreviation":"NE","htmlFormat":"nebraska","lockdown":"none as of 04-13","population":1934408,"region":"midwest","division":"west north central","selected":false},"Nevada":{"name":"Nevada","abbreviation":"NV","htmlFormat":"nevada","lockdown":"04-02-20","population":3080156,"region":"west","division":"mountain","selected":false},"New Hampshire":{"name":"New Hampshire","abbreviation":"NH","htmlFormat":"new-hampshire","lockdown":"03-27-20","population":1359711,"region":"northeast","division":"new england","selected":false},"New Jersey":{"name":"New Jersey","abbreviation":"NJ","htmlFormat":"new-jersey","lockdown":"03-21-20","population":8882190,"region":"northeast","division":"Mid-Atlantic","selected":true},"New Mexico":{"name":"New Mexico","abbreviation":"NM","htmlFormat":"new-mexico","lockdown":"03-24-20","population":2096829,"region":"west","division":"mountain","selected":false},"New York":{"name":"New York","abbreviation":"NY","htmlFormat":"new-york","lockdown":"03-22-20","population":19453561,"region":"northeast","division":"Mid-Atlantic","selected":true},"North Carolina":{"name":"North Carolina","abbreviation":"NC","htmlFormat":"north-carolina","lockdown":"03-30-20","population":10488084,"region":"south","division":"south atlantic","selected":false},"North Dakota":{"name":"North Dakota","abbreviation":"ND","htmlFormat":"north-dakota","lockdown":"none as of 04-13","population":762062,"region":"midwest","division":"west north central","selected":false},"Ohio":{"name":"Ohio","abbreviation":"OH","htmlFormat":"ohio","lockdown":"03-23-20","population":11689100,"region":"midwest","division":"east north central","selected":false},"Oklahoma":{"name":"Oklahoma","abbreviation":"OK","htmlFormat":"oklahoma","lockdown":"04-02-20","population":3956971,"region":"south","division":"west south central","selected":false},"Oregon":{"name":"Oregon","abbreviation":"OR","htmlFormat":"oregon","lockdown":"03-23-20","population":4217737,"region":"west","division":"pacific","selected":false},"Pennsylvania":{"name":"Pennsylvania","abbreviation":"PA","htmlFormat":"pennsylvania","lockdown":"04-02-20","population":12801989,"region":"northeast","division":"Mid-Atlantic","selected":true},"Rhode Island":{"name":"Rhode Island","abbreviation":"RI","htmlFormat":"rhode-island","lockdown":"03-28-20","population":1059361,"region":"northeast","division":"new england","selected":false},"South Carolina":{"name":"South Carolina","abbreviation":"SC","htmlFormat":"south-carolina","lockdown":"04-07-20","population":5148714,"region":"south","division":"south atlantic","selected":false},"South Dakota":{"name":"South Dakota","abbreviation":"SD","htmlFormat":"south-dakota","lockdown":"none as of 04-13","population":884659,"region":"midwest","division":"west north central","selected":false},"Tennessee":{"name":"Tennessee","abbreviation":"TN","htmlFormat":"tennessee","lockdown":"03-31-20","population":6829174,"region":"south","division":"east south central","selected":false},"Texas":{"name":"Texas","abbreviation":"TX","htmlFormat":"texas","lockdown":"04-02-20","population":28995881,"region":"south","division":"west south central","selected":false},"Utah":{"name":"Utah","abbreviation":"UT","htmlFormat":"utah","lockdown":"none as of 04-13","population":3205958,"region":"west","division":"mountain","selected":false},"Vermont":{"name":"Vermont","abbreviation":"VT","htmlFormat":"vermont","lockdown":"03-25-20","population":623989,"region":"northeast","division":"new england","selected":false},"Virginia":{"name":"Virginia","abbreviation":"VA","htmlFormat":"virginia","lockdown":"03-30-20","population":8535519,"region":"south","division":"south atlantic","selected":false},"Washington":{"name":"Washington","abbreviation":"WA","htmlFormat":"washington","lockdown":"03-23-20","population":7614893,"region":"west","division":"pacific","selected":true},"West Virginia":{"name":"West Virginia","abbreviation":"WV","htmlFormat":"west-virginia","lockdown":"03-24-20","population":1792147,"region":"south","division":"south atlantic","selected":false},"Wisconsin":{"name":"Wisconsin","abbreviation":"WI","htmlFormat":"wisconsin","lockdown":"03-25-20","population":5822434,"region":"midwest","division":"east north central","selected":false},"Wyoming":{"name":"Wyoming","abbreviation":"WY","htmlFormat":"wyoming","lockdown":"none as of 04-13","population":578759,"region":"west","division":"mountain","selected":false}}')},88:function(e,t,a){e.exports=a.p+"static/media/us-states.bd1c1d10.csv"}},[[167,1,2]]]);
//# sourceMappingURL=main.a005a0bf.chunk.js.map