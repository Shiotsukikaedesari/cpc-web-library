## HTML(HyperText Markup Language)——超文本标记语言
说明：标记语言就如同字面意思，是作为一种标记也就是一对一的，不存在逻辑关系
<br><br>
## 标记语言的格式
``` html
<!-- 标记语言 -->
<标记名>
<!-- 封闭类型 -双标记 -->
 <标记名>内容</标记名>
<!-- 非封闭类型 -单标记 -->
<标记名/>
<标记名>
```
## 标记元素嵌套
``` html
<!-- 双标记嵌套 -->
<标记名1>
    <标记名2></标记名2>
    <标记名3>
        <标记名4></标记名4>
    </标记名3>
</标记名1/>
<!-- 双标记中嵌套单标记 -->
<标记名1>
    <标记名2/>
</标记名1>
```
## 标记的属性和值
``` html
<!-- 语法： -->
<标记名1 属性="值" 属性="值" … ></标记名1>
```
## 标记的标准属性
所有元素都有这些属性
``` html
<标记名1 id="xx" title="xx" class="xx" style="xx"></标记名1>
<!-- id 定义元素的唯一标识 PRIMARY KEY -->
<!-- title 定义鼠标移动到元素上时所提示的文字 -->
<!-- class 定义元素引用的类选择器（CSS中） -->
<!-- style 定义元素行内样式（CSS） -->
```
## 注释
注释的代码不会进行渲染
``` html
<!-- 单行注释 -->
<!-- 多行注释
多行注释 -->
```
## HTML文档的标准结构
``` html
<!DOCTYPLE html><!-- 文档类型的声明此为h5的声明方式 -->
<html>
    <head><!-- 表示网页头部 -->
        <title></title><!-- 定义网页的标题 在最上面的小分栏 标签页 -->
        <meta> <!-- 定义期数信息：编码格式，关键词，描述内容 -->
        <link><!-- 引入外部样式 -->
        ...
    </head>
    <style></style><!-- 定义内部样式 放哪里里都可以，一般放靠前-->
    <body><!-- 表示网页主题，显示内容都在body里面 -->
        ...
        <script></script><!-- 定义引用js 放哪里都可以但是放这里最优-->
    </body>
</html>
```
## HTML特殊文本标记
html中会存在部分字符与代码冲突所以要写成特殊字符（例：常用的）
* &amp;nbsp;  (空格)
* &amp;lt;  <
* &amp;gt;  >
* &amp;copy;  &copy;
* &amp;yen;  ￥

html特殊字符使用示例：&yen;&copy;
``` html
<span>html特殊字符使用示例：&yen;&copy;</span>
```
## HTML标记介绍与分类
### 文本标记
了解就好，这些标记后期可以用css统一实现
* <b>加粗</b>
* <i>斜体</i>
* <u>下划线</u>
* <s>删除线</s>
* a<sup>上标</sup>
* a<sub>下标记</sub>
``` html
<b>加粗</b>
<i>斜体</i>
<u>下划线</u>
<s>删除线</s>
a<sup>上标</sup>
a<sub>下标记</sub>
```
<br>

-----

### 标题标记
本框架的标题标记进行过css改造
* <h1>一级标题</h1>
* <h2>&nbsp;&nbsp;二级标题</h2>
* <h3>&nbsp;&nbsp;三级标题</h3>
* <h4>&nbsp;四级标题</h4>
* <h5>&nbsp;五级标题</h5>
* <h6>&nbsp;六级标题</h6>
``` html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

<br>

-----

### 段落标记

这是一串表示段落标记的文字
``` html
<p>这是一串表示段落标记的文字</p>
```

<br>

-----

### 换行标记
<br>
<hr>

``` html
<br> <!-- 换行 -->
<hr> <!-- 换行直线 -->
```

<br>

-----

### 保留格式标记
html中所有的连续空格缩进都会看成一个空格
<br><br>
一二三四五<br>
上山打老虎，<br>
 &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;老虎不在家
 &nbsp; &nbsp;&nbsp; &nbsp;。。。
	
``` html
<pre>
    一二三四五
    上山打老虎
            老虎不在家   。。。
