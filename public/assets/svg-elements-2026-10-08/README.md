# SYNVO SVG element pack

39 native SVGs: 28 new standalone elements plus 11 existing article figures.

## Main artwork
- hero-sy-ribbon.svg: traced silhouette and two brand-color faces from the supplied hero PNG; transparent background, quadratic contour paths.
- folded-book.svg: traced geometric book, three flat brand colors, transparent background.
- starting-point.svg, paper-fold.svg, diagonal-ribbon.svg: clean geometric reconstructions of screen artwork.
- sy-monogram.svg and sy-monogram-persimmon.svg: simplified lowercase symbol reconstructions; keep the folded ribbon for the main hero.
- wordmark-synvo.svg: uppercase text wordmark. Uses Arial/sans-serif rather than an outlined or identified mockup font. For exact brand typography, set SYNVO in the selected site font and convert to outlines in your design editor if needed.

## Diagrams and supporting illustrations
partnership-map.svg, evidence-flow-mobile.svg, evidence-flow-desktop.svg, company-petal.svg, course-illustration.svg, resource-illustration.svg, software-illustration.svg, observation-brace.svg, audience-thumbnail.svg, recurring-value-thumbnail.svg.

## Controls
arrow-left.svg, arrow-right.svg, chevron-down.svg, close.svg, plus.svg, minus.svg and menu.svg use currentColor. Inline SVG to inherit the component's color; external img cannot inherit page currentColor. application-button.svg is a visual reference, not a substitute for a semantic HTML button. chapter-dots.svg defaults to chapter 1 of seven; set the active state from actual chapter position. reading-progress.svg is a visual reference; update progress from reading position.

## Developer use
All artwork has viewBox and a title, no embedded PNGs, scripts or foreignObject. Keep width responsive and height automatic. For decorative SVGs use aria-hidden=true in context; diagrams need explanatory text alternatives. Rebuild clickable controls and live text semantically rather than making an entire diagram/button image clickable. Text-bearing diagrams use Arial/sans-serif; copy remains editable. The SVGs are flat-color vector adaptations, not exact reproductions of raster texture, shadow or generated typography. Original PNG assets and approved screen references remain unchanged.

article-figures/ retains the 11 existing evidence-led SVGs unchanged, including the original figure palettes and labels. Do not recolor data figures in a way that changes meaning or remove qualifications. Their complete sources remain in the previous handoff.

preview.png is the overview. hero-sy-ribbon-preview.png and folded-book-preview.png show the principal art. build.py records deterministic generation; Pillow is needed only to regenerate the traced artwork. manifest.json lists actual SVG files and viewBoxes.
