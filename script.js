function processFlavors() {
    const input = document.getElementById('flavorInput').value;
    
    const flavorsArray = input.split(',').map(flavor => flavor.trim().toLowerCase());

    const flavorList = [];

    flavorsArray.forEach(flavor => {
        const flavorIndex = flavorList.findIndex(item => item.name === flavor);
        
        if (flavorIndex !== -1) {
            flavorList[flavorIndex].count++;
        } else {
            flavorList.push({ name: flavor, count: 1 });
        }
    });

    console.table(flavorList);
}
