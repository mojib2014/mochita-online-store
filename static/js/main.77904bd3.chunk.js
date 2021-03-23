(this["webpackJsonpmochita-store"]=this["webpackJsonpmochita-store"]||[]).push([[0],{21:function(e,t,c){"use strict";(function(e){c.d(t,"a",(function(){return n}));c(4);var a=c(8),r=(c(30),c(0));function n(t){var c=t.itemQuantity;return Object(r.jsx)("header",{className:"navbar-header",children:Object(r.jsx)("div",{className:"content",children:Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{to:"/home",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{to:"/catalog",children:"Catalog"})}),Object(r.jsx)("li",{className:"cart",children:Object(r.jsxs)(a.b,{to:"/cart",children:[Object(r.jsx)("img",{src:"".concat(e,"images/icon_cart.png"),alt:"cart icon"}),Object(r.jsx)("p",{className:"item-quantity",children:c||0})]})})]})})})})}}).call(this,"/")},29:function(e,t,c){},30:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var a=c(4),r=c.n(a),n=c(20),i=c.n(n),s=c(8),l=(c(29),c(9)),o=c(2),d=c(21),u=function(e,t){switch(t){case"EUR":return.86*e;case"CAD":return 1.33*e;default:return e}},j=function(e){switch(e){case"USD":return"$";case"EUR":return"\u20ac";case"CAD":return"$";default:return""}},h=(c(38),c(0));function m(e){var t=e.disabled,c=e.className,a=e.onClick,r=e.children;return Object(h.jsx)("button",{className:c,onClick:a,disabled:t,children:r})}function b(e){var t=e.name,c=e.type,a=e.value,r=e.onChange;return Object(h.jsx)("input",{min:"0",type:c,name:t,value:a,onChange:r})}var p=c(24),O=function(e){return{type:"cart/addItem",payload:e}},x=[];function y(e){var t=e.items,c=e.dispatch,a=e.currencyFilter;return Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{colSpan:"2",scope:"col",children:"Product"}),Object(h.jsx)("th",{className:"cart-price",scope:"col",children:"Price"}),Object(h.jsx)("th",{className:"cart-quantity",scope:"col",children:"Quantity"}),Object(h.jsx)("th",{className:"cart-total",scope:"total",children:"Total"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"cart-img-wrapper",children:Object(h.jsx)("div",{children:Object(h.jsx)(s.b,{to:"/item-details/".concat(e.name.replace(" ","-")),children:Object(h.jsx)("img",{src:e.img,alt:e.name})})})}),Object(h.jsxs)("td",{className:"cart-item-details",children:[Object(h.jsx)("div",{className:"cart-item-title",children:e.name}),Object(h.jsx)(m,{className:"remove-from-cart-btn",onClick:function(){return c(function(e){return{type:"cart/removeItem",payload:e}}(e))},children:"Remove"})]}),Object(h.jsxs)("td",{children:[j(a),u(e.price,a)]}),Object(h.jsx)("td",{children:Object(h.jsx)(b,{type:"number",name:e.name,value:e.quantity,onChange:function(t){return c(function(e,t){return{type:"cart/changeItemQuantity",payload:{item:e,newQuantity:t}}}(e,t.target.value))}})}),Object(h.jsxs)("td",{children:[j(a),(t=e.price,r=a,n=e.quantity,(u(t,r)*n).toFixed(2))]})]},e.id);var t,r,n}))})]})}function f(e){var t=e.cart,c=e.currencyFilter,a=e.dispatch,r=function(e,t){var c=0;return e.forEach((function(e){c+=e.price*e.quantity})),u(c,t).toFixed(2)}(t,c);return Object(h.jsxs)("section",{className:"cart-container",children:[Object(h.jsx)("h1",{children:"Shopping Cart"}),Object(h.jsx)(y,{items:t,dispatch:a,currencyFilter:c}),Object(h.jsx)("div",{className:"total-container",children:Object(h.jsxs)("div",{className:"total-price",children:[Object(h.jsx)("h3",{className:"total",children:"Total: "}),Object(h.jsxs)("h3",{className:"total-value",children:[j(c),r]})]})})]})}var g=[{id:1,name:"Hello World Hat",price:23.99,img:"https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/hello-world-hat.jpg",catagory:"Cloth"},{id:2,name:"Learn From Home Joggers",price:45.99,img:"https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/sweatpants.jpg",catagory:"Sport"},{id:3,name:"Java Tee",price:17.99,img:"https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/java-tee.jpg",catagory:"Cloth"},{id:4,name:"Python Tee",price:17.99,img:"https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/python-tee.jpg",catagory:"Cloth"},{id:5,name:"SQL Tee",price:17.99,img:"https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/sql-tee.jpg",catagory:"Cloth"},{id:6,name:"Hello World Hoodie",price:49.99,img:"https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/hoodie.jpg",catagory:"Cloth"}],v=["USD","EUR","CAD"],C=[];function N(e){var t=e.item,c=e.onClick,a=e.getCurrencySymbol,r=e.calculatePrice,n=e.currencyFilter,i=e.cart,l=(e.dispatch,function(e){return i.every((function(t){return t.id!==e.id}))?"Add to cart":"In cart"});return Object(h.jsxs)("li",{className:"item",children:[Object(h.jsxs)(s.b,{to:"/item-details/".concat(t.name),children:[Object(h.jsx)("img",{src:t.img,alt:t.name}),Object(h.jsx)("h3",{children:t.name}),Object(h.jsxs)("h3",{children:[a(n),function(e,t){return r(e,t)}(t.price,n).toFixed(2),n]})]}),Object(h.jsx)(m,{className:"add-to-cart",onClick:c,disabled:"In cart"===l(t),children:l(t)})]},t.name)}c(39);function F(e){var t=e.catalog,c=e.dispatch,r=e.currencyFilter,n=e.cart;return Object(a.useEffect)((function(){c({type:"catalog/loadData",payload:g})}),[c]),Object(h.jsxs)("section",{className:"catalog",children:[Object(h.jsxs)("header",{className:"collection-header",children:[Object(h.jsxs)("div",{className:"section-header",children:[Object(h.jsx)("h1",{children:"Catalog"}),Object(h.jsx)("p",{children:"Full Catalog"})]}),Object(h.jsx)("div",{className:"filters-toolbar-wrapper",children:Object(h.jsx)("div",{className:"filters-toolbar",children:Object(h.jsx)("div",{className:"filters-toolbar-item"})})})]}),Object(h.jsx)("ul",{className:"catalog-container",children:t.map((function(e){return Object(h.jsx)(N,{item:e,onClick:function(){return c(O(e))},buttonTitle:"Add to Cart",getCurrencySymbol:j,calculatePrice:u,currencyFilter:r,cart:n,dispatch:c},e.name)}))})]})}function T(e){var t=e.searchTerm,c=e.onChange;return Object(h.jsx)("div",{id:"search-container",children:Object(h.jsx)("input",{type:"search",value:t,onChange:function(e){return c(e.target.value)},placeholder:"Search products..."})})}function w(e){var t=e.currencyFilter,c=e.dispatch;return Object(h.jsxs)("div",{className:"currency-filters-container",children:[Object(h.jsx)("h3",{children:"Choose a currency"}),v.map((function(e){return Object(h.jsx)(m,{className:"currency-button ".concat(t===e&&"selected"),onClick:function(){return c(function(e){return{type:"currencyFilter/setCurrency",payolad:e}}(e))},children:e},e)}))]})}c(40);function S(e){var t=e.dispatch,c=e.match,a=g.filter((function(e){return e.name===c.params.name}))[0];return Object(h.jsxs)("div",{className:"item-details-container",children:[Object(h.jsx)("div",{className:"img-container",children:Object(h.jsx)("img",{src:a.img,alt:a.name})}),Object(h.jsxs)("div",{className:"item-detail",children:[Object(h.jsx)("h1",{children:a.name}),Object(h.jsx)("p",{children:a.price}),Object(h.jsxs)("select",{name:"color",id:"color",children:[Object(h.jsx)("option",{value:"white",children:"White"}),Object(h.jsx)("option",{value:"black",children:"Black"}),Object(h.jsx)("option",{value:"blue",children:"Blue"})]}),Object(h.jsx)(m,{className:"add-to-cart",onClick:function(){return t(O(a))},children:"Add to cart"})]})]})}var I=function(e){var t,c,a=e.state,r=e.dispatch,n=function(e){r({type:"searchTerm/setSearchTerm",payload:e})},i=(t=a.catalog,c=a.searchTerm,t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())})));return Object(h.jsxs)("main",{className:"content main",children:[Object(h.jsx)(d.a,{itemQuantity:a.cart.length}),Object(h.jsx)(w,{currencyFilter:a.currencyFilter,dispatch:r}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/cart",render:function(){return Object(h.jsx)(f,{cart:a.cart,dispatch:r,currencyFilter:a.currencyFilter})}}),Object(h.jsx)(o.a,{path:"/catalog",render:function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(T,Object(l.a)(Object(l.a)({},e),{},{searchTerm:a.searchTerm,onChange:n})),Object(h.jsx)(F,Object(l.a)(Object(l.a)({},e),{},{catalog:i,dispatch:r,currencyFilter:a.currencyFilter,cart:a.cart}))]})}}),Object(h.jsx)(o.a,{path:"/item-details/:name",render:function(e){return Object(h.jsx)(S,Object(l.a)(Object(l.a)({},e),{},{catalog:a.catalog,item:a.selectedItem,dispatch:r}))}})]})]})};var k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),r(e),n(e),i(e)}))},L=c(16),R=Object(L.b)(Object(L.a)({catalog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"catalog/loadData":return t.payload;default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"cart/addItem":var c=Object(l.a)(Object(l.a)({},t.payload),{},{quantity:1});return[].concat(Object(p.a)(e),[c]);case"cart/changeItemQuantity":var a=t.payload,r=a.item,n=a.newQuantity;return e.filter((function(e){return e.id===r.id?e.quantity=n:e}));case"cart/getItemByName":return e.filter((function(e){return e.name===t.payload}));case"cart/removeItem":return e.filter((function(e){return e.id!==t.payload.id}));case"cart/getQuantityInCart":return e.filter((function(e){return e.quantity}));default:return e}},searchTerm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"searchTerm/setSearchTerm":return t.payload;case"searchTerm/clearSearchTerm":return"";default:return e}},currencyFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"USD",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currencyFilter/setCurrency":return t.payolad;default:return e}}})),q=function(){i.a.render(Object(h.jsx)(s.a,{children:Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(I,{state:R.getState(),dispatch:R.dispatch})})}),document.getElementById("root"))};q(),R.subscribe(q),k()}},[[42,1,2]]]);
//# sourceMappingURL=main.77904bd3.chunk.js.map