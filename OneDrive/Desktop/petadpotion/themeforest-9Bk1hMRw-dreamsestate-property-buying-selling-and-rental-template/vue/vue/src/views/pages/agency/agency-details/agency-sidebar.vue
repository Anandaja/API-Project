<template>
  <div class="right-sidebar">
    <div class="sidebar-card">
      <form action="#">
        <div class="sidebar-card-title">
          <h5>Enquire Agency</h5>
        </div>
        <div class="review-form">
          <input type="text" class="form-control" placeholder="Your Name" />
        </div>
        <div class="review-form">
          <input type="email" class="form-control" placeholder="Your Email" />
        </div>
        <div class="review-form">
          <input
            type="text"
            class="form-control"
            placeholder="Your Phone Number"
          />
        </div>
        <div class="review-form">
          <vue-select
            :options="SelVilla"
            id="selvilla"
            placeholder="Select Property"
          />
        </div>
        <div class="review-form">
          <textarea rows="5" placeholder="Yes, I'm Interested"></textarea>
        </div>
        <div class="review-form submit-btn">
          <button type="submit" class="btn-primary">Send Email</button>
        </div>
      </form>
    </div>
    <div class="sidebar-card">
      <div class="sidebar-card-title">
        <h5>Our Agents</h5>
      </div>
      <div class="our-agent">
        <div class="user-img">
          <a href="javascript:void(0);"
            ><img
              class="avatar"
              src="@/assets/img/profiles/avatar-03.jpg"
              alt="Image"
          /></a>
        </div>
        <div class="agent-name">
          <h6><a href="javascript:void(0);">Lowe</a></h6>
          <p><i class="bx bx-user-voice"></i>Selling Agent</p>
          <div class="rating">
            <span class="rating-count">
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
            </span>
            <span class="rating-review">5.0 (20 Reviews)</span>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar-card">
      <div class="sidebar-card-title">
        <h5>Contact</h5>
      </div>
      <ul class="list-details con-list">
        <li>
          <span><i class="bx bx-buildings"></i>Office</span> +1 321 456 9874
        </li>
        <li>
          <span><i class="bx bx-mobile-alt"></i>Mobile</span> +1 897 654 1258
        </li>
        <li>
          <span><i class="bx bx-phone-call"></i>Fax</span> 4616561461
        </li>
        <li>
          <span><i class="bx bx-globe"></i>Website</span> example.com
        </li>
        <li>
          <span><i class="bx bx-phone-call"></i>Address</span> 7698 Creekwood
          Blvd
        </li>
        <li>
          <span><i class="bx bx-mail-send"></i>Email</span>
          richard@example.com
        </li>
      </ul>
    </div>
    <div class="sidebar-card">
      <div class="sidebar-card-title">
        <h5>Share Property</h5>
      </div>
      <div class="social-links">
        <ul class="sidebar-social-links">
          <li>
            <a href="javascript:void(0);" class="fb-icon"
              ><i class="fa-brands fa-facebook-f"></i
            ></a>
          </li>
          <li>
            <a href="javascript:void(0);" class="ins-icon"
              ><i class="fa-brands fa-instagram"></i
            ></a>
          </li>
          <li>
            <a href="javascript:void(0);"
              ><i class="fa-brands fa-behance"></i
            ></a>
          </li>
          <li>
            <a href="javascript:void(0);" class="twitter-icon"
              ><i class="fa-brands fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="javascript:void(0);" class="ins-icon"
              ><i class="fa-brands fa-pinterest-p"></i
            ></a>
          </li>
          <li>
            <a href="javascript:void(0);"
              ><i class="fa-brands fa-linkedin"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      SelVilla: ["Select Property", "Apartment", "Villa"],
    };
  },
};
</script>
