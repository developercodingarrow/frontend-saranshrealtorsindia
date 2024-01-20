export const CreatecitysFileds = [
  {
    id: 1,
    name: "cityNameName",
    type: "text",
    placeholder: "City Name",
    label: "City Name", // Changed 'lable' to 'label'
    validation: {
      required: "City NAME is required.",
    },
  },
];

export const CityDetailsApi = {
  id: 1,
  //   cityNameName: "Gurgaon",
};

export const CreateDeveloeprFileds = [
  {
    id: 1,
    name: "develoeprName",
    type: "text",
    placeholder: "Develeper Name",
    label: "Developer Name", // Changed 'lable' to 'label'
    validation: {
      required: "Developer NAME is required.",
    },
  },
];

export const DeveloperDetailsApi = {
  id: 1,
};

export const projectDetails = [
  {
    id: 1,
    name: "projectTitle",
    type: "text",
    placeholder: "Project Name",
    label: "Project Name",
    validation: {
      required: "Project NAME is required.",
    },
  },

  {
    id: 3,
    name: "projectStatus",
    type: "radio",
    label: "Project Status",
    options: ["Ready To Move", "under Constructor", "Upcoming Project"],
    // validation: {
    //   required: "Please select a business type.",
    // },
  },

  {
    id: 4,
    name: "typesofUnits",
    type: "checkbox",
    label: "project Units",
    options: ["2 BHK", "3 BHK", "4 BHK"],
    // validation: {
    //   required: "Please select at least one Project Unit type.",
    // },
  },

  {
    id: 5,
    name: "price",
    type: "text",
    label: "unit price",
    placeholder: "Price",
    // validation: {
    //   required: "Please select at least one Project Unit type.",
    // },
  },

  {
    id: 6,
    name: "pricePrefix",
    type: "text",
    label: "price Prefix",
    placeholder: "price Prefix",
    // validation: {
    //   required: "Please select at least one Project Unit type.",
    // },
  },

  {
    id: 6,
    name: "basicPrice",
    type: "text",
    label: "Baise price",
    placeholder: "Basis Price",
    // validation: {
    //   required: "Please select at least one Project Unit type.",
    // },
  },
  {
    id: 7,
    name: "city",
    type: "select",
    label: "City",
    placeholder: "city",
    options: ["Gurgaon", "pune", "kolkata"],
    // validation: {
    //   required: "Please select at least one Project Unit type.",
    // },
  },

  {
    id: 8,
    name: "location", // Changed 'Name' to 'name'
    type: "select",
    placeholder: "location ",
    label: "Location", // Changed 'lable' to 'label'
    options: ["sector 5", "Dwarka Express", "Golf couse Roard"],
    // validation: {
    //   required: "location  is required.",
    // },
  },
  {
    id: 9,
    name: "projectArea",
    type: "text",
    placeholder: "Project Area",
    label: "Project Area",
    // validation: {
    //   required: "Project Area is required.",
    // },
  },

  {
    id: 10,
    name: "floors",
    type: "text",
    placeholder: "No of Floors",
    label: "No of Floors ",
    // validation: {
    //   required: "No of Floors is required.",
    // },
  },
  {
    id: 11,
    name: "unitsNo",
    type: "text",
    placeholder: "No of Units",
    label: "No of Units ",
    // validation: {
    //   required: "No of Units is required.",
    // },
  },
  {
    id: 12,
    name: "builder",
    type: "select",
    placeholder: "Builder ",
    label: "Builder/Developer", // Changed 'lable' to 'label'
    options: ["Godrej", "GLS", "DLF", "Pareena"],
    // validation: {
    //   required: "Builder Name is required.",
    // },
  },
  {
    id: 13,
    name: "reraNo",
    type: "text",
    placeholder: "RERA NO",
    label: "RERA NO ",
    // validation: {
    //   required: "RERA NO is required.",
    // },
  },
];

export const ProjectDetailsApi = {};

export const ProjectStatus = [
  {
    id: 1,
    name: "projectStatus",
    type: "radio",
    label: "Project Status",
    options: ["Ready To Move", "under Constructor", "upcoming"],
    validation: {
      required: "Please select a business type.",
    },
  },
];

export const ProjectUnitsType = [
  {
    id: 1,
    name: "projectUnits",
    type: "checkbox",
    label: "project Units",
    options: ["2 BHK", "3 BHk", "4 BHK"],
    validation: {
      required: "Please select at least one Project Unit type.",
    },
  },
];

export const ProjectPrices = [
  {
    id: 1,
    name: "price",
    type: "text",
    label: "unit price",
    placeholder: "Price",
    validation: {
      required: "Please select at least one Project Unit type.",
    },
  },

  {
    id: 1,
    name: "baiseprice",
    type: "text",
    label: "Baise price",
    placeholder: "Basis Price",
    validation: {
      required: "Please select at least one Project Unit type.",
    },
  },
];

export const ProjectLocation = [
  {
    id: 1,
    name: "city",
    type: "select",
    label: "City",
    placeholder: "city",
    options: ["Gurgaon", "pune", "kolkata"],
    validation: {
      required: "Please select at least one Project Unit type.",
    },
  },

  {
    id: 3,
    name: "location", // Changed 'Name' to 'name'
    type: "select",
    placeholder: "location ",
    label: "Location", // Changed 'lable' to 'label'
    options: ["sector 5", "Dwarka Express", "Golf couse Roard"],
    validation: {
      required: "location  is required.",
    },
  },
];

export const projectfeature = [
  {
    id: 1,
    name: "ProjectArea",
    type: "text",
    placeholder: "Project Area",
    label: "Project Area",
    validation: {
      required: "Project Area is required.",
    },
  },

  {
    id: 2,
    name: "NoofFloors",
    type: "text",
    placeholder: "No of Floors",
    label: "No of Floors ",
    validation: {
      required: "No of Floors is required.",
    },
  },
  {
    id: 3,
    name: "NoofUnits",
    type: "text",
    placeholder: "No of Units",
    label: "No of Units ",
    validation: {
      required: "No of Units is required.",
    },
  },
  {
    id: 4,
    name: "builder",
    type: "select",
    placeholder: "Builder ",
    label: "Builder/Developer", // Changed 'lable' to 'label'
    options: ["Godrej", "GLS", "DLF"],
    validation: {
      required: "Builder Name is required.",
    },
  },
  {
    id: 5,
    name: "RERANO",
    type: "text",
    placeholder: "RERA NO",
    label: "RERA NO ",
    validation: {
      required: "RERA NO is required.",
    },
  },
];

export const blogtitle = [
  {
    id: 1,
    name: "blogTitle",
    type: "text",
    placeholder: "Blog Title",
    label: "Blog Title", // Changed 'lable' to 'label'
    validation: {
      required: "Blog Title is required.",
    },
  },
];

export const metaescription = [
  {
    id: 1,
    name: "metaDescription",
    type: "textarea",
    placeholder: "Meta Description",
    label: "Meta Description", // Changed 'lable' to 'label'
    validation: {
      required: "Meta Description is required.",
    },
  },
];

export const BlogDetailsApi = {
  id: 1,
  //   cityNameName: "Gurgaon",
};
