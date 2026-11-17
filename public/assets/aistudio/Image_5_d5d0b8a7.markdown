---
name: Architectural Prestige
colors:
  surface: '#fef9ef'
  surface-dim: '#ded9d1'
  surface-bright: '#fef9ef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3ea'
  surface-container: '#f2ede4'
  surface-container-high: '#ede8df'
  surface-container-highest: '#e7e2d9'
  on-surface: '#1d1c16'
  on-surface-variant: '#444845'
  inverse-surface: '#32302a'
  inverse-on-surface: '#f5f0e7'
  outline: '#747875'
  outline-variant: '#c4c7c3'
  surface-tint: '#5c5f5c'
  primary: '#0a0d0b'
  on-primary: '#ffffff'
  primary-container: '#202321'
  on-primary-container: '#888a87'
  inverse-primary: '#c5c7c4'
  secondary: '#5f5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdb'
  on-secondary-container: '#63635f'
  tertiary: '#130b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#2f2000'
  on-tertiary-container: '#a28650'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e3df'
  primary-fixed-dim: '#c5c7c4'
  on-primary-fixed: '#191c1a'
  on-primary-fixed-variant: '#454745'
  secondary-fixed: '#e4e2dd'
  secondary-fixed-dim: '#c8c6c2'
  on-secondary-fixed: '#1b1c19'
  on-secondary-fixed-variant: '#474744'
  tertiary-fixed: '#ffdea4'
  tertiary-fixed-dim: '#e3c286'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5a4314'
  background: '#fef9ef'
  on-background: '#1d1c16'
  surface-variant: '#e7e2d9'
  text-base: '#353535'
  text-muted: '#6B6A65'
  badge-surface: '#F4EFE6'
  badge-text: '#8C703B'
  surface-pure: '#FFFFFF'
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: 0em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.12em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.5rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

The design system embodies the quiet confidence of high-end architectural monographs and heritage property journals. It is crafted for discerning buyers, architectural patrons, and high-net-worth investors seeking curated spaces rather than transactional listings. 

The aesthetic is an editorial-modern hybrid: expansive breathing room, razor-sharp 1px hairline dividers, precise typography pairings, and a deliberate absence of heavy dropshadows. Visual storytelling is prioritized through deliberate aspect ratios, framing properties as gallery works rather than commercial commodities. Micro-interactions are restrained, fluid, and weighted, conveying permanence and understated luxury.

## Colors

The palette revolves around deep architectural charcoal and warm limestone canvas tones, accented by quiet, muted metallics. 

- **Primary (`#202321`)**: Serves as the dominant anchor for primary actions, prominent typography, and structural graphic anchors.
- **Secondary (`#F7F5F0`)**: The core foundational canvas tint; softens contrast compared to stark white, evoking heavy archival stock paper.
- **Tertiary (`#B89A62`)**: An architectural muted gold used sparingly for active accents, key status indicators, interactive focal points, and editorial markers.
- **Neutral (`#EAE5DC`)**: Applied to architectural line dividers, hairline borders, and subtle structural backgrounds.
- **Named Accents**: `badge-surface` and `badge-text` provide low-saturation status treatments for verified estates and exclusive appointments; `text-base` and `text-muted` govern high-legibility body hierarchy without harsh absolute blacks.

## Typography

The type system pairs the editorial elegance of `Playfair Display` with the structural precision and legibility of `Plus Jakarta Sans`.

- **Headlines and Editorial Titles**: Rendered in `Playfair Display` at relaxed regular and medium weights. It captures the rhythm of luxury print magazines and architectural journals.
- **Interface, Numbers, and Specs**: Rendered in `Plus Jakarta Sans`. Property dimensions, currency amounts, geographical coordinates, and navigational elements prioritize tabular clarity and sharp geometry.
- **Label Caps**: Used for metadata flags, badge qualifiers, and table taxonomy, set in uppercase with deliberate tracking (`0.12em`) to maintain legibility at micro scales.

## Layout & Spacing

The layout is grounded in a fluid 12-column architectural grid with generous exterior margins that function as visual matte framing for property imagery.

