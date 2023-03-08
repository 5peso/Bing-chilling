var canvas = new fabric.Canvas('peso5');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
block_image_object = Img;

block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_width);
block_image_object.set({
    top:player_y,
    left:player_x
});
canvas.add(block_image_object);

    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='67'){
        new_image('cloud.jpg');
    }
    if(keyPressed=='68'){
        new_image('dark_greem.png');
    }
    if(keyPressed=='71'){
        new_image('ground.png');
    }
    if(keyPressed=='76'){
        new_image('light_green.png');
    }
    if(keyPressed=='82'){
        new_image('roof.jpg');
    }
    if(keyPressed=='84'){
        new_image('trunk.jpg');
    }
    if(keyPressed=='85'){
        new_image('unique.png');
    }
    if(keyPressed=='87'){
        new_image('wall.jpg');
    }
    if(keyPressed=='89'){
        new_image('yellow_wall.png');
    }
}