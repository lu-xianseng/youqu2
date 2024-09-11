import{_ as i}from"./chunks/install.DYY69KT3.js";import{_ as a}from"./chunks/env.CqxpnoXB.js";import{_ as n,c as e,R as t,o as l}from"./chunks/framework.Aqiy0hvI.js";const u=JSON.parse('{"title":"Web UI 自动化测试","description":"","frontmatter":{},"headers":[],"relativePath":"实践/WebUI自动化测试/初始化项目.md","filePath":"实践/WebUI自动化测试/初始化项目.md","lastUpdated":1726024303000}'),p={name:"实践/WebUI自动化测试/初始化项目.md"};function h(k,s,d,r,o,c){return l(),e("div",null,s[0]||(s[0]=[t('<h1 id="web-ui-自动化测试" tabindex="-1">Web UI 自动化测试 <a class="header-anchor" href="#web-ui-自动化测试" aria-label="Permalink to &quot;Web UI 自动化测试&quot;">​</a></h1><p>Web UI 自动化测试是一种通用的自动化测试类型，只要是基于浏览器的项目都适用。</p><p>YouQu 基于 <code>Playwright</code> 构建了一整套通用的 Web UI 自动化测试方案。</p><p><code>YouQu</code> 框架提供灵活可配置的浏览器对象。</p><ul><li>提供一个全局默认的对象：<code>page</code>，默认使用系统自带的浏览器进行测试，如果需要指定其他第三方的浏览器，提供配置项可以指定浏览器对应的路径。</li><li>还需要提供一个对象：<code>native_page</code>，它使用 <code>Playwright</code> 最新的 <code>Chromium</code> 浏览器进行测试。</li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>安装 YouQu：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pip3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu</span></span></code></pre></div><h2 id="创建一个项目" tabindex="-1">创建一个项目 <a class="header-anchor" href="#创建一个项目" aria-label="Permalink to &quot;创建一个项目&quot;">​</a></h2><p>创建一个项目：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">youqu-startproject</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_project</span></span></code></pre></div><p><img src="'+i+`" alt=""></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">my_project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apps</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 用于放置APP工程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conftest.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Pytest 插件库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CURRENT</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 记录YouQu当前的版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env.sh</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       # 环境部署</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 执行管理器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pytest.ini</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # pytest.ini配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruff.toml</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ruff(Python最强代码扫描工具)配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> setting</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 全局配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 底层src</span></span></code></pre></div><h2 id="部署环境" tabindex="-1">部署环境 <a class="header-anchor" href="#部署环境" aria-label="Permalink to &quot;部署环境&quot;">​</a></h2><p>安装 YouQu 执行环境：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env.sh</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用的默认密码是 1；</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 您可以使用 -p 选项传入密码：bash env.sh -p \${my_password}；</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 也可以修改配置文件 setting/globalconfig.ini 里面的 PASSWORD 配置项；</span></span></code></pre></div><p><img src="`+a+'" alt=""></p>',17)]))}const C=n(p,[["render",h]]);export{u as __pageData,C as default};