- **Breakpoints**: Mobile (up to 767px, 4 columns, 1.5rem margins), Tablet (768px - 1023px, 8 columns, 2rem margins), Desktop (1024px+, 12 columns, 4rem margins, max container 1440px).
- **Rhythm & Structure**: Spacing utilizes an intentional cadence of structural breathing room (`space-lg` to `space-xl`) between narrative sections, juxtaposed with dense, disciplined metadata clusters (`space-xs` to `space-sm`) for architectural specifications and metrics.
- **Dividers**: Layout modules and list items are partitioned with 1px hairline dividers using the neutral token (`#EAE5DC`) rather than full gutters where high-density comparisons are required.

## Elevation & Depth

Visual hierarchy is established strictly through architectural surface planes and low-contrast borders rather than traditional drop shadows.

- **Flat Layering**: Cards, inputs, and modular panels sit directly on the warm canvas (`#F7F5F0`) or elevate slightly using `#FFFFFF` surfaces wrapped in a crisp `1px solid #EAE5DC` outline.
- **Ambient Shadows**: Traditional elevated surfaces are avoided. In rare floating interactive contexts (such as sticky property search bars or active dropdown menus), a singular diffused ambient shadow is permitted: `0 16px 36px -12px rgba(32, 35, 33, 0.08)`.
- **Overlays**: Image hover states utilize a sheer charcoal film transition (`rgba(32, 35, 33, 0.15)`) to emphasize depth without occluding architectural photography.

## Shapes

The design system employs a soft, architectural corner geometry (`roundedness: 1`). 

- **Structural Elements (Cards, Panels, Modals)**: Base radius of `4px` (`0.25rem`) to maintain crisp, planar architectural lines that emulate blueprint drawings and physical lookbooks.
- **Interactive Controls (Inputs, Standard Buttons)**: Bound by `4px` corner radii, creating structured, monolithic tap targets.
- **Filter Tags & Badges**: Exclusively utilize full pill geometry (`9999px`) to create intentional functional differentiation against rectilinear property cards.

## Components

### Buttons
- **Primary**: Solid Deep Charcoal (`#202321`) background with Secondary Warm Ivory (`#F7F5F0`) label, 4px border radius, 48px height, padded `1.5rem` laterally. Transitions on hover to `#353535`.
- **Secondary / Outline**: 1px border in `#202321`, transparent canvas, text `#202321`. Hover fills with `#202321` and inverts text to `#F7F5F0`.
- **Text Link**: `Playfair Display` italic or `Plus Jakarta Sans` with an enduring 1px hairline underline offset by 4px.

### Property Search & Filter Bar
- A monolithic modular bar styled with an off-white background (`#FFFFFF`) framed by `1px solid #EAE5DC`.
- Segmented into four inline partitions: **Type**, **Location**, **Budget**, and **Configuration**.
- Sub-labels are rendered in `label-caps` (`#6B6A65`), while active values appear in `body-md` (`#202321`). Partitions are separated by 1px vertical hairline dividers.
- Accompanied by a primary Deep Charcoal search trigger button at the end of the cluster.

### Property Cards
- Image frames enforce an architectural aspect ratio (4:3 or 16:10) with subtle image zoom micro-interactions (`transform: scale(1.03)`) on cursor hover.
- Badges sit pinned top-left with pill radii (`badge-surface` with `badge-text`).
- Bottom metadata group lists price formatted in tabular lining figures (`headline-sm`), followed by architectural specs (bed, bath, sq ft) divided by understated centered mid-dots (`·`) in `#6B6A65`.

### Chips & Filter Tabs
- Pill-shaped (`9999px`), `36px` height, featuring `1px solid #EAE5DC` when inactive with `#6B6A65` text.
- Active state transitions to `#202321` background with `#F7F5F0` text, or subtle gold tint (`#F4EFE6` with `#8C703B` text and border).

### Input Fields & Selectors
- Flat `#FFFFFF` or `#F7F5F0` base with a 1px border of `#EAE5DC`.
- Focus state shifts the border cleanly to `#B89A62` (Accent Gold) without outer glow rings.
- Placeholder text in `#6B6A65` using `body-md`.

### Checkboxes & Radio Controls
- Square 16px boxes with a 2px radius; radio buttons are circular.
- Unchecked: `1px solid #EAE5DC`. Checked: Solid `#202321` fill with an interior white check or dot.

### Floorplan & Gallery Lightbox
- High-fidelity viewer utilizing `#202321` as an 80% opacity backdrop blur, showcasing architectural drawings and high-resolution renders framed with `1px solid rgba(234, 229, 220, 0.2)`.