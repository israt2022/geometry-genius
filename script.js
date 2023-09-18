let serial = 0;

//change random color help by google
function changeRandomBgColor(e) {
  var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  e.style.background = color + "30";
}

// back to default color
function changeDefaultBgColor(e) {
  e.style.background = "#fff";
}

// 
function calculate(type) {
  if (type === "triangle") {
    triangleCalculate();
  }else if (type === "ractangle") {
    ractangleCalculate();
  }else if(type === "parallelogram"){
    parallelogramCalculate();
  }else if (type === "rhombus"){
    rhombusCalculate();
  }else if (type === "pentagon"){
    pentagonCalculate();
  }else if (type === "ellipse"){
    ellipseCalculate();
  }
  else {
    alert("something went wrong!!!");
  }
}

// get value
function triangleCalculate() {
  let b = document.getElementById("triangleInput1").valueAsNumber;
  let h = document.getElementById("triangleInput2").valueAsNumber;
  document.getElementById("triangleInput1").value =null;
  document.getElementById("triangleInput2").value =null;
  if (validation("Base", b) && validation("Height", h)) {
    let result = 0.5 * b * h;
    serial++;
    addRow("Triangle", result);
  }
}


function ractangleCalculate() {
    let w = document.getElementById("rectangleInput1").valueAsNumber;
    let l = document.getElementById("rectangleInput2").valueAsNumber;
    document.getElementById("rectangleInput1").value =null;
    document.getElementById("rectangleInput2").value =null;
    if (validation("Width",w) && validation("Length", l)) {
      let result = w*l;
      serial++;
      addRow("Ractangle", result);
    }
  }

  function parallelogramCalculate() {
    let b = document.getElementById("parallelogramInput1").valueAsNumber;
    let h = document.getElementById("parallelogramInput2").valueAsNumber;
    document.getElementById("parallelogramInput1").value =null;
    document.getElementById("parallelogramInput2").value =null;
    if (validation("Base", b) && validation("Height", h)) {
      let result = b * h;
      serial++;
      addRow("Parallelogram", result);
    }
  }

  function rhombusCalculate() {
    let d1 = document.getElementById("rhombusInput1").valueAsNumber;
    let d2 = document.getElementById("rhombusInput2").valueAsNumber;
    document.getElementById("rhombusInput1").value =null;
    document.getElementById("rhombusInput2").value =null;
    if (validation("Diagonal1", d1) && validation("Diagonal2", d2)) {
      let result = 0.5 * d1 *d2;
      serial++;
      addRow("rhombus", result);
    }
  }

  function pentagonCalculate() {
    let p = document.getElementById("pentagonInput1").valueAsNumber;
    let b = document.getElementById("pentagonInput2").valueAsNumber;
    document.getElementById("pentagonInput1").value =null;
    document.getElementById("pentagonInput2").value =null;
    if (validation("Side", p) && validation("base", b)) {
      let result = 0.5 * p *b;
      serial++;
      addRow("pentagon", result);
    }
  }

  function ellipseCalculate() {
    let a = document.getElementById("ellipseInput1").valueAsNumber;
    let b = document.getElementById("ellipseInput2").valueAsNumber;
    document.getElementById("ellipseInput1").value =null;
    document.getElementById("ellipseInput2").value =null;
    if (validation("Side", a) && validation("base",b)) {
      let result = 3.14 * a *b;
      serial++;
      addRow("ellipse", result);
    }
  }
  

function addRow(type, value) {
  const container = document.getElementById("result");
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td>${serial}</td>
      <td>${type}</td>
      <td><span>${value.toFixed(2)}cm</span><sup>2</sup></td> 
      <td">
      <button class="btn btn-sm bg-indigo-500 p-1" onclick="convert(${
        "row" + serial
      })">Convert</button>
      <button class="btn btn-sm bg-indigo-500 p-1" onclick="removeRow(${
        "row" + serial
      })">x</button>
      </td>
      
    `;
  tr.setAttribute("id", "row" + serial);
  container.appendChild(tr);
  // document.getElementById("total-product").innerText = serial;
}

// validation condition:
// value can't be empty
// value can't be negetvie
// value can't be 0
// value can't be string

function validation(name, input) {
  if (isNaN(input)) {
    alert(name + " value is empty");
  } else if (typeof input === "string") {
    alert(name + " value can not be string");
  } else if (input == 0) {
    alert(name + " value can not be zero");
  } else if (input < 0) {
    alert(name + " value can not be negetvie");
  } else {
    return true;
  }
  return false;
}

function removeRow(row) {
  row.remove();
}

function convert(row) {
  let valueType = row.children[2];
  valueType = valueType.children[0].innerHTML;
  let value;
  if (valueType.search("cm") >= 0) {
    value = valueType.replace("cm", "");
    value = value / 1000 + "m";
  } else {
    value = valueType.replace("m", "");
    value = value * 1000 + "cm";
  }

  row.children[2].children[0].innerHTML = value;
  //    console.log(value);
  //    console.log(tdField,value);
}
