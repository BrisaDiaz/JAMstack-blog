import { GET } from "./utils";
export async function getPageBySlug(variables: { slug: string }) {
  const query = `
  {
 pageCollection(where:{slug:"${variables.slug}"},limit:1){
 items{
  title
  slug
  description
  content{
    json
  }
}
}}
  `;
  const res = await GET(query);

  return res.json();
}
export async function getAllPageSlugs() {
  const query = `
{
 pageCollection{
 items{
  slug
}
}
}
  `;
  const res = await GET(query);

  return res.json();
}
