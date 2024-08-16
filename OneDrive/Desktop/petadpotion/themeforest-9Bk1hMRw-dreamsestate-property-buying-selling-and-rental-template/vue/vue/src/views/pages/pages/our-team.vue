<template>
  <layouts-header></layouts-header>
  <page-header :title="title" :text="text" :text1="text1" />
  <section class="our-team-section">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-12 aos"
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-delay="100"
          v-for="record in Our_Team"
          :key="record.id"
        >
          <div class="our-team">
            <div class="profile-pic">
              <a href="javascript:void(0);">
                <img
                  :src="require(`@/assets/img/our-team/${record.Image}`)"
                  alt="Our Team"
                />
              </a>
            </div>
            <div class="team-prof">
              <h6>
                <a href="javascript:void(0);">{{ record.Name }}</a>
              </h6>
              <span class="team-designation">{{ record.Role }}</span>
              <div class="footer-social-links m-0">
                <ul class="nav">
                  <li>
                    <a href="javascript:void(0);"
                      ><i class="fa-brands fa-facebook-f fa-facebook"></i
                    ></a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i> </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"><i class="fa-brands fa-behance"></i> </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"><i class="fa-brands fa-twitter"></i> </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <layouts-footer></layouts-footer>
</template>
<script>
import Our_Team from '@/assets/json/our-team.json'
export default {
  data() {
    return {
      Our_Team :Our_Team,
      title: "Our Team",
      text: "Home",
      text1: "Our Team",
    };
  },
};
</script>
