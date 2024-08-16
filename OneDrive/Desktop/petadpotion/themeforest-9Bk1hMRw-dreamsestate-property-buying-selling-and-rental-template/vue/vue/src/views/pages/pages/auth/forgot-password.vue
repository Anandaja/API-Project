<template>
  <div class="main-wrapper login-body">
    <div class="container">
      <!-- Header -->
      <header class="log-header">
        <router-link to="/index"
          ><img
            class="img-fluid logo-dark"
            src="@/assets/img/logo.svg"
            alt="Logo"
        /></router-link>
      </header>
      <!-- /Header -->

      <div class="login-wrapper">
        <div class="loginbox">
          <div class="login-auth">
            <div class="login-auth-wrap">
              <div class="sign-group">
                <router-link to="/index" class="btn sign-up"
                  ><span
                    ><i
                      class="fe feather-corner-down-left"
                      aria-hidden="true"
                    ></i
                  ></span>
                  Back To Home</router-link
                >
              </div>
              <h1>Forgot Password</h1>
              <form @submit.prevent="submitForm">
                <div class="form-group">
                  <label class="form-label">Email <span>*</span></label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <router-link
                  to="/reset-password"
                  class="btn btn-outline-light w-100 btn-size"
                  >Sign Up</router-link
                >
                <div class="text-center dont-have">
                  Remember login ? <router-link to="/">Sign In</router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    submitForm() {
      this.$router.push("/index");
    },
  },
}
</script>