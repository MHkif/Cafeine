/* empty css             */import{g as b,r as C}from"./params.597cd0f5.js";import{N as k}from"./WpTable.4dea5a68.js";import{_ as c}from"./default-i18n.3a91e0e5.js";import{e as l}from"./constants.0d8c074c.js";import{n as r}from"./_plugin-vue2_normalizer.61652a7c.js";import{D as u}from"./index.0c44a654.js";import{S as w}from"./SaveChanges.e40a9083.js";import{c as p,a as d,m as f,b as h}from"./vuex.esm.8fdeb4b6.js";import{a as N,C as S,G as D}from"./Header.25ba6157.js";import{S as g,d as P,a as m,b as v}from"./Caret.19b10233.js";import{C as L,a as A}from"./LicenseKeyBar.f7493613.js";import{S as x}from"./Logo.8785cc9f.js";import{S as T}from"./Support.85587a91.js";import{C as I}from"./Tabs.94a491a6.js";import{S as B}from"./Exclamation.fd45a7b0.js";import{U as M}from"./Url.c71d5763.js";import{S as O}from"./Gear.184e0c65.js";import{T as _}from"./Slide.15a07930.js";function E(i,t="yyyy-MM-dd HH:mm:ss"){return u.fromSQL(i,{zone:"utc"}).setZone(u.local().zoneName).toFormat(t)}function H(i){return u.fromSQL(i,{zone:"utc"}).setZone(u.local().zoneName).toRelative().replace("a few seconds ago",c("a few seconds ago",l)).replace("a minute ago",c("a minute ago",l)).replace("minutes ago",c("minutes ago",l)).replace("a day ago",c("a day ago",l)).replace("days ago",c("days ago",l)).replace("a month ago",c("a month ago",l)).replace("months ago",c("months ago",l)).replace("a year ago",c("a year ago",l)).replace("years ago",c("years ago",l))}const R={methods:{dateSqlToLocal:E,dateSqlToLocalRelative:H}},U={};var z=function(){var t=this,s=t._self._c;return s("svg",{staticClass:"aioseo-description",attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z",fill:"currentColor"}})])},q=[],F=r(U,z,q,!1,null,null,null,null);const G=F.exports,j={};var V=function(){var t=this,s=t._self._c;return s("svg",{staticClass:"aioseo-folder-open",attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z",fill:"currentColor"}})])},K=[],Y=r(j,V,K,!1,null,null,null,null);const W=Y.exports;const Q={components:{CoreApiBar:L,CoreLicenseKeyBar:A,CoreUpgradeBar:N,SvgAioseoLogo:x,SvgClose:g,SvgDescription:G,SvgFolderOpen:W,SvgSupport:T},data(){return{searchItem:null,strings:{close:this.$t.__("Close",this.$td),search:this.$t.__("Search",this.$td),viewAll:this.$t.__("View All",this.$td),docs:this.$t.__("Docs",this.$td),viewDocumentation:this.$t.__("View Documentation",this.$td),browseDocumentation:this.$t.sprintf(this.$t.__("Browse documentation, reference material, and tutorials for %1$s.",this.$td),"AIOSEO"),viewAllDocumentation:this.$t.__("View All Documentation",this.$td),getSupport:this.$t.__("Get Support",this.$td),submitTicket:this.$t.__("Submit a ticket and our world class support team will be in touch soon.",this.$td),submitSupportTicket:this.$t.__("Submit a Support Ticket",this.$td),upgradeToPro:this.$t.__("Upgrade to Pro",this.$td)}}},computed:{...p(["settings","isUnlicensed"]),...d(["showHelpModal","helpPanel","pong"]),filteredDocs(){return this.searchItem!==""?Object.values(this.helpPanel.docs).filter(i=>this.searchItem!==null?i.title.toLowerCase().includes(this.searchItem.toLowerCase()):null):null}},methods:{inputSearch:function(i){P(()=>{this.searchItem=i},1e3)},toggleSection:function(i){i.target.parentNode.parentNode.classList.toggle("opened")},toggleDocs:function(i){i.target.previousSibling.classList.toggle("opened"),i.target.style.display="none"},toggleModal(){document.getElementById("aioseo-help-modal").classList.toggle("visible"),document.body.classList.toggle("modal-open")},getCategoryDocs(i){return Object.values(this.helpPanel.docs).filter(t=>t.categories.flat().includes(i)?t:null)}}};var X=function(){var t=this,s=t._self._c;return s("div",{staticClass:"aioseo-help",attrs:{id:"aioseo-help-modal"}},[!t.$isPro&&t.settings.showUpgradeBar&&t.pong?s("core-upgrade-bar"):t._e(),t.$isPro&&t.isUnlicensed&&t.pong?s("core-license-key-bar"):t._e(),t.pong?t._e():s("core-api-bar"),s("div",{staticClass:"aioseo-help-header"},[s("div",{staticClass:"logo"},[t.isUnlicensed?s("a",{attrs:{href:t.$links.utmUrl("header-logo"),target:"_blank"}},[s("svg-aioseo-logo",{attrs:{id:"aioseo-help-logo"}})],1):t._e(),t.isUnlicensed?t._e():s("svg-aioseo-logo",{attrs:{id:"aioseo-help-logo"}})],1),s("div",{attrs:{id:"aioseo-help-close",title:t.strings.close},on:{click:function(e){return e.stopPropagation(),t.toggleModal.apply(null,arguments)}}},[s("svg-close")],1)]),s("div",{staticClass:"help-content"},[s("div",{attrs:{id:"aioseo-help-search"}},[s("base-input",{attrs:{type:"text",size:"medium",placeholder:t.strings.search},on:{input:e=>t.inputSearch(e)}})],1),s("div",{attrs:{id:"aioseo-help-result"}},[s("ul",{staticClass:"aioseo-help-docs"},t._l(t.filteredDocs,function(e,n){return s("li",{key:n},[s("span",{staticClass:"icon"},[s("svg-description")],1),s("a",{attrs:{href:t.$links.utmUrl("help-panel-doc","",e.url),rel:"noopener noreferrer",target:"_blank"}},[t._v(t._s(e.title))])])}),0)]),s("div",{attrs:{id:"aioseo-help-categories"}},[s("ul",{staticClass:"aioseo-help-categories-toggle"},t._l(t.helpPanel.categories,function(e,n){return s("li",{key:n,staticClass:"aioseo-help-category",class:{opened:n==="getting-started"}},[s("header",{on:{click:function(o){return o.stopPropagation(),t.toggleSection(o)}}},[s("span",{staticClass:"folder-open"},[s("svg-folder-open")],1),s("span",{staticClass:"title"},[t._v(t._s(e))]),s("span",{staticClass:"dashicons dashicons-arrow-right-alt2"})]),s("ul",{staticClass:"aioseo-help-docs"},[t._l(t.getCategoryDocs(n).slice(0,5),function(o,a){return s("li",{key:a},[s("span",{staticClass:"icon"},[s("svg-description")],1),s("a",{attrs:{href:t.$links.utmUrl("help-panel-doc","",o.url),rel:"noopener noreferrer",target:"_blank"}},[t._v(t._s(o.title))])])}),s("div",{staticClass:"aioseo-help-additional-docs"},t._l(t.getCategoryDocs(n).slice(5,t.getCategoryDocs(n).length),function(o,a){return s("li",{key:a},[s("span",{staticClass:"icon"},[s("svg-description")],1),s("a",{attrs:{href:t.$links.utmUrl("help-panel-doc","",o.url),rel:"noopener noreferrer",target:"_blank"}},[t._v(t._s(o.title))])])}),0),t.getCategoryDocs(n).length>=5?s("base-button",{staticClass:"aioseo-help-docs-viewall gray medium",on:{click:function(o){return o.stopPropagation(),t.toggleDocs(o)}}},[t._v(" "+t._s(t.strings.viewAll)+" "+t._s(e)+" "+t._s(t.strings.docs)+" ")]):t._e()],2)])}),0)]),s("div",{attrs:{id:"aioseo-help-footer"}},[s("div",{staticClass:"aioseo-help-footer-block"},[s("a",{attrs:{href:t.$links.utmUrl("help-panel-all-docs","","https://aioseo.com/docs/"),rel:"noopener noreferrer",target:"_blank"}},[s("svg-description"),s("h3",[t._v(t._s(t.strings.viewDocumentation))]),s("p",[t._v(t._s(t.strings.browseDocumentation))]),s("base-button",{staticClass:"aioseo-help-docs-viewall gray small"},[t._v(" "+t._s(t.strings.viewAllDocumentation)+" ")])],1)]),s("div",{staticClass:"aioseo-help-footer-block"},[s("a",{attrs:{href:!t.$isPro||!t.$aioseo.license.isActive?t.$links.getUpsellUrl("help-panel","get-support","liteUpgrade"):"https://aioseo.com/account/support/",rel:"noopener noreferrer",target:"_blank"}},[s("svg-support"),s("h3",[t._v(t._s(t.strings.getSupport))]),s("p",[t._v(t._s(t.strings.submitTicket))]),t.$isPro&&t.$aioseo.license.isActive?s("base-button",{staticClass:"aioseo-help-docs-support blue small"},[t._v(" "+t._s(t.strings.submitSupportTicket)+" ")]):t._e(),!t.$isPro||!t.$aioseo.license.isActive?s("base-button",{staticClass:"aioseo-help-docs-support green small"},[t._v(" "+t._s(t.strings.upgradeToPro)+" ")]):t._e()],1)])])])],1)},Z=[],J=r(Q,X,Z,!1,null,null,null,null);const tt=J.exports,st=""+window.__aioseoDynamicImportPreload__("images/dannie-detective.f19b97eb.png");const it={components:{SvgCircleCheck:m,SvgCircleClose:v,SvgCircleExclamation:B,SvgGear:O,TransitionSlide:_},mixins:[M,R],props:{notification:{type:Object,required:!0}},data(){return{active:!0,strings:{dismiss:this.$t.__("Dismiss",this.$td)}}},computed:{getIcon(){switch(this.notification.type){case"warning":return"svg-circle-exclamation";case"error":return"svg-circle-close";case"info":return"svg-gear";case"success":default:return"svg-circle-check"}},getDate(){return this.dateSqlToLocalRelative(this.notification.start)}},methods:{...f(["dismissNotifications","processButtonAction"]),processDismissNotification(){this.active=!1,this.dismissNotifications([this.notification.slug]),this.$emit("dismissed-notification")}}};var et=function(){var t=this,s=t._self._c;return s("transition-slide",{staticClass:"aioseo-notification",attrs:{active:t.active}},[s("div",[s("div",{staticClass:"icon"},[s(t.getIcon,{tag:"component",class:t.notification.type})],1),s("div",{staticClass:"body"},[s("div",{staticClass:"title"},[s("div",[t._v(t._s(t.notification.title))]),s("div",{staticClass:"date"},[t._v(" "+t._s(t.getDate)+" ")])]),s("div",{staticClass:"notification-content",domProps:{innerHTML:t._s(t.notification.content)}}),s("div",{staticClass:"actions"},[t.notification.button1_label&&t.notification.button1_action?s("base-button",{attrs:{size:"small",type:"gray",tag:t.getTagType(t.notification.button1_action),href:t.getHref(t.notification.button1_action),target:t.getTarget(t.notification.button1_action),loading:t.button1Loading},on:{click:function(e){return t.processButtonClick(t.notification.button1_action,1)}}},[t._v(" "+t._s(t.notification.button1_label)+" ")]):t._e(),t.notification.button2_label&&t.notification.button2_action?s("base-button",{attrs:{size:"small",type:"gray",tag:t.getTagType(t.notification.button2_action),href:t.getHref(t.notification.button2_action),target:t.getTarget(t.notification.button2_action),loading:t.button2Loading},on:{click:function(e){return t.processButtonClick(t.notification.button2_action,2)}}},[t._v(" "+t._s(t.notification.button2_label)+" ")]):t._e(),t.notification.dismissed?t._e():s("a",{staticClass:"dismiss",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.processDismissNotification.apply(null,arguments)}}},[t._v(t._s(t.strings.dismiss))])],1)])])])},ot=[],nt=r(it,et,ot,!1,null,null,null,null);const at=nt.exports;const rt={components:{SvgCircleCheck:m,TransitionSlide:_},props:{notification:{type:Object,required:!0}},data(){return{step:1,active:!0,strings:{dismiss:this.$t.__("Dismiss",this.$td),yesILoveIt:this.$t.__("Yes, I love it!",this.$td),notReally:this.$t.__("Not Really...",this.$td),okYouDeserveIt:this.$t.__("Ok, you deserve it",this.$td),nopeMaybeLater:this.$t.__("Nope, maybe later",this.$td),giveFeedback:this.$t.__("Give feedback",this.$td),noThanks:this.$t.__("No thanks",this.$td)}}},computed:{...d(["options"]),...p(["licenseKey"]),title(){switch(this.step){case 2:return this.$t.__("That's Awesome!",this.$td);case 3:return this.$t.__("Help us improve",this.$td);default:return this.$t.sprintf(this.$t.__("Are you enjoying %1$s?",this.$td),"AIOSEO")}},content(){switch(this.step){case 2:return this.$t.__("Could you please do me a BIG favor and give it a 5-star rating on WordPress to help us spread the word and boost our motivation?",this.$td)+"<br><br><strong>~ Syed Balkhi<br>"+this.$t.sprintf(this.$t.__("CEO of %1$s",this.$td),"All in One SEO")+"</strong>";case 3:return this.$t.sprintf(this.$t.__("We're sorry to hear you aren't enjoying %1$s. We would love a chance to improve. Could you take a minute and let us know what we can do better?",this.$td),"All in One SEO");default:return""}},feedbackUrl(){const i=this.options.general&&this.licenseKey?this.licenseKey:"",t=this.$isPro?"pro":"lite";return this.$links.utmUrl("notification-review-notice",this.$aioseo.version,"https://aioseo.com/plugin-feedback/?wpf7528_24="+encodeURIComponent(this.$aioseo.urls.home)+"&wpf7528_26="+i+"&wpf7528_27="+t+"&wpf7528_28="+this.$aioseo.version)}},methods:{...f(["dismissNotifications","processButtonAction"]),processDismissNotification(i=!1){this.active=!1,this.dismissNotifications([this.notification.slug+(i?"-delay":"")]),this.$emit("dismissed-notification")}}};var ct=function(){var t=this,s=t._self._c;return s("transition-slide",{staticClass:"aioseo-notification",attrs:{active:t.active}},[s("div",[s("div",{staticClass:"icon"},[s("svg-circle-check",{staticClass:"success"})],1),s("div",{staticClass:"body"},[s("div",{staticClass:"title"},[s("div",[t._v(t._s(t.title))])]),s("div",{staticClass:"notification-content",domProps:{innerHTML:t._s(t.content)}}),s("div",{staticClass:"actions"},[t.step===1?[s("base-button",{attrs:{size:"small",type:"blue"},on:{click:function(e){e.stopPropagation(),t.step=2}}},[t._v(" "+t._s(t.strings.yesILoveIt)+" ")]),s("base-button",{attrs:{size:"small",type:"gray"},on:{click:function(e){e.stopPropagation(),t.step=3}}},[t._v(" "+t._s(t.strings.notReally)+" ")])]:t._e(),t.step===2?[s("base-button",{attrs:{tag:"a",href:"https://wordpress.org/support/plugin/all-in-one-seo-pack/reviews/?filter=5#new-post",size:"small",type:"blue",target:"_blank",rel:"noopener noreferrer"},on:{click:function(e){return t.processDismissNotification(!1)}}},[t._v(" "+t._s(t.strings.okYouDeserveIt)+" ")]),s("base-button",{attrs:{size:"small",type:"gray"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.processDismissNotification(!0)}}},[t._v(" "+t._s(t.strings.nopeMaybeLater)+" ")])]:t._e(),t.step===3?[s("base-button",{attrs:{tag:"a",href:t.feedbackUrl,size:"small",type:"blue",target:"_blank",rel:"noopener noreferrer"},on:{click:function(e){return t.processDismissNotification(!1)}}},[t._v(" "+t._s(t.strings.giveFeedback)+" ")]),s("base-button",{attrs:{size:"small",type:"gray"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.processDismissNotification(!1)}}},[t._v(" "+t._s(t.strings.noThanks)+" ")])]:t._e(),t.notification.dismissed?t._e():s("a",{staticClass:"dismiss",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.processDismissNotification(!1)}}},[t._v(t._s(t.strings.dismiss))])],2)])])])},lt=[],dt=r(rt,ct,lt,!1,null,null,null,null);const ut=dt.exports;const ft={components:{SvgCircleCheck:m,TransitionSlide:_},props:{notification:{type:Object,required:!0}},data(){return{active:!0,strings:{dismiss:this.$t.__("Dismiss",this.$td),yesILoveIt:this.$t.__("Yes, I love it!",this.$td),notReally:this.$t.__("Not Really...",this.$td),okYouDeserveIt:this.$t.__("Ok, you deserve it",this.$td),nopeMaybeLater:this.$t.__("Nope, maybe later",this.$td),giveFeedback:this.$t.__("Give feedback",this.$td),noThanks:this.$t.__("No thanks",this.$td)}}},computed:{...d(["options"]),title(){return this.$t.sprintf(this.$t.__("Are you enjoying %1$s?",this.$td),"AIOSEO")},content(){return this.$t.sprintf(this.$t.__("Hey, I noticed you have been using %1$s for some time - that’s awesome! Could you please do me a BIG favor and give it a 5-star rating on WordPress to help us spread the word and boost our motivation?",this.$td),"<strong>All in One SEO</strong>")+"<br><br><strong>~ Syed Balkhi<br>"+this.$t.sprintf(this.$t.__("CEO of %1$s",this.$td),"All in One SEO")+"</strong>"}},methods:{...f(["dismissNotifications","processButtonAction"]),processDismissNotification(i=!1){this.active=!1,this.dismissNotifications([this.notification.slug+(i?"-delay":"")]),this.$emit("dismissed-notification")}}};var _t=function(){var t=this,s=t._self._c;return s("transition-slide",{staticClass:"aioseo-notification",attrs:{active:t.active}},[s("div",[s("div",{staticClass:"icon"},[s("svg-circle-check",{staticClass:"success"})],1),s("div",{staticClass:"body"},[s("div",{staticClass:"title"},[s("div",[t._v(t._s(t.title))])]),s("div",{staticClass:"notification-content",domProps:{innerHTML:t._s(t.content)}}),s("div",{staticClass:"actions"},[s("base-button",{attrs:{tag:"a",href:"https://wordpress.org/support/plugin/all-in-one-seo-pack/reviews/?filter=5#new-post",size:"small",type:"blue",target:"_blank",rel:"noopener noreferrer"},on:{click:function(e){return t.processDismissNotification(!1)}}},[t._v(" "+t._s(t.strings.okYouDeserveIt)+" ")]),s("base-button",{attrs:{size:"small",type:"gray"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.processDismissNotification(!0)}}},[t._v(" "+t._s(t.strings.nopeMaybeLater)+" ")]),t.notification.dismissed?t._e():s("a",{staticClass:"dismiss",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.processDismissNotification(!1)}}},[t._v(t._s(t.strings.dismiss))])],1)])])])},pt=[],mt=r(ft,_t,pt,!1,null,null,null,null);const ht=mt.exports;const gt={components:{SvgCircleClose:v,TransitionSlide:_},props:{notification:{type:Object,required:!0}},data(){return{active:!0,strings:{title:this.$t.sprintf(this.$t.__("%1$s %2$s Not Configured Properly",this.$td),"AIOSEO","Addons"),learnMore:this.$t.__("Learn More",this.$td),upgrade:this.$t.__("Upgrade",this.$td)}}},computed:{...d(["options"]),content(){let i="<ul>";return this.notification.addons.forEach(t=>{i+="<li><strong>AIOSEO - "+t.name+"</strong></li>"}),i+="</ul>",this.notification.message+i}}};var vt=function(){var t=this,s=t._self._c;return s("transition-slide",{staticClass:"aioseo-notification",attrs:{active:t.active}},[s("div",[s("div",{staticClass:"icon"},[s("svg-circle-close",{staticClass:"error"})],1),s("div",{staticClass:"body"},[s("div",{staticClass:"title"},[s("div",[t._v(t._s(t.strings.title))])]),s("div",{staticClass:"notification-content",domProps:{innerHTML:t._s(t.content)}}),s("div",{staticClass:"actions"},[s("base-button",{attrs:{size:"small",type:"green",tag:"a",href:t.$links.utmUrl("notification-unlicensed-addons"),target:"_blank"}},[t._v(" "+t._s(t.strings.upgrade)+" ")])],1)])])])},$t=[],yt=r(gt,vt,$t,!1,null,null,null,null);const bt=yt.exports;const Ct={components:{CoreNotification:at,NotificationsReview:ut,NotificationsReview2:ht,NotificationsUnlicensedAddons:bt},props:{dismissedCount:{type:Number,required:!0},notifications:{type:Array,required:!0}},data(){return{dannieDetectiveImg:st,strings:{greatScott:this.$t.__("Great Scott! Where'd they all go?",this.$td),noNewNotifications:this.$t.__("You have no new notifications.",this.$td),seeDismissed:this.$t.__("See Dismissed Notifications",this.$td)}}}};var kt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"aioseo-notification-cards"},[t.notifications.length?t._l(t.notifications,function(e){return s(e.component?e.component:"core-notification",{key:e.slug,ref:"notification",refInFor:!0,tag:"component",attrs:{notification:e},on:{"dismissed-notification":function(n){return t.$emit("dismissed-notification")}}})}):t._e(),t.notifications.length?t._e():s("div",{key:"no-notifications"},[t._t("no-notifications",function(){return[s("div",{staticClass:"no-notifications"},[s("img",{attrs:{alt:"Dannie the Detective",src:t.$getAssetUrl(t.dannieDetectiveImg)}}),s("div",{staticClass:"great-scott"},[t._v(" "+t._s(t.strings.greatScott)+" ")]),s("div",{staticClass:"no-new-notifications"},[t._v(" "+t._s(t.strings.noNewNotifications)+" ")]),t.dismissedCount?s("a",{staticClass:"dismiss",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),t.$emit("toggle-dismissed")}}},[t._v(" "+t._s(t.strings.seeDismissed)+" ")]):t._e()])]})],2)],2)},wt=[],Nt=r(Ct,kt,wt,!1,null,null,null,null);const St=Nt.exports;const Dt={components:{CoreNotificationCards:St,SvgClose:g},mixins:[k],data(){return{dismissed:!1,maxNotifications:Number.MAX_SAFE_INTEGER,currentPage:0,totalPages:1,strings:{dismissedNotifications:this.$t.__("Dismissed Notifications",this.$td),dismissAll:this.$t.__("Dismiss All",this.$td)}}},watch:{showNotifications(i){i?(this.currentPage=0,this.setMaxNotifications(),this.addBodyClass()):this.removeBodyClass()},dismissed(){this.setMaxNotifications()},notifications(){this.setMaxNotifications()}},computed:{...d(["showNotifications"]),filteredNotifications(){return[...this.notifications].splice(this.currentPage===0?0:this.currentPage*this.maxNotifications,this.maxNotifications)},pages(){const i=[];for(let t=0;t<this.totalPages;t++)i.push({number:t+1});return i}},methods:{...f(["dismissNotifications"]),...h(["toggleNotifications"]),escapeListener(i){i.key==="Escape"&&this.showNotifications&&this.toggleNotifications()},addBodyClass(){document.body.classList.add("aioseo-show-notifications")},removeBodyClass(){document.body.classList.remove("aioseo-show-notifications")},documentClick(i){if(!this.showNotifications)return;const t=i&&i.target?i.target:null,s=document.querySelector("#wp-admin-bar-aioseo-notifications");if(s&&(s===t||s.contains(t)))return;const e=document.querySelector("#toplevel_page_aioseo .wp-first-item"),n=document.querySelector("#toplevel_page_aioseo .wp-first-item .aioseo-menu-notification-indicator");if(e&&e.contains(n)&&(e===t||e.contains(t)))return;const o=this.$refs["aioseo-notifications"];o&&(o===t||o.contains(t))||this.toggleNotifications()},notificationsLinkClick(i){i.preventDefault(),this.toggleNotifications()},processDismissAllNotifications(){const i=[];this.notifications.forEach(t=>{i.push(t.slug)}),this.dismissNotifications(i).then(()=>{this.setMaxNotifications()})},setMaxNotifications(){const i=this.currentPage;this.currentPage=0,this.totalPages=1,this.maxNotifications=Number.MAX_SAFE_INTEGER,this.$nextTick(async()=>{const t=[],s=document.querySelectorAll(".notification-menu .aioseo-notification");s&&s.forEach(n=>{let o=n.offsetHeight;const a=window.getComputedStyle?getComputedStyle(n,null):n.currentStyle,$=parseInt(a.marginTop)||0,y=parseInt(a.marginBottom)||0;o+=$+y,t.push(o)});const e=document.querySelector(".notification-menu .aioseo-notification-cards");if(e){let n=0,o=0;for(let a=0;a<t.length&&(o+=t[a],!(o>e.offsetHeight));a++)n++;this.maxNotifications=n||1,this.totalPages=Math.ceil(t.length/n)}this.currentPage=i>this.totalPages-1?this.totalPages-1:i})}},mounted(){document.addEventListener("keydown",this.escapeListener),document.addEventListener("click",this.documentClick);const i=document.querySelector("#wp-admin-bar-aioseo-notifications .ab-item");i&&i.addEventListener("click",this.notificationsLinkClick);const t=document.querySelector("#toplevel_page_aioseo .wp-first-item"),s=document.querySelector("#toplevel_page_aioseo .wp-first-item .aioseo-menu-notification-indicator");t&&s&&t.addEventListener("click",this.notificationsLinkClick)}};var Pt=function(){var t=this,s=t._self._c;return s("div",{ref:"aioseo-notifications",staticClass:"aioseo-notifications"},[s("transition",{attrs:{name:"notifications-slide"}},[t.showNotifications?s("div",{staticClass:"notification-menu"},[s("div",{staticClass:"notification-header"},[s("span",{staticClass:"new-notifications"},[t._v("("+t._s(t.notificationsCount)+") "+t._s(t.notificationTitle))]),s("div",{staticClass:"dismissed-notifications"},[!t.dismissed&&t.dismissedNotificationsCount?s("a",{attrs:{href:"#"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.dismissed=!0}}},[t._v(t._s(t.strings.dismissedNotifications))]):t._e(),t.dismissed&&t.dismissedNotificationsCount?s("a",{attrs:{href:"#"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.dismissed=!1}}},[t._v(t._s(t.strings.activeNotifications))]):t._e()]),s("svg-close",{on:{click:t.toggleNotifications}})],1),s("core-notification-cards",{staticClass:"notification-cards",attrs:{notifications:t.filteredNotifications,dismissedCount:t.dismissedNotificationsCount},on:{"toggle-dismissed":function(e){t.dismissed=!t.dismissed}}}),s("div",{staticClass:"notification-footer"},[s("div",{staticClass:"pagination"},[t.totalPages>1?t._l(t.pages,function(e,n){return s("div",{key:n,staticClass:"page-number",class:{active:e.number===1+t.currentPage},on:{click:function(o){t.currentPage=e.number-1}}},[t._v(" "+t._s(e.number)+" ")])}):t._e()],2),t.dismissed?t._e():s("div",{staticClass:"dismiss-all"},[t.notifications.length?s("a",{staticClass:"dismiss",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.processDismissAllNotifications.apply(null,arguments)}}},[t._v(t._s(t.strings.dismissAll))]):t._e()])])],1):t._e()]),s("transition",{attrs:{name:"notifications-fade"}},[t.showNotifications?s("div",{staticClass:"overlay",on:{click:t.toggleNotifications}}):t._e()])],1)},Lt=[],At=r(Dt,Pt,Lt,!1,null,null,null,null);const xt=At.exports,Tt={components:{CoreHeader:S,CoreHelp:tt,CoreMainTabs:I,CoreNotifications:xt,GridContainer:D},mixins:[w],props:{pageName:{type:String,required:!0},showTabs:{type:Boolean,default(){return!0}},showSaveButton:{type:Boolean,default(){return!0}},excludeTabs:{type:Array,default(){return[]}},containerClasses:{type:Array,default(){return[]}}},data(){return{tabsKey:0,strings:{saveChanges:this.$t.__("Save Changes",this.$td)}}},watch:{excludeTabs(){this.tabsKey+=1}},computed:{...p(["settings"]),...d(["loading","options","showNotifications","helpPanel","notifications"]),tabs(){return this.$router.options.routes.filter(i=>i.name&&i.meta&&i.meta.name).filter(i=>this.$allowed(i.meta.access)).filter(i=>!i.meta.license||this.$license.hasMinimumLevel(i.meta.license)).filter(i=>!(i.meta.display==="lite"&&this.$isPro||i.meta.display==="pro"&&!this.$isPro)).filter(i=>!this.excludeTabs.includes(i.name)).map(i=>({slug:i.name,name:i.meta.name,url:{name:i.name},access:i.meta.access,pro:!!i.meta.pro}))},shouldShowSaveButton(){if(this.$route&&this.$route.name){const i=this.$router.options.routes.find(t=>t.name===this.$route.name);if(i&&i.meta&&i.meta.hideSaveButton)return!1}return this.showSaveButton}},methods:{...h(["toggleNotifications","disableForceShowNotifications"])},mounted(){b().notifications&&(this.showNotifications||this.toggleNotifications(),setTimeout(()=>{C("notifications")},500)),this.notifications.force&&this.notifications.active.length&&(this.disableForceShowNotifications(),this.toggleNotifications())}};var It=function(){var t=this,s=t._self._c;return s("div",[s("core-notifications"),s("div",{staticClass:"aioseo-main"},[s("core-header",{attrs:{"page-name":t.pageName}}),s("grid-container",{class:t.containerClasses},[t.showTabs?s("core-main-tabs",{key:t.tabsKey,attrs:{tabs:t.tabs,showSaveButton:t.shouldShowSaveButton},scopedSlots:t._u([{key:"extra",fn:function(){return[t._t("extra")]},proxy:!0}],null,!0)}):t._e(),s("transition",{attrs:{name:"route-fade",mode:"out-in"}},[t._t("default")],2),t.shouldShowSaveButton?s("div",{staticClass:"save-changes"},[s("base-button",{attrs:{type:"blue",size:"medium",loading:t.loading},on:{click:t.processSaveChanges}},[t._v(" "+t._s(t.strings.saveChanges)+" ")])],1):t._e()],1)],1),t.helpPanel.docs&&Object.keys(t.helpPanel.docs).length?s("core-help"):t._e()],1)},Bt=[],Mt=r(Tt,It,Bt,!1,null,null,null,null);const ss=Mt.exports;export{ss as C,St as a};