var from = document.getElementById("fromdate");
var to = document.getElementById("todate");

var fromDate=from.value;
var endDate=to.value;

const apiUrl = `http://api.coindesk.com/v1/bpi/historical/close.json?start=${fromDate}&end=${endDate}`;

axios
  .get(apiUrl)
  .then(responseFromAPI => {
    printTheChart(responseFromAPI.data);})
  .catch(err => console.log("Error while getting the data: ", err));

function printTheChart(stockData) {
  console.log("salut");
  const bpi = stockData.bpi;
  const stockDates = Object.keys(bpi);
  const stockPrices = Object.values(bpi);

  const ctx = document.getElementById("myChart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: stockDates,
      datasets: [
        {
          label: "Bitcoin price index",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: stockPrices
        }
      ]
    }
  });
}  

function sDatemodify(){
  fromDate=from.value;

  axios
  .get(apiUrl)
  .then(responseFromAPI => {
    printTheChart(responseFromAPI.data);})
  .catch(err => console.log("Error while getting the data: ", err));

}

function eDatemodify(){
  console.log("hello");
  endDate=to.value;
  axios
  .get(apiUrl)
  .then(responseFromAPI => {
    printTheChart(responseFromAPI.data);})
  .catch(err => console.log("Error while getting the data: ", err));
  }



from.addEventListener('change',sDatemodify());
to.addEventListener('change',eDatemodify());