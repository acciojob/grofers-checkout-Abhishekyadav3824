const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	const priceElements = document.querySelectorAll(".prices");
  let total = 0;

  priceElements.forEach(el => {
    total += Number(el.textContent);
  });

  // Get table
  const table = document.querySelector("table");

  // If total row already exists, remove it (to avoid duplicates)
  const existingRow = document.getElementById("totalRow");
  if (existingRow) {
    existingRow.remove();
  }

  // Create a new row and cell
  const totalRow = document.createElement("tr");
  totalRow.id = "totalRow"; // unique id to identify later
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; // span across both columns
  totalCell.textContent = "Total Price: " + total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
//Add your code here
  
};

getSumBtn.addEventListener("click", getSum);

