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
npm run build
```

# Resume QR Code

Generate your QR code as `https://[your domain]?resume=true`. The app will check for the existence of this query parameter: `resume=true` once the page loads, if it exists it will open the resume immediately.

# Facebook & Twitter Sharing API Doc

[Facebook](https://developers.facebook.com/docs/sharing/webmasters)
<br />
[Twitter](https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview)

# Configuration Files

## `locale`

Most of the texts in the app can be configured in `/locale/en` folder. There are two files: `landing.ts` which is specifically for landing page while `index.ts` is for other pages.

Some texts in the component (e.g. Cards) are located in `config` folder, since they involve some other variables & logic derivation (e.g. colors, link URL, etc.). In that case you can edit their texts in the file.

## `config`

The config files are named after the component/page they are in. Below sub-sections further describes the properties in config file. Some URLs may be verbose and redundant, but after careful considerations regarding pathing (webpack bundling), it was decided to sacrifice convenience to avoid confusions for webpack.

### `articles`

All the config files here controls how articles are presented & blog-related pages

#### `index`

Breadcrumb maximum title length is defined here.

#### `markdown`

Has 3 files: (i) `blogs` - Contains markdown definition for **blog-related articles**. (ii) `projects` - Contains markdown definition for **project-related articles**. (iii) `plugin` - Contains React JSX component for components where conventional markdown couldn't support.

#### `blogs`

Contains the configuration for blog-list page and blog-article page.

| Property     | Description                                                                                                                            |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `breadcrumb` | Standard breadcrumb definition, do not change this                                                                                     |
| `articles`   | Defines all blog-related articles data                                                                                                 |
| `pageSize`   | Pagination size on blog-list page                                                                                                      |
| `max`        | (i)`quickGlance` - Maximum quick glance articles.<br />(ii) `readMore` - Maximum read more articles on the bottom of blog-article page |

> When defining the `mdxFilename` property from articles. The app will look for the file in `./markdown/blogs` folder.

> ⚠️ Please do not create nested files in `./markdown/blogs`. The concept behind loading \*.mdx file uses React.lazy & webpack **will not** look into the directory recursively. This rule also applies for project-counterpart.

#### `projects`

Contains the configuration for project-article page.

| Property     | Description                 |
| ------------ | --------------------------- |
| `breadcrumb` | Similar to blog-counterpart |
| `articles`   | Similar to blog-counterpart |

> When defining the `mdxFilename` property from articles, the app will look in `./markdown/projects` folder.

---

### `landing`

All the config files here are related to landing page.

#### `index`

| Property      | Description                                                                                                                            |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `max`         | (i)`descriptionLength` - Maximum summary/description length for blog & project cards.<br />(ii)`blog` - Maximum blog cards to be shown |
| `skillsets`   | Programming languages                                                                                                                  |
| `identities`  | Order-sensitive                                                                                                                        |
| `experiences` | Affects presentation in 'My Experience' section                                                                                        |
| `resume`      | The resume file name. **The app will look for the file in `/static/resume` folder**                                                    |

---

### `error404`

Configures the help link in 404 page.

---

### `headerNav`

Configures the header nav text and link URL.

---

### `index`

Contains other config that cannot be categorized into one file, or the config parameters are too little to justify creation of file.
|Property|Description|
|---|---|
|`dateFormat`|Date parsing & formatting token, do not change this|
|`twitterUsername`|Will be used in Twitter sharing dialog box|
|`cta`|Call-to-action profile links|

---

### theme

Config for light & dark theme, do not change this.

---

### viewport

Config for responsive threshold, do not change this.

---

# Creating an Article

Article entries are defined in `/config/blogs/articles.ts`. If in doubt, follow the sample defined. More info about the property are listed below:

| Property        | Description                                                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `uid`           | The unique ID of each article, make sure the `uid` are unique **throughout** all the array objects                                                                                                    |
| `coverImageUrl` | Cover image used in landing page and read more section                                                                                                                                                |
| `title`         | Self-explanatory                                                                                                                                                                                      |
| `publishOn`     | Follow the date format: DD/MM/YYYY                                                                                                                                                                    |
| `readTime`      | Self-explanatory                                                                                                                                                                                      |
| `tags`          | The tags associated with the article. No restriction, it can be any text                                                                                                                              |
| `linkUrl`       | All links are optional, if no link: then no buttons will be shown. Supports `facebook`, `twitter`, `github` & `realSite`. `realSite` is mainly used for project-article to redirect to live-demo site |
| `mdxFilename`   | Markdown file name defining the content of the article, more on that in the next subsection                                                                                                           |
| `summary`       | Summary of the whole article                                                                                                                                                                          |

## Defining Markdown File

[MDX](https://mdxjs.com/) are used to parse markdown file into JSX. This allows for more customization of markdown components and styling.

Markdown created this way will be defined as `*.mdx`.

Consider [adding editor support](https://mdxjs.com/docs/getting-started/#editor) for `.mdx` for more seamless experience in creating `.mdx` files.

The standard heading is `h3`, also known as `###` in markdown script. Please make sure to add anchor `a` HTML tag beside the heading, with `id` specified. The app will look for this anchor tag and recognize it as heading

Have a look into `Prototyping.mdx`, you can import other JSX files as a component inside the markdown. This external components are defined as `plugin` in the project. Currently there are 2: (i) `Image.tsx` and (2) `Quote.tsx`.

## Adding an Article

1. Define and store your markdown files in `config/articles/markdown/blogs` for blog-related articles or `config/articles/markdown/projects` for project-related articles.

2. To add an article to blog page: add a new entry in `config/articles/blogs.ts`, under `const article` array.

3. Similarly for project article: add a new entry instead in `config/articles/projects.ts`
