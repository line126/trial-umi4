# umi

配置优先级会大于约定

## 路由

配置中含有 routes 即配置式路由，约定式路由也即失效

## 插件

### 插件的 key

每个插件都对应一个 id 和 key。

id 是插件所在路径的简写，作为插件的唯一标识；而 key 则是用于插件配置的键名。

如果插件是一个包的话，key 的默认值将是去除前缀的包名。比如 @umijs/plugin-foo 的 key 默认为 foo， @alipay/umi-plugin-bar 的 key 默认为 bar。值得注意的是，该默认规则要求你的包名符合 Umi 插件的命名规范。

如果插件不是一个包的话，key 的默认值将是插件的文件名。比如 ./plugins/foo.js 的 key 默认为 foo。
**注：文件名存在符号：中划线下划线(plugin-demo.ts p_demo.ts)，不会被识别和配置。**
`fatal - AssertionError [ERR_ASSERTION]: Invalid config keys: p_demo`
不带符号可以识别(demo)。`umi version: 4.0.21`

为了避免不必要的麻烦，我们建议你为自己编写的插件显示地声明其 key。
**注：使用 api.describe 声明。**

### Umi 的内置插件

### Npm 包方式引入插件

### 本地插件

### 本地 plugin.ts
