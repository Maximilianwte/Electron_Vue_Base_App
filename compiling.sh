# This script is for automatic packaging with electron, vue and python.

rm -rf dist_electron/

# Step 1. Python build - just includes .pyc not source code ok
# Unsure about the whole python packaging part
#pyinstaller ./src/logic/python/server.py

# Step 2. 
npm run electron:build