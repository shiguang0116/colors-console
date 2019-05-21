# colors-console

> 在命令行中输出带字体格式（颜色及其他）的语句

## API说明

```js
/**
 * @param {String|Array} styles 字体样式，可用参数见下面表格
 * @param {String} string 输出的内容
*/
colors(styles, string)
```

参数     | 颜色
-------- | -----
'bright'    | 亮色
'grey'      | 灰色
'italic'    | 斜体
'underline' | 下划线
'reverse'   | 反向
'hidden'    | 隐藏
'black'     | 黑色
'red'       | 红色
'green'     | 绿色
'yellow'    | 黄色
'blue'      | 蓝色
'magenta'   | 品红
'cyan'      | 青色
'white'     | 白色
'blackBG'   | 背景色为黑色
'redBG'     | 背景色为红色
'greenBG'   | 背景色为绿色
'yellowBG'  | 背景色为黄色
'blueBG'    | 背景色为蓝色
'magentaBG' | 背景色为品红
'cyanBG'    | 背景色为青色
'whiteBG'   | 背景色为白色

## 下载使用

```bash
npm i -D colors-console
```

```js
const colors = require('colors-console')

console.log('颜色是：' + colors('red', '红色'))
console.log(colors(['red','greenBG','underline'], '这是红色、绿色背景、下划线'))
```

## 如果不想使用插件可参考

> [【node使用】实现console输出不同颜色](https://blog.csdn.net/guang_s/article/details/90380581)

## github地址

> [https://github.com/shiguang0116/colors-console](https://github.com/shiguang0116/colors-console)
