# Use the official Emscripten image
FROM emscripten/emsdk:3.1.74

# Set the working directory
WORKDIR /workspace

# Copy the source code into the container
COPY . .

# Install any additional packages if necessary (optional)
# Ensure to clean up cache to minimize image size
RUN apt-get update && \
    apt-get install -y build-essential && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*