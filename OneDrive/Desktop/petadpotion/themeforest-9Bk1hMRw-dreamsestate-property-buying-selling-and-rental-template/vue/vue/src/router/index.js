import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/pages/pages/auth/login-index.vue";
import Register_Index from "@/views/pages/pages/auth/register-index.vue";
import Forgot_Password from "@/views/pages/pages/auth/forgot-password.vue";
import Reset_Password from "@/views/pages/pages/auth/reset-password.vue";
import Index from "@/views/pages/home/home-index.vue";
import Contact_Us from "@/views/pages/contact-us.vue";
import Blogs_Index from "@/views/pages/blogs/blogs-index.vue";
import Blog_List from "@/views/pages/blogs/blog-list.vue";
import Blog_Grid from "@/views/pages/blogs/blog-grid.vue";
import Blog_Details from "@/views/pages/blogs/blog-details.vue";
import Pages_Index from "@/views/pages/pages/pages-index.vue";
import Coming_Soon from "@/views/pages/pages/coming-soon.vue";
import Maintenance_Index from "@/views/pages/pages/maintenance-index.vue";
import Privacy_Policy from "@/views/pages/pages/privacy-policy.vue";
import Terms_Condition from "@/views/pages/pages/terms-condition.vue";
import Testimonial_Index from "@/views/pages/pages/testimonial-index.vue";
import Our_Team from "@/views/pages/pages/our-team.vue";
import Gallery_Index from "@/views/pages/pages/gallery-index.vue";
import Faq_Index from "@/views/pages/pages/faq-index.vue";
import Pricing_Index from "@/views/pages/pages/pricing-index.vue";
import Error_404 from '@/views/pages/pages/error-404.vue'
import Error_500 from '@/views/pages/pages/error-500.vue'
import Invoice_Details from '@/views/pages/pages/invoice-details.vue'
import About_Us from '@/views/pages/pages/about-us/about-us.vue'
import Agency_Index from "@/views/pages/agency/agency-index.vue";
import Agency_Grid from '@/views/pages/agency/agency-grid.vue'
import Agency_List from '@/views/pages/agency/agency-list.vue'
import Agency_Grid_Sidebar from '@/views/pages/agency/agency-grid-sidebar.vue'
import Agency_List_Sidebar from '@/views/pages/agency/agency-list-sidebar.vue'
import Agency_Details from '@/views/pages/agency/agency-details/agency-details.vue'
import Agent_Index from '@/views/pages/agent/agent-index.vue'
import Agent_Grid from '@/views/pages/agent/agent-grid.vue'
import Agent_List from '@/views/pages/agent/agent-list.vue'
import Agent_Grid_Sidebar from '@/views/pages/agent/agent-grid-sidebar.vue'
import Agent_List_Sidebar from '@/views/pages/agent/agent-list-sidebar.vue'
import Agent_Details from '@/views/pages/agent/agent-details/agent-details.vue'
import Buy_Index from '@/views/pages/listing/buy-property/buy-index.vue'
import Buy_Property_Grid from '@/views/pages/listing/buy-property/buy-property-grid.vue'
import Buy_Property_List from '@/views/pages/listing/buy-property/buy-property-list.vue'
import Buy_Property_Grid_Sidebar from '@/views/pages/listing/buy-property/buy-property-grid-sidebar.vue'
import Buy_Property_List_Sidebar from '@/views/pages/listing/buy-property/buy-property-list-sidebar.vue'
import Buy_Grid_Map from '@/views/pages/listing/buy-property/buy-grid-map.vue'
import Buy_List_Map from '@/views/pages/listing/buy-property/buy-list-map.vue'
import Buy_Details from '@/views/pages/listing/buy-property/buy-details/buy-details.vue'
import Rent from "@/views/pages/listing/rent-property/rent-index.vue";
import RentPropertyGrid from "@/views/pages/listing/rent-property/rent-property-grid.vue";
import RentPropertyList from "@/views/pages/listing/rent-property/rent-property-list.vue";
import RentPropertyGridSidebar from "@/views/pages/listing/rent-property/rent-property-grid-sidebar.vue";
import RentPropertyListSidebar from "@/views/pages/listing/rent-property/rent-property-list-sidebar.vue";
import RentGridMap from "@/views/pages/listing/rent-property/rent-grid-map.vue";
import RentListMap from "@/views/pages/listing/rent-property/rent-list-map.vue";
import Buy_Detail_View from '@/views/pages/listing/buy-property/buy-details/buy-detail-view.vue'
import Rent_Details from '@/views/pages/listing/rent-property/rent-details/rent-details.vue'
import RentalOrder from '@/views/pages/listing/rental-order.vue'
import RentalOrderStep1 from '@/views/pages/listing/rental-order-step1.vue'
import RentalOrderStep2 from '@/views/pages/listing/rental-order-step2.vue'
import RentalOrderStep3 from '@/views/pages/listing/rental-order-step3.vue'
import AddNewProperty from '@/views/pages/new-property/add-new-property.vue'

