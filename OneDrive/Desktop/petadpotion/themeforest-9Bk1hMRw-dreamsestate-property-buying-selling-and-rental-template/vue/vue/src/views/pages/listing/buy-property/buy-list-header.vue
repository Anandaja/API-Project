<template>
    <div class="showing-result-head">
      <div class="row align-items-center">
        <div class="col-lg-3">
          <div class="result-show">
            <h5>Showing result <span>06</span> of <span>125</span></h5>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="sort-result">
            <div class="sort-by grid-head">
              <div>
                <p>Sort By</p>
              </div>
              <div class="review-form">
                <vue-select
                  :options="DefaultSelect"
                  id="defaultselect"
                  placeholder="Default"
                />
              </div>
            </div>
            <div class="price-range grid-head">
              <div>
                <p>Price Range</p>
              </div>
              <div class="review-form">
                <vue-select
                  :options="LowSelect"
                  id="lowselect"
                  placeholder="Low to High"
                />
              </div>
            </div>
            <div class="grid-list-view">
              <ul>
                <li>
                  <router-link to="/buy/buy-property-grid"
                    ><i class="bx bx-grid"></i
                  ></router-link>
                </li>
                <li>
                  <router-link to="/buy/buy-property-list"
                    ><i class="bx bx-list-ul"></i
                  ></router-link>
                </li>
                <li>
                  <router-link to="/buy/buy-list-map"
                    ><i class="bx bxs-map"></i
                  ></router-link>
                </li>
              </ul>
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
        LowSelect: ["Low to High", "High to Low"],
        DefaultSelect: ["Default", "A-Z"],
      };
    },
  };
  </script>
  