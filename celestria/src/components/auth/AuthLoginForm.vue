<template>
    <div class="container">
      <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">

        <form class="col s12" method="post" @submit.prevent="submitLogin">
          <div class='row'>
            <div class='col s12'>
            </div>
          </div>

          <div class='row'>
            <div class='input-field col s12'>
              <input v-model="username" class='validate' type='email' name='email' id='email' />
              <label for='email'>Enter your email</label>
            </div>
          </div>

          <div class='row'>
              <div class='input-field col s12'>
                  <input v-model="password" class='validate' type='password' name='password' id='password'/>
                  <label for='password'>Enter your password</label>
              </div>
              <label style='float: right;'>
                  <a class='pink-text' href='#!'><b>Forgot Password?</b></a>
              </label>
          </div>
          <br />
          <center>
            <div class='row'>
              <button type="submit" name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Login</button>
            </div>
          </center>
        </form>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'AuthLoginForm',
        data () {
            return {
                username: '',
                password: '',
            }
        },

        methods: {
            submitLogin(){

            }
        }
    }
</script>

<style scoped>
    .input-field input[type=date]:focus + label,
    .input-field input[type=text]:focus + label,
    .input-field input[type=email]:focus + label,
    .input-field input[type=password]:focus + label {
      color: #e91e63;
    }

    .input-field input[type=date]:focus,
    .input-field input[type=text]:focus,
    .input-field input[type=email]:focus,
    .input-field input[type=password]:focus {
      border-bottom: 2px solid #e91e63;
      box-shadow: none;
    }
</style>