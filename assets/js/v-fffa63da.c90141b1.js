"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[23707],{45400:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s={key:"v-fffa63da",path:"/guide/configuration/more-config-options.html",title:"More configuration options",lang:"en-US",frontmatter:{sidebarDepth:1},excerpt:"",headers:[{level:2,title:"Network map",slug:"network-map",children:[]},{level:2,title:"External converters",slug:"external-converters",children:[]}],filePathRelative:"guide/configuration/more-config-options.md",git:{updatedTime:1637853274e3}}},61741:(n,a,e)=>{e.r(a),e.d(a,{default:()=>U});var s=e(66252);const t=(0,s.uE)('<h1 id="more-configuration-options" tabindex="-1"><a class="header-anchor" href="#more-configuration-options" aria-hidden="true">#</a> More configuration options</h1><h2 id="network-map" tabindex="-1"><a class="header-anchor" href="#network-map" aria-hidden="true">#</a> Network map</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># Optional: networkmap options</span>\n<span class="token key atrule">map_options</span><span class="token punctuation">:</span>\n  <span class="token key atrule">graphviz</span><span class="token punctuation">:</span>\n    <span class="token comment"># Optional: Colors to be used in the graphviz network map (default: shown below)</span>\n    <span class="token key atrule">colors</span><span class="token punctuation">:</span>\n      <span class="token key atrule">fill</span><span class="token punctuation">:</span>\n        <span class="token key atrule">enddevice</span><span class="token punctuation">:</span> <span class="token string">&#39;#fff8ce&#39;</span>\n        <span class="token key atrule">coordinator</span><span class="token punctuation">:</span> <span class="token string">&#39;#e04e5d&#39;</span>\n        <span class="token key atrule">router</span><span class="token punctuation">:</span> <span class="token string">&#39;#4ea3e0&#39;</span>\n      <span class="token key atrule">font</span><span class="token punctuation">:</span>\n        <span class="token key atrule">coordinator</span><span class="token punctuation">:</span> <span class="token string">&#39;#ffffff&#39;</span>\n        <span class="token key atrule">router</span><span class="token punctuation">:</span> <span class="token string">&#39;#ffffff&#39;</span>\n        <span class="token key atrule">enddevice</span><span class="token punctuation">:</span> <span class="token string">&#39;#000000&#39;</span>\n      <span class="token key atrule">line</span><span class="token punctuation">:</span>\n        <span class="token key atrule">active</span><span class="token punctuation">:</span> <span class="token string">&#39;#009900&#39;</span>\n        <span class="token key atrule">inactive</span><span class="token punctuation">:</span> <span class="token string">&#39;#994444&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="external-converters" tabindex="-1"><a class="header-anchor" href="#external-converters" aria-hidden="true">#</a> External converters</h2>',4),o=(0,s.Uk)("You can define external converters to e.g. add support for a DiY device. The extension can be a file with "),r=(0,s._)("code",null,".js",-1),p=(0,s.Uk)(" extension in the "),l=(0,s._)("code",null,"data",-1),c=(0,s.Uk)(" directory or a NPM package. Ensure that default export from your external converter exports an array or device object (refer to the definition in the "),i=(0,s._)("code",null,"devices",-1),u=(0,s.Uk)(" folder of zigbee-herdsman-converters). Some examples can be found "),k={href:"https://github.com/Koenkk/zigbee2mqtt.io/tree/master/docs/externalConvertersExample",target:"_blank",rel:"noopener noreferrer"},d=(0,s.Uk)("here"),m=(0,s.Uk)(". For this example put the files in the "),b=(0,s._)("code",null,"data",-1),f=(0,s.Uk)(" folder and add the following to "),h=(0,s._)("code",null,"configuration.yaml",-1),g=(0,s.Uk)(":"),v=(0,s.uE)('<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">external_converters</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> freepad_ext.js\n  <span class="token punctuation">-</span> one<span class="token punctuation">-</span>more<span class="token punctuation">-</span>converter.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',1),y=(0,s.Uk)("See also "),x=(0,s.Uk)("How to support new devices"),w=(0,s.Uk)("."),_={},U=(0,e(83744).Z)(_,[["render",function(n,a){const e=(0,s.up)("OutboundLink"),_=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s._)("p",null,[o,r,p,l,c,i,u,(0,s._)("a",k,[d,(0,s.Wm)(e)]),m,b,f,h,g]),v,(0,s._)("p",null,[y,(0,s.Wm)(_,{to:"/advanced/support-new-devices/01_support_new_devices.html"},{default:(0,s.w5)((()=>[x])),_:1}),w])],64)}]])},83744:(n,a)=>{a.Z=(n,a)=>{for(const[e,s]of a)n[e]=s;return n}}}]);