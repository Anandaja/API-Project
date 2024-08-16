import { createApp } from 'vue'
import { router } from '@/router';
import App from './App.vue'
import {BootstrapVue3, BToastPlugin} from 'bootstrap-vue-3'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import VueSelect from 'vue3-select2-component'
// import TimePicker from 'vue-timepicker';
// import VueApexCharts from "vue3-apexcharts";
import DatePicker from 'vue3-datepicker'
import Vue3Autocounter from 'vue3-autocounter';



// plugins
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "boxicons/css/boxicons.min.css";
import '@/assets/css/feather.css';
import '@/assets/css/style.css';


/********* Breadcrumb **********/
import Page_Header from '@/components/breadcrumb/page-header.vue'


/********* Layouts components **********/
import LayoutsHeader from './views/layouts/layouts-header.vue';
import LayoutsFooter from './views/layouts/layouts-footer.vue';
import Header_Menu from '@/views/layouts/header-menu.vue'
import Loader_Index from '@/views/layouts/loader-index.vue'
import Scroll_Index from '@/views/layouts/scroll-index.vue'


/********* Pages components **********/
import HomeBanner from '@/views/pages/home/home-banner.vue'
import IndexPropertyType from '@/views/pages/home/property-type.vue'
import IndexFeatureProperty from '@/views/pages/home/feature-property.vue'
import IndexCitiesList from '@/views/pages/home/cities-list.vue'
import IndexFeatureRent from '@/views/pages/home/feature-rent.vue'
import IndexMainProperty from '@/views/pages/home/main-property.vue'
import List_Sidebar from '@/views/pages/blogs/list-sidebar.vue'
import About_Counter from '@/views/pages/pages/about-us/about-counter.vue'
import About_Partners from '@/views/pages/pages/about-us/about-partners.vue'
import Book_Place from '@/views/pages/pages/about-us/book-place.vue'
import Select_Header from '@/views/pages/agency/select-header.vue'
import Select_Sidebar from '@/views/pages/agency/select-sidebar.vue'
import Agency_Property from '@/views/pages/agency/agency-details/agency-property.vue'
import Agency_Apartment from '@/views/pages/agency/agency-details/agency-apartment.vue'
import Agency_Condos from '@/views/pages/agency/agency-details/agency-condos.vue'
import Agency_Home from '@/views/pages/agency/agency-details/agency-home.vue'
import Agency_Reviews from '@/views/pages/agency/agency-details/agency-reviews.vue'
import Agency_Sidebar from '@/views/pages/agency/agency-details/agency-sidebar.vue'
import Agent_Select_Header from '@/views/pages/agent/agent-select-header.vue'
import Agent_Select_Sidebar from '@/views/pages/agent/agent-select-sidebar.vue'
import Agent_Property from '@/views/pages/agent/agent-details/agent-property.vue'
import Agent_Apartment from '@/views/pages/agent/agent-details/agent-apartment.vue'
import Agent_Condos from '@/views/pages/agent/agent-details/agent-condos.vue'
import Agent_Home from '@/views/pages/agent/agent-details/agent-home.vue'
import Agent_Reviews from '@/views/pages/agent/agent-details/agent-reviews.vue'
import Agent_Sidebar from '@/views/pages/agent/agent-details/agent-sidebar.vue'
import TestimonialIndex from '@/views/pages/home/testimonial-index.vue';
import FaqIndex from '@/views/pages/home/faq-index.vue';
import Buy_Grid_Header from '@/views/pages/listing/buy-property/buy-grid-header.vue'
import Buy_List_Header from '@/views/pages/listing/buy-property/buy-list-header.vue'
import Buy_Grid_Sidebar_Header from '@/views/pages/listing/buy-property/buy-grid-sidebar-header.vue'
import Buy_List_Sidebar_Header from '@/views/pages/listing/buy-property/buy-list-sidebar-header.vue'
import Buy_Sidebar from '@/views/pages/listing/buy-property/buy-sidebar.vue'
import Search_Map from '@/views/pages/listing/buy-property/search-map.vue'
import Map_Header from '@/views/pages/listing/buy-property/map-header.vue'
import Buy_Amenities from '@/views/pages/listing/buy-property/buy-details/buy-amenities.vue'
import Buy_Description from '@/views/pages/listing/buy-property/buy-details/buy-description.vue'
import Buy_Floor from '@/views/pages/listing/buy-property/buy-details/buy-floor.vue'
import Buy_Listing from '@/views/pages/listing/buy-property/buy-details/buy-listing.vue'
import Buy_Overview from '@/views/pages/listing/buy-property/buy-details/buy-overview.vue'
import Buy_Reviews from '@/views/pages/listing/buy-property/buy-details/buy-reviews.vue'
import Buy_Slider from '@/views/pages/listing/buy-property/buy-details/buy-slider.vue'
import Details_Sidebar from '@/views/pages/listing/buy-property/buy-details/details-sidebar.vue'
import Details_View_Sidebar from '@/views/pages/listing/buy-property/buy-details/details-view-sidebar.vue'
import Rent_Slider from '@/views/pages/listing/rent-property/rent-details/rent-slider.vue'
import Rent_Listing from '@/views/pages/listing/rent-property/rent-details/rent-listing.vue'




