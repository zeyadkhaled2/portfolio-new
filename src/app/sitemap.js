import { projects, site } from "@/data";

export default function sitemap() {
  const projectRoutes = projects.map((project) => ({
    url: `${site.url}/work/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectRoutes,
  ];
}
