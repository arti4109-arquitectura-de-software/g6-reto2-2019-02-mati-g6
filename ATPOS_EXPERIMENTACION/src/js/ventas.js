var consecutivoProductos = 1;
var consecutivoFacturas = 1;

function venderProductos () {
	
	var codFactura = consecutivoFacturas++;
	
	var codProducto1 = document.getElementById("codProducto1").value;
	var cantidad1 = document.getElementById("cantidad1").value;
	var precio1 = document.getElementById("precio1").value;
	var codProducto2 = document.getElementById("codProducto2").value;
	var cantidad2 = document.getElementById("cantidad2").value;
	var precio2 = document.getElementById("precio2").value;
	var codProducto3 = document.getElementById("codProducto3").value;
	var cantidad3 = document.getElementById("cantidad3").value;
	var precio3 = document.getElementById("precio3").value;
	
	
	registrarVentaProducto(codProducto1, cantidad1, precio1, codFactura);
	registrarVentaProducto(codProducto2, cantidad2, precio2, codFactura);
	registrarVentaProducto(codProducto3, cantidad3, precio3, codFactura);
}


function registrarVentaProducto (codProducto, cantidad, precio, codFactura) {
	var venta = {
		'id': consecutivoProductos++,
		'codFactura': codFactura,
		'codProducto': codProducto,
		'cantidad': cantidad,
		'precio': precio
	};
	db.writeNote(venta);
}

function registrarVariasVentas(cantidadVentas) {
	setTimeout(function(){
		for(var i=0; i<cantidadVentas; i++){
			registrarVentaProducto(i*5, i+1, Math.floor((Math.random() * 10000)),  i+1000 )
		}
	}, 25);
}
function getsize(){
	document.getElementById("tamanhotext").innerHTML = navigator.webkitTemporaryStorage.queryUsageAndQuota()
}

function getSize(size,err){
	if(size > 0){
		console.log("Database size = " + size + " bytes");
	}
	if(err != null){
		console.log("There was a problem getting database size: " + err);
	}
}
