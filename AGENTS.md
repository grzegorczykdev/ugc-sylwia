## Project rules
- Portfolio page sections live in `src/components/site/` (one file per section) and all copy/images come from `src/content/site.tsx` - keeps text edits in one place.
- Decorative paper props (polaroid, tape, binder clip, film strip) are shared from `src/components/site/decor.tsx` and styled via utilities in `src/styles.css` - keeps the scrapbook look consistent.
- Section entry animations use the `Reveal` wrapper (framer-motion) under a `MotionConfig reducedMotion="user"` - respects reduced-motion users.
