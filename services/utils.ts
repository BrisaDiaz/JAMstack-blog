export const API_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`;

export async function GET(query: string ) {
  return await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });
}
