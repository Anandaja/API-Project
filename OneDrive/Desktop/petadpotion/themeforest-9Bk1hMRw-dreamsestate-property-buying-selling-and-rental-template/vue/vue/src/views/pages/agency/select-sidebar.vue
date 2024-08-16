<template>
  <div class="left-sidebar-widget">
    <div class="collapse-card">
      <h4 class="card-title">
        <a
          class="collapsed"
          data-bs-toggle="collapse"
          href="#search"
          aria-expanded="false"
          >Search</a
        >
      </h4>
      <div id="search" class="card-collapse collapse show">
        <ul class="show-list">
          <li class="review-form">
            <label>Agency Name</label>
            <input type="text" class="form-control" placeholder="Enter Name" />
          </li>
          <li class="review-form">
            <label>Agency Type</label>
            <vue-select
              :options="SellingSel"
              id="sellingsel"
              placeholder="Select"
            />
          </li>
          <li class="review-form">
            <label>Select City</label>
            <vue-select :options="GridSel" id="gridsel" placeholder="Select" />
          </li>
          <li class="review-form">
            <label>Select Area</label>
            <vue-select :options="ParkSel" id="parksel" placeholder="Select" />
          </li>
          <li class="review-form">
            <label>Select Category</label>
            <vue-select
              :options="ApartSel"
              id="apartsel"
              placeholder="Select"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="collapse-card">
      <h4 class="card-title">
        <a
          class="collapsed"
          data-bs-toggle="collapse"
          href="#categiries"
          aria-expanded="false"
          >Categories</a
        >
      </h4>
      <div id="categiries" class="card-collapse collapse show">
        <ul class="checkbox-list">
          <li>
            <label class="custom_check">
              <input type="checkbox" name="username" />
              <span class="checkmark"></span> Rental (41)
            </label>
          </li>
          <li>
            <label class="custom_check">
              <input type="checkbox" name="username" />
              <span class="checkmark"></span> Sales (15)
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      SellingSel: ["Select", "Selling Agency", "Buying Agency"],
      GridSel: ["Select", "Texas", "New York"],
      ParkSel: ["Select", "Oakley", "Park Ave"],
      ApartSel: ["Select", "Villa", "Apartment"],
    };
  },
};
</script>
