(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6964],{64830:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return n(90348)}])},19849:function(e,t,n){"use strict";n.d(t,{o:function(){return x}});var s=n(85893);n(67294);var i=n(84485),l=n(20550),r=n(93626),a=n(53731),o=n(58091);let{Title:c}=i.Z;function d(e,t){let n="black";return"warning"===t.level?n="orange":"error"===t.level&&(n="red"),(0,s.jsx)(l.Z,{color:n,children:e})}function u(e){return(0,s.jsx)(a.Z,{children:e})}let x=e=>{let{logs:t,pageSize:n}=e;return(null==t?void 0:t.length)?(0,s.jsxs)("div",{className:"logs-section",children:[(0,s.jsx)(c,{children:"Logs"}),(0,s.jsx)(r.Z,{size:"middle",dataSource:t,columns:[{title:"Level",dataIndex:"level",key:"level",filters:[{text:"Info",value:"info"},{text:"Warning",value:"warning"},{text:"Error",value:"Error"}],onFilter:(e,t)=>0===t.level.indexOf(e),render:d},{title:"Timestamp",dataIndex:"time",key:"time",render(e){let t=new Date(e);return(0,o.Z)(t,"pp P")},sorter:(e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Message",dataIndex:"message",key:"message",render:u}],rowKey:e=>e.time,pagination:{pageSize:n||20}})]}):null}},28073:function(e,t,n){"use strict";n.d(t,{j:function(){return f}});var s=n(85893),i=n(8751),l=n(11475),r=n(25968),a=n(6226),o=n(74763),c=n(84485),d=n(14670),u=n(71577),x=n(41664),h=n.n(x),m=n(67294),j=n(99519);let f=e=>{let{showTroubleshootButton:t}=e,n=(0,m.useContext)(j.aC),{health:x}=n;if(!x)return null;let{healthy:f,healthPercentage:p,message:v,representation:g}=x,w="#3f8600",Z="info";return p<80?(w="#cf000f",Z="error"):p<30&&(w="#f0ad4e",Z="error"),(0,s.jsxs)("div",{children:[(0,s.jsxs)(r.Z,{gutter:8,children:[(0,s.jsx)(a.Z,{span:12,children:(0,s.jsx)(o.Z,{title:"Healthy Stream",value:f?"Yes":"No",valueStyle:{color:w},prefix:f?(0,s.jsx)(i.Z,{}):(0,s.jsx)(l.Z,{})})}),(0,s.jsx)(a.Z,{span:12,children:(0,s.jsx)(o.Z,{title:"Playback Health",value:p,valueStyle:{color:w},suffix:"%"})})]}),(0,s.jsx)(r.Z,{style:{display:g<100&&0!==g?"grid":"none"},children:(0,s.jsxs)(c.Z.Text,{type:"secondary",style:{textAlign:"center",fontSize:"0.7em",opacity:"0.3"},children:["Stream health represents ",g,"% of all known players. Other player status is unknown."]})}),(0,s.jsx)(r.Z,{gutter:16,style:{width:"100%",display:v?"grid":"none",marginTop:"10px"},children:(0,s.jsx)(a.Z,{span:24,children:(0,s.jsx)(d.Z,{message:v,type:Z,showIcon:!0,action:t&&(0,s.jsx)(h(),{passHref:!0,href:"/stream-health",children:(0,s.jsx)(u.Z,{size:"small",type:"text",style:{color:"black"},children:"TROUBLESHOOT"})})})})})]})};f.defaultProps={showTroubleshootButton:!0}},90348:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var s=n(85893),i=n(67294),l=n(26303),r=n(74763),a=n(59652),o=n(25968),c=n(6226),d=n(24019),u=n(87547),x=n(19642),h=n(45938),m=n(99519),j=n(19849),f=n(66567),p=n(63179),v=n(78346),g=n(27482),w=n(84485),Z=n(41664),y=n.n(Z),b=n(50738),N=n(54907),k=n(58091),S=n(64777);let{Panel:C}=N.Z,{Title:_,Link:O}=w.Z,E=e=>{let{title:t,url:n,content_html:i,date_published:l}=e,r=new Date(l),a=(0,k.Z)(r,"MMM dd, yyyy, HH:mm");return(0,s.jsx)("article",{children:(0,s.jsx)(N.Z,{children:(0,s.jsxs)(C,{header:t,children:[(0,s.jsxs)("p",{className:"timestamp",children:[a," (",(0,s.jsx)(O,{href:"".concat("https://owncast.online").concat(n),target:"_blank",rel:"noopener noreferrer",children:"Link"}),")"]}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:i}})]},n)})})},T=()=>{let[e,t]=(0,i.useState)([]),[n,r]=(0,i.useState)(!0),a=async()=>{r(!1);try{let e=await (0,S.kg)("https://owncast.online/news/index.json");(null==e?void 0:e.items.length)>0&&t(e.items)}catch(n){console.log("==== error",n)}};(0,i.useEffect)(()=>{a()},[]);let o=n?(0,s.jsx)(l.Z,{loading:!0,active:!0}):null,c=n||0!==e.length?null:(0,s.jsx)("div",{children:"No news."});return(0,s.jsxs)("section",{className:"news-feed form-module",children:[(0,s.jsx)(_,{level:2,children:"News & Updates from Owncast"}),o,e.map(e=>(0,i.createElement)(E,{...e,key:e.url})),c]})},{Paragraph:D,Text:U}=w.Z,{Title:I}=w.Z,{Meta:z}=a.Z,L=e=>{var t,l,r;let d,{logs:u=[],config:x}=e,h=(0,i.useContext)(m.aC),{serverConfig:w}=h||{},{streamKey:Z,rtmpServerPort:N}=w,k=(null===(t=n.g.window)||void 0===t?void 0:t.location.hostname)||"";k&&N&&(d="rtmp://".concat(k.replace(/(^\w+:|^)\/\//,""),":").concat(N,"/live"));let S=[{icon:(0,s.jsx)(f.Z,{twoToneColor:"#6f42c1"}),title:"Use your broadcasting software",content:(0,s.jsxs)("div",{children:[(0,s.jsx)("a",{href:"https://owncast.online/docs/broadcasting/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn how to point your existing software to your new server and start streaming your content."}),(0,s.jsxs)("div",{className:"stream-info-container",children:[(0,s.jsx)(U,{strong:!0,className:"stream-info-label",children:"Streaming URL:"}),d&&(0,s.jsx)(D,{className:"stream-info-box",copyable:!0,children:d}),(0,s.jsx)(U,{strong:!0,className:"stream-info-label",children:"Stream Key:"}),(0,s.jsx)(D,{className:"stream-info-box",copyable:{text:Z},children:"*********************"})]})]})},{icon:(0,s.jsx)(p.Z,{twoToneColor:"#f9826c"}),title:"Embed your video onto other sites",content:(0,s.jsx)("div",{children:(0,s.jsx)("a",{href:"https://owncast.online/docs/embed?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn how you can add your Owncast stream to other sites you control."})})}];return(null==x?void 0:x.chatDisabled)||S.push({icon:(0,s.jsx)(v.Z,{twoToneColor:"#0366d6"}),title:"Chat is disabled",content:(0,s.jsx)("span",{children:"Chat will continue to be disabled until you begin a live stream."})}),(null==x?void 0:null===(l=x.yp)||void 0===l?void 0:l.enabled)||S.push({icon:(0,s.jsx)(g.Z,{twoToneColor:"#D18BFE"}),title:"Find an audience on the Owncast Directory",content:(0,s.jsxs)("div",{children:["List yourself in the Owncast Directory and show off your stream. Enable it in"," ",(0,s.jsx)(y(),{href:"/config-public-details",children:"settings."})]})}),(null==x?void 0:null===(r=x.federation)||void 0===r?void 0:r.enabled)||S.push({icon:(0,s.jsx)("img",{alt:"fediverse",width:"20px",src:"fediverse-white.png"}),title:"Add your Owncast instance to the Fediverse",content:(0,s.jsxs)("div",{children:[(0,s.jsx)(y(),{href:"/config-federation",children:"Enable Owncast social"})," features to have your instance join the Fediverse, allowing people to follow, share and engage with your live stream."]})}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{children:(0,s.jsx)(c.Z,{span:12,offset:6,children:(0,s.jsxs)("div",{className:"offline-intro",children:[(0,s.jsx)("span",{className:"logo",children:(0,s.jsx)(b.C,{variant:"simple"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(I,{level:2,children:"No stream is active"}),(0,s.jsx)("p",{children:"You should start one."})]})]})})}),(0,s.jsxs)(o.Z,{gutter:[16,16],className:"offline-content",children:[(0,s.jsx)(c.Z,{span:12,xs:24,sm:24,md:24,lg:12,className:"list-section",children:S.map(e=>(0,s.jsx)(a.Z,{size:"small",bordered:!1,children:(0,s.jsx)(z,{avatar:e.icon,title:e.title,description:e.content})},e.title))}),(0,s.jsx)(c.Z,{span:12,xs:24,sm:24,md:24,lg:12,children:(0,s.jsx)(T,{})})]}),(0,s.jsx)(j.o,{logs:u,pageSize:5})]})};var B=n(28073),F=n(70241);function H(e){return(0,s.jsxs)("ul",{className:"statistics-list",children:[(0,s.jsxs)("li",{children:[e.videoCodec||"Unknown"," @ ",e.videoBitrate||"Unknown"," kbps"]}),(0,s.jsxs)("li",{children:[e.framerate||"Unknown"," fps"]}),(0,s.jsxs)("li",{children:[e.width," x ",e.height]})]})}function P(){var e,t;let n=(0,i.useContext)(m.aC),{broadcaster:f,serverConfig:p}=n||{},{remoteAddr:v,streamDetails:g}=f||{},w=(null==g?void 0:g.encoder)||"Unknown encoder",[Z,y]=(0,i.useState)([]),b=async()=>{try{let e=await (0,S.rQ)(S.WQ);y(e)}catch(t){console.log("==== error",t)}},N=()=>{b()};if((0,i.useEffect)(()=>{N();let e=null;return e=setInterval(N,S.NE),()=>{clearInterval(e)}},[]),(0,F.Qr)(p)||(0,F.Qr)(n))return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{active:!0}),(0,s.jsx)(l.Z,{active:!0}),(0,s.jsx)(l.Z,{active:!0})]});if(!f)return(0,s.jsx)(L,{logs:Z,config:p});let k=null==n?void 0:null===(e=n.currentBroadcast)||void 0===e?void 0:null===(t=e.outputSettings)||void 0===t?void 0:t.map(e=>{let{audioPassthrough:t,videoPassthrough:n,audioBitrate:i,videoBitrate:l,framerate:a}=e,o=t?"".concat(g.audioCodec||"Unknown",", ").concat(g.audioBitrate," kbps"):"".concat(i||"Unknown"," kbps"),c=n?"".concat(g.videoBitrate||"Unknown"," kbps, ").concat(g.framerate," fps ").concat(g.width," x ").concat(g.height):"".concat(l||"Unknown"," kbps, ").concat(a," fps");return(0,s.jsxs)("div",{className:"stream-details-item-container",children:[(0,s.jsx)(r.Z,{className:"stream-details-item",title:"Outbound Video Stream",value:c}),(0,s.jsx)(r.Z,{className:"stream-details-item",title:"Outbound Audio Stream",value:o})]})}),{viewerCount:C,sessionPeakViewerCount:_}=n,O="".concat(g.audioCodec,", ").concat(g.audioBitrate||"Unknown"," kbps"),E=new Date(f.time);return(0,s.jsxs)("div",{className:"home-container",children:[(0,s.jsxs)("div",{className:"sections-container",children:[(0,s.jsx)("div",{className:"online-status-section",children:(0,s.jsxs)(a.Z,{size:"small",type:"inner",className:"online-details-card",children:[(0,s.jsxs)(o.Z,{gutter:[16,16],align:"middle",children:[(0,s.jsx)(c.Z,{span:8,sm:24,md:8,children:(0,s.jsx)(r.Z,{title:"Stream started ".concat((0,x.Z)(E,Date.now())),value:(0,h.Z)(E),prefix:(0,s.jsx)(d.Z,{})})}),(0,s.jsx)(c.Z,{span:8,sm:24,md:8,children:(0,s.jsx)(r.Z,{title:"Viewers",value:C,prefix:(0,s.jsx)(u.Z,{})})}),(0,s.jsx)(c.Z,{span:8,sm:24,md:8,children:(0,s.jsx)(r.Z,{title:"Peak viewer count",value:_,prefix:(0,s.jsx)(u.Z,{})})})]}),(0,s.jsx)(B.j,{})]})}),(0,s.jsxs)(o.Z,{gutter:[16,16],className:"section stream-details-section",children:[(0,s.jsxs)(c.Z,{className:"stream-details",span:12,sm:24,md:24,lg:12,children:[(0,s.jsx)(a.Z,{size:"small",title:"Outbound Stream Details",type:"inner",className:"outbound-details",children:k}),(0,s.jsxs)(a.Z,{size:"small",title:"Inbound Stream Details",type:"inner",children:[(0,s.jsx)(r.Z,{className:"stream-details-item",title:"Input",value:"".concat(w," ").concat((0,F.t5)(v))}),(0,s.jsx)(r.Z,{className:"stream-details-item",title:"Inbound Video Stream",value:g,formatter:H}),(0,s.jsx)(r.Z,{className:"stream-details-item",title:"Inbound Audio Stream",value:O})]})]}),(0,s.jsx)(c.Z,{span:12,xs:24,sm:24,md:24,lg:12,children:(0,s.jsx)(T,{})})]})]}),(0,s.jsx)("br",{}),(0,s.jsx)(j.o,{logs:Z,pageSize:5})]})}}},function(e){e.O(0,[8939,3903,4267,3626,8091,4381,5938,5315,4763,5360,8676,9774,2888,179],function(){return e(e.s=64830)}),_N_E=e.O()}]);