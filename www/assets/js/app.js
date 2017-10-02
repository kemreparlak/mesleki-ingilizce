var app = new Vue({
	el: "#app",
	data: {
		message: "Hello Vue!",
		orjinal: parse('originalWords'),
		ceviri: parse('translateWords'),
		orjinalModel: "Welcome",
		ceviriModel: "Hoşgeldin",
		active: 1,
		eklenemedi: false,
		basarili: false,
		originalWord: null,
		translateWord: null,
		original: null,
		translate: null
	},
	methods: {
		show: function(){
			this.active = 0;
		},
		refresh: function(){
			var randInt = getRandomInt(0,this.orjinal.length-1);
			this.orjinalModel = this.orjinal[randInt];
			this.ceviriModel = this.ceviri[randInt];
			this.active = 1;
		},
		addWord: function(originalWordPar,translateWordPar){
			var oWords = parse('originalWords');
			var tWords = parse('translateWords');
			
			if( oWords == null ){
				oWords = [];
				tWords = [];
				oWords[0] = originalWordPar;
				tWords[0] = translateWordPar;
			}else{
				
				if( oWords.indexOf( originalWordPar ) != -1 ){
					this.eklenemedi = true;
					console.log( "Bu kelimeyi daha önce eklediniz." );
				}else{
					oWords.push( originalWordPar );
					tWords.push( translateWordPar );
					this.original = "";
					this.translate = "";
					this.eklenemedi = false;
					this.basarili = true;
				}
				
			}

			localStorage.setItem( 'originalWords', oWords);
			localStorage.setItem( 'translateWords', tWords);
		}

	}
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function parse(localItem){
	var item = localStorage.getItem(localItem);
	if( item && item.search(',') )
		item = item.split(',');
	return item;
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}