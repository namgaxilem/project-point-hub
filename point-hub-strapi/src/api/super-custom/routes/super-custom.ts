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
    {
      method: "GET",
      path: "/top-watches",
      handler: "super-custom.getTopWatchesVideo",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/create-videos-with-cates-tags-actors",
      handler: "super-custom.createVideosWithCatesTagsActors",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
