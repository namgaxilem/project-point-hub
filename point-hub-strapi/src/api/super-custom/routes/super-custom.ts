export default {
  routes: [
    {
      method: "GET",
      path: "/all-categories-with-video-counts",
      handler: "super-custom.getAllCategoriesWithVideoCounts",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
