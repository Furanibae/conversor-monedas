//Carga de datos

async function pedirDatos(){
    const result = await fetch("https://api.gael.cloud/general/public/monedas");
    //Aquí ya tengo el arreglo
    const data = await result.json();
    console.log(data);

    let monedas = document.getElementById('monedas');
    let html='';
    for (let moneda of data){    
    html +=`<option value="${moneda.Valor}">${moneda.Codigo} </option>`;
}
    monedas.innerHTML = html;

    let btn = document.getElementById('btn');    
    btn.addEventListener("click", ()=>{  
    let input = document.getElementById('input').value;
    let pesos = document.getElementById('monedas').value;
    let resultado = document.querySelector('span');
    let total;
    total = input / pesos.replace(',','.');
    total = total.toFixed(2);
    resultado.innerHTML = total;
    } 
    )
    
    var xValues = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022];
    var yValues = [355,123,654,234,435,644,321,234,455,664,123,432,566];
    
    new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{  
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        scales: {
          yAxes: [{ticks: {min: 0, max:1500}}],
        }
      }
    });


}

pedirDatos()