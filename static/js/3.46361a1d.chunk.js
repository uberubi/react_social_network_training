(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{288:function(t,e,a){},289:function(t,e,a){t.exports={userAvatar:"ProfileInfo_userAvatar__wQ1B6",descriptionBlock:"ProfileInfo_descriptionBlock__2oDIg"}},290:function(t,e,a){t.exports={postBlock:"MyPosts_postBlock__3AJFl",posts:"MyPosts_posts__O2jNo"}},291:function(t,e,a){t.exports={item:"Post_item__29NzK"}},292:function(t,e,a){"use strict";a.r(e);var n=a(33),r=a(34),s=a(37),o=a(35),u=a(38),i=a(0),l=a.n(i),c=(a(288),a(289)),p=a.n(c),m=a(40);l.a.Component;function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var a=[],n=!0,r=!1,s=void 0;try{for(var o,u=t[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!e||a.length!==e);n=!0);}catch(i){r=!0,s=i}finally{try{n||null==u.return||u.return()}finally{if(r)throw s}}return a}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=function(t){var e=f(Object(i.useState)(!1),2),a=e[0],n=e[1],r=f(Object(i.useState)(t.status),2),s=r[0],o=r[1];Object(i.useEffect)((function(){o(t.status)}),[t.status]);return l.a.createElement("div",null,a?l.a.createElement("div",null,l.a.createElement("input",{onChange:function(t){o(t.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),t.updateStatus(s)},value:s})):l.a.createElement("div",null,l.a.createElement("span",{onDoubleClick:function(){n(!0)}},t.status||"======")))},h=function(t){var e=t.profile,a=t.status,n=t.updateStatus;return e?l.a.createElement("div",null,l.a.createElement("div",{className:p.a.descriptionBlock},l.a.createElement("img",{className:p.a.userAvatar,src:e.photos.large,alt:"profile"}),l.a.createElement(d,{status:a,updateStatus:n}))):l.a.createElement(m.a,null)},b=a(91),E=a(290),v=a.n(E),g=a(291),j=a.n(g),P=function(t){return l.a.createElement("div",{className:j.a.item},l.a.createElement("img",{src:"https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg"}),t.message,l.a.createElement("div",null,l.a.createElement("span",null,"likes")," ",t.likesCount))},O=a(85),k=a(123),S=a(82),w=a(32),y=Object(S.a)(10),_=Object(k.a)({form:"ProfileAddNewPostForm"})((function(t){return l.a.createElement("form",{onSubmit:t.handleSubmit},l.a.createElement("div",null,l.a.createElement(O.a,{component:w.c,name:"newPostText",validate:[S.b,y],placeholder:"put message here!"})),l.a.createElement("div",null,l.a.createElement("button",null,"Add post")))})),A=function(t){var e=t.posts.map((function(t){return l.a.createElement(P,{message:t.message,likesCount:t.likesCount})}));return l.a.createElement("div",{className:v.a.postsBlock},l.a.createElement("h3",null,"My posts"),l.a.createElement(_,{onSubmit:function(e){t.addPost(e.newPostText)}}),l.a.createElement("div",{className:v.a.posts},e))},I=a(17),N=Object(I.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(b.a)(e))}}}))(A),x=function(t){return l.a.createElement("div",null,l.a.createElement(h,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),l.a.createElement(N,null))},B=a(28),C=a(7),T=function(t){function e(){return Object(n.a)(this,e),Object(s.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return console.log("PROFILE RENDER"),l.a.createElement(x,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(l.a.Component);e.default=Object(C.d)(Object(I.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:b.d,getStatus:b.c,updateStatus:b.e}),B.f)(T)}}]);
//# sourceMappingURL=3.46361a1d.chunk.js.map