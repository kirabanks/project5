function myFunction() {
	var input, filter, div, a, img, i, txtValue;
    input= document.getElementById("search");
    filter = input.value.toUpperCase();
    div = document.getElementById("gallery");
    a = div.getElementsByTagName("a"); 
    
    for ( i = 0; i < a.length; i++) {
    	img = a[i].getElementsByTagName("img")[0];
        txtValue = img.name;
        
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        	a[i].style
        } else {
        	a[i].style.display = "none";
        }
    }
}