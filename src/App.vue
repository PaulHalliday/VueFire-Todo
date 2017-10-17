<template>
  <div id="app">
    <div>
      <label>Name:</label>
      <input type="text" v-model="name">
      <button @click="submitName()">Add</button>
    </div>
    <div>
      <ul>
        <li v-for="personName of names" v-bind:key="personName['.key']">
          <div v-if="personName.edit">
            <input type="text" v-model="personName.name">
            <button @click="saveEdit(personName)">Save</button>
            <button @click="cancelEdit(personName)">Cancel</button>
          </div>
          <div v-else>
            <p>{{personName.name}}</p>
            <button @click="removeName(personName)">Remove</button>
            <button @click="setEdit(personName)">Edit</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { namesRef } from './firebase';


export default {
  data() {
    return {
      name: '',
      names: [],
      edit: false,
    }
  },
  firebase: {
    names: {
      source: namesRef
    }
  },
  methods: {
    submitName() {
      namesRef.push({ name: this.name, edit: false });
      this.name = '';
    },
    removeName(name) {
      namesRef.child(name['.key']).remove();
    },
    setEdit(name) {
      namesRef.child(name['.key']).update({ edit: true });
    },
    saveEdit(person) {
      namesRef.child(person['.key']).update({ name: person.name, edit: false })
    },
    cancelEdit(person) {
      namesRef.child(person['.key']).update({
        edit: false
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  background-color: transparent;
  border: 2px solid black;
}
</style>
