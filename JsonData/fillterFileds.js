export const tabOptions = [
  {
    id: 1,
    name: "searchTerm",
    type: "text",
    render: "searchTerm",
    label: "Search",
  },
  {
    id: 2,
    name: "minPrice",
    type: "range",
    render: "minPriceRange",
    label: "unit price",
  },
  {
    id: 3,
    name: "unitTypes",
    type: "checkbox",
    render: "circleCheckBox",
    label: ["2", "3", "4", "5", "6", "7", "8"],
    options: ["2 bhk", "3 bhk", "4 bhk", "5 bhk", "6 bhk", "7 bhk", "8 bhk"],
  },

  {
    id: 4,
    name: "city",
    type: "checkbox",
    render: "cityCheckBox",
    label: ["Gurgaon", "Nodia", "Delhi"],
    options: ["gurgaon", "nodia", "delhi"],
  },

  {
    id: 5,
    name: "builder",
    type: "checkbox",
    render: "builderCheckBox",
    label: ["DLF", "GLS", "GODREJ"],
    options: ["dlf", "gls", "godrej"],
  },

  {
    id: 5,
    name: "projectStatus",
    type: "checkbox",
    render: "projectStatusCheckBox",
    label: ["Upcoming Project", "Ready to move", "under construction"],
    options: ["upcoming Project", "ready to move", "under construction"],
  },
];

export const dekstopFillterOptions = [
  {
    id: 2,
    name: "minPrice",
    type: "range",
    render: "minPriceRange",
    label: "unit price",
    placeholder: "Price",
  },
  {
    id: 3,
    name: "unitTypes",
    type: "checkbox",
    render: "circleCheckBox",
    label: ["2", "3", "4", "5", "6", "7", "8"],
    options: ["2 bhk", "3 bhk", "4 bhk", "5 bhk", "6 bhk", "7 bhk", "8 bhk"],
    placeholder: "Unit Type",
  },

  {
    id: 4,
    name: "city",
    type: "checkbox",
    render: "cityCheckBox",
    label: ["Gurgaon", "Nodia", "Delhi"],
    options: ["gurgaon", "nodia", "delhi"],
    placeholder: "City",
  },

  {
    id: 5,
    name: "builder",
    type: "checkbox",
    render: "builderCheckBox",
    label: ["DLF", "GLS", "GODREJ"],
    options: ["dlf", "gls", "godrej"],
    placeholder: "Bulders",
  },

  {
    id: 5,
    name: "projectStatus",
    type: "checkbox",
    render: "projectStatusCheckBox",
    label: ["Upcoming Project", "Ready to move", "under construction"],
    options: ["upcoming Project", "ready to move", "under construction"],
    placeholder: "Project Status",
  },
];
