<template>
  <div class="collapse-card sidebar-card">
    <h4 class="card-title">
      <a
        class="collapsed"
        data-bs-toggle="collapse"
        href="#FloorPlan"
        aria-expanded="false"
        >Floor Plan</a
      >
    </h4>
    <div id="FloorPlan" class="card-collapse collapse show collapse-view">
      <div class="inside-collapse-card mt-0">
        <h5 class="card-title p-0">
          <a data-bs-toggle="collapse" href="#floorplane1" aria-expanded="false"
            >Floor Plan 1</a
          >
        </h5>
        <div id="floorplane1" class="card-collapse collapse show">
          <ul>
            <li>
              <img src="@/assets/img/icons/bed-icon.svg" alt="Image" />4 Beds
            </li>
            <li>
              <img src="@/assets/img/icons/bath-icon.svg" alt="Image" />4 Baths
            </li>
            <li>
              <img src="@/assets/img/icons/building-icon.svg" alt="Image" />35000
              Sqft
            </li>
            <li>
              <img src="@/assets/img/icons/money-icon.svg" alt="Image" />$35,000
            </li>
          </ul>
          <div class="floor-map">
            <img src="@/assets/img/floor-map.png" alt="Image" />
          </div>
          <div class="map-info">
            <p>
              This property is mostly wooded and sits high on a hilltop
              overlooking the Mohawk River Valley. Located right in the heart of
              Upstate NYs Amish farm Country, this land is certified organic
              making it extremely rare! Good road frontage on a paved county
              road with utilities make it an amazing setting for your dream
              country getaway! If you like views, you must see this property!,
            </p>
          </div>
        </div>
      </div>
      <div class="inside-collapse-card">
        <h5 class="card-title p-0">
          <a
            class="collapsed"
            data-bs-toggle="collapse"
            href="#floorplane2"
            aria-expanded="false"
            >Floor Plan 2</a
          >
        </h5>
        <div id="floorplane2" class="card-collapse collapse">
          <ul>
            <li>
              <img src="@/assets/img/icons/bed-icon.svg" alt="Image" />4 Beds
            </li>
            <li>
              <img src="@/assets/img/icons/bath-icon.svg" alt="Image" />4 Baths
            </li>
            <li>
              <img src="@/assets/img/icons/building-icon.svg" alt="Image" />35000
              Sqft
            </li>
            <li>
              <img src="@/assets/img/icons/money-icon.svg" alt="Image" />$35,000
            </li>
          </ul>
          <div class="floor-map">
            <img src="@/assets/img/floor-map.png" alt="Image" />
          </div>
          <div class="map-info">
            <p>
              This property is mostly wooded and sits high on a hilltop
              overlooking the Mohawk River Valley. Located right in the heart of
              Upstate NYs Amish farm Country, this land is certified organic
              making it extremely rare! Good road frontage on a paved county
              road with utilities make it an amazing setting for your dream
              country getaway! If you like views, you must see this property!,
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
