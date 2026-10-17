# Easy Boat Removal website

Copy of the original boat removal site (same structure, sections and photos) rebranded as **Easy Boat Removal**: new name, logo, phone number (754-000-0000), orange/blue/grey colors and lightly reworded text. Email is removed everywhere; quote and contact requests go to Telegram.

## Pages

`/`, `/about`, `/services`, `/vessel`, `/quote`, `/junk-boat-removal`, `/salvage-boat-removal`, `/sunken-boat-removal`, `/pompano-beach-boat-removal`, `/tampa-boat-removal`, and two city pages: `/boat-removal-fl-pompano-beach`, `/boat-removal-fl-tampa`.

Other city names in the "nearby towns" lists show as plain text until their pages exist. To publish another city page: add the page file and its `<Route>` in `client/src/App.tsx`, then add the city's slug to `client/src/utils/liveCityPages.ts`.

## Change business details

- Phone: `client/src/utils/getPhoneByCity.ts` (default) and `client/src/data/cities.ts` (per city). Search the project for `754-000-0000` and `+17540000000` to change it everywhere.
- Domain: search for `easyboatremoval.com` (canonical links, sitemap, index.html).
- Logo files: `attached_assets/Logo_easy_boat_removal.png`, `client/public/attached_assets/Logo_easy_boat_removal_black.png`, `client/public/attached_assets/Easy_boat_removal_icon_logo.jpg`.
- Colors: `client/src/index.css` (`--primary` orange, `--secondary` blue, `--muted` grey).

## Deploy on Render

1. Upload the contents of this folder to a new GitHub repo.
2. Render → New → Web Service → pick the repo.
3. Build Command: `npm install && npm run build`
4. Start Command: `npm start`

## Quote requests → Telegram

Until Telegram is connected, requests are printed in the Render **Logs** (search for `[quote]`).

1. In Telegram open **@BotFather**, send `/newbot`, and copy the **bot token**.
2. Send any message to the new bot (or add it to a group and post there).
3. Open `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates` and copy the `chat` → `id` number.
4. Render → your service → **Environment**: add `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`, then save.

Requests arrive as a Telegram message, followed by any photos the customer attached.

## Tracking

The original Google Ads tag was removed. Add your own tag in `client/src/App.tsx` if you need one.
