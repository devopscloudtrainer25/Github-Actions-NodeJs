
#!/bin/bash

set -e

echo "Starting deployment..."

if [ ! -d "dist" ]; then
  echo "ERROR: dist directory not found"
  exit 1
fi

echo "Build artifacts found:"
ls -la dist/

echo "Deployment completed successfully (demo only)."
