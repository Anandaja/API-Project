<template>
  <!-- scrollToTop start -->
  <div class="progress-wrap active-progress">
    <svg class="progress-circle svg-content" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
    </svg>
  </div>
  <!-- scrollToTop end -->
</template>

<script>
export default {
  mounted() {
    if (document.getElementsByClassName('progress-wrap')[0].getElementsByTagName('path').length > 0) {
      const e = document.getElementsByClassName('progress-wrap')[0].getElementsByTagName('path')[0];
      const t = e.getTotalLength();
      e.style.transition = e.style.WebkitTransition = 'none';
      e.style.strokeDasharray = `${t} ${t}`;
      e.style.strokeDashoffset = t;
      e.getBoundingClientRect();
      e.style.transition = e.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

      const updateDashOffset = () => {
        const o = window.pageYOffset || document.documentElement.scrollTop;
        const r = document.documentElement.scrollHeight - window.innerHeight;
        const i = t - (o * t) / r;
        e.style.strokeDashoffset = i;
      };

      updateDashOffset();
      window.addEventListener('scroll', updateDashOffset);

      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          document.getElementsByClassName('progress-wrap')[0].classList.add('active-progress');
        } else {
          document.getElementsByClassName('progress-wrap')[0].classList.remove('active-progress');
        }
      });

      document.getElementsByClassName('progress-wrap')[0].addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }
};
</script>