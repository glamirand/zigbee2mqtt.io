"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[40001],{80269:(e,a,n)=>{n.r(a),n.d(a,{data:()=>t});const t={key:"v-7078fc76",path:"/devices/3400-D.html",title:"Centralite 3400-D control via MQTT",lang:"en-US",frontmatter:{title:"Centralite 3400-D control via MQTT",description:"Integrate your Centralite 3400-D via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-09-01T19:56:51.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Arming/Disarming from the server",slug:"arming-disarming-from-the-server",children:[]},{level:3,title:"Arming/Disarming from the keypad",slug:"arming-disarming-from-the-keypad",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Occupancy (binary)",slug:"occupancy-binary",children:[]},{level:3,title:"Action_code (numeric)",slug:"action-code-numeric",children:[]},{level:3,title:"Action_transaction (numeric)",slug:"action-transaction-numeric",children:[]},{level:3,title:"Action_zone (text)",slug:"action-zone-text",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/3400-D.md",git:{updatedTime:1637853274e3}}},54670:(e,a,n)=>{n.r(a),n.d(a,{default:()=>r});var t=n(66252);const o=(0,t.uE)('<h1 id="centralite-3400-d" tabindex="-1"><a class="header-anchor" href="#centralite-3400-d" aria-hidden="true">#</a> Centralite 3400-D</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>3400-D</td></tr><tr><td>Vendor</td><td>Centralite</td></tr><tr><td>Description</td><td>3-Series security keypad</td></tr><tr><td>Exposes</td><td>battery, temperature, occupancy, action_code, action_transaction, action_zone, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/3400-D.jpg" alt="Centralite 3400-D"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="arming-disarming-from-the-server" tabindex="-1"><a class="header-anchor" href="#arming-disarming-from-the-server" aria-hidden="true">#</a> Arming/Disarming from the server</h3><p>To set arming mode publish the following payload to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> topic:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string">&quot;arm_mode&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arm_all_zones&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Valid <code>mode</code> values as per ZCL specifications are <code>disarm</code>, <code>arm_day_zones</code>, <code>arm_night_zones</code>, <code>arm_all_zones</code>, <code>exit_delay</code>, <code>entry_delay</code>, <code>not_ready</code>, <code>in_alarm</code>, <code>arming_stay</code>, <code>arming_night</code>, <code>arming_away</code>.</p><h3 id="arming-disarming-from-the-keypad" tabindex="-1"><a class="header-anchor" href="#arming-disarming-from-the-keypad" aria-hidden="true">#</a> Arming/Disarming from the keypad</h3><p>When an attempt to set arm mode is done on the keypad, Zigbee2MQTT will publish the following payload to topic <code>zigbee2mqtt/FRIENDLY_NAME</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arm_all_zones&quot;</span><span class="token punctuation">,</span> <span class="token comment">// This is the example</span>\n    <span class="token string">&quot;action_code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span> <span class="token comment">// The code being entered</span>\n    <span class="token string">&quot;action_zone&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// The zone being armed (always 0)</span>\n    <span class="token string">&quot;action_transaction&quot;</span><span class="token operator">:</span> <span class="token number">99</span> <span class="token comment">// The transaction number</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>The automation server must validate the request and send a notification to the keypad, confirming or denying the request.</p><p>Do so by sending the following payload to <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string">&quot;arm_mode&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">&quot;transaction&quot;</span><span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token comment">// Transaction number (this must be the same as the keypad request `action_transaction`)</span>\n        <span class="token string">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arm_all_zones&quot;</span> <span class="token comment">// Mode (this must be the same as the keypad request `action`)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Valid <code>mode</code> values are <code>disarm</code>, <code>arm_day_zones</code>, <code>arm_night_zones</code>, <code>arm_all_zones</code>, <code>invalid_code</code>, <code>not_ready</code>, <code>already_disarmed</code></p><p>The automation server must follow the notification with an actual change to the correct arm mode. For the example above, the server should respond with <code>exit_delay</code>, count the elapsed time (e.g 30 secs), then change mode again to <code>arm_all_zones</code> (see &quot;Arming/Disarming from the server&quot; section above)</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',16),s=(0,t.Uk)("How to use device type specific configuration"),i=(0,t.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>occupancy_timeout</code>: Time in seconds after which occupancy is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of <code>0</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="action-code-numeric" tabindex="-1"><a class="header-anchor" href="#action-code-numeric" aria-hidden="true">#</a> Action_code (numeric)</h3><p>Pin code introduced.. Value can be found in the published state on the <code>action_code</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-transaction-numeric" tabindex="-1"><a class="header-anchor" href="#action-transaction-numeric" aria-hidden="true">#</a> Action_transaction (numeric)</h3><p>Last action transaction number.. Value can be found in the published state on the <code>action_transaction</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-zone-text" tabindex="-1"><a class="header-anchor" href="#action-zone-text" aria-hidden="true">#</a> Action_zone (text)</h3><p>Alarm zone. Default value 0. Value can be found in the published state on the <code>action_zone</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>disarm</code>, <code>arm_day_zones</code>, <code>arm_night_zones</code>, <code>arm_all_zones</code>, <code>exit_delay</code>, <code>emergency</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),c={},r=(0,n(83744).Z)(c,[["render",function(e,a){const n=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[o,(0,t._)("p",null,[(0,t._)("em",null,[(0,t.Wm)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.w5)((()=>[s])),_:1})])]),i],64)}]])},83744:(e,a)=>{a.Z=(e,a)=>{for(const[n,t]of a)e[n]=t;return e}}}]);