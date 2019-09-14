(window.webpackJsonpac_consulting_react=window.webpackJsonpac_consulting_react||[]).push([[0],{116:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(21),r=t.n(i),o=(t(61),t(62),t(22)),c=t(49),s=t(11),m=t(24),u=t(25),p=t(28),g=t(26),d=t(6),E=t(27),h=t(8),b=t(133),f=t(134),v=t(135),y=t(136),k=t(137),w=t(138),x=t(50),j=t(117),N=t(118),C=t(119),B=t(120),A=[{src:"./img/calculator.jpg",altText:"Calculator",caption:""},{src:"./img/stacks.jpg",altText:"Coins",caption:"Build a nest egg"},{src:"./img/bookkeep.jpg",altText:"Bookkeeping",caption:"Keep your books in order"},{src:"./img/laptop.jpg",altText:"Laptop and Charts",caption:"Chart your financial future"}],O=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(g.a)(a).call(this,e))).state={activeIndex:0},t.next=t.next.bind(Object(d.a)(t)),t.previous=t.previous.bind(Object(d.a)(t)),t.gotToImg=t.gotToImg.bind(Object(d.a)(t)),t.onExiting=t.onExiting.bind(Object(d.a)(t)),t.onExited=t.onExited.bind(Object(d.a)(t)),t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===A.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animated){var e=0===this.state.activeIndex?A.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"gotToImg",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,a=this.state.activeIndex,t=A.map(function(a){return l.a.createElement(x.a,{onExiting:e.onExiting,onExited:e.onExited,key:a.src,className:"text-center"},l.a.createElement("img",{src:a.src,alt:a.altText,className:"img-fluid rounded\r "}),l.a.createElement(j.a,{captionHeader:a.caption}))});return l.a.createElement(N.a,{activeIndex:a,next:this.next,previous:this.previous,className:"carousel-fade"},l.a.createElement(C.a,{items:A,activeIndex:a,onClickHandler:this.gotToImg}),t,l.a.createElement(B.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),l.a.createElement(B.a,{direction:"next",directionText:"Next",onClickHandler:this.next}))}}]),a}(l.a.Component),I=function(){return l.a.createElement("main",{id:"features"},l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("em",null,"Antoine Cole Consulting")),"  is a full accommodation bookkeeping and accounting firm, that brings a unique approach to the industry. We offer customized financial solutions as well as onsite and remote service to meet the all the needs of our clients. We always aim to create a long lasting relationship that is built on trust and confidentiality, enabling us to communicate and collaborate as we grow your business."),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("em",null,"Antoine Cole Consulting"))," is an affordable, full-service solution that reduces overhead, eliminates hassles and helps build your business."),l.a.createElement("h2",null,l.a.createElement("span",{className:"primary-text"},"Our")," Mission"),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("em",null,"Antoine Cole Consulting"))," provides clients with professional and effective methods of bookkeeping and accounting for your small business, developments or forensic auditing needs. Our experienced staff will customize a financial solution for your company that will run seamlessly in the background while you run the day-to-day operations. We offer both onsite and remote bookkeeping and accounting services as well as payroll processing with quarterly and annual filings."))},H=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-fluid",id:"showcase-gallery"},l.a.createElement(O,null)),l.a.createElement("div",{className:"container-fluid",id:"features"},l.a.createElement(I,null)))},z=t(121),T=t(122),P=t(123),_=t(124),S=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg"},l.a.createElement("h2",null,l.a.createElement("span",{className:"primary-text"},"Our")," Services"))),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md"},l.a.createElement(z.a,null,l.a.createElement(T.a,null,l.a.createElement(P.a,null,l.a.createElement("h4",null,l.a.createElement("span",{className:"icon-button"},l.a.createElement(h.a,{icon:"magic"})),"Accounting")),l.a.createElement("hr",null),l.a.createElement(_.a,null,"Giving monetary data to our clientele in an auspicious and exact way is a pledge that we feel can not be traded off. Significant, efficient money related records guarantee that your business operations will run all the more proficiently every day. We aim to regularly help out our  clientele to  make spending plans, idealizing budgetary articulations, and planning nearby, state and government assessment forms. ")))),l.a.createElement("div",{className:"col-md"},l.a.createElement(z.a,null,l.a.createElement(T.a,null,l.a.createElement(P.a,null,l.a.createElement("h4",null,l.a.createElement("span",{className:"icon-button"},l.a.createElement(h.a,{icon:"clipboard-list"}))," Bookkeeping")),l.a.createElement("hr",null),l.a.createElement(_.a,null,"Our goal  is make our clients feel more than just a business transaction. We are committed to provide you with best bookkeeping services. By  providing our clients  with the necessary tools to help assess their financial position at any given  time. Our MWBE  certified professional staff devotes itself to providing bookkeeping services in a timely, accurate manner, while showing respect and awareness of the confidentiality and individual needs of our clientele. ")))),l.a.createElement("div",{className:"col-md"},l.a.createElement(z.a,null,l.a.createElement(T.a,null,l.a.createElement(P.a,null,l.a.createElement("h4",null,l.a.createElement("span",{className:"icon-button"},l.a.createElement(h.a,{icon:"chart-line"}))," Company Start-ups")),l.a.createElement("hr",null),l.a.createElement(_.a,null,"When starting up a new business it so natural to become involved with the glitzy assignments of planning a business card or picking a business name, yet without a strong comprehension of the numbers, you won\u2019t survive. Selecting the right  Professional   is essential  to grow organizations, organizations with more intricate business structures, (for example, restricted obligation organizations) and when you add extra workers to your organization. "))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md"},l.a.createElement(z.a,null,l.a.createElement(T.a,null,l.a.createElement(P.a,null,l.a.createElement("h4",null,l.a.createElement("span",{className:"icon-button"},l.a.createElement(h.a,{icon:"user-friends"}))," Human Resources")),l.a.createElement("hr",null),l.a.createElement(_.a,null,"Your human capital is your most noteworthy resource and basic to the accomplishment of your business. However overseeing advantages, finance and HR procedures can be exorbitant and tedious particularly with diminishing spending plans and rising social insurance and regulatory expenses. This is the reason we prescribe using innovation to convey on-request administrations to streamline value-based HR and decrease overhead expenses. We have done the examination for you, offering what we consider to be among the best-in-class Human Resource  Services. ")))),l.a.createElement("div",{className:"col-md"},l.a.createElement(z.a,null,l.a.createElement(T.a,null,l.a.createElement(P.a,null,l.a.createElement("h4",null,l.a.createElement("span",{className:"icon-button"},l.a.createElement(h.a,{icon:"file-invoice-dollar"}))," Payroll")),l.a.createElement("hr",null),l.a.createElement(_.a,null,"Endeavoring to do finance all alone for your independent venture could put you at danger of confronting IRS punishments and fines, late duty filings, and troubled representatives. Let us handle all your payroll needs, so you are not at the risk of  fines, penalties and headaches."))))))},W=function(){return l.a.createElement("div",{className:"container-fluid",id:"services-list"},l.a.createElement(S,null))},F=t(52),J=t.n(F),R=t(125),L=[{src:"./img/1.jpg",thumbnail:"./img/1.jpg",caption:"Backyard BBQ"},{src:"./img/2.jpg",caption:"Backyard BBQ 2",thumbnail:"./img/2.jpg"},{src:"./img/3.jpg",caption:"Bedroom",thumbnail:"./img/3.jpg"},{src:"./img/4.jpg",caption:"Bedroom 2",thumbnail:"./img/4.jpg"},{src:"./img/5.jpg",caption:"Bedroom 3",thumbnail:"./img/5.jpg"},{src:"./img/6.jpg",caption:"Bathroom",thumbnail:"./img/6.jpg"},{src:"./img/7.jpg",caption:"Bathroom 2",thumbnail:"./img/7.jpg"},{src:"./img/8.jpg",caption:"Bathroom 3",thumbnail:"./img/8.jpg"},{src:"./img/9.jpg",caption:"Backyard Tiki Bar",thumbnail:"./img/9.jpg"},{src:"./img/10.jpg",caption:"Jacuzzi ",thumbnail:"./img/10.jpg"},{src:"./img/11.jpg",caption:"Jacuzzi 2",thumbnail:"./img/11.jpg"},{src:"./img/12.jpg",caption:"Jacuzzi 3",thumbnail:"./img/12.jpg"},{src:"./img/13.jpg",caption:"Backyard Firepit",thumbnail:"./img/13.jpg"},{src:"./img/14.jpg",caption:"Evening",thumbnail:"./img/14.jpg"},{src:"./img/15.jpg",caption:"Deck Chairs",thumbnail:"./img/15.jpg"},{src:"./img/16.jpg",caption:"Lawn & Deck Chairs",thumbnail:"./img/16.jpg"},{src:"./img/17.jpg",caption:"Deck Chairs 2",thumbnail:"./img/17.jpg"},{src:"./img/18.jpg",caption:"Deck Chairs 3",thumbnail:"./img/18.jpg"},{src:"./img/19.jpg",caption:"Backyard Tiki Bar 2",thumbnail:"./img/19.jpg"},{src:"./img/20.jpg",caption:"Backyard Tiki Bar 3",thumbnail:"./img/20.jpg"},{src:"./img/21.jpg",caption:"Jacuzzi, Deck Chairs, & Floating Chair",thumbnail:"./img/21.jpg"}],M=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"img-list"},l.a.createElement(J.a,{images:L,enableLightbox:!0,enableImageSelection:!1})),l.a.createElement("br",null),l.a.createElement("div",{className:"container-fluid"},l.a.createElement(R.a,null,l.a.createElement("h1",null,"Come Stay At A Beautiful Villa In The Rockaways"),l.a.createElement("p",{className:"lead"},"Brand new 1 bedroom villa, sleeps upto 6 guests, 10 mins from JFK airport via A train, 5mins walk to the beach."),l.a.createElement("hr",{className:"my-2"}),l.a.createElement("p",null,"My villa is brand spanking NEW, clean, bright, and airy. Everything in the villa is new from the bed to the cutlery. The sofa bed has a memory foam mattress in it and the queen size bed in the bedroom is a pillow top. Please come and see for yourself and I guarantee that you will be very, very pleased with everything in the villa. I provide fresh bagels and there is a coffee machine in the kitchen. Complimentary bottles of wine (red & white), beers, water, and childrens drinks. Organic homemade meals cooked for an extra fee upon request."),l.a.createElement("p",{className:"lead"},l.a.createElement("a",{href:"https://www.airbnb.com/rooms/27373231?source_impression_id=p3_1568470454_FJz03r0O%2BM6iHpbw",target:"_blank",rel:"noopener noreferrer",className:"btn btn-info"},"Learn More")))))},q=function(){return l.a.createElement("div",{className:"img-container"},l.a.createElement("h2",null,l.a.createElement("span",{className:"primary-text"},"Our")," AirBnb"),l.a.createElement(M,null))},D=t(126),Y=t(127),K=t(128),Q=t(129),U=t(130),G=function(){return l.a.createElement(D.a,{action:"https://formspree.io/albertchan1110@gmail.com",method:"POST"},l.a.createElement("h2",null,l.a.createElement("span",{className:"primary-text"},"Contact")," Us"),l.a.createElement("br",null),l.a.createElement(Y.a,null,l.a.createElement(Y.a,null,l.a.createElement(K.a,{for:"name"},"Your Name"),l.a.createElement(Q.a,{type:"text",name:"name",id:"name"})),l.a.createElement(K.a,{for:"email"},"Your Email"),l.a.createElement(Q.a,{type:"email",name:"email",id:"email",placeholder:""})),l.a.createElement(Y.a,null,l.a.createElement(K.a,{for:"subject"},"I would like to discuss"),l.a.createElement(Q.a,{type:"select",name:"subject",id:"subject"},l.a.createElement("option",{value:"Accounting"},"Accounting"),l.a.createElement("option",{value:"Bookkeeping"},"Bookkeeping"),l.a.createElement("option",{value:"Company start up"},"Company start up"),l.a.createElement("option",{value:"Human resources"},"Human resources"),l.a.createElement("option",{value:"Payroll"},"Payroll"),l.a.createElement("option",{value:"Accounting & Bookkeeping"},"Accounting & Bookkeeping"),l.a.createElement("option",{value:"Accounting & Company start up"},"Accounting & Company start up"),l.a.createElement("option",{value:"Accounting & Human resources"},"Accounting & Human resources"),l.a.createElement("option",{value:"Accounting & Company start up"},"Accounting & Company start up"),l.a.createElement("option",{value:"Accounting & Payroll"},"Accounting & Payroll"),l.a.createElement("option",{value:"Bookkeeping & Company start up"},"Bookkeeping & Company start up"),l.a.createElement("option",{value:"Bookkeeping & Human resources"},"Bookkeeping & Human resources"),l.a.createElement("option",{value:"Bookkeeping & Company start up"},"Bookkeeping & Company start up"),l.a.createElement("option",{value:"Bookkeeping & Payroll"},"Bookkeeping & Payroll"),l.a.createElement("option",{value:"Human resources & Company start up"},"Human resources & Company start up"),l.a.createElement("option",{value:"Human resources & Payroll"},"Human resources & Payroll"),l.a.createElement("option",{value:"Company start up & Payroll"},"Company start up & Payroll"),l.a.createElement("option",{value:"AirBnb"},"AirBnb"),l.a.createElement("option",{value:"All"},"All"))),l.a.createElement(Y.a,null,l.a.createElement(K.a,{for:"message"},"Your Message"),l.a.createElement(Q.a,{type:"textarea",name:"message",id:"message"})),l.a.createElement(U.a,{outline:!0,color:"danger",type:"reset"},"Cancel"),l.a.createElement(U.a,{outline:!0,color:"primary",className:"float-right",type:"submit"},"Submit"))},V=function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement(G,null))},Z=t(131),X=t(132),$=function(){return l.a.createElement("div",null,l.a.createElement(R.a,{id:"about-jumbo"},l.a.createElement("h1",{className:"display-3"},"About Erica Antoine-Cole"),l.a.createElement("p",{className:"lead"},"Antoine Cole Consulting - Integrity + Accuracy ... It All Adds Up"),l.a.createElement("hr",{className:"my-2"}),l.a.createElement(Z.a,null,l.a.createElement(X.a,null,"Sole Propietorship"),l.a.createElement(X.a,null,"Minority Owned Business"),l.a.createElement(X.a,null,"For Profit Organization"),l.a.createElement(X.a,null,"Woman Owned Small Business"))))},ee=function(){return l.a.createElement($,null)},ae=t(12),te=t(14),ne=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(g.a)(a).call(this,e))).toggle=t.toggle.bind(Object(d.a)(t)),t.state={isOpen:!1},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return l.a.createElement(ae.a,null,l.a.createElement(b.a,{color:"dark",dark:!0,expand:"md",fixed:"top",id:"navbar"},l.a.createElement(f.a,{href:"/home",className:"mr-auto"},"Antoine Cole Consulting"),l.a.createElement(v.a,{onClick:this.toggle}),l.a.createElement(y.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(k.a,{className:"ml-auto",navbar:!0},l.a.createElement(w.a,null,l.a.createElement(ae.b,{className:"nav-link",exact:!0,to:"/home"},"Home")),l.a.createElement(w.a,null,l.a.createElement(ae.b,{className:"nav-link",exact:!0,to:"/services"},"Services")),l.a.createElement(w.a,null,l.a.createElement(ae.b,{className:"nav-link",exact:!0,to:"/gallery"},"AirBnb")),l.a.createElement(w.a,null,l.a.createElement(ae.b,{className:"nav-link",exact:!0,to:"/contact"},"Contact")),l.a.createElement(w.a,null,l.a.createElement(ae.b,{className:"nav-link",exact:!0,to:"/about"},"About")),l.a.createElement(w.a,null,l.a.createElement(ae.b,{href:"https://instagram.com/come_stay_at_the_rockaways",target:"_blank",rel:"noopener noreferrer",className:"nav-link"},l.a.createElement(h.a,{icon:["fab","instagram"]}))),l.a.createElement(w.a,null,l.a.createElement(ae.b,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"nav-link"},l.a.createElement(h.a,{icon:["fab","twitter"]}))),l.a.createElement(w.a,null,l.a.createElement(ae.b,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"nav-link"},l.a.createElement(h.a,{icon:["fab","linkedin"]})))))),l.a.createElement(te.c,null,l.a.createElement(te.a,{path:"/home",component:H,exact:!0}),l.a.createElement(te.a,{path:"/services",component:W,exact:!0}),l.a.createElement(te.a,{path:"/gallery",component:q,exact:!0}),l.a.createElement(te.a,{path:"/contact",component:V,exact:!0}),l.a.createElement(te.a,{path:"/about",component:ee,exact:!0})))}}]),a}(l.a.Component),le=function(){return l.a.createElement("header",{id:"main-header"},l.a.createElement(ne,null))},ie=function(){return l.a.createElement("footer",{className:"footer",id:"main-footer"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row text-center",id:"company"},l.a.createElement("div",{className:"col-md"},l.a.createElement(h.a,{icon:"envelope"}),"  ",l.a.createElement("a",{href:"mailto:antoinecole@gmail.com"},"antoinecole@gmail.com")),l.a.createElement("div",{className:"col-md"},l.a.createElement(h.a,{icon:"phone-alt"}),"  ",l.a.createElement("a",{href:"tel:19172950587"},"917-295-0587")),l.a.createElement("div",{className:"col-md"},l.a.createElement(h.a,{icon:"map-pin"}),"  ",l.a.createElement("a",{href:"https://goo.gl/maps/dLyfu9qHsL4CDBZh8",target:"_blank",rel:"noopener noreferrer"},"Far Rockaway, New York"))),l.a.createElement("div",{className:"row"},l.a.createElement("hr",null)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg"},l.a.createElement("h5",{className:"text-uppercase"},"Antoine Cole Consulting \u2013 Integrity + Accuracy\u2026 It all adds up."),l.a.createElement("hr",null),l.a.createElement("p",null,"Antoine Cole Consulting was established in 2010. We have been providing our clients with excellent service ever since. Providing them with state -of-the-art financial solutions without the difficulties of maintaining an entire accounting department. As well as, utilizing our bookkeeping and accounting services is a smart choice for any business..")),l.a.createElement("hr",null))),l.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2019 Copyright:",l.a.createElement("a",{href:"https://papanugget.github.io",target:"_blank",rel:"noopener noreferrer"}," T-Rex Industries")))};o.b.add(c.a,s.d,s.g,s.h,s.f,s.a,s.i,s.c,s.e,s.b);var re=function(){return l.a.createElement("div",null,l.a.createElement(le,null),l.a.createElement(ie,null))};r.a.render(l.a.createElement(re,null),document.getElementById("root"))},56:function(e,a,t){e.exports=t(116)},62:function(e,a,t){}},[[56,1,2]]]);
//# sourceMappingURL=main.00f41346.chunk.js.map