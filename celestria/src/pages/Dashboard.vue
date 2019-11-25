<template>
    <div id="dashboard">
        <!-- <div class="fixed-action-btn">
            <router-link to="/new-authorizing-body" class="btn-floating btn-large blue">
                <i class="fa fa-plus"></i>
            </router-link>
        </div> -->
        <div class="section"></div>
          <main>
            <center>
              <div class="section"></div>
              <h5 class="indigo-text">Please, login into your account</h5>
              <div class="section"></div>

              <AuthLoginForm/>
              <a href="#!">Create account</a>
            </center>

            <div class="section"></div>
            <div class="section"></div>
          </main>
    </div>
</template>

<script>
    import AuthLoginForm from 'source/components/auth/AuthLoginForm.vue';

    export default {
        name: 'Dashboard',

        components: {
            AuthLoginForm,
        },
    }
</script>

<style scoped>
    body {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
        }

    main {
      flex: 1 0 auto;
    }

    body {
      background: #fff;
    }
</style>