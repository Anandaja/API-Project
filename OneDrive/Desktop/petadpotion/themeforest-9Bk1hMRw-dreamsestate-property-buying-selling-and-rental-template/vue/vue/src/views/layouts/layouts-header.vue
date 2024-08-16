<template>
  <header class="header header-fix" :class="{ 'nav-fixed': isNavFixed }">
    <div class="header-top" v-if="!shouldHideHeaderTop">
      <div class="template-ad">
        <img src="@/assets/img/icons/badge-icon.svg" alt="icon" />
        <h5>
          No 1, Realestate Website to Buy / Sell Your Place
          <span>First Listing Free!!!</span>
        </h5>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg header-nav">
      <div class="navbar-header">
        <a id="mobile_btn" href="javascript:void(0);" @click="toggleSidebar">
          <span class="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>
        <router-link to="/index" class="navbar-brand logo">
          <img src="@/assets/img/logo.svg" class="img-fluid" alt="Logo" />
        </router-link>
      </div>
      <div class="main-menu-wrapper">
        <div class="menu-header">
          <router-link to="/index" class="menu-logo">
            <img src="@/assets/img/logo.svg" class="img-fluid" alt="Logo" />
          </router-link>

          <a id="menu_close" class="menu-close" href="javascript:void(0);" @click="closeSidebar">
            <i class="fas fa-times"></i>
          </a>
        </div>
        <header-menu></header-menu>
      </div>
      <ul class="nav header-navbar-rht">
        <li class="new-property-btn">
          <router-link to="/add-new-property">
            <i class="bx bxs-plus-circle"></i> Add New Property
          </router-link>
        </li>
        <li>
          <router-link to="/register" class="btn btn-primary"><i class="feather-user-plus"></i>Sign Up</router-link>
        </li>
        <li>
          <router-link to="/" class="btn sign-btn"><i class="feather-unlock"></i>Sign In</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavFixed: false,
      shouldHideHeaderTop: false // Add a new data property to control the visibility of header-top
    };
  },
  mounted() {
    if (document.getElementsByClassName("header header-fix").length > 0) {
      window.addEventListener("scroll", this.handleScroll);
    }
    this.updateHeaderTopVisibility(); // Call the method to update visibility initially
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
      document.documentElement.classList.toggle("menu-opened");
    },
    closeSidebar() {
      this.isSidebarOpen = false;
      document.documentElement.classList.remove("menu-opened");
    },
    handleScroll() {
      var scroll = window.pageYOffset || document.documentElement.scrollTop;
      if (scroll > 115) {
        this.isNavFixed = true;
      } else {
        this.isNavFixed = false;
      }
    },
    submitForm() {
      this.$router.push("/rent-property-grid");
    },
    updateHeaderTopVisibility() {
      // Check if the current route path is 'index', if yes, set shouldHideHeaderTop to false, else set it to true
      this.shouldHideHeaderTop = this.$route.path !== '/index';
    }
  },
  watch: {
    '$route.path': function () {
      this.updateHeaderTopVisibility(); // Watch for changes in route path and update visibility accordingly
    }
  }
};
</script>