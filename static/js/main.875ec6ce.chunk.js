(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{12:function(e,t,n){e.exports={nav:"Navbar_nav__9jN6z",item:"Navbar_item__RnrDa",active:"Navbar_active__hq7vC"}},122:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(44),a=n(9),o={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Terent"},{id:4,name:"Vovan"},{id:5,name:"Nastyha"},{id:6,name:"Petos"}],messages:[{id:1,message:"Hi"},{id:2,message:"Awright"},{id:3,message:"Hiya"},{id:4,message:"What's up!"},{id:5,message:"Aye"},{id:6,message:"HEY"}]},u=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},129:function(e,t,n){e.exports=n.p+"static/media/preloader.9c3e176b.svg"},131:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__uSCI5"}},132:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1rn0Z"}},133:function(e,t,n){e.exports=n.p+"static/media/user_img.e95544ba.jpg"},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c}));var r=n(128),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"31fca19b-46d4-4562-87ef-a79218334047"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),u.getProfile(e)}},u={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status/",{status:e})}},c={me:function(){return a.get("auth/me")},login:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},160:function(e,t,n){e.exports=n(286)},165:function(e,t,n){},166:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(63),u=n.n(o),c=(n(165),n(33)),i=n(34),s=n(37),l=n(35),f=n(38),m=(n(166),n(12)),d=n.n(m),p=n(13),g=function(){return a.a.createElement("nav",{className:d.a.nav},a.a.createElement("div",{className:d.a.item},a.a.createElement(p.b,{to:"/profile",activeClassName:d.a.active},"Profile")),a.a.createElement("div",{className:"".concat(d.a.item," ").concat(d.a.active)},a.a.createElement(p.b,{to:"/dialogs",activeClassName:d.a.active},"Messages")),a.a.createElement("div",{className:d.a.item},a.a.createElement(p.b,{to:"/users",activeClassName:d.a.active},"Users")),a.a.createElement("div",{className:d.a.item},a.a.createElement(p.b,{to:"/news",activeClassName:d.a.active},"News")),a.a.createElement("div",{className:d.a.item},a.a.createElement(p.b,{to:"/music",activeClassName:d.a.active},"Music")),a.a.createElement("div",{className:d.a.item},a.a.createElement(p.b,{to:"/settings",activeClassName:d.a.active},"Settings")))},h=n(28),v=n(123),b=n(32),E=n(82),w=n(17),O=n(8),P=n.n(O),j=n(19),S=n(9),A=n(15),N=n(45),C="network/auth/SET_USER_DATA",y={userId:null,email:null,login:null,isAuth:!1},U=function(e,t,n,r){return{type:C,payload:{userId:e,email:t,login:n,isAuth:r}}},k=function(){return function(){var e=Object(j.a)(P.a.mark((function e(t){var n,r,a,o,u;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.login,u=r.email,t(U(a,u,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(S.a)({},e,{},t.payload);default:return e}},M=n(52),I=n.n(M),D=Object(v.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(b.b)("Email","email",[E.b],b.a),Object(b.b)("Password","password",[E.b],b.a,{type:"password"}),Object(b.b)(null,"rememberMe",[],b.a,{type:"checkbox"},"remember me"),n&&a.a.createElement("div",{className:I.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),z=Object(w.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(j.a)(P.a.mark((function r(a){var o,u;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,A.a.login(e,t,n);case 2:0===(o=r.sent).data.resultCode?a(k()):(u=o.data.messages.length>0?o.data.messages[0]:"Some error",a(Object(N.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(h.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(D,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe),console.log(t)}}))})),F={initialized:!1},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(S.a)({},e,{initialized:!0});default:return e}},x=n(7),_=n(40),R=n(91),Z=n(122),W={},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W;arguments.length>1&&arguments[1];return e},q=n(44),X=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(S.a)({},e,{},r):e}))},B={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},Y=function(e){return{type:"FOLLOW",userId:e}},V=function(e){return{type:"UNFOLLOW",userId:e}},K=function(e){return{type:"SET_USERS",users:e}},H=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},Q=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},J=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},$=function(){var e=Object(j.a)(P.a.mark((function e(t,n,r,a){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(J(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(J(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(S.a)({},e,{users:X(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(S.a)({},e,{users:X(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(S.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(S.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(S.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(S.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(S.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(q.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!==t.userID}))]});default:return e}},te=n(130),ne=n(124),re=Object(x.c)({profilePage:R.b,dialogsPage:Z.a,sidebar:G,usersPage:ee,auth:T,form:ne.a,app:L}),ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d,oe=Object(x.e)(re,ae(Object(x.a)(te.a)));window.__store__=oe;var ue=oe,ce=n(90),ie=n.n(ce),se=function(e){return a.a.createElement("header",{className:ie.a.header},a.a.createElement("img",{alt:"header",src:"data:image/pngbase64,iVBORw0KGgoAAAANSUhEUgAAAPMAAADICAMAAAAKlSdjAAAAY1BMVEX///8SJVAWKFP5+vs2Rmvs7vFZZoTo6u4ZLFWRmq7AxdDh5Ol+iKAzQ2glNl4eMFlea4jM0NmttMP09fdlcY1EU3V1gJlQXn6DjaS6wMxwe5XT199KWHmcpLY+TXC2u8mfp7h9Egs3AAALpklEQVR4nO2d6WKzKhCGRdxQwQVXXO//Kg8DajRtvyataZMenh9tQpTwMsOwiMayDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg+EnCJtKaKom++3C/AhR7w3TNCWIyb+D13cyDePfLtVjwHk6jvWQjaF6FyDG4UVLw8qh1Mv/nuyooSLDOIrtSSdM3vKisRsf87CgTfR7xXsAYWpTV72aRidvin6kwFgLMrCxVZ9EiZ2Gv1nIM+HD6FGEZLTCYeOwOp7bzucYY+537RDXzGlC6dg5QmM/zn/CxbtRdFaDmN8Kms7RO5qiOaUizAI0W50Y/4CHR1Q5bFs56cQ/PAq3xVjpA0f3h0r2ONJc/omEQz6T4hKnAhsP1Q+U6oFgv6PYcqvbmimendi1MI2ijx3i2elSp6esGW4PTHhwZsJGb0xfdHw2jDIcz31S3dNAXRHAoCUb50cV65GQUnoojum9fW5IifzL6+ERhXosSrLrFfc3TTeFk15QNEEpl13z18o9yE6ae/aLiR4QQnnmfHUs2TqZHJa9luihJCghTvflDDJnThAp5/OK9GiG0rWy2fnOKLIbp87iZX5amR5MB3Oo7FuSZSbgJe43M/k5RA7D7O+OKrLRl5MtcUqJHg/lFh+/PxVuZW/HnRPK8wNwZuGUnJARkUZmJ+TzA/hsjr1Tpv5eRdgrNGhXUFqyc+bALqtpmfqn5PVAIjmJyu32pNxaO7emZ185waWUOxSn5VfMMoDXz71Glku5Lj3PG33o6sVZbvMYetkrx2fE7JUmlob2TszwdLoSTHPmyg4HpymfuUVHcrwYnbusk0m93TNrNhgMBoPBYHgWeDsQkmfHuRDOZpn49bXfh8M9zxOHMmcypcA8lf/i7vhBczy3KwKEAhYgVl0GjH7MkM0ShChZx+IdZHU4s5UpcOm58TbEsB90Dum2EjF7XnrcWtZU6kQR7svNi+LWaaiP4CrEPqWQCQm2fCH/B7tpEx7tw1ofJgFK4o5jHqZ2smYxMRQ0EeadsJGzlDSTOdmHUpcyBVb8opzBtxRNXMK/bV7qJmi7rhHlvTwm3U1masfiQ3CVGKMri3yiedwnBFozXIaSXOwzoONarKwTtvrBvGoabBSE6/EoCTfNaD9HzOxFs/4SCi9ymUZXU5P1YwWm8qDd2kQNn4XSlVC/ie5sevNqg9KMpkuCUqo0y6qT9lk/8tlx4YscbNfoymllwTfXkA6jV/WU5r2hwYUWUe2qWSV6O5Hh1fEXMyrN6rvQtjejv2ONykf9wdCY2ptmDC64Ki3QvD+vCw5VzxkUl8uysq3qI3sRkanvSLeD3eRi53DTrFqAdpwcHY5XlY/s7fu1Zm2SpWZmdMcalY9Ivzf0hIpNsxK2ZBai/nCeh9QusEux4ONhX/Oy7hfrZiinmx51WPGOZh5skaWEOgkuMS22VbNfLb9o5g6cq6rYZckda1RSM7hXub6vg/CiWTm68m7u2IcYDjZk+wYUgkXHt81EaM3zrkVih03vaMbQQAedRtjBmWM7hApZw8eiWYcFVccC3XMpV2pWUXRpDZ2dRjvN2rv51l4PcurrvKAi0K7HmRY9UjPfGTpEcfhPO6eMN2hfp7HNIS+07KlcNW/endnjPculoBkM3a+5hHvN2ruFFQVXC1/pYsIDUK5g9+UdFMlXmpXbL4b27Og9zSrSQbVEdqyrb+tCpWYdW3Wc3jQr73a47EXvWqMCzcqaqrFwNloHzRZUuN16e5cFxkM3tkDQ0eEhJ2j0oJlLb7WVD0S2Z72nuVjjdgXHeRc7aM1YBe/ioNkKoWriAd23tQ40KwP1UNhZtoujZgzqAnS9AntsbwvNlWbVD4ZaszK00Ee172km0D9DIHJZuqRvIQQ0W7hee6yLZu3dwZ2Xj5RmZTYwdJnwK83au4OrxUj8ruZ37bxqBkNDNpjJwcNRc1JVhWzviXB1LuCo2Nm1HqXZciEJstpp5mva/ZonHZIy+JYrzcp65fVp7/p2/k57hpimNK9RPIcvPGoOYIQf59pYmOovA79I3L1mq1t6rJ1mdT668yqh1qw8OLMK8KZrzdN7mlOE3vi7jkK7fjJc7K41L4buA/daM91nkquDseUGa9e1abZ0jxXtNXP7q5qViTw/gahxk2awwptL5Mrjw+NBUDFaszJ0ldnC+qfmEjGNGqvhg2ZrVonjOZqh+dieKttNmqNg6VguX27piLJr5ekyRFk0K0N7qrV+rDlEaaOJ7a0GN816FIrO0ayHuCoAQdf4qWbVs+wbNKetronL6IAny7tFs4oMemiffag5vYzXL4P0i2acnqhZTWWaNZdgNwJ5X3MkBQUXQ+OCQUMmaDf4bNYpwKrZTdYYG21N40ozjEdWwAy6S79otnh5nmbZNa89koPejCDfarYm+WXjGrCwWOacxdLJgtJknVeumqEWtBlhbK0j/JXmKrjEQDVUUoOQnWYrYm8021/VLA29zN6gzewmox9otiZZbjZBwfE0ruskuLIRhTUbnDMULGF30ywNvZgxXcPBUbOb7Ae0IE8Vb68Z6vIszdLQS8j12WFq/JFmK4LlMFanPbPri5e3stujnsdkSFwTN82y8IsDwUhHtaSjZnI1e0vBmbqjZulh39SMO3d7tUafzEF2c2lBXffRNWF/Fl7tieG4xpk1aV0X5JLIO769WtNCcAPwh0Pu0fVqqRvmE7++zB3uvBDOP2WJFYekevRaLW6bu25kMBgMBoPBcAOhHFyF594hBOOY+Znvf3flhJ7TM3ftdSPk+NQDFTGdupXZsuBJD/Nz34jS9bCQdt6Oz/bk/B6CgKXxu66a/AvuZHIq+uw3vmNPRDE7awd3TEnm3bw/4veYx2AMzvHGMJDT8Onz434fTrtwPGPfuutkPv38sGcA7n2b08+P+wxcz5b1IpoteMKIuHnHzodUsovyx8+PewoaArFs/mYuBO7Fa868n+WRuLAJ7Lv3Ls/wPITQeZknlWROx8nwLdHzSAgP6RPvlrwmozVCU//12QYpc4Tqb99D/aNkDKGMe/HXhhNYeDxEiL2UZBDdwBNZvK/MiPy6knUVv5pkcG9oi/kX5gchzdX5LycZAhkUerLj+0IvrwKQ3L6iZJjux5kLo+97bmudnKQc/EyMLxSx9+A5LUfaRZ53q82yPo0yOpbpSz/5EsO6Ttjf9Dyw0OtD2Av2MuOQjyBqYaet+/zfUvhc1urGAvEqw82PwaqT5kNTUdF+JJtPBa0K4UMIO+eRF78LrpzBjREKcSscj4TXPbYbkpqKCbcIFX5DvziMeTaimDK9xQl3BU1oXTVzPrVTPjSipgkrMr2TCLG/9PxanpdMh+KOlW43DU0shIibYcpcT2875zPrXzpav0MmnCpvh5EuiwkxW7bOxONIplzQh+9i+A3cPBak47UamHFbb4zyhYejIW4+ieovDiaOV8Vxglgci54Of8yfPwB34Ur3/1BsMBgMBoPBYDAYDAaDwWAwvDw+3v/7iL/1k4psubnz35deOHnqJyzfiacuGlfJJ5ebuhf5SYCbILAXrBuUZjzDxpn9Wr0vGv1IvU4/qgQ3jdAX4aOU1PoaztxU6sIzHwSpvFe4VEdaqSZ2l185iD2L7x9sEDcWVpsCFzvHlRXp58SIZk0bLKy3zfiBa1VvnnPyhBBrzH2CF82RHeX724NyNujLUYudmfxwVJUQx1a2PDarm3SSH3BrOGEr9MMhVj4SH6/t2YuvnhuZMlUHi01ht1s/wyvXIdrrcRln/aIZv4pmTOFXS5brqRM7bN+G5q0i9mJnb7C4PtRNB/2rk520bv1ammUEg7v502VXKz7eV5Y3uf5F3MXOUT8U+siK8FY91AL3YtCaXYqf/Y6qA3x5KJJ1VWa+/mLkepV5ec/hMRzltCS99JAFD7feLFNUXe489Z2Bt9LdvFcTZ1P4p3cYGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAyG/yP/ARAxl5oDJKw0AAAAAElFTkSuQmCC"}),a.a.createElement("div",{className:ie.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"log out")):a.a.createElement(p.b,{to:"/login"},"LOG IN")))},le=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(se,this.props)}}]),t}(a.a.Component),fe=Object(w.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(j.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.logout();case 2:0===e.sent.data.resultCode&&t(U(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(le),me=n(51),de=n(131),pe=n.n(de),ge=function(e){for(var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,o=e.onPageChanged,u=Math.ceil(t/n),c=[],i=1;i<=u;i++)c.push(i);return a.a.createElement("div",null,c.map((function(e){return a.a.createElement("span",{className:r===e&&pe.a.selectedPage,onClick:function(t){o(e)}},e+" ")})))},he=n(132),ve=n.n(he),be=n(133),Ee=n.n(be),we=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(p.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:Ee.a,className:ve.a.userPhoto,alt:"avatar"}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){return r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){return o(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},Oe=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,o=e.pageSize,u=e.users,c=Object(me.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return a.a.createElement("div",null,a.a.createElement(ge,{currentPage:t,onPageChanged:n,totalUsersCount:r,pageSize:o}),a.a.createElement("div",null,u.map((function(e){return a.a.createElement(we,{user:e,followingInProgress:c.followingInProgress,key:e.id,unfollow:c.unfollow,follow:c.follow})}))))},Pe=n(134),je=Object(Pe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Se=function(e){return e.usersPage.pageSize},Ae=function(e){return e.usersPage.totalUsersCount},Ne=function(e){return e.usersPage.currentPage},Ce=function(e){return e.usersPage.isFetching},ye=function(e){return e.usersPage.followingInProgress},Ue=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.requestUsers(e,t)},n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(_.a,null):null,a.a.createElement(Oe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(a.a.Component),ke=Object(x.d)(Object(w.b)((function(e){return{users:je(e),pageSize:Se(e),totalUsersCount:Ae(e),currentPage:Ne(e),isFetching:Ce(e),followingInProgress:ye(e)}}),{follow:function(e){return function(){var t=Object(j.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:$(n,e,A.c.follow.bind(A.c),Y);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(j.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:$(n,e,A.c.unfollow.bind(A.c),V);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsers:K,setCurrentPage:H,toggleFollowingProgress:J,requestUsers:function(e,t){return function(){var n=Object(j.a)(P.a.mark((function n(r){var a;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Q(!0)),r(H(e)),n.next=4,A.c.getUsers(e,t);case 4:a=n.sent,r(Q(!1)),r(K(a.items)),r({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Ue),Te=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(_.a,null)},a.a.createElement(e,t))}},Me=a.a.lazy((function(){return n.e(4).then(n.bind(null,293))})),Ie=a.a.lazy((function(){return n.e(3).then(n.bind(null,292))})),De=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(fe,null),a.a.createElement(g,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(h.b,{path:"/dialogs",render:Te(Me)}),a.a.createElement(h.b,{path:"/profile/:userId?/",render:Te(Ie)}),a.a.createElement(h.b,{path:"/users",render:function(){return a.a.createElement(ke,null)}}),a.a.createElement(h.b,{path:"/login",render:function(){return a.a.createElement(z,null)}}))):a.a.createElement(_.a,null)}}]),t}(a.a.Component),ze=Object(x.d)(h.f,Object(w.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(k());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(De),Fe=function(e){return a.a.createElement(p.a,{basename:"/react_social_network_training"},a.a.createElement(w.a,{store:ue},a.a.createElement(ze,null)))};u.a.render(a.a.createElement(Fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(51),a=n(0),o=n.n(a),u=n(52),c=n.n(u),i=n(85),s=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,u=n&&r;return o.a.createElement("div",{className:c.a.formControl+" "+(u?c.a.error:"")},o.a.createElement("div",null,a),u&&o.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},f=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a)),u)};t.c=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))}},40:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(129),u=n.n(o);t.a=function(e){return a.a.createElement("div",null,a.a.createElement("img",{src:u.a,alt:"preloader"}))}},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl___yvbM",error:"FormsControls_error__39-qV",formSummaryError:"FormsControls_formSummaryError__3Q7Fv"}},82:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},90:function(e,t,n){e.exports={header:"Header_header__1hD81",loginBlock:"Header_loginBlock__3-z1n"}},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return p}));var r=n(8),a=n.n(r),o=n(19),u=n(44),c=n(9),i=n(15),s={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"blabalbal",likesCount:11},{id:4,message:"dadada",likesCount:11}],profile:null,status:""},l=function(e){return{type:"ADD_POST",newPostText:e}},f=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return{type:"SET_STATUS",status:e}},d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(m(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(c.a)({},e,{posts:[].concat(Object(u.a)(e.posts),[n]),newPostText:""});case"SET_USER_PROFILE":return Object(c.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(c.a)({},e,{status:t.status});case"DELETE_POST":return Object(c.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}}},[[160,1,2]]]);
//# sourceMappingURL=main.875ec6ce.chunk.js.map