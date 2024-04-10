document.getElementById('calculateButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const checkIn = document.getElementById('checkIn').value;
    const totalDays = parseInt(document.getElementById('totalDays').value);
    const totalPersons = parseInt(document.getElementById('totalPersons').value);
    const advanceAmount = parseInt(document.getElementById('advanceAmount').value);
    const roomType = document.getElementById('roomType').value;
    const ac = document.getElementById('ac').checked;
    const locker = document.getElementById('locker').checked;

    let roomRate = 0;
    let amenitiesCost = 0;

    if (roomType === 'Delux') {
        roomRate = 100;
    } else if (roomType === 'Suite') {
        roomRate = 150; 
    }

    if (ac) {
        amenitiesCost += 50; 
    }

    if (locker) {
        amenitiesCost += 20; 
    }

    let totalRoomCost = roomRate * totalDays;
    let totalCost = totalRoomCost + amenitiesCost + (totalPersons > 1 ? (totalPersons - 1) * 100 : 0);
    let balance = totalCost - advanceAmount;

    document.getElementById('totalCost').value = totalCost;
    document.getElementById('balance').value = balance;
});
