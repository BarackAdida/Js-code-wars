document.getElementById('saveButton').addEventListener('click', function() {
    // Get the content of the textarea
    const content = document.getElementById('documentContent').value;

    // Create a Blob from the content
    const blob = new Blob([content], { type: 'text/plain' });

    // Create a link element
    const link = document.createElement('a');

    // Create a URL for the Blob and set it as the href attribute
    link.href = URL.createObjectURL(blob);

    // Set the download attribute with a filename
    link.download = 'document.txt';

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
});
