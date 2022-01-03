const meta = {
  title: "BeeSocial.io",
  description:
    "Don't waste time searching on social media or forget to follow up. Automatically connect to those that joined your call on Twitter or LinkedIn.",
};

export default {
  //   projectLink: "https://github.com/shuding/nextra", // GitHub link in the navbar
  docsRepositoryBase: "https://github.com/dbredvick/beesocial-docs/blob/main", // base URL for the docs repository
  titleSuffix: " – BeeSocial",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `${new Date().getFullYear()} © BeeSocial. All rights reserved.`,
  logo: (
    <>
      <svg>...</svg>
      <span>BeeSocialLogoHere</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={meta.description} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <link
        rel="icon"
        href={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='.9em' font-size='90' text-anchor='middle'>🐝</text><style>text{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";fill:black}@media(prefers-color-scheme:dark){text{fill:white}}</style></svg>`}
      />
    </>
  ),
};
