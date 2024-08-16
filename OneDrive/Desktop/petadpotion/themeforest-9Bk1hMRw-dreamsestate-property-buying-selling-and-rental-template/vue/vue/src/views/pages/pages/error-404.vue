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
            src="@/assets/img/404.png"
            class="img-fluid"
            alt="Page not found"
          />
          <h1>Oops! Page Not Found!</h1>
          <p>The page you requested was not found.</p>
          <div class="back-button">
            <router-link to="/index" class="btn">Back to Home</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
