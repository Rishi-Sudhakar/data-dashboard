// src/App.js
import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import { defineCustomElement } from 'vue';
import MyVueComponent from './components/MyVueComponent.vue';

// Convert Vue component to a custom element
const VueElement = defineCustomElement(MyVueComponent);
customElements.define('my-vue-component', VueElement);

const App = () => {
  return (
    <div>
      <Dashboard />
      <my-vue-component></my-vue-component>
    </div>
  );
};

export default App;
