---
name: Local exercise media
description: Exercise demonstrations should not rely on third-party image hosts that can fail in the preview environment.
---

Use local media assets for core exercise demonstrations when reliability matters.

**Why:** A publicly reachable Wikimedia image URL returned 403/404 behavior in the preview path, which produced a broken workout demonstration even though the rest of the app was healthy.

**How to apply:** Keep media URLs in the centralized exercise records and prefer checked-in or generated local assets for essential workout screens; retain an explicit fallback for any optional remote source.