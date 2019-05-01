var happyImages = [
    "https://thumbs.gfycat.com/BelatedWindyCentipede-max-1mb.gif", 
    "http://www.reactiongifs.com/r/ovrjy.gif",
    "https://media1.giphy.com/media/5GoVLqeAOo6PK/giphy.gif"
];
var sadImages = [
    "https://media2.giphy.com/media/TU76e2JHkPchG/giphy.gif",
    "https://media2.giphy.com/media/Pok6284jGzyGA/giphy.gif",
    "https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sad_Emoji_large.png?v=1542436016"];
var tiredImages = [
    "http://123emoji.com/wp-content/uploads/2017/08/sticker-12-14.png",
    "https://media3.giphy.com/media/NWg7M1VlT101W/giphy.gif",
    "https://images.agoramedia.com/everydayhealth/gcms/Why-Does-Diabetes-Make-Me-So-Tired-1440x810.jpg?width=722"];
var hungryImages = [
    "https://media.tenor.com/images/f85c932039fc7e45c6c1f946502a5f2b/tenor.gif",
    "http://clipart-library.com/img/419107.jpg",
    "https://i.ytimg.com/vi/ySNTW8jZT-s/maxresdefault.jpg" ];

$("#button").click(function(){
    var mood = $("#input").val(); 
    if (mood === "happy"){
        happyMood();
    }
    else if(mood === "sad"){
        sadMood(); 
    }
    else if(mood ==="tired"){
        tiredMood();
    }
    else if(mood ==="hungry"){
        hungryMood();
    }
    else{
    alert("Please select a VALID option ");
    }
});

function happyMood(){
    displayImages(happyImages);
    changeAppearance("yellow","black");
}
function sadMood(){
    displayImages(sadImages);
    changeAppearance("navy","blue");
}
function tiredMood(){
    displayImages(tiredImages);
    changeAppearance("gray","white");
    
}
function hungryMood(){
    displayImages(hungryImages);
    changeAppearance("bisque","sandybrown");
    
}


function changeAppearance(color,backgroundcolor){
    $('body').css("background-color", color);
    $('body').css("color",backgroundcolor);
}


function displayImages(images){
 $(".images").html("");
 images.forEach(function(picture) {
$(".images").append("<img src=" + picture + ">");
});
}


