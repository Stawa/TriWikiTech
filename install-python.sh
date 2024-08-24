#!/bin/sh

# Install Python
if ! command -v python3 &> /dev/null
then
    echo "Python 3 not found. Installing Python 3..."
    curl -fsSL https://www.python.org/ftp/python/3.12.0/Python-3.12.0.tar.xz | tar -xJf - -C /usr/local --strip-components=1
    ln -sf /usr/local/bin/python3 /usr/bin/python3
    python3 --version
else
    echo "Python 3 is already installed at $(which python3)."
fi
