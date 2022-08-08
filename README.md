# Getting Started

These instructions will get you a copy of the project up and running on your local machine for interaction, development and testing purposes.

Install dependencies

```bash
npm install
# or
yarn
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Build

Generate a full static production build

```bash
npm run build
```

Preview the site as it will appear once deployed

```bash
npm run start
```

# Customizing and Configurations

For specific configurations, refer to the [Configuration Guide](/docs/CONFIGURATIONS.md).   

## Generating Resume QR Code

Generate your QR Code with the URL as `https://[your domain]?resume=true`. The app will check for the existence of this query parameter: `resume=true` on page load and will open the resume modal immediately if parameter exists.

## Creating an Article

Article entries are defined in `/config/articles/markdown`. If in doubt, follow the sample defined. More info about the property are listed below:

| Property        | Description                                                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `uid`           | The unique ID of each article, make sure the `uid` are unique throughout **all** the array objects                                                                                                    |
| `coverImageUrl` | Cover image used in landing page and read more section                                                                                                                                                |
| `title`         | Article's Title                                                                                                                                                                                       |
| `publishOn`     | Follow the date format: DD/MM/YYYY                                                                                                                                                                    |
| `readTime`      | Estimated read time of the article                                                                                                                                                                    |
| `tags`          | The tags associated with the article. Tags has to be a skillset object, see [landing](#landing) section, under `skillsets`                                                                            |
| `linkUrl`       | All links are optional, if no link: then no buttons will be shown. Supports `facebook`, `twitter`, `github` & `realSite`. `realSite` is mainly used for project-article to redirect to live-demo site |
| `mdxFilename`   | Markdown file name defining the content of the article, more on that in the next subsection                                                                                                           |
| `summary`       | Summary of the whole article                   

## Defining Markdown File

[MDX](https://mdxjs.com/) are used to parse markdown file into JSX. This allows for more customization of markdown components and styling.

Markdown created this way will be defined as `*.mdx`.

Consider [adding editor support](https://mdxjs.com/docs/getting-started/#editor) for `.mdx` for more seamless experience in creating `.mdx` files.

The standard heading is `h3`, also known as `###` in markdown script. Please make sure to add anchor `a` HTML tag beside the heading, with `id` specified. The app will look for this anchor tag and recognize it as heading

Have a look into `Prototyping.mdx`, you can import other JSX files as a component inside the markdown. This external components are defined as `plugin` in the project. Currently there are 2: (i) `Image.tsx` and (2) `Quote.tsx`.

## Adding an Article

1. Define and store your markdown files in `config/articles/markdown/blogs` for blog-related articles or `config/articles/markdown/projects` for project-related articles.
2. To add an article to blog page: add a new entry in `config/articles/blogs.ts`, under `article` array.
3. Similarly for project article: add a new entry instead in `config/articles/projects.ts`

## Adding a Skillset

Once you've pickup a new skill, you would want to add it on in your `skillsets` as a tag to be referenced throughout the site.

1. Source for an svg logo for that skill (or technology). Refer to the [SVG Tools](#svg-tools) section for resources on getting the svg logos.
2. Add the SVG as a component under `components/svg/programming`.
3. Update `components/svg/utils.tsx` and `Lang` type under `config/landing/types.ts`.
4. Add to `config/landing/skillsets.ts` and/or `tags` fields under `config/articles/*`

# Additional Information

## SVG Tools

- [Download SVG Icons](https://icons-for-free.com/)
- [React SVG Playground](https://react-svgr.com/playground/)

## Social Sharing API Reference

- [Facebook](https://developers.facebook.com/docs/sharing/webmasters)
- [Twitter](https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview)
