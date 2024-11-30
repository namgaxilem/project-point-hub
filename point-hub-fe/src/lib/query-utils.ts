import { Actor } from "@/types/Actor";
import { Category } from "@/types/Category";
import { Tag } from "@/types/Tag";

export const videoSuggestQueryBuilder = (relations: {
  categories?: Category[];
  tags?: Tag[];
  actors?: Actor[];
}) => {
  let result = "";
  let index = 0;
  const { categories, tags, actors } = relations;
  categories?.forEach((e) => {
    result = result.concat(
      `&filters[$or][${index}][categories][category_name][$eq]=${e.category_name}`
    );
    index++;
  });

  tags?.forEach((e) => {
    result = result.concat(
      `&filters[$or][${index}][tags][tag_name][$eq]=${e.tag_name}`
    );
    index++;
  });

  actors?.forEach((e) => {
    result = result.concat(
      `&filters[$or][${index}][actors][actor_name][$eq]=${e.actor_name}`
    );
    index++;
  });

  return result;
};
