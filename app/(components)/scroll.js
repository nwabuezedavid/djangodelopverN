// Function to handle file input change event
const handleFileInputChange = (event) => {
    const file = event.target.files[0]; // Assuming single file selection
    if (file) {
        const reader = new FileReader();

        reader.onload = (event) => {
            const arrayBuffer = event.target.result;
            // Here 'arrayBuffer' is the ArrayBuffer representation of the video file
            console.log('Video as ArrayBuffer:', arrayBuffer);
            // You can now manipulate or send 'arrayBuffer' to a server, etc.
        };

        reader.readAsArrayBuffer(file);
    }
};

// Example HTML input element for file selection
<input type="file" onChange={handleFileInputChange} accept="video/*" />
