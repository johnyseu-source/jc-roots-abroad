# JC Roots Abroad - Color System Implementation

## Brand Palette

### Primary Colors

| Color | Hex | Name | Purpose |
|-------|-----|------|---------|
| **Forest Green** | #234034 | Primary Brand | Headers, footers, background fills, primary CTAs |
| **Warm Oak** | #B68A5A | Accent | Hover states, accents, badges, borders |
| **Soft Ivory** | #F8F6F1 | Background | Section backgrounds, light fills |
| **Slate Grey** | #2F3437 | Text | Body text, labels, readability |
| **Warm Sand** | #DCC982 | Highlight | Secondary accents, supporting text |

---

## Where Each Color Is Used

### Forest Green (#234034)
- **Header background** - Full width dark background with light text
- **Footer background** - Full width dark background
- **Hero section gradient** - Primary gradient start color
- **Values section background** - Dark container for cards
- **Design Customizer gradient** - Primary gradient start color
- **Story left box** - Dark background for quote
- **Reviews section background** - Dark container for testimonials
- **Business cards background** - Dark card fills
- **Buttons** - Primary button background (with hover to Warm Oak)
- **Card borders** - Various cards use Forest Green borders

### Warm Oak (#B68A5A)
- **Button hover states** - Changes from Forest Green to Warm Oak on hover
- **Links** - Navigation links and interactive elements
- **Accents** - Used throughout for visual hierarchy
- **Borders** - Top borders on cards, section dividers
- **Product price text** - Warm Oak colored prices
- **Labels and tags** - In badges and categorization

### Soft Ivory (#F8F6F1)
- **Products section background** - Light fill for shopping area
- **Business section background** - Light fill
- **Story section background** - Light fill
- **Text on dark backgrounds** - Used for readability
- **Design Customizer preview bg** - Light preview area background

### Slate Grey (#2F3437)
- **Body text** - All main paragraph text
- **Labels** - Form labels, descriptions
- **Secondary headings** - Smaller heading text
- **Supporting text** - Description copy

### Warm Sand (#DCC982)
- **Secondary text on dark backgrounds** - Description text on dark fills
- **Navigation hover text** - Navigation links change to Warm Sand
- **Supporting details** - Secondary information
- **Accent text** - Used for emphasis in testimonials

---

## Component Color Usage

### Header
- **Background**: Forest Green (#234034)
- **Logo**: Image
- **Brand text**: Soft Ivory (#F8F6F1)
- **Tagline**: Warm Oak (#B68A5A)
- **Navigation**: Warm Sand (#DCC982)
- **Nav hover**: Warm Oak (#B68A5A)
- **Instagram icon**: Warm Oak (#B68A5A)

### Hero
- **Background**: Forest Green gradient → darker green
- **Badge background**: Warm Oak (#B68A5A)
- **Badge text**: Soft Ivory (#F8F6F1)
- **Main headline**: Soft Ivory (#F8F6F1)
- **Subheadline**: Warm Sand (#DCC982)
- **Primary button**: Warm Oak (#B68A5A) with hover to Warm Sand
- **Secondary button**: Transparent with Warm Oak border

### Values
- **Background**: Forest Green (#234034)
- **Card backgrounds**: Transparent with Forest Green tint
- **Card borders**: Alternating Warm Oak & Warm Sand
- **Card titles**: Soft Ivory (#F8F6F1)
- **Card text**: Warm Sand (#DCC982)
- **Icons**: Color matches border

### Products
- **Section background**: Soft Ivory (#F8F6F1)
- **Section border**: Warm Oak (#B68A5A) top border (3px)
- **Heading**: Forest Green (#234034)
- **Product cards**: White with colored top border
- **Top border color**: Alternating Warm Oak & Warm Sand
- **Price text**: Matches card border color

### Design Customizer
- **Background**: Forest Green gradient
- **Label badge**: Warm Oak (#B68A5A) with Forest Green text
- **Heading**: Soft Ivory (#F8F6F1)
- **Body text**: Warm Sand (#DCC982)
- **Button**: Warm Oak (#B68A5A) with Forest Green text
- **Preview box**: Soft Ivory (#F8F6F1) with Warm Oak border (2px)
- **Input borders**: Warm Oak (#B68A5A) (2px)

### Story
- **Section background**: Soft Ivory (#F8F6F1)
- **Section border**: Forest Green (#234034) top border (3px)
- **Heading underline**: Warm Oak (#B68A5A) bottom border
- **Body text**: Slate Grey (#2F3437)
- **Quote box background**: Forest Green (#234034)
- **Quote box border**: Warm Oak (#B68A5A) left border (4px)
- **Quote text**: Warm Sand (#DCC982)
- **Image box**: Forest Green gradient
- **Image box border**: Warm Oak (#B68A5A) (3px)

### Reviews
- **Section background**: Forest Green (#234034)
- **Section border**: Warm Oak (#B68A5A) top border (3px)
- **Heading**: Soft Ivory (#F8F6F1)
- **Review cards**: Transparent with color tint
- **Card borders**: Alternating Warm Oak & Warm Sand (2px)
- **Card left border**: Colored accent (4px)
- **Stars**: Matching card accent color
- **Review text**: Warm Sand (#DCC982)
- **Author name**: Matching card accent color

### Business
- **Section background**: Soft Ivory (#F8F6F1)
- **Section border**: Forest Green (#234034) top border (3px)
- **Heading**: Forest Green (#234034)
- **Body text**: Slate Grey (#2F3437)
- **Service cards background**: Forest Green (#234034)
- **Card borders**: Warm Oak & Warm Sand alternating (2px)
- **Card top border**: Colored accent (4px)
- **Card title**: Matching accent color
- **Card text**: Warm Sand (#DCC982)

### Footer
- **Background**: Forest Green (#234034)
- **Border top**: Warm Oak (#B68A5A) (3px)
- **Brand heading**: Soft Ivory (#F8F6F1)
- **Brand tagline**: Warm Oak (#B68A5A)
- **Description text**: Warm Sand (#DCC982)
- **Section headings**: Warm Oak (#B68A5A)
- **Links**: Warm Sand (#DCC982)
- **Link hover**: Warm Oak (#B68A5A)
- **Social icon**: Warm Oak (#B68A5A)

---

## Color Accessibility

- **High Contrast Text**: Soft Ivory on Forest Green = AAA compliant
- **Warm Sand on Dark**: Sufficient contrast for readability
- **Warm Oak accents**: Stand out clearly against both light and dark backgrounds
- **Slate Grey on Soft Ivory**: AAA compliant

---

## Customization Guide

To adjust the color system globally:

1. Find and replace in components:
   - `#234034` → Forest Green (primary dark)
   - `#B68A5A` → Warm Oak (accent)
   - `#F8F6F1` → Soft Ivory (light fill)
   - `#2F3437` → Slate Grey (text)
   - `#DCC982` → Warm Sand (highlight)

2. Update specific sections by editing individual component files

3. Test colors for accessibility using contrast checkers

---

## Color System Benefits

✅ **Cohesive Brand Identity** - Consistent colors create professional appearance  
✅ **Hierarchy & Navigation** - Colors guide users through content  
✅ **Emotional Connection** - Warm tones convey craftsmanship and warmth  
✅ **Accessibility** - High contrast ensures readability  
✅ **Flexibility** - System works for light and dark surfaces  

---

## Future Extensions

The color system can be extended to support:
- Social media graphics
- Email templates
- Print materials
- Product photography overlays
- Brand merchandise
- Packaging design
