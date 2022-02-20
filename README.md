<p align="center">
  <img src="./images/logo.svg" width="300" height="300">
</p>
<p align="center">
  <a href="https://npmjs.com/package/vue-use-modal"><img src="https://img.shields.io/npm/v/vue-use-modal.svg" alt="npm package"></a>
</p>
<br />

## 🎨 vue-use-modal 

`vue-use-modal` is vue3(vue-next) custom hooks that handles modal easily and fast based on component only. It lets using modal either **asynchronous or synchronous behavior**.

> 🚨 `vue-use-modal` is not compatitable with vue2.

## 🛠 Installation

```shell
# using npm
npm install use-modal
# using yarn
yarn add use-modal
```

## 📝 Usage in Vue3 

### step 1: Add div tag with id 'modal'>

```html
<!-- index.html -->
<div id="app"></div>
<!-- Add div here ⭐️ -->
<div id="modal"></div> 
```

### step 2: Install Plugin>

```javascript
import { ModalPlugin } from 'vue-use-modal'

createApp(App).use(ModalPlugin).mount('#app');
```

## 📝 Usage in Nuxt3

```javascript

```
