## 标题
---
# 一级标题
`# 一级标题`
## 二级标题
`## 二级标题`
### 三级标题
`### 三级标题`
#### 四级标题
`#### 四级标题`
##### 五级标题
`##### 五级标题`
###### 六级标题
`###### 六级标题`
<br><br><br><br>
## 字体
---
**这是加粗的文字**
<br><br>
`**这是加粗的文字**`
<br><br><br><br>
*这是倾斜的文字*
<br><br>
`*这是倾斜的文字*`
<br><br><br><br>
***这是斜体加粗的文字***
<br><br>
`***这是斜体加粗的文字***`
<br><br><br><br>
~~这是加删除线的文字~~
<br><br>
`~~这是加删除线的文字~~`
<br><br><br><br>

## 列表
---
### 无序列表
* 列表一
* 列表二
* 列表三

```
* 列表一
* 列表二
* 列表三
```

### 有序列表
1. 列表一
2. 列表二
3. 列表三

```
1. 列表一
2. 列表二
3. 列表三
```

### 列表叠加
* 列表一
  * 列表二
  * 列表二
* 列表一
  * 列表二
  * 列表二

```
* 列表一
  * 列表二
  * 列表二
* 列表一
  * 列表二
  * 列表二
```

<br><br><br><br>
## 分块
---
> 引用一

> 引用一

> 引用一

```
> 引用一

> 引用一

> 引用一
```

### 多层分块
> 引用一

> 引用一
>> 引用二
>>> 引用三

```
> 引用一

> 引用一
>> 引用二
>>> 引用三
```
<br><br><br><br>
## 分割线
---
----
***
*****

```
---
----
***
*****
```
<br><br><br><br>
## 图片
---
![blockchain](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=702257389,1274025419&fm=27&gp=0.jpg "区块链")
<br><br>
`
![图片alt](图片地址 ''图片title'')
`
<br><br><br><br>
## 超链接
---
[Vue](https://cn.vuejs.org/ "vue官网")
<br><br>
`[超链接名](超链接地址 "超链接title")`
<br><br><br><br>
## 表格
---
表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容

```
表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容
```
<br><br><br><br>
## 代码
---
### 单行代码
`console.log(windows)`
```
`console.log(windows)`
```
### 多行代码
#### js 效果
``` js
export default {
  name: 'guide',
  data: function data () {
    return {
    }
  },
  methods: {
    toIntro () {
      this.$router.push({path: '/guide/intro'})
    }
  }
}
```

``` 
(``` js
export default {
  name: 'guide',
  data: function data () {
    return {
    }
  },
  methods: {
    toIntro () {
      this.$router.push({path: '/guide/intro'})
    }
  }
}
```)
```
#### html 效果
``` html
<div class="cpc-nav-side">
    <cpc-nav-side width="300px" height="100%" background="">
        <cpc-nav-side-menu menuKey="1" slot="menu" :open="true">
            <cpc-nav-side-elem elemKey="1-0" slot="father" :father="true" :isSignal="true" :arrowInit="true">
            <cpc-icon slot="side-ui" code="#icon-arrow-right-drop-circle"></cpc-icon>开始
            </cpc-nav-side-elem>
        </cpc-nav-side-menu>
    </cpc-nav-side>
</div>
```

``` 
(``` html
<div class="cpc-nav-side">
    <cpc-nav-side width="300px" height="100%" background="">
        <cpc-nav-side-menu menuKey="1" slot="menu" :open="true">
            <cpc-nav-side-elem elemKey="1-0" slot="father" :father="true" :isSignal="true" :arrowInit="true">
            <cpc-icon slot="side-ui" code="#icon-arrow-right-drop-circle"></cpc-icon>开始
            </cpc-nav-side-elem>
        </cpc-nav-side-menu>
    </cpc-nav-side>
</div>
```)
```
#### css 效果
``` css
.components {
        height: 100%;
        width: 100%;
      }
> .display-main {
      width: calc(100% - 300px);
      height:100%;
      background: white;
      padding: 20px 10%;
      overflow: auto;
    }
```

``` 
(``` css
.components {
        height: 100%;
        width: 100%;
      }
> .display-main {
      width: calc(100% - 300px);
      height:100%;
      background: white;
      padding: 20px 10%;
      overflow: auto;
    }
```)
```

<br><br><br><br>



