// test.js
// Path to the .wasm file
const wasmFile = 'test.wasm';

// Load the WebAssembly module
fetch(wasmFile)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to load ${wasmFile}: ${response.statusText}`);
    }
    return response.arrayBuffer();
  })
  .then(bytes => WebAssembly.instantiate(bytes))
  .then(({ instance }) => {
    // Access exported functions
    const wasmExports = instance.exports;
    console.log({ wasmExports })

    // Example: Call a function exported from the WebAssembly module
    if (wasmExports.add) {
      const result = wasmExports.add(5, 3); // Example function call
      document.getElementById('output').textContent = `Result from WebAssembly: ${result}`;
    } else {
      document.getElementById('output').textContent = 'No "add" function found in the WebAssembly module.';
    }
  })
  .catch(error => {
    console.error('Error loading or running the WebAssembly module:', error);
    document.getElementById('output').textContent = 'Error loading WebAssembly module.';
  });