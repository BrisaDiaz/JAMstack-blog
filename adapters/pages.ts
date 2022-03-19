import { Document } from "@contentful/rich-text-types";
export function pageAdapter(apiResponse: {
  data: {
    pageCollection: {
      items: {
        slug: string;
        title: string;
        description: string;
        content: { json: Document };
      }[];
    };
  };
}) {
  if (apiResponse.data.pageCollection.items.length === 0) return null;
  const pageData = apiResponse.data.pageCollection.items[0];

  const formattedData = {
    slug: pageData.slug,
    title: pageData.title,
    description: pageData.description,
    content: pageData.content.json,
  };
  return formattedData;
}
