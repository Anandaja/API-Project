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
            src="@/assets/img/500.png"
            class="img-fluid"
            alt="Unexpected error"
          />
          <h1>500 Unexpected Error</h1>
          <p class="error-content">
            We’re having some issuesat the moment. we’ll have it fixed in no
            time.
          </p>
          <div class="back-button">
            <router-link to="/index" class="btn">Back to Home</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
