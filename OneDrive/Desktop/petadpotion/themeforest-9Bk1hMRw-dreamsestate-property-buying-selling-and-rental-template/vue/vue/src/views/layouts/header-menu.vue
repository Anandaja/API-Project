<template>
  <ul class="main-nav">
    <!-- Existing Vue loop condition -->
    <template v-for="item in navItems" :key="item.tittle">
      <li
        v-if="item.separateRoute == true"
        :class="{
          active:
            isActiveLink(item.active_link) || isActiveLink(item.active_link1),
        }"
      >
        <router-link :to="item.routes">
          {{ item.tittle }}
        </router-link>
      </li>
      <li
        v-if="item.separateRoute == false"
        :class="{
          active:
            isActiveLink(item.active_link) || isActiveLink(item.active_link1),
        }"
        class="has-submenu"
      >
        <a href="javascript:void(0);" @click="item.showAsTab = !item.showAsTab"
          >{{ item.tittle }} <i class="fas fa-chevron-down"></i
        ></a>
        <ul :class="{ 'd-block': item.showAsTab === true }" class="submenu">
          <!-- Nested Vue loop for submenu -->
          <template v-for="menu in item.menu" :key="menu.menuValue">
            <!-- Existing Vue conditions for submenu -->
            <li
              v-if="menu.hasSubRoute === false"
              :class="{
                active:
                  isActiveLink(menu.active_link) ||
                  isActiveLink(menu.active_link1),
              }"
            >
              <router-link :to="menu.routes">{{ menu.menuValue }}</router-link>
            </li>
            <li v-else-if="menu.hasSubRoute === true" class="has-submenu">
              <a
                href="javascript:void(0);"
                :class="{ active: isActiveSubMenu(menu) }"
                >{{ menu.menuValue }}
              </a>
              <ul class="submenu" :class="{ 'd-block': menu.showSubRoute }">
                <!-- Nested loop for submenus -->
                <template
                  v-for="subMenu in menu.subMenus"
                  :key="subMenu.menuValue"
                >
                  <li :class="{ active: isActiveLink(subMenu.routes) }">
                    <router-link :to="subMenu.routes">{{
                      subMenu.menuValue
                    }}</router-link>
                  </li>
                </template>
              </ul>
            </li>
          </template>
        </ul>
      </li>
    </template>

    <!-- Add your provided HTML code here -->
    <li class="searchbar">
      <a href="javascript:void(0);" @click="openSearchPopup">
        <img src="@/assets/img/icons/search-icon.svg" alt="img" />
      </a>
    </li>
  </ul>

  <!-- Search -->
  <div
    class="search-popup js-search-popup"
    :class="{ visible: isSearchPopupVisible }"
  >
    <a
      href="javascript:void(0);"
      class="close-button"
      id="search-close"
      @click="closeSearchPopup"
      aria-label="Close search"
    >
      <i class="fa fa-close"></i>
    </a>
    <div class="popup-inner">
      <div class="inner-container">
        <form class="search-form" id="search-form" @submit.prevent="submitForm">
          <h3>What Are You Looking for?</h3>
          <div class="search-form-box flex">
            <input
              type="text"
              class="search-input"
              placeholder="Type a  Keyword...."
              id="search-input"
              aria-label="Type to search"
              role="searchbox"
              autocomplete="off"
            />
            <button type="submit" class="search-icon">
              <i class="bx bx-search"></i>
            </button>
          </div>
          <h5>Popular Properties</h5>
          <ul>
            <li>
              <router-link to="/rent/rent-property-grid"
                >Beautiful Condo Room</router-link
              >
            </li>
            <li>
              <router-link to="/rent/rent-property-grid"
                >Royal Apartment</router-link
              >
            </li>
            <li>
              <router-link to="/rent/rent-property-grid"
                >Grand Villa House</router-link
              >
            </li>
            <li>
              <router-link to="/rent/rent-property-grid"
                >Grand Mahaka</router-link
              >
            </li>
            <li>
              <router-link to="/rent/rent-property-grid"
                >Lunaria Residence</router-link
              >
            </li>
            <li>
              <router-link to="/rent/rent-property-grid"
                >Stephen Alexander Homes</router-link
              >
            </li>
          </ul>
        </form>
      </div>
    </div>
  </div>
  <!-- /Search -->

  <scroll-index></scroll-index>
</template>

<script>
import navItems from "@/assets/json/header-menu.json";
export default {
  data() {
    return {
      isSearchPopupVisible: false,
      route_array: [],
      navItems: navItems,
    };
  },
  computed: {
    currentPath() {
      return this.getCurrentPath();
    },
  },
  methods: {
    openSearchPopup() {
      this.isSearchPopupVisible = true;
      document.body.classList.add("search-visible");
    },
    closeSearchPopup() {
      this.isSearchPopupVisible = false;
      document.body.classList.remove("search-visible");
    },
    getCurrentPath() {
      this.route_array = this.$route.path.split("/");
      return this.$route.path;
    },
    isActiveLink(link) {
      return this.currentPath.includes(link);
    },
    isActiveSubMenu(menu) {
      return menu.subMenus.some((subMenu) => this.isActiveLink(subMenu.routes));
    },
  },
};
</script>
