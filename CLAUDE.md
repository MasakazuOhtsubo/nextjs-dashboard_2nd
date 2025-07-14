# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js dashboard application built with the App Router architecture, designed as a learning project from the Next.js App Router Course. The application demonstrates a complete dashboard with invoices, customers, and revenue management.

## Development Commands

### Primary Development Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint on all TypeScript/JavaScript files
- `pnpm prettier` - Format code with Prettier
- `pnpm prettier:check` - Check code formatting
- `pnpm test` - Run linting and formatting checks (no unit tests configured)

### Git Hooks

- Uses lefthook for pre-commit hooks
- Automatically runs Prettier on staged files before commits

## Architecture

### App Router Structure

- Uses Next.js 13+ App Router with file-based routing
- Root layout: `app/layout.tsx` - Global layout with Inter font
- Dashboard layout: `app/dashboard/layout.tsx` - Dashboard-specific layout with sidebar navigation
- Route groups: `(overview)` and `(shop)` for organizing dashboard routes without affecting URL structure

### Key Directories

- `app/lib/` - Shared utilities and data access layer
  - `data.ts` - Database queries using postgres client
  - `definitions.ts` - TypeScript type definitions
  - `utils.ts` - Utility functions
  - `placeholder-data.ts` - Sample data
- `app/ui/` - Reusable UI components organized by feature
  - `dashboard/` - Dashboard-specific components
  - `invoices/` - Invoice-related components
  - `customers/` - Customer-related components

### Database

- Uses PostgreSQL with the `postgres` npm package
- Database connection via `POSTGRES_URL` environment variable
- All queries are in `app/lib/data.ts`
- Type-safe queries using TypeScript definitions

### Styling

- Tailwind CSS for styling
- Custom theme extensions for colors and grid layouts
- Tailwind Forms plugin for form styling
- Global styles in `app/ui/global.css`

### Key Features

- Server-side rendering with Next.js App Router
- PostgreSQL integration for data persistence
- Search and pagination for invoices and customers
- Revenue dashboard with charts
- Responsive design with Tailwind CSS

## TypeScript Configuration

- Strict TypeScript setup with path aliases (`@/*` maps to `./*`)
- Type definitions centralized in `app/lib/definitions.ts`
- Incremental compilation enabled

## Code Quality

- ESLint with Next.js and Prettier configurations
- Prettier with Tailwind CSS plugin for class sorting
- Pre-commit hooks ensure code formatting
- Uses pnpm as package manager
