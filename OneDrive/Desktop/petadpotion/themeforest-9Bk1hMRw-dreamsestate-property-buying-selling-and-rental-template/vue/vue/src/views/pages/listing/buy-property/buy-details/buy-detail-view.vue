<template>
  <layouts-header></layouts-header>
  <page-header :title="title" :text="text" :text1="text1" />
  <section class="buy-detailview">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <!-- Slider -->
          <buy-slider></buy-slider>
          <!-- /Slider -->

          <!-- Overview -->
          <buy-overview></buy-overview>
          <!-- /Overview -->

          <!-- Description -->
          <buy-description></buy-description>
          <!-- /Description -->

          <!-- Property Address -->
          <div class="collapse-card">
            <h4 class="card-title">
              <a class="collapsed" data-bs-toggle="collapse" href="#address" aria-expanded="false">Property Address</a>
            </h4>
            <div id="address" class="card-collapse collapse show">
              <ul class="property-address collapse-view">
                <li>Address : <span> Ferris Park</span></li>
                <li>City : <span> Jersey City </span></li>
                <li>State/County : <span> New Jersey State</span></li>
                <li>Country : <span> United States</span></li>
                <li>Zip : <span> 07305</span></li>
                <li>Area : <span> Greenville</span></li>
              </ul>
            </div>
          </div>
          <!-- /Property Address -->

          <!-- Property Details -->
          <div class="collapse-card">
            <h4 class="card-title">
              <a class="collapsed" data-bs-toggle="collapse" href="#details" aria-expanded="false">Property Details</a>
            </h4>
            <div id="details" class="card-collapse collapse show collapse-view">
              <div class="row">
                <div class="col-md-4">
                  <ul class="property-details">
                    <li>Property Id : <span> 22972</span></li>
                    <li>Price : <span> $ 860,000 </span></li>
                    <li>Price Info: <span> $ 1,098 /sq ft</span></li>
                    <li>Property Size : <span> 190 ft2</span></li>
                    <li>Property Lot Size : <span> 1,200 ft2</span></li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <ul class="property-details">
                    <li>Rooms : <span> 10</span></li>
                    <li>Bedrooms : <span> 5</span></li>
                    <li>Bathrooms : <span> 6</span></li>
                    <li>Custom Id : <span> 68</span></li>
                    <li>Garages : <span> 2</span></li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <ul class="property-details">
                    <li>Year Built : <span> 2005</span></li>
                    <li>Garage Size : <span> 2 cars </span></li>
                    <li>Available From : <span>18-11-2024</span></li>
                    <li>Structure Type : <span> Brick</span></li>
                    <li>Floors No : <span> 3</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- /Property Details -->

          <!-- Amenities -->
          <buy-amenities></buy-amenities>
          <!-- /Amenities -->

          <!-- Documents -->
          <div class="collapse-card">
            <h4 class="card-title">
              <a class="collapsed" data-bs-toggle="collapse" href="#Documents" aria-expanded="false">Documents</a>
            </h4>
            <div id="Documents" class="card-collapse collapse show">
              <div class="row">
                <div class="col-md-12">
                  <ul class="amenities-list document collapse-view">
                    <li>
                      <img src="@/assets/img/icons/pdf-icon.svg" alt="Image" />Ferris Park.jpg
                    </li>
                    <li>
                      <img src="@/assets/img/icons/pdf-icon.svg" alt="Image" />Energetic-Certificate-PDF6
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- /Documents -->

          <!-- Video -->
          <div class="collapse-card">
            <h4 class="card-title">
              <a class="collapsed" data-bs-toggle="collapse" href="#video" aria-expanded="false">Video</a>
            </h4>
            <div id="video" class="card-collapse collapse show">
              <div class="sample-video collapse-view">
                <img src="@/assets/img/video-img.jpg" alt="Image" />
                <a class="play-icon" data-fancybox="" href="https://www.youtube.com/embed/AWovHEZcpQU"><i
                    class="bx bx-play"></i></a>
              </div>
            </div>
          </div>
          <!-- /Video -->

          <!-- Map -->
          <div class="collapse-card">
            <h4 class="card-title">
              <a class="collapsed" data-bs-toggle="collapse" href="#map" aria-expanded="false">Map</a>
            </h4>
            <div id="map" class="card-collapse collapse show">
              <div class="map collapse-view">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin"
                  style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                  class="contact-map"></iframe>
              </div>
            </div>
          </div>
          <!-- /Map -->

          <!-- Floor Plan -->
          <buy-floor></buy-floor>
          <!-- /Floor Plan -->

          <!-- Reviews -->
          <buy-reviews></buy-reviews>
          <!-- /Reviews -->
        </div>

        <!-- Sidebar -->
        <div class="col-lg-4 theiaStickySidebar">
          <div class="stickysidebar">
            <details-sidebar></details-sidebar>
          </div>
        </div>
        <!-- /Sidebar -->
      </div>

      <!-- Similar Listings -->
      <buy-listing></buy-listing>
      <!-- /Similar Listings -->
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      title: "Buy Details - Single Schedule A Visit",
      text: "Home",
      text1: "Buy Details - Single Schedule A Visit",
    };
  },
};
</script>