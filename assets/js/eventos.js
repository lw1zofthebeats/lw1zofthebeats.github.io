<script>

var botao.getElementById('btn');
link.addEventListener('click', function(){
	alert('Hello')
}) // pode ser "hover" ou 'mouseover' etc

var link = document.getElementById("link");
var trs = document.getElementById("tr");

link.addEventListener("mouseover", function(){
	link.classList.add("link")
})

link.addEventListener("mouseleave", function(){
	link.classList.remove("link")
})

for (var i = 0; i < trs.length; i++){
	trs[i].addEventListener("mouseover", function(){
	console.log(this)
	})
	this.classList.add('tractive');
}

</script>

