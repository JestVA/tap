import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

async function extractDataTuplesFromDoc(url) {
    try {
        // Fetch the content from the Google Doc
        const response = await fetch(url);
        const text = await response.text();

        // Parse the HTML content using jsdom
        const dom = new JSDOM(text);
        const document = dom.window.document;

        // Initialize an array to hold the parsed data tuples
        const dataTuples = [];

        // Find all the table rows <tr> in the document
        const rows = document.querySelectorAll('tr');

        // Process each row to extract x-coordinate, character, and y-coordinate
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length === 3) {
                const xText = cells[0].textContent.trim();
                const charText = cells[1].textContent.trim();
                const yText = cells[2].textContent.trim();

                // Handle potential non-breaking spaces and other whitespace issues
                const x = parseInt(xText.replace(/\u00A0/g, ''), 10);
                const char = charText.replace(/\u00A0/g, '');
                const y = parseInt(yText.replace(/\u00A0/g, ''), 10);

                if (!isNaN(x) && !isNaN(y) && char) {
                    // Push as an array (not a string) to dataTuples
                    dataTuples.push([x, char, y]);
                }
            }
        });

        // Now, pass the array of data tuples to the printGrid function
        printGrid(dataTuples);

    } catch (error) {
        console.error('Error fetching or processing the document:', error);
    }
}

function printGrid(data) {
    // Determine grid dimensions
    const maxX = Math.max(...data.map(([x, char, y]) => x));
    const maxY = Math.max(...data.map(([x, char, y]) => y));

    // Create an empty grid filled with spaces
    const grid = Array.from({ length: maxY + 1 }, () => Array(maxX + 1).fill(' '));

    // Fill the grid with the characters from the data
    data.forEach(([x, char, y]) => {
        grid[y][x] = char;
    });

    // Print the grid
    grid.forEach(row => {
        console.log(row.join(''));
    });
}

// Example usage:
const url = 'https://docs.google.com/document/d/e/2PACX-1vSHesOf9hv2sPOntssYrEdubmMQm8lwjfwv6NPjjmIRYs_FOYXtqrYgjh85jBUebK9swPXh_a5TJ5Kl/pub'; // Replace with the actual Google Doc URL
extractDataTuplesFromDoc(url);

