<template>
    <!-- Home Banner -->
    <section class="banner-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="banner-content" data-aos="fade-down">
                        <h1>Find Your Best Dream House for <span>Rental, Buy & Sell...</span></h1>
                        <p>Properties for buy / rent in in your location. We have more than 3000+ listings for you to
                            choose</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-search" data-aos="fade-down">
                        <div class="banner-tab">
                            <ul class="nav nav-tabs" id="bannerTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link active" id="buy-property" data-bs-toggle="tab"
                                        href="#buy_property" role="tab" aria-controls="buy_property"
                                        aria-selected="true">
                                        <img src="@/assets/img/icons/buy-icon.svg" alt="icon"> Buy a Property
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="rent-property" data-bs-toggle="tab" href="#rent_property"
                                        role="tab" aria-controls="rent_property" aria-selected="false">
                                        <img src="@/assets/img/icons/rent-icon.svg" alt="icon"> Rent a Property
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content" id="bannerTabContent">
                            <div class="tab-pane fade show active" id="buy_property" role="tabpanel"
                                aria-labelledby="buy-property">
                                <div class="banner-tab-property">
                                    <form action="#">
                                        <div class="banner-property-info">
                                            <div class="banner-property-grid">
                                                <input type="text" class="form-control" placeholder="Enter Keyword">
                                            </div>
                                            <div class="banner-property-grid">
                                                <vue-select 
                                                    :options="Property"
                                                    id="propertytype"
                                                    placeholder="Property Type"
                                                />
                                            </div>
                                            <div class="banner-property-grid">
                                                <input type="email" class="form-control" placeholder="Enter Address">
                                            </div>
                                            <div class="banner-property-grid">
                                                <input type="text" class="form-control" placeholder="Min Price">
                                            </div>
                                            <div class="banner-property-grid">
                                                <input type="text" class="form-control" placeholder="Max Price">
                                            </div>
                                            <div class="banner-property-grid">
                                                <router-link to="/buy/buy-property-grid" class="btn-primary"><span><i
                                                            class='feather-search'></i></span></router-link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="rent_property" role="tabpanel"
                                aria-labelledby="rent-property">
                                <div class="banner-tab-property">
                                    <form action="#">
                                        <div class="banner-property-info">
                                            <div class="banner-property-grid">
                                                <input type="text" class="form-control" placeholder="Enter Keyword">
                                            </div>
                                            <div class="banner-property-grid">
                                                <vue-select 
                                                    :options="Property"
                                                    id="typeproperty"
                                                    placeholder="Property Type"
                                                />
                                            </div>
                                            <div class="banner-property-grid">
                                                <input type="email" class="form-control" placeholder="Enter Address">
                                            </div>
                                            <div class="banner-property-grid">
                                                <input type="text" class="form-control" placeholder="Min Price">
                                            </div>
                                            <div class="banner-property-grid">
                                                <input type="text" class="form-control" placeholder="Max Price">
                                            </div>
                                            <div class="banner-property-grid">
                                                <router-link to="/rent/rent-property-grid" class="btn-primary"><span><i
                                                            class='feather-search'></i></span></router-link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Home Banner -->

    <!-- How It Work -->
    <section class="howit-work">
        <div class="container">
            <div class="section-heading text-center">
                <h2>How It Works</h2>
                <div class="sec-line">
                    <span class="sec-line1"></span>
                    <span class="sec-line2"></span>
                </div>
                <p>Follow these 3 steps to book your place</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="howit-work-card" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="100">
                        <div class="work-card-icon">
                            <span>
                                <img src="@/assets/img/icons/work-icon-1.svg" alt="icon">
                            </span>
                        </div>
                        <h4>01. Search for Location</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin.
                            Donec non odio…</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="howit-work-card" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200">
                        <div class="work-card-icon">
                            <span class="bg-red">
                                <img src="@/assets/img/icons/work-icon-2.svg" alt="icon">
                            </span>
                        </div>
                        <h4>02. Select Property Type</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin.
                            Donec non odio…</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="howit-work-card" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="300">
                        <div class="work-card-icon">
                            <span class="bg-green">
                                <img src="@/assets/img/icons/work-icon-3.svg" alt="icon">
                            </span>
                        </div>
                        <h4>03. Book Your Property</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin.
                            Donec non odio…</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /How It Work -->
</template>

<script>
export default {
    data() {
        return {
            Property: ["Property Type", "Buy Property", "Rent Property"]
        }
    },
}
</script>