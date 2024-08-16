<template>
  <div class="rightsidebar">
    <div class="card">
      <h4>Filter</h4>
      <div class="filter-content looking-input form-group mb-0">
        <input type="text" class="form-control" placeholder="Search" />
      </div>
    </div>
    <div class="card">
      <h4>Categories</h4>
      <ul class="blogcategories-list">
        <li><a href="javascript:void(0)">Property</a></li>
        <li><a href="javascript:void(0)">Villa</a></li>
        <li><a href="javascript:void(0)">House</a></li>
        <li><a href="javascript:void(0)">Guest House</a></li>
        <li><a href="javascript:void(0)">Factory</a></li>
        <li><a href="javascript:void(0)">Godown</a></li>
      </ul>
    </div>
    <div class="card">
      <h4>Top Article</h4>
      <div class="article">
        <div class="article-blog">
          <router-link to="/blogs/blog-details">
            <img
              class="img-fluid"
              src="@/assets/img/blog/blog-7.jpg"
              alt="Blog"
            />
          </router-link>
        </div>
        <div class="article-content">
          <h5>
            <router-link to="/blogs/blog-details"
              >Great Business Tips in 2024</router-link
            >
          </h5>
          <div class="article-date">
            <i class="fa-solid fa-calendar-days"></i>
            <span>Jan 6, 2024</span>
          </div>
        </div>
      </div>
      <div class="article">
        <div class="article-blog">
          <router-link to="/blogs/blog-details">
            <img
              class="img-fluid"
              src="@/assets/img/blog/blog-8.jpg"
              alt="Blog"
            />
          </router-link>
        </div>
        <div class="article-content">
          <h5>
            <router-link to="/blogs/blog-details"
              >Excited News About Buildings.</router-link
            >
          </h5>
          <div class="article-date">
            <i class="fa-solid fa-calendar-days"></i>
            <span>Feb 5, 2024</span>
          </div>
        </div>
      </div>
      <div class="article">
        <div class="article-blog">
          <router-link to="/blogs/blog-details">
            <img
              class="img-fluid"
              src="@/assets/img/blog/blog-9.jpg"
              alt="Blog"
            />
          </router-link>
        </div>
        <div class="article-content">
          <h5>
            <router-link to="/blogs/blog-details"
              >8 Amazing Tricks About Build Dream..</router-link
            >
          </h5>
          <div class="article-date">
            <i class="fa-solid fa-calendar-days"></i>
            <span>October 6, 2024</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