/********* Modal components **********/
import RentalOrderModal from '@/components/modal/rental-order-modal.vue';


  
const app = createApp(App)

/********* Breadcrumb **********/
app.component('page-header',Page_Header)

/********* Layouts components **********/
app.component('layouts-header', LayoutsHeader)
app.component('layouts-footer', LayoutsFooter)
app.component('header-menu', Header_Menu)
app.component('loader-index', Loader_Index)
app.component('scroll-index', Scroll_Index)

/********* Pages components **********/
app.component('home-banner', HomeBanner)
app.component('index-property-type', IndexPropertyType)
app.component('index-feature-property', IndexFeatureProperty)
app.component('index-cities-list', IndexCitiesList)
app.component('index-feature-rent', IndexFeatureRent)
app.component('index-main-property', IndexMainProperty)
app.component('list-sidebar', List_Sidebar)
app.component('about-counter', About_Counter)
app.component('about-partners', About_Partners)
app.component('book-place', Book_Place)
app.component('select-header', Select_Header)
app.component('select-sidebar', Select_Sidebar)
app.component('agency-property', Agency_Property)
app.component('agency-apartment', Agency_Apartment)
app.component('agency-condos', Agency_Condos)
app.component('agency-home', Agency_Home)
app.component('agency-reviews',Agency_Reviews)
app.component('agency-sidebar',Agency_Sidebar)
app.component('agent-select-header',Agent_Select_Header)
app.component('agent-select-sidebar',Agent_Select_Sidebar)
app.component('agent-property', Agent_Property)
app.component('agent-apartment', Agent_Apartment)
app.component('agent-condos', Agent_Condos)
app.component('agent-home', Agent_Home)
app.component('agent-reviews',Agent_Reviews)
app.component('agent-sidebar',Agent_Sidebar)
app.component('testimonial-index', TestimonialIndex)
app.component('faq-index', FaqIndex)
app.component('buy-grid-header',Buy_Grid_Header)
app.component('buy-list-header',Buy_List_Header)
app.component('buy-grid-sidebar-header',Buy_Grid_Sidebar_Header)
app.component('buy-list-sidebar-header',Buy_List_Sidebar_Header)
app.component('buy-sidebar',Buy_Sidebar)
app.component('search-map',Search_Map)
app.component('map-header',Map_Header)
app.component('buy-amenities',Buy_Amenities)
app.component('buy-description',Buy_Description)
app.component('buy-floor',Buy_Floor)
app.component('buy-listing',Buy_Listing)
app.component('buy-overview',Buy_Overview)
app.component('buy-reviews',Buy_Reviews)
app.component('buy-slider',Buy_Slider)
app.component('details-sidebar',Details_Sidebar)
app.component('details-view-sidebar',Details_View_Sidebar)
app.component('rent-slider',Rent_Slider)
app.component('rent-listing',Rent_Listing)


/********* Modal components **********/
app.component('rental-order-modal', RentalOrderModal)



app.component('vue3-autocounter', Vue3Autocounter)
app.component('vue-select', VueSelect)
app.component('date-picker', DatePicker)
// app.component('timepicker', TimePicker)
// app.use(VueApexCharts)
.use(BootstrapVue3)
.use(BToastPlugin)
.use(Antd)
app.use(router).mount('#app');
