#!/bin/bash
git add .
git commit -m "Auto-update website $(date)"
git push origin main
echo "Website updated!"
