export default {
  async getAllCategoriesWithVideoCounts(ctx) {
    try {
      const totalCategories = await strapi
        .documents("api::category.category")
        .findMany({
          locale: ctx.request.query.locale === "en" ? "en" : "vi",
          populate: {
            videos: {
              count: true,
            },
          },
        });

      ctx.body = {
        data: totalCategories,
        count: totalCategories.length,
      };
    } catch (err) {
      ctx.body = {
        error: "An error occurred while fetching the summary data",
        details: err instanceof Error ? err.message : "Unknown error",
      };
      ctx.status = 500; // Set the HTTP status code to 500 to indicate a server error
    }
  },
};
