<template>
  <layouts-header></layouts-header>
  <page-header :title="title" :text="text" :text1="text1" />
  <div class="section blog-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <div class="col-lg-12 col-md-12 d-lg-flex">
              <div class="blog grid-blog">
                <div class="blog-image-list">
                  <router-link to="/blogs/blog-details"><img class="img-fluid" src="@/assets/img/blog/blog-list-01.jpg"
                      alt="Post Image" /></router-link>
                </div>
                <div class="blog-content">
                  <div class="blog-list-date">
                    <ul class="meta-item-list">
                      <li class="blog-category mb-0">
                        <a href="javascript:void(0)"><span>Property</span></a>
                      </li>
                      <li class="date-icon">
                        <div class="post-author">
                          <div class="post-author-img">
                            <img src="@/assets/img/profiles/avatar-01.jpg" alt="author" />
                          </div>
                          <a href="javascript:void(0)">
                            <span> Alphonsa Daniel </span></a>
                        </div>
                        <i class="fa-solid fa-calendar-days"></i>
                        <span>Feb 6, 2024</span>
                      </li>
                    </ul>
                  </div>
                  <h3 class="blog-title">
                    <router-link to="/blogs/blog-details">The most popular cities for homebuyers</router-link>
                  </h3>
                  <p class="blog-description border-0 mb-0 pb-0">
                    There are many variations of passages of lorem ipsum
                    available, but the majority have...
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12 d-lg-flex">
              <div class="blog grid-blog">
                <div class="blog-image-list">
                  <router-link to="/blogs/blog-details"><img class="img-fluid" src="@/assets/img/blog/blog-list-02.jpg"
                      alt="Post Image" /></router-link>
                </div>
                <div class="blog-content">
                  <div class="blog-list-date">
                    <ul class="meta-item-list">
                      <li class="blog-category mb-0">
                        <a href="javascript:void(0)"><span>Villa</span></a>
                      </li>
                      <li class="date-icon">
                        <div class="post-author">
                          <div class="post-author-img">
                            <img src="@/assets/img/profiles/avatar-02.jpg" alt="author" />
                          </div>
                          <a href="javascript:void(0)">
                            <span>Francis </span></a>
                        </div>
                        <i class="fa-solid fa-calendar-days"></i>
                        <span>Feb 8, 2024</span>
                      </li>
                    </ul>
                  </div>
                  <h3 class="blog-title">
                    <router-link to="/blogs/blog-details">How to achieve financial independence</router-link>
                  </h3>
                  <p class="blog-description border-0 mb-0 pb-0">
                    Omnis velit quia. Perspiciatis et cupiditate. Voluptatum
                    beatae asperiores dolor magnam fuga. Sed fuga est harum quo
                    nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis
                    et cupiditate. Voluptatum beatae..
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12 d-lg-flex">
              <div class="blog grid-blog">
                <div class="blog-image-list">
                  <router-link to="/blogs/blog-details"><img class="img-fluid" src="@/assets/img/blog/blog-list-03.jpg"
                      alt="Post Image" /></router-link>
                </div>
                <div class="blog-content">
                  <div class="blog-list-date">
                    <ul class="meta-item-list">
                      <li class="blog-category mb-0">
                        <a href="javascript:void(0)"><span>House</span></a>
                      </li>
                      <li class="date-icon">
                        <div class="post-author">
                          <div class="post-author-img">
                            <img src="@/assets/img/profiles/avatar-03.jpg" alt="author" />
                          </div>
                          <a href="javascript:void(0)">
                            <span> Eric Krok </span></a>
                        </div>
                        <i class="fa-solid fa-calendar-days"></i>
                        <span>Feb 9, 2024</span>
                      </li>
                    </ul>
                  </div>
                  <h3 class="blog-title">
                    <router-link to="/blogs/blog-details">Learn how real estate really shapes our
                      future</router-link>
                  </h3>
                  <p class="blog-description border-0 mb-0 pb-0">
                    There are many variations of passages of lorem ipsum
                    available, but the majority have...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="grid-pagination">
            <ul class="pagination justify-content-center">
              <li class="page-item prev">
                <a class="page-link" href="javascript:void(0);"><i class="fa-solid fa-arrow-left"></i> Prev</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0);">1</a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="javascript:void(0);">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0);">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0);">4</a>
              </li>
              <li class="page-item next">
                <a class="page-link" href="javascript:void(0);">Next <i class="fa-solid fa-arrow-right"></i></a>
              </li>
            </ul>
          </div>
          <!-- /Pagination -->
        </div>
        <div class="col-lg-4 theiaStickySidebar">
          <div class="stickysidebar">
            <list-sidebar></list-sidebar>
          </div>
        </div>
      </div>
    </div>
  </div>

  <layouts-footer></layouts-footer>
</template>
<script>
export default {
  data() {
    return {
      title: "Blog List",
      text: "Home",
      text1: "Blog List",
    };
  },
};
</script>
