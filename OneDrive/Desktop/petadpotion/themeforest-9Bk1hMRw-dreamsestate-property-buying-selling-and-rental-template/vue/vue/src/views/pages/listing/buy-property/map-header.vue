<template>
  <div class="result-map">
    <div class="showing-result-head">
      <div class="row align-items-center">
        <div class="col-md-3">
          <div class="result-show">
            <h5>Showing result <span>06</span> of <span>125</span></h5>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-12 d-flex justify-content-md-end flex-wrap">
              <div class="sort-by grid-head">
                <div>
                  <span>Sort By</span>
                </div>
                <div class="review-form">
                  <vue-select
                    :options="TimeSelect"
                    id="timeselect"
                    placeholder="Default"
                  />
                </div>
              </div>
              <div class="grid-list-view">
                <ul class="justify-content-end">
                  <li>
                    <router-link to="/buy/buy-property-grid-sidebar"
                      ><i class="feather-grid"></i
                    ></router-link>
                  </li>
                  <li>
                    <router-link to="/buy/buy-property-list-sidebar"
                      ><i class="feather-list"></i
                    ></router-link>
                  </li>
                  <li>
                    <router-link to="/buy/buy-grid-map"
                      ><i class="feather-map-pin"></i
                    ></router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      TimeSelect: ["Default", "10 AM - 12 PM", "12 PM - 2 PM", "02 PM - 04 PM"],
    };
  },
};
</script>
