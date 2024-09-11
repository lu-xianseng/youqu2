import{_ as i,c as a,R as n,o as h}from"./chunks/framework.Aqiy0hvI.js";const E=JSON.parse('{"title":"AT 应用库设计方案","description":"","frontmatter":{"Author":"mikigo"},"headers":[],"relativePath":"规划/框架设计/AT应用库设计方案.md","filePath":"规划/框架设计/AT应用库设计方案.md","lastUpdated":1726024303000}'),l={name:"规划/框架设计/AT应用库设计方案.md"};function p(t,s,k,e,d,r){return h(),a("div",null,s[0]||(s[0]=[n(`<h1 id="at-应用库设计方案" tabindex="-1">AT 应用库设计方案 <a class="header-anchor" href="#at-应用库设计方案" aria-label="Permalink to &quot;AT 应用库设计方案&quot;">​</a></h1><h2 id="一、目标" tabindex="-1">一、目标 <a class="header-anchor" href="#一、目标" aria-label="Permalink to &quot;一、目标&quot;">​</a></h2><p>AT 应用库改造是基于自动化测试基础框架进行用例方法和业务逻辑的重新设计，以实现应用库高效的编写、维护用例及其方法。</p><h2 id="二、方案设计" tabindex="-1">二、方案设计 <a class="header-anchor" href="#二、方案设计" aria-label="Permalink to &quot;二、方案设计&quot;">​</a></h2><p>文件管理器从业务复杂度和用例量来讲，在系统所有应用中，是很有代表性的，难度也是最大的，因此我们选取文件管理器作为应用库改造的实验应用，给后续其他应用改造提供切实可行的思路和方案。</p><h3 id="_1、分层设计图" tabindex="-1">1、分层设计图 <a class="header-anchor" href="#_1、分层设计图" aria-label="Permalink to &quot;1、分层设计图&quot;">​</a></h3><p>整体仍然遵循 PO 设计理念，根据业务需要，将文管业务层进行 3 层划分：</p><div class="tip custom-block"><p class="custom-block-title">应用库架构图（文件管理器）</p><p>​ <img src="https://pic.imgdb.cn/item/64f054c3661c6c8e54ff47db.png" alt=""></p></div><h3 id="_2、目录结构" tabindex="-1">2、目录结构 <a class="header-anchor" href="#_2、目录结构" aria-label="Permalink to &quot;2、目录结构&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">autotest_dde_file_manager</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 应用仓库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> case</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 用例</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> assert_res</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 断言的图片资源目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_xxx_001.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> widget</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 方法</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __init__.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> case_res</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 测试数据（用例需要用到的资源）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pic_res</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 图像识别元素定位要用的图片</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> base_widget.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 方法基类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> title_widget.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # title 模块方法类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> right_view_widget.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # right view 模块方法类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> left_view_widget.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # left view 模块方法类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pop_widget.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # pop 模块方法类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dfm_widget.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 方法的统一出口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ui.ini</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # UI 定位的坐标配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 用例标签目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.csv</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 用例标签文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config.ini</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 局部配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 局部配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conftest.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Pytest 本地插件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dfm_assert.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 断言方法模块</span></span></code></pre></div><h2 id="三、详细方案" tabindex="-1">三、详细方案 <a class="header-anchor" href="#三、详细方案" aria-label="Permalink to &quot;三、详细方案&quot;">​</a></h2><h3 id="_1、基类-base-widget-py" tabindex="-1">1、基类（base_widget.py） <a class="header-anchor" href="#_1、基类-base-widget-py" aria-label="Permalink to &quot;1、基类（base_widget.py）&quot;">​</a></h3><ul><li>继承核心层（src.Src）；<div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Src</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BaseWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;方法基类&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    APP_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;dde-file-manager&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    DESC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/usr/bin/dde-file-manager&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Src.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">APP_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">APP_NAME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">DESC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DESC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">number)</span></span></code></pre></div></li><li>抽取操作层的一些基础方法； <ul><li>元素定位操作的一些公共方法；</li><li>路径组装方法；</li></ul></li><li>一些<strong>业务层</strong>相关的变量、常量、shell命令、坐标；</li></ul><h3 id="_2、操作层" tabindex="-1">2、操作层 <a class="header-anchor" href="#_2、操作层" aria-label="Permalink to &quot;2、操作层&quot;">​</a></h3><ul><li><p>模块划分</p><p>按照文件管理器的界面区域划分为：TitleWidget 、RightViewWidget、LeftViewWidget 、PopWidget ；</p><p>文管界面分为四个区域：标题栏、右边视图区域、左边视图区域、弹窗（设置界面弹窗、保险箱弹窗、删除确认弹窗、及各种网络弹窗）；</p><div class="tip custom-block"><p class="custom-block-title">主界面区域划分</p><p>​ <img src="https://pic.imgdb.cn/item/64f054c3661c6c8e54ff4806.png" alt=""></p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><img src="https://pic.imgdb.cn/item/64f054c8661c6c8e54ff4d1b.png" alt=""></p></div></li><li><p>各个模块只继承基类</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> apps.autotest_dde_file_manager.widget </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BaseWidget</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TitleWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BaseWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;&quot;&quot;标题栏方法类&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> click_xxx_in_title_by_ui</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # self.dog.find_element_by_attr(&quot;xxxx&quot;).click()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.click(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ui.btn_center(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div></li><li><p>不同的定位方案调用不同的定位工具对象。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.dog</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ui</span></span></code></pre></div></li><li><p>方法编写</p><ul><li>动作开头，注意是动词</li></ul><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">click</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">double_click</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">right_click</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">get</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">make</span></span></code></pre></div><ul><li><p>元素对象名称</p><p>界面元素直接与元素名称相同，没有名称的就取一个好听易懂的名字。</p></li><li><p>加上类的关键词</p><p>避免方法重名，同时可以标记区域。</p></li><li><p>标定操作方法</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">by_ui</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">by_attr</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">by_mk</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">by_img</span></span></code></pre></div></li></ul></li></ul><h3 id="_3、应用层" tabindex="-1">3、应用层 <a class="header-anchor" href="#_3、应用层" aria-label="Permalink to &quot;3、应用层&quot;">​</a></h3><ul><li><p>继承操作层的所有类。</p></li><li><p>仅仅用于用例中导入方便，不做其他事情。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DfmWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TitleWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RightViewWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">LeftViewWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PopWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	pass</span></span></code></pre></div></li><li><p><code>DfmAssert</code> 直接在用例里面继承，方便使用断言语句。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> apps.dde_file_manager.widget.dfm_widget </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DfmWidget</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> public.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">assert</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Assert</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DfmAssert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> assert_file_exists_in_desktop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, file_name):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.assert_file_exists(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;~/Desktop</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">file_name</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        DfmWidget().get_file_in_desktop()</span></span></code></pre></div><ul><li><p>用例里面直接继承，方便在用例里面使用 self 进行断言，更符合断言的使用习惯，用例逻辑上更清楚。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> apps.autotest_dde_file_manager.dfm_assert </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DfmAssert</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BaseCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DfmAssert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	pass</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> apps.autotest_dde_file_manager.case </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BaseCase</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TestFileManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BaseCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test_xxx_001</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.assert_file_exists_in_desktop(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></li></ul></li></ul><h3 id="_4、逻辑举例" tabindex="-1">4、逻辑举例 <a class="header-anchor" href="#_4、逻辑举例" aria-label="Permalink to &quot;4、逻辑举例&quot;">​</a></h3><p>用例代码调用逻辑举例：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BaseWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;方法基类&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    APP_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;dde-file-manager&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    DESC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/usr/bin/dde-file-manager&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Src.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">APP_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">APP_NAME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">DESC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DESC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">number)</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> apps.autotest_dde_file_manager.widget </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BaseWidget</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TitleWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BaseWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, nubmer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        BaseWidget.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">nubmer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nubmer)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> click_xxx_title_by_ui</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.dog.app_name)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ui.print_number()</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> apps.autotest_dde_file_manager.widget </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BaseWidget</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RightViewWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BaseWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, nubmer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        BaseWidget.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">nubmer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nubmer)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> click_xxx_right_by_ui</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.dog.app_name)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ui.print_number()</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> apps.autotest_dde_file_manager.widget </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TitleWidget</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> apps.autotest_dde_file_manager.widget </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RightViewWidget</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DfmWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TitleWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RightViewWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    pass</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> apps.dde_file_manager.widget </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DfmWidget</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> apps.autotest_dde_file_manager.case </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BaseCase</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TestDdeFileManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BaseCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test_xxx_002</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        dfm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DfmWidget()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        dfm.click_xxx_title_by_ui()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        dfm.click_xxx_right_by_ui()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        dfm.dog.print_desc()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        dfm.ui.print_number()</span></span></code></pre></div><h2 id="四、工程改造实施步骤" tabindex="-1">四、工程改造实施步骤 <a class="header-anchor" href="#四、工程改造实施步骤" aria-label="Permalink to &quot;四、工程改造实施步骤&quot;">​</a></h2><h3 id="_1、基础框架代码拉取" tabindex="-1">1、基础框架代码拉取 <a class="header-anchor" href="#_1、基础框架代码拉取" aria-label="Permalink to &quot;1、基础框架代码拉取&quot;">​</a></h3><p>1.1. 将自动化基础框架的功能拉到本地（参考《快速开始》章节）</p><p>1.2. 将应用库代码拉到基础框架下 <code>apps</code> 目录下，应用库的仓库命名应该是长这样的 <code>autotest_deepin_xxx</code>。</p><h3 id="_2、调整工程目录" tabindex="-1">2、调整工程目录 <a class="header-anchor" href="#_2、调整工程目录" aria-label="Permalink to &quot;2、调整工程目录&quot;">​</a></h3><p>按照 <code>方案设计-目录结构</code> 进行目录调整，尽量使用编辑器进行相应的调整，编辑器推荐使用 <code>Pycharm</code> ，以下操作均在 <code>Pycharm</code> 里面可实现。</p><p>2.1. 需要移动 <code>py</code> 文件或目录，直接在编辑器里面，使用鼠标选中并按住，之后拖动到目标位置即可，<code>Pycharm</code> 会尽可能的自动解决移动导致的路径问题。注意，我说的是“尽可能”，有些骚操作编辑器是无法自动处理的。如果没有被编辑器自动处理的路径问题，后续只能手动解决。</p><p>2.2. 需要重命名文件或目录，在编辑器里面选中文件，然后使用快捷键 <code>Shift + F6</code> （如果快捷键没反应，文件右键菜单 <code>Refactor —— Rename</code>），然后在输入框中输入要重命名的名称，同时，确认勾选 <code>Search for references</code> 和 <code>Search in comments and strings</code> 这两个选项，最后按回车或者鼠标点 <code>Refactor</code> 。</p><p>注意，此时编辑器可能会提示你，你这个重命名的操作关联了多个模块，它被多个地方都使用到了，相关的模块是否也一起改名了，这不废话吗，用这个功能就是想把关联到的都修改，不然我为什么不用文管的重命名功能呢，别想了，直接点左下角的 <code>Refactor</code> 按钮，就是干。</p><p>类名、函数名的重命名都尽量采用这种方案，因为编辑器会自动给我们找到关联的地方，然后同步修改掉。你可千万别直接删了修改名称，不然你可能会花上一天的时间来解决重命名的问题。</p><h3 id="_3、实现核心库接口" tabindex="-1">3、实现核心库接口 <a class="header-anchor" href="#_3、实现核心库接口" aria-label="Permalink to &quot;3、实现核心库接口&quot;">​</a></h3><p>3.1. <code>BaseWidget</code></p><p>在 <code>BaseWidget</code> 里面把该写的都写好，你可以参考上面的设计理念来写。</p><p>如果你嫌麻烦，你可以参考文件管理器的实际工程代码 <a href="https://gerrit.uniontech.com/admin/repos/autotest_dde_file_manager" target="_blank" rel="noreferrer">autotest_dde_file_manager</a></p><p>3.2. 操作层</p><p>如果你是新写项目，你会发现一切都是那么的简单、直接，按照我们提供给你的接口写用例的操作方法就好了。</p><p>如果你是想对原来的工程进行改造，你需要按照核心库方法的调用，将你之前写的每个方案进行对应的修改，包括类和方法的命名、方法内所要用到不同定位方法的写法修改。</p><p>这时候你可能你的代码中可能会有一些报错，不用担心，你可以从业务逻辑出发，想清楚这个方法是干什么的、操作的对象是什么、参数是什么，注意这些修改是会影响到用例代码里面的，没关系，用例里面本来也应该被关联修改。</p><p>3.3. 把配置模块写好，这部分基本可以复制文管的代码。</p><h3 id="_4、路径处理" tabindex="-1">4、路径处理 <a class="header-anchor" href="#_4、路径处理" aria-label="Permalink to &quot;4、路径处理&quot;">​</a></h3><p>4.1. 导入路径</p><p>方法和用例中都会涉及到导入路径的修改，在修改路径时，建议你使用 <code>Ctrl + Shift + R</code> 全局替换，会将整个项目下的相同地方都修改到，当然，你也可以在小弹窗中修改全局替换为局部目录下替换。处理那种没有关联关系，但是又是相同名称的重命名，我也推荐使用这种方式进行重命名。</p><p>注意，全局替换的方式任然无法保证真的全局被替换了（可能是编辑器的 Bug 吧），所以你仍然需要手动看下各处是否修改到位。</p><p>4.2. 资源路径</p><p>一些用例资源需要根据 <code>config.py</code> 里面的路径配置进行资源路径的拼接，如果你原来本来就有一个函数专门用于组装路径的，那你只需要修改这一个地方就好了，如果你之前并没有这样的设计，那可能需要修改大量涉及到资源路径的地方。</p><h3 id="_5、调试和编写用例" tabindex="-1">5、调试和编写用例 <a class="header-anchor" href="#_5、调试和编写用例" aria-label="Permalink to &quot;5、调试和编写用例&quot;">​</a></h3><p>以上几个步骤做完，基本就可以进行用例代码的调试了，这部分工作主要解决你之前几个步骤遗漏的问题，如果所有用例都调试通过了，那么工程改造就全部完成了。</p>`,51)]))}const y=i(l,[["render",p]]);export{E as __pageData,y as default};
