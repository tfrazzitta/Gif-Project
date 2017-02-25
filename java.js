console.log(this);
	var favorites =["monkeys","family guy","jim carrey"];
	CreateButtons();
	function CreateButtons(){
		$("#giffy-favs").empty();
		for(i=0;i<favorites.length;i++){
		var b= $("<button>");
			b.addClass("gifs")
			b.attr("data-info", favorites[i]);
			b.text(favorites[i]);
			console.log(b);
			$("#giffy-favs").append(b)
		
		}
	}
	function GifSearch(){
	$("#gif-list").html(" ")
	console.log(this);
	var name = $(this).attr('data-info');
	var query= "http://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=";
	var APIkey= "dc6zaTOxFJmzC&limit=12"
	$.ajax({
		url:query+APIkey,
		method:"GET",
	}) .done(function(response){
	console.log(this);
		for(i=0;i<response.data.length;i++){
		var c = $("<img>");
			c.addClass("gittles")
			c.attr("src", response.data[i].images.original_still.url)
			c.attr('data-previous',response.data[i].images.original.url);
			$("#gif-list").append(c)
			console.log(response.data[i].images.original_still.url);
		} //for loop
		}) //.done function
	} //Gif Search function
	
    //clicking or pressing enter to add a gif category to favs
	$("#add-gif").on("click", function(event) {
	event.preventDefault();
	var img = $("#gif-search-box").val().trim();
	favorites.push(img);
	CreateButtons();
	});
	//clicking on a button will show all the gifs
	$(document).on("click", ".gifs", GifSearch);
	//clicking on the gif animate and freeze frame
	$(document).on("click", ".gittles", function(event){
		var y = $(this).attr('data-previous');  //animation info
		var x = $(this).attr('src');          //still frame info
		$(this).attr('src',y);
		$(this).attr('data-previous',x);
	
	});