#!/bin/bash

# Whirly Wash - Asset Verification Script
# This script checks if all required assets are in place for deployment

echo "🔍 Whirly Wash - Deployment Readiness Check"
echo "=========================================="
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

MISSING_FILES=0
TOTAL_FILES=0

# Required asset files
ASSETS=(
    "2bc2e546e3fa7ac717c02d833b99fdec7166aea5.png"
    "28599dba92dd7aace354ca6fa32855e627a1d8ed.png"
    "39e2340f7aa6994865d43f4392da9012f6cd3189.png"
    "7027b1ad002627514ca6ca1d2e0249502dc53da7.png"
    "ae4c2b70749b41efb37b4aec776649aa6dd47718.png"
    "c881332f2cc51c7fd1d44ccfd573d7eafafaf317.png"
    "c8ea79bea63d8da910bb8fdff3767efc9f3ed2e3.png"
    "d02a4e56cfa8f074d700b4693aad210dfb4c739d.png"
)

echo "📁 Checking for required assets in src/assets/..."
echo ""

for asset in "${ASSETS[@]}"; do
    TOTAL_FILES=$((TOTAL_FILES + 1))
    if [ -f "src/assets/$asset" ]; then
        echo -e "${GREEN}✓${NC} Found: $asset"
    else
        echo -e "${RED}✗${NC} Missing: $asset"
        MISSING_FILES=$((MISSING_FILES + 1))
    fi
done

echo ""
echo "=========================================="

# Check if src/assets directory exists
if [ ! -d "src/assets" ]; then
    echo -e "${RED}✗${NC} src/assets/ directory not found!"
    echo -e "${YELLOW}  Action: Create the directory with:${NC}"
    echo "  mkdir -p src/assets"
    echo ""
fi

# Summary
if [ $MISSING_FILES -eq 0 ]; then
    echo -e "${GREEN}✓ All assets verified!${NC} ($TOTAL_FILES/$TOTAL_FILES)"
    echo ""
    echo "🚀 You're ready to deploy!"
    echo ""
    echo "Next steps:"
    echo "  1. git add src/assets/*"
    echo "  2. git commit -m 'Add image assets for deployment'"
    echo "  3. git push"
    echo "  4. Deploy to Netlify"
    exit 0
else
    echo -e "${RED}✗ Missing $MISSING_FILES asset(s)${NC} ($((TOTAL_FILES - MISSING_FILES))/$TOTAL_FILES found)"
    echo ""
    echo -e "${YELLOW}⚠️  Action Required:${NC}"
    echo "  1. Place all images in src/assets/ folder"
    echo "  2. Ensure filenames match exactly (case-sensitive)"
    echo "  3. Run this script again to verify"
    echo ""
    echo "See IMAGE-ASSETS-GUIDE.md for detailed instructions"
    exit 1
fi
