### 知识点

- css

  - rem

  - scss 基本概念

    - 有下划线 \_ 的 scss 文件，无法被编译为一个单独的 css 文件。

  - normalise.css
    - 一般化浏览器样式

- 模版字符串
  - `${}` 嵌入变量
  - 模板字符串之中还能调用函数
  - 模板字符串甚至还能嵌套
  ```javascript
  const tmpl = (addrs) => `
     <table>
     ${addrs
       .map(
         (addr) => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
   `
       )
       .join('')}
         </table>
        `;
  ```
  - `{[`btn-${btnType}`]: btnType}`
