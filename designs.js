         // Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

document.querySelector('#sizePicker').addEventListener("submit",function(event){event.preventDefault();makeGrid();});  

function makeGrid() {
  var i,j;
  //getting height,weight entered by the user
  var h=document.querySelector('#inputHeight').value;
  var w=document.querySelector('#inputWidth').value;
  var body = document.querySelector('#pixelCanvas');
//creating table
  if(body.innerHTML.length!=0)
  {
    for(i=0;i<body.innerHTML.length/2;i++)
    {
      body.deleteRow(0);
    }
  }
  for(i=0;i<h;i++)
  { var row = document.createElement("tr");
    for(j=0;j<w;j++)
    {var cell = document.createElement("td"); 
       row.appendChild(cell);
    // cell.addEventListener("click",function (event){event.preventDefault(); fillcolor(cell)});
        
    }
	body.appendChild(row);
  }                                                           
}       
/*function fillcolor(cell)
{
  var color=document.querySelector("#colorPicker").value;
  cell.style.backgroundColor = color;
}*/
//filling cells with choosen color  
var table =document.querySelector("#pixelCanvas");
table.addEventListener("click",function(event){
var color=document.querySelector("#colorPicker").value;
var t=event.target;
t.style.backgroundColor=color;
});

  
