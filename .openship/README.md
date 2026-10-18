# Openship production deployment

This directory preserves the production deployment configuration after migration from Zeabur.
The Openship project follows the original deploy branch and uses `.openship/compose.yaml`.
Credentials, runtime environment, domains, and persistent volumes are managed in Openship; do not commit secrets here.
The Dockerfiles build native images on the deployment server.

Static output is served on port 8080 by nginx. No Caddyfile or Openship file override is required. HTML is revalidated; missing assets return 404 instead of the SPA document.
