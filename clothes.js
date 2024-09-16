var id = 0;
const add = () => {
    let productName = document.querySelector("#name").value;
    let qty = document.querySelector("#qty").value;
    let unitPrice = document.querySelector("#unitPrice").value;
    if (productName == ''){
      alert('Enter product you want to buy!');
    } else if (qty == 0){
      alert('Enter quantity of products you want to buy!');
    } else if (unitPrice == 0) {
      alert('Enter unit price of products you want to buy!');
    } else {
      id++;
      let sub = qty * unitPrice;
      let row = "<tr>";
      row += "<td>" + id + "</td>";
      row += "<td>" + productName + "</td>";
      row += "<td>" + qty + "</td>";
      row += "<td>" + unitPrice + "</td>";
      row += "<td>" + sub.toFixed(2) + "</td>";
      row += "</tr>";
      document.querySelector("#product").innerHTML += row;
      document.querySelector("#total").innerHTML =  (parseFloat(document.querySelector('#total').innerHTML) + sub).toFixed(2);
    }
    
    
};