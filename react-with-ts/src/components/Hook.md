###### side effect

- 无需清除的 Effect

  - 使用 DOM 完成标题更新

    ```javascript
        // class 组件做法  繁复
        componentDidMount() {
          document.title = `You clicked ${this.state.count} times`;
        }

        componentDidUpdate() {
          document.title = `You clicked ${this.state.count} times`;
        }
    ```

- 需要清除的副作用，比如 监听事件等，否则容易引起内存泄漏。

  - class 组件做法

    ```jsx
      componentDidMount() {
        document.addEventListener('click', this.updateMouse)
      }

      componentWillUnmount(){
        document.removeEventListener('click', this.updateMouse)
      }

    ```

###### Caveat about Hook

- 只在最顶层使用 Hook
- 只在 React 函数中调用 Hook

[useHooks - Easy to understand React Hook recipes](https://usehooks.com/)
