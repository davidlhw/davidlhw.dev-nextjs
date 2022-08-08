# Configuration Files Guide

In this guide, you'll find a breakdown of the folder structure along with some object fields that are used throughout the app. If there are any doubts, feel free to reach out or post an issue.

## `locale`

Most of the texts in the app can be configured in `/locale/en` folder. There are two files: `landing.ts` which is specifically for landing page while `index.ts` is for other pages.

Some texts in the component (e.g. Cards) are located in `config` folder, since they involve some other variables & logic derivation (e.g. colors, link URL, etc.).

## `config`

The config files are named after the component/page they are in. The following sub-sections describes the properties in config file. Some URLs may be verbose and redundant, but after careful considerations regarding pathing (webpack bundling), it was decided to sacrifice convenience to avoid confusions for webpack.

---

### `articles`

All the config files here controls how articles are presented & blog-related pages

#### `markdown`

Contains 3 sub-folders:

1. `blogs` - Contains markdown definition for **blog-related articles**.
2. `projects` - Contains markdown definition for **project-related articles**.
3. `plugin` - Contains React JSX component for components that conventional markdown couldn't support.

#### `index`

Breadcrumb maximum title length is defined here.

#### `blogs`

Contains the configuration for blog-list page and blog-article page.

| Property     | Description                                                                                                                        |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `breadcrumb` | Standard breadcrumb definition, do not change this                                                                                 |
| `articles`   | Defines all blog-related articles data                                                                                             |
| `pageSize`   | Pagination size on blog-list page                                                                                                  |
| `max`        | 1. `seeOthers` - Maximum articles to recommend.<br />2. `readMore` - Maximum read more articles on the bottom of blog-article page |

> When defining the `mdxFilename` property from articles, the app will look for the files in `./markdown/blogs` folder.

> ⚠️ Do not create nested files in `./markdown/blogs`. The concept behind loading \*.mdx file uses React.lazy & webpack **will not** look into the directory recursively. This rule also applies for project-counterpart.

#### `projects`

Contains the configuration for project-article page.

| Property     | Description         |
| ------------ | ------------------- |
| `breadcrumb` | See [blogs](#blogs) |
| `articles`   | See [blogs](#blogs) |

> When defining the `mdxFilename` property from articles, the app will look for the files in `./markdown/projects` folder.

> ⚠️ Do not create nested files in `./markdown/blogs`. The concept behind loading \*.mdx file uses React.lazy & webpack **will not** look into the directory recursively. This rule also applies for project-counterpart.

---

### `landing`

All the config files here are related to landing page.

#### `index`

| Property      | Description                                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `max`         | 1. `descriptionLength` - Maximum summary/description length for blog & project cards.<br />2. `blog` - Maximum blog cards to be shown |
| `skillsets`   | Technologies and Skillsets                                                                                                            |
| `identities`  | Order-sensitive                                                                                                                       |
| `experiences` | Affects presentation in 'Experiences' section                                                                                         |
| `resume`      | The resume file name. **The app will look for the file in `/static/resume` folder**                                                   |

---

### `error404`

Configures the help link in 404 page.

---

### `headerNav`

Configures the header nav text and link URL.

---

### `index`

Contains other config that cannot be categorized into one file, or the config parameters are too little to justify creation of file.
| Property          | Description                                         |
| ----------------- | --------------------------------------------------- |
| `dateFormat`      | Date parsing & formatting token, do not change this |
| `twitterUsername` | Will be used in Twitter sharing dialog box          |
| `cta`             | Call-to-action profile links                        |
| `lottie`          | Path to lottie file and duration of the animation   |

---

### pageTitle

Specifies the HTML title for the page, the HTML title will affect the content of the browser tab.

---

### theme

Config for light & dark theme, do not change this.

---

### viewport

Config for responsive threshold, do not change this.
