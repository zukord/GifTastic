var topics=["Overwatch", "Skyrim", "Starcraft", "Red Alert", "Command and Conquer", "Tiberian Sun", "Heroes of the Storm", "Astroneer", "Oxygen Not Included", ];

function gifTastic(){
    for(var i=0; i < topics.length; i++){
       $("#vGameButtons").append($("<button>" + topics[i] + "</button>").attr({
          type: "button",
          class: "btn",
          id: topics[i] 
       }));
    }
    $(".btn").click(function(){
        $.ajax({
            url:"https://api.giphy.com/v1/gifs/search?api_key=Bw7HvG3Hm5G3EpwYKn8HLLhzZrIVaNXN&q="+$(this).id+"&limit=10&rating=PG-13",
            method: "GET"
        }).then(function(response) {
            for(var i=0; i < 10; i++){
                $("#vGames").append($("<image> <br/>" + response.data[i].rating + "<br/> </image>").attr({
                    src: response.data[i].images.fixed_height_still.url,
                    class: "image"
                }));
            }
        });
    });
}
gifTastic();