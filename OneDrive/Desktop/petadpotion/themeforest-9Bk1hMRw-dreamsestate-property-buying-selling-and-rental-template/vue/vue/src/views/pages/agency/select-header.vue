<template>
  <div class="showing-result-head show-list">
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <div class="review-form">
          <label>Agency Type</label>
          <vue-select
            :options="SelectEstate"
            id="selectestate"
            placeholder="Select"
          />
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="review-form">
          <label>Select City</label>
          <vue-select
            :options="SelectTexas"
            id="selecttexas"
            placeholder="Select"
          />
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="review-form">
          <label>Select Area</label>
          <vue-select
            :options="SelOakley"
            id="seloakley"
            placeholder="Select"
          />
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="review-form">
          <label>Select Category</label>
          <vue-select
            :options="SelectVilla"
            id="selectvilla"
            placeholder="Select"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      SelectEstate: ["Select", "Luxurios Estate", "Green Reality"],
      SelectTexas: ["Select", "Texas", "New York"],
      SelOakley: ["Select", "Oakley", "Park Ave"],
      SelectVilla: ["Select", "Villa", "Apartment"],
    };
  },
};
</script>
