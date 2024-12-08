interface VideoBody {
  locale: string;

  title: string;
  description: string;
  thumbnail_url: string;
  source_video_url: string;

  slug_url: string;

  actors?: Array<string | undefined | null>;
  tags?: Array<string | undefined | null>;
  categories?: Array<string | undefined | null>;
}

interface CreateBody {
  vi?: VideoBody;
  en?: VideoBody;
}

const extract_cates_tags_actors = async (locale, reqBody) => {
  const categories = reqBody.categories
    ? await strapi.documents("api::category.category").findMany({
        locale: locale,
        filters: {
          $or: reqBody.categories?.map((cate) => ({
            category_name: {
              $eq: cate,
            },
          })),
        },
      })
    : [];
  const actors = reqBody.actors
    ? await strapi.documents("api::actor.actor").findMany({
        locale: locale,
        filters: {
          $or: reqBody.actors?.map((actor) => ({
            actor_name: {
              $eq: actor,
            },
          })),
        },
      })
    : [];
  const tags = reqBody.tags
    ? await strapi.documents("api::tag.tag").findMany({
        locale: locale,
        filters: {
          $or: reqBody.tags?.map((tag) => ({
            tag_name: {
              $eq: tag,
            },
          })),
        },
      })
    : [];

  return { categories, tags, actors };
};

const createVideoWithLocale = async (locale: string, reqBody: VideoBody) => {
  const { categories, tags, actors } = await extract_cates_tags_actors(
    locale,
    reqBody
  );

  return await strapi.documents("api::video.video").create({
    locale: locale,
    data: {
      title: reqBody.title,
      description: reqBody.description,
      thumbnail_url: reqBody.thumbnail_url,
      source_video_url: reqBody.source_video_url,

      slug_url: reqBody.slug_url,

      actors: actors,
      tags: tags,
      categories: categories,
    },
  });
};
const updateVideoWithLocale = async (
  locale: string,
  reqBody: VideoBody,
  documentId: string
) => {
  const { categories, tags, actors } = await extract_cates_tags_actors(
    locale,
    reqBody
  );
  return await strapi.documents("api::video.video").update({
    locale: locale,
    documentId: documentId,
    data: {
      title: reqBody.title,
      description: reqBody.description,
      thumbnail_url: reqBody.thumbnail_url,
      source_video_url: reqBody.source_video_url,

      slug_url: reqBody.slug_url,

      actors: actors,
      tags: tags,
      categories: categories,
    },
  });
};
const publishVideo = async (locale: string, documentId: string) => {
  return await strapi.documents("api::video.video").publish({
    locale,
    documentId,
  });
};

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
  async getTopWatchesVideo(ctx) {
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
  async createVideosWithCatesTagsActors(ctx) {
    try {
      const reqBody: CreateBody = ctx.request.body;

      let documentId = await strapi
        .service("api::super-custom.super-custom")
        .videoExistsBySlugUrl(reqBody.vi.slug_url || reqBody.en.slug_url);

      let createdVideo = { vi: null, en: null };

      if (documentId) {
        createdVideo.vi = await updateVideoWithLocale(
          "vi",
          reqBody.vi,
          documentId
        );
        createdVideo.en = await updateVideoWithLocale(
          "en",
          reqBody.en,
          documentId
        );
        ctx.body = createdVideo;
        return;
      }

      createdVideo.vi = await createVideoWithLocale("vi", reqBody.vi);
      createdVideo.en = await updateVideoWithLocale(
        "en",
        reqBody.en,
        createdVideo.vi.documentId
      );
      createdVideo.vi = await publishVideo("vi", createdVideo.vi.documentId);
      createdVideo.en = await publishVideo("en", createdVideo.en.documentId);
      ctx.body = createdVideo;
    } catch (err) {
      ctx.body = {
        error: "An error occurred while fetching the summary data",
        details: err instanceof Error ? err.message : "Unknown error",
      };
      ctx.status = 500;
    }
  },
};
