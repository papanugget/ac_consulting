(window.webpackJsonpac_consulting_react=window.webpackJsonpac_consulting_react||[]).push([[0],{29:function(e,a,t){e.exports=t(48)},35:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(19),r=t.n(i),o=(t(34),t(12)),c=t(13),s=t(15),m=t(14),u=t(16),d=(t(35),t(18)),h=t(26),g=t(8),E=t(5),p=t(7),f=t(49),v=t(50),b=t(51),y=t(52),w=t(53),k=t(54),x=t(55),N=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).toggle=t.toggle.bind(Object(E.a)(t)),t.state={isOpen:!1},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return l.a.createElement(f.a,{color:"dark",dark:!0,expand:"md",fixed:"top"},l.a.createElement(v.a,{href:"/",className:"mr-auto"},"Antoine Cole Consulting"),l.a.createElement(b.a,{onClick:this.toggle}),l.a.createElement(y.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(w.a,{className:"ml-auto",navbar:!0},l.a.createElement(k.a,null,l.a.createElement(x.a,{href:"/"},"Home")),l.a.createElement(k.a,null,l.a.createElement(x.a,{href:"/services/"},"Services")),l.a.createElement(k.a,null,l.a.createElement(x.a,{href:"/gallery/"},"Gallery")),l.a.createElement(k.a,null,l.a.createElement(x.a,{href:"/contact/"},"Contact")),l.a.createElement(k.a,null,l.a.createElement(x.a,{href:"/about/"},"About")),l.a.createElement(k.a,null,l.a.createElement(x.a,{href:"https://instagram.com/come_stay_at_the_rockaways",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(p.a,{icon:["fab","instagram"]}))),l.a.createElement(k.a,null,l.a.createElement(x.a,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(p.a,{icon:["fab","twitter"]}))),l.a.createElement(k.a,null,l.a.createElement(x.a,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(p.a,{icon:["fab","linkedin"]}))))))}}]),a}(l.a.Component),O=function(){return l.a.createElement("header",{id:"main-header"},l.a.createElement(N,null))},C=t(28),j=t(56),I=t(57),T=t(58),_=t(59),H=[{src:"./img/calculator.jpg",altText:"Calculator",caption:""},{src:"./img/stacks.jpg",altText:"Coins",caption:"Build a nest egg"},{src:"./img/bookkeep.jpg",altText:"Bookkeeping",caption:"Keep your books in order"},{src:"./img/laptop.jpg",altText:"Laptop and Charts",caption:"Chart your financial future"}],S=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={activeIndex:0},t.next=t.next.bind(Object(E.a)(t)),t.previous=t.previous.bind(Object(E.a)(t)),t.gotToImg=t.gotToImg.bind(Object(E.a)(t)),t.onExiting=t.onExiting.bind(Object(E.a)(t)),t.onExited=t.onExited.bind(Object(E.a)(t)),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===H.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animated){var e=0===this.state.activeIndex?H.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"gotToImg",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,a=this.state.activeIndex,t=H.map(function(a){return l.a.createElement(C.a,{onExiting:e.onExiting,onExited:e.onExited,key:a.src,className:"text-center"},l.a.createElement("img",{src:a.src,alt:a.altText,className:"img-fluid rounded\r "}),l.a.createElement(j.a,{captionHeader:a.caption}))});return l.a.createElement(I.a,{activeIndex:a,next:this.next,previous:this.previous,className:"carousel-fade"},l.a.createElement(T.a,{items:H,activeIndex:a,onClickHandler:this.gotToImg}),t,l.a.createElement(_.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),l.a.createElement(_.a,{direction:"next",directionText:"Next",onClickHandler:this.next}))}}]),a}(l.a.Component),A=function(){return l.a.createElement("main",{id:"features"},l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("em",null,"Antoine Cole Consulting")),"  is a full accommodation bookkeeping and accounting firm, that brings a unique approach to the industry. We offer customized financial solutions as well as onsite and remote service to meet the all the needs of our clients. We always aim to create a long lasting relationship that is built on trust and confidentiality, enabling us to communicate and collaborate as we grow your business."),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("em",null,"Antoine Cole Consulting"))," is an affordable, full-service solution that reduces overhead, eliminates hassles and helps build your business."),l.a.createElement("h2",null,"Our Mission"),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("em",null,"Antoine Cole Consulting"))," provides clients with professional and effective methods of bookkeeping and accounting for your small business, developments or forensic auditing needs. Our experienced staff will customize a financial solution for your company that will run seamlessly in the background while you run the day-to-day operations. We offer both onsite and remote bookkeeping and accounting services as well as payroll processing with quarterly and annual filings."))},z=t(60),W=t(61),B=t(62),R=t(63),q=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg"},l.a.createElement("h2",null,"Services"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md"},l.a.createElement(z.a,null,l.a.createElement(W.a,null,l.a.createElement(B.a,null,l.a.createElement("h4",null,l.a.createElement("span",null,l.a.createElement(p.a,{icon:"circle",inverse:!0}),l.a.createElement(p.a,{icon:"magic"})),"Accounting")),l.a.createElement("hr",null),l.a.createElement(R.a,null,"Giving monetary data to our clientele in an auspicious and exact way is a pledge that we feel can not be traded off. Significant, efficient money related records guarantee that your business operations will run all the more proficiently every day. We aim to regularly help out our  clientele to  make spending plans, idealizing budgetary articulations, and planning nearby, state and government assessment forms. ")))),l.a.createElement("div",{className:"col-md"},l.a.createElement(z.a,null,l.a.createElement(W.a,null,l.a.createElement(B.a,null,l.a.createElement("h4",null,l.a.createElement("span",{className:"icon-button"},l.a.createElement(p.a,{icon:"clipboard-list"}))," Bookkeeping")),l.a.createElement("hr",null),l.a.createElement(R.a,null,"Our goal  is make our clients feel more than just a business transaction. We are committed to provide you with best bookkeeping services. By  providing our clients  with the necessary tools to help assess their financial position at any given  time. Our MWBE  certified professional staff devotes itself to providing bookkeeping services in a timely, accurate manner, while showing respect and awareness of the confidentiality and individual needs of our clientele. ")))),l.a.createElement("div",{className:"col-md"},l.a.createElement(z.a,null,l.a.createElement(W.a,null,l.a.createElement(B.a,null,l.a.createElement("h4",null,l.a.createElement("span",{className:"icon-button"},l.a.createElement(p.a,{icon:"chart-line"}))," Company Start-ups")),l.a.createElement("hr",null),l.a.createElement(R.a,null,"When starting up a new business it so natural to become involved with the glitzy assignments of planning a business card or picking a business name, yet without a strong comprehension of the numbers, you won\u2019t survive. Selecting the right  Professional   is essential  to grow organizations, organizations with more intricate business structures, (for example, restricted obligation organizations) and when you add extra workers to your organization. "))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md"},l.a.createElement(z.a,null,l.a.createElement(W.a,null,l.a.createElement(B.a,null,l.a.createElement("h4",null,l.a.createElement("span",{className:"icon-button"},l.a.createElement(p.a,{icon:"user-friends"}))," Human Resources")),l.a.createElement("hr",null),l.a.createElement(R.a,null,"Your human capital is your most noteworthy resource and basic to the accomplishment of your business. However overseeing advantages, finance and HR procedures can be exorbitant and tedious particularly with diminishing spending plans and rising social insurance and regulatory expenses. This is the reason we prescribe using innovation to convey on-request administrations to streamline value-based HR and decrease overhead expenses. We have done the examination for you, offering what we consider to be among the best-in-class Human Resource  Services. ")))),l.a.createElement("div",{className:"col-md"},l.a.createElement(z.a,null,l.a.createElement(W.a,null,l.a.createElement(B.a,null,l.a.createElement("h4",null,l.a.createElement("span",{className:"icon-button"},l.a.createElement(p.a,{icon:"file-invoice-dollar"}))," Payroll")),l.a.createElement("hr",null),l.a.createElement(R.a,null,"Endeavoring to do finance all alone for your independent venture could put you at danger of confronting IRS punishments and fines, late duty filings, and troubled representatives. Let us handle all your payroll needs, so you are not at the risk of  fines, penalties and headaches."))))))},L=function(){return l.a.createElement("footer",{className:"footer",id:"main-footer"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row text-center",id:"company"},l.a.createElement("div",{className:"col-md"},l.a.createElement(p.a,{icon:"envelope"}),"  ",l.a.createElement("a",{href:"mailto:antoinecole@gmail.com"},"antoinecole@gmail.com")),l.a.createElement("div",{className:"col-md"},l.a.createElement(p.a,{icon:"phone-alt"}),"  ",l.a.createElement("a",{href:"tel:19172950587"},"917-295-0587")),l.a.createElement("div",{className:"col-md"},l.a.createElement(p.a,{icon:"map-pin"}),"  ",l.a.createElement("a",{href:"https://goo.gl/maps/dLyfu9qHsL4CDBZh8",target:"_blank",rel:"noopener noreferrer"},"Far Rockaway, New York"))),l.a.createElement("div",{className:"row"},l.a.createElement("hr",null)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg"},l.a.createElement("h5",{className:"text-uppercase"},"Antoine Cole Consulting \u2013 Integrity + Accuracy\u2026 It all adds up."),l.a.createElement("hr",null),l.a.createElement("p",null,"Antoine Cole Consulting was established in 2010. We have been providing our clients with excellent service ever since. Providing them with state -of-the-art financial solutions without the difficulties of maintaining an entire accounting department. As well as, utilizing our bookkeeping and accounting services is a smart choice for any business..")),l.a.createElement("hr",null))),l.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2019 Copyright:",l.a.createElement("a",{href:"https://papanugget.github.io",target:"_blank",rel:"noopener noreferrer"}," T-Rex Industries")))};d.b.add(h.a,g.d,g.g,g.h,g.f,g.a,g.i,g.c,g.e,g.b);var P=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(O,null),l.a.createElement("div",{className:"container-fluid",id:"showcase-gallery"},l.a.createElement(S,null)),l.a.createElement("div",{className:"container-fluid"},l.a.createElement(A,null)),l.a.createElement("div",{className:"container-fluid",id:"services"},l.a.createElement(q,null)),l.a.createElement("div",null,l.a.createElement(L,null)))}}]),a}(l.a.Component);r.a.render(l.a.createElement(P,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.cbd0319a.chunk.js.map