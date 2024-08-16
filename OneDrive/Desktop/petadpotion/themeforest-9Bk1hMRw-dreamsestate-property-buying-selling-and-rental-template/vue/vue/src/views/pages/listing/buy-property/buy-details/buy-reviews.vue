<template>
  <div class="collapse-card sidebar-card">
    <h4 class="card-title">
      <a
        class="collapsed"
        data-bs-toggle="collapse"
        href="#review"
        aria-expanded="false"
        >Reviews (25)</a
      >
    </h4>
    <div id="review" class="card-collapse collapse show collapse-view">
      <div class="review-card">
        <div class="customer-review">
          <div class="customer-info">
            <div class="customer-name">
              <a href="javascript:void(0);"
                ><img src="@/assets/img/profiles/avatar-01.jpg" alt="User"
              /></a>
              <div>
                <h5><a href="javascript:void(0);">Johnson</a></h5>
                <p>02 Jan 2024</p>
              </div>
            </div>
            <div class="rating">
              <span class="rating-count">
                <i class="fa-solid fa-star checked"></i>
                <i class="fa-solid fa-star checked"></i>
                <i class="fa-solid fa-star checked"></i>
                <i class="fa-solid fa-star checked"></i>
                <i class="fa-solid fa-star"></i>
              </span>
              <p class="rating-review"><span>4.0</span>(20 Reviews)</p>
            </div>
          </div>
          <div class="review-para">
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.It was popularised in the 1960s
            </p>
          </div>
        </div>
        <div class="customer-review">
          <div class="customer-info">
            <div class="customer-name">
              <a href="javascript:void(0);"
                ><img src="@/assets/img/profiles/avatar-02.jpg" alt="User"
              /></a>
              <div>
                <h5><a href="javascript:void(0);">Casandra</a></h5>
                <p>01 Jan 2024</p>
              </div>
            </div>
            <div class="rating">
              <span class="rating-count">
                <i class="fa-solid fa-star checked"></i>
                <i class="fa-solid fa-star checked"></i>
                <i class="fa-solid fa-star checked"></i>
                <i class="fa-solid fa-star checked"></i>
                <i class="fa-solid fa-star checked"></i>
              </span>
              <p class="rating-review"><span>5.0</span>(20 Reviews)</p>
            </div>
          </div>
          <div class="review-para">
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.It was popularised in the 1960s with the
              elease of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus Page
              Maker including versions.
            </p>
          </div>
        </div>
        <div class="property-review">
          <h5 class="card-title">Property Reviews</h5>
          <form action="#">
            <div class="row">
              <div class="col-md-6">
                <div class="review-form">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="review-form">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="review-form">
                  <textarea
                    rows="5"
                    placeholder="Enter Your Comments"
                  ></textarea>
                </div>
              </div>
              <div class="col-md-12">
                <div class="review-form submit-btn">
                  <button type="submit" class="btn-primary">
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
