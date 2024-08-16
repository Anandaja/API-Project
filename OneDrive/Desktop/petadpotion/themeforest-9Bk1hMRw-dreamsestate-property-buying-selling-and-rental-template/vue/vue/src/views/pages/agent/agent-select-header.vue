<template>
  <div class="showing-result-head show-list">
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <div class="review-form">
          <label>Agent Type</label>
          <vue-select :options="AgentSelect" id="agentselect" placeholder="Select" />
         
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="review-form">
          <label>Select City</label>
          <vue-select
            :options="AgentSelectTexas"
            id="agentselecttexas"
            placeholder="Select"
          />
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="review-form">
          <label>Select Area</label>
          <vue-select
            :options="AgentSelOakley"
            id="agentseloakley"
            placeholder="Select"
          />
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="review-form">
          <label>Select Category</label>
          <vue-select
            :options="AgentSelectVilla"
            id="agentselectvilla"
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
      AgentSelect : ["Select","Selling Agent","Buying Agent"],
      AgentSelectTexas: ["Select", "Texas", "New York"],
      AgentSelOakley: ["Select", "Oakley", "Park Ave"],
      AgentSelectVilla: ["Select", "Villa", "Apartment"],
    };
  },
};
</script>