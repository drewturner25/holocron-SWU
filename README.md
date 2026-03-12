# Holocron - SWU
 > Star Wars Unlimited collection tracker and deck builder - track your cards, build decks, compare what you own vs. what you need, and export directly to TCGPlayer.

 ---

 ## Table of Contents

 - [Overview](#overview)
 - [Features](#features)
 - [Tech Stack](#tech-stack)
 - [Project Structure](#project-structure)
 - [Getting Started](#getting-started)
 - [Environment Variables](#environment-variables)
 - [Database](#database)
 - [Usage](#usage)
 - [Import & Export](#import--export)
 - [Roadmap](#roadmap)
 - [Contributing](#contributing)
 - [License](#license)

 ---

 ## Overview
 Holocron SWU is a personal collection management app for Star Wars Unlimited players. It lets you catalog your physical card collection, build and manage decks, track card values, and export data in formats useful for trading or purchasing missing cards on TCGPlayer. 

 ---

 ## Features
 - **Collection Tracking** - Log every card you own with quantities and current market value
 - **Deck Builder** - Create and manage decks within the app, with automatic value calculation
 - **Collection vs Deck Comparison** - See at a glance which cards in a deck you already own and which you still need
 - **TCGPlayer Export** - Export a full deck or only missing cards as a TCGPlayer mass entry list
 - **Shareable Collection Export** - Export your tradeable collection as a spreadsheet or sharable format
 - **In Play Toggle** - Marks decks as "In Play" to exclude their cards from your shareable trade list
 - **Spreadsheet Import** - Import existing collection data via '.csv' or '.xlsx'
 - **Filters** - Filter your collection by set, type, rarity, ownership status, and deck inclusion

 ---

 ## Tech Stack

 | Layer | Technology |
 |---|---|
 | Framework | [Next.js](https://nextjs.org/) (App Router) |
 | UI | [React](https://react.dev/) |
 | Styling | [Tailwind CSS](https://tailwindcss.com/) |
 | Database | ??? (Potentially MongoDB, Supabase) |
 | Auth | ???(need to decide DB) |
 | Data Fetching | Next.js Server Actions |
 | Language | TypeScript, ??? |

 ---

 ## Project Structure

 ...
 holocron-SWU/ (Owen Implementation)

 ---

 ## Getting Started

 ### Prerequisites
 - Node.js 18+
 - npm
 - ??? (need to decide DB)

 ### Installation
 - TBD (need to decide DB)

 ---

 ## Environment Variables

 - TBD (need to decide DB)

 ---

 ## Database

 - TBD (need to decide DB)

 ### Core Tables

 | Table | Description |
 |---|---|
 | 'cards' | Master card data synced from the SWU API |
 | 'collection' | User's owned cards with quantities |
 | 'decks' | User created decks |
 | 'deck_cards' | Cards within each deck with quantities |

 ---

 ## Usage

 ### Collection
 - Add cards to your collection manually or via spreadsheet import
 - Filter by set, rarity, aspect, or whether a card is currently in a deck
 - Toggle between viewing your full collection or only cards not assigned to any deck

 ### Deck Builder
 - Create a new deck and search / add cards from the full SWU card pool vs legal SWU card pool
 - The deck view shows which cards you already own (green) vs. still need (red)
 - Each deck displays its total estimated market value

 ### 'In Play' Toggle
 - Mark any deck as **In Play** to flag its cards as actively being used
 - When exporting your shareable trade list, you can choose to exclude cards from In Play decks

 ---

 ## Import & Export

 ### Import

 - Upload a '.csv' or '.xlsx' file to bulk import your collection
 - Expected columns: 'card_name', 'set', 'quantity' 

 ### Export Options
 
 | Export Type | Format | Description |
 |---|---|---|
 | Full Deck | TCGPlayer mass entry | All cards in the deck |
 | Missing Cards Only | TCGPlayer mass entry | Cards in the deck the user does not own |
 | Trade List | '.csv' / sharable text | Your collection minus 'In Play' decks (optional) |

 ---

 ## Roadmap 

 - [ ] Decide database
 - [ ] Project scaffolding
 - [ ] Fill in README after deciding database and project structure
 - [ ] SWU API integration (server side)
 - [ ] Collection CRUD with spreadsheet import
 - [ ] Deck builder with owned / missing comparison
 - [ ] TCGPlayer values implementation (card value tracking)
 - [ ] TCGPlayer mass entry export
 - [ ] Trade list export with 'In Play' toggle
 - [ ] Collection filters (set, rarity, aspect, cost, deck status)
 - [ ] Auth
 - [ ] Mobile responsive UI

 --- 
 
 ## Contributing

 Personal project between Drew Turner, Jacob Woods, Owen Schuldt

 ---

 ## License

 TBD

 ---



