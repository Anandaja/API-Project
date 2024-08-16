<template>
  <div class="error-page login-body p-0">
    <div class="main-wrapper">
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

        <div class="error-box come-box">
          <h1>Coming Soon</h1>
          <p>
            We'll be here soon with our new awesome site, subscribe to be
            notified.
          </p>
          <h6>We'll Be Back Shortly</h6>
          <div class="footer-social-links">
            <ul class="nav">
              <li>
                <a href="javascript:void(0);"><i class="fa-brands fa-instagram hi-icon"></i></a>
              </li>
              <li>
                <a href="javascript:void(0);"><i class="fa-brands fa-twitter hi-icon"></i> </a>
              </li>
              <li>
                <a href="javascript:void(0);"><i class="fab fa-youtube hi-icon"></i></a>
              </li>
              <li>
                <a href="javascript:void(0);"><i class="fa-brands fa-facebook-f hi-icon"></i></a>
              </li>
              <li>
                <a href="javascript:void(0);"><i class="fa-brands fa-linkedin hi-icon"></i></a>
              </li>
            </ul>
          </div>
          <div class="serve-form">
            <form action="#">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Email"
                />
                <button
                  type="submit"
                  class="btn button-notific btn-primary d-flex align-items-center"
                >
                  <span>Notify Me</span>
                </button>
              </div>
            </form>
          </div>
          <div class="back-button">
            <router-link to="/index" class="btn-maintance btn"
              >Back to Home</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
