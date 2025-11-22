# G1 Creative - Windows PowerShell Setup Script
# Run this script in PowerShell to automate the initial setup

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "   G1 Creative - Setup Script" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Blue
try {
    $nodeVersion = node -v
    Write-Host "✓ Node.js $nodeVersion found" -ForegroundColor Green
} catch {
    Write-Host "Node.js is not installed. Please install Node.js 18+ first." -ForegroundColor Yellow
    Write-Host "Visit: https://nodejs.org" -ForegroundColor Yellow
    exit 1
}
Write-Host ""

# Check if npm is installed
try {
    $npmVersion = npm -v
    Write-Host "✓ npm $npmVersion found" -ForegroundColor Green
} catch {
    Write-Host "npm is not installed. Please install npm first." -ForegroundColor Yellow
    exit 1
}
Write-Host ""

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Blue
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to install dependencies. Please check your internet connection." -ForegroundColor Yellow
    exit 1
}

Write-Host "✓ Dependencies installed" -ForegroundColor Green
Write-Host ""

# Install additional packages
Write-Host "Installing additional packages..." -ForegroundColor Blue
npm install lucide-react framer-motion class-variance-authority clsx tailwind-merge

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to install additional packages." -ForegroundColor Yellow
    exit 1
}

Write-Host "✓ Additional packages installed" -ForegroundColor Green
Write-Host ""

# Install dev dependencies
Write-Host "Installing dev dependencies..." -ForegroundColor Blue
npm install -D tailwindcss-animate

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to install dev dependencies." -ForegroundColor Yellow
    exit 1
}

Write-Host "✓ Dev dependencies installed" -ForegroundColor Green
Write-Host ""

# Create .env.local if it doesn't exist
if (-not (Test-Path .env.local)) {
    Write-Host "Creating .env.local file..." -ForegroundColor Blue
    Copy-Item .env.example .env.local
    Write-Host "✓ .env.local created" -ForegroundColor Green
    Write-Host "⚠ Remember to update .env.local with your actual values" -ForegroundColor Yellow
} else {
    Write-Host "✓ .env.local already exists" -ForegroundColor Green
}
Write-Host ""

# Create images directory if it doesn't exist
if (-not (Test-Path "public/images")) {
    Write-Host "Creating images directory..." -ForegroundColor Blue
    New-Item -ItemType Directory -Path "public/images" -Force | Out-Null
    Write-Host "✓ Images directory created" -ForegroundColor Green
} else {
    Write-Host "✓ Images directory exists" -ForegroundColor Green
}
Write-Host ""

# Success message
Write-Host "=========================================" -ForegroundColor Green
Write-Host "   Setup Complete! 🎉" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Blue
Write-Host "1. Update .env.local with your values"
Write-Host "2. Add your images to public/images/"
Write-Host "3. Customize content in app/ directory"
Write-Host "4. Run: npm run dev"
Write-Host ""
Write-Host "Documentation:" -ForegroundColor Blue
Write-Host "- Quick Start: QUICK_START.md"
Write-Host "- Setup Guide: SETUP.md"
Write-Host "- Customization: CUSTOMIZATION.md"
Write-Host ""
Write-Host "To start development server:" -ForegroundColor Green
Write-Host "  npm run dev"
Write-Host ""
Write-Host "Visit: http://localhost:3000" -ForegroundColor Green
Write-Host ""

