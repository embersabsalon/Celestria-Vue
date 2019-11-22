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

export default {
  name: 'App',
  components: {
    Navbar
  },

  mounted() {
    var firebaseConfig = {
      apiKey: "AIzaSyAsQSG4unXwbgA8rcc2uB2mITpiwmmaxUw",
      authDomain: "celestria-1c12a.firebaseapp.com",
      databaseURL: "https://celestria-1c12a.firebaseio.com",
      projectId: "celestria-1c12a",
      storageBucket: "celestria-1c12a.appspot.com",
      messagingSenderId: "277710801837",
      appId: "1:277710801837:web:7159e47794d0218379ef24",
      measurementId: "G-65SRXP55FR"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
</script>
