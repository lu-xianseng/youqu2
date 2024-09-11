import{_ as i,c as a,R as n,o as h}from"./chunks/framework.Aqiy0hvI.js";const p="/youqu/%E6%8C%87%E5%8D%97/%E5%85%83%E7%B4%A0%E5%AE%9A%E4%BD%8D/youqu-ocr.png",y=JSON.parse('{"title":"OCR识别","description":"","frontmatter":{},"headers":[],"relativePath":"指南/元素定位/OCR识别.md","filePath":"指南/元素定位/OCR识别.md","lastUpdated":1726024303000}'),l={name:"指南/元素定位/OCR识别.md"};function k(t,s,e,r,E,d){return h(),a("div",null,s[0]||(s[0]=[n(`<h1 id="ocr识别" tabindex="-1">OCR识别 <a class="header-anchor" href="#ocr识别" aria-label="Permalink to &quot;OCR识别&quot;">​</a></h1><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>传统的 OCR 方案大多采用谷歌 OCR（<code>Tesseract</code>）方案，但是它对于中文的识别非常差，经过大量的调研，我们使用 <code>PaddleOCR</code>，它是一个开源的基于深度学习的 OCR 识别工具，也是 <code>PaddlePaddle</code> 最有名的一个开源项目，感兴趣的可以点<a href="https://github.com/PaddlePaddle/PaddleOCR" target="_blank" rel="noreferrer">这里</a>了解，多的不说了，你只需要知道它就是中文识别的天花板。</p><h2 id="实现原理" tabindex="-1">实现原理 <a class="header-anchor" href="#实现原理" aria-label="Permalink to &quot;实现原理&quot;">​</a></h2><p>安装它是个很麻烦的事情，虽然操作很简单，但其实安装包有点大，这并不符合我们对框架依赖治理的理解，我们并不希望直接在 <code>env.sh</code> 中加入它，这会让整个自动化环境变得非常臃肿；</p><p>因此，我们想到将它做成一个 <code>RPC</code> 服务在其他机器上部署，测试机通过远程调用 <code>RPC</code> 服务的方式使用它；</p><p>RPC 的调用逻辑：</p><p><img src="https://pic.imgdb.cn/item/64f054c3661c6c8e54ff47b5.png" alt=""></p><p>这样我们只需要在服务端部署好 OCR 识别的服务，然后通过 RPC 服务将功能提供出来，框架里面只需要调用对应的 RPC 接口就行了。</p><h2 id="使用说明" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明" aria-label="Permalink to &quot;使用说明&quot;">​</a></h2><p>框架代码示意（Client）：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> OCR</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OCR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ocr(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">target_strings, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">picture_abspath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">similarity</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">return_default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">False</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">return_first</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">False</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">lang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 通过 OCR 进行识别。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># target_strings:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#     目标字符,识别一个字符串或多个字符串,并返回其在图片中的坐标;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#     如果不传参，返回图片中识别到的所有字符串。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># picture_abspath: 要识别的图片路径，如果不传默认截取全屏识别。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># similarity: 匹配度。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># return_default: 返回识别的原生数据。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># return_first: 只返回第一个,默认为 False,返回识别到的所有数据。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># lang: \`ch\`, \`en\`, \`fr\`, \`german\`, \`korean\`, \`japan\`</span></span></code></pre></div><p>服务端代码示意（Service）：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> socketserver </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ThreadingMixIn</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xmlrpc.server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SimpleXMLRPCServer</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> paddleocr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PaddleOCR</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ThreadXMLRPCServer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ThreadingMixIn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SimpleXMLRPCServer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    pass</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CURRENT_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dirname(abspath(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__file__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> image_put</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;&quot;&quot;上传图片&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> paddle_ocr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pic_path, lang):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     Paddleocr目前支持的多语言语种可以通过修改lang参数进行切换</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     例如\`ch\`, \`en\`, \`fr\`, \`german\`, \`korean\`, \`japan\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    :param file_name:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    :param lang:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    :return:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __name__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;__main__&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    IP</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> popen(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hostname -I&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).read().split(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    PORT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8890</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    SCREEN_CACHE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/tmp/screen.png&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ThreadXMLRPCServer((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">IP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PORT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">allow_none</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server.register_function(image_put, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image_put&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server.register_function(paddle_ocr, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;paddle_ocr&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;监听客户端请求。。&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server.serve_forever()</span></span></code></pre></div><p>此方案在<strong>框架内没有引入任何三方依赖</strong>完全采用标准库实现，而且使用方法非常简单，只需要通过 <code>OCR.ocr()</code> 即可；</p><p>对于一些文案的场景非常适用，此方法直接返回坐标，可以用于<strong>元素定位</strong>。</p><p>也可以用于<strong>文字断言</strong>，代码示意：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> assert_ocr_exist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args, picture_abspath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, similarity</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, return_first</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">False</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, lang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ch&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;断言文案存在&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        pic </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> picture_abspath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            pic </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> picture_abspath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;.png&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> OCR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ocr(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">            picture_abspath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pic,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">            similarity</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">similarity,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">            return_first</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">return_first,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">            lang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lang,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        )</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> False</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            raise</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AssertionError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;通过OCR未识别到：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pic </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pic </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GlobalConfig.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SCREEN_CACHE}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            )</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isinstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tuple</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            pass</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        elif</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isinstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">and</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> False</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.values():</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">lambda</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x: x[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> False</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, res.items())</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            raise</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AssertionError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                (</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;通过OCR未识别到：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pic </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pic </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GlobalConfig.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SCREEN_CACHE}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            )</span></span></code></pre></div><p>在用例中使用断言，示例：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test_font_manager_021</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;右侧♥-收藏/取消收藏字体&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 字体管理器界面右侧详情列表，选择未收藏字体，右键 / 收藏字体</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 收藏字体，右键菜单显示“取消收藏”；</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.assert_ocr_exist(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;取消收藏&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="rpc服务端部署" tabindex="-1">RPC服务端部署 <a class="header-anchor" href="#rpc服务端部署" aria-label="Permalink to &quot;RPC服务端部署&quot;">​</a></h2><p>服务端参考插件 <a href="https://linuxdeepin.github.io/pdocr-rpc/" target="_blank" rel="noreferrer">pdocr-rpc</a> 文档。</p><h2 id="负载均衡" tabindex="-1">负载均衡 <a class="header-anchor" href="#负载均衡" aria-label="Permalink to &quot;负载均衡&quot;">​</a></h2><p>随着 OCR 服务在自动化测试子项目中被广泛使用，单台服务远不能满足业务需求，因此我们需要将 OCR 服务做分布式集群化部署，然后通过负载均衡技术将业务请求分发到 OCR 服务器上。</p><h3 id="为什么基于-nginx-的负载均衡方案不能满足业务需求" tabindex="-1">为什么基于 Nginx 的负载均衡方案不能满足业务需求 <a class="header-anchor" href="#为什么基于-nginx-的负载均衡方案不能满足业务需求" aria-label="Permalink to &quot;为什么基于 Nginx 的负载均衡方案不能满足业务需求&quot;">​</a></h3><ol><li>每次 <code>OCR</code> 识别业务实际是两次 <code>RPC</code> 接口请求，第 1 次是将当前屏幕截图并发送到 <code>PRC</code> 服务器，第 2 次调用识别的接口做识别，采用 Nginx 轮询算法做负载均衡会出现两次 <code>RPC</code> 请求被分发到两台不同的服务器上，这明显是错误的。</li><li>基于 Nginx <code>ip_hash</code> 的 <code>session</code> 管理负载均衡算法时，Nginx 默认取 IP 的前 3 段做哈希，而我们的测试机都在同一个网段，IP 前 3 段是一样的，因此会导致负载不均衡。</li></ol><h3 id="youqu-的解决方案" tabindex="-1">YouQu 的解决方案 <a class="header-anchor" href="#youqu-的解决方案" aria-label="Permalink to &quot;YouQu 的解决方案&quot;">​</a></h3><p>为了解决上面 2 个问题，YouQu 在 <code>ocr_utils</code> 模块对 <a href="https://linuxdeepin.github.io/pdocr-rpc/" target="_blank" rel="noreferrer">pdocr-rpc</a> 功能进行了增强，实现了一个中间件用以在用例跑测过程中对 OCR 服务集群进行负载均衡。</p><p><img src="`+p+`" alt=""></p><h2 id="链式调用" tabindex="-1">链式调用 <a class="header-anchor" href="#链式调用" aria-label="Permalink to &quot;链式调用&quot;">​</a></h2><p>YouQu OCR 支持链式调用函数接口，使用更方便更符合语义，原函数接口使用方法不变以保持兼容性。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> OCR</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 新的函数接口ocrx，支持链式调用</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OCR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ocrx(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;确定&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).click()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OCR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ocrx(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;确定&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).center()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OCR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ocrx(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;确定&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).right_click()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OCR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ocrx(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;确定&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).double_click()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 原函数接口ocr，返回坐标</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OCR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ocr(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;确定&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,32)]))}const F=i(l,[["render",k]]);export{y as __pageData,F as default};
