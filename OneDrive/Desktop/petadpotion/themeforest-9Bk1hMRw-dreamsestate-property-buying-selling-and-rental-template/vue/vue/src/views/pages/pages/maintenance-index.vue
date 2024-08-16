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
        <div class="error-box">
          <img
            src="@/assets/img/maintenance.png"
            class="img-fluid"
            alt="Maintenance"
          />
          <h1 class="coming-soon mb-2">We're Down for Maintenance</h1>
          <p>
            Our website is currently undergoing scheduled maintenance, will be
            right back in a few minutes.
          </p>
          <h6>We'll Be Back Shortly</h6>
          <div class="footer-social-links">
            <ul class="nav">
              <li>
                <a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a>
              </li>
              <li>
                <a href="javascript:void(0);"><i class="fa-brands fa-twitter"></i> </a>
              </li>
              <li>
                <a href="javascript:void(0);"><i class="fab fa-youtube"></i></a>
              </li>
              <li>
                <a href="javascript:void(0);"><i class="fa-brands fa-linkedin-in"></i></a>
              </li>
            </ul>
          </div>
          <router-link to="/index" class="btn-maintance btn btn-primary"
            >Back to Home</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
