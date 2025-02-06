let selectedDate = "";
let availableStates = [];

function fetchStates() {
    selectedDate = document.getElementById('date').value;

    if (!selectedDate) return;

    console.log("Selected Date (input): ", selectedDate);

    const formattedDate = selectedDate;
    console.log("Formatted Date for API: ", formattedDate);

    fetch('https://api.rootnet.in/covid19-in/stats/history')
        .then(response => response.json())
        .then(data => {
            console.log("API Response: ", data);

            let historyData = data.data.find(entry => entry.day === formattedDate);
            if (!historyData) {
                alert("No data found for this date.");
                console.log("No data found for this date.");
                return;
            }

            availableStates = historyData.regional;

            let stateCardsContainer = document.getElementById('stateCardsContainer');
            stateCardsContainer.innerHTML = '';

            availableStates.forEach(stateData => {
                let card = document.createElement('div');
                card.className = 'state-card';
                card.onclick = function () {
                    displayCovidData(stateData);
                };

                console.log("State Data: ", stateData);

                let confirmed = stateData.totalConfirmed !== undefined ? stateData.totalConfirmed : 'Data not available';
                let discharged = stateData.discharged !== undefined ? stateData.discharged : 'Data not available';
                let deaths = stateData.deaths !== undefined ? stateData.deaths : 'Data not available';

                card.innerHTML = `
                    <h3>${stateData.loc}</h3>
                    <p>Confirmed: ${confirmed}</p>
                    <p>Discharged: ${discharged}</p>
                    <p>Deaths: ${deaths}</p>
                `;
                stateCardsContainer.appendChild(card);
            });
        })
        .catch(error => {
            alert("Error fetching data: " + error);
            console.error("Error details:", error);
        });
}

function displayCovidData(data) {
    let stateName = document.getElementById('stateName');
    let confirmedDetail = document.getElementById('confirmed');
    let dischargedDetail = document.getElementById('discharged');
    let deathsDetail = document.getElementById('deaths');
    let covidDetail = document.getElementById('covidDetail');

    console.log("State Data (clicked): ", data);

    let confirmed = data.totalConfirmed !== undefined ? data.totalConfirmed : 'Data not available';
    let discharged = data.discharged !== undefined ? data.discharged : 'Data not available';
    let deaths = data.deaths !== undefined ? data.deaths : 'Data not available';

    stateName.textContent = `${data.loc} - ${selectedDate}`;
    confirmedDetail.textContent = `Confirmed: ${confirmed}`;
    dischargedDetail.textContent = `Discharged: ${discharged}`;
    deathsDetail.textContent = `Deaths: ${deaths}`;

    covidDetail.style.display = 'block';
}