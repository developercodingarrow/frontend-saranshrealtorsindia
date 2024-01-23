export const cityDataColoum = [
  { label: "S No", key: "_id", component: "number" },
  { label: "Date", key: "date", component: "text" },
  { label: "City Name", key: "cityName", component: "text" },
  { label: "View", key: "slug", component: "view" },
];

export const SuperAdminColum = [
  { label: "DELETE", key: "_id", component: "delete" },
];

export const CitysampleData = [
  {
    _id: "1",
    date: "2023-12-20",
    cityName: "Gurgaon",
    slug: "/",
  },
  {
    _id: "2",
    slug: "/",

    cityName: "Pune",
    date: "2023-12-21",
  },
  {
    _id: "3",
    date: "2023-12-22",
    cityName: "chanai",
    slug: "/",
  },
  {
    _id: "4",
    slug: "/",

    cityName: "Ahmedabad",
    date: "2023-12-23",
  },
  {
    _id: "5",
    slug: "/",

    cityName: "Kolkata",
    date: "2023-12-24",
  },
  {
    _id: "6",
    slug: "/",

    cityName: "Delhi",
    date: "2023-12-25",
  },
  {
    _id: "7",
    slug: "/",
    cityName: "Mohali",
    date: "2023-12-26",
  },
];

export const developerDataColoum = [
  { label: "S No", key: "_id", component: "number" },
  { label: "Date", key: "date", component: "text" },
  { label: "Developer Name", key: "developerName", component: "text" },
  { label: "View", key: "slug", component: "view" },
];

export const developersampleData = [
  {
    _id: "1",
    date: "2023-12-20",
    developerName: "Godrej",
    slug: "/",
  },
  {
    _id: "2",
    slug: "/",
    developerName: "Signature",
    date: "2023-12-21",
  },
  {
    _id: "3",
    date: "2023-12-22",
    developerName: "DLF",
    slug: "/",
  },
  {
    _id: "4",
    slug: "/",
    developerName: "GLS",
    date: "2023-12-23",
  },
  {
    _id: "5",
    slug: "/",
    developerName: "Sun City",
    date: "2023-12-24",
  },
];

export const blogDataColoum = [
  { label: "S No", key: "_id", component: "number" },
  { label: "Image", key: "BlogThumblin", component: "singleImage" },
  { label: "Date", key: "createdAt", component: "date" },
  { label: "Title", key: "blogTitle", component: "text" },
  { label: "View", key: "slug", component: "view" },
];

export const blogData = [
  {
    _id: "1",
    blogTitle: "this is first blog title vjhvhvjhk  vhjvhj vhjvhj ",
    createdAt: "2024-01-18T22:32:04.705Z",
    developerName: "Godrej",
    slug: "this-is-first-blog-title",
    BlogThumblin: {
      url: "blog-images-1705755426093-blog-2.png",
      altText: "blog-2.png",
    },
    BlogCoverImage: {
      url: "blog-cover-1705755441015-Book your dream home on Naurangpur Road-Godrej 101 Luxury Flats in Gurgaon.png",
      altText:
        "Book your dream home on Naurangpur Road-Godrej 101 Luxury Flats in Gurgaon.png",
    },
    blogTags: ["Tag 1", "Tag 2", "Tag 5"],
    blogCategories: [
      {
        category: "Sports News",
        _id: "65a9b393806ef6ecc6e9f4eb",
        slug: "sports-news",
      },
      {
        category: "Technology Updates",
        _id: "65a9b393806ef6ecc6e9f4ec",
        slug: "technology-updates",
      },
    ],
    keywords: "keywords from front end, test keywords, again, test, ok",
  },
  {
    _id: "1",
    blogTitle: "this is first blog title",
    createdAt: "2024-01-18T22:32:04.705Z",
    developerName: "Godrej",
    slug: "this-is-first-blog-title",
    BlogThumblin: {
      url: "blog-images-1705755426093-blog-2.png",
      altText: "blog-2.png",
    },
    BlogCoverImage: {
      url: "blog-cover-1705755441015-Book your dream home on Naurangpur Road-Godrej 101 Luxury Flats in Gurgaon.png",
      altText:
        "Book your dream home on Naurangpur Road-Godrej 101 Luxury Flats in Gurgaon.png",
    },
    blogTags: ["Tag 1", "Tag 2", "Tag 5"],
    blogCategories: [
      {
        category: "Sports News",
        _id: "65a9b393806ef6ecc6e9f4eb",
        slug: "sports-news",
      },
      {
        category: "Technology Updates",
        _id: "65a9b393806ef6ecc6e9f4ec",
        slug: "technology-updates",
      },
    ],
    keywords: "keywords from front end, test keywords, again, test, ok",
  },
];

export const projectDataColoum = [
  { label: "S No", key: "_id", component: "number" },
  { label: "Image", key: "ProjectThumblin", component: "singleImage" },
  { label: "Date", key: "createdAt", component: "date" },
  { label: "Title", key: "projectTitle", component: "text" },
  { label: "View", key: "_id", component: "view" },
  { label: "Edit", key: "slug", component: "update" },
  { label: "Delete", key: "slug", component: "delete" },
];
