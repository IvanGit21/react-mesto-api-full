(this["webpackJsonpmesto-react-auth"]=this["webpackJsonpmesto-react-auth"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n.n(c),o=n(18),r=n.n(o),s=n(9),u=n(23),l=n(2),p=n(4),d=n(3),j=n.p+"static/media/Vector3.c2821b38.svg";var h=function(e){var t=Object(d.g)();return Object(a.jsxs)("div",{className:"navbar__container",children:[e.userData.email,Object(a.jsx)("button",{className:"navbar__button",onClick:function(){e.onSignin(),localStorage.removeItem("jwt"),t.push("/signin")},children:"\u0412\u044b\u0439\u0442\u0438"})]})};var b=function(e){return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{src:j,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"}),e.loggedIn?Object(a.jsx)(h,{userData:e.userData,onSignin:e.onSignin}):Object(a.jsx)(s.b,{className:"navbar__register",to:"/signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})},m=n.p+"static/media/Delite.e3c42771.svg",_=i.a.createContext();var f=function(e){var t=e.data,n=e.onCardClick,c=e.onCardLike,o=e.onCardDelete,r=i.a.useContext(_),s=t.owner._id===r._id,u=t.likes.some((function(e){return e===r._id}));return Object(a.jsxs)("div",{className:"element",children:[Object(a.jsx)("img",{src:m,alt:"\u0418\u043a\u043e\u043d\u043a\u0430",className:"element__del-button ".concat(s?"element__del-button_active":""),onClick:function(){o(t)}}),Object(a.jsx)("img",{src:t.link,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",className:"element__image",onClick:function(){n({name:t.name,link:t.link})}}),Object(a.jsxs)("div",{className:"element__content",children:[Object(a.jsx)("h2",{className:"element__title",children:t.name}),Object(a.jsxs)("div",{className:"grope-container",children:[Object(a.jsx)("button",{className:"grope-button ".concat(u?"grope-button_active":""),"aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u043e\u0442\u043c\u0435\u0442\u043a\u0438",onClick:function(){c(t)}}),Object(a.jsx)("span",{className:"grope-counter",children:t.likes.length})]})]})]})};var O=function(e){var t=i.a.useContext(_);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__avatar-container",children:[Object(a.jsx)("img",{src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"}),Object(a.jsx)("div",{className:"profile__overlay",onClick:e.onEditAvatar})]}),Object(a.jsxs)("div",{className:"profile__personal-data",children:[Object(a.jsxs)("div",{className:"profile__edit",children:[Object(a.jsx)("p",{className:"profile__name",children:t.name}),Object(a.jsx)("button",{className:"edit-button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",onClick:e.onEditProfile})]}),Object(a.jsx)("p",{className:"profile__activity",children:t.about})]})]}),Object(a.jsx)("button",{className:"add-button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f",onClick:e.onAddPlace})]}),Object(a.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(a.jsx)(f,{data:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var x=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__text",children:"\xa9 2020 Mesto Russia"})})};var g=function(e){return Object(a.jsx)("section",{className:"popup popup_activity-image ".concat(e.data.isOpen?"popup_opened":""),children:Object(a.jsxs)("div",{className:"popup__container popup__container_activity-image",children:[Object(a.jsx)("button",{type:"button",className:"popup__exit-button popup__exit-button_activity-image",onClick:e.isClose}),Object(a.jsx)("img",{src:e.data.card.link,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",className:"popup__image"}),Object(a.jsx)("h2",{className:"popup__header popup__header_activity-image",children:e.data.card.name})]})})},v=n(20),C=n(21);function N(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}var k=new(function(){function e(t){Object(v.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(C.a)(e,[{key:"getInitialCards",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{headers:Object(l.a)(Object(l.a)({},this._headers),{},{Authorization:"Bearer ".concat(e)})}).then(N).then((function(e){return e}))}},{key:"getProfileInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(N).then((function(e){return e}))}},{key:"dispatchProfileInfo",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:Object(l.a)(Object(l.a)({},this._headers),{},{Authorization:"Bearer ".concat(t)}),body:JSON.stringify(e)}).then(N).then((function(e){return e}))}},{key:"createNewCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:Object(l.a)(Object(l.a)({},this._headers),{},{Authorization:"Bearer ".concat(t)}),body:JSON.stringify(e)}).then(N).then((function(e){return e}))}},{key:"deleteCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:Object(l.a)(Object(l.a)({},this._headers),{},{Authorization:"Bearer ".concat(t)})}).then(N).then((function(e){return e}))}},{key:"setLike",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:Object(l.a)(Object(l.a)({},this._headers),{},{Authorization:"Bearer ".concat(t)})}).then(N).then((function(e){return e}))}},{key:"removeLike",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:Object(l.a)(Object(l.a)({},this._headers),{},{Authorization:"Bearer ".concat(t)})}).then(N).then((function(e){return e}))}},{key:"updateAvatar",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:Object(l.a)(Object(l.a)({},this._headers),{},{Authorization:"Bearer ".concat(t)}),body:JSON.stringify(e)}).then(N).then((function(e){return e}))}}]),e}())({baseUrl:"http://api.ikmst.students.nomoredomains.icu",headers:{"Content-Type":"application/json"}});var y=function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{name:"name",type:"text",required:!0,minLength:"2",maxLength:"40",placeholder:"\u0418\u043c\u044f",className:"popup__input popup__input_type_name",id:"name-input",value:e.name,onChange:e.onChangeName}),Object(a.jsx)("span",{id:"name-input-error",className:"popup__input-error"}),Object(a.jsx)("input",{name:"about",type:"text",required:!0,minLength:"2",maxLength:"200",placeholder:"\u041e \u0441\u0435\u0431\u0435",className:"popup__input popup__input_type_description",id:"description-input",value:e.description,onChange:e.onChangeDescription}),Object(a.jsx)("span",{id:"description-input-error",className:"popup__input-error"})]})};var S=function(e){return Object(a.jsx)("section",{className:"popup popup_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{type:"button",className:"popup__exit-button popup__exit-button_".concat(e.name),onClick:e.onClose}),Object(a.jsxs)("form",{className:"popup__form popup__form_".concat(e.name),name:"form-".concat(e.name),noValidate:!0,onSubmit:e.onSubmit,children:[Object(a.jsx)("h2",{className:"popup__header",children:e.title}),Object(a.jsx)("fieldset",{className:"popup__input-container",children:e.children}),Object(a.jsx)("button",{type:"submit",className:"popup__button popup__button_".concat(e.name),"ria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})};var w=function(e){var t=i.a.useState(),n=Object(p.a)(t,2),c=n[0],o=n[1],r=i.a.useState(),s=Object(p.a)(r,2),u=s[0],l=s[1],d=i.a.useContext(_);return i.a.useEffect((function(){o(d.name),l(d.about)}),[d]),Object(a.jsx)(S,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,children:Object(a.jsx)(y,{name:c,description:u,onChangeName:function(e){o(e.target.value)},onChangeDescription:function(e){l(e.target.value)}}),onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:u})}})};var A=function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{name:"avatar",type:"url",required:!0,defaultValue:"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0442\u0430\u0440",className:"popup__input popup__input_edit-avatar",id:"url-input",ref:e.inputRef,onChange:e.onChange}),Object(a.jsx)("span",{id:"url-input-error",className:"popup__input-error"})]})};var E=function(e){var t=i.a.useRef();function n(){return t.current.value}return Object(a.jsx)(S,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,children:Object(a.jsx)(A,{inputRef:t,onChange:n}),onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:n()})}})};var P=function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{name:"name",type:"text",required:!0,minLength:"2",maxLength:"30",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_type_card-name",id:"card-name-input",ref:e.inputCardName,onChange:e.onInputCardName}),Object(a.jsx)("span",{id:"card-name-input-error",className:"popup__input-error"}),Object(a.jsx)("input",{name:"link",type:"url",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_type_url",id:"url-input",ref:e.inputLink,onChange:e.onInputLink}),Object(a.jsx)("span",{id:"url-input-error",className:"popup__input-error"})]})};var L=function(e){var t=i.a.useRef(),n=i.a.useRef();function c(){return t.current.value}function o(){return n.current.value}return Object(a.jsx)(S,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,children:Object(a.jsx)(P,{inputCardName:t,inputLink:n,onInputCardName:c,onInputLink:o}),onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:c(),link:o()})}})};var D=function(e){return Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("h1",{className:"login__header",children:e.title}),Object(a.jsxs)("form",{className:"login__form",children:[Object(a.jsx)("input",{value:e.email,onChange:e.handleChangeEmail,type:"email",name:"email",placeholder:"Email",className:"login__input login__input_type-email"}),Object(a.jsx)("input",{value:e.password,onChange:e.handleChangePassword,type:"password",name:"password",placeholder:"Password",className:"login__input login__input_type-password"})]}),Object(a.jsx)("div",{className:"button__container",children:Object(a.jsx)("button",{className:"login__button",onClick:e.onSubmit,children:e.buttonName})})]})};var I=function(e){var t=Object(c.useState)(""),n=Object(p.a)(t,2),i=n[0],o=n[1],r=Object(c.useState)(""),s=Object(p.a)(r,2),u=s[0],l=s[1];return Object(a.jsx)(D,{title:"\u0412\u0445\u043e\u0434",buttonName:"\u0412\u043e\u0439\u0442\u0438",onSubmit:function(t){t.preventDefault(),e.onAuthorize(i,u)},email:i,password:u,handleChangeEmail:function(e){o(e.target.value)},handleChangePassword:function(e){l(e.target.value)}})};var U=function(e){var t=Object(c.useState)(""),n=Object(p.a)(t,2),i=n[0],o=n[1],r=Object(c.useState)(""),u=Object(p.a)(r,2),l=u[0],d=u[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(D,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",buttonName:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onSubmit:function(t){t.preventDefault(),e.onRegister(i,l)},email:i,password:l,handleChangeEmail:function(e){o(e.target.value)},handleChangePassword:function(e){d(e.target.value)}}),Object(a.jsx)("div",{className:"login__link-container",children:Object(a.jsx)(s.b,{to:"/sign-in",className:"login__link",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})})]})},T=n(22),z=function(e){var t=e.component,n=Object(T.a)(e,["component"]);return Object(a.jsx)(d.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(l.a)({},n)):Object(a.jsx)(d.a,{to:"/signin"})}})};var B=function(e){return Object(a.jsx)("section",{className:"popup popup_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{type:"button",className:"popup__exit-button popup__exit-button_".concat(e.name),onClick:e.onClose}),Object(a.jsx)("form",{className:"popup__form popup__form_".concat(e.name),name:"form-".concat(e.name),noValidate:!0,onSubmit:e.onSubmit,children:e.children})]})})};var F=function(e){return Object(a.jsx)(B,{name:"tooltip",isOpen:e.isOpen,onClose:e.onClose,children:e.children,onSubmit:function(){}})},R=n.p+"static/media/ok.a9eb6caf.svg";var J=function(e){return Object(a.jsxs)("div",{className:"tooltip__container",children:[Object(a.jsx)("img",{src:R,alt:"show-ok"}),Object(a.jsx)("p",{children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})]})},q=n.p+"static/media/err.d4ce2a26.svg";var V=function(e){return Object(a.jsxs)("div",{className:"tooltip__container",children:[Object(a.jsx)("img",{src:q,alt:"show-ok"}),Object(a.jsx)("p",{children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})},H="http://api.ikmst.students.nomoredomains.icu",M=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435")};var G=function(){var e=i.a.useState(!1),t=Object(p.a)(e,2),n=t[0],c=t[1],o=i.a.useState(!1),r=Object(p.a)(o,2),s=r[0],j=r[1],h=i.a.useState(!1),m=Object(p.a)(h,2),f=m[0],v=m[1],C=i.a.useState({isOpen:!1,card:{}}),N=Object(p.a)(C,2),y=N[0],S=N[1],A=i.a.useState({}),P=Object(p.a)(A,2),D=P[0],T=P[1],B=i.a.useState([]),R=Object(p.a)(B,2),q=R[0],G=R[1],K=i.a.useState(!1),Q=Object(p.a)(K,2),W=Q[0],X=Q[1],Y=i.a.useState({}),Z=Object(p.a)(Y,2),$=Z[0],ee=Z[1],te=i.a.useState(!1),ne=Object(p.a)(te,2),ae=ne[0],ce=ne[1],ie=i.a.useState(!1),oe=Object(p.a)(ie,2),re=oe[0],se=oe[1],ue=Object(d.g)();function le(){var e=localStorage.getItem("jwt");return e||!1}function pe(e){j(!1),c(!1),v(!1),ce(!1),se(!1),S({isOpen:!1,card:{}})}return i.a.useEffect((function(){var e;le()&&(e=le(),fetch("".concat(H,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(M)).then((function(e){if(e&&(ee(e.user),T(e.user),X(!0),ue.push("/main")),400===e.statusCode)throw new Error("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435");if(401===e.statusCode)throw new Error("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d ")})).catch((function(e){console.log(e)}))}),[]),i.a.useEffect((function(){le()&&k.getInitialCards(le()).then((function(e){G(e)})).catch((function(e){console.log(e)}))}),[]),Object(a.jsx)(_.Provider,{value:D,children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(b,{loggedIn:W,userData:$,onSignin:function(){X(!1)}}),Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{path:"/signin",children:Object(a.jsx)(I,{onAuthorize:function(e,t){return function(e,t){return fetch("".concat(H,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(M)}(e,t).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),X(!0),ue.push("/main"),e;if(400===e.statusCode)throw new Error("\u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439 ");if(401===e.statusCode)throw new Error("\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d ")})).catch((function(e){console.log(e)}))}})}),Object(a.jsx)(d.b,{path:"/signup",children:Object(a.jsx)(U,{onRegister:function(e,t){return function(e,t){return fetch("".concat(H,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(M)}(e,t).then((function(e){if(400===e.statusCode)throw new Error("\u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439 ");ee(e.user),T(e.user),ce(!0),ue.push("/signin")})).catch((function(e){se(!0),console.log(e)}))}})}),Object(a.jsx)(z,{exact:!0,path:"/main",loggedIn:W,component:O,onCardClick:function(e){S({isOpen:!0,card:e})},onEditProfile:function(){c(!0)},onAddPlace:function(){j(!0)},onEditAvatar:function(){v(!0)},cards:q,onCardLike:function(e){var t=le();e.likes.some((function(e){return e===D._id}))?k.removeLike(e._id,t).then((function(t){var n=q.map((function(n){return n._id===e._id?t:n}));G(n)})).catch((function(e){console.log(e)})):k.setLike(e._id,t).then((function(t){var n=q.map((function(n){return n._id===e._id?t:n}));G(n)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){var t=le();k.deleteCard(e._id,t).then((function(t){var n=q.filter((function(t){return t._id!==e._id}));G(n)})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(d.b,{path:"/",children:W?Object(a.jsx)(d.a,{to:"/main"}):Object(a.jsx)(d.a,{to:"/signin"})})]}),Object(a.jsx)(x,{}),Object(a.jsx)(L,{isOpen:s,onClose:pe,onAddPlace:function(e){var t=le();k.createNewCard(e,t).then((function(e){G([e].concat(Object(u.a)(q)))})).catch((function(e){console.log(e)})).finally((function(){pe()}))}}),Object(a.jsx)(E,{isOpen:f,onClose:pe,onUpdateAvatar:function(e){var t=le();k.updateAvatar(Object(l.a)(Object(l.a)({},e),{},{id:D._id}),t).then((function(e){T(e.user)})).catch((function(e){console.log(e)})).finally((function(){pe()}))}}),Object(a.jsx)(w,{isOpen:n,onClose:pe,onUpdateUser:function(e){var t=le();k.dispatchProfileInfo(Object(l.a)(Object(l.a)({},e),{},{id:D._id}),t).then((function(e){T(Object(l.a)(Object(l.a)({},D),{},{name:e.user.name,about:e.user.about}))})).catch((function(e){console.log(e)})).finally((function(){pe()}))}}),Object(a.jsx)(g,{data:y,isClose:pe}),Object(a.jsx)(F,{isOpen:ae,onClose:pe,children:Object(a.jsx)(J,{})}),Object(a.jsx)(F,{isOpen:re,onClose:pe,children:Object(a.jsx)(V,{})})]})})},K=(n(37),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))});r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(s.a,{children:Object(a.jsx)(G,{})})}),document.getElementById("root")),K()}},[[38,1,2]]]);
//# sourceMappingURL=main.88ce9fd6.chunk.js.map