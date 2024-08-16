<template>
  <div class="breadcrumb">
    <div class="container">
      <div class="bread-crumb-head">
        <div class="breadcrumb-title">
          <h2>{{ title }}</h2>
        </div>
        <div class="breadcrumb-list">
          <ul>
            <li>
              <router-link to="/index">{{ text }} </router-link>
            </li>
            <li>{{ text1 }}</li>
          </ul>
        </div>
      </div>
      <div class="breadcrumb-border-img">
        <img src="@/assets/img/bg/line-bg.png" alt="Line Image" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    text1: {
      type: String,
      default: "",
    },
  },
};
</script>
