const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	const priceElements = document.querySelectorAll(".prices");
  let total = 0;

  priceElements.forEach(el => {
    // Trim text and convert to number
    total += Number(el.textContent.trim());
  });

  // Get table
  const table = document.querySelector("table");

  // If total row already exists, remove it
  const existingRow = document.getElementById("totalRow");
  if (existingRow) {
    existingRow.remove();
  }

  // Create a new row and cell
  const totalRow = document.createElement("tr");
  totalRow.id = "totalRow"; 
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; 
  totalCell.textContent = "Total Price: " + total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
//Add your code here
  
};

getSumBtn.addEventListener("click", getSum);

