## Vue3.0-基础

本文档只记录与Vue2.x区别，与Vue3.0新特性

### 官方文档地址
[https://vue-composition-api-rfc.netlify.app/zh/api.html#setup](https://vue-composition-api-rfc.netlify.app/zh/api.html#setup)

### setup

是一个新的组件选项。作为在组件内使用 Composition API 的入口点。

#### 调用时机

它会在 beforeCreate 钩子之前被调用

#### 入参
* props 组件的props对象
* context定义setup所处的上下文，也就是Vue2.x中需要用this访问的对象

``` js
export default {
  props: {
    demo1: String
  },
  data: () {
    demo2: 1
  },
  setup(props, context) {
    console.log(props.demo1)
    console.log(context.attrs)
    console.log(context.ref)
    console.log(context.slots)
  }
}
```

### ref

* 根据给定的值创建响应式数据对象，函数调用返回值是一个对象，仅包含一个`.value`属性。
* 在setup之外无需用`.value`形式访问值，可直接访问。

``` html
<template>
  <div>{{count}}</div>
</template>

<script>
export default {
  setup(props, context) {
    const count = ref(0)
    console.log(count.value) // 0
    return {
      count
    }
  }
}
</script>
```

### template refs
* template中的ref已经与ref统一了。

#### dom
``` js
<template>
  <div ref="root"></div>
</template>

<script>
  export default {
    setup() {
      const root = ref(null)

      onMounted(() => {
        // 在渲染完成后, 这个 div DOM 会被赋值给 root ref 对象
        console.log(root.value) // <div/>
      })

      return {
        root,
      }
    },
  }
</script>
```

#### 组件
``` js
<template>
  <demo ref="root"></demo>
</template>

<script>
  export default {
    setup() {
      const root = ref(null)

      onMounted(() => {
        // 在渲染完成后, 这个 vueComponent对象会被赋值给 root ref 对象
        console.log(root.value.count) // vueComponent.count
      })

      return {
        root,
      }
    },
  }
</script>
```

#### isRef

判断变量是否由`ref`创建。

``` js
let demo1 = 1
let demo2 = ref(2)
console.log(isRef(demo1)) // false
console.log(isRef(demo2)) // true
```

#### toRef

可以用来为一个 reactive 对象的属性创建一个 ref。这个 ref 可以被传递并且能够保持响应性。也可将 prop 中的属性作为 ref 。

``` js
const state = reactive({
  foo: 1,
  bar: 2,
})

const fooRef = toRef(state, 'foo')

fooRef.value += 1
console.log(state.foo) // 2

state.foo += 1
console.log(fooRef.value) // 3
```

``` js
export default {
  setup(props) {
    count demo = toRef(props, 'foo')
  },
}
```

#### toRefs

把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref ，和响应式对象 property 一一对应。

``` js
const state = reactive({
  count: 0,
  count2: 1
})

const refsState = toRefs(state)
// refsState = {
//   count: ref(0),
//   count2: ref(1)
// }

console.log(state.count += 1) //  1
console.log(refsState.count.value += 1) // 2
```

### reactive

接受普通对象，返回响应式对象。

* 不支持解构，解构后不是响应式数据。

``` js
const state = reactive({
  count: 0,
  count2: 1
})
```

#### 在reactive中访问ref

``` js
const count = ref(0)
const state = reactive({ count })
console.log(state.count) // 0
```

### computed

vue2.x的计算属性, 返回值也是一个`ref`。

#### 一般使用

``` js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2
```

#### getter和setter

``` js
const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value = val - 1
  },
})

plusOne.value = 1
console.log(count.value) // 0
```

### watchEffect
立即执行传入的函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数与vue2.x的watch类似。

``` js
const count = ref(0)

watchEffect(() => console.log(count.value))
// -> 打印出 0

setTimeout(() => {
  count.value++
  // -> 打印出 1
}, 100)
```

### watch
watch完全等效于 2.x `this.$watch`。

#### 监听reactive
``` js
const state = reactive({ count: 0 })
watch(
  () => state.count,
  (count, prevCount) => {
    /* ... */
  }
)
```

#### 监听ref
``` js
const count = ref(0)
watch(count, (count, prevCount) => {
  /* ... */
})
```

#### immediate与deep
``` js
const count = ref(0)
watch(
  count,
  (count, prevCount) => {
    /* ... */
  },
  {
    immediate: false,
    deep: null
  }
)
```

#### 监听多个数据源
``` js
watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
  /* ... */
})
```

### 监听器执行副作用时间
默认情况下，将在组件更新后执行副作用。（flush: 'post'）
``` js
// 同步运行
watchEffect(
  () => {
    /* ... */
  },
  {
    flush: 'sync',
  }
)

// 组件更新前执行
watch(
  (demo, (newVal, oldVal, clear)) => {
    /* ... */
  },
  {
    flush: 'pre',
    
  }
)
```


### 停止监听

将监听器赋值给一个变量会返回一个停止监听方法。

#### watchEffect

``` js 
const count = ref(0)
let stop = watchEffect(() => console.log(count.value))
// -> 打印出 0
stop()
```

#### watch

```  js
const count = ref(0)
let stop = watch(count, (newVal, oldVal) => console.log(count.value))
// -> 打印出 0
stop()
```

### 监听器内部异步处理

#### watchEffect
``` js 
const count = ref(0)
watchEffect((onInvalidate) => {
  let timer = setTimeout(() => {
    console.log(count.value)
  }, 1000)

  onInvalidate(() => {
      clearTimeout(timer)
    })
  })
```

#### watch
``` js
const count = ref(0)
watch(count, (newVal, oldVal, onInvalidate) => {
    let timer = setTimeout(() => {
    console.log(count.value)
  }, 1000)

  onInvalidate(() => {
      clearTimeout(timer)
    })
  })
})
```

### 监听器开着阶段调试
* onTrack：reactive 对象属性或一个 ref 作为依赖被追踪时
* onTrigger：依赖项变更导致副作用被触发时
* 在此阶段debugger

``` js
watchEffect(
  () => {
    /* 副作用的内容 */
  },
  {
    onTrigger(e) {
      debugger
    },
  }
)
const count = ref(0)
watch(
  count,
  (newVal, oldVal) => {

  },
  {
    onTrigger(e) {
      debugger
    },
    onTrack(e) {
      debugger
    }
)
```

### 生命周期
vue3.0的生命周期函数统一放在`setup`里面。

``` js
export default {
  setup(props, context) {
    onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
  }
}
```

* beforeCreate -> 使用 setup()
* created -> 使用 setup()
* beforeMount -> onBeforeMount
* mounted -> onMounted
* beforeUpdate -> onBeforeUpdate
* updated -> onUpdated
* beforeDestroy -> onBeforeUnmount
* destroyed -> onUnmounted
* errorCaptured -> onErrorCaptured

#### 新增调试钩子

可在次钩子内`debugger`调试同监听器的onTrack和onTrigger类似。

* onRenderTracked(DebuggerEvent)
* onRenderTriggered(DebuggerEvent)

### 依赖注入provide和inject
* 功能类似Vue2.x 的 provide/inject
* 只能在当前活动组件实例的 setup() 中调用
* 可共享普通数据，也可共享ref类响应式数据

``` js
const Ancestor = {
  setup() {
    provide('themeColor', 'dark')
  },
}

const Descendent = {
  setup() {
    const theme = inject('themeColor', 'light') // light为默认值，当provide中未提供值时使用
    return {
      theme
    }
  },
}
```