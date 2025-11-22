#!/bin/bash

# G1 Creative - Automated Setup Script
# This script helps automate the initial setup process

echo "========================================="
echo "   G1 Creative - Setup Script"
echo "========================================="
echo ""

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
echo -e "${BLUE}Checking Node.js installation...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}Node.js is not installed. Please install Node.js 18+ first.${NC}"
    echo "Visit: https://nodejs.org"
    exit 1
fi

NODE_VERSION=$(node -v)
echo -e "${GREEN}✓ Node.js ${NODE_VERSION} found${NC}"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${YELLOW}npm is not installed. Please install npm first.${NC}"
    exit 1
fi

NPM_VERSION=$(npm -v)
echo -e "${GREEN}✓ npm ${NPM_VERSION} found${NC}"
echo ""

# Install dependencies
echo -e "${BLUE}Installing dependencies...${NC}"
npm install

if [ $? -ne 0 ]; then
    echo -e "${YELLOW}Failed to install dependencies. Please check your internet connection.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Dependencies installed${NC}"
echo ""

# Install additional packages
echo -e "${BLUE}Installing additional packages...${NC}"
npm install lucide-react framer-motion class-variance-authority clsx tailwind-merge

if [ $? -ne 0 ]; then
    echo -e "${YELLOW}Failed to install additional packages.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Additional packages installed${NC}"
echo ""

# Install dev dependencies
echo -e "${BLUE}Installing dev dependencies...${NC}"
npm install -D tailwindcss-animate

if [ $? -ne 0 ]; then
    echo -e "${YELLOW}Failed to install dev dependencies.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Dev dependencies installed${NC}"
echo ""

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo -e "${BLUE}Creating .env.local file...${NC}"
    cp .env.example .env.local
    echo -e "${GREEN}✓ .env.local created${NC}"
    echo -e "${YELLOW}⚠ Remember to update .env.local with your actual values${NC}"
else
    echo -e "${GREEN}✓ .env.local already exists${NC}"
fi
echo ""

# Create images directory if it doesn't exist
if [ ! -d "public/images" ]; then
    echo -e "${BLUE}Creating images directory...${NC}"
    mkdir -p public/images
    echo -e "${GREEN}✓ Images directory created${NC}"
else
    echo -e "${GREEN}✓ Images directory exists${NC}"
fi
echo ""

# Success message
echo -e "${GREEN}=========================================${NC}"
echo -e "${GREEN}   Setup Complete! 🎉${NC}"
echo -e "${GREEN}=========================================${NC}"
echo ""
echo -e "${BLUE}Next steps:${NC}"
echo "1. Update .env.local with your values"
echo "2. Add your images to public/images/"
echo "3. Customize content in app/ directory"
echo "4. Run: npm run dev"
echo ""
echo -e "${BLUE}Documentation:${NC}"
echo "- Quick Start: QUICK_START.md"
echo "- Setup Guide: SETUP.md"
echo "- Customization: CUSTOMIZATION.md"
echo ""
echo -e "${GREEN}To start development server:${NC}"
echo "  npm run dev"
echo ""
echo -e "${GREEN}Visit: http://localhost:3000${NC}"
echo ""

