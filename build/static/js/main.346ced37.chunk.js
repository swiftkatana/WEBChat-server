(this.webpackJsonpclint=this.webpackJsonpclint||[]).push([[0],{211:function(e,t,n){e.exports=n(369)},267:function(e,t){},368:function(e,t,n){},369:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),i=n.n(o),s=n(15),c=n(17),l=n(184),u=(n(219),n(21)),d=n(22),p=n(25),m=n(24),h=n(202),f=n(19),g=n(23),b=n.n(g),E=n(37),y=n(28),v=Object(y.b)(),w=function(e){v.location.pathname!==e?v.push(e):console.log("something try to change url",e)},k=v,O=n(185),N="https://hidden-sea-04996.herokuapp.com",C=n.n(O).a.create({baseURL:N},{headers:{"Access-Control-Allow-Origin":"*"}}),S=function(e){return function(){var t=Object(E.a)(b.a.mark((function t(n){var a,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.post("/api/chat/getChat",{chatId:e});case 2:a=t.sent,r=a.data,console.log(r),n({type:"OPEN_CHAT",payload:r}),w("/chat");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=function(e){return function(){var t=Object(E.a)(b.a.mark((function t(n){var a,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.post("/api/chat/createchat",e);case 2:a=t.sent,r=a.data,console.log(r),n({type:"CREATE_CHAT",payload:r});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return{type:"UPDATE_STATUS_FRIEND",payload:e}},T=function(e){return{type:"NEW_FRIEND",payload:e}},A=function(e){return function(){var t=Object(E.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.get("/api/user/CHATs"+e);case 2:a=t.sent,console.log(a),n({type:"FETCH_CHATS",payload:a.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(e){return function(t){C.delete("/chat/delete/".concat(e)),t({type:"DELETE_CHAT",payload:e}),setTimeout((function(){w("/")}),40)}},F=function(){return{type:"SIGN_OUT"}};var _=function(e){return{type:"CHANGE_LEGUAGE",payload:e}},R=n(428),x=n(403),D=n(404),U=n(407),q=n(408),M=n(431),H=n(433),P=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={users:[],filterUsers:[],query:"",idForTheClock:""},e.getAllUsers=Object(E.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.props.user&&e.props.isLogin){t.next=2;break}return t.abrupt("return",null);case 2:return t.next=4,C.post("/api/user/getUserForSerach",{sender:e.props.user});case 4:n=t.sent,console.log(n),e.setState({users:n.data});case 7:case"end":return t.stop()}}),t)}))),e.onClickSendReq=function(t){C.post("/api/user/addnewfriend",{geter:t,sender:e.props.user})},e.filterUsersForSerach=function(t){var n=!0;return new RegExp("^"+e.state.query).test(t.email)||(n=!1),e.props.user._id===t._id&&(n=!1),e.props.user.friends[t._id]&&(n=!1),n},e.cancelOrStartTheClock=function(){e.state.idForTheClock&&(console.log("clear"),clearTimeout(e.state.idForTheClock),e.setState({idForTheClock:""}));var t=setTimeout((function(){var t=e.state.users.filter((function(t){return e.filterUsersForSerach(t)}));e.setState({filterUsers:t}),console.log("start")}),200);e.setState({idForTheClock:t})},e.onChangText=function(t){e.setState({query:t.target.value}),e.cancelOrStartTheClock()},e.renderUsersList=function(){return e.state.filterUsers?e.state.filterUsers.map((function(t){return r.a.createElement(R.a.Item,{key:t._id,className:"row"},r.a.createElement(x.a,null,r.a.createElement(D.a,{xs:"4"},r.a.createElement(H.a,{alt:"profile",src:t.imageProfile,style:{fontSize:30}})),r.a.createElement(D.a,{xs:"7"},r.a.createElement("p",null,"".concat(t.firstName," ").concat(t.email))),r.a.createElement(D.a,{xs:"1"},r.a.createElement(H.a,{className:"imgLeg imageAddFri",onClick:function(){return e.onClickSendReq(t)},alt:"add button",src:"addFriend.png",style:{fontSize:30}}))))})):null},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.user&&this.props.isLogin||w("/"),this.getAllUsers()}},{key:"render",value:function(){return r.a.createElement(U.a,null,r.a.createElement(q.a,{className:"mb-2 mr-sm-2"},r.a.createElement(M.a,{value:this.state.query,onChange:this.onChangText,id:"inlineFormInputGroupUsername2",placeholder:"email"}),r.a.createElement(q.a.Prepend,null,r.a.createElement(q.a.Text,null,"@"))),r.a.createElement(R.a,null,this.renderUsersList()))}}]),n}(r.a.Component),B=Object(s.b)((function(e){return{user:e.user,isLogin:e.auth.isLogin}}),{add_Friend:T})(P),G=n(138),W=n(432),V=n(191),z=n.n(V)()(N),K=function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,null,[{key:"getMyDivices",value:function(e,t,n){switch(e){case"v":navigator.mediaDevices.getUserMedia({video:t||!0,audio:!1}).then((function(e){return e})).catch((function(e){return e}));break;case"a":navigator.mediaDevices.getUserMedia({video:!1,audio:n||!0}).then((function(e){return e})).catch((function(e){return e}));break;case"av":case"va":navigator.mediaDevices.getUserMedia({video:t||!0,audio:n||!0}).then((function(e){return e})).catch((function(e){return e}));break;default:return new Error('you need to enter a string that contain a "v" for video || "a" for audio || "av" "va" for audio and video \n you can send a obj for how you want the video or the audio be ')}}}]),e}();function X(){var e=new Date;return console.log(e),e}var Y=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).scrollToBottom=function(){a.meassgesEnd.scrollIntoView({behavior:"smooth"})},a.addmessage=function(e){console.log(e)},a.onChangeText=function(e){a.setState({meassge:e.currentTarget.value}),z.emit("typeing",e.currentTarget.value?{senderName:a.user.firstName,show:!0,chatId:a.chatId}:{senderName:a.user.firstName,show:!1,chatId:a.chatId})},a.onEnterPress=function(e){13===e.keyCode&&!1===e.shiftKey&&a.handlerClickMSG(e)},a.handlerClickMSG=function(e){if(e.preventDefault(),!a.state.meassge)return null;a.setState({meassge:""}),z.emit("typeing",{senderName:a.user.firstName,show:!1,chatId:a.chatId}),z.emit("chat",{message:a.state.meassge,senderName:a.user.firstName,senderId:a.user.email,chatId:a.chatId,createTime:{time:(new Date).toLocaleString([],{hour:"2-digit",minute:"2-digit"}),date:X()}})},a.renderSomeOneIsTypeing=function(){if(a.state.whoIsTypeingNow.length<1)return null;if(1===a.state.whoIsTypeingNow.length)return r.a.createElement("p",null,r.a.createElement("em",null,a.state.whoIsTypeingNow)," is typeing a meassge");var e="";return a.state.whoIsTypeingNow.map((function(t){return e=e+" "+t})),r.a.createElement("p",null,r.a.createElement("em",null,e)," is typeing a meassge")},a.renderDateOfCreateMessage=function(e){var t=new Date;switch(e=new Date(e),Math.floor((t-e)/864e5)){case 0:return"today";case 1:return"Yesterday";case 2:return"3 days ago";default:return"".concat(e.d,"/").concat(e.m,"/").concat(e.y)}},a.renderStyleForTheMessage=function(e,t){return e===a.user.email?t:{}},a.renderMessgesList=function(){return a.state.meassges.map((function(e,t){return r.a.createElement("div",{key:e.message+t,"aria-live":"polite","aria-atomic":"true",style:{position:"relative",minHeight:"100px"}},r.a.createElement("div",{style:a.renderStyleForTheMessage(e.senderId,{textAlign:"right",position:"absolute",top:0,right:0,minWidth:"100px"}),id:"body-message"},r.a.createElement("div",{style:a.renderStyleForTheMessage(e.senderId,{backgroundColor:"#b5f66f"}),id:"message"},r.a.createElement("p",{id:"textMessage"},e.message)),r.a.createElement("small",null," ","".concat(a.renderDateOfCreateMessage(e.createTime.date)," at ").concat(e.createTime.time," by ").concat(e.senderName)," ")))}))},a.state={meassge:"",meassges:e.chat.meassges,whoIsTypeingNow:[],myStream:{},theirStream:{}},a.user=e.user,a.chatId=e.chat._id,a.newMessageAudio=new Audio("msg.mp3"),a.rtcPeerConn=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),a.el=r.a.createRef(),a.myVideoArea=r.a.createRef(),a.theirVideoArea=r.a.createRef(),a}return Object(d.a)(n,[{key:"componentWillUnmount",value:function(){z.close("chat"+this.chatId),z.close("typeing"+this.chatId)}},{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){var e=this;console.log("chat connect"),this.setState({myStream:K.getMyDivices("va")}),z.on("chat"+this.chatId,(function(t){t.senderId!==e.props.user.email&&(setTimeout(e.scrollToBottom,100),e.newMessageAudio.play()),e.setState({meassges:[].concat(Object(G.a)(e.state.meassges),[t])})})),z.on("typeing"+this.chatId,(function(t){if(t.show){var n=!0;e.state.whoIsTypeingNow.forEach((function(e){return e===t.senderName?n=!1:null})),n&&e.setState({whoIsTypeingNow:[].concat(Object(G.a)(e.state.whoIsTypeingNow),[t.senderName])})}else e.setState({whoIsTypeingNow:e.state.whoIsTypeingNow.filter((function(e){return e!==t.senderName}))})})),this.scrollToBottom()}},{key:"auto_height",value:function(e){e.style.height="1px",e.style.height=e.scrollHeight+"px"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"mario-chat"},r.a.createElement("div",{id:"chat-window"},r.a.createElement("div",{id:"videosCon"},r.a.createElement("video",{ref:function(t){return e.theirVideoArea=t},id:"theirVideoTAg",src:this.myStream||"",autoPlay:!0}," "),r.a.createElement("video",{ref:function(t){return e.myVideoArea=t},id:"myVideoTag",src:this.myStream||"",autoPlay:!0})),r.a.createElement("div",{id:"feedback"},this.renderSomeOneIsTypeing()),r.a.createElement("div",{id:"output"},r.a.createElement("div",null,this.renderMessgesList()),r.a.createElement("div",{id:"hideScrool",style:{float:"left",clear:"both"},ref:function(t){e.meassgesEnd=t}}," "))),r.a.createElement("form",{onSubmit:this.handlerClickMSG},r.a.createElement(q.a,{id:"messageinput"},r.a.createElement(M.a,{onKeyDown:this.onEnterPress,as:"textarea",rows:"1","aria-multiline":!0,autoComplete:"off",onChange:this.onChangeText,value:this.state.meassge,type:"text",placeholder:"type a message"}),r.a.createElement(q.a.Append,null,r.a.createElement(W.a,{id:"buttonChat",style:{backgroundColor:this.state.meassge?"#575ed8":"#898bce"},type:"submit",variant:"outline-secondary"})))))}}]),n}(r.a.Component),Z=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={},e.renderChat=function(){return e.props.chatArea.openChat._id?r.a.createElement(Y,{ENDPOINT:N,chat:e.props.chatArea.openChat,user:e.props.user}):r.a.createElement("h1",null,"error please go back")},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return this.renderChat()}}]),n}(r.a.Component),J=Object(s.b)((function(e){return{chatArea:e.chatArea,user:e.user,isLogin:e.auth.isLogin}}),{})(Z),$=n(57),Q=n(204),ee=n(26),te=n(6),ne=n(409),ae=n(40),re=n(426),oe=n(412),ie=n(413),se=n(414),ce=n(419),le=n(105),ue=n(418),de=n(415),pe=n(192),me=n.n(pe),he=n(193),fe=n.n(he),ge=n(194),be=n.n(ge),Ee=n(434),ye=n(410),ve=n(411),we=n(417),ke=Object(ne.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{alignItems:"center",width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(6)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(ee.a)(Object(ee.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(2),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));var Oe=Object(s.b)((function(e){return{user:e.user,isLogin:e.auth.isLogin,leg:e.leg}}),{changeLeg:_,createCHAT:L,openChat:S,deleteChat:I,fetchChats:A,signOut:F})((function(e){var t=ke(),n=Object(ae.a)(),a=r.a.useState(!0),o=Object(Q.a)(a,2),i=o[0],s=o[1],c=document.querySelector("body");c.addEventListener("touchstart",(function(e){l=e.touches[0].clientX,u=e.touches[0].clientY}),!1),c.addEventListener("touchmove",(function(e){if(null===l)return;if(null===u)return;var t=e.touches[0].clientX,n=e.touches[0].clientY,a=l-t,r=u-n;Math.abs(a)>Math.abs(r)&&(a>0?p():d());l=null,u=null,e.preventDefault()}),!1);var l=null,u=null,d=function(){s(!0)},p=function(){s(!1)};return r.a.createElement("div",{className:t.root},r.a.createElement(oe.a,null),r.a.createElement(ie.a,{position:"fixed",className:Object(te.a)(t.appBar,Object($.a)({},t.appBarShift,i))},r.a.createElement(se.a,null,r.a.createElement(le.a,{variant:"h6",noWrap:!0}),r.a.createElement(de.a,{color:"inherit","aria-label":"open drawer",onClick:d,edge:"start",className:Object(te.a)(t.menuButton,i&&t.hide)},r.a.createElement(me.a,null)))),r.a.createElement(re.a,{className:t.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:t.drawerPaper}},r.a.createElement("div",{className:t.drawerHeader},r.a.createElement(de.a,{onClick:p},"ltr"===n.direction?r.a.createElement(fe.a,null):r.a.createElement(be.a,null))),r.a.createElement(we.a,{variant:"contained",id:"CWE",onClick:function(){if("/"===k.location.pathname)return null;w("")}},"CWE"),r.a.createElement(ue.a,null),r.a.createElement(ce.a,null,e.isLogin?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee.a,{onClick:function(){return w("/profile")},button:!0,key:"profile buuton"},r.a.createElement(ye.a,null,r.a.createElement("img",{className:"fa fa-plus-circle",src:e.user.imageProfile,alt:"profile button"})," "),r.a.createElement(ve.a,{primary:e.user.firstName})),r.a.createElement(Ee.a,{onClick:function(){w("/"),e.signOut()},button:!0,key:"LogOut buuton"},r.a.createElement(ye.a,null,r.a.createElement("img",{className:"fa fa-plus-circle",src:"logOut.png",alt:"logOut button"})," "),r.a.createElement(ve.a,{primary:"LogOut"}))):r.a.createElement(Ee.a,{onClick:function(){w("/"),e.signOut()},button:!0,key:"login buuton"},r.a.createElement(ye.a,null,r.a.createElement("img",{className:"fa fa-plus-circle",src:"login.png",alt:"login button"})," "),r.a.createElement(ve.a,{primary:"Login \\ register"})),r.a.createElement(ue.a,null)),r.a.createElement(ce.a,null,e.isLogin&&e.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee.a,{onClick:function(){return w("addFrind")},button:!0,key:"addFrind"},r.a.createElement(ye.a,null,r.a.createElement("img",{className:"fa fa-plus-circle",src:"serachF.png",alt:"addFrind button"})," "),r.a.createElement(ve.a,{primary:"Serach A Frined"})),r.a.createElement(Ee.a,{onClick:function(){return w("friends.list")},button:!0,key:"friends.list"},r.a.createElement(ye.a,null,r.a.createElement("img",{className:"fa fa-plus-circle",src:"friendsList.png",alt:"friends.list button"})," "),r.a.createElement(ve.a,{primary:"friends list"}))):null,r.a.createElement(ue.a,null)),r.a.createElement(ce.a,null,e.isLogin&&e.user?Object.keys(e.user.friends).length<0?null:Object.values(e.user.friends).map((function(t,n){return"accept"===t.status?r.a.createElement(Ee.a,{onClick:function(){return n=t.chatId,void e.openChat(n);var n},button:!0,key:t._id},r.a.createElement("img",{src:t.imageProfile,alt:"profile "}),r.a.createElement(ve.a,{primary:"".concat(t.firstName," ").concat(t.lastName)})):null})):null,r.a.createElement(ue.a,null))),r.a.createElement("main",{className:Object(te.a)(t.content,Object($.a)({},t.contentShift,i))},r.a.createElement("div",{className:t.drawerHeader}),e.children))})),Ne=n(424),Ce=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={show:!1,whatKind:"",body:"",lastFriendReq:{},newReqSound:new Audio("newReq.mp3"),id:""},e.setListenerSocket=function(){!e.state.id&&e.props.isLogin&&e.props.user?(z.on("connect",(function(){console.log("connect to socket"),z.on("newFriendReq"+e.props.user._id,(function(t){console.log("friend"),"sender"===t.status&&(e.state.newReqSound.play(),e.setState({lastFriendReq:t,show:!0,whatKind:"newFriendreq",body:t.firstName+" "+t.lastName})),e.props.add_Friend(t)})),z.on("FirendsReqAccept"+e.props.user._id,(function(t){"accept"===t.status&&(e.state.newReqSound.play(),e.setState({lastFriendReq:t,show:!0,whatKind:"newFriendreq",body:t.firstName+" "+t.lastName})),console.log("accept"),e.props.updatefriend({_id:t._id,status:"accept",chatId:t.chatId,user:t})})),z.on("deleteFriend"+e.props.user._id,(function(t){console.log("delete"),e.props.deleteFriend(t)})),z.on("declineFriendReq"+e.props.user._id,(function(t){console.log("decline"),e.props.deleteFriend(t)})),z.on("blockFriendReq"+e.props.user._id,(function(t){console.log("block"),e.props.updatefriend({_id:t._id,user:t,status:"decline"})})),z.on("error"+e.props.user._id,(function(t){console.log(t),e.setState({show:!0,whatKind:"error",header:"error",body:t})})),z.on("show",(function(e){alert(e)}))})),e.setState({id:e.props.user._id})):!e.state.id||e.props.isLogin||e.props.user||(console.log("off"),z.disconnect(),e.setState({id:""}))},e.onClickDeclineReq=function(t){e.setState({show:!1}),C.post("/api/user/declineFriendReq",{sender:e.props.user,geter:t})},e.onClickAcceptReq=function(){var t=Object(E.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({show:!1}),t.next=3,C.post("/api/user/friendreqaccept",{accepter:e.props.user,sender:n});case 3:a=t.sent,console.log(a),alert(a.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onShowOrHide=function(){e.setState({show:!e.state.show})},e.renderModal=function(){if(!e.state.show)return null;var t,n,a,o,i,s;switch(e.state.whatKind){case"error":o="close",i="error",s=e.state.body,n=function(){return e.onShowOrHide()};break;case"newFriendReq":console.log(e.state.lastFriendReq),a="Accept",o="Decline",i="you got new friend request",s="your new friend request send from ".concat(e.state.body," "),t=function(){e.onClickAcceptReq(e.state.lastFriendReq)},n=function(){e.onClickDeclineReq(e.state.lastFriendReq)};break;case"friendReqAccept":o="close",i="you Got Accept",s=" ".concat(e.state.body," accept your friend request \ud83d\ude0e "),n=function(){return e.onShowOrHide()}}return r.a.createElement(Ne.a,{"aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:e.state.show,onHide:e.onShowOrHide},r.a.createElement(Ne.a.Header,{closeButton:!0},r.a.createElement(Ne.a.Title,null,i)),r.a.createElement(Ne.a.Body,null,s),r.a.createElement(Ne.a.Footer,null,a?r.a.createElement(W.a,{variant:"secondary",onClick:t},a):null,o?r.a.createElement(W.a,{variant:"danger",onClick:n},o):null))},e}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(){this.setListenerSocket()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderModal())}}]),n}(r.a.Component),Se=Object(s.b)((function(e){return{isLogin:e.auth.isLogin,user:e.user}}),{add_Friend:T,updatefriend:j,deleteFriend:function(e){return{type:"DELETE_FRIEND",payload:e}}})(Ce),Le=n(427),je=n(425),Te=n(420),Ae={eng:{login:{buttonForLogin:"Press For Login",leabel:"Login",button:"Login"},register:{buttonForRegister:"Press For Sign up",leabel:"Sign up",button:"Register"},email:{error:"Invalid email",leabel:"Email"},password:{error:"Your password must include at least 8 characters. At least 1 number And upper case  (like AWDS).  ",leabel:"Password"},firstName:{error:"You must enter a first name without numbers and contain at least 2 characters",leabel:"FirstName"},lastName:{error:"You must enter a last name without numbers and contain at least 2 characters",leabel:"LastName"},address:{error:"Need to enter full address city street number house",leabel:"full address"},phone:{error:"Need to enter phone number",leabel:"phone number"}},heb:{login:{buttonForLogin:"\u05dc\u05d7\u05e5 \u05db\u05d0\u05df \u05dc\u05d4\u05ea\u05d7\u05d1\u05e8",leabel:"\u05dc\u05d4\u05ea\u05d7\u05d1\u05e8 \u05dc\u05d0\u05ea\u05e8",button:"\u05dc\u05d4\u05ea\u05d7\u05d1\u05e8"},register:{buttonForRegister:"\u05dc\u05d7\u05e5 \u05db\u05d0\u05df \u05dc\u05d4\u05e8\u05e9\u05dd",leabel:"\u05d4\u05e8\u05e9\u05de\u05d4 \u05dc\u05d0\u05ea\u05e8",button:"\u05dc\u05d4\u05d9\u05e8\u05e9\u05dd"},email:{error:"\u05d0\u05d9\u05de\u05d9\u05d9\u05dc \u05d4\u05d9\u05e0\u05d5 \u05ea\u05e7\u05d9\u05df",leabel:"\u05d0\u05d9\u05de\u05d9\u05d9\u05dc"},password:{error:"\u05d5\u05e1\u05e4\u05e8\u05d5\u05ea (A-Z)\u05d5\u05ea\u05d5 \u05d2\u05d3\u05d5\u05dc (a-z)  \u05e2\u05dc \u05d4\u05e1\u05d9\u05e1\u05de\u05d4 \u05dc\u05d4\u05d9\u05d5\u05ea \u05de\u05d9\u05e0\u05d9\u05de\u05d5\u05dd 7 \u05ea\u05d5\u05d5\u05d9\u05dd \u05d5\u05dc\u05d4\u05db\u05d9\u05dc \u05ea\u05d5\u05d5\u05d9\u05dd  ",leabel:"\u05e1\u05d9\u05e1\u05de\u05d4"},firstName:{error:"\u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05db\u05e0\u05d9\u05e1 \u05e9\u05dd \u05e4\u05e8\u05d8\u05d9 \u05d1\u05dc\u05d9 \u05de\u05e1\u05e4\u05e8\u05d9\u05dd \u05d5\u05dc\u05d4\u05db\u05d9\u05dc 2 \u05ea\u05d5\u05d5\u05d9\u05dd \u05dc\u05e4\u05d7\u05d5\u05ea",leabel:"\u05e9\u05dd \u05e4\u05e8\u05d8\u05d9"},lastName:{error:"\u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05db\u05e0\u05d9\u05e1 \u05e9\u05dd \u05de\u05e9\u05e4\u05d7\u05d4 \u05d1\u05dc\u05d9 \u05de\u05e1\u05e4\u05e8\u05d9\u05dd \u05d5\u05dc\u05d4\u05db\u05d9\u05dc 2 \u05ea\u05d5\u05d5\u05d9\u05dd \u05dc\u05e4\u05d7\u05d5\u05ea",leabel:"\u05e9\u05dd \u05de\u05e9\u05e4\u05d7\u05d4"},address:{error:"\u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05db\u05e0\u05d9\u05e1 \u05db\u05ea\u05d5\u05d1\u05ea \u05de\u05dc\u05d0\u05d4 \u05e2\u05d9\u05e8 \u05e8\u05d7\u05d5\u05d1 \u05de\u05e1\u05e4\u05e8 \u05d1\u05d9\u05ea",leabel:"\u05db\u05ea\u05d5\u05d1\u05ea \u05de\u05dc\u05d0\u05d4"},phone:{error:"\u05e6\u05e8\u05d9\u05da \u05dc\u05d4\u05db\u05e0\u05d9\u05e1 \u05de\u05e1\u05e4\u05e8 \u05d8\u05dc\u05e4\u05d5\u05df",leabel:"\u05de\u05e1\u05e4\u05e8 \u05d8\u05dc\u05e4\u05d5\u05df"}}},Ie=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={whatToShow:!0,emailError:""},a.onSubmitR=function(e){a.props.createUser(e,a.props.signIn,a.props.openChat)},a.onSubmitL=function(e){a.props.loginUser(e,a.props.signIn,a.props.openChat)},a.renderError=function(e){var t=e.error,n=e.touched;if(t&&n)return r.a.createElement("div",{className:"alert alert-danger"},r.a.createElement("div",{className:"header"},t))},a.renderInput=function(e){var t=e.text,n=e.input,o=e.bg,i=e.type,s=e.label,c=e.meta,l=e.placeholder,u="".concat(o?"mb-3":"col-md-6 mb-3","  ").concat((c.error&&c.touched,"")),d=i||"text";return r.a.createElement("div",{className:u},r.a.createElement("label",{htmlFor:s},"  ",s),t?r.a.createElement("input",Object.assign({},n,{type:d,name:s,autoComplete:"on",placeholder:l,value:t,className:"form-control  ".concat(c.error&&c.touched?"alert alert-danger":""),required:""})):r.a.createElement("input",Object.assign({},n,{name:s,autoComplete:"on",type:d,placeholder:l,className:"form-control  ".concat(c.error&&c.touched?"alert alert-danger":""),required:""})),a.renderError(c))},a.renderChangeMod=function(){return a.state.whatToShow?r.a.createElement("div",{className:"btn-group "},r.a.createElement("h1",{className:"btn btn-success  ",type:"button",onClick:function(){return a.setState({whatToShow:!1})}},Ae[a.props.leg].register.buttonForRegister)):r.a.createElement("div",{className:"btn-group   "},r.a.createElement("h1",{className:"btn btn-success",type:"button",onClick:function(){return a.setState({whatToShow:!0})}},Ae[a.props.leg].login.buttonForLogin))},a.renderImgLeg=function(){return"eng"===a.props.leg?r.a.createElement("img",{src:"heb.png",onClick:function(){return a.props.changeLeg("heb")},className:"imgLeg",alt:"icon for change leg right now hebrew"}):r.a.createElement("img",{src:"uk.png",onClick:function(){return a.props.changeLeg("eng")},className:"imgLeg",alt:"icon for change leg right now eng"})},a.checkbox=r.a.createRef(),a}return Object(d.a)(n,[{key:"onCheacBox",value:function(){var e=this.checkbox.current.value;this.setState({whatToShow:"register"}),e||this.setState({whatToShow:"login"})}},{key:"renderErrorLogin",value:function(){if(this.props.user&&"not found"===this.props.user)return r.a.createElement("p",{className:"emaildup"},"\u05d0\u05d9\u05de\u05d9\u05d9\u05dc \u05d0\u05d5 \u05d4\u05e1\u05d9\u05e1\u05de\u05d4 \u05dc\u05d0 \u05e0\u05db\u05d5\u05e0\u05d9\u05dd")}},{key:"renderErrorRegister",value:function(e){if(this.props.user&&"dup"===this.props.user)return r.a.createElement("p",{className:"emaildup"},"\u05d0\u05d9\u05de\u05d9\u05d9\u05dc \u05e7\u05d9\u05d9\u05dd \u05db\u05d1\u05e8 ")}},{key:"login",value:function(){return r.a.createElement("div",{className:"form-group ".concat("eng"===this.props.leg?"textLeft":"textRight")},r.a.createElement("h1",null,Ae[this.props.leg].login.leabel,"  "),this.renderChangeMod(),r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmitL),className:"error"},r.a.createElement(Le.a,{bg:!0,type:"email",autocomplete:"current-password",name:"email",component:this.renderInput,label:Ae[this.props.leg].email.leabel}),r.a.createElement(Le.a,{bg:!0,type:"password",name:"password",component:this.renderInput,label:Ae[this.props.leg].password.leabel}),this.renderErrorLogin(),r.a.createElement("button",{className:"btn btn-info form-control"},Ae[this.props.leg].login.button," ")))}},{key:"register",value:function(){return r.a.createElement("div",{className:"form-group ".concat("eng"===this.props.leg?"textLeft":"textRight")},r.a.createElement("h1",{className:"eng"===this.props.leg?"textLeft":"textRight"},Ae[this.props.leg].register.leabel," "),this.renderChangeMod(),r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmitR),className:"error"},r.a.createElement("div",{className:"row"},r.a.createElement(Le.a,{type:"email",clas:"dup"===this.props.user?"error":null,name:"email",placeholder:" you@example.com",component:this.renderInput,label:Ae[this.props.leg].email.leabel}),r.a.createElement(Le.a,{type:"password",name:"password",component:this.renderInput,label:Ae[this.props.leg].password.leabel})),r.a.createElement("div",{className:"row"},r.a.createElement(Le.a,{name:"firstName",component:this.renderInput,label:Ae[this.props.leg].firstName.leabel}),r.a.createElement(Le.a,{name:"lastName",component:this.renderInput,label:Ae[this.props.leg].lastName.leabel})),r.a.createElement("div",{className:"row"}),this.renderErrorRegister(),r.a.createElement("div",{className:"row"},r.a.createElement("button",{className:"btn btn-info form-control"},Ae[this.props.leg].register.button," "))))}},{key:"renderLoginOrRegister",value:function(){return this.state.whatToShow?this.login():this.register()}},{key:"render",value:function(){return r.a.createElement(U.a,{className:" text-right"},this.renderLoginOrRegister(),r.a.createElement(Te.a,{color:"primary","aria-label":"add"},this.renderImgLeg()))}}]),n}(r.a.Component);var Fe=Object(je.a)({form:"userLogin",validate:function(e,t){var n,a={};return!1===(n=e.email,/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n))&&(a.email=Ae[t.leg].email.error),!1===function(e){if(void 0===e||null===e)return!1;return!!(e.match(/[0-9]/g)&&e.match(/[A-Z]/g)&&e.match(/[a-z]/g)&&e.length>=7)}(e.password)&&(a.password=Ae[t.leg].password.error),(!e.firstName||e.firstName<=2||/[0-9]/.test(e.firstName))&&(a.firstName=Ae[t.leg].firstName.error),(!e.lastName||e.lastName<=2||/[0-9]/.test(e.lastName))&&(a.lastName=Ae[t.leg].lastName.error),(!e.address||e.address<=8||!/[0-9]/.test(e.address))&&(a.address=Ae[t.leg].address.error),(!e.phone||e.phone<=7)&&(a.phone=Ae[t.leg].phone.error),a}})(Ie),_e=Object(s.b)((function(e){return{isLogin:e.auth.isLogin,user:e.user,leg:e.leg}}),{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:F,createUser:function(e,t){return function(){var n=Object(E.a)(b.a.mark((function n(a){var r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C.post("/register",e);case 2:r=n.sent,console.log(r),a({type:"CREATE_USER",payload:r.data}),"eror"!==r.data&&"dup"!==r.data&&t(r.data._id);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},loginUser:function(e,t){return function(){var n=Object(E.a)(b.a.mark((function n(a){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C.post("/login",e).then((function(e){a({type:"LOGIN",payload:e.data}),"eror"!==e.data&&"not found"!==e.data&&"not good"!==e.data&&t(e.data._id)})).catch((function(e){console.log(e)}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},openChat:S,changeLeg:_})(Fe),Re=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={},e.renderRegisterORHomePage=function(){return e.props.isLogin&&e.props.user?r.a.createElement("div",null,r.a.createElement("h1",null,"Main page")):r.a.createElement(_e,null)},e}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return r.a.createElement(U.a,null,this.renderRegisterORHomePage())}}]),n}(r.a.Component),xe=Object(s.b)((function(e){return{user:e.user,isLogin:e.auth.isLogin}}),{})(Re),De=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).renderName=function(){return e.props.user&&e.props.isLogin?e.props.user.firstName:null},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.user&&this.props.isLogin||w("/")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Hello ",this.renderName()," "))}}]),n}(r.a.Component),Ue=Object(s.b)((function(e){return{isLogin:e.auth.isLogin,user:e.user}}),{})(De),qe=n(429),Me=n(421),He=n(201),Pe=n.n(He),Be=n(422),Ge=n(423),We=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={},e.renderFriendsList=function(){return e.props.isLogin&&e.props.user?r.a.createElement("div",null,r.a.createElement("h3",null,"Friends List  ",r.a.createElement("span",{"aria-labelledby":"img",role:"img"},"\ud83e\udd1d")),e.renderUsersList(["accept","iaccept"]),r.a.createElement("h3",null,"Pending friends List ",r.a.createElement("span",{"aria-labelledby":"img",role:"img"},"\ud83d\ude48\ud83d\ude49\ud83d\ude4a")," "),e.renderUsersList(["waiting","sender"]),r.a.createElement("h3",null,"Black List ",r.a.createElement("span",{"aria-labelledby":"img",role:"img"},"\ud83d\udc80")),e.renderUsersList(["iblock"])):r.a.createElement("h1",null,"Please logIng Or Register")},e.onClickAcceptReq=function(t){C.post("/api/user/friendreqaccept",{accepter:e.props.user,sender:t})},e.onclickDeletefriend=function(t){console.log("delete"),C.post("/api/user/deletefriendreq",{sender:e.props.user,geter:t})},e.onclickBlockfriend=function(t){C.post("/api/user/blockfriendreq",{sender:e.props.user,geter:t})},e.onClickDeclineFriend=function(t){C.post("/api/user/declineFriendReq",{sender:e.props.user,geter:t})},e.onUnblockAfriend=function(t){C.post("/api/user/unblockFirend",{sender:e.props.user,geter:t})},e.onOpenChat=function(t){e.props.openChat(t)},e.renderBuutonChatOrAccept=function(t){if(!t)return null;switch(t.status){case"waiting":return r.a.createElement(qe.a,{title:"waiting for the person to aceept"},r.a.createElement("p",null,"waiting"));case"sender":return r.a.createElement(Me.a,{key:t._id,item:!0},r.a.createElement(qe.a,{onClick:function(){return e.onClickAcceptReq(t)},key:"Accept",title:"Accept the requst"},r.a.createElement(we.a,null,"Accept")),r.a.createElement(qe.a,{onClick:function(){return e.onClickDeclineFriend(t)},key:"Decline",title:"decline the requst"},r.a.createElement(we.a,null,"decline")));case"iblock":return r.a.createElement(Me.a,{key:t._id,item:!0},r.a.createElement(qe.a,{onClick:function(){return e.onUnblockAfriend(t)},key:"unblockbtn",title:"unblock a friend"},r.a.createElement(we.a,null,"unblock")),r.a.createElement(qe.a,{onClick:function(){return e.onclickDeletefriend(t)},key:"delete",title:"delete friend"},r.a.createElement(Be.a,{className:"imgLeg imageAddFri"},"Delete")));default:return r.a.createElement(Me.a,{key:t._id,item:!0},r.a.createElement(qe.a,{key:"open chat",onClick:function(){return e.onOpenChat(t.chatId)},title:"Open Chat"},r.a.createElement(Pe.a,{className:"imgLeg imageAddFri"})),r.a.createElement(qe.a,{onClick:function(){return e.onclickBlockfriend(t)},key:"block",title:"Block friend"},r.a.createElement(Ge.a,{className:"imgLeg imageAddFri"},"Block")),r.a.createElement(qe.a,{onClick:function(){return e.onclickDeletefriend(t)},key:"delete",title:"delete friend"},r.a.createElement(Be.a,{className:"imgLeg imageAddFri"},"Delete")))}},e.renderUsersList=function(t){return e.props.isLogin&&e.props.user?Object.values(e.props.user.friends)?Object.values(e.props.user.friends).map((function(n){return-1===t.indexOf(n.status)?null:r.a.createElement(R.a.Item,{key:n._id,className:"row"},r.a.createElement(x.a,null,r.a.createElement(D.a,{xs:"4"},r.a.createElement(H.a,{alt:"profile",src:n.imageProfile,style:{fontSize:30}})),r.a.createElement(D.a,{xs:"5"},r.a.createElement("p",null,"".concat(n.firstName," ").concat(n.email))),r.a.createElement(D.a,{xs:"3"},e.renderBuutonChatOrAccept(n))))})):void 0:null},e}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(){console.log("update ")}},{key:"render",value:function(){return r.a.createElement(U.a,null,this.renderFriendsList())}}]),n}(r.a.Component),Ve=Object(s.b)((function(e){return{user:e.user,isLogin:e.auth.isLogin}}),{updatefriend:j,openChat:S})(We),ze=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.isLogin?console.log():w("/")}},{key:"render",value:function(){return r.a.createElement(Oe,null,r.a.createElement(Se,null),r.a.createElement(h.a,null,r.a.createElement(f.a,{path:"/profile",exact:!0,component:Ue}),r.a.createElement(f.a,{path:"/addFrind",exact:!0,component:B}),r.a.createElement(f.a,{path:"/chat",exact:!0,component:J}),r.a.createElement(f.a,{path:"/friends.list",exact:!0,component:Ve}),r.a.createElement(f.a,{path:"/",exact:!0,component:xe})))}}]),n}(r.a.Component),Ke=Object(s.b)((function(e){return{user:e.user,isLogin:e.auth.isLogin}}),{createCHAT:L,openChat:S,deleteChat:I,fetchChats:A,signOut:F})(ze),Xe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ye(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Ze=n(430),Je={isLogin:null,userId:null},$e={chats:[],openChat:{chatId:null}},Qe=Object(c.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_USER":case"LOGIN":return t.payload;case"SIGN_OUT":return null;case"NEW_FRIEND":return e.friends[t.payload._id]||(e.friends[t.payload._id]=t.payload),Object(ee.a)({},e);case"UPDATE_STATUS_FRIEND":if(e.friends[t.payload._id]){var n=t.payload,a=n.user,r=n._id;e.friends[r]=a}return Object(ee.a)({},e);case"DELETE_FRIEND":return e.friends[t.payload._id]&&delete e.friends[t.payload._id],Object(ee.a)({},e);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(ee.a)(Object(ee.a)({},e),{},{isLogin:!0,userId:t.payload});case"SIGN_OUT":return Object(ee.a)(Object(ee.a)({},e),{},{isLogin:!1,userId:null});default:return e}},form:Ze.a,chatArea:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CHATS":return t.payload.forEach((function(t){e.chats.push(t)})),Object(ee.a)({},e);case"CREATE_CHAT":return e.chats.push(t.payload),Object(ee.a)({},e);case"EDIT_CHAT":return Object(ee.a)(Object(ee.a)({},e),{},Object($.a)({},t.payload._id,t.payload));case"OPEN_CHAT":return e.openChat=t.payload,Object(ee.a)({},e);default:return e}},leg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"eng",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_LEGUAGE":return t.payload;default:return e}}}),et=(n(368),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0,traceLimit:25})||c.d),tt=Object(c.e)(Qe,et(Object(c.a)(l.a)));i.a.render(r.a.createElement(s.a,{store:tt},r.a.createElement(Ke,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Xe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ye(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ye(t,e)}))}}()}},[[211,1,2]]]);
//# sourceMappingURL=main.346ced37.chunk.js.map