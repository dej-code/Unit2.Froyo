function processFlavors() {
    const input = document.getElementById('flavorInput').ariaValueMax;
    const flavorsArray = input.split(',').map(flavor => flavor.trim().toLowerCase());

    const flavorCounts = {};

    flavorsArray.forEach(flavor => {
        if (flavorCounts[flavor]) {
            flavorCounts[flavor]++;
        } else {
            flavorCounts[flavor] = 1;
        }
    });

    console.table(flavorCounts);
}