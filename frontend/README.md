# ThaparMART —  Frontend 

A professional React frontend prototype for the ThaparMART Software Engineering project.

## What is implemented

- Animated homepage hero using uploaded Thapar campus photography
- Homepage background image manager for admin accounts (up to 5 images)
- Thapar-only registration (`@thapar.edu`)
- Local demo authentication with stored accounts and passwords
- Marketplace search, category filters, availability filters and sorting
- Listing detail pages
- Create listing
- Product photo upload with browser preview
- Edit / delete listing
- Mark listing Available / Sold
- Report listing
- Admin moderation: review, remove and restore
- Profile dashboard
- Responsive desktop/tablet/mobile UI
- LocalStorage persistence for the midterm demo

## Run

```bash
cd frontend
npm install
npm start
```

If npm shows a peer-dependency resolution error, use:

```bash
npm install --legacy-peer-deps
npm start
```

Then open `http://localhost:3000`.

## Demo accounts

Register normally using any `@thapar.edu` address.

For the admin dashboard, register with an email beginning with `admin`, for example:

`admin@thapar.edu`

Then open `/profile` and select **Hero background**, or open `/admin` directly.

## Hero images

The supplied Thapar campus image is already included as:

`frontend/public/hero-campus.png`

You can add more images from the browser:

1. Register/login as an admin account.
2. Open Profile.
3. Select **Hero background**.
4. Click **Add images**.
5. Select up to five campus/brand images.
6. The homepage automatically rotates through them with a zoom/fade animation.

Images are stored in browser LocalStorage for this prototype. Backend/S3 integration can replace this later.
