# TaxiSnaps static website

A Jekyll version of the TaxiSnaps website for GitHub Pages. Site pages, styles and photographs are stored locally in this repository; the original WordPress backup is not needed to build the site.

## Local preview

Install Ruby and Bundler using your operating system’s standard method, then run these commands from the project directory:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. The `Gemfile` selects the GitHub Pages Jekyll dependency set.

If Bundler cannot find `ruby` or `bundle`, reopen the terminal after installing Ruby or add Ruby’s `bin` directory to `PATH` (for example, `C:\Ruby40-x64\bin` on Windows).

Alternatively, GitHub Actions builds the site with GitHub Pages’ Jekyll environment; no local Jekyll installation is required to deploy.

## GitHub Pages deployment

1. Create a GitHub repository for the site and push these files to its `main` branch.
2. In repository **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
3. The workflow at `.github/workflows/pages.yml` builds and deploys on each push to `main`; **Actions** shows the result and published URL.
4. For a custom domain, configure it under **Settings → Pages** and point the domain’s DNS records at GitHub Pages. Keep `_config.yml`’s `url` in sync with the production domain if it changes.

For a project site hosted at `username.github.io/repository`, set `baseurl: "/repository"` in `_config.yml` before publishing. The current blank `baseurl` is intended for the root domain `https://taxisnaps.co.uk` or a user/organisation site.

## Editing content

- Home page: `index.html`.
- Main service and information pages: the matching folder’s `index.html`, for example `wedding-photo-booth-hire/index.html` or `faq/index.html`.
- Blog: edit the dated Markdown files under `_posts`, or add a file named `YYYY-MM-DD-short-title.md`. Include front matter such as:

  ```yaml
  ---
  layout: default
  title: A new article
  date: YYYY-MM-DD
  image: /assets/images/article-photo.jpg
  description: A short summary for search results.
  ---
  Article text goes here.
  ```

- Images: place web-ready images in `assets/images/` and use `/assets/images/filename.jpg` in the page or post. Give images useful alternative text.
- Shared navigation, header and footer: `_layouts/default.html`.
- Site appearance: `assets/css/site.css`.
- Site title, domain and permalink settings: `_config.yml`.

Keep links pointed at existing local pages. Use British English for new copy. The links to client services and social platforms can be updated when authoritative URLs or active profiles are supplied.

## Contact enquiries

The original Gravity Forms contact form collected: title, first and last name, email, telephone, service choice (Taxi Photobooth and/or Magic Mirror), preferred hire duration (two to five hours), venue name/postcode, required date, and an optional marketing-offers opt-in. The static contact page provides matching fields.

GitHub Pages cannot receive or forward form submissions. Instead, the contact page uses browser validation and JavaScript to place the entered details into an encoded `mailto:` draft addressed to `info@taxisnaps.co.uk`. This uses no third-party form processor and does not transmit anything automatically. The visitor must have an email application configured and must review and explicitly send the draft. If that is unavailable, visitors can telephone or use the plain email link. Marketing preference is optional and is included in the draft as yes/no; the opt-in wording is retained from the source form.

## Content and source notes

This rebuild uses local photographs extracted from the supplied All-in-One WP Migration archive and content reviewed from the public TaxiSnaps website. The WordPress backup also contains personal information and submission records; it is intentionally excluded from the published site and from the GitHub Pages build. Confirm current service details, privacy wording, terms, address and contact information with TaxiSnaps before public launch.

