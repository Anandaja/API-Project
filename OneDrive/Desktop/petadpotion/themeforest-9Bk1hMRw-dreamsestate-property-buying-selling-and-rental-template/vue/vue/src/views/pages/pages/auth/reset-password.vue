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
                <h1>Reset Password</h1>
                <form @submit.prevent="submitForm">
                  <div class="form-group">
                    <label class="form-label">Password <span>*</span></label>
                    <div class="pass-group">
                      <input
                        type="password"
                        class="form-control pass-input"
                        placeholder="Enter Password"
                      />
                      <span class="fas fa-eye toggle-password"></span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="form-label"
                      >Confirm Password <span>*</span></label
                    >
                    <div class="pass-group">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Enter Confirm Password"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="custom_check mt-0 mb-0"
                      ><span>Remember me</span>
                      <input type="checkbox" name="remeber" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <router-link to="/"
                    class="btn btn-outline-light w-100 btn-size"
                    >Reset</router-link
                  >
                  <div class="text-center dont-have">
                    Already have login ? <router-link to="/register">Sign In</router-link>
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