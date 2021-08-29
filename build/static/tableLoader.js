function updateTable(tbody, csvUrl){
    let req = new XMLHttpRequest();
    req.open('GET', csvUrl, true);
    req.onreadystatechange = function (aEvt) {
      if (req.readyState === 4) {
          if (req.status === 200){
              let csvRows = parseCsv(req.response);
              let htmlRows = createRows(csvRows);
              for (const row of htmlRows){
                  tbody.appendChild(row)
              }
          }
      }
    };
    req.send(null);
}

function createRows(rows) {
    let trows = [];
    for (let i=0;i<rows.length;i++){
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let td_0 = document.createElement("td");
        let td_1 = document.createElement("td");
        let td_2 = document.createElement("td");
        th.scope = "row";
        th.innerText = String(i);
        td_0.innerText = rows[i].lastname;
        td_1.innerText = rows[i].name;
        td_2.innerText = rows[i].dependence;
        tr.appendChild(th);
        tr.appendChild(td_0);
        tr.appendChild(td_1);
        tr.appendChild(td_2);
        trows.push(tr);
    }
    return trows;
}

function parseCsv(fullText) {
    let rows = []
    let arrayOfLines = fullText.match(/[^\r\n]+/g);
    for (const line of arrayOfLines.slice(2)){
        let columns = line.split(",", 3);
        rows.push({
            lastname: columns[0].replace(/["']/g, ""),
            name: columns[1].replace(/["']/g, ""),
            dependence: columns[2].replace(/["']/g, ""),
        })
    }
    return rows
}

console.log("tableLoader ready");
