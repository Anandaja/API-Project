import { StylesConfig } from "react-select";

export const customStyles: StylesConfig = {
  option: (provided, state) => ({
    ...provided,
    boxShadow: 'none !important',
    backgroundColor: state.isFocused ? "#6C60FE" : "#fff",
    color: state.isFocused ? "#fff" : "#000",
    "&:hover": {
      backgroundColor: "#6C60FE",
    },
  }),
};

export const propertType = [
    { value: 'buy', label: 'Buy' },
    { value: 'sale', label: 'Sale' }
  ];

  export const propertCategory = [
    { value: 'Select', label: 'Select' },
    { value: 'Apartment', label: 'Apartment' },
    { value: 'Villa', label: 'Villa' }
  ];
  export const propertCategory1 = [
    { value: 'Select Property', label: 'Select Property' },
    { value: 'Apartment', label: 'Apartment' },
    { value: 'Villa', label: 'Villa' }
  ];
 
  export const currencyType = [
    { value: 'Select Type', label: 'Select Type' },
    { value: 'Cash', label: 'Cash' },
    { value: 'Bank Transfer', label: 'Bank Transfer' }
  ];
  export const structureType = [
    { value: 'Select', label: 'Select' },
    { value: 'Square', label: 'Square' },
    { value: 'Rectangle', label: 'Rectangle' }
  ];
  export const availableFrom = [
    { value: 'Select Year', label: 'Select Year' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' }
  ];
  export const constructedYear = [
    { value: 'Select Date', label: 'Select Date' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' }
  ];
  export const embedVideo = [
    { value: 'Youtube', label: 'Youtube' },
    { value: 'Vimeo', label: 'Vimeo' },
  ];
  export const countryandState = [
    { value: 'Select Country', label: 'Select Country' },
    { value: 'UK', label: 'UK' },
    { value: 'Newyork', label: 'Newyork' },
  ];
  export const agenctType = [
    { value: 'Select', label: 'Select' },
    { value: 'Luxurios Estate', label: 'Luxurios Estate' },
    { value: 'Green Reality', label: 'Green Reality' },
  ];
  export const city = [
    { value: 'Select', label: 'Select' },
    { value: 'Texas', label: 'Texas' },
    { value: 'New York', label: 'New York' },
  ];
  export const area = [
    { value: 'Select', label: 'Select' },
    { value: 'Oakley', label: 'Oakley' },
    { value: 'Park Ave', label: 'Park Ave' },
  ];
  export const agencyType1 = [
    { value: 'Select', label: 'Select' },
    { value: 'Selling Agency', label: 'Selling Agency' },
    { value: 'Buying Agency', label: 'Buying Agency' },
  ];
  export const agentType = [
    { value: 'Select', label: 'Select' },
    { value: 'Selling Agent', label: 'Selling Agent' },
    { value: 'Buying Agent', label: 'Buying Agent' },
  ];
  export const sortBy = [
    { value: 'Default', label: 'Default' },
    { value: 'A-Z', label: 'A-Z' },
  ];
  export const lowToHigh = [
    { value: 'Low to High', label: 'Low to High' },
    { value: 'High to Low', label: 'High to Low' },
  ];
  export const location = [
    { value: 'Select Location', label: 'Select Location' },
    { value: 'Chicago', label: 'Chicago' },
    { value: 'Newyork', label: 'Newyork' },
  ];
  export const bedRoom = [
    { value: 'No of Bedrooms', label: 'No of Bedrooms' },
    { value: '4', label: '4' },
    { value: '2', label: '2' },
  ];
  export const bathRoom = [
    { value: 'No of Bathrooms', label: 'No of Bathrooms' },
    { value: '3', label: '3' },
    { value: '2', label: '2' },
  ];
  export const categories = [
    { value: 'Categories', label: 'Categories' },
    { value: 'Apartments', label: 'Apartments' },
    { value: 'Condos', label: 'Condos' },
    { value: 'Houses', label: 'Houses' }
  ];
  export const review = [
    { value: 'Reviews', label: 'Reviews' },
    { value: '1 Review', label: '1 Review' },
    { value: '2 Review', label: '2 Review' }
  ];
  export const sortByTime = [
    { value: 'Default', label: 'Default' },
    { value: '10 AM - 12 PM', label: '10 AM - 12 PM' },
    { value: '12 PM - 2 PM', label: '12 PM - 2 PM' },
    { value: '02 PM - 04 PM', label: '02 PM - 04 PM' }
  ];
  export const country = [
    { value: 'India', label: 'India' },
    { value: 'United States', label: 'United States' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Oman', label: 'Oman' },
    { value: 'Qatar', label: 'Qatar' },
  ];
  export const propertype = [
    { value: 'Property Type', label: 'Property Type' },
    { value: 'Buy Property', label: 'Buy Property' },
    { value: 'Rent Property', label: 'Rent Property' },
   
  ];
  export const sortByTime1 = [
    { value: 'Select', label: 'Select' },
    { value: '10 AM - 12 PM', label: '10 AM - 12 PM' },
    { value: '12 PM - 2 PM', label: '12 PM - 2 PM' },
    { value: '02 PM - 04 PM', label: '02 PM - 04 PM' }
  ];
  
  