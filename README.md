<p align="center">
  <img src="./images/logo.svg" width="300" height="300">
</p>
<p align="center">
  <a href="https://npmjs.com/package/vue-use-modal"><img src="https://img.shields.io/npm/v/vue-use-modal.svg" alt="npm package"></a>
</p>
<br />

## 🎨 vue-use-modal 

`vue-use-modal` is vue3(vue-next) plugin that provide easy use of modal. It is not only component based but also lets using modal either **asynchronous or synchronous** behavior.

> 🚨 Caution: `vue-use-modal` is not compatitable with vue2.

## 🛠 Installation

```shell
# using npm
npm install use-modal

# using yarn
yarn add use-modal
```

## 📝 Setting in Vue3 

### Step 1: Add div tag with id 'modal'>

```html
<!-- index.html -->
<div id="app"></div>
<!-- Add div with id 'modal' here ⭐️ -->
<div id="modal"></div> 
```

### Step 2: Install Plugin>

```javascript
import { ModalPlugin } from 'vue-use-modal';

createApp(App).use(ModalPlugin).mount('#app');
```

## 📝 Setting in Nuxt3

```javascript

```

## 🎩 Usage vue-use-modal

### 1> Define modal component:

```html
<template>
  <div class="modal-bg" />
  <div class="modal-content">
    <h1>Hello vue-use-modal</h1>
    <h2>{{ $props.options.name }}</h2>
    <button @click="$emit('resolve', 'eddie')">resolve</button>
    <button @click="$emit('reject', 'error')">reject</button>
    <button @click="$emit('close')">close</button>
  <div>
</template>
```

#### emit('resolve', value)

- Type:
``` typescript
type emit = ('resolve', value: any): void
```
- Description:  


#### emit('reject', value)
- Type:
``` typescript
type emit = ('reject', value: any): void
```
- Description:


#### emit('close')
- Type:
```typescript
type emit = ('close')
```
- Description:

### 2> useModal:

```html
<script setup>
import { useModal } from 'vue-use-modal';
import SimpleModal from 'components/SimpleModal.vue';

const modal = useModal();

const onClick = async () => {
  const name = await modal.addModal(
    { 
      key: 'SimpleModal', 
      component: SimpleModal,
      options: { name: 'eddie' }
    });
  alert(`My name is: ${name}`)
}
</script>
```

#### modal.addModal()

- Type:
```typescript
type addModal<T> = ({ key: string, component: import('vue').Component, options?: any }): Promise<T>
```

#### modal.closeModal()
- Type
```typescript
type closeModal = ({ key: string }): void
```



