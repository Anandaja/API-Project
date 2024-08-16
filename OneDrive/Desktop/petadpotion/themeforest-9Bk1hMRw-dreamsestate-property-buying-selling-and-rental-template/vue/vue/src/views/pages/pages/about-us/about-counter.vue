<template>
  <section class="about-counter-sec">
    <div class="container">
      <!-- About Images listing -->
      <div class="about-listing-img">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-12 col-sm-12">
            <div class="about-listing">
              <img
                src="@/assets/img/about-us/about-us-01.jpg"
                alt="aboutus-01"
              />
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-12 col-sm-12">
            <div class="about-listing">
              <img
                src="@/assets/img/about-us/about-us-02.jpg"
                alt="aboutus-02"
              />
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-12 col-sm-12">
            <div class="about-listing">
              <img
                src="@/assets/img/about-us/about-us-03.jpg"
                alt="aboutus-03"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- /About Images listing -->

      <!-- About Count -->
      <div class="counter-sec">
        <div class="row align-items-center">
          <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
            <div class="counter-box flex-fill">
              <div class="counter-icon">
                <img src="@/assets/img/icons/counter-icon-1.svg" alt="icon" />
              </div>
              <div class="counter-value">
                <h3 class="dash-count">
                  <vue3-autocounter
                    class="counterUp"
                    ref="counter"
                    :startAmount="0"
                    :delay="3"
                    :endAmount="50"
                    :duration="5"
                    separator=","
                    :autoinit="true"
                  />K
                </h3>
                <h5>Listings Added</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
            <div class="counter-box flex-fill">
              <div class="counter-icon">
                <img src="@/assets/img/icons/counter-icon-2.svg" alt="icon" />
              </div>
              <div class="counter-value">
                <h3 class="dash-count">
                  <vue3-autocounter
                    class="counterUp"
                    ref="counter"
                    :startAmount="0"
                    :delay="3"
                    :endAmount="3000"
                    :duration="5"
                    separator=","
                    :autoinit="true"
                  />+
                </h3>
                <h5>Agents Listed</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
            <div class="counter-box active flex-fill">
              <div class="counter-icon">
                <img src="@/assets/img/icons/counter-icon-3.svg" alt="icon" />
              </div>
              <div class="counter-value">
                <h3 class="dash-count">
                  <vue3-autocounter
                    class="counterUp"
                    ref="counter"
                    :startAmount="0"
                    :delay="3"
                    :endAmount="2000"
                    :duration="5"
                    separator=","
                    :autoinit="true"
                  />+
                </h3>
                <h5>Sales Completed</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
            <div class="counter-box flex-fill">
              <div class="counter-icon">
                <img src="@/assets/img/icons/counter-icon-4.svg" alt="icon" />
              </div>
              <div class="counter-value">
                <h3 class="dash-count">
                  <vue3-autocounter
                    class="counterUp"
                    ref="counter"
                    :startAmount="0"
                    :delay="3"
                    :endAmount="5000"
                    :duration="5"
                    separator=","
                    :autoinit="true"
                  />+
                </h3>
                <h5>Users</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /About Count -->
    </div>
  </section>
</template>
