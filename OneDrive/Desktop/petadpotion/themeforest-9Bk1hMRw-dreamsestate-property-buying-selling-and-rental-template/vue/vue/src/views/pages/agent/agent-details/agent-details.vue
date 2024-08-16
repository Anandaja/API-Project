<template>
  <layouts-header></layouts-header>
  <page-header :title="title" :text="text" :text1="text1" />
  <section class="content inner-content">
    <div class="container">
      <!-- Details -->
      <div class="details-wrap">
        <div class="detail-user-wrap">
          <div class="detail-user-img">
            <img
              src="@/assets/img/agents/agent-01.jpg"
              class="img-fluid"
              alt="Image"
            />
          </div>
          <div class="user-wrap">
            <div class="user-info-wrap">
              <div class="detail-user-info">
                <div class="rating">
                  <span class="rating-count">
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star checked"></i>
                  </span>
                  <span class="rating-review">5.0 (20 Reviews)</span>
                </div>
                <h3>Richard R. Roy <i class="fa-solid fa-circle-check"></i></h3>
                <p>
                  <i class="bx bx-user-voice"></i>Seller Agent at
                  <span>Lux Realestate</span>
                </p>
              </div>
              <div class="detail-action">
                <a href="javascript:void(0);" class="btn btn-primary"
                  ><i class="bx bx-phone"></i>Call Me</a
                >
                <a href="javascript:void(0);" class="btn btn-secondary"
                  ><i class="bx bxl-whatsapp"></i>WhatsApp</a
                >
              </div>
            </div>
            <ul class="mem-list">
              <li><span>Member Since : </span>12 May 2011</li>
              <li><span>Agent License : </span>090-0348-8346</li>
              <li><span>Tax Number : </span>090-0348-8346</li>
              <li><span>Language : </span>English, Spanish, French</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- /Details -->

      <div class="row">
        <div class="col-lg-8">
          <div class="agent-views">
            <!-- About -->
            <div class="collapse-card">
              <h4 class="card-title">
                <a
                  class="collapsed"
                  data-bs-toggle="collapse"
                  href="#about"
                  aria-expanded="false"
                  >About Richard R. Roy</a
                >
              </h4>
              <div id="about" class="card-collapse collapse show">
                <div class="about-agent collapse-view">
                  <p>
                    This property is mostly wooded and sits high on a hilltop
                    overlooking the Mohawk River Valley. Located right in the
                    heart of Upstate NYs Amish farm Country, this land is
                    certified organic making it extremely rare! Good road
                    frontage on a paved county road with utilities make it an
                    amazing setting for your dream country getaway! If you like
                    views, you must see this property!,
                  </p>
                  <p>
                    This property is mostly wooded and sits high on a hilltop
                    overlooking the Mohawk River Valley. Located right in the
                    heart of Upstate NYs Amish farm Country, this land is
                    certified organic making it extremely rare! Good road
                    frontage on a paved county road with utilities make it an
                    amazing setting for your dream country getaway! If you like
                    views, you must see this property!This property is mostly
                    wooded and sits high on a hilltop overlooking the Mohawk
                    River
                  </p>
                  <p>
                    Valley. Located right in the heart of Upstate NYs Amish farm
                    Country, this land is certified organic making it extremely
                    rare! Good road frontage on a paved county road with
                    utilities make it an amazing setting for your dream country
                    getaway! If you like views, you must see this property!
                  </p>
                </div>
              </div>
            </div>
            <!-- /About -->

            <!-- Service Areas -->
            <div class="collapse-card">
              <h4 class="card-title">
                <a
                  class="collapsed"
                  data-bs-toggle="collapse"
                  href="#service-area"
                  aria-expanded="false"
                  >Service Areas</a
                >
              </h4>
              <div id="service-area" class="card-collapse collapse show">
                <ul class="service-area collapse-view">
                  <li>Chicago</li>
                  <li>Los Angeles</li>
                  <li>Miami Beach</li>
                  <li>New York</li>
                </ul>
              </div>
            </div>
            <!-- /Service Areas -->

            <!-- Specialities -->
            <div class="collapse-card spl-card">
              <h4 class="card-title">
                <a
                  class="collapsed"
                  data-bs-toggle="collapse"
                  href="#specialities"
                  aria-expanded="false"
                  >Specialities</a
                >
              </h4>
              <div id="specialities" class="card-collapse collapse show">
                <ul class="specialities-list collapse-view">
                  <li>Property Management</li>
                  <li>Real Estate Development</li>
                  <li>Real Estate Appraising</li>
                  <li>Apartment Brokerage</li>
                </ul>
              </div>
            </div>
            <!-- /Specialities -->

            <!-- My Listings -->
            <h5 class="sub-title">My Listings</h5>
            <div class="list-card">
              <ul class="my-list nav">
                <li>
                  <a
                    href="javascript:void(0);"
                    :class="{ active: activeTab === 'property' }"
                    @click="activeTab = 'property'"
                    >All Properties ( 25 )</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);"
                    :class="{ active: activeTab === 'apartment' }"
                    @click="activeTab = 'apartment'"
                    >Apartments ( 15 )</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);"
                    :class="{ active: activeTab === 'condos' }"
                    @click="activeTab = 'condos'"
                    >Condos ( 5 )</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);"
                    :class="{ active: activeTab === 'home' }"
                    @click="activeTab = 'home'"
                    >Home ( 5 )</a
                  >
                </li>
              </ul>
            </div>
            <!-- /My Listings -->

            <div class="tab-content">
              
              <!-- Property -->
              <div class="tab-pane active" id="property"
                  :class="{ active: activeTab === 'property' }"
                  v-if="activeTab === 'property'">
                <agent-property></agent-property>
              </div>
              <!-- /Property -->
              
              <!-- Apartments -->
              <div class="tab-pane"
              :class="{ active: activeTab === 'apartment' }"
                  v-if="activeTab === 'apartment'" id="apartment">
                <agent-apartment></agent-apartment>
              </div>
              <!-- /Apartments -->

              <!-- Condos -->
              <div class="tab-pane" :class="{ active: activeTab === 'condos' }"
                  v-if="activeTab === 'condos'" id="condos">
                <agent-condos></agent-condos>
              </div>
              <!-- /Condos -->

              <!-- Home -->
              <div class="tab-pane" :class="{ active: activeTab === 'home' }"
                  v-if="activeTab === 'home'" id="home">
                <agent-home></agent-home>
              </div>
              <!-- /Home -->
              
            </div>

            <!-- Reviews -->
            <agent-reviews></agent-reviews>
            <!-- /Reviews -->
          </div>
        </div>

        <!-- Sidebar -->
        <div class="col-lg-4 theiaStickySidebar">
          <div class="stickysidebar">
            <agent-sidebar></agent-sidebar>
          </div>
        </div>
        <!-- Sidebar -->
      </div>
    </div>
  </section>

  <layouts-footer></layouts-footer>
</template>
<script>
export default {
  data() {
    return {
      title: "Agent Details",
      text: "Home",
      text1: "Agent Details",
      activeTab: "property",
    };
  },
  watch: {
    activeTab() {
      this.$nextTick(() => {
        const carousel = this.$refs.carousel;
        if (carousel) {
          carousel.restart();
        }
      });
    },
  },
};
</script>
