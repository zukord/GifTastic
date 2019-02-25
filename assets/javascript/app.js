var topics=["Overwatch", "Skyrim", "Starcraft", "Red Alert", "Command and Conquer", "Tiberian Sun", "Heroes of the Storm", "Astroneer", "Oxygen Not Included", ];

function gifTastic(){
    for(var i=0; i < topics.length; i++)
       //$("#vGameButtons").append("<button type=\"button\" class=\"btn\" id=\" + topics[i] + \" );
       $("#vGameButtons").append("<button>" + topics[i] + "</button>").attr({
          type: "button",
          class: "btn",
          id: topics[i] 
       });
}
gifTastic();