(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),i=a(7),o=a(2),s=a(45),u=(a(63),a(5)),m=a.n(u),p=a(3),d=a(9),f=a(46),b=a(47),h=a(51),g=a(53),v=a(4),E=a(1),y=(a(65),a(66),a(12)),O=(a(67),a(68),Object(v.g)((function(e){var t=e.title,a=e.imageUrl,n=e.history,c=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"menu-item",onClick:function(){return n.push("".concat(l.url).concat(c))}},r.a.createElement("div",{style:{backgroundImage:"url(".concat(a,")")},className:"bg-image"}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"Shop now")))}))),j=Object(E.a)([function(e){return e.directory}],(function(e){return e.sections})),w=Object(E.b)({sections:j}),N=Object(o.b)(w)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,a=Object(y.a)(e,["id"]);return r.a.createElement(O,Object.assign({key:t},a))})))})),C=function(e){e.history;return r.a.createElement("div",{className:"homepage"},r.a.createElement(N,null))},k=a(13),I=(a(70),a(71),a(72),a(73),function(e){var t=e.children,a=e.inverted,n=Object(y.a)(e,["children","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(a?"inverted":""," custom-button")},n),t)}),x="TOGGLE_CART_HIDDEN",S="ADD_TO_CART",U="CLEAR_ITEM_FROM_CART",P="REMOVE_ITEM_FROM_CART",A=function(){return{type:x}},R=function(e){return{type:S,payload:e}},L=(a(74),Object(o.b)(null,(function(e){return{addToCart:function(t){return e(R(t))}}}))((function(e){var t=e.item,a=e.addToCart,n=t.name,c=t.price,l=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(l,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},"$",c)),r.a.createElement(I,{inverted:!0,onClick:function(){return a(t)}},"Add to Cart"))}))),T=Object(v.g)((function(e){var t=e.title,a=e.items,n=e.history;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title",onClick:function(){n.push("shop/".concat(t.toLowerCase()))}},t.toUpperCase(),r.a.createElement("span",{className:"pointer"},"\u27a4")),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(L,{key:e.id,item:e})}))))})),q=Object(E.a)([function(e){return e.shop}],(function(e){return e.collections})),_=Object(E.a)([q],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),H=Object(E.b)({collections:_}),D=Object(o.b)(H)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collection-overview"},t.map((function(e){var t=e.id,a=Object(y.a)(e,["id"]);return r.a.createElement(T,Object.assign({key:t},a))})))})),G=(a(75),Object(o.b)((function(e,t){return{collection:(a=t.match.params.collectionId,Object(E.a)([q],(function(e){return e?e[a]:null})))(e)};var a}))((function(e){var t=e.collection,a=t.title,n=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},a),r.a.createElement("div",{className:"items"},n.map((function(e){return r.a.createElement(L,{key:e.id,item:e})}))))}))),W=a(17),F=a.n(W),M=(a(76),a(79),function(){var e=Object(d.a)(m.a.mark((function e(t,a){var n,r,c,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=V.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,l=new Date,e.prev=9,e.next=12,n.set(Object(p.a)({displayName:r,email:c,createdAt:l},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}()),z=new F.a.auth.GoogleAuthProvider;z.setCustomParameters({prompt:"select_account"}),F.a.initializeApp({apiKey:"AIzaSyA--_P4-1QRXQQJAxajpFTxL3m0SUzPGQE",authDomain:"crwn-clothing-640bb.firebaseapp.com",databaseURL:"https://crwn-clothing-640bb.firebaseio.com",projectId:"crwn-clothing-640bb",storageBucket:"crwn-clothing-640bb.appspot.com",messagingSenderId:"506980792513",appId:"1:506980792513:web:e7b786068b89e348577c40",measurementId:"G-YWWYX2HL43"});F.a;var B=F.a.auth(),V=F.a.firestore(),X=function(){var e=Object(d.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0),e.next=3,B.signInWithPopup(z);case 3:return a=e.sent,t(!1),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J="UPDATE_COLLECTIONS",Y=(a(81),function(e){return function(t){var a=t.isLoading,n=Object(y.a)(t,["isLoading"]);return a?r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"spinner-container"})):r.a.createElement(e,n)}}),Q=Y(D),$=Y(G),K=Object(o.b)(null,(function(e){return{updateCollections:function(t){return e(function(e){return{type:J,payload:e}}(t))}}}))((function(e){var t=e.updateCollections,a=e.match,c=Object(n.useState)(!0),l=Object(k.a)(c,2),i=l[0],o=l[1];return Object(n.useEffect)((function(){var e=V.collection("collections").onSnapshot(function(){var e=Object(d.a)(m.a.mark((function e(a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.docs.map((function(e){var t=e.data(),a=t.title,n=t.items;return{routeName:encodeURI(a.toLowerCase()),id:e.id,items:n,title:a}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{});case 2:return n=e.sent,e.next=5,t(n);case 5:o(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){e()}}),[t]),r.a.createElement("div",{className:"shop-page"},r.a.createElement(v.b,{exact:!0,path:"".concat(a.path),render:function(e){return r.a.createElement(Q,Object.assign({isLoading:i},e))}}),r.a.createElement(v.b,{path:"".concat(a.path,"/:collectionId"),render:function(e){return r.a.createElement($,Object.assign({isLoading:i},e))}}))})),Z=(a(82),function(e){return e.cart}),ee=Object(E.a)([Z],(function(e){return e.cartItems})),te=Object(E.a)([Z],(function(e){return e.hidden})),ae=Object(E.a)([ee],(function(e){return e.length})),ne=Object(E.a)([ee],(function(e){return e.reduce((function(e,t){return e+t.price*t.quantity}),0)})),re=(a(83),Object(o.b)(null,(function(e){return{clearItemFromCart:function(t){return e(function(e){return{type:U,payload:e}}(t))},removeItemFromCart:function(t){return e(function(e){return{type:P,payload:e}}(t))},addToCart:function(t){return e(R(t))}}}))((function(e){var t=e.item,a=e.clearItemFromCart,n=e.removeItemFromCart,c=e.addToCart,l=t.name,i=t.imageUrl,o=t.price,s=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{alt:"item",src:i})),r.a.createElement("span",{className:"name"},l),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return n(t)}},"\u276e"),r.a.createElement("span",{className:"value"},s),r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276f")),r.a.createElement("span",{className:"price"},"$",o),r.a.createElement("div",{className:"remove-button",onClick:function(){return a(t)}},"\u2715"))}))),ce=a(48),le=a.n(ce),ie=a(49),oe=a.n(ie),se=function(e){var t=e.price,a=100*t;return r.a.createElement("div",null,r.a.createElement(le.a,{label:"Pay-Now",name:"CRWN_CLOTHING",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your Total is $".concat(t,"."),amount:a,panelLabel:"Pay-Now",token:function(e){oe()({url:"payment",method:"post",data:{amount:a,token:e}}).then((function(e){alert("PATMENT SUCCESSFULL : ",e)})).catch((function(e){console.log("payment failed : ",e),alert("PAYMENT FAILED")}))},stripeKey:"pk_test_51HEpnUH4erw0dYck6XEGCwv5PwXDfxOJGKWaswheqgFvJc1aJB2r3X4GX3V0J9FyqlBxnLzl3eWX5DvdDS9VWIRU00YISmasbs"}))},ue=Object(E.b)({cartItems:ee,total:ne}),me=Object(v.g)(Object(o.b)(ue)((function(e){var t=e.cartItems,a=e.history,n=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Products")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),r.a.createElement("div",{className:"checkout-items"},t.length?t.map((function(e){return r.a.createElement(re,{key:e.id,item:e})})):r.a.createElement("div",{className:"empty"},r.a.createElement("span",{className:"empty-message"},"No Items In The Cart"),r.a.createElement(I,{onClick:function(){return a.push("/shop")}},"Go To Shop"))),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"TOTAL: $",n)),r.a.createElement("div",{className:"warning"},"This Is A Test Stripe Integration payment please use the following test card to see the flow ",r.a.createElement("br",null),"cardNO: 4242 4242 4242 4242 EXP: 01/30 CVV: 123"),r.a.createElement(se,{price:n}))})));a(100);function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function de(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var fe=r.a.createElement("g",null),be=r.a.createElement("g",null),he=r.a.createElement("g",null),ge=r.a.createElement("g",null),ve=r.a.createElement("g",null),Ee=r.a.createElement("g",null),ye=r.a.createElement("g",null),Oe=r.a.createElement("g",null),je=r.a.createElement("g",null),we=r.a.createElement("g",null),Ne=r.a.createElement("g",null),Ce=r.a.createElement("g",null),ke=r.a.createElement("g",null),Ie=r.a.createElement("g",null),xe=r.a.createElement("g",null),Se=function(e){var t=e.svgRef,a=e.title,n=de(e,["svgRef","title"]);return r.a.createElement("svg",pe({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),fe,be,he,ge,ve,Ee,ye,Oe,je,we,Ne,Ce,ke,Ie,xe)},Ue=r.a.forwardRef((function(e,t){return r.a.createElement(Se,pe({svgRef:t},e))})),Pe=(a.p,a(101),Object(E.b)({itemsLength:ae})),Ae=Object(o.b)(Pe,(function(e){return{toggleCartHidden:function(){return e(A())}}}))((function(e){var t=e.toggleCartHidden,a=e.itemsLength;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(Ue,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},a))})),Re=(a(102),a(103),function(e){var t=e.item,a=t.name,n=t.imageUrl,c=t.price,l=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"item-name"},a),r.a.createElement("span",{className:"item-price"},l," x $",c)))}),Le=Object(E.b)({cartItems:ee}),Te=Object(v.g)(Object(o.b)(Le,(function(e){return{toggleCartHidden:function(){return e(A())}}}))((function(e){var t=e.cartItems,a=e.history,n=e.toggleCartHidden;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(Re,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"No Items In Cart")),r.a.createElement(I,{onClick:function(){a.push("/checkout"),n()}},"Go To Checkout"))}))),qe=Object(E.a)([function(e){return e.user}],(function(e){return e.currentUser}));function _e(){return(_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function He(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var De=r.a.createElement("title",null,"Group"),Ge=r.a.createElement("desc",null,"Created with Sketch."),We=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Fe=function(e){var t=e.svgRef,a=e.title,n=He(e,["svgRef","title"]);return r.a.createElement("svg",_e({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?De:a?r.a.createElement("title",null,a):null,Ge,We)},Me=r.a.forwardRef((function(e,t){return r.a.createElement(Fe,_e({svgRef:t},e))})),ze=(a.p,Object(E.b)({currentUser:qe,hidden:te})),Be=Object(o.b)(ze)((function(e){var t=e.currentUser,a=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(i.b,{to:"/",className:"logo-container"},r.a.createElement(Me,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(i.b,{to:"/shop",className:"option"},"Shop"),r.a.createElement(i.b,{to:"/shop",className:"option"},"Contact"),t?r.a.createElement("div",{className:"option",onClick:function(){return B.signOut()}},"Sign Out"):r.a.createElement(i.b,{to:"/signin",className:"option"},"Sign In"),r.a.createElement(Ae,null)),a?null:r.a.createElement(Te,null))})),Ve=(a(104),a(16));a(105);function Xe(){return(Xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Je(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Ye=r.a.createElement("path",{fill:"currentColor",d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"}),Qe=function(e){var t=e.svgRef,a=e.title,n=Je(e,["svgRef","title"]);return r.a.createElement("svg",Xe({"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"google",className:"svg-inline--fa fa-google fa-w-16",role:"img",viewBox:"0 0 488 512",ref:t},n),a?r.a.createElement("title",null,a):null,Ye)},$e=r.a.forwardRef((function(e,t){return r.a.createElement(Qe,Xe({svgRef:t},e))})),Ke=(a.p,a(106),function(e){var t=e.handleChange,a=e.label,n=Object(y.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length," ? 'shrink': '' form-input-label")},a):null)}),Ze=function(e){var t=e.email,a=e.password,n=e.handleChange,c=e.handleSubmit,l=e.signInWithGoogle;return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",{className:"title"},"I already have an account"),r.a.createElement("span",null," Sign In with your email and password"),r.a.createElement("form",{onSubmit:c},r.a.createElement(Ke,{type:"email",name:"email",required:!0,value:t,handleChange:n,label:"Email"}),r.a.createElement(Ke,{type:"password",name:"password",required:!0,value:a,handleChange:n,label:"Password"}),r.a.createElement("span",{className:"container"},r.a.createElement(I,{type:"submit"},"Sign In"),r.a.createElement("span",{className:"or-span"},"OR"),r.a.createElement($e,{className:"google-img",onClick:l}))))},et=function(e){var t=e.setIsLoading,a=Object(n.useState)({email:"",password:""}),c=Object(k.a)(a,2),l=c[0],i=c[1],o=l.email,s=l.password,u=function(){var e=Object(d.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t(!0),e.prev=2,e.next=5,B.signInWithEmailAndPassword(o,s);case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0),alert(e.t0.message);case 11:i({email:"",password:""}),t(!1);case 13:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(Ze,Object.assign({handleChange:function(e){var t=e.target,a=t.value,n=t.name;i(Object(p.a)({},l,Object(Ve.a)({},n,a)))},handleSubmit:u,signInWithGoogle:function(){return X(t)}},l))},tt=(a(107),function(e){var t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword,l=e.handleChange,i=e.handleSubmit;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I Don`t Have A Account"),r.a.createElement("span",null,"Sign-Up With Your Email and Password"),r.a.createElement("form",{onSubmit:i},r.a.createElement(Ke,{type:"text",name:"displayName",required:!0,label:"Name",value:t,handleChange:l}),r.a.createElement(Ke,{type:"email",name:"email",required:!0,value:a,handleChange:l,label:"Email"}),r.a.createElement(Ke,{type:"password",name:"password",required:!0,value:n,handleChange:l,label:"passoword"}),r.a.createElement(Ke,{type:"password",name:"confirmPassword",required:!0,value:c,handleChange:l,label:"Confirm Password"}),r.a.createElement(I,{type:"submit"},"Sign Up")))}),at=function(e){var t=e.setIsLoading,a=Object(n.useState)({displayName:"",email:"",password:"",confirmPassword:""}),c=Object(k.a)(a,2),l=c[0],i=c[1],o=l.displayName,s=l.email,u=l.password,f=l.confirmPassword;return r.a.createElement(tt,Object.assign({handleChange:function(e){var t=e.target,a=t.name,n=t.value;i(Object(p.a)({},l,Object(Ve.a)({},a,n)))},handleSubmit:function(e){(e.preventDefault(),t(!0),u===f&&u.length>=6)?function(){var e=Object(d.a)(m.a.mark((function e(){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.createUserWithEmailAndPassword(s,u);case 3:return a=e.sent,n=a.user,e.next=7,M(n,{displayName:o});case 7:i({displayName:"",email:"",password:"",confirmPassword:""}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),alert(e.t0.message);case 14:t(!1);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()():(i(Object(p.a)({},l,{password:"",confirmPassword:""})),t(!1),alert(u!==f?"password don`t match":"password length should be greater than 6"))}},l))},nt=Y((function(e){var t=e.setIsLoading;return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(et,{setIsLoading:t}),r.a.createElement(at,{setIsLoading:t}))})),rt=function(){var e=Object(n.useState)(!1),t=Object(k.a)(e,2),a=t[0],c=t[1];return r.a.createElement(nt,{isLoading:a,setIsLoading:c})},ct="SET_CURRENT_USER",lt=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unSubscribeFromAuth=null,e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unSubscribeFromAuth=B.onAuthStateChanged(function(){var t=Object(d.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return t.next=3,M(a);case 3:t.sent.onSnapshot((function(t){e(Object(p.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e(a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unSubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(Be,null),r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:"/",component:C}),r.a.createElement(v.b,{path:"/shop",component:K}),r.a.createElement(v.b,{exact:!0,path:"/checkout",component:me}),r.a.createElement(v.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(v.a,{to:"/"}):r.a.createElement(rt,null)}})))}}]),a}(r.a.Component),it=Object(E.b)({currentUser:qe}),ot=Object(o.b)(it,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:ct,payload:e}}(t))}}}))(lt),st=a(11),ut=(a(108),a(24)),mt=a(50),pt=a.n(mt),dt={currentUser:null},ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ct:return Object(p.a)({},e,{currentUser:t.payload});default:return e}},bt=a(52),ht=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(p.a)({},e,{quantity:e.quantity+1}):Object(p.a)({},e)})):[].concat(Object(bt.a)(e),[Object(p.a)({},t,{quantity:1})])},gt=function(e,t){return e.filter((function(e){return e.id!==t.id}))},vt=function(e,t){return e.map((function(e){return e.id===t.id?Object(p.a)({},e,{quantity:e.quantity-1}):Object(p.a)({},e)}))},Et={hidden:!0,cartItems:[]},yt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(p.a)({},e,{hidden:!e.hidden});case S:return Object(p.a)({},e,{cartItems:ht(e.cartItems,t.payload)});case U:return Object(p.a)({},e,{cartItems:gt(e.cartItems,t.payload)});case P:return Object(p.a)({},e,{cartItems:t.payload.quantity>1?vt(e.cartItems,t.payload):gt(e.cartItems,t.payload)});default:return e}},Ot={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",id:5,linkUrl:"shop/mens"}]},jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,t=arguments.length>1?arguments[1]:void 0;return t.type,e},wt={collections:null},Nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(p.a)({},e,{collections:t.payload});default:return e}},Ct={key:"root",storage:pt.a,whitelist:["cart"]},kt=Object(st.c)({user:ft,cart:yt,directory:jt,shop:Nt}),It=Object(ut.a)(Ct,kt);var xt=Object(st.d)(It,st.a.apply(void 0,[])),St=Object(ut.b)(xt);l.a.render(r.a.createElement(o.a,{store:xt},r.a.createElement(i.a,null,r.a.createElement(s.a,{persistor:St},r.a.createElement(ot,null)))),document.getElementById("root"))},54:function(e,t,a){e.exports=a(111)},63:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.2420502f.chunk.js.map