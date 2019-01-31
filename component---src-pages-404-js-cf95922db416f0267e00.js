(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(146),o=a(159),c=a(4),s=a.n(c),l=a(160),u=a.n(l),d=a(144);function m(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,c=e.title;return r.a.createElement(d.StaticQuery,{query:f,render:function(e){var o=t||e.site.siteMetadata.description;return r.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})},data:o})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired};var p=m,f="1025518380";t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(p,{title:"404: Not found"}),r.a.createElement("h1",null,"Page not found"),r.a.createElement("p",null,"Sorry, please go back and try some again."),r.a.createElement("p",null,"To report an issue, go to"," ",r.a.createElement("a",{href:"https://github.com/dequelabs/axrl/issues"},"Github issues"),"."))}},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(143),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(145),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},146:function(e,t,a){"use strict";var n=a(147),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(144),l=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"#003349",marginBottom:"1.45rem"}},i.a.createElement("div",{className:"layoutSize",style:{padding:"1.45rem 1.0875rem"}},i.a.createElement(s.Link,{to:"/",style:{color:"white",fontSize:"1.3em",textDecoration:"none"}},t)),i.a.createElement("nav",{className:"mainNav",style:{background:"#0077c8"}},i.a.createElement("ul",{className:"layoutSize"},i.a.createElement("li",null,i.a.createElement(s.Link,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(s.Link,{to:"/examples"},"Examples")),i.a.createElement("li",null,i.a.createElement(s.Link,{to:"/docs/base"},"Schema")))))};l.propTypes={siteTitle:c.a.string},l.defaultProps={siteTitle:""};var u=l,d=(a(151),a(152),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});d.propTypes={children:c.a.node.isRequired};t.a=d},147:function(e){e.exports={data:{site:{siteMetadata:{title:"AXRL: Accessibility Report Language"}}}}},150:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(53),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},151:function(e,t,a){},152:function(e,t,a){},159:function(e){e.exports={data:{site:{siteMetadata:{title:"AXRL: Accessibility Report Language",description:"A data format for ICT accessibility testing",author:"Wilco Fiers"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-cf95922db416f0267e00.js.map