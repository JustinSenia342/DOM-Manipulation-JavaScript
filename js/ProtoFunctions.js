function RotateDom(){
	var pTags = document.getElementsByTagName("p");
	
	var para = document.createElement("p");
	var node = document.createTextNode(pTags[3].innerHTML);
	para.appendChild(node);
	
	var parent = document.getElementById("div1");
	child = pTags[3];
	parent.removeChild(child);
	
	var element = document.getElementById("div1");
	var child = pTags[0];
	element.insertBefore(para,child);
}