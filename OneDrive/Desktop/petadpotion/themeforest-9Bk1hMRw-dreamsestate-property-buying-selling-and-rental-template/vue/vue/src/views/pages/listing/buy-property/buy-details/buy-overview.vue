<template>
  <div class="collapse-card">
    <h4 class="card-title">
      <a
        class="collapsed"
        data-bs-toggle="collapse"
        href="#overview"
        aria-expanded="false"
        >Overview</a
      >
    </h4>
    <div id="overview" class="card-collapse collapse show">
      <ul class="property-overview collapse-view">
        <li>
          <img src="@/assets/img/icons/bed-icon.svg" alt="Image" />
          <p>4 Beds</p>
        </li>
        <li>
          <img src="@/assets/img/icons/bath-icon.svg" alt="Image" />
          <p>4 Baths</p>
        </li>
        <li>
          <img src="@/assets/img/icons/building-icon.svg" alt="Image" />
          <p>35000 Sqft</p>
        </li>
        <li>
          <img src="@/assets/img/icons/garage-icon.svg" alt="Image" />
          <p>2 Garages</p>
        </li>
        <li>
          <img src="@/assets/img/icons/calender-icon.svg" alt="Image" />
          <p>Year Built: 2005</p>
        </li>
      </ul>
    </div>
  </div>
</template>
