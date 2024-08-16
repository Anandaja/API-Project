<template>
  <div class="advanced-search">
    <h3>Advanced Search</h3>
    <div class="row">
      <div class="col-lg-12">
        <div class="review-form form-wrap">
          <input type="text" class="form-control" placeholder="Location" />
          <span class="form-icon">
            <i class="bx bx-map"></i>
          </span>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 col-12">
        <div class="review-form form-wrap">
          <vue-select
            :options="CatgoSel"
            id="categosel"
            placeholder="Categories"
          />
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 col-12">
        <div class="review-form form-wrap">
          <vue-select :options="BedSel" id="bedsel" placeholder="Bedrooms" />
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 col-12">
        <div class="review-form form-wrap">
          <vue-select
            :options="BathSele"
            id="bathsele"
            placeholder="Bathrooms"
          />
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 col-12">
        <div class="review-form form-wrap">
          <input type="text" class="form-control" placeholder="Min Sqft" />
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 col-12">
        <div class="review-form form-wrap">
          <input type="text" class="form-control" placeholder="Min Price" />
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 col-12">
        <div class="review-form form-wrap">
          <input type="text" class="form-control" placeholder="Max Price" />
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 col-12">
        <div class="review-form form-wrap">
          <vue-select
            :options="ReviewsSelec"
            id="reviewsselec"
            placeholder="Reviews"
          />
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 col-12">
        <div class="review-form form-wrap">
          <input type="text" class="form-control" placeholder="Amenities" />
        </div>
      </div>
      <div class="col-lg-12">
        <div class="review-form-btn">
          <a href="javascript:void(0);" class="btn btn-primary">Apply Filter</a>
          <a href="javascript:void(0);" class="reset-btn">Reset Selection</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      CatgoSel: ["Categories", "Apartments", "Condos", "Houses"],
      BedSel: ["Bedrooms", "4 Bedrooms", "2 Bedrooms"],
      BathSele: ["Bathrooms", "1 Bathrooms", "2 Bathrooms"],
      ReviewsSelec: ["Reviews", "1 Reviews", "2 Reviews"],
    };
  },
};
</script>
