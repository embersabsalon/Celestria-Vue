<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from 'source/components/Navbar';
import firebase from 'firebase';
import firebaseConfig from 'source/firebaseConfig'

export default {
  name: 'App',
  components: {
    Navbar
  },

  mounted() {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
</script>
