var id = 0;
var total = 0;
const sell = () => {
  id++;
  var productName = document.querySelector("#name").value;
  var qty = document.querySelector("#qty").value;
  var unitPrice = document.querySelector("#unitPrice").value;
  var sub = qty * unitPrice;
  total += sub;
  var row = "<tr>";
  row += "<td>" + id + "</td>";
  row += "<td>" + productName + "</td>";
  row += "<td>" + qty + "</td>";
  row += "<td>" + unitPrice + "</td>";
  row += "<td>" + sub.toFixed(2) + "</td>";
  row += "</tr>";
  document.querySelector("#product").innerHTML += row;
  document.querySelector("#total").innerHTML =  total.toFixed(2);
};