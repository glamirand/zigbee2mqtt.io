"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[93216],{89458:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-51880309",path:"/devices/BW-SS7_2gang.html",title:"BlitzWolf BW-SS7_2gang control via MQTT",lang:"en-US",frontmatter:{title:"BlitzWolf BW-SS7_2gang control via MQTT",description:"Integrate your BlitzWolf BW-SS7_2gang via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-02-28T13:58:01.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (l1 endpoint)",slug:"switch-l1-endpoint",children:[]},{level:3,title:"Switch (l2 endpoint)",slug:"switch-l2-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/BW-SS7_2gang.md",git:{updatedTime:1637853274e3}}},97489:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});const o=(0,i(66252).uE)('<h1 id="blitzwolf-bw-ss7-2gang" tabindex="-1"><a class="header-anchor" href="#blitzwolf-bw-ss7-2gang" aria-hidden="true">#</a> BlitzWolf BW-SS7_2gang</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>BW-SS7_2gang</td></tr><tr><td>Vendor</td><td>BlitzWolf</td></tr><tr><td>Description</td><td>Zigbee 3.0 smart light switch module 2 gang</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/BW-SS7_2gang.jpg" alt="BlitzWolf BW-SS7_2gang"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pair this device with a long press (~5 seconds) of the button which is located under the small hole on the upper right edge on the front of the device. The device will beep in short periods. Once paired the device will do one long beep.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint" aria-hidden="true">#</a> Switch (l1 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l1&quot;: &quot;&quot;}</code>.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint" aria-hidden="true">#</a> Switch (l2 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l2&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),d={},a=(0,i(83744).Z)(d,[["render",function(e,t){return o}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);