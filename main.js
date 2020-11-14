(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){var o=e.data,i=e.handleCardClick,a=e.handleTrash,u=e.handleLike,c=e.handleDislike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardSelector=n,this._title=o.name,this._image=o.link,this._handleCardClick=i,this._handleLike=u,this._handleDislike=c,this._id=o._id,this._userId=r,this._data=o,this._handleTrash=a,this._like=o.likes}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._img=this._element.querySelector(".card__img"),this._name=this._element.querySelector(".card__name"),this._setEventListeners(),this._img.src=this._image,this._img.alt="изображение",this._name.textContent=this._title,this._likeCounter=this._element.querySelector(".like__counter"),this._likeCounter.textContent="".concat(this._data.likes.length),this._data.likes.find((function(t){return t._id===e._userId}))&&this._element.querySelector(".like").classList.add("like_active"),this._data.owner._id===this._userId?this._element.querySelector(".card__delete").style.display="block":this._element.querySelector(".card__delete").style.display="none",this._element}},{key:"likeCounter",value:function(e){this._element.querySelector(".like__counter").textContent=e.length}},{key:"putLike",value:function(){this._element.querySelector(".like").classList.toggle("like_active")}},{key:"_showLike",value:function(){this._element.querySelector(".like").classList.contains("like_active")?this._handleDislike():this._handleLike()}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".like").addEventListener("click",(function(){e._showLike()})),this._element.querySelector(".card__delete").addEventListener("click",(function(t){e._handleTrash(t,e._id)})),this._img.addEventListener("click",(function(){return e._handleCardClick({name:e._title,link:e._image})}))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._formElement=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.nputErrorClass,this._errorClass=t.errorClass}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t,n){var r=e.querySelector("#".concat(t.id,"-error"));r.classList.add(this._errorClass),t.classList.add(this._inputErrorClass),r.textContent=n}},{key:"_hideInputError",value:function(e,t){var n=e.querySelector("#".concat(t.id,"-error"));n.classList.remove(this._errorClass),t.classList.remove(this._inputErrorClass),n.textContent=""}},{key:"_checkInputValidity",value:function(e,t){t.validity.valid?this._hideInputError(e,t):this._showInputError(e,t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?this.buttonDisabled(t):(t.removeAttribute("disabled",!1),t.classList.remove(this._inactiveButtonClass))}},{key:"_setEventListeners",value:function(e){var t=this,n=Array.from(e.querySelectorAll(this._inputSelector)),r=e.querySelector(this._submitButtonSelector);n.forEach((function(o){o.addEventListener("input",(function(){t._toggleButtonState(n,r),t._checkInputValidity(e,o)}))}))}},{key:"enableValidation",value:function(e){var t=this;Array.from(document.querySelectorAll(e.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),t._setEventListeners(e)}))}},{key:"buttonDisabled",value:function(e){e.classList.add(this._inactiveButtonClass),e.setAttribute("disabled",!0)}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e,t){var n=this;e.reverse().forEach((function(e){n._renderer(e,t)}))}},{key:"renderCard",value:function(e){this._renderer(e)}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selector=document.querySelector(t),this._esc=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._selector.classList.add("popup_opened"),document.addEventListener("keyup",this._esc)}},{key:"close",value:function(){this._selector.classList.remove("popup_opened"),document.removeEventListener("keyup",this._esc)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._selector.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&a(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).link=t._selector.querySelector(".popup__img"),t.name=t._selector.querySelector(".popup__img-caption"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this.name.textContent=t,this.link.src=n,l(p(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),a}(u);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._selector.querySelector(".popup__form"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._form.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){y(k(a.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;y(k(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}}])&&v(t.prototype,n),a}(u);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){var n=t.name,r=t.about,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this._avatar.src=e.avatar}},{key:"avatarUserInfo",value:function(e){this._avatar.src=e.avatar}}])&&g(t.prototype,n),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_parseResult",value:function(e){return e.ok?e.json():Promise.reject(new Error("Ошибка: ".concat(e.status)))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._parseResult(t)}))}},{key:"getUserProfile",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._parseResult(t)}))}},{key:"setUserProfile",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._parseResult(e)}))}},{key:"addNewCard",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e,t)}).then((function(e){return n._parseResult(e)}))}},{key:"newAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._parseResult(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._parseResult(e)}))}},{key:"likeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._parseResult(e)}))}},{key:"dislikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._parseResult(e)}))}}])&&E(t.prototype,n),e}();function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.querySelector(".popup__close-img"),Array.from(document.querySelectorAll(".popup"));var q,O=document.querySelector(".popup__save_add"),P=document.querySelector(".popup__input_card-name"),I=document.querySelector(".popup__input_card-link"),j=document.querySelector(".popup__input_activity"),R=document.querySelector(".popup__input_name"),T=document.querySelector(".profile__edit-button"),A=document.querySelector(".profile__add-button"),D=document.querySelector(".profile__avatar-button"),x=document.querySelector(".popup__input_avatar-link"),U=document.querySelector(".popup__save_delete"),B=document.querySelector(".popup__save_avatar"),V=document.querySelector(".popup__save_edit"),F=Array.from(document.querySelectorAll(".popup__form")),N=new w({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-17",headers:{authorization:"5aa200a5-627f-47bb-8621-5fa3329764a9","Content-Type":"application/json"}});function J(e,t){e.textContent=t}N.getUserProfile().then((function(e){q=e._id})).catch((function(e){console.log(e)}));var H=new u("#popupWarning");H.setEventListeners();var M=new d("#popupImg");M.setEventListeners();var z=new C({name:".profile__name",about:".profile__activity",avatarSelector:".profile__avatar"});function G(e){var n=new t({data:e,handleCardClick:function(e){var t=e.name,n=e.link;M.open({name:t,link:n})},handleTrash:function(e,t){H.open(),U.addEventListener("click",(function n(){N.deleteCard(t).then((function(){e.target.closest(".card").remove(),H.close(),U.removeEventListener("click",n)})).catch((function(e){console.log(e)}))}))},handleLike:function(){N.likeCard(e._id).then((function(e){n.likeCounter(e.likes),n.putLike()})).catch((function(e){console.log(e)}))},handleDislike:function(){N.dislikeCard(e._id).then((function(e){n.likeCounter(e.likes),n.putLike()})).catch((function(e){console.log(e)}))}},"#elementsTemplate",q);W.addItem(n.generateCard())}var W=new i({renderer:function(e,t){G(e)}},".elements");Promise.all([N.getInitialCards(),N.getUserProfile()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];z.setUserInfo(i),W.renderItems(o,i)})).catch((function(e){console.log(e)}));var $=new S({popupSelector:".popup_edit",handleFormSubmit:function(){var e={name:R.value,about:j.value};J(V,"Сохранение..."),N.setUserProfile(e).then((function(e){z.setUserInfo(e),$.close()})).catch((function(e){console.log(e)})).finally((function(){J(V,"Сохранить")}))}});$.setEventListeners(),T.addEventListener("click",(function(){var e=z.getUserInfo();R.value=e.name,j.value=e.about,$.open()}));var K,Q,X=new S({popupSelector:"#popupAdd",handleFormSubmit:function(){J(O,"Сохранение..."),N.addNewCard({name:P.value,link:I.value}).then((function(e){W.renderCard(e),X.close()})).catch((function(e){console.log(e)})).finally((function(){J(O,"Создание")}))}});X.setEventListeners(),(Q=new r(K={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},F)).enableValidation(K),D.addEventListener("click",(function(){Q.buttonDisabled(B),Y.open()})),A.addEventListener("click",(function(){Q.buttonDisabled(O),X.open()}));var Y=new S({popupSelector:"#popupAvatar",handleFormSubmit:function(){var e={avatar:x.value};J(B,"Сохранение..."),N.newAvatar(e).then((function(e){z.avatarUserInfo(e),Y.close()})).catch((function(e){console.log(e)})).finally((function(){J(B,"Сохранить")}))}});Y.setEventListeners()})();