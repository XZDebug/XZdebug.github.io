import{_ as n,c as r,a as t,b as o,d as l,f as a,r as i,o as p}from"./app-PGSl0Exg.js";const d={};function c(u,e){const s=i("RouteLink");return p(),r("div",null,[e[2]||(e[2]=t("h1",{id:"仓库页面",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#仓库页面"},[t("span",null,"仓库页面")])],-1)),t("p",null,[o(s,{to:"/"},{default:l(()=>e[0]||(e[0]=[t("img",{src:"https://img.shields.io/github/repo-size/XueK66/PF-cq_qq_api?style=flat-square&label=仓库占用",alt:"仓库大小"},null,-1)])),_:1}),e[1]||(e[1]=a('<a href="https://github.com/XueK66/PF-cq_qq_api/releases/latest/download/YourRepoName.mcdr" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/v/release/XueK66/PF-cq_qq_api?style=flat-square&amp;label=最新版" alt="最新版"></a><a href="https://github.com/XueK66/PF-cq_qq_api/issues" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/issues/XueK66/PF-cq_qq_api?style=flat-square&amp;label=Issues" alt="Issues"></a><a href="https://github.com/XueK66/PF-cq_qq_api/issues?q=is%3Aissue+is%3Aclosed" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/issues-closed/XueK66/PF-cq_qq_api?style=flat-square&amp;label=已关闭 Issues" alt="已关闭issues"></a><a href="https://github.com/XueK66/PF-cq_qq_api/releases" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/downloads/XueK66/PF-cq_qq_api/total?style=flat-square&amp;label=下载量" alt="下载量"></a><a href="https://github.com/XueK66/PF-cq_qq_api/releases/latest" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/downloads/XueK66/PF-cq_qq_api/latest/total?style=flat-square&amp;label=最新版本下载量" alt="最新发布下载量"></a>',5))]),e[3]||(e[3]=a(`<blockquote><p>PFingan服务器MCDRQQ机器人插件</p><p>基于CQ码的<strong>正向Websocket</strong>QQ连接机器人</p><p>提供MCDR机器人插件接口，方便聊天类机器人的构建</p></blockquote><p>技术支持：XueK__ <a href="https://github.com/XueK66" target="_blank" rel="noopener noreferrer">前往主页</a></p><p>使用方式：</p><ul><li>将Release里面的cq_qq_api.mcdr放入<code>/plugins</code></li><li>加载后，在<code>/config/cq_qq_api/config.yml</code>中配置机器人</li><li>与机器人连接请参考文档：<a href="https://docs.qq.com/aio/p/sct29j7ammzw142?p=MgrkYFk9OPpK8wZEY8IeBU" target="_blank" rel="noopener noreferrer">PF系列插件官方文档 - CQ-QQ-API - 机器人食用指南</a></li></ul><h2 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖"><span>依赖</span></a></h2><h4 id="python" tabindex="-1"><a class="header-anchor" href="#python"><span>Python</span></a></h4><ul><li><a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">Python™</a></li></ul><h4 id="python模块" tabindex="-1"><a class="header-anchor" href="#python模块"><span>Python模块</span></a></h4><ul><li>已存储在插件对应的文件夹内的 <a href="requirements.txt">requirements.txt</a> 中, 可以使用 <code>pip install -r requirements.txt</code> 安装</li></ul><p>基本功能：聊天互相转发</p><h2 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式"><span>使用方式</span></a></h2><h4 id="调用机器人" tabindex="-1"><a class="header-anchor" href="#调用机器人"><span>调用机器人</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">bot = server.get_plugin_instance(&quot;cq_qq_api&quot;).get_bot()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="调用例子-发送群聊消息" tabindex="-1"><a class="header-anchor" href="#调用例子-发送群聊消息"><span>调用例子 - 发送群聊消息</span></a></h4><p>更多接口详情可查看<code>bot.py</code>或查看<a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md" target="_blank" rel="noopener noreferrer">Onebot_11_API_标准</a></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">bot = server.get_plugin_instance(&quot;cq_qq_api&quot;).get_bot()</span>
<span class="line">bot.send_group_msg(group_id, message)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><h4 id="服务端配置-server" tabindex="-1"><a class="header-anchor" href="#服务端配置-server"><span>服务端配置 - Server</span></a></h4><ul><li>config.json</li></ul><blockquote><table><thead><tr><th>配置项</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>host</td><td><code>127.0.0.1</code></td><td>接收数据上报的地址</td></tr><tr><td>port</td><td><code>8080</code></td><td>对应数据上报的端口</td></tr><tr><td>post_path</td><td>&quot;&quot;</td><td>对应数据上报的终点名</td></tr><tr><td>token</td><td>&quot;&quot;</td><td>对应数据上报的token，用于加密信息</td></tr><tr><td>language</td><td>&quot;zh&quot;</td><td>语言包[zh/en]</td></tr><tr><td>max_wait_time</td><td>10</td><td>最长等待QQAPI的时间（秒）</td></tr></tbody></table></blockquote><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;post_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;max_wait_time&quot;</span><span class="token operator">:</span> <span class="token number">10</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="qq机器人配置" tabindex="-1"><a class="header-anchor" href="#qq机器人配置"><span>QQ机器人配置</span></a></h4><p><strong>以下为必要配置！</strong></p><blockquote><table><thead><tr><th>配置项</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>正向websocket服务端口</td><td><code>8080</code></td><td>接收数据上报的端口</td></tr><tr><td>消息上报格式</td><td>CQ码</td><td>机器人基于CQ码进行解析</td></tr></tbody></table></blockquote><h1 id="有bug或是新的idea" tabindex="-1"><a class="header-anchor" href="#有bug或是新的idea"><span>有BUG或是新的IDEA</span></a></h1><p>如果需要更多联动或提交想法和问题请提交 <a href="https://github.com/LoosePrince/PF-GUGUBot/issues" target="_blank" rel="noopener noreferrer">issues</a> 或 QQ <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1377820366&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">1377820366</a> 提交！ <br> 视情况添加，请勿联系他人（开发者：<a href="https://github.com/XueK66" target="_blank" rel="noopener noreferrer">雪开</a>）</p><h1 id="致谢" tabindex="-1"><a class="header-anchor" href="#致谢"><span>致谢</span></a></h1><ul><li>消息格式参考 from <a href="https://docs.go-cqhttp.org/" target="_blank" rel="noopener noreferrer">go-cqhttp</a></li><li>接口参考 from <a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md" target="_blank" rel="noopener noreferrer">Onebot_11_API</a></li><li>消息解析参考 from <a href="https://github.com/AnzhiZhang/MCDReforgedPlugins/tree/6049c6a6808383b2d5fb219598a79b975905fa84/qq_api" target="_blank" rel="noopener noreferrer">qq_api</a> 作者 <a href="https://github.com/AnzhiZhang" target="_blank" rel="noopener noreferrer">AnzhiZhang</a></li></ul>`,28))])}const b=n(d,[["render",c],["__file","config.html.vue"]]),g=JSON.parse('{"path":"/PF-cq-api/guide/config.html","title":"仓库页面","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"依赖","slug":"依赖","link":"#依赖","children":[]},{"level":2,"title":"使用方式","slug":"使用方式","link":"#使用方式","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]}],"git":{"updatedTime":1737808535000,"contributors":[{"name":"Dreamwxz","username":"Dreamwxz","email":"82244600+Dreamwxz@users.noreply.github.com","commits":2,"url":"https://github.com/Dreamwxz"}]},"filePathRelative":"PF-cq-api/guide/config.md"}');export{b as comp,g as data};
