export class routes {
  private static Url = '';

  public static get baseUrl(): string {
    return this.Url;
  }

  // home routes
  public static get home(): string {
    return this.baseUrl + '/home';
  }

  // agency routes
  public static get agency(): string {
    return this.baseUrl + '/agency';
  }
  public static get agencyList(): string {
    return this.agency + '/agency-list';
  }
  public static get agencyGrid(): string {
    return this.agency + '/agency-grid';
  }
  public static get agencyDetails(): string {
    return this.agency + '/agency-details';
  }
  public static get agencyGridSidebar(): string {
    return this.agency + '/agency-grid-sidebar';
  }
  public static get agencyListSidebar(): string {
    return this.agency + '/agency-list-sidebar';
  }

  // agent routes
  public static get agent(): string {
    return this.baseUrl + '/agent';
  }
  public static get agentDetails(): string {
    return this.agent + '/agent-details';
  }
  public static get agentGrid(): string {
    return this.agent + '/agent-grid';
  }
  public static get agentGridSidebar(): string {
    return this.agent + '/agent-grid-sidebar';
  }
  public static get agentList(): string {
    return this.agent + '/agent-list';
  }
  public static get agentListSidebar(): string {
    return this.agent + '/agent-list-sidebar';
  }

  // blog routes
  public static get blog(): string {
    return this.baseUrl + '/blog';
  }
  public static get blogDetails(): string {
    return this.blog + '/blog-details';
  }
  public static get blogGrid(): string {
    return this.blog + '/blog-grid';
  }
  public static get blogList(): string {
    return this.blog + '/blog-list';
  }

  // pages routes
  public static get pages(): string {
    return this.baseUrl + '/pages';
  }
  public static get comingSoon(): string {
    return this.pages + '/coming-soon';
  }
  public static get aboutUs(): string {
    return this.pages + '/about-us';
  }
  public static get addNewProperty(): string {
    return this.pages + '/add-new-property';
  }
  public static get addNewPropertyRental(): string {
    return this.pages + '/add-new-property-rental';
  }
  public static get privacyPolicy(): string {
    return this.pages + '/privacy-policy';
  }
  public static get pricing(): string {
    return this.pages + '/pricing';
  }
  public static get invoiceDetails(): string {
    return this.pages + '/invoice-details';
  }
  public static get ourTeam(): string {
    return this.pages + '/our-team';
  }
  public static get compare(): string {
    return this.pages + '/compare';
  }
  public static get error404(): string {
    return this.pages + '/error-404';
  }
  public static get error500(): string {
    return this.pages + '/error-500';
  }
  public static get faq(): string {
    return this.pages + '/faq';
  }
  public static get gallery(): string {
    return this.pages + '/gallery';
  }
  public static get contactUs(): string {
    return this.baseUrl + '/contact-us';
  }
  public static get maintenance(): string {
    return this.pages + '/maintenance';
  }
  public static get testimonial(): string {
    return this.pages + '/testimonial';
  }
  public static get termsCondition(): string {
    return this.pages + '/terms-condition';
  }
 

  // listing routes
  public static get listing(): string {
    return this.baseUrl + '/listing';
  }
  public static get buyDetails(): string {
    return this.listing + '/buy-property/buy-details';
  }
  public static get buyDetailsView(): string {
    return this.listing + '/buy-property/buy-details-view';
  }
  public static get buyPropertyGrid(): string {
    return this.listing + '/buy-property/buy-property-grid';
  }
  public static get buyPropertGridSidebar(): string {
    return this.listing + '/buy-property/buy-property-grid-sidebar';
  }
  public static get buyPropertyList(): string {
    return this.listing + '/buy-property/buy-property-list';
  }
  public static get buyPropertyListSidebar(): string {
    return this.listing + '/buy-property/buy-property-list-sidebar';
  }
  public static get buyListMap(): string {
    return this.listing + '/buy-property/buy-list-map';
  }
  public static get buyGridMap(): string {
    return this.listing + '/buy-property/buy-grid-map';
  }
  public static get rentDetails(): string {
    return this.listing + '/rent-property/rent-details';
  }
  public static get rentGridMap(): string {
    return this.listing + '/rent-property/rent-grid-map';
  }
  public static get rentListMap(): string {
    return this.listing + '/rent-property/rent-list-map';
  }
  public static get rentPropertyGrid(): string {
    return this.listing + '/rent-property/rent-property-grid';
  }
  public static get rentPropertyGridSidebar(): string {
    return this.listing + '/rent-property/rent-property-grid-sidebar';
  }
  public static get rentalOrder(): string {
    return this.listing + '/rental-order';
  }
  public static get rentalOrderStep1(): string {
    return this.listing + '/rental-order-step1';
  }
  public static get rentalOrderStep2(): string {
    return this.listing + '/rental-order-step2';
  }
  public static get rentalOrderStep3(): string {
    return this.listing + '/rental-order-step3';
  }
  public static get  rentPropertyList(): string {
    return this.listing + '/rent-property/rent-property-list';
  }
  public static get rentPropertyListSidebar(): string {
    return this.listing + '/rent-property/rent-property-list-sidebar';
  }

  // authentication routes
  public static get forgotPassword(): string {
    return this.baseUrl + '/forgot-password';
  }
  public static get login(): string {
    return this.baseUrl + '/login';
  }
  public static get register(): string {
    return this.baseUrl + '/register';
  }
  public static get resetPassword(): string {
    return this.baseUrl + '/reset-password';
  }
}
