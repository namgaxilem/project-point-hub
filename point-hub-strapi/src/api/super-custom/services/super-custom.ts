/**
 * content-summary service
 */

export default () => ({
  videoExistsBySlugUrl: async (slug_url: string): Promise<string> => {
    const video = await strapi.documents("api::video.video").findFirst({
      filters: {
        slug_url: {
          $eq: slug_url,
        },
      },
    });

    return video?.documentId;
  },
});
