#!/bin/bash

# Auto-switch .env.local based on the current git branch.
# Run manually (npm run env:switch) or wire it into a post-checkout git hook.
#   main branch → Eram Soft PROD Sanity project (x1l7ag57)
#   any other   → Eram Soft DEV  Sanity project (exk3777z)

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

BRANCH=$(git -C "$PROJECT_DIR" branch --show-current)

if [ "$BRANCH" = "main" ]; then
    echo "Switching to PRODUCTION environment (x1l7ag57)"
    cp "$PROJECT_DIR/.env.prod" "$PROJECT_DIR/.env.local"
else
    echo "Switching to DEV environment (exk3777z)"
    cp "$PROJECT_DIR/.env.dev" "$PROJECT_DIR/.env.local"
fi

echo "Done! Using .env.local for branch: $BRANCH"