</pre>	
```

<br>

-----

### 块级标记
会在网页中独占一行，也就是上下换行
<br><br>
<div>div</div>
<h1>&nbsp;&nbsp;&nbsp;&nbsp;h1</h1>
<p>p</p>

``` html
<div>div</div>
<h1>h1</h1>
<p>p</p>
```

<br>

-----

### 行内标记
会在同一行显示，上下不换行，没有宽高，css具体讲
<br><br>
<span>span</span>
<a>a</a>

``` html
<span>span</span>
<a>a</a>
```

<br>

-----

### 行内块标记
会在同一行显示，上下不换行，有宽高，css具体讲
<br><br>
<b>b</b>
a<sub>sub</sub>

``` html
<b>b</b>
a<sub>sub</sub>
```

<br>

-----

### 图片标记
<br><br>
![blockchain](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=702257389,1274025419&fm=27&gp=0.jpg "区块链")

``` html
<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=702257389,1274025419&fm=27&gp=0.jpg" title="区块链">
<!-- src：链接地址，可接受绝对地址与相对地址 -->
```

<br>

-----

### 超链接标记
<br><br>
[Vue](https://cn.vuejs.org/ "vue官网")

``` html
<a href="https://cn.vuejs.org/" title="vue官网"></a>
<!-- href：链接地址，可接受绝对地址与相对地址 -->
<!-- 注：本框架下的a标签样式做过优化 -->
<div id="maoDian">锚点</div>
<a herf="#maoDian">本页面</a> <!-- 本页面的点击锚点跳转，页面滚轮会滚动到当前锚点 -->
<a herf="url地址#锚点名称">其他页面</a> <!-- 跨页面的点击锚点跳转，页面进行自动跳转，滚轮会滚动到当前锚点 -->
```

<br>

-----

### 表格相关标记
<br><br>

<table> 
    <caption>表格标题</caption>
    <thead>
        <tr>
            <th>表头</th> 
            <th>表头</th>
            <th>表头</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
        </tr>
        <tr>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
        </tr>
        <tr>
            <td colspan="2">内容</td>
            <td>内容</td>
        </tr>
        <tr>
            <td rowspan="2">内容</td>
            <td>内容</td>
            <td>内容</td>
        </tr>
        <tr>
            <td>内容</td>
            <td>内容</td>
        </tr>
    </tbody>
    <tfoot></tfoot>
</table>

``` html
<table> <!-- 表格标记 -->
    <caption>表格标题</caption>
    <thead> <!-- 表头标记 -->
        <tr> <!-- tr规定表格的行 -->
            <th>表头</th> <!-- th 跟td一样规定那一行的一列，也就是一个单元格 -->
            <th>表头</th>
            <th>表头</th>
        </tr>
    </thead>
    <tbody> <!-- 表格的主体内容标记 -->
        <tr>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
        </tr>
        <tr>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
        </tr>
        <tr>
            <td colspan="2">内容</td> <!-- colspan单元格跨列，需要加上自身的1 -->
            <td>内容</td>
        </tr>
        <tr>
            <td rowspan="2">内容</td> <!-- colspan单元格跨行，需要加上自身的1 -->
            <td>内容</td>
            <td>内容</td>
        </tr>
        <tr>
            <td>内容</td>
            <td>内容</td>
        </tr>
    </tbody>
    <tfoot></tfoot> <!-- 表格的尾部内容标记 -->
</table>
<!-- 注：本框架表格样式做过处理 -->
```

<br>

-----

### 列表
<br><br>
* 1、有序列表1
* 2、有序列表2
* 3、有序列表3

* 无序列表1
* 无序列表2
* 无序列表3
``` html
<ol type="1">
    <li>有序列表1</li>
    <li>有序列表2</li>
    <li>有序列表3</li>
</ol>

<ul type="none">
    <li>无序列表1</li>
    <li>无序列表2</li>
    <li>无序列表3</li>
</ul>
<!-- type是标志的类型，具体可以在html宝典中查看 -->
```

<br>

-----

### 定义列表
常用于给出一类事物的定义或者对名词的介绍说明
<br><br>

<dl>
	<dt>定义的名词</dt>
	<dd>说明</dd>	
</dl>

``` html
<dl>
    <dt>定义的名词</dt>
    <dd>说明</dd>	
</dl>
<!-- 常用于图文混排 -->
```

<br>

-----

### 结构标记
专门设计整个网页的布局结构
<br><br>

<div>定义网页或者某一部分的头部</div>
<div>网页导航链接</div>
<div>网页主体内容</div>
<div>定义网页的侧边栏</div>
<div>页尾</div>
<div>定义文字描述相关的内容</div>

``` html 
<header>定义网页或者某一部分的头部</header>
<nav>网页导航链接</nav>
<section>网页主体内容</section>
<aside>定义网页的侧边栏</aside>
<footer>页尾</footer>
<article>定义文字描述相关的内容</article>
<!-- 只是为了更语义化的表现html结构，与div别无二致 -->
```

<br>

-----

### 表单元素
实现与客户端进行数据交互
<br><br>

<form>
    文本输入框 <input type="text" style="border: 1px solid black">
    <br>
    多选框 <input type="checkbox"><input type="checkbox">
    <br>
    复合文本框 <textarea></textarea>
    <br>
    ...
</form>

``` html
 <!-- form标记可以收集里面的表单信息统一进行操作，具体属性参考宝典 -->
<form action="do.js" method="get">
    文本输入框 <input type="text" style="border: 1px solid black">
    <!-- input还有许多属性，具体参考宝典 -->
    <br>
    多选框 <input type="checkbox"><input type="checkbox"> 
    <br>
    复合文本框 <textarea></textarea>
    <br>
    ...
    <!-- 还有许多的表单标记，具体参考宝典 -->
</form>
```