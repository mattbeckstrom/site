
#!/bin/bash
git pull --rebase origin main   # Fetch the latest changes
git add .
git commit -m "Auto-update website $(date)"
git push origin main
echo "Website updated!"
