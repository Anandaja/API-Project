<!-- Sidebar -->

@if (Route::is(['buy-property-list-sidebar']))
    <div class="col-xl-3 theiaStickySidebar">
        <div class="left-sidebar-widget property-sidebar">
@endif
@if (!Route::is(['buy-property-list-sidebar']))
    <div class="col-xl-4 theiaStickySidebar">
        <div class="left-sidebar-widget">
@endif
<!-- Advanced Search -->
<div class="collapse-card">
    <h4 class="card-title">
        <a class="collapsed" data-bs-toggle="collapse" href="#advance-search" aria-expanded="false">Advanced Search</a>
    </h4>
    <div id="advance-search" class="card-collapse collapse show">
        <ul class="show-list">
            <li class="review-form form-wrap">
                <input type="text" class="form-control" placeholder="Type Keywords">
                <span class="form-icon">
                    <i class="bx bx-search-alt"></i>
                </span>
            </li>
            <li class="review-form">
                <select class="select">
                    <option>Select Location</option>
                    <option>Chicago</option>
                    <option>Newyork</option>
                </select>
            </li>
            <li class="review-form">
                <select class="select">
                    <option>No of Bedrooms</option>
                    <option>4</option>
                    <option>2</option>
                </select>
            </li>
            <li class="review-form">
                <select class="select">
                    <option>No of Bathrooms</option>
                    <option>3</option>
                    <option>2</option>
                </select>
            </li>
            <li class="review-form">
                <input type="text" class="form-control" placeholder="Min Sqft">
            </li>
        </ul>
    </div>
</div>
<!-- /Advanced Search -->

<!-- Categories -->
<div class="collapse-card">
    <h4 class="card-title">
        <a class="collapsed" data-bs-toggle="collapse" href="#categiries" aria-expanded="false">Categories</a>
    </h4>
    <div id="categiries" class="card-collapse collapse show">
        <ul class="checkbox-list term-list">
            <li>
                <label class="custom_check">
                    <input type="checkbox" name="username">
                    <span class="checkmark"></span> Apartments (45)
                </label>
            </li>
            <li>
                <label class="custom_check">
                    <input type="checkbox" name="username">
                    <span class="checkmark"></span> Condos (32)
                </label>
            </li>
            <li>
                <label class="custom_check">
                    <input type="checkbox" name="username">
                    <span class="checkmark"></span> Houses (24)
                </label>
            </li>
            <li>
                <label class="custom_check">
                    <input type="checkbox" name="username">
                    <span class="checkmark"></span> Industrial (41)
                </label>
            </li>
            <li>
                <label class="custom_check">
                    <input type="checkbox" name="username">
                    <span class="checkmark"></span> Land (15)
                </label>
            </li>
            <li>
                <label class="custom_check">
                    <input type="checkbox" name="username">
                    <span class="checkmark"></span> Offices (11)
                </label>
            </li>
        </ul>
    </div>
</div>
<!-- /Categories -->

<!-- Amenities -->
<div class="collapse-card">
    <h4 class="card-title">
        <a class="collapsed" data-bs-toggle="collapse" href="#amenities" aria-expanded="false">Amenities</a>
    </h4>
    <div id="amenities" class="card-collapse collapse show">
        <ul class="checkbox-list amene-list">
            <li>
                <label class="custom_check">
                    <input type="checkbox" name="username">
                    <span class="checkmark"></span> Back Yard (35)
                </label>
            </li>
            <li>
                <label class="custom_check">
                    <input type="checkbox" name="username">
                    <span class="checkmark"></span> Central Air (32)
                </label>
            </li>
            <li>
                <label class="custom_check">
                    <input type="checkbox" name="username">
                    <span class="checkmark"></span> Chair Accessible (24)
                </label>
            </li>
            <li>
                <label class="custom_check">
                    <input type="checkbox" name="username">
                    <span class="checkmark"></span> Elevator (41)
                </label>
            </li>
            <li>
                <label class="custom_check">
                    <input type="checkbox" name="username">
                    <span class="checkmark"></span> Fireplace (15)
                </label>
            </li>
            <li>
                <label class="custom_check">
                    <input type="checkbox" name="username">
                    <span class="checkmark"></span> Front Yard (11)
                </label>
            </li>
        </ul>
    </div>
</div>
<!-- /Amenities -->

<!-- Pricing -->
<div class="collapse-card">
    <h4 class="card-title">
        <a class="collapsed" data-bs-toggle="collapse" href="#pricing" aria-expanded="false">Pricing</a>
    </h4>
    <div id="pricing" class="card-collapse collapse show">
        <ul class="price-filter">
            <li class="d-flex justify-content-between">
                <div class="caption">
                    <h5>Price Range : </h5>
                    <span id="slider-range-value1"> </span> to
                    <span id="slider-range-value2"> </span>
                </div>
            </li>
            <li class="price-filter-inner">
                <div id="slider-range" class="range-bottom"></div>
            </li>
        </ul>
    </div>
</div>
<!-- /Pricing -->

<!-- Reviews -->
<div class="collapse-card">
    <h4 class="card-title">
        <a class="collapsed" data-bs-toggle="collapse" href="#review" aria-expanded="false">Reviews</a>
    </h4>
    <div id="review" class="card-collapse collapse show">
        <ul class="price-filter">
            <li>
                <label class="custom_check">
                    <input type="checkbox" name="username">
                    <span class="checkmark"></span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </label>
            </li>
            <li>
                <label class="custom_check">
                    <input type="checkbox" name="username">
                    <span class="checkmark"></span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </label>
            </li>
            <li>
                <label class="custom_check">
                    <input type="checkbox" name="username">
                    <span class="checkmark"></span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </label>
            </li>
            <li>
                <label class="custom_check">
                    <input type="checkbox" name="username">
                    <span class="checkmark"></span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </label>
            </li>
            <li>
                <label class="custom_check">
                    <input type="checkbox" name="username">
                    <span class="checkmark"></span>
                    <i class="fa fa-star"></i>
                </label>
            </li>
        </ul>
    </div>
</div>
<!-- /Reviews -->

<!-- Apply filter -->
<div class="apply-btn">
    <button type="submit" class="btn btn-primary">Apply Filter</button>
    <a href="javascript:void(0);" class="reset-btn">Reset Selection</a>
</div>
<!-- /Apply filter -->

</div>
</div>
<!-- /Sidebar -->
