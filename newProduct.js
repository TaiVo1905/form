var id = 0;
const sell = () => {
  let productName = document.querySelector("#name").value;
  let qty = document.querySelector("#qty").value;
  let unitPrice = document.querySelector("#unitPrice").value;
  let discount = document.querySelector("#discount").value;
  console.log(discount);
  if (productName == ''){
    alert('Enter product you want to buy!');
  } else if (qty == 0){
    alert('Enter quantity of products you want to buy!');
  } else if (unitPrice == 0) {
    alert('Enter unit price of products you want to buy!');
  } else {
    if (discount == 0) {
      discount = 0;
    }
    id++;
    let sub = qty * unitPrice * (1 - discount / 100);
    let row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + productName + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + unitPrice + "</td>";
    row += "<td>" + discount + "%</td>";
    row += "<td>" + sub.toFixed(2) + "</td>";
    row += "</tr>";
    document.querySelector("#tbl").innerHTML += row;
  }
};

const cancel = () => {
  document.forms['frm'].reset();
}