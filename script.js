// Mock data for demonstration purposes
const trains = [
    { id: 1, name: 'Express 101', fareAC1: 2000, fareAC2: 1600, fareAC3: 1200, fareGeneral: 600 },
    { id: 2, name: 'Rajdhani 202', fareAC1: 2500, fareAC2: 2000, fareAC3: 1500, fareGeneral: 800 },
    { id: 3, name: 'Shatabdi 303', fareAC1: 1800, fareAC2: 1400, fareAC3: 1000, fareGeneral: 500 }
    // Add more train data as needed
];

let selectedTrain;
let totalFare = 0;
let passengerCount = 1;

function authenticate() {
    // Implement authentication logic here
    // For simplicity, assume authentication is successful
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('main-container').style.display = 'block';
}

function searchTrains() {
    const date = document.getElementById('date').value;
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;

    // Implement train search logic here based on date, source, and destination
    // For simplicity, just display a mock train
    selectedTrain = trains[0];

    // Display the selected train
    const trainList = document.getElementById('train-list');
    trainList.innerHTML = `
        <h3>Available Trains:</h3>
        <p>${selectedTrain.name}</p>
        <p>Fare (AC1): ₹${selectedTrain.fareAC1}</p>
        <p>Fare (AC2): ₹${selectedTrain.fareAC2}</p>
        <p>Fare (AC3): ₹${selectedTrain.fareAC3}</p>
        <p>Fare (General): ₹${selectedTrain.fareGeneral}</p>
    `;
    trainList.style.display = 'block';

    // Display passenger details form
    showPassengerDetailsForm();
}

function showPassengerDetailsForm() {
    const passengerDetails = document.getElementById('passenger-details');
    passengerDetails.innerHTML = `
        <h3>Passenger ${passengerCount} Details:</h3>
        <div id="passenger-${passengerCount}">
            <label for="name">Passenger Name:</label>
            <input type="text" id="name" placeholder="Enter name">
            <label for="age">Age:</label>
            <input type="text" id="age" placeholder="Enter age">
            <label for="sex">Sex:</label>
            <select id="sex">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <label for="tier">Tier:</label>
            <select id="tier">
                <option value="AC1">AC1</option>
                <option value="AC2">AC2</option>
                <option value="AC3">AC3</option>
                <option value="General">General</option>
            </select>
            <label for="berth">Berth:</label>
            <select id="berth">
                <option value="lower">Lower</option>
                <option value="upper">Upper</option>
                <option value="middle">Middle</option>
            </select>
            <label for="food">Food:</label>
            <input type="checkbox" id="food">
        </div>
    `;
    passengerDetails.style.display = 'block';
}

function addPassenger() {
    passengerCount++;
    showPassengerDetailsForm();
}

function submitBooking() {
    // Implement booking submission logic here
    // For simplicity, just calculate total fare based on selected tier
    totalFare = 0;
    for (let i = 1; i <= passengerCount; i++) {
        const tier = document.getElementById(`tier`).value;
        switch (tier) {
            case 'AC1':
                totalFare += selectedTrain.fareAC1;
                break;
            case 'AC2':
                totalFare += selectedTrain.fareAC2;
                break;
            case 'AC3':
                totalFare += selectedTrain.fareAC3;
                break;
            case 'General':
                totalFare += selectedTrain.fareGeneral;
                break;
        }
    }

    // Display ticket details
    const ticketDetails = document.getElementById('ticket-details');
    ticketDetails.innerHTML = `
        <h2>Booking Successful</h2>
        <p>Train: ${selectedTrain.name}</p>
        <p>Total Fare: ₹${totalFare}</p>
        <p>Passenger Count: ${passengerCount}</p>
        <!-- Display individual passenger details here -->
    `;

    // Redirect to ticket display page
    document.getElementById('main-container').style.display = 'none';
    ticketDetails.style.display = 'block';
}
