export function formatDate(date: string) {
  return new Date("2014-08-23T14:42:35.207Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
