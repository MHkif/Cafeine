import{t as i}from"./html.14f2a8b9.js";import{B as o}from"./Img.b3dc0554.js";import{C as n}from"./Caret.19b10233.js";import{S as r}from"./Profile.c44d4735.js";import{n as c}from"./_plugin-vue2_normalizer.61652a7c.js";const l={components:{BaseImg:o,CoreLoader:n,SvgDannieProfile:r},props:{description:{type:String,required:!0},image:String,loading:{type:Boolean,default:!1},title:{type:String,required:!0}},data(){return{images:{}}},computed:{appName(){return"All in One SEO"},date(){const s=new Date;return s.toLocaleString("default",{month:"long"})+" "+s.getDate()},isVerticalImage(){const s=this.images[this.image];return s?s.vertical:!1}},methods:{truncate:i}};var _=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-facebook-preview"},[e("div",{staticClass:"facebook-post"},[e("div",{staticClass:"facebook-header"},[e("div",{staticClass:"profile-photo"},[e("svg-dannie-profile")],1),e("div",{staticClass:"poster"},[e("div",{staticClass:"poster-name"},[t._v(" "+t._s(t.appName)+" ")]),e("div",{staticClass:"poster-date"},[t._v(" "+t._s(t.date)+" ")])]),t._m(0)]),e("div",{staticClass:"facebook-content",class:{vertical:t.isVerticalImage}},[e("base-img",{staticClass:"facebook-content__image",attrs:{debounce:!1,src:t.image},on:{images:a=>t.images=a}}),t.loading?e("div",{staticClass:"loader"},[e("core-loader")],1):t._e(),e("div",{staticClass:"facebook-site-description"},[e("div",{staticClass:"site-domain"},[t._t("site-url",function(){return[t._v(" "+t._s(t.$aioseo.urls.domain)+" ")]})],2),e("div",{staticClass:"site-title"},[t._v(" "+t._s(t.truncate(t.title,60))+" ")]),e("div",{staticClass:"site-description"},[t._v(" "+t._s(t.truncate(t.description,110))+" ")])])],1),e("div",{staticClass:"facebook-footer"})])])},u=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"ellipsis"},[t("div"),t("div"),t("div")])}],d=c(l,_,u,!1,null,"4fbce338",null,null);const C=d.exports;export{C};
