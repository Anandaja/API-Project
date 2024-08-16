<template>
    <layouts-header></layouts-header>
    <page-header :title="title" :text="text" :text1="text1" />
    <!-- About Us -->
    <section class="aboutus-section">
      <div class="container">
        <!-- About Content -->
        <div class="about-content">
          <h6>About DreamsEstate</h6>
          <h1>We connect building with people</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            quis ligula eu lectus vulputate porttitor sed feugiat nunc. Mauris
            ac consectetur ante,
          </p>

          <p class="mb-0">
            congue, sed luctus lectus congue. Integer convallis condimentum sem.
            Duis elementum tortor eget condimentum tempor. Praesent sollicitudin
            lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper
            at orci at placerat.Placeat Lorem ipsum dolor sit amet.
          </p>
        </div>
        <!-- /About Content -->
      </div>
    </section>
    <!-- /About Us -->

    <!-- About Counter -->
    <about-counter></about-counter>
    <!-- /About Counter -->

    <!-- Book Place -->
    <book-place></book-place>
    <!-- /Book Place -->

    <!-- Partners -->
    <about-partners></about-partners>
    <!-- /Partners -->

  <layouts-footer></layouts-footer>
</template>
<script>
export default {
  data() {
    return {
      title: "About Us",
      text: "Home",
      text1: "About Us",
    };
  },
};
</script>
