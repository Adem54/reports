





/*

generatePdf():   {
const doc = new jsPDF();
doc.text('Hello, this is your PDF content!', 10, 10);
const blob = doc.output('blob');
const url = URL.createObjectURL(blob);
window.open(url, '_blank');
}





console.log("Working!")
	//renderer- 
	
	window.jsPDF = window.jspdf.jsPDF;

	let pdf = new jsPDF('p', 'mm', 'a4');

	pdf.page=1;
	

	// Source HTMLElement or a string containing HTML.

	let elementHTML = document.querySelector("#container");
	console.log("elementHTML; ", elementHTML);


	pdf.html(elementHTML, {
		 callback: function(doc) {

	
			
		window.open(doc.output('bloburl'), '_blank');
		//window.open(doc.output('bloburl'))
		//doc.output('dataurlnewwindow');
		//window.open(url,"_blank","top=100,left=200,width=1000,height=500");
		
		},
		autoPaging: 'text',
		x: 15,
		y: 15,

		width: 170, //target width in the PDF document
		windowWidth: 650 //window width in CSS pixels			
	});

*/