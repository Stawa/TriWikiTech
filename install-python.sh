#!/bin/bash

# Install Python to /opt/python
INSTALL_DIR="/opt/python"
echo "Installing Python to $INSTALL_DIR..."

# Create the directory
mkdir -p $INSTALL_DIR

# Download and extract Python
curl -fsSL https://www.python.org/ftp/python/3.12.0/Python-3.12.0.tgz | tar -xzf - -C /tmp

# Build and install Python
cd /tmp/Python-3.12.0
./configure --prefix=$INSTALL_DIR --enable-optimizations
make
make install

# Clean up
rm -rf /tmp/Python-3.12.0

# Verify installation
echo "Python installation complete. Checking version..."
$INSTALL_DIR/bin/python3 --version

# Add to PATH (for current session)
echo "Updating PATH..."
export PATH=$INSTALL_DIR/bin:$PATH

# For future sessions, add PATH update to .bashrc or equivalent
if ! grep -q "$INSTALL_DIR/bin" ~/.bashrc; then
    echo "export PATH=$INSTALL_DIR/bin:$PATH" >> ~/.bashrc
    echo "Updated .bashrc with new PATH."
fi