const routes = [
  {
    path: "/",
    name: "login-index",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register_Index,
  },
  {
    path: "/forgot-password",
    name: "forgorpassword",
    component: Forgot_Password,
  },
  {
    path: "/reset-password",
    name: "resetpassword",
    component: Reset_Password,
  },
  {
    path: "/index",
    name: "index",
    component: Index,
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: Contact_Us,
  },
  {
    path: "/rental-order",
    name: "rental-order",
    component: RentalOrder,
  },
  {
    path: "/rental-order-step1",
    name: "rental-order-step1",
    component: RentalOrderStep1,
  },
  {
    path: "/rental-order-step2",
    name: "rental-order-step2",
    component: RentalOrderStep2,
  },
  {
    path: "/rental-order-step3",
    name: "rental-order-step3",
    component: RentalOrderStep3,
  },
  {
    path: "/add-new-property",
    name: "add-new-property",
    component: AddNewProperty,
  },
  {
    path: "/blogs",
    component: Blogs_Index,
    children: [
      { path: "", redirect: "/blogs/blog-list" },
      { path: "blog-list", component: Blog_List },
      { path: "blog-grid", component: Blog_Grid },
      { path: "blog-details", component: Blog_Details },
    ],
  },
  {
    path: "/pages",
    component: Pages_Index,
    children: [
      { path: "", redirect: "/pages/about-us" },
      { path: "about-us", component: About_Us },
      { path: "coming-soon", component: Coming_Soon },
      { path: "maintenance", component: Maintenance_Index },
      { path: "privacy-policy", component: Privacy_Policy },
      { path: "terms-condition", component: Terms_Condition },
      { path: "testimonial", component: Testimonial_Index },
      { path: "our-team", component: Our_Team },
      { path: "gallery", component: Gallery_Index },
      { path: "faq", component: Faq_Index },
      { path: "pricing", component: Pricing_Index },
      { path: "error-404", component: Error_404 },
      { path: "error-500", component: Error_500 },
      { path: "invoice-details", component: Invoice_Details },      
    ],
  },
  {
    path: "/agency",
    component: Agency_Index,
    children: [
      { path: "", redirect: "/agency/agency-grid" },
      { path: "agency-grid", component: Agency_Grid },      
      { path: "agency-list", component: Agency_List },      
      { path: "agency-grid-sidebar", component: Agency_Grid_Sidebar },      
      { path: "agency-list-sidebar", component: Agency_List_Sidebar },      
      { path: "agency-details", component: Agency_Details },      
    ],
  },
  {
    path: "/agent",
    component: Agent_Index,
    children: [
      { path: "", redirect: "/agent/agent-grid" },
      { path: "agent-grid", component: Agent_Grid },      
      { path: "agent-list", component: Agent_List },      
      { path: "agent-grid-sidebar", component: Agent_Grid_Sidebar },      
      { path: "agent-list-sidebar", component: Agent_List_Sidebar },      
      { path: "agent-details", component: Agent_Details },      
    ],
  },
  {
    path: "/buy",
    component: Buy_Index,
    children: [
      { path: "", redirect: "/buy/buy-property-grid" },
      { path: "buy-property-grid", component: Buy_Property_Grid },      
      { path: "buy-property-list", component: Buy_Property_List },      
      { path: "buy-property-grid-sidebar", component: Buy_Property_Grid_Sidebar },      
      { path: "buy-property-list-sidebar", component: Buy_Property_List_Sidebar },      
      { path: "buy-grid-map", component: Buy_Grid_Map },      
      { path: "buy-list-map", component: Buy_List_Map },      
      { path: "buy-details", component: Buy_Details },      
      { path: "buy-detail-view", component: Buy_Detail_View },      
    ],
  },
  {
    path: '/rent',
    component: Rent,
    children: [
      { path: '', redirect: '/rent/rent-property-grid' },
      { path: "rent-property-grid", component: RentPropertyGrid },
      { path: "rent-property-list", component: RentPropertyList },
      { path: "rent-property-grid-sidebar", component: RentPropertyGridSidebar },
      { path: "rent-property-list-sidebar", component: RentPropertyListSidebar },
      { path: "rent-grid-map", component: RentGridMap },
      { path: "rent-list-map", component: RentListMap },
      { path: "rent-details", component: Rent_Details },
    ]
  },
];

export const router = createRouter({
  history: createWebHistory("/vue/"),
  linkActiveClass: "active",
  routes,
});

router.beforeEach((to, from, next) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Continue with the navigation
  next();
});
