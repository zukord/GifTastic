var topics=["Overwatch", "Skyrim", "Starcraft", "Red Alert", "Command and Conquer", "Tiberian Sun", "Heroes of the Storm", "Astroneer"];

function gifTastic(){
    function remakeButtons(){
        $("#vGameButtons").empty();
        for(var i=0; i < topics.length; i++){
            $("#vGameButtons").append($("<button>" + topics[i] + "</button>").attr({
                type: "button",
                class: "btn",
                id: topics[i] + " Game"
            }));
        }
    }
    remakeButtons();
    $("#vGameForm").submit(function() {
        var newGame = $("input:first").val() + " Game";
        console.log(newGame);
        topics.push(newGame);
        console.log(topics)
        remakeButtons();
        event.preventDefault();
    });
    $(document).on("click", ".btn", function(){
        console.log("activated");
        var search = this.id
        $.ajax({
            url:"https://api.giphy.com/v1/gifs/search?api_key=Bw7HvG3Hm5G3EpwYKn8HLLhzZrIVaNXN&q="+ search +"&limit=10&rating=G",
            method: "GET"
        }).then(function(response) {
            for(var i=0; i < 10; i++){
                $("#vGames").append($("<image> <br/> Rating:" + response.data[i].rating + "<br/> </image>").attr({
                    src: response.data[i].images.fixed_height_still.url,
                    class: "image"
                }));
            }
        });
    });
    $(document).on("click", ".image", function(){
        var source = this.src;
        console.log("triggered");
        if(source.includes("200_s.gif")){
            source = source.replace("200_s.gif", "giphy.gif")
            $(this).attr("src", source)
            console.log(this.src)
        } else if(source.includes("giphy.gif")) {
            source = source.replace("giphy.gif", "200_s.gif")
            $(this).attr("src", source)
            console.log("shouldBeStill")
        } else{
            console.log("error")
        }
    })
}
gifTastic();

