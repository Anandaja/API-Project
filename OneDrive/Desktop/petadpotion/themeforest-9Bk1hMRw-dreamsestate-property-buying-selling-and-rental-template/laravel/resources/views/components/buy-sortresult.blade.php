<!-- Sort Result -->
<div class="showing-result-head">
    <div class="row align-items-center">
        <div class="col-lg-3">
            <div class="result-show">
                <h5>Showing result <span>06</span> of <span>125</span></h5>
            </div>
        </div>
        <div class="col-lg-9">
            <div class="sort-result">
                <div class="sort-by grid-head">
                    <div>
                        <p>Sort By</p>
                    </div>
                    <div class="review-form">
                        <select class="select">
                            <option value="0">Default</option>
                            <option value="1">A-Z</option>
                        </select>
                    </div>
                </div>
                <div class="price-range grid-head">
                    <div>
                        <p>Price Range</p>
                    </div>
                    <div class="review-form">
                        <select class="select">
                            <option>Low to High</option>
                            <option>High to Low</option>
                        </select>
                    </div>
                </div>
                <div class="grid-list-view">
                    @if (Route::is(['buy-property-grid', 'buy-property-list', 'buy-list-map']))
                        <ul>
                            <li><a href="{{ url('buy-property-grid') }}"
                                    class="{{ Request::is('buy-property-grid') ? 'active' : '' }}"><i
                                        class="bx bx-grid"></i></a></li>
                            <li><a href="{{ url('buy-property-list') }}"
                                    class="{{ Request::is('buy-property-list') ? 'active' : '' }}"><i
                                        class="bx bx-list-ul"></i></a></li>
                            <li><a href="{{ url('buy-list-map') }}"
                                    class="{{ Request::is('buy-list-map') ? 'active' : '' }}"><i
                                        class="bx bxs-map"></i></a></li>
                        </ul>
                    @endif
                    @if (!Route::is(['buy-property-grid', 'buy-property-list', 'buy-list-map']))
                        <ul>
                            <li><a href="{{ url('buy-property-grid-sidebar') }}"
                                    class="{{ Request::is('buy-property-grid-sidebar') ? 'active' : '' }}"><i
                                        class="bx bx-grid"></i></a></li>
                            <li><a href="{{ url('buy-property-list-sidebar') }}"
                                    class="{{ Request::is('buy-property-list-sidebar') ? 'active' : '' }}"><i
                                        class="bx bx-list-ul"></i></a></li>
                            <li><a href="{{ url('buy-list-map') }}"
                                    class="{{ Request::is('buy-list-map') ? 'active' : '' }}"><i
                                        class="bx bxs-map"></i></a></li>
                        </ul>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Sort Result -->
