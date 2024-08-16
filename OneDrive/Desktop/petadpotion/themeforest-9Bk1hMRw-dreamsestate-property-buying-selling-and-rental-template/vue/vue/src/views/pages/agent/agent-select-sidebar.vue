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
            <label>Agent Name</label>
            <input type="text" class="form-control" placeholder="Enter Name" />
          </li>
          <li class="review-form">
            <label>Agent Type</label>
            <vue-select
              :options="SellingAgent"
              id="sellingagent"
              placeholder="Select"
            />
          </li>
          <li class="review-form">
            <label>Select City</label>
            <vue-select
              :options="AgentNew"
              id="agentnew"
              placeholder="Select"
            />
          </li>
          <li class="review-form">
            <label>Select Area</label>
            <vue-select
              :options="AgentPark"
              id="agentpark"
              placeholder="Select"
            />
          </li>
          <li class="review-form">
            <label>Select Category</label>
            <vue-select
              :options="AgentApart"
              id="agentapart"
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
      AgentApart: ["Select", "Villa", "Apratment"],
      AgentPark: ["Select", "Oakley", "Park Ave"],
      AgentNew: ["Select", "Texas", "New York"],
      SellingAgent: ["Select", "Selling Agent", "Buying Agent"],
    };
  },
};
</script>
