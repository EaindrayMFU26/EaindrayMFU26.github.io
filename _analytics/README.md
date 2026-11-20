# eaindray-stats

Cookie-free visit counter for [eaindrayiscoding.com](https://eaindrayiscoding.com) and the API behind the
admin panel at [/admin](https://eaindrayiscoding.com/admin/). It is a Cloudflare Worker with a D1 database,
deployed with the [`cf` CLI](https://developers.cloudflare.com/cf/).

This folder starts with `_`, so GitHub Pages does not publish it.

## What it records

The beacon at the end of `../index.html` sends:

| Path | When | Data |
| --- | --- | --- |
| `POST /v` | page load | device type, site language, browser language, referrer host, `?ref=` / `?utm_source=` |
| `POST /l` | every 30 s while visible, and on leave | seconds the page was in view, sections seen (bit mask) |
| `POST /e` | clicks | CV, email, copy email, LinkedIn, GitHub, other links, robot video, certificates, photos, language, theme |

The Worker adds country, region, city and coordinates (rounded to about 10 km) from Cloudflare, and the
browser and system from the user agent.

Privacy: no cookies, and no IP addresses are stored. A visitor is counted with a hash of IP + user agent +
a random salt that changes every day (Thailand time) and is then deleted, so visits cannot be linked across
days or traced back to a person. Data older than 400 days is deleted daily. Bots and other sites' requests
are ignored, and the admin's own device is skipped after signing in to /admin.

`GET /stats?range=today|7d|30d|90d|12m` returns the totals for the admin panel. It needs
`Authorization: Bearer <ADMIN_KEY>` and allows 10 wrong keys per 15 minutes per network.

## Commands

```sh
npm install
npm run set-admin-key   # choose or change the admin key (hidden input), then deploy
npx cf deploy           # deploy code changes (the key is kept)
npx vp test run         # tests in the local Workers runtime
```

Local development runs the collector on <http://127.0.0.1:8787>:

```sh
npx cf dev --port 8787 --host 127.0.0.1
curl -X POST "http://127.0.0.1:8787/dev/seed?n=900"   # sample visits, local only
```

Then open the site preview with `?stats=local` to send visits to it, and `/admin/` to view them. The local
admin key is in `.dev.vars` (copy `.dev.vars.example`).

On Windows, if this folder sits in a very deep path, the local runtime cannot open its database files
(`SQLITE_CANTOPEN`). Set `CF_STATE_DIR` to a short folder before `cf dev`.
