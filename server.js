var window = global ;

var start = function() {
  window.player = new this.Player(function(event) {
    if (event.name == "started") {
      // signal that the game is started
    }
    else if (event.name == "log") {
      // console.info(event.data) ;
    }
  }) ;
}

var resources = "var resources = {\"images\":[],\"assets\":[],\"maps\":{\"alienbase1/base\":\"{\\\"width\\\":32,\\\"height\\\":32,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-wall-alienwall1:2,1\\\",\\\"tiles-wall-alienwall1:0,1\\\",\\\"tiles-wall-alienwall1:1,1\\\",\\\"tiles-walkable-hull_plate1:0,3\\\",\\\"tiles-walkable-hull_plate1:1,2\\\",\\\"tiles-walkable-hull_plate1:2,2\\\",\\\"tiles-walkable-hull_plate1:3,2\\\",\\\"tiles-walkable-hull_plate1:0,2\\\",\\\"tiles-walkable-hull_plate1:1,1\\\",\\\"tiles-walkable-hull_plate1:2,1\\\",\\\"tiles-walkable-hull_plate1:3,1\\\",\\\"tiles-walkable-hull_plate1:0,1\\\",\\\"tiles-walkable-hull_plate1:1,0\\\",\\\"tiles-walkable-hull_plate1:2,0\\\",\\\"tiles-walkable-hull_plate1:3,0\\\",\\\"tiles-walkable-hull_plate1:0,0\\\",\\\"tiles-walkable-hull_plate1:1,3\\\",\\\"tiles-walkable-hull_plate1:2,3\\\",\\\"tiles-walkable-hull_plate1:3,3\\\",\\\"tiles-wall-alienwall1:0,0\\\",\\\"tiles-wall-alienwall1:1,0\\\",\\\"tiles-wall-alienwall1:2,0\\\",\\\"tiles-furniture-alientank2:0,3\\\",\\\"tiles-furniture-alientank2:1,3\\\",\\\"tiles-furniture-alientank2:2,3\\\",\\\"tiles-furniture-alientank2:3,3\\\",\\\"tiles-furniture-alientank2:0,2\\\",\\\"tiles-furniture-alientank2:1,2\\\",\\\"tiles-furniture-alientank2:2,2\\\",\\\"tiles-furniture-alientank2:3,2\\\"],\\\"data\\\":[1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,4,2,2,3,1,2,2,0,0,0,0,0,0,0,0,0,1,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,2,0,0,0,0,0,0,0,0,0,1,9,10,11,12,9,10,11,12,9,10,11,12,9,10,11,12,9,10,11,12,9,2,0,0,1,2,3,1,2,3,1,1,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,2,0,0,1,14,15,16,13,14,2,1,17,18,19,4,17,18,19,4,17,18,19,2,3,1,2,3,1,18,19,4,17,2,0,0,1,18,19,4,17,18,2,1,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,2,0,0,1,6,7,8,5,6,2,1,9,10,11,12,9,10,11,12,9,10,11,12,9,10,11,12,9,10,11,12,9,2,0,0,1,10,11,12,9,10,2,1,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,2,0,0,1,14,15,16,13,14,2,1,17,18,19,4,17,18,19,4,17,18,19,4,17,18,19,4,17,18,19,4,17,2,0,0,1,18,19,4,17,18,2,1,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,2,0,0,1,6,7,8,5,6,2,2,3,1,2,3,1,2,3,1,9,10,11,12,9,10,11,12,9,10,11,12,9,2,0,0,1,10,11,12,9,10,2,20,21,22,20,21,22,20,21,1,13,14,15,16,13,14,15,16,13,14,15,16,13,2,0,0,1,14,15,16,13,14,2,0,0,0,0,0,0,0,0,1,17,18,19,4,17,18,19,4,17,18,19,4,17,2,0,0,1,18,19,4,17,18,2,0,0,0,0,0,0,0,0,1,5,6,7,8,5,6,7,8,5,6,7,8,5,2,0,0,1,6,7,8,5,6,2,0,0,0,0,0,0,0,0,1,9,10,11,12,9,23,24,25,26,10,11,12,9,2,0,0,1,10,11,12,9,10,2,0,0,0,0,0,0,0,0,1,13,14,15,16,13,27,28,29,30,14,15,16,13,2,3,1,2,14,15,16,13,14,2,0,0,0,0,0,0,0,0,1,17,18,19,4,17,18,19,4,17,18,19,4,17,18,19,4,17,18,19,4,17,18,2,0,0,0,0,0,0,0,0,1,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,2,2,3,1,2,3,1,2,3,1,9,10,11,2,3,1,2,3,1,2,3,1,9,10,11,12,9,10,11,12,9,10,2,1,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,2,1,17,18,19,4,17,18,19,4,17,18,19,4,17,18,19,4,17,18,19,4,17,18,19,4,17,18,19,4,17,18,2,1,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,2,1,9,10,11,23,24,25,26,4,17,18,19,12,9,10,11,12,9,10,11,12,9,10,11,23,24,25,26,12,9,10,2,1,13,14,15,27,28,29,30,8,5,6,7,16,13,14,15,16,13,14,15,16,13,14,15,27,28,29,30,16,13,14,2,1,17,18,19,4,17,18,19,12,9,10,2,2,3,1,2,3,1,2,3,1,17,18,19,4,17,18,19,4,17,18,2,1,5,6,7,8,5,6,7,16,13,14,2,20,21,22,20,21,22,20,21,1,5,6,7,8,5,6,7,8,5,6,2,1,9,10,11,12,9,10,11,12,9,10,2,0,0,0,0,0,0,0,0,1,9,10,11,12,9,10,11,12,9,10,2,1,13,14,15,16,13,14,15,16,13,14,2,0,0,0,0,0,0,0,0,1,13,14,15,16,13,14,15,16,13,14,2,1,17,18,19,4,17,18,19,4,17,18,2,0,0,0,0,0,0,0,0,1,17,18,19,4,17,18,19,4,17,18,2,1,5,6,7,8,5,6,7,8,5,6,2,0,0,0,0,0,0,0,0,1,5,6,7,8,5,6,7,8,5,6,2,2,3,1,2,3,1,2,3,1,2,3,1,0,0,0,0,0,0,0,0,2,3,1,2,3,1,2,3,1,2,3,1,20,21,22,20,21,22,20,21,22,20,21,22,0,0,0,0,0,0,0,0,20,21,22,20,21,22,20,21,22,20,21,22]}\",\"alienbase1/top\":\"{\\\"width\\\":32,\\\"height\\\":32,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-furniture-exitsquare\\\",\\\"tiles-wall-alienwall1:0,0\\\",\\\"tiles-wall-alienwall1:1,0\\\",\\\"tiles-wall-alienwall1:2,0\\\",\\\"tiles-furniture-vase1\\\",\\\"tiles-furniture-alienstones1:0,3\\\",\\\"tiles-furniture-alienstones1:1,3\\\",\\\"tiles-furniture-alienstones1:2,3\\\",\\\"tiles-furniture-alienstones1:0,2\\\",\\\"tiles-furniture-alienstones1:1,2\\\",\\\"tiles-furniture-alienstones1:2,2\\\",\\\"tiles-furniture-alienstones1:0,1\\\",\\\"tiles-furniture-alienstones1:1,1\\\",\\\"tiles-furniture-alienstones1:2,1\\\",\\\"tiles-furniture-alienstones1:0,0\\\",\\\"tiles-furniture-alienstones1:1,0\\\",\\\"tiles-furniture-alienstones1:2,0\\\",\\\"tiles-furniture-alientank2:0,1\\\",\\\"tiles-furniture-alientank2:1,1\\\",\\\"tiles-furniture-alientank2:2,1\\\",\\\"tiles-furniture-alientank2:3,1\\\",\\\"tiles-furniture-alientank2:0,0\\\",\\\"tiles-furniture-alientank2:1,0\\\",\\\"tiles-furniture-alientank2:2,0\\\",\\\"tiles-furniture-alientank2:3,0\\\",\\\"tiles-furniture-worthy1\\\"],\\\"data\\\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,4,2,3,4,2,3,4,2,3,4,2,3,4,0,3,4,2,3,4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,4,3,4,0,0,0,0,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,7,8,0,0,0,0,0,9,10,11,0,0,0,0,0,0,2,3,4,2,3,4,0,0,0,0,0,0,0,0,0,9,10,11,0,0,0,0,0,12,13,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,13,14,0,0,0,0,0,15,16,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,16,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,19,20,21,0,0,0,0,2,3,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,23,24,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,4,2,3,4,2,3,4,0,0,0,2,3,4,2,3,4,2,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,19,20,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,19,20,21,0,0,0,0,0,0,0,0,22,23,24,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,23,24,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}\",\"alienbase2/base\":\"{\\\"width\\\":20,\\\"height\\\":20,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-wall-alienwall1:2,1\\\",\\\"tiles-wall-alienwall1:0,1\\\",\\\"tiles-wall-alienwall1:1,1\\\",\\\"tiles-walkable-hull_plate1:1,3\\\",\\\"tiles-walkable-hull_plate1:1,2\\\",\\\"tiles-walkable-hull_plate1:2,2\\\",\\\"tiles-walkable-hull_plate1:3,2\\\",\\\"tiles-walkable-hull_plate1:0,2\\\",\\\"tiles-walkable-hull_plate1:1,1\\\",\\\"tiles-walkable-hull_plate1:2,1\\\",\\\"tiles-walkable-hull_plate1:3,1\\\",\\\"tiles-walkable-hull_plate1:0,1\\\",\\\"tiles-walkable-hull_plate1:1,0\\\",\\\"tiles-walkable-hull_plate1:2,0\\\",\\\"tiles-walkable-hull_plate1:3,0\\\",\\\"tiles-walkable-hull_plate1:0,0\\\",\\\"tiles-walkable-hull_plate1:2,3\\\",\\\"tiles-walkable-hull_plate1:3,3\\\",\\\"tiles-walkable-hull_plate1:0,3\\\",\\\"tiles-furniture-alientank2:0,3\\\",\\\"tiles-furniture-alientank2:1,3\\\",\\\"tiles-furniture-alientank2:2,3\\\",\\\"tiles-furniture-alientank2:3,3\\\",\\\"tiles-furniture-alientank2:0,2\\\",\\\"tiles-furniture-alientank2:1,2\\\",\\\"tiles-furniture-alientank2:2,2\\\",\\\"tiles-furniture-alientank2:3,2\\\",\\\"tiles-wall-alienwall1:0,0\\\",\\\"tiles-wall-alienwall1:1,0\\\",\\\"tiles-wall-alienwall1:2,0\\\"],\\\"data\\\":[1,2,3,1,2,3,1,2,3,4,2,3,1,2,3,1,2,3,1,2,1,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,2,1,9,10,11,12,9,10,11,12,9,10,11,12,9,10,11,12,9,10,2,1,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,2,1,4,17,18,19,4,17,18,19,4,17,18,19,4,17,18,19,4,17,2,1,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,2,1,9,10,11,12,9,10,11,12,9,10,11,12,9,10,11,12,9,10,2,1,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,2,1,4,17,18,19,4,17,18,19,4,17,18,19,4,17,18,19,4,17,2,1,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,2,1,9,10,11,20,21,22,23,12,9,10,11,12,9,10,11,12,9,10,2,1,13,14,15,24,25,26,27,16,13,14,15,16,13,14,15,16,13,14,2,1,4,17,18,19,4,17,18,19,4,17,18,19,4,17,18,19,4,17,2,1,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,2,1,9,10,11,12,9,10,11,12,9,10,11,12,9,10,11,12,9,10,2,1,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,2,1,4,17,18,19,4,17,18,19,4,17,18,19,4,17,18,19,4,17,2,1,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,2,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,28,29,30,28,29,30,28,29,30,28,29,30,28,29,30,28,29,30,28,29]}\",\"alienbase2/top\":\"{\\\"width\\\":20,\\\"height\\\":20,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-furniture-exitsquare\\\",\\\"tiles-wall-alienwall1:0,0\\\",\\\"tiles-wall-alienwall1:1,0\\\",\\\"tiles-wall-alienwall1:2,0\\\",\\\"tiles-furniture-vase1\\\",\\\"tiles-furniture-alienstones1:0,3\\\",\\\"tiles-furniture-alienstones1:1,3\\\",\\\"tiles-furniture-alienstones1:2,3\\\",\\\"tiles-furniture-alienstones1:0,2\\\",\\\"tiles-furniture-alienstones1:1,2\\\",\\\"tiles-furniture-alienstones1:2,2\\\",\\\"tiles-furniture-alienstones1:0,1\\\",\\\"tiles-furniture-alienstones1:1,1\\\",\\\"tiles-furniture-alienstones1:2,1\\\",\\\"tiles-furniture-alienstones1:0,0\\\",\\\"tiles-furniture-alienstones1:1,0\\\",\\\"tiles-furniture-alienstones1:2,0\\\",\\\"tiles-furniture-painting2\\\",\\\"tiles-furniture-painting1\\\",\\\"tiles-furniture-worthy1\\\",\\\"tiles-furniture-alientank2:0,1\\\",\\\"tiles-furniture-alientank2:1,1\\\",\\\"tiles-furniture-alientank2:2,1\\\",\\\"tiles-furniture-alientank2:3,1\\\",\\\"tiles-furniture-alientank2:0,0\\\",\\\"tiles-furniture-alientank2:1,0\\\",\\\"tiles-furniture-alientank2:2,0\\\",\\\"tiles-furniture-alientank2:3,0\\\",\\\"tiles-furniture-chair\\\"],\\\"data\\\":[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2,3,4,2,3,4,2,3,0,2,3,4,2,3,4,2,3,4,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,10,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,13,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,16,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,0,2,3,4,2,3,4,2,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,22,23,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,25,26,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}\",\"cowskull1/base\":\"{\\\"width\\\":12,\\\"height\\\":12,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-wall-sandwall:0,0\\\",\\\"tiles-wall-sandwall:1,0\\\",\\\"tiles-wall-sandwall:2,0\\\",\\\"tiles-walkable-insideskull:1,2\\\",\\\"tiles-walkable-insideskull:2,2\\\",\\\"tiles-walkable-insideskull:3,2\\\",\\\"tiles-walkable-insideskull:0,2\\\",\\\"tiles-buildings-tardis_sand:0,3\\\",\\\"tiles-buildings-tardis_sand:1,3\\\",\\\"tiles-buildings-tardis_sand:2,3\\\",\\\"tiles-walkable-insideskull:1,1\\\",\\\"tiles-walkable-insideskull:2,1\\\",\\\"tiles-walkable-insideskull:3,1\\\",\\\"tiles-walkable-insideskull:0,1\\\",\\\"tiles-walkable-insideskull:1,0\\\",\\\"tiles-walkable-insideskull:2,0\\\",\\\"tiles-walkable-insideskull:3,0\\\",\\\"tiles-walkable-insideskull:0,0\\\",\\\"tiles-walkable-insideskull:1,3\\\",\\\"tiles-walkable-insideskull:2,3\\\",\\\"tiles-walkable-insideskull:3,3\\\",\\\"tiles-walkable-insideskull:0,3\\\"],\\\"data\\\":[1,2,3,1,2,3,1,2,3,1,2,3,1,4,5,6,7,4,5,6,8,9,10,3,1,11,12,13,14,11,12,13,14,11,12,3,1,15,16,17,18,15,16,17,18,15,16,3,1,19,20,21,22,19,20,21,22,19,20,3,1,4,5,6,7,4,5,6,7,4,5,3,1,11,12,13,14,11,12,13,14,11,12,3,1,15,16,17,18,15,16,17,18,15,16,3,1,19,20,21,22,19,20,21,22,19,20,3,1,4,5,6,7,4,5,6,7,4,5,3,1,11,12,13,14,11,12,13,14,11,12,3,1,2,3,1,2,3,1,2,3,1,2,3]}\",\"cowskull1/top\":\"{\\\"width\\\":12,\\\"height\\\":12,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-furniture-sprite:0,2\\\",\\\"tiles-furniture-sprite:1,2\\\",\\\"tiles-furniture-sprite:2,2\\\",\\\"tiles-furniture-sprite:2,0\\\",\\\"tiles-furniture-sprite:0,0\\\",\\\"tiles-furniture-sprite:1,0\\\",\\\"tiles-furniture-sprite:1,1\\\",\\\"tiles-furniture-sprite:0,1\\\",\\\"tiles-furniture-sprite:2,1\\\",\\\"tiles-furniture-exitsquare\\\",\\\"tiles-buildings-tardis_sand:0,2\\\",\\\"tiles-buildings-tardis_sand:1,2\\\",\\\"tiles-buildings-tardis_sand:2,2\\\",\\\"tiles-buildings-tardis_sand:0,1\\\",\\\"tiles-buildings-tardis_sand:1,1\\\",\\\"tiles-buildings-tardis_sand:2,1\\\",\\\"tiles-buildings-tardis_sand:0,0\\\",\\\"tiles-buildings-tardis_sand:1,0\\\",\\\"tiles-buildings-tardis_sand:2,0\\\",\\\"tiles-furniture-alienstones1:0,3\\\",\\\"tiles-furniture-alienstones1:1,3\\\",\\\"tiles-furniture-alienstones1:2,3\\\",\\\"tiles-furniture-alienstones1:0,2\\\",\\\"tiles-furniture-alienstones1:1,2\\\",\\\"tiles-furniture-alienstones1:2,2\\\",\\\"tiles-furniture-alienstones1:0,1\\\",\\\"tiles-furniture-alienstones1:1,1\\\",\\\"tiles-furniture-alienstones1:2,1\\\",\\\"tiles-furniture-alienstones1:0,0\\\",\\\"tiles-furniture-alienstones1:1,0\\\",\\\"tiles-furniture-alienstones1:2,0\\\"],\\\"data\\\":[1,2,3,4,5,6,4,5,6,4,3,7,8,7,9,3,1,2,3,1,8,7,9,6,5,6,4,9,8,10,9,1,11,12,13,2,2,1,2,3,5,0,4,8,14,15,16,7,7,8,7,9,0,0,0,5,17,18,19,6,1,2,3,0,0,0,0,0,2,1,2,3,1,2,3,0,20,21,22,0,0,8,7,9,8,7,9,7,23,24,25,0,2,5,1,2,1,2,3,2,26,27,28,0,7,9,8,7,8,7,1,2,29,30,31,1,2,3,5,6,5,6,8,7,9,9,5,8,7,9,7,9,7,9,5,6,4,4,3,5,6,4,6,4]}\",\"desert_town/base\":\"{\\\"width\\\":20,\\\"height\\\":20,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-walkable-grass_to_sand:4,2\\\",\\\"tiles-walkable-grass_to_sand:0,2\\\",\\\"tiles-walkable-grass_to_sand:1,2\\\",\\\"tiles-walkable-grass_to_sand:2,2\\\",\\\"tiles-walkable-grass_to_sand:0,1\\\",\\\"tiles-walkable-grass:3,2\\\",\\\"tiles-walkable-grass:4,2\\\",\\\"tiles-walkable-grass:1,3\\\",\\\"tiles-walkable-grass_to_sand:2,1\\\",\\\"tiles-walkable-grass_to_sand:3,1\\\",\\\"tiles-walkable-grass:3,1\\\",\\\"tiles-walkable-grass:4,1\\\",\\\"tiles-buildings-house2:0,2\\\",\\\"tiles-buildings-house2:1,2\\\",\\\"tiles-buildings-house2:2,2\\\",\\\"tiles-buildings-house2:0,1\\\",\\\"tiles-buildings-house2:1,1\\\",\\\"tiles-buildings-house2:2,1\\\",\\\"tiles-buildings-house1:0,2\\\",\\\"tiles-buildings-house1:1,2\\\",\\\"tiles-buildings-house1:2,2\\\",\\\"tiles-buildings-house1:0,1\\\",\\\"tiles-buildings-house1:1,1\\\",\\\"tiles-buildings-house1:2,1\\\",\\\"tiles-buildings-house3:0,2\\\",\\\"tiles-buildings-house3:1,2\\\",\\\"tiles-walkable-grass_to_sand:1,0\\\",\\\"tiles-walkable-grass_to_sand:3,0\\\",\\\"tiles-buildings-house3:0,1\\\",\\\"tiles-buildings-house3:1,1\\\",\\\"tiles-walkable-grass:2,0\\\",\\\"tiles-walkable-grass_to_sand:0,0\\\",\\\"tiles-walkable-grass_to_sand:4,0\\\",\\\"tiles-walkable-grass_to_sand:2,0\\\",\\\"tiles-walkable-grass_to_sand:4,1\\\",\\\"tiles-vehicles-wagon1:0,1\\\",\\\"tiles-vehicles-wagon1:1,1\\\",\\\"tiles-vehicles-wagon1:2,1\\\",\\\"tiles-walkable-grass:1,1\\\",\\\"tiles-walkable-grass:1,0\\\",\\\"tiles-buildings-house4:0,4\\\",\\\"tiles-buildings-house4:1,4\\\",\\\"tiles-buildings-house4:2,4\\\",\\\"tiles-walkable-grass_to_sand:5,2\\\",\\\"tiles-buildings-house4:0,3\\\",\\\"tiles-buildings-house4:1,3\\\",\\\"tiles-buildings-house4:2,3\\\"],\\\"data\\\":[1,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,1,1,5,6,7,6,7,6,7,8,8,8,6,7,6,7,7,7,7,9,2,3,10,11,12,6,7,11,12,13,14,15,11,12,7,12,12,12,12,9,5,6,6,11,12,6,7,11,12,16,17,18,11,12,12,19,20,21,8,9,5,11,11,6,6,7,6,7,6,7,6,7,6,7,7,22,23,24,8,9,5,11,12,11,11,12,6,7,11,12,11,12,6,7,12,6,6,6,7,9,5,11,12,13,14,15,11,12,6,7,25,26,11,12,12,11,11,11,12,9,5,6,7,16,17,18,27,28,11,12,29,30,31,11,12,12,7,7,7,9,5,11,12,6,7,9,1,32,28,6,6,6,7,11,12,12,12,12,12,9,5,11,6,7,12,9,1,1,5,11,11,11,12,6,6,11,12,11,12,9,5,11,11,12,33,34,1,1,5,8,13,14,15,11,11,6,6,11,12,9,5,6,6,7,9,1,2,3,10,8,16,17,18,11,12,11,11,11,12,9,5,11,6,7,35,3,10,6,7,7,6,6,6,6,6,7,36,37,38,9,5,6,11,8,8,8,6,7,12,12,11,11,11,11,11,6,7,39,33,34,5,11,12,19,20,21,6,7,6,7,40,8,41,42,43,11,12,33,34,44,5,11,12,22,23,24,11,12,6,6,7,8,45,46,47,11,12,9,44,44,5,11,12,7,6,6,7,6,7,7,7,33,27,27,28,33,27,34,44,44,5,11,12,12,11,11,12,7,7,12,12,9,44,44,32,34,44,44,44,44,5,11,12,12,12,12,12,12,12,33,27,34,44,44,44,44,44,44,44,44,32,27,27,27,27,27,27,27,27,34,44,44,44,44,44,44,44,44,44,44]}\",\"desert_town/top\":\"{\\\"width\\\":20,\\\"height\\\":20,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-buildings-house2:0,1\\\",\\\"tiles-buildings-house2:1,1\\\",\\\"tiles-buildings-house2:2,1\\\",\\\"tiles-buildings-house2:0,0\\\",\\\"tiles-buildings-house2:1,0\\\",\\\"tiles-buildings-house2:2,0\\\",\\\"tiles-buildings-house1:0,1\\\",\\\"tiles-buildings-house1:1,1\\\",\\\"tiles-buildings-house1:2,1\\\",\\\"tiles-buildings-house1:0,0\\\",\\\"tiles-buildings-house1:1,0\\\",\\\"tiles-buildings-house1:2,0\\\",\\\"tiles-buildings-house3:2,2\\\",\\\"tiles-buildings-house3:0,1\\\",\\\"tiles-buildings-house3:1,1\\\",\\\"tiles-buildings-house3:2,1\\\",\\\"tiles-buildings-house3:0,0\\\",\\\"tiles-buildings-house3:1,0\\\",\\\"tiles-buildings-house3:2,0\\\",\\\"tiles-vehicles-wagon1_trsp:0,0\\\",\\\"tiles-vehicles-wagon1_trsp:1,0\\\",\\\"tiles-vehicles-wagon1_trsp:2,0\\\",\\\"tiles-buildings-house4:0,3\\\",\\\"tiles-buildings-house4:1,3\\\",\\\"tiles-buildings-house4:2,3\\\",\\\"tiles-buildings-house4:0,2\\\",\\\"tiles-buildings-house4:1,2\\\",\\\"tiles-buildings-house4:2,2\\\",\\\"tiles-buildings-house4:0,1\\\",\\\"tiles-buildings-house4:1,1\\\",\\\"tiles-buildings-house4:2,1\\\",\\\"tiles-buildings-house4:0,0\\\",\\\"tiles-buildings-house4:1,0\\\",\\\"tiles-buildings-house4:2,0\\\"],\\\"data\\\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,6,0,0,0,7,8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,1,2,3,0,0,0,0,14,15,16,0,0,0,0,0,0,0,0,0,0,4,5,6,0,0,0,0,17,18,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,8,9,0,0,0,0,0,0,23,24,25,0,0,0,0,0,0,0,0,10,11,12,0,0,0,0,0,0,26,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,30,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,33,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}\",\"house1/base\":\"{\\\"width\\\":9,\\\"height\\\":7,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-wall-wall_brick:1,0\\\",\\\"tiles-wall-wall_brick:0,0\\\",\\\"tiles-walkable-planks\\\",\\\"tiles-wall-wall_brick:2,0\\\",\\\"tiles-furniture-tardiscontrol:0,3\\\",\\\"tiles-furniture-tardiscontrol:1,3\\\",\\\"tiles-furniture-tardiscontrol:2,3\\\",\\\"tiles-furniture-tardiscontrol:3,3\\\",\\\"tiles-furniture-tardiscontrol:0,2\\\",\\\"tiles-furniture-tardiscontrol:1,2\\\",\\\"tiles-furniture-tardiscontrol:2,2\\\",\\\"tiles-furniture-tardiscontrol:3,2\\\"],\\\"data\\\":[1,1,2,2,3,1,2,1,4,2,3,3,3,3,3,3,3,1,4,3,3,3,3,3,3,3,2,2,3,3,3,5,6,7,8,2,1,3,3,3,9,10,11,12,2,2,3,3,3,3,3,3,3,4,2,2,1,1,2,2,4,2,2]}\",\"house1/top\":\"{\\\"width\\\":9,\\\"height\\\":7,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-furniture-door1\\\",\\\"tiles-walkable-rockpathwater:0,2\\\",\\\"tiles-furniture-bed1\\\",\\\"tiles-walkable-rockpathwater:0,1\\\",\\\"tiles-wall-shed1:1,1\\\",\\\"tiles-walkable-rockpathwater:0,0\\\",\\\"tiles-furniture-tardiscontrol:0,1\\\",\\\"tiles-furniture-tardiscontrol:1,1\\\",\\\"tiles-furniture-tardiscontrol:2,1\\\",\\\"tiles-furniture-tardiscontrol:3,1\\\",\\\"tiles-furniture-painting1\\\",\\\"tiles-furniture-painting2\\\",\\\"tiles-furniture-tardiscontrol:0,0\\\",\\\"tiles-furniture-tardiscontrol:1,0\\\",\\\"tiles-furniture-tardiscontrol:2,0\\\",\\\"tiles-furniture-tardiscontrol:3,0\\\"],\\\"data\\\":[0,0,0,0,1,0,0,0,0,0,0,0,0,2,0,0,0,0,3,0,0,0,4,0,0,0,5,0,0,0,0,6,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,7,8,9,10,0,0,0,11,12,13,14,15,16,0]}\",\"house2/base\":\"{\\\"width\\\":14,\\\"height\\\":12,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-wall-wall_stone:0,0\\\",\\\"tiles-walkable-floor_tile1:0,0\\\",\\\"tiles-walkable-floor_tile1:0,2\\\",\\\"tiles-walkable-floor_tile1:1,2\\\",\\\"tiles-walkable-floor_tile1:2,2\\\",\\\"tiles-walkable-floor_tile1:0,1\\\",\\\"tiles-walkable-floor_tile1:1,1\\\",\\\"tiles-walkable-floor_tile1:2,1\\\",\\\"tiles-walkable-floor_tile1:1,0\\\",\\\"tiles-walkable-floor_tile1:2,0\\\",\\\"tiles-walkable-planks\\\",\\\"tiles-walkable-floor_tile1:3,1\\\",\\\"tiles-walkable-floor_tile1:4,1\\\",\\\"tiles-walkable-floor_tile1:3,0\\\",\\\"tiles-walkable-floor_tile1:4,0\\\"],\\\"data\\\":[1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,3,4,5,3,4,5,3,4,5,3,4,5,1,1,6,7,8,6,7,8,6,7,8,6,7,8,1,1,2,9,10,2,9,10,2,9,10,2,9,10,1,1,2,9,10,1,11,11,11,11,1,3,4,5,1,1,3,4,5,1,11,11,11,11,1,6,7,8,1,1,6,7,8,1,11,11,11,11,1,2,9,10,1,1,2,9,10,1,11,11,11,11,1,3,4,5,1,1,3,4,5,1,1,1,1,1,1,6,7,8,1,1,6,7,8,6,7,8,12,13,13,2,9,10,1,1,2,9,10,2,9,10,14,15,15,2,9,10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}\",\"house2/top\":\"{\\\"width\\\":14,\\\"height\\\":12,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-furniture-worthy1\\\",\\\"tiles-furniture-vase1\\\",\\\"tiles-furniture-painting1\\\",\\\"tiles-furniture-chair\\\",\\\"tiles-furniture-painting2\\\",\\\"tiles-furniture-bed1\\\",\\\"tiles-furniture-bookshelf1\\\"],\\\"data\\\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,2,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,3,0,0,0,0,0,0,0,0,0,5,0,0,4,0,0,0,0,0,0,6,0,0,7,0,0,0,0,0,0,0,0,0,3,0,2,0,0,0,0,0,4,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}\",\"main/base\":\"{\\\"width\\\":64,\\\"height\\\":64,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-walkable-grass_to_water:3,2\\\",\\\"tiles-vehicles-boat2-left\\\",\\\"tiles-walkable-sand_to_water:0,2\\\",\\\"tiles-walkable-sand_to_water:1,2\\\",\\\"tiles-walkable-sand_to_water:2,2\\\",\\\"tiles-walkable-sand:3,3\\\",\\\"tiles-walkable-sand_to_water:3,1\\\",\\\"tiles-walkable-sand:0,2\\\",\\\"tiles-walkable-sand:1,2\\\",\\\"tiles-walkable-sand:2,2\\\",\\\"tiles-walkable-grass_to_water:0,2\\\",\\\"tiles-walkable-grass_to_water:1,2\\\",\\\"tiles-walkable-grass_to_water:2,2\\\",\\\"tiles-walkable-ribcage1\\\",\\\"tiles-walkable-cow_skull1\\\",\\\"tiles-walkable-sand:2,1\\\",\\\"tiles-walkable-sand_to_water:4,1\\\",\\\"tiles-walkable-rockpathwater:0,2\\\",\\\"tiles-walkable-sand_to_water:0,1\\\",\\\"tiles-walkable-sand_to_water:1,1\\\",\\\"tiles-walkable-sand_to_water:2,1\\\",\\\"tiles-walkable-grass_to_water:3,1\\\",\\\"tiles-walkable-grass:0,3\\\",\\\"tiles-walkable-grass:0,1\\\",\\\"tiles-walkable-grass:1,1\\\",\\\"tiles-walkable-grass_to_water:4,1\\\",\\\"tiles-walkable-sand:2,0\\\",\\\"tiles-walkable-rockpathwater:0,1\\\",\\\"tiles-walkable-sand_to_water:0,0\\\",\\\"tiles-walkable-sand_to_water:1,0\\\",\\\"tiles-walkable-sand_to_water:2,0\\\",\\\"tiles-walkable-grass:0,2\\\",\\\"tiles-walkable-grass:0,0\\\",\\\"tiles-walkable-grass:1,0\\\",\\\"tiles-walkable-grass:3,3\\\",\\\"tiles-walkable-grass_to_sand:2,1\\\",\\\"tiles-walkable-sand:1,1\\\",\\\"tiles-walkable-grass_to_sand:0,1\\\",\\\"tiles-walkable-rockpathwater:0,0\\\",\\\"tiles-buildings-ruin3:0,2\\\",\\\"tiles-walkable-rockpath:0,2\\\",\\\"tiles-buildings-ruin3:2,2\\\",\\\"tiles-walkable-sand:0,1\\\",\\\"tiles-cactus2:0,2\\\",\\\"tiles-cactus2:1,2\\\",\\\"tiles-walkable-grass:1,3\\\",\\\"tiles-walkable-grass:2,3\\\",\\\"tiles-walkable-grass:4,3\\\",\\\"tiles-walkable-grass:1,2\\\",\\\"tiles-walkable-grass_to_water:0,1\\\",\\\"tiles-buildings-ruin3:0,1\\\",\\\"tiles-buildings-ruin3:1,1\\\",\\\"tiles-buildings-ruin3:2,1\\\",\\\"tiles-walkable-grass:2,0\\\",\\\"tiles-walkable-grass:1,4\\\",\\\"tiles-walkable-sand:0,0\\\",\\\"tiles-walkable-sand:1,0\\\",\\\"tiles-walkable-grass:4,2\\\",\\\"tiles-walkable-grass:2,1\\\",\\\"tiles-walkable-grass:3,1\\\",\\\"tiles-fir_tree1:0,2\\\",\\\"tiles-fir_tree1:1,2\\\",\\\"tiles-walkable-grass_to_sand:0,0\\\",\\\"tiles-walkable-grass_to_sand:3,0\\\",\\\"tiles-walkable-path_ends:1,2\\\",\\\"tiles-walkable-grass:4,1\\\",\\\"tiles-walkable-grass:3,2\\\",\\\"animals-horse_left:0,1\\\",\\\"animals-horse_left:1,1\\\",\\\"tiles-walkable-grass_to_sand:4,0\\\",\\\"tiles-walkable-grass_to_sand:1,0\\\",\\\"tiles-walkable-grass_to_sand:2,0\\\",\\\"tiles-cactus1:0,2\\\",\\\"tiles-cactus1:1,2\\\",\\\"tiles-walkable-sand:1,3\\\",\\\"tiles-walkable-path:2,3\\\",\\\"tiles-walkable-grass:4,0\\\",\\\"tiles-redapple_tree:0,2\\\",\\\"tiles-redapple_tree:1,2\\\",\\\"tiles-walkable-grass_to_water:1,1\\\",\\\"tiles-walkable-grass:2,2\\\",\\\"tiles-walkable-path_ends:0,1\\\",\\\"tiles-walkable-path:1,4\\\",\\\"tiles-walkable-path:2,4\\\",\\\"tiles-walkable-path:3,2\\\",\\\"tiles-walkable-path:2,0\\\",\\\"tiles-walkable-path_ends:2,1\\\",\\\"tiles-walkable-grass_to_water:0,0\\\",\\\"tiles-walkable-grass_to_water:1,0\\\",\\\"tiles-walkable-grass_to_water:3,0\\\",\\\"tiles-walkable-grass_to_sand:0,2\\\",\\\"tiles-walkable-grass_to_sand:1,2\\\",\\\"tiles-walkable-grass_to_sand:3,1\\\",\\\"tiles-buildings-house3:0,2\\\",\\\"tiles-buildings-house3:1,2\\\",\\\"tiles-walkable-path:2,1\\\",\\\"tiles-buildings-house3:0,1\\\",\\\"tiles-buildings-house3:1,1\\\",\\\"tiles-walkable-grass_to_sand:2,2\\\",\\\"tiles-walkable-grass:3,0\\\",\\\"tiles-walkable-grass_to_sand:4,1\\\",\\\"tiles-walkable-grass_to_water:4,0\\\",\\\"tiles-walkable-grass_to_water:2,1\\\",\\\"tiles-walkable-grass:0,4\\\",\\\"tiles-walkable-grass:2,4\\\",\\\"tiles-walkable-grass:3,4\\\",\\\"tiles-walkable-path:0,4\\\",\\\"tiles-vehicles-wagon1_road:0,1\\\",\\\"tiles-vehicles-wagon1_road:1,1\\\",\\\"tiles-vehicles-wagon1_road:2,1\\\",\\\"tiles-vehicles-pirate1-pirate_right:0,2\\\",\\\"tiles-vehicles-pirate1-pirate_right:1,2\\\",\\\"tiles-walkable-path:0,3\\\",\\\"tiles-buildings-house4:0,4\\\",\\\"tiles-buildings-house4:1,4\\\",\\\"tiles-buildings-house4:2,4\\\",\\\"tiles-walkable-grass_to_water:2,0\\\",\\\"tiles-vehicles-pirate1-pirate_right:0,1\\\",\\\"tiles-vehicles-pirate1-pirate_right:1,1\\\",\\\"tiles-buildings-house4:0,3\\\",\\\"tiles-buildings-house4:1,3\\\",\\\"tiles-buildings-house4:2,3\\\",\\\"tiles-walkable-dock1:0,2\\\",\\\"tiles-walkable-dock1:1,2\\\",\\\"tiles-walkable-rockpath:0,1\\\",\\\"tiles-vehicles-pirate1-pirate_right:0,0\\\",\\\"tiles-vehicles-pirate1-pirate_right:1,0\\\",\\\"tiles-walkable-dock1:0,1\\\",\\\"tiles-walkable-dock1:1,1\\\",\\\"tiles-walkable-rockpath:0,0\\\",\\\"tiles-walkable-dock1:0,0\\\",\\\"tiles-walkable-dock1:1,0\\\",\\\"tiles-walkable-dock1:2,0\\\",\\\"tiles-buildings-mvtardis1:0,3\\\",\\\"tiles-buildings-mvtardis1:1,3\\\",\\\"tiles-buildings-mvtardis1:2,3\\\",\\\"tiles-walkable-alien_site1:0,2\\\",\\\"tiles-walkable-alien_site1:1,2\\\",\\\"tiles-walkable-alien_site1:2,2\\\",\\\"tiles-walkable-alien_site1:0,1\\\",\\\"tiles-walkable-alien_site1:1,1\\\",\\\"tiles-walkable-alien_site1:2,1\\\",\\\"tiles-vehicles-boat1-right:0,2\\\",\\\"tiles-vehicles-boat1-right:1,2\\\",\\\"tiles-vehicles-boat1-right:2,2\\\",\\\"tiles-walkable-alien_site1:0,0\\\",\\\"tiles-walkable-alien_site1:1,0\\\",\\\"tiles-walkable-alien_site1:2,0\\\",\\\"tiles-vehicles-boat1-right:0,1\\\",\\\"tiles-vehicles-boat1-right:1,1\\\",\\\"tiles-vehicles-boat1-right:2,1\\\",\\\"tiles-walkable-path:4,0\\\",\\\"tiles-vehicles-boat1-right:0,0\\\",\\\"tiles-vehicles-boat1-right:1,0\\\",\\\"tiles-vehicles-boat1-right:2,0\\\",\\\"tiles-walkable-path:1,2\\\",\\\"tiles-walkable-path:4,4\\\",\\\"tiles-walkable-path:4,3\\\",\\\"tiles-vehicles-boat2-right\\\",\\\"tiles-walkable-path:0,0\\\",\\\"animals-horse_right:0,1\\\",\\\"animals-horse_right:1,1\\\",\\\"tiles-walkable-path:4,1\\\",\\\"tiles-buildings-phonebooth:0,3\\\",\\\"tiles-buildings-phonebooth:1,3\\\",\\\"tiles-buildings-phonebooth:2,3\\\",\\\"tiles-walkable-bridge_ew:1,4\\\",\\\"tiles-walkable-path:0,2\\\",\\\"tiles-walkable-path:3,0\\\",\\\"tiles-walkable-path:0,1\\\",\\\"tiles-vehicles-wagon1:0,1\\\",\\\"tiles-vehicles-wagon1:1,1\\\",\\\"tiles-vehicles-wagon1:2,1\\\",\\\"tiles-buildings-house2:0,2\\\",\\\"tiles-buildings-house2:1,2\\\",\\\"tiles-buildings-house2:2,2\\\",\\\"tiles-buildings-house2:0,1\\\",\\\"tiles-buildings-house2:1,1\\\",\\\"tiles-buildings-house2:2,1\\\",\\\"tiles-walkable-bridge_ew:0,0\\\",\\\"tiles-walkable-bridge_ew:1,0\\\",\\\"tiles-walkable-bridge_ew:2,0\\\",\\\"tiles-walkable-path_ends:1,1\\\",\\\"tiles-buildings-house1:0,2\\\",\\\"tiles-buildings-house1:1,2\\\",\\\"tiles-buildings-house1:2,2\\\",\\\"tiles-walkable-path_ends:0,0\\\",\\\"tiles-walkable-path_ends:1,0\\\",\\\"tiles-walkable-path_ends:2,0\\\",\\\"tiles-buildings-house1:0,1\\\",\\\"tiles-buildings-house1:1,1\\\",\\\"tiles-buildings-house1:2,1\\\",\\\"tiles-buildings-shed2:2,3\\\",\\\"tiles-buildings-shed2:3,3\\\",\\\"tiles-buildings-shed1:0,2\\\",\\\"tiles-buildings-shed1:1,2\\\",\\\"tiles-buildings-shed1:2,2\\\",\\\"tiles-buildings-shed1:3,2\\\",\\\"tiles-buildings-shed2:0,2\\\",\\\"tiles-buildings-shed2:1,2\\\",\\\"tiles-buildings-shed2:2,2\\\",\\\"tiles-buildings-shed2:3,2\\\",\\\"tiles-buildings-shed1:0,1\\\",\\\"tiles-buildings-shed1:1,1\\\",\\\"tiles-buildings-shed1:2,1\\\",\\\"tiles-buildings-shed1:3,1\\\",\\\"tiles-buildings-shed2:0,1\\\",\\\"tiles-buildings-shed2:1,1\\\",\\\"tiles-buildings-shed2:2,1\\\",\\\"tiles-buildings-shed2:3,1\\\",\\\"tiles-walkable-path:3,1\\\",\\\"tiles-buildings-carusal:0,4\\\",\\\"tiles-buildings-carusal:1,4\\\",\\\"tiles-buildings-carusal:2,4\\\",\\\"tiles-buildings-carusal:3,4\\\",\\\"tiles-buildings-carusal:4,4\\\",\\\"tiles-buildings-ruin1:0,1\\\",\\\"tiles-buildings-carusal:0,3\\\",\\\"tiles-buildings-carusal:1,3\\\",\\\"tiles-buildings-carusal:2,3\\\",\\\"tiles-buildings-carusal:3,3\\\",\\\"tiles-buildings-carusal:4,3\\\",\\\"tiles-walkable-path:1,1\\\",\\\"tiles-walkable-path:1,0\\\",\\\"tiles-walkable-path:3,4\\\",\\\"tiles-buildings-stonehenge_tbar:0,2\\\",\\\"tiles-buildings-stonehenge_tbar:1,2\\\",\\\"tiles-buildings-stonehenge_tbar:2,2\\\",\\\"tiles-buildings-stonehenge_tbar:0,1\\\",\\\"tiles-buildings-stonehenge_tbar:1,1\\\",\\\"tiles-buildings-stonehenge_tbar:2,1\\\",\\\"tiles-buildings-ruin2:0,2\\\",\\\"tiles-buildings-ruin2:1,2\\\",\\\"tiles-buildings-ruin2:2,2\\\",\\\"tiles-buildings-ruin2:0,1\\\",\\\"tiles-buildings-ruin2:1,1\\\",\\\"tiles-buildings-ruin2:2,1\\\",\\\"tiles-walkable-teleporter1:0,2\\\",\\\"tiles-walkable-teleporter1:1,2\\\",\\\"tiles-walkable-teleporter1:2,2\\\",\\\"tiles-buildings-stonehenge1:0,2\\\",\\\"tiles-buildings-stonehenge1:1,2\\\",\\\"tiles-buildings-stonehenge3:1,2\\\",\\\"tiles-buildings-stonehenge3:2,2\\\",\\\"tiles-walkable-teleporter1:0,1\\\",\\\"tiles-walkable-teleporter1:1,1\\\",\\\"tiles-walkable-teleporter1:2,1\\\",\\\"tiles-buildings-stonehenge1:0,1\\\",\\\"tiles-buildings-stonehenge1:1,1\\\",\\\"tiles-buildings-stonehenge1:2,1\\\",\\\"tiles-buildings-stonehenge3:0,1\\\",\\\"tiles-buildings-stonehenge3:1,1\\\",\\\"tiles-buildings-stonehenge3:2,1\\\",\\\"tiles-walkable-teleporter1:0,0\\\",\\\"tiles-walkable-teleporter1:1,0\\\",\\\"tiles-walkable-teleporter1:2,0\\\",\\\"tiles-buildings-stonehenge1:1,0\\\",\\\"tiles-buildings-stonehenge1:2,0\\\",\\\"tiles-snowymountain1:0,2\\\",\\\"tiles-snowymountain1:1,2\\\",\\\"tiles-snowymountain1:2,2\\\",\\\"tiles-mountain1:0,2\\\",\\\"tiles-mountain1:1,2\\\",\\\"tiles-mountain1:2,2\\\",\\\"tiles-buildings-stonehenge2:0,1\\\",\\\"tiles-buildings-stonehenge2:1,1\\\",\\\"tiles-buildings-stonehenge2:2,1\\\",\\\"tiles-big_tree:0,2\\\",\\\"tiles-big_tree:1,2\\\"],\\\"data\\\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,3,4,4,4,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,3,7,8,9,10,10,5,0,0,0,0,0,3,4,4,4,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,11,12,12,12,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,7,8,14,10,15,16,17,13,0,0,0,18,19,20,15,20,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,22,23,23,24,25,26,12,12,12,12,12,13,0,0,0,0,2,0,0,11,7,8,9,10,16,27,27,10,26,13,0,0,28,29,30,30,30,31,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,11,22,23,32,32,33,34,23,23,35,23,24,25,26,12,13,0,0,0,0,11,36,8,9,10,16,27,16,37,16,38,26,13,0,39,0,0,0,0,0,28,0,11,12,12,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,22,32,32,40,41,42,23,32,34,35,32,33,34,24,25,26,12,12,12,12,22,36,43,44,45,27,10,8,9,10,38,33,26,12,13,0,0,0,0,0,39,11,22,23,46,47,35,48,48,23,32,32,49,0,0,0,0,0,0,0,0,0,0,50,32,24,24,51,52,53,54,24,24,24,24,55,32,33,34,23,24,25,23,23,55,36,56,57,6,37,15,43,14,16,38,33,33,33,26,12,12,12,12,12,12,22,23,32,49,48,48,58,58,32,24,24,25,59,0,0,0,0,0,0,0,0,0,50,24,24,25,59,60,24,25,61,62,33,35,24,24,32,32,32,33,34,32,32,24,36,8,9,6,9,10,56,57,8,63,64,23,23,23,23,23,23,23,23,23,32,32,24,65,59,35,48,66,24,33,33,34,54,35,0,0,0,0,0,0,0,0,50,35,25,59,60,35,33,34,25,59,60,33,67,47,24,24,24,68,69,70,71,71,72,43,37,43,37,16,73,74,75,9,38,32,32,32,32,32,32,32,32,32,23,46,33,76,54,67,58,77,78,79,32,33,34,67,58,0,0,0,0,1,0,0,50,80,59,60,60,67,67,24,25,59,60,60,60,61,62,81,67,24,24,72,43,43,37,56,57,56,8,9,10,57,43,37,38,24,24,24,82,83,83,83,84,83,85,85,85,86,85,85,87,48,34,54,24,25,33,34,54,35,48,0,0,0,0,0,88,89,89,89,90,60,60,67,67,67,35,24,25,59,60,59,60,81,70,8,56,15,8,9,8,8,14,10,16,57,91,92,93,25,59,60,60,94,95,54,96,23,24,25,59,32,49,81,67,58,34,54,33,34,32,49,81,67,58,0,0,0,0,0,0,0,0,18,88,89,89,35,35,60,67,67,67,35,35,24,25,59,36,43,37,16,8,9,43,43,37,16,27,37,38,35,23,46,47,35,48,97,98,54,96,32,33,34,54,24,25,59,60,66,32,32,78,79,24,25,59,35,48,0,0,0,0,0,0,0,0,28,0,0,0,88,89,90,60,60,60,67,67,67,33,24,35,92,92,92,99,37,56,56,57,27,91,92,93,67,32,49,81,67,58,33,48,54,96,24,25,23,46,47,35,48,100,77,33,33,33,34,33,34,54,67,58,0,0,0,1,0,0,2,0,39,0,0,0,0,0,88,89,89,90,60,60,60,67,67,35,35,24,25,101,92,93,33,101,92,93,60,60,23,46,47,35,48,66,47,48,48,96,33,34,32,49,81,67,58,78,79,33,33,33,34,54,81,67,67,67,0,0,0,0,0,0,0,0,11,12,12,12,13,0,0,0,0,88,89,90,60,60,60,67,67,33,34,24,25,23,46,47,23,46,47,35,48,49,81,67,58,77,81,67,58,96,32,49,24,25,59,35,48,34,54,78,79,35,67,25,59,60,60,49,0,0,0,1,0,0,0,11,22,24,25,25,26,13,0,0,0,0,0,88,89,90,60,60,60,67,35,47,34,32,49,81,32,49,81,67,58,25,59,60,66,25,59,60,66,96,24,25,33,34,54,67,58,34,54,33,34,54,60,60,49,49,49,102,0,0,0,0,0,1,0,50,32,33,34,34,25,103,0,0,0,0,0,0,0,88,90,59,60,60,104,35,24,25,55,35,24,25,25,24,55,105,54,100,77,34,54,100,77,96,105,34,54,106,77,81,49,49,67,33,34,54,49,49,49,48,49,103,0,0,0,0,0,0,0,50,24,32,24,33,34,26,13,0,0,0,0,1,0,0,88,90,59,60,60,67,33,24,25,107,83,83,83,83,83,84,108,109,110,84,84,84,84,86,84,84,84,84,87,49,49,60,35,48,49,49,49,49,49,49,49,103,0,0,0,0,0,11,12,22,24,24,25,34,24,25,103,0,0,1,0,0,111,112,0,50,25,59,60,60,35,33,34,113,24,25,114,115,116,35,67,33,33,35,35,67,67,60,60,49,113,113,33,49,49,49,67,58,49,35,41,49,35,48,102,117,0,1,0,0,0,50,23,24,25,33,34,33,33,34,103,0,0,0,0,0,118,119,0,50,80,25,59,60,23,46,47,113,48,34,120,121,122,67,60,35,46,67,67,60,60,102,89,90,123,124,102,89,90,49,49,49,81,67,125,49,67,58,103,0,0,0,0,0,11,22,32,24,25,47,62,46,47,102,117,0,0,0,1,0,126,127,0,88,89,90,59,60,32,49,81,113,58,23,46,47,35,48,48,67,49,60,60,23,102,117,0,88,128,129,117,0,88,90,49,25,59,49,130,49,49,102,117,0,0,0,0,0,50,24,24,24,54,59,32,49,81,103,0,0,0,0,0,0,0,0,0,0,0,88,90,59,24,25,59,113,23,32,49,81,67,58,58,60,49,49,49,102,117,0,1,0,131,132,133,0,0,88,89,90,49,134,135,136,49,103,0,1,0,0,0,0,50,24,137,138,139,60,24,25,59,26,13,0,0,0,0,0,0,1,0,2,0,1,50,25,33,34,54,113,32,49,81,67,58,35,49,49,102,89,89,117,0,0,0,0,0,0,0,0,0,0,0,88,90,49,49,49,102,117,0,0,0,0,0,11,22,24,140,141,142,47,24,25,67,35,26,12,12,13,0,0,0,0,0,0,0,11,22,25,23,47,47,113,24,25,59,60,66,67,49,49,103,0,0,0,0,0,0,1,143,144,145,1,0,0,0,0,50,49,49,49,103,0,0,0,0,0,0,50,24,33,146,147,148,60,33,34,60,81,81,35,35,26,12,13,0,0,0,0,11,22,24,25,32,49,81,113,33,34,54,100,77,60,49,49,103,0,1,0,0,0,1,0,149,150,151,0,0,0,0,0,88,90,49,102,117,0,0,0,0,0,0,50,80,23,24,25,59,60,35,67,60,60,60,67,67,67,35,26,12,12,12,12,22,32,24,25,107,83,83,152,66,47,35,48,33,49,49,49,103,0,0,0,0,0,0,0,153,154,155,0,0,0,0,1,0,50,49,103,0,0,0,0,0,0,0,88,90,32,49,81,67,67,67,89,89,89,60,60,60,33,67,80,35,80,80,33,32,24,47,59,113,34,54,100,77,81,67,58,49,33,49,49,103,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,88,89,117,0,0,0,0,0,0,0,0,50,80,25,59,60,102,117,0,0,0,88,89,89,90,60,60,67,47,67,82,156,84,156,156,86,156,157,24,25,59,60,66,33,33,33,49,36,4,4,4,4,4,5,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,1,0,0,0,0,0,88,89,89,89,89,117,0,0,0,0,0,0,0,88,89,90,60,60,60,67,35,113,24,25,24,25,158,33,34,54,100,77,49,33,33,49,36,43,14,16,73,74,17,4,4,4,4,4,4,4,4,5,0,0,0,28,0,0,0,0,0,0,0,0,0,0,18,0,0,0,0,0,1,0,0,159,0,0,0,88,89,90,60,60,67,113,33,34,33,34,160,157,24,25,49,49,49,49,49,49,36,43,16,43,43,43,43,43,43,43,43,15,43,43,8,17,4,4,5,39,0,0,0,0,0,0,1,0,0,0,28,0,1,0,0,0,0,0,0,0,0,0,0,0,0,50,25,59,60,113,23,46,47,23,46,158,24,25,47,49,49,49,49,49,101,92,92,92,92,92,92,92,92,92,92,92,92,99,43,43,73,74,17,5,0,0,0,0,0,0,0,0,0,1,39,1,0,0,0,0,0,0,0,0,1,0,0,0,11,22,25,59,60,113,24,161,162,32,49,163,24,25,49,49,24,25,49,24,25,23,23,23,23,23,23,23,23,23,23,23,23,101,92,99,43,43,57,17,5,0,0,0,0,0,0,0,0,0,18,0,1,0,0,0,1,0,0,0,0,1,11,12,22,32,164,165,166,113,23,46,47,35,48,158,23,23,23,23,49,23,23,23,23,34,32,32,32,32,32,32,32,24,25,65,24,25,25,101,92,99,43,8,17,5,0,0,0,0,0,1,0,0,28,0,0,0,1,11,13,167,0,11,12,12,22,23,32,24,24,25,59,113,24,25,25,67,32,168,156,156,156,156,156,156,84,156,156,156,156,156,156,84,156,156,156,156,156,152,35,35,35,35,35,36,43,43,9,21,0,0,0,0,0,0,0,0,39,0,1,11,12,22,80,13,0,50,49,81,67,32,24,24,25,59,59,168,169,169,169,169,169,152,24,105,24,24,24,24,170,24,25,171,172,173,24,76,106,47,174,175,176,24,24,25,34,24,25,36,57,15,9,21,0,0,0,0,2,0,0,0,1,11,12,47,23,24,80,103,0,50,49,81,67,24,25,59,59,59,59,113,106,25,55,25,25,24,25,24,25,78,79,24,170,25,35,33,34,54,35,96,49,81,177,178,179,24,24,25,24,25,25,101,99,43,37,21,0,1,0,0,0,0,0,1,11,22,23,107,156,156,156,180,181,182,156,156,156,156,156,156,183,156,156,113,24,25,25,35,184,185,186,47,35,33,81,35,170,35,67,33,34,54,67,96,25,59,32,32,32,24,25,35,67,67,33,60,36,43,57,21,0,0,0,0,0,11,12,12,22,32,32,96,24,23,32,103,0,50,81,67,25,59,81,187,188,189,59,113,24,25,67,67,190,191,192,81,67,81,54,67,193,194,60,24,25,24,25,96,24,25,24,25,47,35,81,67,60,60,67,60,101,92,99,21,0,0,0,0,0,50,23,23,32,24,24,96,24,24,25,103,0,50,24,25,59,24,195,196,197,198,59,113,67,60,24,25,32,32,32,24,25,24,199,200,201,202,24,25,25,47,35,96,35,47,35,49,81,67,33,60,59,60,60,59,24,25,36,21,0,0,0,0,0,50,32,32,24,24,25,96,25,24,25,26,12,22,59,24,25,59,203,204,205,206,25,113,106,25,24,25,24,35,35,47,35,35,207,208,209,210,35,47,35,81,67,96,106,81,24,25,24,25,25,24,25,59,60,59,24,25,36,21,0,159,0,1,0,50,24,24,25,24,25,96,25,61,62,24,25,59,47,35,24,25,24,25,59,25,59,113,24,25,35,35,33,35,67,81,67,67,32,49,81,46,24,25,24,25,211,163,24,25,24,25,47,35,35,35,35,24,25,34,24,25,36,21,0,0,0,0,0,50,24,25,59,23,46,96,35,67,60,24,106,59,25,55,59,24,24,25,59,25,35,188,35,67,67,67,67,24,25,24,25,24,25,24,25,25,47,35,47,35,107,152,47,35,47,35,81,67,35,67,67,41,67,35,35,25,36,21,0,0,0,0,0,50,24,25,59,24,25,96,25,60,60,47,35,25,24,24,25,24,24,25,59,46,46,100,46,24,25,24,25,24,23,46,47,35,48,46,212,213,214,215,216,67,113,67,81,67,81,67,24,25,24,25,60,125,60,59,24,25,36,21,0,0,0,0,0,50,24,25,24,25,24,96,35,59,60,81,35,35,25,25,59,35,23,46,47,46,46,217,46,24,25,47,33,35,32,49,81,67,58,49,218,219,220,221,222,60,158,60,54,60,24,25,23,46,47,35,33,130,60,81,24,25,36,21,0,0,0,0,0,50,25,59,23,46,47,96,67,34,67,24,35,35,24,25,24,25,24,25,33,33,34,54,54,35,67,81,67,67,24,25,59,60,66,25,24,25,24,25,24,25,170,223,105,25,23,23,32,49,106,67,59,41,60,59,24,25,36,21,0,0,1,1,0,50,25,59,61,62,24,188,41,24,25,25,24,25,24,25,59,24,25,24,25,24,25,35,67,24,25,24,25,59,33,34,54,81,77,59,23,23,23,23,46,23,160,224,224,156,224,224,224,225,87,60,59,125,67,59,60,24,25,103,0,0,0,0,0,50,25,24,25,24,25,24,125,24,25,25,24,25,35,24,25,25,59,25,59,24,25,59,25,59,23,46,35,23,46,47,23,46,33,23,46,47,35,48,49,32,32,32,32,32,24,24,24,226,227,228,59,130,60,59,60,24,25,103,0,0,0,0,0,50,25,59,24,25,25,24,130,25,24,25,55,67,24,25,59,25,23,46,47,35,48,23,46,23,46,35,35,48,49,81,32,49,81,32,49,81,67,58,25,24,24,24,24,24,25,59,60,229,230,231,59,60,60,59,60,24,25,103,0,0,0,0,0,50,25,59,24,25,25,232,233,234,24,25,24,25,59,25,59,25,32,49,81,67,58,32,49,32,49,81,67,58,25,59,24,25,59,24,35,59,60,66,23,23,23,23,23,23,32,33,33,33,33,33,33,33,67,81,67,24,25,103,0,0,0,0,0,50,24,25,24,24,25,235,236,237,24,25,24,25,59,35,23,46,238,239,240,60,66,24,25,24,25,59,60,66,32,49,32,49,32,33,34,54,81,77,32,32,32,32,32,32,24,241,242,33,33,33,33,243,244,59,60,24,25,103,0,0,0,0,0,50,25,59,24,25,33,34,54,33,34,54,23,23,46,47,32,49,245,246,247,81,77,81,67,33,34,54,34,77,24,33,24,25,24,25,24,25,24,25,24,35,24,24,24,24,25,248,249,250,33,33,251,252,253,59,60,24,25,26,12,13,0,0,0,50,25,59,23,24,25,32,24,25,24,25,32,32,49,81,24,25,254,255,256,24,25,59,60,24,25,24,25,59,60,49,81,67,32,32,49,32,49,33,49,32,32,49,32,32,32,33,257,258,33,33,33,33,33,59,60,67,259,260,261,103,0,0,0,50,25,59,32,24,25,24,23,23,46,54,24,24,25,59,60,60,32,32,49,32,24,25,59,24,24,25,59,24,24,25,59,60,24,54,25,24,25,24,25,24,24,25,262,263,264,24,33,265,266,267,33,33,24,25,59,60,33,33,33,103,0,1,0,50,25,59,24,23,35,25,32,32,49,23,23,23,32,32,24,24,24,24,25,24,25,59,60,34,24,25,59,60,24,25,59,60,24,25,59,60,24,25,59,24,25,59,60,34,24,25,59,33,33,33,33,35,24,25,59,60,33,33,33,103,0,0,0,50,25,59,60,32,23,23,24,24,35,32,32,32,268,269,25,268,269,268,269,23,23,23,23,268,269,268,269,268,269,268,269,23,23,23,46,47,23,23,35,23,23,23,23,46,23,23,23,46,23,59,32,32,24,25,262,263,264,33,25,103,0,0,0,50,226,227,228,226,227,228,23,23,23,24,24,24,33,34,54,34,54,33,34,54,32,35,33,34,33,34,54,34,54,33,34,54,32,32,49,81,32,32,49,32,32,32,32,49,33,32,32,49,32,32,24,24,25,59,33,33,33,33,102,117,0,0,0,50,80,25,59,60,24,24,32,32,32,32,32,24,33,34,54,33,34,54,33,34,54,33,34,33,34,33,34,33,33,34,54,24,24,24,268,269,24,24,25,24,24,262,263,264,24,24,24,25,259,260,261,25,59,33,33,54,33,77,103,0,0,0,0,88,89,90,59,60,60,67,24,24,24,24,24,25,268,269,268,269,268,269,268,269,35,35,268,269,268,269,268,269,268,269,268,269,268,269,33,33,268,269,35,35,35,35,35,35,35,262,263,264,33,33,33,262,263,264,35,35,35,35,103,0,0,0,0,0,0,50,25,59,60,60,60,60,35,60,60,60,33,34,33,34,33,34,54,34,54,67,33,34,54,33,34,54,33,33,33,34,33,33,34,54,33,34,54,67,67,67,67,67,67,33,33,33,33,33,33,33,33,33,67,67,67,67,103,0,0,0,1,0,0,50,268,269,268,269,268,269,268,269,268,269,33,34,54,54,33,33,34,54,268,269,33,33,33,33,34,54,33,34,54,33,34,54,268,269,33,33,268,269,60,60,60,60,60,33,33,54,33,77,33,34,54,33,77,60,60,60,103,0,0,0,0,1,0,50,33,34,54,100,33,34,33,34,54,100,77,34,33,34,54,35,33,33,34,54,33,34,54,33,34,54,34,54,33,34,54,54,54,54,54,54,54,54,54,102,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,117,0,0,0,0,0,0,50,33,34,54,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,34,54,80,117,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}\",\"main/top\":\"{\\\"width\\\":64,\\\"height\\\":64,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-cactus2:0,1\\\",\\\"tiles-cactus2:1,1\\\",\\\"tiles-buildings-ruin3:0,0\\\",\\\"tiles-buildings-ruin3:1,0\\\",\\\"tiles-buildings-ruin3:2,0\\\",\\\"tiles-cactus2:0,0\\\",\\\"tiles-cactus2:1,0\\\",\\\"tiles-furniture-alienstones1:0,3\\\",\\\"tiles-furniture-alienstones1:1,3\\\",\\\"tiles-furniture-alienstones1:2,3\\\",\\\"tiles-fir_tree1:0,1\\\",\\\"tiles-fir_tree1:1,1\\\",\\\"tiles-furniture-alienstones1:0,2\\\",\\\"tiles-furniture-alienstones1:1,2\\\",\\\"tiles-furniture-alienstones1:2,2\\\",\\\"tiles-fir_tree1:0,0\\\",\\\"tiles-fir_tree1:1,0\\\",\\\"animals-horse_left:0,0\\\",\\\"animals-horse_left:1,0\\\",\\\"tiles-cactus1:0,1\\\",\\\"tiles-cactus1:1,1\\\",\\\"tiles-redapple_tree:0,1\\\",\\\"tiles-redapple_tree:1,1\\\",\\\"tiles-furniture-alienstones1:0,1\\\",\\\"tiles-furniture-alienstones1:1,1\\\",\\\"tiles-furniture-alienstones1:2,1\\\",\\\"tiles-cactus1:0,0\\\",\\\"tiles-cactus1:1,0\\\",\\\"tiles-redapple_tree:0,0\\\",\\\"tiles-redapple_tree:1,0\\\",\\\"tiles-furniture-alienstones1:0,0\\\",\\\"tiles-furniture-alienstones1:1,0\\\",\\\"tiles-furniture-alienstones1:2,0\\\",\\\"tiles-buildings-house3:0,1\\\",\\\"tiles-buildings-house3:1,1\\\",\\\"tiles-buildings-house3:2,1\\\",\\\"tiles-buildings-house3:0,0\\\",\\\"tiles-buildings-house3:1,0\\\",\\\"tiles-buildings-house3:2,0\\\",\\\"tiles-walkable-grass:2,3\\\",\\\"tiles-vehicles-wagon1_road:0,0\\\",\\\"tiles-vehicles-wagon1_road:1,0\\\",\\\"tiles-vehicles-wagon1_road:2,0\\\",\\\"tiles-buildings-house4:0,2\\\",\\\"tiles-buildings-house4:1,2\\\",\\\"tiles-buildings-house4:2,2\\\",\\\"tiles-buildings-house4:0,1\\\",\\\"tiles-buildings-house4:1,1\\\",\\\"tiles-buildings-house4:2,1\\\",\\\"tiles-buildings-house4:0,0\\\",\\\"tiles-buildings-house4:1,0\\\",\\\"tiles-buildings-house4:2,0\\\",\\\"tiles-buildings-mvtardis1:0,2\\\",\\\"tiles-buildings-mvtardis1:1,2\\\",\\\"tiles-buildings-mvtardis1:2,2\\\",\\\"tiles-buildings-mvtardis1:0,1\\\",\\\"tiles-buildings-mvtardis1:1,1\\\",\\\"tiles-buildings-mvtardis1:2,1\\\",\\\"tiles-buildings-mvtardis1:0,0\\\",\\\"tiles-buildings-mvtardis1:1,0\\\",\\\"tiles-buildings-mvtardis1:2,0\\\",\\\"tiles-buildings-estatua\\\",\\\"animals-horse_right:0,0\\\",\\\"animals-horse_right:1,0\\\",\\\"tiles-buildings-phonebooth:0,2\\\",\\\"tiles-buildings-phonebooth:1,2\\\",\\\"tiles-buildings-phonebooth:2,2\\\",\\\"tiles-buildings-phonebooth:0,1\\\",\\\"tiles-buildings-phonebooth:1,1\\\",\\\"tiles-buildings-phonebooth:2,1\\\",\\\"tiles-buildings-phonebooth:0,0\\\",\\\"tiles-buildings-phonebooth:1,0\\\",\\\"tiles-buildings-phonebooth:2,0\\\",\\\"tiles-vehicles-wagon1_trsp:0,0\\\",\\\"tiles-vehicles-wagon1_trsp:1,0\\\",\\\"tiles-vehicles-wagon1_trsp:2,0\\\",\\\"tiles-buildings-house2:0,1\\\",\\\"tiles-buildings-house2:1,1\\\",\\\"tiles-buildings-house2:2,1\\\",\\\"tiles-buildings-house2:0,0\\\",\\\"tiles-buildings-house2:1,0\\\",\\\"tiles-buildings-house2:2,0\\\",\\\"tiles-buildings-house1:0,1\\\",\\\"tiles-buildings-house1:1,1\\\",\\\"tiles-buildings-house1:2,1\\\",\\\"tiles-buildings-house1:0,0\\\",\\\"tiles-buildings-house1:1,0\\\",\\\"tiles-buildings-house1:2,0\\\",\\\"tiles-buildings-shed1:0,0\\\",\\\"tiles-buildings-shed1:1,0\\\",\\\"tiles-buildings-shed1:2,0\\\",\\\"tiles-buildings-shed1:3,0\\\",\\\"tiles-buildings-shed2:0,0\\\",\\\"tiles-buildings-shed2:1,0\\\",\\\"tiles-buildings-shed2:2,0\\\",\\\"tiles-buildings-shed2:3,0\\\",\\\"tiles-buildings-ruin1:0,0\\\",\\\"tiles-buildings-carusal:0,2\\\",\\\"tiles-buildings-carusal:1,2\\\",\\\"tiles-buildings-carusal:2,2\\\",\\\"tiles-buildings-carusal:3,2\\\",\\\"tiles-buildings-carusal:4,2\\\",\\\"tiles-buildings-carusal:0,1\\\",\\\"tiles-buildings-carusal:1,1\\\",\\\"tiles-buildings-carusal:2,1\\\",\\\"tiles-buildings-carusal:3,1\\\",\\\"tiles-buildings-carusal:4,1\\\",\\\"tiles-buildings-carusal:0,0\\\",\\\"tiles-buildings-carusal:1,0\\\",\\\"tiles-buildings-carusal:2,0\\\",\\\"tiles-buildings-carusal:3,0\\\",\\\"tiles-buildings-carusal:4,0\\\",\\\"tiles-buildings-stonehenge_tbar:0,0\\\",\\\"tiles-buildings-stonehenge_tbar:1,0\\\",\\\"tiles-buildings-stonehenge_tbar:2,0\\\",\\\"tiles-buildings-ruin2:0,0\\\",\\\"tiles-buildings-ruin2:1,0\\\",\\\"tiles-buildings-ruin2:2,0\\\",\\\"tiles-furniture-transportbeam:0,2\\\",\\\"tiles-furniture-transportbeam:1,2\\\",\\\"tiles-furniture-transportbeam:2,2\\\",\\\"tiles-furniture-transportbeam:0,1\\\",\\\"tiles-furniture-transportbeam:1,1\\\",\\\"tiles-furniture-transportbeam:2,1\\\",\\\"tiles-buildings-stonehenge3:0,0\\\",\\\"tiles-buildings-stonehenge3:1,0\\\",\\\"tiles-buildings-stonehenge3:2,0\\\",\\\"tiles-furniture-transportbeam:0,0\\\",\\\"tiles-furniture-transportbeam:1,0\\\",\\\"tiles-furniture-transportbeam:2,0\\\",\\\"tiles-snowymountain1:0,1\\\",\\\"tiles-snowymountain1:1,1\\\",\\\"tiles-snowymountain1:2,1\\\",\\\"tiles-buildings-stonehenge2:0,0\\\",\\\"tiles-buildings-stonehenge2:1,0\\\",\\\"tiles-buildings-stonehenge2:2,0\\\",\\\"tiles-snowymountain1:0,0\\\",\\\"tiles-snowymountain1:1,0\\\",\\\"tiles-snowymountain1:2,0\\\",\\\"tiles-big_tree:0,1\\\",\\\"tiles-big_tree:1,1\\\",\\\"tiles-mountain1:0,1\\\",\\\"tiles-mountain1:1,1\\\",\\\"tiles-mountain1:2,1\\\",\\\"tiles-buildings-stonehenge_tbar:0,1\\\",\\\"tiles-buildings-stonehenge_tbar:1,1\\\",\\\"tiles-buildings-stonehenge_tbar:2,1\\\",\\\"tiles-big_tree:0,0\\\",\\\"tiles-big_tree:1,0\\\",\\\"tiles-mountain1:0,0\\\",\\\"tiles-mountain1:1,0\\\",\\\"tiles-mountain1:2,0\\\"],\\\"data\\\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,9,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,14,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,17,0,0,0,0,0,0,0,18,19,0,0,0,0,0,0,0,0,0,20,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,23,0,0,0,24,25,26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,30,0,0,0,31,32,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,34,35,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,37,38,39,0,0,0,0,0,0,0,0,0,0,0,0,22,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,30,22,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,42,43,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,45,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,48,49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,51,52,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,53,54,55,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,57,58,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,59,60,61,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,0,0,0,0,0,0,0,20,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,64,0,0,62,0,0,0,0,62,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,66,67,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,68,69,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,71,72,73,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,74,75,76,0,0,0,0,77,78,79,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,23,0,0,0,0,0,0,0,0,0,0,0,80,81,82,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,83,84,85,0,0,29,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,86,87,88,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,89,90,91,92,0,0,0,0,0,0,0,0,0,0,0,0,93,94,95,96,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,97,0,0,0,0,0,0,0,0,0,0,0,0,98,99,100,101,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,103,104,105,106,107,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,108,109,110,111,112,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,113,114,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,116,117,118,0,0,0,0,0,0,0,0,119,120,121,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,122,123,124,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,125,126,127,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,129,130,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,131,132,133,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,134,135,136,0,0,0,0,0,0,137,138,139,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,140,141,0,140,141,140,141,0,0,0,0,140,141,140,141,140,141,140,141,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,142,143,144,0,0,0,0,0,0,0,145,146,147,145,146,147,0,0,0,0,0,0,148,149,0,148,149,148,149,0,0,0,0,148,149,148,149,148,149,148,149,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,150,151,152,0,0,0,0,0,0,0,113,114,115,113,114,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,140,141,0,0,0,0,0,0,0,0,0,0,0,0,131,132,133,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,61,0,0,0,0,0,0,0,0,0,140,141,140,141,140,141,140,141,0,0,140,141,140,141,140,141,140,141,140,141,140,141,148,149,140,141,0,0,0,0,0,0,0,142,143,144,137,138,139,142,143,144,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,148,149,148,149,148,149,148,149,0,0,148,149,148,149,148,149,148,149,148,149,148,149,0,0,148,149,0,0,0,0,0,0,0,150,151,152,0,0,0,150,151,152,0,0,0,0,0,0,0,0,0,0,0,0,140,141,140,141,140,141,140,141,140,141,140,141,140,141,140,141,140,141,140,141,140,141,140,141,140,141,140,141,140,141,140,141,140,141,140,141,140,141,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,148,149,148,149,148,149,148,149,148,149,148,149,148,149,148,149,148,149,148,149,148,149,148,149,148,149,148,149,148,149,148,149,148,149,148,149,148,149,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}\",\"phonebooth1/base\":\"{\\\"width\\\":3,\\\"height\\\":4,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-walkable-phoneboothfloor:0,1\\\",\\\"tiles-walkable-phoneboothfloor:1,1\\\",\\\"tiles-walkable-phoneboothfloor:2,1\\\",\\\"tiles-walkable-phoneboothfloor:0,0\\\",\\\"tiles-walkable-phoneboothfloor:1,0\\\",\\\"tiles-walkable-phoneboothfloor:2,0\\\",\\\"tiles-wall-phoneboothwindow:0,1\\\",\\\"tiles-wall-phoneboothwindow:1,1\\\",\\\"tiles-wall-phoneboothwindow:2,1\\\",\\\"tiles-wall-phoneboothwindow:0,0\\\",\\\"tiles-wall-phoneboothwindow:1,0\\\",\\\"tiles-wall-phoneboothwindow:2,0\\\"],\\\"data\\\":[1,2,3,4,5,6,7,8,9,10,11,12]}\",\"phonebooth1/top\":\"{\\\"width\\\":3,\\\"height\\\":4,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-furniture-exitsquare\\\",\\\"tiles-furniture-phonebookrack\\\",\\\"tiles-furniture-phone2\\\"],\\\"data\\\":[0,1,0,0,0,2,0,0,3,0,0,0]}\",\"ruin1/base\":\"{\\\"width\\\":30,\\\"height\\\":30,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-wall-wall_stone_top:0,1\\\",\\\"tiles-wall-wall_stone_top:1,1\\\",\\\"tiles-wall-wall_stone_top:2,1\\\",\\\"tiles-walkable-floor_tile1:2,4\\\",\\\"tiles-walkable-floor_tile1:1,3\\\",\\\"tiles-walkable-floor_tile1:2,3\\\",\\\"tiles-walkable-floor_tile1:0,3\\\",\\\"tiles-walkable-floor_tile1:0,2\\\",\\\"tiles-walkable-floor_tile1:1,2\\\",\\\"tiles-walkable-floor_tile1:2,2\\\",\\\"tiles-walkable-floor_tile2:2,2\\\",\\\"tiles-walkable-floor_tile2:1,2\\\",\\\"tiles-walkable-floor_tile1:3,3\\\",\\\"tiles-walkable-floor_tile1:3,2\\\",\\\"tiles-walkable-floor_tile1:4,2\\\",\\\"tiles-walkable-floor_tile1:0,1\\\",\\\"tiles-walkable-floor_tile1:1,1\\\",\\\"tiles-walkable-floor_tile1:2,1\\\",\\\"tiles-walkable-floor_tile1:3,1\\\",\\\"tiles-walkable-floor_tile2:1,0\\\",\\\"tiles-walkable-floor_tile2:0,2\\\",\\\"tiles-walkable-floor_tile1:4,1\\\",\\\"tiles-walkable-floor_tile1:3,4\\\",\\\"tiles-walkable-floor_tile1:4,4\\\",\\\"tiles-walkable-floor_tile1:0,0\\\",\\\"tiles-walkable-floor_tile1:1,0\\\",\\\"tiles-walkable-floor_tile1:2,0\\\",\\\"tiles-walkable-floor_tile1:3,0\\\",\\\"tiles-walkable-floor_tile1:4,3\\\",\\\"tiles-walkable-floor_tile1:4,0\\\",\\\"tiles-walkable-floor_tile1:0,4\\\",\\\"tiles-walkable-floor_tile1:1,4\\\",\\\"tiles-walkable-floor_tile2:2,0\\\",\\\"tiles-wall-wall_stone_top:0,0\\\",\\\"tiles-wall-wall_stone_top:1,0\\\",\\\"tiles-wall-wall_stone_top:2,0\\\"],\\\"data\\\":[1,2,3,2,3,1,2,2,1,2,2,4,1,2,3,1,2,2,1,2,3,1,2,3,1,2,3,1,2,3,1,5,6,7,5,6,8,9,10,11,12,7,5,6,13,8,9,10,14,15,6,13,8,9,10,14,15,12,13,1,1,9,12,8,9,10,16,17,18,19,20,21,9,10,14,16,17,18,19,22,23,24,16,17,18,19,22,10,14,1,1,17,18,16,17,18,25,26,27,28,3,16,17,18,19,25,26,27,28,21,13,29,25,26,27,28,30,18,19,1,2,26,27,25,26,31,32,4,23,24,1,33,26,27,28,16,17,18,19,22,14,15,33,5,6,25,26,27,28,3,1,26,27,28,30,7,5,6,13,29,3,33,32,4,23,25,26,27,28,30,19,22,33,9,10,25,26,27,28,1,1,5,6,13,3,1,3,3,14,15,3,33,5,11,13,29,31,12,26,27,28,30,33,17,18,19,22,9,10,1,1,9,10,14,1,16,12,3,19,22,1,1,2,3,1,2,3,1,2,3,1,2,3,26,27,21,30,17,18,3,1,33,18,19,3,25,31,1,4,23,24,16,17,18,19,22,8,9,10,14,8,9,10,14,15,6,25,26,27,1,3,33,27,28,30,22,7,3,6,13,29,25,26,27,28,30,16,17,11,19,16,17,18,19,22,10,14,15,31,1,1,33,26,21,28,30,8,3,10,14,15,23,24,23,24,7,25,26,27,28,25,26,27,28,30,18,19,22,7,2,1,33,6,13,29,4,16,3,18,19,22,13,29,3,29,12,4,23,24,7,5,6,13,25,3,27,28,30,8,1,1,33,10,14,15,6,25,26,27,28,30,14,15,1,15,5,6,13,29,8,9,10,14,15,1,33,13,12,16,3,1,33,18,19,22,10,14,15,16,17,18,19,11,3,22,9,10,14,15,16,17,18,19,22,3,10,14,15,25,1,1,26,27,1,2,3,1,2,3,1,2,3,2,3,2,3,1,2,3,25,26,27,28,30,3,11,19,22,13,1,3,32,4,25,26,27,28,30,18,19,22,4,23,24,25,26,27,28,30,31,32,4,23,25,3,1,3,1,3,1,1,5,6,13,29,7,25,26,27,28,30,6,13,29,7,5,6,13,29,7,5,6,13,29,31,16,17,18,33,1,1,9,10,14,15,8,9,10,14,8,3,2,3,1,8,9,10,14,15,8,9,10,14,15,7,12,26,27,28,1,1,17,18,19,22,16,17,18,19,16,3,18,19,22,16,17,18,19,22,16,17,18,19,22,8,9,10,16,17,2,1,26,27,28,30,25,26,27,28,33,3,27,28,30,25,26,27,28,21,25,26,27,28,30,16,17,18,25,26,1,1,32,4,23,24,31,32,1,2,3,1,2,3,1,2,3,1,1,2,3,1,1,2,3,25,26,27,21,30,3,3,5,6,13,29,7,5,6,13,29,7,5,6,13,29,7,5,6,13,12,3,33,6,13,29,7,5,6,13,1,1,9,10,14,1,8,9,10,14,15,8,9,10,14,15,8,9,10,14,15,1,33,10,14,15,8,9,10,14,1,1,17,18,12,3,21,17,18,19,22,16,17,18,19,22,16,17,18,19,22,3,33,18,19,22,16,17,18,19,1,1,26,27,3,3,3,3,1,3,3,1,2,3,28,30,25,26,27,1,2,3,3,1,2,3,3,3,27,28,1,1,32,4,23,24,31,32,4,23,24,31,32,4,23,24,31,32,4,23,24,31,32,4,23,24,31,32,4,23,3,1,5,6,13,29,7,5,6,13,29,7,5,6,13,29,7,5,6,13,29,7,5,6,21,29,7,5,6,13,1,1,11,10,14,15,8,9,10,14,15,8,9,10,14,15,8,9,10,14,15,8,9,10,14,15,8,9,10,33,1,1,2,3,1,2,2,1,2,3,1,2,3,1,2,3,1,2,2,1,2,3,1,2,3,1,2,3,1,2,3,34,35,36,34,35,36,34,35,36,34,35,36,34,35,36,34,35,36,34,35,36,34,35,36,34,35,36,34,35,36]}5,6,13,29,7,5,6,21,29,7,5,6,13,1,1,11,10,14,15,8,9,10,14,15,8,9,10,14,15,8,9,10,14,15,8,9,10,14,15,8,9,10,33,1,1,2,3,1,2,2,1,2,3,1,2,3,1,2,3,1,2,2,1,2,3,1,2,3,1,2,3,1,2,3,43,44,45,43,44,45,43,44,45,43,44,45,43,44,45,43,44,45,43,44,45,43,44,45,43,44,45,43,44,45]}\",\"ruin1/top\":\"{\\\"width\\\":30,\\\"height\\\":30,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-furniture-exitsquare\\\",\\\"tiles-wall-wall_stone_top:0,0\\\",\\\"tiles-wall-wall_stone_top:1,0\\\",\\\"tiles-wall-wall_stone_top:2,0\\\",\\\"tiles-furniture-bookshelf1\\\",\\\"tiles-furniture-worthy1\\\",\\\"tiles-furniture-chair\\\"],\\\"data\\\":[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,4,2,3,4,2,3,4,4,0,2,3,2,3,4,2,3,4,2,3,4,2,3,4,2,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,4,2,3,4,2,3,4,2,2,3,4,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,4,3,4,3,4,2,3,4,2,3,4,2,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,4,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,2,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,4,2,3,4,2,3,4,2,2,3,4,0,2,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,4,2,3,4,2,2,3,4,0,0,5,0,0,2,3,4,2,3,4,2,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}\",\"snowymountain/base\":\"{\\\"width\\\":24,\\\"height\\\":16,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-walkable-insideskull:0,2\\\",\\\"tiles-walkable-insideskull:1,2\\\",\\\"tiles-walkable-insideskull:2,2\\\",\\\"tiles-walkable-insideskull:3,2\\\",\\\"tiles-walkable-tardisfloor:0,3\\\",\\\"tiles-walkable-tardisfloor:1,3\\\",\\\"tiles-walkable-tardisfloor:2,3\\\",\\\"tiles-walkable-tardisfloor:3,3\\\",\\\"tiles-walkable-insideskull:0,1\\\",\\\"tiles-walkable-insideskull:1,1\\\",\\\"tiles-walkable-insideskull:2,1\\\",\\\"tiles-walkable-insideskull:3,1\\\",\\\"tiles-walkable-tardisfloor:0,2\\\",\\\"tiles-walkable-tardisfloor:1,2\\\",\\\"tiles-walkable-tardisfloor:2,2\\\",\\\"tiles-walkable-tardisfloor:3,2\\\",\\\"tiles-walkable-insideskull:0,0\\\",\\\"tiles-walkable-insideskull:1,0\\\",\\\"tiles-walkable-insideskull:2,0\\\",\\\"tiles-walkable-insideskull:3,0\\\",\\\"tiles-walkable-tardisfloor:0,1\\\",\\\"tiles-walkable-tardisfloor:1,1\\\",\\\"tiles-walkable-tardisfloor:2,1\\\",\\\"tiles-walkable-tardisfloor:3,1\\\",\\\"tiles-walkable-insideskull:0,3\\\",\\\"tiles-walkable-insideskull:1,3\\\",\\\"tiles-walkable-insideskull:2,3\\\",\\\"tiles-walkable-insideskull:3,3\\\",\\\"tiles-walkable-tardisfloor:0,0\\\",\\\"tiles-walkable-tardisfloor:1,0\\\",\\\"tiles-walkable-tardisfloor:2,0\\\",\\\"tiles-walkable-tardisfloor:3,0\\\",\\\"tiles-walkable-shedtile\\\"],\\\"data\\\":[1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,5,6,7,8,9,10,11,12,9,10,11,12,9,10,11,12,9,10,11,12,9,10,11,12,13,14,15,16,17,18,19,20,17,18,19,20,17,18,19,20,17,18,19,20,17,18,19,20,21,22,23,24,17,9,10,11,12,9,10,11,1,2,3,4,1,25,26,27,28,1,2,3,29,30,31,32,25,26,27,28,25,26,27,28,25,26,27,28,25,26,27,28,25,26,27,28,25,26,27,28,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,9,10,11,12,9,10,11,12,9,10,11,12,9,10,11,12,9,10,11,12,9,10,11,12,17,18,19,20,17,18,19,20,17,33,33,33,33,33,19,20,17,18,19,20,17,18,19,20,25,26,27,28,25,26,27,28,25,33,33,33,33,33,27,28,25,26,27,28,25,26,27,28,1,2,3,4,1,2,3,4,1,33,33,33,33,33,3,4,1,2,3,4,1,2,3,4,9,10,11,12,9,10,11,12,9,10,11,12,9,10,11,12,9,10,11,12,9,10,11,12,17,18,19,20,17,18,19,20,17,18,19,20,17,18,19,20,17,18,19,20,17,18,19,20,25,26,27,28,25,26,27,28,25,26,27,28,25,26,27,28,25,26,27,28,25,26,27,28,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,9,10,11,12,9,10,11,12,9,10,11,12,9,10,11,12,9,10,11,12,9,10,11,12,17,18,19,20,17,18,19,20,17,18,19,20,17,18,19,20,17,18,19,20,17,18,19,20]}\",\"snowymountain/top\":\"{\\\"width\\\":24,\\\"height\\\":16,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-furniture-transportbeam:0,2\\\",\\\"tiles-furniture-transportbeam:1,2\\\",\\\"tiles-furniture-transportbeam:2,2\\\",\\\"tiles-furniture-transportbeam:0,1\\\",\\\"tiles-furniture-transportbeam:1,1\\\",\\\"tiles-furniture-transportbeam:2,1\\\",\\\"tiles-furniture-transportbeam:0,0\\\",\\\"tiles-furniture-transportbeam:1,0\\\",\\\"tiles-furniture-transportbeam:2,0\\\",\\\"tiles-furniture-arrow_right\\\",\\\"tiles-furniture-arrow_down\\\",\\\"tiles-wip\\\"],\\\"data\\\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,8,8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}\",\"tardis1/base\":\"{\\\"width\\\":32,\\\"height\\\":32,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-wall-wall_tardis:0,1\\\",\\\"tiles-wall-wall_tardis:1,1\\\",\\\"tiles-wall-wall_tardis:2,1\\\",\\\"tiles-wall-wall_tardis:0,0\\\",\\\"tiles-walkable-tardisfloor:1,2\\\",\\\"tiles-walkable-tardisfloor:2,2\\\",\\\"tiles-walkable-tardisfloor:3,2\\\",\\\"tiles-walkable-tardisfloor:0,2\\\",\\\"tiles-walkable-sand:0,3\\\",\\\"tiles-walkable-sand:2,3\\\",\\\"tiles-walkable-sand:3,3\\\",\\\"tiles-wall-wall_tardis:2,0\\\",\\\"tiles-walkable-tardisfloor:1,1\\\",\\\"tiles-walkable-tardisfloor:2,1\\\",\\\"tiles-walkable-tardisfloor:3,1\\\",\\\"tiles-walkable-tardisfloor:0,1\\\",\\\"tiles-walkable-sand:0,2\\\",\\\"tiles-walkable-sand:2,2\\\",\\\"tiles-walkable-sand:3,2\\\",\\\"tiles-walkable-tardisfloor:1,0\\\",\\\"tiles-walkable-tardisfloor:2,0\\\",\\\"tiles-walkable-tardisfloor:3,0\\\",\\\"tiles-walkable-tardisfloor:0,0\\\",\\\"tiles-walkable-sand:1,0\\\",\\\"tiles-walkable-sand:0,1\\\",\\\"tiles-cactus1:0,2\\\",\\\"tiles-cactus1:1,2\\\",\\\"tiles-walkable-sand:1,3\\\",\\\"tiles-walkable-tardisfloor:1,3\\\",\\\"tiles-walkable-tardisfloor:2,3\\\",\\\"tiles-walkable-tardisfloor:3,3\\\",\\\"tiles-walkable-tardisfloor:0,3\\\",\\\"tiles-walkable-sand:0,0\\\",\\\"tiles-walkable-cow_skull1\\\",\\\"tiles-walkable-sand:1,2\\\",\\\"tiles-walkable-ribcage1\\\",\\\"tiles-walkable-sand:1,1\\\",\\\"tiles-walkable-sand:2,1\\\",\\\"tiles-walkable-sand:3,1\\\",\\\"tiles-walkable-sand:4,1\\\",\\\"tiles-walkable-sand:2,0\\\",\\\"tiles-walkable-sand:3,0\\\",\\\"tiles-walkable-sand:4,0\\\",\\\"tiles-furniture-tardiscontrol:0,3\\\",\\\"tiles-furniture-tardiscontrol:1,3\\\",\\\"tiles-furniture-tardiscontrol:2,3\\\",\\\"tiles-furniture-tardiscontrol:3,3\\\",\\\"tiles-furniture-tardiscontrol:0,2\\\",\\\"tiles-furniture-tardiscontrol:1,2\\\",\\\"tiles-furniture-tardiscontrol:2,2\\\",\\\"tiles-furniture-tardiscontrol:3,2\\\",\\\"tiles-furniture-alientank2:0,3\\\",\\\"tiles-furniture-alientank2:1,3\\\",\\\"tiles-furniture-alientank2:2,3\\\",\\\"tiles-furniture-alientank2:3,3\\\",\\\"tiles-furniture-alientank2:0,2\\\",\\\"tiles-furniture-alientank2:1,2\\\",\\\"tiles-furniture-alientank2:2,2\\\",\\\"tiles-furniture-alientank2:3,2\\\",\\\"tiles-wall-shed1:0,2\\\",\\\"tiles-wall-shed1:1,2\\\",\\\"tiles-wall-shed1:2,2\\\",\\\"tiles-wall-shed1:0,1\\\",\\\"tiles-walkable-shedtile\\\",\\\"tiles-wall-shed1:2,1\\\",\\\"tiles-wall-todntink:0,1\\\",\\\"tiles-wall-todntink:1,1\\\",\\\"tiles-wall-todntink:2,1\\\",\\\"tiles-wall-todntink:3,1\\\",\\\"tiles-wall-shed1:0,0\\\",\\\"tiles-wall-todntink:0,0\\\",\\\"tiles-wall-todntink:1,0\\\",\\\"tiles-wall-todntink:2,0\\\",\\\"tiles-wall-todntink:3,0\\\",\\\"tiles-wall-shed1:2,0\\\",\\\"tiles-wall-wall_tardis:1,0\\\"],\\\"data\\\":[1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,3,4,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,4,9,10,11,11,9,9,12,1,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,1,17,18,19,19,17,17,3,4,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,24,25,26,27,9,28,25,12,1,29,30,31,32,29,30,31,32,29,30,31,32,29,30,31,32,29,30,31,32,29,30,31,24,33,28,10,34,35,33,3,4,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,4,17,35,18,19,36,17,12,1,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,1,25,37,38,39,40,25,3,4,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,4,33,24,41,42,43,33,12,1,29,30,31,32,29,30,31,32,29,30,31,44,45,46,47,32,29,30,31,32,29,30,31,1,2,3,2,3,1,2,3,4,5,6,7,8,5,6,7,8,5,6,7,48,49,50,51,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,12,1,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,3,4,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,12,1,29,30,31,32,29,30,31,32,29,30,31,32,29,30,31,32,29,30,31,32,29,30,31,32,29,30,31,32,29,30,3,4,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,12,1,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,3,4,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,12,1,29,30,31,32,29,30,31,32,29,30,31,32,29,30,31,32,29,30,31,32,29,30,31,32,29,30,31,32,29,30,3,4,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,12,1,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,3,4,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,12,1,29,30,31,32,29,30,31,52,53,54,55,32,29,30,31,32,29,30,31,32,29,30,31,32,29,30,31,32,29,30,3,4,5,6,7,8,5,6,7,56,57,58,59,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,12,1,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,3,4,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,12,1,29,30,31,32,29,30,31,32,29,30,31,32,29,30,31,32,29,30,31,32,29,30,31,32,29,30,31,32,29,30,3,4,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,12,1,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,3,4,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,22,23,20,21,12,60,61,61,61,61,62,30,31,32,29,30,31,32,29,30,31,32,29,30,31,32,29,30,31,32,29,30,31,32,29,30,3,63,64,64,64,64,65,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,5,6,12,63,66,67,68,69,65,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,70,71,72,73,74,75,76,12,4,76,12,4,76,12,4,76,12,4,76,12,4,76,12,4,76,12,4,76,12,4,76,12]}\",\"tardis1/top\":\"{\\\"width\\\":32,\\\"height\\\":32,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-cactus1:0,1\\\",\\\"tiles-cactus1:1,1\\\",\\\"tiles-cactus1:0,0\\\",\\\"tiles-cactus1:1,0\\\",\\\"tiles-furniture-transportbeam:0,2\\\",\\\"tiles-furniture-transportbeam:1,2\\\",\\\"tiles-furniture-transportbeam:2,2\\\",\\\"tiles-furniture-transportbeam:0,1\\\",\\\"tiles-furniture-transportbeam:1,1\\\",\\\"tiles-furniture-transportbeam:2,1\\\",\\\"tiles-furniture-vase1\\\",\\\"tiles-furniture-transportbeam:0,0\\\",\\\"tiles-furniture-transportbeam:1,0\\\",\\\"tiles-furniture-transportbeam:2,0\\\",\\\"tiles-wall-wall_tardis:0,0\\\",\\\"tiles-wall-wall_tardis:1,0\\\",\\\"tiles-wall-wall_tardis:2,0\\\",\\\"tiles-furniture-tardiscontrol:0,1\\\",\\\"tiles-furniture-tardiscontrol:1,1\\\",\\\"tiles-furniture-tardiscontrol:2,1\\\",\\\"tiles-furniture-tardiscontrol:3,1\\\",\\\"tiles-furniture-tardiscontrol:0,0\\\",\\\"tiles-furniture-tardiscontrol:1,0\\\",\\\"tiles-furniture-tardiscontrol:2,0\\\",\\\"tiles-furniture-tardiscontrol:3,0\\\",\\\"tiles-furniture-alienstones1:0,3\\\",\\\"tiles-furniture-alienstones1:1,3\\\",\\\"tiles-furniture-alienstones1:2,3\\\",\\\"tiles-furniture-exitsquare\\\",\\\"tiles-furniture-arrow_right\\\",\\\"tiles-furniture-alienstones1:0,2\\\",\\\"tiles-furniture-alienstones1:1,2\\\",\\\"tiles-furniture-alienstones1:2,2\\\",\\\"tiles-furniture-alientank2:0,1\\\",\\\"tiles-furniture-alientank2:1,1\\\",\\\"tiles-furniture-alientank2:2,1\\\",\\\"tiles-furniture-alientank2:3,1\\\",\\\"tiles-furniture-alienstones1:0,1\\\",\\\"tiles-furniture-alienstones1:1,1\\\",\\\"tiles-furniture-alienstones1:2,1\\\",\\\"tiles-furniture-alientank2:0,0\\\",\\\"tiles-furniture-alientank2:1,0\\\",\\\"tiles-furniture-alientank2:2,0\\\",\\\"tiles-furniture-alientank2:3,0\\\",\\\"tiles-furniture-alienstones1:0,0\\\",\\\"tiles-furniture-alienstones1:1,0\\\",\\\"tiles-furniture-alienstones1:2,0\\\"],\\\"data\\\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,6,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,9,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,12,13,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,16,17,15,16,17,15,16,0,0,0,0,0,0,0,0,0,0,0,0,18,19,20,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,23,24,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,30,31,32,33,0,0,0,0,0,0,0,0,0,0,0,0,0,34,35,36,37,0,0,0,0,0,0,0,0,0,0,0,0,38,39,40,0,0,0,0,0,0,0,0,0,0,0,0,0,41,42,43,44,0,0,0,0,0,0,0,0,0,0,0,0,45,46,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}\",\"teleporter1/base\":\"{\\\"width\\\":5,\\\"height\\\":10,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-wall-wall_brick2:0,0\\\",\\\"tiles-wall-wall_brick2:1,0\\\",\\\"tiles-walkable-planks\\\",\\\"tiles-wall-wall_brick2:3,0\\\",\\\"tiles-wall-wall_brick2:4,0\\\",\\\"tiles-walkable-grass:2,4\\\",\\\"tiles-walkable-grass:0,4\\\",\\\"tiles-walkable-grass:1,4\\\",\\\"tiles-walkable-grass:3,2\\\",\\\"tiles-walkable-grass:4,2\\\",\\\"tiles-walkable-grass:3,1\\\",\\\"tiles-walkable-grass:4,1\\\",\\\"tiles-wall-wall_brick2:2,0\\\"],\\\"data\\\":[1,2,3,4,5,1,6,7,8,5,1,7,7,7,5,1,7,7,7,5,1,7,7,7,5,1,7,7,7,5,1,7,7,7,5,1,9,10,10,5,1,11,12,12,5,1,2,13,4,5]}\",\"teleporter1/top\":\"{\\\"width\\\":5,\\\"height\\\":10,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-furniture-exitsquare\\\",\\\"tiles-furniture-painting2\\\",\\\"tiles-furniture-transportbeam:0,2\\\",\\\"tiles-furniture-transportbeam:1,2\\\",\\\"tiles-furniture-transportbeam:2,2\\\",\\\"tiles-furniture-painting1\\\",\\\"tiles-furniture-transportbeam:0,1\\\",\\\"tiles-furniture-transportbeam:1,1\\\",\\\"tiles-furniture-transportbeam:2,1\\\",\\\"tiles-furniture-transportbeam:0,0\\\",\\\"tiles-furniture-transportbeam:1,0\\\",\\\"tiles-furniture-transportbeam:2,0\\\"],\\\"data\\\":[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,3,4,5,0,6,7,8,9,0,0,10,11,12,0,0,0,0,0,0]}\",\"tinkerlair/base\":\"{\\\"width\\\":7,\\\"height\\\":7,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-wall-shed1:0,2\\\",\\\"tiles-wall-shed1:1,2\\\",\\\"tiles-wall-shed1:4,0\\\",\\\"tiles-wall-shed1:5,0\\\",\\\"tiles-wall-shed1:0,1\\\",\\\"tiles-walkable-shedtile\\\",\\\"tiles-walkable-shedexits:0,0\\\",\\\"tiles-wall-shed1:6,2\\\",\\\"tiles-wall-shed1:2,1\\\",\\\"tiles-wall-todntink:2,1\\\",\\\"tiles-wall-todntink:3,1\\\",\\\"tiles-wall-todntink:0,1\\\",\\\"tiles-wall-todntink:1,1\\\",\\\"tiles-wall-shed1:0,0\\\",\\\"tiles-wall-todntink:2,0\\\",\\\"tiles-wall-todntink:3,0\\\",\\\"tiles-wall-todntink:0,0\\\",\\\"tiles-wall-todntink:1,0\\\",\\\"tiles-wall-shed1:2,0\\\"],\\\"data\\\":[1,2,3,3,3,2,4,5,6,6,6,6,6,7,5,6,6,6,6,6,8,5,6,6,6,6,6,9,5,6,6,6,6,6,9,5,10,11,6,12,13,9,14,15,16,3,17,18,19]}\",\"tinkermaze0/base\":\"{\\\"width\\\":7,\\\"height\\\":7,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-wall-shed1:0,2\\\",\\\"tiles-wall-shed1:1,2\\\",\\\"tiles-wall-shed1:5,0\\\",\\\"tiles-walkable-floor1\\\",\\\"tiles-wall-shed1:3,0\\\",\\\"tiles-wall-shed1:2,2\\\",\\\"tiles-wall-shed1:0,1\\\",\\\"tiles-wall-shed1:2,1\\\",\\\"tiles-wall-shed1:2,0\\\",\\\"tiles-wall-shed1:0,0\\\",\\\"tiles-wall-shed1:4,0\\\"],\\\"data\\\":[1,2,3,4,5,2,6,7,4,4,4,4,4,8,9,4,4,4,4,4,10,4,4,4,4,4,4,4,6,4,4,4,4,4,1,7,4,4,4,4,4,8,10,11,3,4,5,11,9]}\",\"tinkermaze0/top\":\"{\\\"width\\\":7,\\\"height\\\":7,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-furniture-transportbeam:0,2\\\",\\\"tiles-furniture-transportbeam:1,2\\\",\\\"tiles-furniture-transportbeam:2,2\\\",\\\"tiles-furniture-transportbeam:0,1\\\",\\\"tiles-furniture-transportbeam:1,1\\\",\\\"tiles-furniture-transportbeam:2,1\\\",\\\"tiles-furniture-transportbeam:0,0\\\",\\\"tiles-furniture-transportbeam:1,0\\\",\\\"tiles-furniture-transportbeam:2,0\\\"],\\\"data\\\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,0,0,0,0,4,5,6,0,0,0,0,7,8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}\",\"tinkermaze1/base\":\"{\\\"width\\\":7,\\\"height\\\":7,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-wall-shed1:0,2\\\",\\\"tiles-wall-shed1:1,2\\\",\\\"tiles-wall-shed1:5,0\\\",\\\"tiles-walkable-floor1\\\",\\\"tiles-wall-shed1:3,0\\\",\\\"tiles-wall-shed1:2,2\\\",\\\"tiles-wall-shed1:0,1\\\",\\\"tiles-wall-shed1:2,1\\\",\\\"tiles-wall-shed1:2,0\\\",\\\"tiles-wall-shed1:0,0\\\",\\\"tiles-wall-shed1:4,0\\\"],\\\"data\\\":[1,2,3,4,5,2,6,7,4,4,4,4,4,8,9,4,4,4,4,4,10,4,4,4,4,4,4,4,6,4,4,4,4,4,1,7,4,4,4,4,4,8,10,11,3,4,5,11,9]}\",\"tinkermaze2/base\":\"{\\\"width\\\":7,\\\"height\\\":7,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-wall-shed1:0,2\\\",\\\"tiles-wall-shed1:1,2\\\",\\\"tiles-wall-shed1:5,0\\\",\\\"tiles-walkable-floor1\\\",\\\"tiles-wall-shed1:3,0\\\",\\\"tiles-wall-shed1:2,2\\\",\\\"tiles-wall-shed1:0,1\\\",\\\"tiles-wall-shed1:2,1\\\",\\\"tiles-wall-shed1:2,0\\\",\\\"tiles-wall-shed1:0,0\\\",\\\"tiles-wall-shed1:4,0\\\"],\\\"data\\\":[1,2,3,4,5,2,6,7,4,4,4,4,4,8,9,4,4,4,4,4,10,4,4,4,4,4,4,4,6,4,4,4,4,4,1,7,4,4,4,4,4,8,10,11,3,4,5,11,9]}\",\"tinkermaze3/base\":\"{\\\"width\\\":7,\\\"height\\\":7,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-wall-shed1:0,2\\\",\\\"tiles-wall-shed1:1,2\\\",\\\"tiles-wall-shed1:5,0\\\",\\\"tiles-walkable-floor1\\\",\\\"tiles-wall-shed1:3,0\\\",\\\"tiles-wall-shed1:2,2\\\",\\\"tiles-wall-shed1:0,1\\\",\\\"tiles-wall-shed1:2,1\\\",\\\"tiles-wall-shed1:2,0\\\",\\\"tiles-wall-shed1:0,0\\\",\\\"tiles-wall-shed1:4,0\\\"],\\\"data\\\":[1,2,3,4,5,2,6,7,4,4,4,4,4,8,9,4,4,4,4,4,10,4,4,4,4,4,4,4,6,4,4,4,4,4,1,7,4,4,4,4,4,8,10,11,3,4,5,11,9]}\",\"tinkermaze4/base\":\"{\\\"width\\\":7,\\\"height\\\":7,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-wall-shed1:0,2\\\",\\\"tiles-wall-shed1:1,2\\\",\\\"tiles-wall-shed1:5,0\\\",\\\"tiles-walkable-floor1\\\",\\\"tiles-wall-shed1:3,0\\\",\\\"tiles-wall-shed1:2,2\\\",\\\"tiles-wall-shed1:0,1\\\",\\\"tiles-wall-shed1:2,1\\\",\\\"tiles-wall-shed1:2,0\\\",\\\"tiles-wall-shed1:0,0\\\",\\\"tiles-wall-shed1:4,0\\\"],\\\"data\\\":[1,2,3,4,5,2,6,7,4,4,4,4,4,8,9,4,4,4,4,4,10,4,4,4,4,4,4,4,6,4,4,4,4,4,1,7,4,4,4,4,4,8,10,11,3,4,5,11,9]}\",\"tinkershed1/base\":\"{\\\"width\\\":9,\\\"height\\\":7,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-wall-shed1:0,2\\\",\\\"tiles-wall-shed1:1,2\\\",\\\"tiles-wall-shed1:5,0\\\",\\\"tiles-walkable-shedexits:1,0\\\",\\\"tiles-wall-shed1:3,0\\\",\\\"tiles-wall-shed1:2,2\\\",\\\"tiles-wall-shed1:0,1\\\",\\\"tiles-walkable-shedtile\\\",\\\"tiles-wall-shed1:2,1\\\",\\\"tiles-wall-shed1:6,0\\\",\\\"tiles-shedstuff1:2,1\\\",\\\"tiles-shedstuff1:3,1\\\",\\\"tiles-walkable-shedexits:0,0\\\",\\\"tiles-wall-shed1:6,2\\\",\\\"tiles-shedstuff1:2,3\\\",\\\"tiles-shedstuff1:3,3\\\",\\\"tiles-furniture-tinkersink:0,1\\\",\\\"tiles-wall-shed1:0,0\\\",\\\"tiles-wall-shed1:2,0\\\"],\\\"data\\\":[1,2,2,3,4,5,2,2,6,7,8,8,8,8,8,8,8,9,7,8,8,8,8,8,8,8,10,7,8,8,11,12,8,8,8,13,7,8,8,8,8,8,8,8,14,7,15,16,8,8,8,17,8,9,18,2,2,2,2,2,2,2,19]}\",\"tinkershed1/top\":\"{\\\"width\\\":9,\\\"height\\\":7,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-shedstuff1:2,0\\\",\\\"tiles-shedstuff1:3,0\\\",\\\"tiles-shedstuff1:2,2\\\",\\\"tiles-shedstuff1:3,2\\\",\\\"tiles-furniture-tinkersink:0,0\\\"],\\\"data\\\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4,0,0,0,5,0,0]}\",\"tinkershed2/base\":\"{\\\"width\\\":9,\\\"height\\\":7,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-wall-shed1:0,2\\\",\\\"tiles-wall-shed1:1,2\\\",\\\"tiles-wall-shed1:5,0\\\",\\\"tiles-walkable-shedexits:1,0\\\",\\\"tiles-wall-shed1:3,0\\\",\\\"tiles-wall-shed1:2,2\\\",\\\"tiles-wall-shed1:0,1\\\",\\\"tiles-walkable-shedtile\\\",\\\"tiles-wall-shed1:2,1\\\",\\\"tiles-wall-shed1:6,0\\\",\\\"tiles-shedstuff1:0,1\\\",\\\"tiles-shedstuff1:1,1\\\",\\\"tiles-walkable-shedexits:1,1\\\",\\\"tiles-furniture-tinkersink:0,1\\\",\\\"tiles-wall-shed1:6,2\\\",\\\"tiles-shedstuff1:2,1\\\",\\\"tiles-shedstuff1:3,1\\\",\\\"tiles-shedstuff1:0,3\\\",\\\"tiles-shedstuff1:1,3\\\",\\\"tiles-wall-shed1:0,0\\\",\\\"tiles-wall-shed1:2,0\\\"],\\\"data\\\":[1,2,2,3,4,5,2,2,6,7,8,8,8,8,8,8,8,9,10,8,11,12,8,8,8,8,9,13,8,8,8,8,8,14,8,9,15,8,8,8,8,8,8,8,9,7,16,17,16,17,8,18,19,9,20,2,2,2,2,2,2,2,21]}\",\"tinkershed2/top\":\"{\\\"width\\\":9,\\\"height\\\":7,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-furniture-tinkersink:0,0\\\",\\\"tiles-shedstuff1:2,0\\\",\\\"tiles-shedstuff1:3,0\\\",\\\"tiles-shedstuff1:0,2\\\",\\\"tiles-shedstuff1:1,2\\\"],\\\"data\\\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,3,2,3,0,4,5,0]}\",\"tinkertunnel1/base\":\"{\\\"width\\\":9,\\\"height\\\":5,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0,\\\"tiles-wall-shed1:1,2\\\",\\\"tiles-wall-shed1:2,2\\\",\\\"tiles-walkable-shedexits:1,1\\\",\\\"tiles-walkable-shedtile\\\",\\\"tiles-wall-shed1:2,1\\\",\\\"tiles-wall-shed1:0,2\\\",\\\"tiles-wall-shed1:4,0\\\",\\\"tiles-wall-shed1:5,0\\\",\\\"tiles-wall-shed1:0,0\\\",\\\"tiles-wall-shed1:0,1\\\",\\\"tiles-walkable-shedexits:0,0\\\",\\\"tiles-walkable-shedexits:0,1\\\",\\\"tiles-wall-shed1:3,0\\\"],\\\"data\\\":[1,1,1,1,1,2,0,0,0,3,4,4,4,4,5,0,0,0,6,7,7,8,4,9,7,7,7,10,4,4,4,4,4,4,4,11,9,8,12,13,7,7,7,7,7]}\",\"tinkertunnel1/top\":\"{\\\"width\\\":9,\\\"height\\\":5,\\\"block_width\\\":16,\\\"block_height\\\":16,\\\"sprites\\\":[0],\\\"data\\\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}\"},\"sounds\":[],\"music\":[]};\nvar graphics = \"M1\";\n";
var graphics = "M1";

global.location = {
  pathname: "",
  hash: ""
}
global.navigator = {
  language: "en"
}

window.ms_libs = [] ;

server_code = `



// file: classes/entities/entity.ms
function()
Entity = class
  constructor = function(spr, x, y, width, height, colLayers, name, color)
    // the sprite to be drawn
    this.spr = spr
    
    // absolute (pinned to the world) x and y
    this.worldX = x
    this.worldY = y
    
    // width and height for drawing purposes
    this.width = width
    this.height = height
    
    // width and height for collision purposes (AKA hitbox)
    this.colWidth = width
    this.colHeight = height
    
    // hitbox offset
    this.colXOff = 0
    this.colYOff = 0
    
    // collision layers
    this.colLayers = colLayers
    
    // name of the entity
    this.name = name
    this.nameCol = color
    
    // push this instance to entity list
    entities.push(this)
  end
  
  getCollidingTiles = function(map)
    local tiles = []
    tiles.push(getTileAt(this.worldX+this.colXOff+this.colWidth/2, this.worldY+this.colYOff+this.colHeight/2, map))
    tiles.push(getTileAt(this.worldX+this.colXOff-this.colWidth/2, this.worldY+this.colYOff+this.colHeight/2, map))
    tiles.push(getTileAt(this.worldX+this.colXOff-this.colWidth/2, this.worldY+this.colYOff-this.colHeight/2, map))
    tiles.push(getTileAt(this.worldX+this.colXOff+this.colWidth/2, this.worldY+this.colYOff-this.colHeight/2, map))
    return tiles
  end // returns a list of all colliding tiles at corners of hitbox within given map
  
  draw = function()
    // draw shadow
    screen.drawSprite("shadow", this.worldX-cameraX+3, this.worldY-cameraY-this.height/2+5, this.width, this.height/2)
    // draw entity
    screen.drawSprite(this.spr, this.worldX-cameraX, this.worldY-cameraY, this.width, this.height)
    // draw hitbox
    if debug then
      screen.fillRect(this.worldX+this.colXOff-cameraX, this.worldY+this.colYOff-cameraY, this.colWidth, this.colHeight, "#f00a")
      screen.drawRect(this.worldX+this.colXOff-cameraX, this.worldY+this.colYOff-cameraY, this.colWidth, this.colHeight, "#600a")
    end
  end
end



end()



// file: classes/entities/player.ms
function()
Player = class extends Entity
  constructor = function(spr, x, y, colLayers, name)
    // sprite info
    this.char = spr
    this.status = "idle"
    
    // inherit from Entity
    super("characters/"+this.char+"/"+this.status, x, y, 20, 20, colLayers, name, "#0a0")
    
    // edit hitbox to surround feet
    this.colHeight = this.height/8
    this.colYOff -= this.height/2-this.height/16
    this.colWidth = this.width*0.8
    
    // set energy to max
    this.energy = characters[spr].energyMax
    
    // set "exausted" cooldown
    this.exausted = 0
  end
  
  update = function()
    // initiate local variables
    local stats = characters[this.char]
    local dx = 0
    local dy = 0
    
    if controlsActive then
      // process arrow/WASD inputs
      this.status = "idle"
      if keyboard[keybinds.down] then
        dy -= 1
        this.status = "walk_down"
      end
      if keyboard[keybinds.up] then
        dy += 1
        this.status = "walk_up"
      end
      if keyboard[keybinds.left] then
        dx -= 1
        this.status = "walk_left"
      end
      if keyboard[keybinds.right] then
        dx += 1
        this.status = "walk_right"
      end
    end
    
    // set sprite
    this.spr = "characters/"+this.char+"/"+this.status
    
    // do some math to move character
    if keyboard[keybinds.dash] and this.energy <= 0 then
      this.exausted = 30
    end
    dashing = keyboard[keybinds.dash] and this.exausted <= 0
    if dist2d(0, 0, dx, dy) > 0 then
      ang = dirTo(0, 0, dx, dy)
      // move horizontally
      dx = cosd(ang)*stats.speed*(dashing*(stats.dashMult-1)+1)
      this.worldX += dx
      // if colliding, back up
      while not this.walkable()
        this.worldX += -sign(dx)*0.1
      end
      // do the same for vertically
      dy = sind(ang)*stats.speed*(dashing*(stats.dashMult-1)+1)
      this.worldY += dy
      while not this.walkable()
        this.worldY += -sign(dy)*0.1
      end
    end
    
    // Handle energy regen/consumption
    moving = dx or dy
    if dashing and moving then
      this.energy -= 1
    end
    if not (dashing and moving) and this.energy < stats.energyMax then
      if moving then
        this.energy += stats.energyRegen
      else
        this.energy += stats.energyRegenRested
      end
    end
    if not dashing and not moving and this.exausted > 0 and this.energy >= stats.energyMax then
      this.exausted -= 1
    end
    
    // Check if on a warp tile, and if so, warp
    if warps[world.name] then
      for warp in warps[world.name]
        local tilePos = screenToMapSpace(this.worldX, this.worldY-10)
        if tilePos.x == warp.warp_x and tilePos.y == warp.warp_y then
          setWorld(warp.end_map)
          local newPos = mapToScreenSpace(warp.end_x, warp.end_y)
          this.worldX = newPos.x
          this.worldY = newPos.y+10
        end
      end
    end
  end
  
  walkable = function()
    // loop through all tiles the player is colliding with
    for tile in this.getCollidingTiles("base")
      // check if colliding with a non-walkable tile
      if not ([]+(tile+"").split("/")).contains("walkable") then
        return false
      end
    end
    // if not, return true
    return true
  end
  
  getStatuses = function()
    local statuses = []
    if this.exausted > 0 then
      statuses.push("exausted")
    end
    return statuses
  end
end


end()



// file: classes/menu.ms
function()
Menu = class
  constructor = function(name, drawFunc, updFunc, active)
    this.name = name
    this.drawFunc = drawFunc
    this.updFunc = updFunc
    this.active = active
  end
  
  toggleActive = function()
    this.active = not this.active
  end
  
  update = function()
    if keyboard.press[keybinds.exit_menu] or (mouse.press and pointInsideRect(screen.width/2-35, screen.height/2-35, 10, 10, mouse.x, mouse.y)) then
      this.active = 0
    end
    if this.active then
      this.updFunc(0, -9, screen.width-70, screen.height-70)
    end
  end
  
  draw = function()
    if this.active then
      screen.fillRoundRect(0, 0, screen.width-50, screen.height-50, 5, "#666")
      screen.drawRoundRect(0, 0, screen.width-50, screen.height-50, 5, "#333")
      this.drawFunc(0, -9, screen.width-70, screen.height-76)
      screen.drawText(name, 0, screen.height/2-35, 20, "#ccc")
      screen.fillRoundRect(screen.width/2-35, screen.height/2-35, 10, 10, 1, "#f33")
      screen.drawText("X", screen.width/2-35, screen.height/2-35, 10, "#600")
    end
  end
end
end()



// file: classes/textfield.ms
function()
TextField = class
  constructor = function()
    this.text = ""
    this.chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ",", ".", "<", ">", "/", "?", ";", "'", ":", "\"", "{", "[", "]", "}", "\\", "|", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "\`", "=", "-", "_", "+", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    this.blockedChars = []
    this.hold = object end
    this.cd = 0
    this.x = 0
  end

  update = function()
    screen.setFont("monospace")
    this.x += this.held("ARROWRIGHT")-this.held("ARROWLEFT")+keyboard.END*1000-keyboard.HOME*1000
    this.x = min(max(0, this.x), this.text.length)
    if this.held("BACKSPACE") and this.x > 0 then
      this.text = this.text.substring(0, this.x-1)+this.text.substring(this.x, this.text.length)
      this.x -= 1
    end
    if this.held("DELETE") and this.x<this.textlength then
      this.text = this.text.substring(0, this.x)+this.text.substring(this.x+1, this.text.length)
    end
    local add = ""
    for char in this.chars
      if this.held(char) and not this.blockedChars.contains(char) then
        if keyboard.SHIFT then
          add = char.toUpperCase()
        else
          add = char.toLowerCase()
        end
      end
    end
    if this.held("SPACE") or this.held("TAB") then
      add = " "
    end
    if add then
      this.text = this.text.substring(0, this.x)+add+this.text.substring(this.x, this.text.length)
      x += 1
    end
    cd += 1
    screen.setFont("BitCell")
  end

  getText = function()
    return this.text
  end

  held = function(char)
    if keyboard[char] then
      this.hold[char] += 1
    else
      this.hold[char] = 0
    end
    if keyboard.press[char] or this.hold[char] > 30 and this.cd >= 3 then
      this.cd = 0
      return true
    end
    return false
  end
end


end()



// file: controltoggling.ms
function()
blockControl = function(reason)
  controlBlockers[reason] = true
  checkBlockedControls()
end

unblockControl = function(reason)
  controlBlockers[reason] = false
  checkBlockedControls()
end

checkBlockedControls = function()
  controlsActive = true
  for blocker in controlBlockers
    if controlBlockers[blocker] then
      controlsActive = false
    end
  end
end
end()



// file: data/characters.ms
function()
/*
List of characters (and their stats)

speed = base walking speed
dashMult = speed multiplier while dashing
energyMax = maximum energy
energyRegen = energy regen while walking
energyRegenRested = energy regen while still
*/

characters = object
  joe = object
    speed = 1.5
    dashMult = 2
    energyMax = 300
    energyRegen = 0.5
    energyRegenRested = 1
  end
  sophie = object
    speed = 1.3
    dashMult = 2.5
    energyMax = 250
    energyRegen = 0.5
    energyRegenRested = 2
  end
  wolfie = object
    speed = 1.0
    dashMult = 1.5
    energyMax = 550
    energyRegen = 1
    energyRegenRested = 4
  end
  alien = object
    speed = 1.7
    dashMult = 3
    energyMax = 50
    energyRegen = 1
    energyRegenRested = 1
  end
  botbot = object
    speed = 2
    dashMult = 2
    energyMax = 400
    energyRegen = 2
    energyRegenRested = 2
  end
  ghosty = object
    speed = 1.5
    dashMult = 2
    energyMax = 300
    energyRegen = 0.5
    energyRegenRested = 1
  end
  brainy = object
    speed = 1.5
    dashMult = 2
    energyMax = 600
    energyRegen = 1.5
    energyRegenRested = 2.5
  end  
  piratesam = object
    speed = 1.6
    dashMult = 1.7
    energyMax = 400
    energyRegen = 0.5
    energyRegenRested = 1
  end  
end
end()



// file: data/emojis.ms
function()
// starting emojis

emojis = [
  "face/happy",
  "face/neutral",
  "face/sad"
]
end()



// file: data/itempickups.ms
function()
// WIP
end()



// file: data/keybinds.ms
function()
keybinds = object
  up = "UP"
  down = "DOWN"
  left = "LEFT"
  right = "RIGHT"
  dash = "SHIFT"
  submit = "ENTER"
  open_chat = "ENTER"
  exit_menu = "ESCAPE"
  minimap = "M"
end
end()



// file: data/menus.ms
function()
menuDraw = object
  options = function(x, y, width, height)
    screen.fillRect(x, y, width, height, "#000")
    local optWidth = max(100, (width-10)/floor((width-10)/100))
    local optHeight = max(20, height/floor(height/10))
    for optX = x-width/2+optWidth/2 to x+(width-10)/2-optWidth/2 by optWidth
      for optY = y+height/2-optHeight/2 to y-height/2+pptHeight/2 by -optHeight
        screen.drawRect(optX, optY, optWidth, optHeight, "#fff")
      end
    end
  end
  keybinds = function(x, y, width, height) end
  emoji = function(x, y, width, height) end
  language = function(x, y, width, height) end
end

menuUpd = object
  options = function(x, y, width, height)
    
  end
  keybinds = function(x, y, width, height) end
  emoji = function(x, y, width, height) end
  language = function(x, y, width, height) end
end
end()



// file: data/warptiles.ms
function()
/*
set tiles on certain maps to link to other maps!

warp_x = warp *tile* x position, not pixel x position.
warp_y = same as above, but for y
end_map = map to warp to
end_x = player *tile* x position after warping
end_y = same as above but for y
*/

warps = object
  main = [
    // warps for the main map
    object
      // into house1
      warp_x = 30
      warp_y = 37
      end_map = "house1"
      end_x = 4
      end_y = 1
    end
    object
      // into house2
      warp_x = 34
      warp_y = 19
      end_map = "house2"
      end_x = 6
      end_y = 1
    end    
    object
      // into ruin1
      warp_x = 9
      warp_y = 49
      end_map = "ruin1"
      end_x = 11
      end_y = 1
    end
    object
      // into alienbase1
      warp_x = 6
      warp_y = 25
      end_map = "alienbase1"
      end_x = 16
      end_y = 1
    end
    object
      // into alienbase2
      warp_x = 60
      warp_y = 10
      end_map = "alienbase2"
      end_x = 9
      end_y = 1
    end
    object
      // into tardis1
      warp_x = 57
      warp_y = 22
      end_map = "tardis1"
      end_x = 8
      end_y = 8
    end
    object
      // into phone booth
      warp_x = 22
      warp_y = 33
      end_map = "phonebooth1"
      end_x = 1
      end_y = 1
    end
    object
      // into teleporter1
      warp_x = 20
      warp_y = 52
      end_map = "teleporter1"
      end_x = 2
      end_y = 7
    end    
    object
      // into cowskull1
      warp_x = 42
      warp_y = 4
      end_map = "cowskull1"
      end_x = 2
      end_y = 9
    end    
    object
      // into tinkershed1
      warp_x = 21
      warp_y = 39
      end_map = "tinkershed1"
      end_x = 4
      end_y = 1
    end
    object
      // into tinkershed2
      warp_x = 37
      warp_y = 38
      end_map = "tinkershed2"
      end_x = 4
      end_y = 1
    end
    object
      // snowy mountain
      warp_x = 52
      warp_y = 57
      end_map = "snowymountain"
      end_x = 11
      end_y = 7
    end
  ]
  house1 = [
    // warps for house1
    object
      // exit house
      warp_x = 4
      warp_y = 0
      end_map = "main"
      end_x = 30
      end_y = 36
    end
  ]
  house2 = [
    // warps for house2
    object
      // exit house
      warp_x = 6
      warp_y = 0
      end_map = "main"
      end_x = 34
      end_y = 18
    end
  ]
  ruin1 = [
    // warps for ruin1
    object
      // exit house
      warp_x = 11
      warp_y = 0
      end_map = "main"
      end_x = 9
      end_y = 48
    end
  ]    
  alienbase1 = [
    // warps for alienbase1
    object
      // exit house
      warp_x = 16
      warp_y = 0
      end_map = "main"
      end_x = 8
      end_y = 25
    end
  ]
  alienbase2 = [
    // warps for alienbase2
    object
      // exit house
      warp_x = 9
      warp_y = 0
      end_map = "main"
      end_x = 58
      end_y = 9
    end
  ]  
  tardis1 = [
    // warps for tardis1
    object
      // exit tardis
      warp_x = 25
      warp_y = 21
      end_map = "main"
      end_x = 55
      end_y = 21
    end
  ]  
  phonebooth1 = [
    // warps for phonebooth1
    object
      // exit phone booth
      warp_x = 1
      warp_y = 0
      end_map = "main"
      end_x = 23
      end_y = 32
    end
  ]
  teleporter1 =  [
    // warps for teleporter1
    object
      // exit teleporter1
      warp_x = 2
      warp_y = 0
      end_map = "main"
      end_x = 51
      end_y = 51
    end
  ]  
  cowskull1 =  [
    // warps for cowskull1
    object
      // exit cowskull1
      warp_x = 5
      warp_y = 2
      end_map = "main"
      end_x = 9
      end_y = 46
    end
  ]  
  tinkershed1 = [
    // warps for tinkershed1
    object
      // exit to world
      warp_x = 4
      warp_y = 0
      end_map = "main"
      end_x = 21
      end_y = 38
    end
    object
      // exit to shed2
      warp_x = 8
      warp_y = 3
      end_map = "tinkertunnel1"
      end_x = 1
      end_y = 1
    end    
  ]
  tinkershed2 = [
    // warps for tinkershed2
    object
      // exit to world
      warp_x = 4
      warp_y = 0
      end_map = "main"
      end_x = 37
      end_y = 37
    end
    object
      // exit to shed1
      warp_x = 0
      warp_y = 3
      end_map = "tinkertunnel1"
      end_x = 7
      end_y = 3
    end    
  ]
  tinkertunnel1 = [
    // warps for tinkertunnel1
    object
      // exit to tinkershed1
      warp_x = 0
      warp_y = 1
      end_map = "tinkershed1"
      end_x = 7
      end_y = 3
    end
    object
      // exit to tinkershed2
      warp_x = 8
      warp_y = 3
      end_map = "tinkershed2"
      end_x = 1
      end_y = 3
    end    
    object
      // exit to tinkermaze0
      warp_x = 2
      warp_y = 4
      end_map = "tinkermaze0"
      end_x = 3
      end_y = 1
    end 
  ]
  tinkermaze0 = [
    // warps for tinkermaze
    object
      // exit south
      warp_x = 3
      warp_y = 0
      end_map = "tinkertunnel1"
      end_x = 2
      end_y = 3
    end
    object
      // exit east
      warp_x = 6
      warp_y = 3
      end_map = "tinkermaze0"
      end_x = 1
      end_y = 3
    end    
    object
      // exit north
      warp_x = 3
      warp_y = 6
      end_map = "tinkermaze1"
      end_x = 3
      end_y = 1
    end
    object
      // exit west
      warp_x = 0
      warp_y = 3
      end_map = "tinkermaze0"
      end_x = 5
      end_y = 3
    end
  ]  
  tinkermaze1 = [
    // warps for tinkermaze
    object
      // exit south
      warp_x = 3
      warp_y = 0
      end_map = "tinkermaze0"
      end_x = 3
      end_y = 5
    end
    object
      // exit east
      warp_x = 6
      warp_y = 3
      end_map = "tinkermaze0"
      end_x = 1
      end_y = 3
    end    
    object
      // exit north
      warp_x = 3
      warp_y = 6
      end_map = "tinkermaze0"
      end_x = 3
      end_y = 1
    end
    object
      // exit west
      warp_x = 0
      warp_y = 3
      end_map = "tinkermaze2"
      end_x = 5
      end_y = 3
    end
  ]
  tinkermaze2 = [
    // warps for tinkermaze
    object
      // exit south
      warp_x = 3
      warp_y = 0
      end_map = "tinkermaze3"
      end_x = 3
      end_y = 5
    end
    object
      // exit east
      warp_x = 6
      warp_y = 3
      end_map = "tinkermaze0"
      end_x = 1
      end_y = 3
    end    
    object
      // exit north
      warp_x = 3
      warp_y = 6
      end_map = "tinkermaze0"
      end_x = 3
      end_y = 1
    end
    object
      // exit west
      warp_x = 0
      warp_y = 3
      end_map = "tinkermaze0"
      end_x = 5
      end_y = 3
    end
  ]
  tinkermaze3 = [
    // warps for tinkermaze
    object
      // exit south
      warp_x = 3
      warp_y = 0
      end_map = "tinkermaze0"
      end_x = 3
      end_y = 5
    end
    object
      // exit east
      warp_x = 6
      warp_y = 3
      end_map = "tinkermaze0"
      end_x = 1
      end_y = 3
    end    
    object
      // exit north
      warp_x = 3
      warp_y = 6
      end_map = "tinkermaze0"
      end_x = 3
      end_y = 1
    end
    object
      // exit west
      warp_x = 0
      warp_y = 3
      end_map = "tinkermaze4"
      end_x = 5
      end_y = 3
    end
  ]
  tinkermaze4 = [
    // warps for tinkermaze
    object
      // exit south
      warp_x = 3
      warp_y = 0
      end_map = "tinkermaze0"
      end_x = 3
      end_y = 5
    end
    object
      // exit east
      warp_x = 6
      warp_y = 3
      end_map = "tinkermaze0"
      end_x = 1
      end_y = 3
    end    
    object
      // exit north
      warp_x = 3
      warp_y = 6
      end_map = "tinkermaze0"
      end_x = 3
      end_y = 1
    end
    object
      // exit west
      warp_x = 0
      warp_y = 3
      end_map = "tinkerlair"
      end_x = 5
      end_y = 1
    end
  ]
  tinkerlair = [
    // warps for tinkerlair
    object
      // exit to tinkertunnel1
      warp_x = 6
      warp_y = 1
      end_map = "tinkertunnel1"
      end_x = 1
      end_y = 1
    end
  ]
  snowymountain = [
    object
      // exit to main
      warp_x = 22
      warp_y = 1
      end_map = "main"
      end_x = 52
      end_y = 56
    end
  ]
end




















end()



// file: data/worlds.ms
function()
/*
List of worlds (along with some metadata)

background = background color
tile_w = microstudio pixel tile width
tile_h = microstudio pixel tile height
*/

worlds = object
  main = object
    background = "rgb(66,154,198)"
    tile_w = 20
    tile_h = 20
    music = "microverse1"
  end
  desert_town = object
    background = "rgb(255,217,142)"
    tile_w = 25
    tile_h = 25
    music = "microverse1"
  end
  house1 = object
    background = "rgb(0, 0, 0)"
    tile_w = 20
    tile_h = 20
    music = "homesweethome1"
  end
  house2 = object
    background = "rgb(0, 0, 0)"
    tile_w = 20
    tile_h = 20
    music = "sweetsunday2"
  end
  ruin1 = object
    background = "rgb(0, 0, 0)"
    tile_w = 20
    tile_h = 20
    music = "microverse1"
  end
  alienbase1 = object
    background = "rgb(0, 0, 0)"
    tile_w = 20
    tile_h = 20
    music = "microversealiens1"
  end
  alienbase2 = object
    background = "rgb(0, 0, 0)"
    tile_w = 20
    tile_h = 20
    music = "microversealiens1"
  end
  tardis1 = object
    background = "rgb(0, 0, 0)"
    tile_w = 20
    tile_h = 20
    music = "tardis"
  end
  phonebooth1 = object
    background = "rgb(38,113,0)"
    tile_w = 22
    tile_h = 22
    music = "phonetime"
  end
  teleporter1 = object
    background ="rgb(0,85,85)"
    tile_w = 22
    tile_h = 22
    music = "tardis"
  end    
  cowskull1 = object
    background ="rgb(227,193,126)"
    tile_w = 22
    tile_h = 22
    music = "spooky"
  end
  tinkershed1 = object
    background ="rgb(23,13,28)"
    tile_w = 22
    tile_h = 22
    music = "tinkering"
  end   
  tinkershed2 = object
    background ="rgb(23,13,28)"
    tile_w = 22
    tile_h = 22
    music = "tinkering"
  end 
  tinkertunnel1 = object
    background ="rgb(23,13,28)"
    tile_w = 22
    tile_h = 22
    music = "tinkering"
  end
  tinkermaze0 = object
    background ="rgb(23,13,28)"
    tile_w = 22
    tile_h = 22
    music = "spooky"
  end  
  tinkermaze0 = object
    background ="rgb(23,13,28)"
    tile_w = 22
    tile_h = 22
    music = "spooky"
  end
  tinkermaze0 = object
    background ="rgb(23,13,28)"
    tile_w = 22
    tile_h = 22
    music = "spooky"
  end
  tinkermaze1 = object
    background ="rgb(23,13,28)"
    tile_w = 22
    tile_h = 22
    music = "spooky"
  end
  tinkermaze2 = object
    background ="rgb(23,13,28)"
    tile_w = 22
    tile_h = 22
    music = "spooky"
  end
  tinkermaze3 = object
    background ="rgb(23,13,28)"
    tile_w = 22
    tile_h = 22
    music = "spooky"
  end
  tinkermaze4 = object
    background ="rgb(23,13,28)"
    tile_w = 22
    tile_h = 22
    music = "spooky"
  end
  tinkerlair = object
    background ="rgb(23,13,28)"
    tile_w = 22
    tile_h = 22
    music = "tinkering"
  end
  snowymountain = object
    background = "rgb(20, 20, 200)"
    tile_w = 50
    tile_h = 50
    music = "sweetsunday2"
  end
end



















end()



// file: drawstatuses.ms
function()
drawStatuses = function(statuses, px, py)
  local i = 0
  for status in statuses
    screen.drawSprite("ui/status/"+status, -5.5*(statuses.length-1)+11*i+px-cameraX, py-cameraY-20, 10, 10)
    i += 1
  end
end
end()



// file: helpers.ms
function()
// A few useful functions

lerp = function(a, b, amt)
  return a*(1-amt)+b*amt
end // linear interpolation

clamp = function(num, l, h)
  return min(max(min(l, h), num), max(l, h))
end // clamp a number between a low and a high

mod = function(num, lim)
  return num-lim*floor(num/lim)
end // True modulo, % is actually remainder

sign = function(num)
  return (num>0)-(num<0)
end // Returns the sign of a number, 1 if positive, -1 if negative, 0 if zero

map = function(num, l1, h1, l2, h2)
  return (num-l1)*(h2-l2)/(h1-l1)+l2
end // Maps a number from one range of values to another

map2d = function(x, y, x1, y1, w1, h1, x2, y2, w2, h2)
  return object
    x = map(x, x1-w1/2, x1+w1/2, x2-w2/2, x2+w2/2)
    y = map(y, y1-h1/2, y1+h1/2, y2-h2/2, y2+h2/2)
  end
end // Same as map, but on two axes

dist2d = function(x1, y1, x2, y2)
  return sqrt((x2-x1)^2+(y2-y1)^2)
end // Get the distance between two points

dirTo = function(x1, y1, x2, y2)
  return atan2d(y2-y1, x2-x1)
end // Get the angle from (x1, y1) to (x2, y2)

screenToMapSpace = function(sx, sy)
  local coords = object
    x = floor((sx + world.draw_w / 2) / world.draw_w * maps[world.name+"/base"].width)
    y = floor((sy + world.draw_h / 2) / world.draw_h * maps[world.name+"/base"].height)
  end
  return coords
end // converts an xy position on the screen to coordinates in the map

mapToScreenSpace = function(mx, my)
  local coords = object
    x = (mx / maps[world.name+"/base"].width) * world.draw_w - world.draw_w / 2
    y = (my / maps[world.name+"/base"].height) * world.draw_h - world.draw_h / 2
  end
  return coords
end // converts a map position to an xy position on the screen

getTileAt = function(x, y, map)
  local coords = screenToMapSpace(x, y)
  return maps[world.name+"/"+map].get(coords.x, coords.y)
end

pointInsideRect = function(rx, ry, rw, rh, x, y)
  return abs(rx-x)<rw/2 and abs(ry-y)<rh/2
end // determines if a point is inside a rectanlge

end()



// file: main.ms
function()
init = function()
  
  // Init some stuff top defaults
  entities = []
  latency = 100
  
  // debug mode toggle
  debug = false
  
  // show minimap toggle
  minimap = false  
  
  // register server connection
  connection = new ServerConnection()
  
  // wait until server is connected
  while connection.status != "connected"
    screen.clear()
    screen.drawText(connection.status, 0, 0, 50, "#fff")
  end
  
  reconnecting = false
  
  // ping server to check latency    
  every 1000 milliseconds do
    timeAtLastPing = system.time()
    connection.send(object
      mType = "ping"
    end)
  end
  
  // set empty player list
  serverPlayers = []
  
  // activate controls
  controlsActive = true
  controlBlockers = object end
  
  // setup player selection
  playerSelected = false
  p = []
  for item in characters
    p.push(item)
  end
  id = 0
  pBlock = true
  name = new TextField()
  nameSelected = false
  playerSelectFin = function()
    // set up player stuff and exit player select
    player = new Player(p[id], 0, 0, [], name.text)
    selected = 1
    playerSelected = true
    name = 0
    
    // load world
    setWorld("main")
    
    // set camera to player
    cameraX = player.worldX
    cameraY = player.worldY
    
    // tell server that a player joined
    connection.send(object
      mType = "join"
      name = player.name
    end)
  end
end

update = function()
  if not playerSelected then
    // PLAYER SELECT
    if nameSelected then
      name.update()
    end
    displayName = "username"
    if name.text then
      displayName = name.text
    end
    if mouse.pressed and not pBlock then
      pBlock = true
      nameSelected = false
      if pointInsideRect(0, -75, 75, 20, mouse.x, mouse.y) then
        playerSelectFin()
      elsif pointInsideRect(72.5, 25, 20, 30, mouse.x, mouse.y) then
        id += 1
      elsif pointInsideRect(-72.5, 25, 20, 30, mouse.x, mouse.y) then
        id -= 1
      elsif pointInsideRect(0, -40, screen.textWidth(displayName, 20)+10, 20, mouse.x, mouse.y) then
        nameSelected = true
      end
      id = mod(id, p.length)
    end
    if not mouse.pressed then
      pBlock = false
    end
    if keyboard.ENTER then
      playerSelectFin()
    end
  else
    // NORMAL UPDATE
    
    // update time
    AMPM = ["AM", "PM"][(system.time()/1000/60/60)%24>=12]
    hours = floor((system.time()/1000/60/60)%12)
    minutes = floor((system.time()/1000/60)%60)
    if (minutes+"").length < 2 then
      minutes = "0"+minutes
    end
    
    // update player
    player.update()
  
    if not usingChat then  
      // toggle debug
      if keyboard.press["\\"] then
        debug = not debug
      end
      
      // toggle minimap
      if keyboard.press[keybinds.minimap] then
        minimap = not minimap
      end      
      
      // toggle sound
      if keyboard.press.O then
        if mv1 then
          mv1.stop()
          mv1 = 0
        else
          mv1 = audio.playMusic(world.music, .3, 1)
        end
      end
    end
    
    // update UI
    updateUI()
    
    // focus camera on player (smooth scroll) if player is on the same map
    if not mapChanged then
      cameraX = lerp(player.worldX, cameraX, .94)
      cameraY = lerp(player.worldY, cameraY, .94)
    else
      // otherwise, teleport camera
      cameraX = player.worldX
      cameraY = player.worldY
      mapChanged = false
    end
    
    // if disconnected
    if connection.status == "disconnected" and not reconnecting then
      // wait a second
      reconnecting = true
      after 1000 milliseconds do
        // if still disconnected, reconnect
        if connection.status == "disconnected" then
          connection.close()
          connection = new ServerConnection()
        end
        reconnecting = false
      end
    end
    
    // send player to server
    connection.send(object
      mType = "player"
      upd = object
        spr = player.spr
        worldX = player.worldX
        worldY = player.worldY
        map = world.name
        statuses = player.getStatuses()
        name = player.name
        nameCol = "#444"
        width = 20
        height = 20
        chatting = chatEntry.length>0
        emoji = emojiSel.emoji
      end
    end)
    
    // handle incoming messages
    handleMessages()
  end
  handleChatMessages()
end

draw = function()
  if not playerSelected then
    // PLAYER SELECTION
    
    screen.clear()
    screen.drawSprite("characters/"+p[id]+"/idle", 0, 30, 100, 100)
    screen.drawText(">", 75, 30, 50, "#fff")
    screen.drawText("<", -70, 30, 50, "#fff")
    screen.setAlpha(0.6)
    if pointInsideRect(0, -40, screen.textWidth(displayName, 20)+10, 20, mouse.x, mouse.y) then
      screen.setAlpha(1)
    end
    if nameSelected then
      screen.setAlpha(0.8)
    end
    screen.fillRoundRect(0, -40, screen.textWidth(displayName, 20)+10, 20, 100, "#aaa")
    screen.drawText(displayName, 0, -40, 20, "#fff")
    screen.setAlpha(0.6)
    if pointInsideRect(0, -75, 75, 20, mouse.x, mouse.y) then
      screen.setAlpha(1)
    end
    screen.fillRoundRect(0, -75, 75, 20, 2, "#0f0")
    screen.setLineWidth(2)
    screen.drawRoundRect(0, -75, 75, 20, 2, "#070")
    screen.drawText("Select", 0, -74, 20,"rgb(255,255,255)")
    screen.setAlpha(1)
  else
    // NORMAL DRAW
    
    // reset drawing modifiers
    screen.setDrawAnchor(0, 0)
    screen.setLineWidth(1)
    screen.setAlpha(1)
    
    // clear the screen
    screen.clear(world.background)
    
    // draw base map (floor and walls)
    screen.drawMap(world.name+"/base", -cameraX, -cameraY, world.draw_w, world.draw_h)
    
    drawPlayersOrdered()
    
    // draw top map (roofs and stuff)
    screen.drawMap(world.name+"/top", -cameraX, -cameraY, world.draw_w, world.draw_h)

    // draw minimap
    if minimap then drawMiniMap() end

    // if debug on, draw warp tiles
    if debug then
      screen.setLineWidth(1)
      for warp in warps[world.name]
        local warpPos = mapToScreenSpace(warp.warp_x, warp.warp_y)
        screen.fillRect(warpPos.x-cameraX+world.tile_w/2, warpPos.y-cameraY+world.tile_h/2, world.tile_w, world.tile_h, "#0f0a")
        screen.drawRect(warpPos.x-cameraX+world.tile_w/2, warpPos.y-cameraY+world.tile_h/2, world.tile_w, world.tile_h, "#060a")
      end
      // and also draw a square tile at mouse, with coords
      local mpos = screenToMapSpace(mouse.x+cameraX, mouse.y+cameraY)
      local spos = mapToScreenSpace(mpos.x, mpos.y)
      screen.drawRect(spos.x+world.tile_w/2-cameraX, spos.y+world.tile_h/2-cameraY, world.tile_w, world.tile_h, "#000")
      screen.drawText(mpos.x+", "+mpos.y, spos.x+world.tile_w/2-cameraX, spos.y+world.tile_h/2-cameraY, 7, "#fff")
    end
    
    // draw UI
    drawUI()
    
    // show connection status
    screen.setAlpha(1)
    screen.setDrawAnchor(1, -1)
    screen.drawText(connection.status, screen.width/2, -screen.height/2, 20, object
      connecting = "#ff0"
      connected = "#0f0"
      disconnected = "#f00"
    end[connection.status])
    screen.drawText(latency+" ms latency", screen.width/2, -screen.height/2+13, 15, "#555")
    
    // draw time
    screen.drawText(hours+":"+minutes+" "+AMPM, screen.width/2, -screen.height/2+30, 25, "#fff")
  end
end

drawPlayersOrdered = function()
  local list = [player]
  for p in serverPlayers
    if world.name == p.map then
      list.push(p)
    end
  end
  
  list.sortList(function(a,b) b.worldY-a.worldY end)
  
  for p in list
    if p == player then
      player.draw()
    else
      screen.drawSprite("shadow", p.worldX-cameraX+3, p.worldY-cameraY-5, 20)
      screen.drawSprite(p.spr, p.worldX-cameraX, p.worldY-cameraY, 20, 20)
    end
  end
end
end()



// file: minimap.ms
function()

drawMiniMap = function()
  
  // based on 60x60 miniMap
  mapX  = screen.width/2-35   // on screen centre
  mapY  = screen.height/2-35
  mapW  = world.draw_w        // map width in pixels
  mapH  = world.draw_h
  mapAR = mapW/mapH           // map aspect ratio
  // calculate x/y scale
  mapSX = if mapAR<1 then 60*mapAR else 60 end
  mapSY = if mapAR>1 then 60/mapAR else 60 end
  // draw minimap  
  screen.drawRect(mapX,mapY,60,60,"#000")
  screen.fillRect(mapX,mapY,60,60,world.background)
  screen.drawMap(world.name+"/base",mapX,mapY,mapSX,mapSY)
  screen.drawMap(world.name+"/top" ,mapX,mapY,mapSX,mapSY)

  // draw player position indicator
  playerX = player.worldX
  playerY = player.worldY
  posSX   = mapW/mapSX          // position scale
  posSY   = mapH/mapSY
  markerX = playerX/posSX+mapX
  markerY = playerY/posSY+mapY
  screen.drawSprite("ui/marker",markerX,markerY,8,8)  
  
end      
end()



// file: playerselect.ms
function()

end()



// file: serverstuff/client/incoming.ms
function()
// handle incoming messages
handleMessages = function()
  for message in connection.messages
    // server player updates
    if message.mType == "players" then
      serverPlayers = message.message
    
    elsif message.mType == "chat" then
      // identified, but already handled
    
    elsif message.mType == "ping" then
      if latency then
        latency = lerp(latency, system.time()-timeAtLastPing)
      else
        latency = system.time()-timeAtLastPing
      end
    
    // else, print the message
    else
      print("Unidentified server message:")
      print(message)
    end
  end
end

// chat messages need to be handled at all times
// backlog is sent before playerSelected is true
handleChatMessages = function()
  for message in connection.messages
    // chat updates
    if message.mType == "chat" then
      // insert chat message
      chatLog.insert(message.message)
      // add 1 to unread and reset time for non-backlog messages
      if not message.backlog then
        chatLog[0].time = system.time()
        unread += 1
      end
    end
  end
end
end()



// file: serverstuff/server/server.ms
function()
serverInit = function()
  server = new Server()
  players = object end
  local chat = storage.get("chat_messages")
  chat_messages = if chat then chat else [] end
end

serverUpdate = function()
  // handle incoming messages
  for incoming in server.messages
    // user joins
    if incoming.data.mType == "join" then
      // send chat backlog to new user
      sendChatBacklog(incoming.connection)
      
      // post chat notice
      local notice = object
        author = "SERVER"
        time = system.time()
        message = incoming.data.name + " just joined!"
      end
      for client in server.active_connections
        client.send(object
          mType = "chat"
          message = notice
          backlog = client.id == incoming.connection.id
        end)
      end
      recordChatMessage(notice)
      
      // log join
      print(incoming.data.name+" just joined!")
    end
    
    // latency checks
    if incoming.data.mType == "ping" then
      incoming.connection.send(object
        mType = "ping"
      end)
    end
    
    // player updates
    if incoming.data.mType == "player" then
      players[incoming.connection.id] = incoming.data.upd
      for client in server.active_connections
        local sentList = []
        for attr in players
          // weird condition, but != didn't work
          if abs(attr-client.id) > 0 then
            sentList.push(players[attr])
          end
        end
        client.send(object
          mType = "players"
          message = sentList
        end)
      end
    end
    
    // user sends a message
    if incoming.data.mType == "chat" then
      print("chat message by "+incoming.data.message.author+": "+incoming.data.message.message)
      for client in server.active_connections
        if client.id != incoming.connection.id then
          // send chat updates to everyone else
          client.send(object
            mType = "chat"
            message = incoming.data.message
          end)
        end
      end
      recordChatMessage(incoming.data.message)
    end
  end
  
  // handle player disconnects (has to be handled differently, so it works even if a player force closes microVerse)
  for client in server.closed_connections
    print("Aww, "+players[client.id].name+" just left D:")
    // post chat notice
    local notice = object
      author = "SERVER"
      time = system.time()
      message = players[client.id].name + " just left D:"
    end
    for notify in server.active_connections
      notify.send(object
        mType = "chat"
        message = notice
      end)
    end
    recordChatMessage(notice)
    // remove player from object
    local tempObj = object end
    for id in players
      if abs(id-client.id) > 0 then
        tempObj.push(players[id])
      end
    end
    players = tempObj
  end
end

recordChatMessage = function(message)
  chat_messages.push(message)
  while chat_messages.length > 5
    chat_messages.removeAt(0)
  end
  storage.set("chat_messages",chat_messages)
end

sendChatBacklog = function(client)
  for m in chat_messages
    client.send(object
      mType = "chat"
      message = m
      backlog = 1
    end)
  end
end
end()



// file: setworld.ms
function()
setWorld = function(name)
  world = object
    name = name
    background = worlds[name].background
    tile_w = worlds[name].tile_w
    tile_h = worlds[name].tile_h
    draw_w = worlds[name].tile_w*maps[name+"/base"].width
    draw_h = worlds[name].tile_h*maps[name+"/base"].height
  end
  
  // stop music if running
  if mv1.type then
    mv1.stop()
  end
  
  // setup music
  mv1 = audio.playMusic(worlds[name].music, .3, 1 )
  
  // notify that the map was changed
  mapChanged = true
end
end()



// file: todo.ms
function()
/*
Add stuff here! Any planned feature you think of but haven't
implimented yet.

------------URGENT------------
(Bugfixes and stuff needed ASAP)

------------Normal------------
(Regular planned features)

- emote system (preferably select emotes in options then
  send emotes with emote wheel, activated with right click)
- inventory (top-right hotbar going down, expand with I or button)
- settings menu
- translation menu
- keybinds menu

-------------Ideas-------------
(Ideas that may or may not eventually be worked on)

- user authentication & progress save?
- password hashing, w/ above

-------------Work in progress--

(TinkerSmith's WIP)
  - Tinkershed gfx remake
  - more 'shed' furniture
  - need better color palette
  - add 'maze' (DONE)

- remake minimap:
  - take map ratio into account for non-square maps (DONE)
  - add player position marker (DONE)


*/
end()



// file: ui.ms
function()
usingChat = false
chatLog = []
chatEntry = new TextField()
maxChatLength = 8
menuList = false
menu = 0
menus = object
  options = 30
  keybinds = 52
  emoji = 74
  language = 96
end
emojiSel = object
  x = 0
  y = 0
  on = false
  selected = 0
  emoji = 0
  emojiTime = 0
end
unread = 0

// MENU CODE COMMENTED FOR PUBLIC BETA

updateUI = function()
  // TEMPORARY, REMOVE LATER
  if menu then
    menu.drawFunc = menuDraw[menu.name]
    menu.updFunc = menuUpd[menu.name]
  end
  
  // chat stuff
  if usingChat then
    // reset unread
    unread = 0
    
    // update chat
    chatEntry.blockedChars = [keybinds.chat]
    chatEntry.update()
    
    // send message
    if keyboard.press[keybinds.submit] then
      if chatEntry.text.length > 0 then
        local sentChat = object
          author = player.name
          time = system.time()
          message = chatEntry.text
        end
        chatLog.insert(sentChat)
        connection.send(object
          mType = "chat"
          message = sentChat
        end)
        chatEntry.text = ""
      else
        setChatActive(false)
      end
    end
    
    // close chat
    if mouse.press or keyboard.press[keybinds.exit_menu] then
      setChatActive(false)
    end
  else
    // open chat
    if keyboard.press[keybinds.open_chat] and not usingChat then
      setChatActive(true)
    end
  end
  
  // force a limit (8) on the length of the chat log
  while chatLog.length > maxChatLength
    chatLog.removeAt(chatLog.length-1)
  end
  
  // emoji selector
  if mouse.right then
    if not emojiSel.on then
      emojiSel.x = mouse.x
      emojiSel.y = mouse.y
    end
    emojiSel.on = true
    // do some math to find out what emoji is selected
    emojiSel.selected = mod(floor((180-(atan2d(mouse.y-emojiSel.y, mouse.x-emojiSel.x)+(180-(90+360/emojis.length/2))))/(360/emojis.length)), emojis.length)
  else
    if emojiSel.on then
      emojiSel.emoji = emojis[emojiSel.selected]
      emojiSel.emojiTime = 120
    end
    emojiSel.on = false
  end
  if emojiSel.emojiTime >= 0 then
    emojiSel.emojiTime -= 1
  else
    emojiSel.emoji = 0
  end
  
  // handle menu items
  if mouse.press and abs(mouse.x+screen.width/2-10) < 10 then
    // custom made function to stop copying code
    local checkButton = function(height)
      return abs(mouse.y+screen.height/2-height) < 10
    end
    
    // toggle menu list
    if checkButton(10) then
      menuList = not menuList
    end
    
    // check if menu button is pressed
    if menuList then
      for m in menus
        // if button pressed
        if checkButton(menus[m]) then
          if menu.name != m then
            // then replace menu
            menu = new Menu(m, menuDraw[m], menuUpd[m], 1)
          else
            // unless the menu is the same, in which case toggle
            menu.toggleActive()
          end
        end
      end
    end
  end
  
  // // update menu
  if menu then
    menu.update()
    blockControl("menu")
  else
    unblockControl("menu")
  end
end

drawUI = function()
  // draw statuses
  drawStatuses(player.getStatuses(), player.worldX, player.worldY)
  for p in serverPlayers
    if p.map == world.name then
      drawStatuses(p.statuses, p.worldX, p.worldY)
    end
  end
  
  // draw names above entities & server players
  for entity in entities+serverPlayers
    if (not entity.map) or entity.map == world.name then
      screen.drawText(entity.name, entity.worldX-cameraX, entity.worldY-cameraY+entity.height, entity.width, entity.nameCol)
      screen.setLineWidth(0.2)
      screen.drawTextOutline(entity.name, entity.worldX-cameraX, entity.worldY-cameraY+entity.height, entity.width, "#fff")
    end
  end
  
  // chat icon
  if chatEntry.text.length > 0 then
    screen.drawSprite("ui/chatting", player.worldX-cameraX+12, player.worldY-cameraY+7, 10, 10)
  end
  for p in serverPlayers
    if p.map == world.name and p.chatting then
      screen.drawSprite("ui/chatting", p.worldX-cameraX+12, p.worldY-cameraY+7, 10, 10)
    end
  end
  
  // emoji
  if emojiSel.emojiTime >= 0 then
    screen.drawSprite("ui/emotes/"+emojiSel.emoji, player.worldX-cameraX+22, player.worldY-cameraY+7, 10, 10)
  end
  for p in serverPlayers
    if p.map == world.name and p.emoji != 0 then
      screen.drawSprite("ui/emotes/"+p.emoji, p.worldX-cameraX+22, p.worldY-cameraY+7, 10, 10)
    end
  end
  
  // draw energy bar
  if player.energy < characters[player.char].energyMax then
    screen.setDrawAnchor(-1, 0)
    screen.setLineWidth(3)
    screen.fillRoundRect(-100, -screen.height/2+20, 200*(player.energy/characters[player.char].energyMax), 20, 3, "#55f")
    screen.drawRoundRect(-100, -screen.height/2+20, 200, 20, 3, "#00f")
    screen.setDrawAnchor(0, 0)
    screen.drawSprite("ui/energy", 0, -screen.height/2+20, 15, 15)
  end
  
  // draw chat stuff
  if usingChat then
    screen.setFont("monospace")
    screen.setAlpha(0.6)
    screen.setDrawAnchor(-1,0)
    screen.fillRect(-screen.width/2+2, 60, 175, 90,"rgb(45,45,45)")
    screen.setAlpha(1)
    screen.setDrawAnchor(0,0)
    // chat bar
    screen.setDrawAnchor(-1,0)
    screen.setAlpha(0.6)
    if chatEntry.text == "" then
      screen.drawText("say something...", -screen.width/2+4, 92, 7, "#000")
      screen.fillRect(-screen.width/2+2, 92, 175, 12,"rgb(120,120,120)")
    else
      screen.fillRect(-screen.width/2+2, 92, 175, 12,"rgb(130,130,130)")
      screen.setAlpha(0.9)
      screen.setDrawAnchor(-1,0)
      screen.drawText(chatEntry.text, -screen.width/2+4, 92, 7, "#000")
    end
    // draw cursor
    if chatEntry.cd%16<8 then // make cursor blink
      screen.fillRect(-screen.width/2+4+screen.textWidth(chatEntry.text, 7)/chatEntry.text.length*chatEntry.x, screen.height/2-8, 1, 8, "#fff")
    end
    screen.setAlpha(1)
    screen.setDrawAnchor(0,0)
  
    // chat log
    screen.setDrawAnchor(-1, 0)
    local index = 1
    local timeAtLastChat = chatLog[0].time
    local t = 1-min((system.time()-timeAtLastChat)/300, 1) // to animate after a new message is recieved
    t = (1-cos(t*PI))/2 // cosine smoothing
    for chat in chatLog
      local chatHours = floor((chat.time/1000/60/60)%12)
      local chatMinutes = floor((chat.time/1000/60)%60)
      if (chatMinutes+"").length < 2 then
        chatMinutes = "0"+chatMinutes
      end
      local chatAMPM = ["AM", "PM"][(chat.time/1000/60/60)%24>=12]
      if index == 1 then // last chat shouldn't be animated
        screen.setAlpha(1)
        screen.drawText("("+chatHours+":"+chatMinutes+" "+chatAMPM+") "+chat.author+": "+chat.message, -screen.width/2 + 4, 11+(index)*10, 5, "#fff")
      elsif index == maxChatLength then // fade out last text
        screen.setAlpha(t*0.6)
        screen.drawText("("+chatHours+":"+chatMinutes+" "+chatAMPM+") "+chat.author+": "+chat.message, -screen.width/2 + 4, 11+(index-t)*10, 5, "#fff")
      else
        screen.setAlpha(0.6)
        screen.drawText("("+chatHours+":"+chatMinutes+" "+chatAMPM+") "+chat.author+": "+chat.message, -screen.width/2 + 4, 11+(index-t)*10, 5, "#fff")
      end
      index += 1
    end
    screen.setFont("BitCell")
  else
    // draw prompt to open chat
    lastchat = chatLog[0]
    screen.setDrawAnchor(-1, 0)
    screen.setAlpha(0.5)
    screen.drawText(keybinds.open_chat.substring(0, 1)+keybinds.open_chat.substring(1, keybinds.open_chat.length).toLowerCase()+" - open chat",-screen.width/2+3, 88, 8, "#000")    
    screen.fillRect(-screen.width/2+2,94,100, 7,"rgb(45,45,45)")
    if lastchat.message then
      screen.drawText(lastchat.author+": "+lastchat.message, -screen.width/2+4, 95, 5, "#fff")    
    end
    
    screen.setDrawAnchor()
    screen.setAlpha(1)
    // draw unread messages
    if unread then
      screen.fillRound(-screen.width/2+110, screen.height/2-6, 10, 10, "#f00")
      screen.drawText(unread, -screen.width/2+110, screen.height/2-6, 10/(unread+"").length, "#fff")
    end
  end
  screen.setAlpha(1)
  screen.setDrawAnchor(0, 0)
  
  // emoji selector
  if emojiSel.on then
    screen.setLineWidth(30)
    screen.drawRound(emojiSel.x, emojiSel.y, 50, 50, "#555")
    screen.setLineWidth(3)
    local r = 90
    local i = 0
    for emoji in emojis
      if emojiSel.selected == i then
        screen.fillRound(emojiSel.x+cosd(r)*25, emojiSel.y+sind(r)*25, 30, 30, "#fff")
      end
      screen.drawSprite("ui/emotes/"+emoji, emojiSel.x+cosd(r)*25, emojiSel.y+sind(r)*25, 20, 20)
      r -= 360/emojis.length
      i += 1
    end
  end
  
  // menu selector button
  screen.drawSprite("ui/menu/menu."+menuList, -screen.width/2+10, -screen.height/2+10, 20, 20)
  
  // menu buttons
  if menuList then
    for m in menus
      screen.drawSprite("ui/menu/"+m, -screen.width/2+10, -screen.height/2+menus[m], 20, 20)
    end
    if menu.active then
      screen.fillRect(-screen.width/2+10, -screen.height/2+menus[menu.name], 20, 20, "#fff5")
    end
  end
  
  // menu
  if menu.active then
    menu.draw()
  end
end

setChatActive = function(active)
  usingChat = active
  if active then
    blockControl("chat")
  else
    unblockControl("chat")
  end
end
end()



`
      

var Compiler, LocalLayer;

Compiler = (function() {
  class Compiler {
    constructor(program) {
      var i, j, len, ref, s;
      this.program = program;
      this.code_saves = [];
      this.code = "";
      this.code = [this.code];
      this.routine = new Routine();
      this.locals = new Locals(this);
      this.count = 0;
      ref = this.program.statements;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        s = ref[i];
        this.compile(s);
        if (i < this.program.statements.length - 1) {
          this.routine.POP(s);
        }
      }
      this.routine.optimize();
      this.routine.resolveLabels();
      this.count += this.routine.opcodes.length;
      this.routine.locals_size = this.locals.max_index;
    }

    
    // console.info(JSON.stringify @routine.export())
    // @routine = new Routine(0).import( @routine.export() )
    compile(statement) {
      if (statement instanceof Program.Value) {
        return this.compileValue(statement);
      } else if (statement instanceof Program.Operation) {
        return this.compileOperation(statement);
      } else if (statement instanceof Program.Assignment) {
        return this.compileAssignment(statement);
      } else if (statement instanceof Program.Variable) {
        return this.compileVariable(statement);
      } else if (statement instanceof Program.Function) {
        return this.compileFunction(statement);
      } else if (statement instanceof Program.FunctionCall) {
        return this.compileFunctionCall(statement);
      } else if (statement instanceof Program.While) {
        return this.compileWhile(statement);
      }
      if (statement instanceof Program.SelfAssignment) {
        return this.compileSelfAssignment(statement);
      } else if (statement instanceof Program.Braced) {
        return this.compileBraced(statement);
      } else if (statement instanceof Program.CreateObject) {
        return this.compileCreateObject(statement);
      } else if (statement instanceof Program.Field) {
        return this.compileField(statement);
      } else if (statement instanceof Program.Negate) {
        return this.compileNegate(statement);
      } else if (statement instanceof Program.For) {
        return this.compileFor(statement);
      } else if (statement instanceof Program.ForIn) {
        return this.compileForIn(statement);
      } else if (statement instanceof Program.Not) {
        return this.compileNot(statement);
      } else if (statement instanceof Program.Return) {
        return this.compileReturn(statement);
      } else if (statement instanceof Program.Condition) {
        return this.compileCondition(statement);
      } else if (statement instanceof Program.Break) {
        return this.compileBreak(statement);
      } else if (statement instanceof Program.Continue) {
        return this.compileContinue(statement);
      } else if (statement instanceof Program.CreateClass) {
        return this.compileCreateClass(statement);
      } else if (statement instanceof Program.NewCall) {
        return this.compileNewCall(statement);
      } else if (statement instanceof Program.After) {
        return this.compileAfter(statement);
      } else if (statement instanceof Program.Every) {
        return this.compileEvery(statement);
      } else if (statement instanceof Program.Do) {
        return this.compileDo(statement);
      } else if (statement instanceof Program.Sleep) {
        return this.compileSleep(statement);
      } else if (statement instanceof Program.Delete) {
        return this.compileDelete(statement);
      } else if (true) {
        console.info(statement);
        throw "Not implemented";
      }
    }

    compileAssignment(statement) {
      var arg_index, f, i, index, j, ref;
      if (statement.local) {
        if (statement.field instanceof Program.Variable) {
          if (statement.expression instanceof Program.Function) {
            index = this.locals.register(statement.field.identifier); //# register function locally first
            this.compile(statement.expression); //# then compile function which may refer to itself
            this.routine.arg1[this.routine.arg1.length - 1].import_self = index;
            return this.routine.STORE_LOCAL(index, statement);
          } else if (statement.expression instanceof Program.After || statement.expression instanceof Program.Do || statement.expression instanceof Program.Every) {
            index = this.locals.register(statement.field.identifier); //# register thread locally first
            arg_index = this.routine.arg1.length; //# thread main routine will land here
            this.compile(statement.expression); //# then compile function which may refer to itself
            this.routine.arg1[arg_index].import_self = index;
            return this.routine.STORE_LOCAL(index, statement);
          } else {
            this.compile(statement.expression); //# first compile expression which may refer to another local with same name
            index = this.locals.register(statement.field.identifier); //# then register a local for that name
            return this.routine.STORE_LOCAL(index, statement);
          }
        } else {
          throw "illegal";
        }
      } else {
        if (statement.field instanceof Program.Variable) {
          if (this.locals.get(statement.field.identifier) != null) {
            this.compile(statement.expression);
            index = this.locals.get(statement.field.identifier);
            this.routine.STORE_LOCAL(index, statement);
          } else if (statement.expression instanceof Program.CreateClass) {
            return this.compileUpdateClass(statement.expression, statement.field.identifier);
          } else {
            this.compile(statement.expression);
            this.routine.STORE_VARIABLE(statement.field.identifier, statement);
          }
        } else {
          f = statement.field;
          if (f.expression instanceof Program.Variable) {
            if (f.expression.identifier === "this") {
              this.routine.LOAD_THIS(f);
            } else if (this.locals.get(f.expression.identifier) != null) {
              index = this.locals.get(f.expression.identifier);
              this.routine.LOAD_LOCAL_OBJECT(index, f.expression);
            } else if (f.expression.identifier === "global") {
              this.routine.LOAD_GLOBAL(f);
            } else {
              this.routine.LOAD_VARIABLE_OBJECT(f.expression.identifier, statement);
            }
          } else {
            this.compile(f.expression);
            this.routine.MAKE_OBJECT(statement);
          }
          for (i = j = 0, ref = f.chain.length - 2; j <= ref; i = j += 1) {
            this.compile(f.chain[i]);
            this.routine.LOAD_PROPERTY_OBJECT(f.chain[i]);
          }
          this.compile(f.chain[f.chain.length - 1]);
          this.compile(statement.expression);
          return this.routine.STORE_PROPERTY(statement);
        }
      }
    }

    compileSelfAssignment(statement) {
      var c, f, i, index, j, op, ref;
      switch (statement.operation) {
        case Token.TYPE_PLUS_EQUALS:
          op = "ADD";
          break;
        case Token.TYPE_MINUS_EQUALS:
          op = "SUB";
          break;
        case Token.TYPE_MULTIPLY_EQUALS:
          op = "MUL";
          break;
        case Token.TYPE_DIVIDE_EQUALS:
          op = "DIV";
          break;
        case Token.TYPE_MODULO_EQUALS:
          op = "MODULO";
          break;
        case Token.TYPE_AND_EQUALS:
          op = "BINARY_AND";
          break;
        case Token.TYPE_OR_EQUALS:
          op = "BINARY_OR";
      }
      if (statement.field instanceof Program.Variable) {
        if (this.locals.get(statement.field.identifier) != null) {
          index = this.locals.get(statement.field.identifier);
          this.routine.LOAD_LOCAL(index, statement);
          this.compile(statement.expression);
          this.routine[op](statement, 1);
          this.routine.STORE_LOCAL(index, statement);
        } else {
          this.routine.LOAD_VARIABLE(statement.field.identifier, statement);
          this.compile(statement.expression);
          this.routine[op](statement, 1);
          this.routine.STORE_VARIABLE(statement.field.identifier, statement);
        }
      } else {
        f = statement.field;
        if (f.expression instanceof Program.Variable) {
          if (f.expression.identifier === "this") {
            this.routine.LOAD_THIS(f);
          } else if (this.locals.get(f.expression.identifier) != null) {
            index = this.locals.get(f.expression.identifier);
            this.routine.LOAD_LOCAL_OBJECT(index, statement);
          } else if (f.expression.identifier === "global") {
            this.routine.LOAD_GLOBAL(f);
          } else {
            this.routine.LOAD_VARIABLE_OBJECT(f.expression.identifier, statement);
          }
        } else {
          this.compile(f.expression);
          this.routine.MAKE_OBJECT(statement);
        }
        for (i = j = 0, ref = f.chain.length - 2; j <= ref; i = j += 1) {
          this.compile(f.chain[i]);
          this.routine.LOAD_PROPERTY_OBJECT(f.chain[i]);
        }
        c = f.chain[f.chain.length - 1];
        this.compile(f.chain[f.chain.length - 1]);
        this.routine.LOAD_PROPERTY_ATOP(statement);
        this.compile(statement.expression);
        this.routine[op](statement, 1);
        return this.routine.STORE_PROPERTY(statement);
      }
    }

    compileOperation(op) {
      var jump, ref, ref1;
      if ((ref = op.operation) === "+" || ref === "-" || ref === "*" || ref === "/" || ref === "%" || ref === "&" || ref === "|" || ref === "<<" || ref === ">>") {
        this.compile(op.term1);
        this.compile(op.term2);
        switch (op.operation) {
          case "+":
            this.routine.ADD(op);
            break;
          case "-":
            this.routine.SUB(op);
            break;
          case "*":
            this.routine.MUL(op);
            break;
          case "/":
            this.routine.DIV(op);
            break;
          case "%":
            this.routine.MODULO(op);
            break;
          case "&":
            this.routine.BINARY_AND(op);
            break;
          case "|":
            this.routine.BINARY_OR(op);
            break;
          case "<<":
            this.routine.SHIFT_LEFT(op);
            break;
          case ">>":
            this.routine.SHIFT_RIGHT(op);
        }
      } else if ((ref1 = op.operation) === "==" || ref1 === "!=" || ref1 === "<" || ref1 === ">" || ref1 === "<=" || ref1 === ">=") {
        this.compile(op.term1);
        this.compile(op.term2);
        switch (op.operation) {
          case "==":
            this.routine.EQ(op);
            break;
          case "!=":
            this.routine.NEQ(op);
            break;
          case "<":
            this.routine.LT(op);
            break;
          case ">":
            this.routine.GT(op);
            break;
          case "<=":
            this.routine.LTE(op);
            break;
          case ">=":
            this.routine.GTE(op);
        }
      } else if (op.operation === "and") {
        jump = this.routine.createLabel("and");
        op.term1.nowarning = true;
        op.term2.nowarning = true;
        this.compile(op.term1);
        this.routine.JUMPN_NOPOP(jump, op);
        this.routine.POP(op);
        this.compile(op.term2);
        return this.routine.setLabel(jump);
      } else if (op.operation === "or") {
        jump = this.routine.createLabel("or");
        op.term1.nowarning = true;
        op.term2.nowarning = true;
        this.compile(op.term1);
        this.routine.JUMPY_NOPOP(jump, op);
        this.routine.POP(op);
        this.compile(op.term2);
        return this.routine.setLabel(jump);
      } else if (op.operation === "^") {
        this.compile(op.term1);
        this.compile(op.term2);
        return this.routine.BINARY_OP(Compiler.predefined_binary_functions.pow, op);
      } else {
        return "";
      }
    }

    compileBraced(expression) {
      this.compile(expression.expression);
    }

    compileNegate(expression) {
      if (expression.expression instanceof Program.Value && expression.expression.type === Program.Value.TYPE_NUMBER) {
        return this.routine.LOAD_VALUE(-expression.expression.value, expression);
      } else {
        this.compile(expression.expression);
        return this.routine.NEGATE(expression);
      }
    }

    compileNot(expression) {
      expression.expression.nowarning = true;
      this.compile(expression.expression);
      return this.routine.NOT(expression);
    }

    compileValue(value) {
      var i, j, ref;
      switch (value.type) {
        case Program.Value.TYPE_NUMBER:
          this.routine.LOAD_VALUE(value.value, value);
          break;
        case Program.Value.TYPE_STRING:
          this.routine.LOAD_VALUE(value.value, value);
          break;
        case Program.Value.TYPE_ARRAY:
          this.routine.CREATE_ARRAY(value);
          for (i = j = 0, ref = value.value.length - 1; j <= ref; i = j += 1) {
            this.routine.LOAD_VALUE(i, value);
            this.compile(value.value[i]);
            this.routine.CREATE_PROPERTY(value);
          }
      }
    }

    compileVariable(variable) {
      var index, v;
      v = variable.identifier;
      if (v === "this") {
        return this.routine.LOAD_THIS(variable);
      } else if (v === "global") {
        return this.routine.LOAD_GLOBAL(variable);
      } else if (Compiler.predefined_values[v] != null) {
        return this.routine.LOAD_VALUE(Compiler.predefined_values[v], variable);
      } else if (this.locals.get(v) != null) {
        index = this.locals.get(v);
        return this.routine.LOAD_LOCAL(index, variable);
      } else {
        return this.routine.LOAD_VARIABLE(v, variable);
      }
    }

    compileField(field) {
      var c, i, id, index, j, k, len, ref, ref1;
      if (field.expression.identifier === "keyboard" || field.expression.identifier === "gamepad") {
        field.nowarning = true;
      }
      c = field.chain[field.chain.length - 1];
      if (c instanceof Program.Value && c.value === "type") {
        if (field.chain.length === 1) {
          if (field.expression instanceof Program.Variable) { // variable.type
            id = field.expression.identifier;
            if (this.locals.get(id) != null) {
              index = this.locals.get(id);
              this.routine.LOAD_LOCAL(index, field);
              this.routine.TYPE(field);
            } else if (Compiler.predefined_values[id] != null) {
              this.routine.LOAD_VALUE("number", field);
            } else if ((Compiler.predefined_unary_functions[id] != null) || Compiler.predefined_binary_functions[id]) {
              this.routine.LOAD_VALUE("function", field);
            } else {
              this.routine.VARIABLE_TYPE(id, field.expression);
            }
          } else {
            this.compile(field.expression);
            this.routine.TYPE(field);
          }
        } else {
          this.compile(field.expression);
          for (i = j = 0, ref = field.chain.length - 3; j <= ref; i = j += 1) {
            this.compile(field.chain[i]);
            this.routine.LOAD_PROPERTY(field);
          }
          this.compile(field.chain[field.chain.length - 2]);
          this.routine.PROPERTY_TYPE(field.expression);
        }
      } else {
        this.compile(field.expression);
        ref1 = field.chain;
        for (k = 0, len = ref1.length; k < len; k++) {
          c = ref1[k];
          this.compile(c);
          this.routine.LOAD_PROPERTY(field);
        }
      }
    }

    compileFieldParent(field) {
      var c, i, j, ref;
      this.compile(field.expression);
      for (i = j = 0, ref = field.chain.length - 2; j <= ref; i = j += 1) {
        c = field.chain[i];
        this.compile(c);
        this.routine.LOAD_PROPERTY(field);
      }
    }

    compileFunctionCall(call) {
      var a, funk, i, index, j, k, l, len, len1, len2, len3, len4, m, n, ref, ref1, ref2, ref3, ref4;
      if (call.expression instanceof Program.Field) {
        ref = call.args;
        for (i = j = 0, len = ref.length; j < len; i = ++j) {
          a = ref[i];
          this.compile(a);
        }
        this.compileFieldParent(call.expression);
        this.compile(call.expression.chain[call.expression.chain.length - 1]);
        return this.routine.FUNCTION_APPLY_PROPERTY(call.args.length, call);
      } else if (call.expression instanceof Program.Variable) {
        if (Compiler.predefined_unary_functions[call.expression.identifier] != null) {
          funk = Compiler.predefined_unary_functions[call.expression.identifier];
          if (call.args.length > 0) {
            this.compile(call.args[0]);
          } else {
            this.routine.LOAD_VALUE(0, call);
          }
          return this.routine.UNARY_OP(funk, call);
        } else if (Compiler.predefined_binary_functions[call.expression.identifier] != null) {
          funk = Compiler.predefined_binary_functions[call.expression.identifier];
          if (call.args.length > 0) {
            this.compile(call.args[0]);
          } else {
            this.routine.LOAD_VALUE(0, call);
          }
          if (call.args.length > 1) {
            this.compile(call.args[1]);
          } else {
            this.routine.LOAD_VALUE(0, call);
          }
          return this.routine.BINARY_OP(funk, call);
        } else if (call.expression.identifier === "super") {
          ref1 = call.args;
          for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
            a = ref1[i];
            this.compile(a);
          }
          return this.routine.SUPER_CALL(call.args.length, call);
        } else if (this.locals.get(call.expression.identifier) != null) {
          ref2 = call.args;
          for (i = l = 0, len2 = ref2.length; l < len2; i = ++l) {
            a = ref2[i];
            this.compile(a);
          }
          index = this.locals.get(call.expression.identifier);
          this.routine.LOAD_LOCAL(index, call);
          return this.routine.FUNCTION_CALL(call.args.length, call);
        } else {
          ref3 = call.args;
          for (i = m = 0, len3 = ref3.length; m < len3; i = ++m) {
            a = ref3[i];
            this.compile(a);
          }
          this.routine.LOAD_VALUE(call.expression.identifier, call);
          return this.routine.FUNCTION_APPLY_VARIABLE(call.args.length, call);
        }
      } else {
        ref4 = call.args;
        for (n = 0, len4 = ref4.length; n < len4; n++) {
          a = ref4[n];
          this.compile(a);
        }
        this.compile(call.expression);
        return this.routine.FUNCTION_CALL(call.args.length, call);
      }
    }

    compileFor(forloop) {
      var for_continue, for_end, for_start, iterator, save_break, save_continue;
      iterator = this.locals.register(forloop.iterator);
      this.locals.allocate(); // range_to
      this.locals.allocate(); // step
      this.compile(forloop.range_from);
      this.routine.STORE_LOCAL(iterator, forloop);
      this.routine.POP(forloop);
      this.compile(forloop.range_to);
      if (forloop.range_by !== 0) {
        this.compile(forloop.range_by);
      } else {
        this.routine.LOAD_VALUE(0, forloop);
      }
      for_start = this.routine.createLabel("for_start");
      for_continue = this.routine.createLabel("for_continue");
      for_end = this.routine.createLabel("for_end");
      this.routine.FORLOOP_INIT([iterator, for_end], forloop);
      this.routine.setLabel(for_start);
      this.locals.push();
      save_break = this.break_label;
      save_continue = this.continue_label;
      this.break_label = for_end;
      this.continue_label = for_continue;
      this.compileSequence(forloop.sequence);
      this.break_label = save_break;
      this.continue_label = save_continue;
      this.routine.setLabel(for_continue);
      this.routine.FORLOOP_CONTROL([iterator, for_start], forloop);
      this.routine.setLabel(for_end);
      return this.locals.pop();
    }

    compileForIn(forloop) {
      var for_continue, for_end, for_start, iterator, save_break, save_continue;
      iterator = this.locals.register(forloop.iterator);
      this.locals.allocate(); // array
      this.locals.allocate(); // index
      this.compile(forloop.list);
      for_start = this.routine.createLabel("for_start");
      for_continue = this.routine.createLabel("for_continue");
      for_end = this.routine.createLabel("for_end");
      this.routine.FORIN_INIT([iterator, for_end], forloop);
      this.routine.setLabel(for_start);
      this.locals.push();
      save_break = this.break_label;
      save_continue = this.continue_label;
      this.break_label = for_end;
      this.continue_label = for_continue;
      this.compileSequence(forloop.sequence);
      this.break_label = save_break;
      this.continue_label = save_continue;
      this.routine.setLabel(for_continue);
      this.routine.FORIN_CONTROL([iterator, for_start], forloop);
      this.routine.setLabel(for_end);
      return this.locals.pop();
    }

    compileSequence(sequence) {
      var i, j, ref;
      for (i = j = 0, ref = sequence.length - 1; j <= ref; i = j += 1) {
        if (!sequence[i].nopop) {
          this.routine.POP(sequence[i]);
        }
        this.compile(sequence[i]);
      }
    }

    compileWhile(whiloop) {
      var end, save_break, save_continue, start;
      this.locals.push();
      start = this.routine.createLabel("while_start");
      end = this.routine.createLabel("while_end");
      this.routine.LOAD_VALUE(0, whiloop);
      this.routine.setLabel(start);
      this.compile(whiloop.condition);
      this.routine.JUMPN(end);
      save_break = this.break_label;
      save_continue = this.continue_label;
      this.break_label = end;
      this.continue_label = start;
      this.compileSequence(whiloop.sequence);
      this.routine.JUMP(start, whiloop);
      this.break_label = save_break;
      this.continue_label = save_continue;
      this.routine.setLabel(end);
      return this.locals.pop();
    }

    compileBreak(statement) {
      if (this.break_label != null) {
        return this.routine.JUMP(this.break_label);
      }
    }

    compileContinue(statement) {
      if (this.continue_label != null) {
        return this.routine.JUMP(this.continue_label);
      }
    }

    compileFunction(func) {
      var r;
      r = this.compileFunctionBody(func);
      return this.routine.LOAD_ROUTINE(r, func);
    }

    compileFunctionBody(func) {
      var a, args, i, index, j, k, l, label, len, local_index, locals, m, numargs, r, ref, ref1, ref2, ref3, routine;
      routine = this.routine;
      locals = this.locals;
      this.routine = new Routine(func.args != null ? func.args.length : 0);
      this.locals = new Locals(this, locals);
      local_index = this.locals.index;
      this.routine.uses_arguments = true;
      if (func.args != null) {
        if (this.routine.uses_arguments) {
          args = this.locals.register("arguments");
          this.routine.STORE_LOCAL(args, func);
          this.routine.POP(func);
        }
        numargs = this.locals.register("+numargs");
        this.routine.STORE_LOCAL(numargs, func);
        this.routine.POP(func);
        for (i = j = ref = func.args.length - 1; j >= 0; i = j += -1) {
          a = func.args[i];
          index = this.locals.register(a.name);
          this.routine.STORE_LOCAL(index, func);
          this.routine.POP(func);
        }
        for (i = k = 0, ref1 = func.args.length - 1; k <= ref1; i = k += 1) {
          a = func.args[i];
          if (a.default != null) {
            index = this.locals.get(a.name);
            label = this.routine.createLabel("default_arg");
            this.routine.LOAD_VALUE(i, func);
            this.routine.LOAD_LOCAL(numargs, func);
            this.routine.LT(func);
            this.routine.JUMPY(label, func);
            this.compile(a.default);
            this.routine.STORE_LOCAL(index, func);
            this.routine.POP(func);
            this.routine.setLabel(label);
          }
        }
      }
      if (func.sequence.length > 0) {
        for (i = l = 0, ref2 = func.sequence.length - 1; l <= ref2; i = l += 1) {
          this.compile(func.sequence[i]);
          if (i < func.sequence.length - 1) {
            this.routine.POP(func.sequence[i]);
          } else {
            this.routine.RETURN(func.sequence[i]);
          }
        }
      } else {
        this.routine.LOAD_VALUE(0, func);
        this.routine.RETURN(func);
      }
      if ((func.args != null) && !this.locals.arguments_used) {
        this.routine.uses_arguments = false;
        this.routine.remove(0);
        this.routine.remove(0);
      }
      index = 0;
      ref3 = this.locals.imports;
      for (m = 0, len = ref3.length; m < len; m++) {
        i = ref3[m];
        this.routine.OP_INSERT(OPCODES.LOAD_IMPORT, func, index, index * 3);
        this.routine.OP_INSERT(OPCODES.STORE_LOCAL, func, i.index, index * 3 + 1);
        this.routine.OP_INSERT(OPCODES.POP, func, 0, index * 3 + 2);
        this.routine.import_refs.push(i.source);
        index += 1;
      }
      this.routine.optimize();
      this.routine.resolveLabels();
      this.count += this.routine.opcodes.length;
      r = this.routine;
      // console.info r.toString()
      this.routine.locals_size = this.locals.max_index;
      this.routine = routine;
      this.locals = locals;
      return r;
    }

    compileReturn(ret) {
      if (ret.expression != null) {
        this.compile(ret.expression);
        return this.routine.RETURN(ret);
      } else {
        this.routine.LOAD_VALUE(0, ret);
        return this.routine.RETURN(ret);
      }
    }

    compileCondition(condition) {
      var c, chain, condition_end, condition_next, i, j, ref;
      chain = condition.chain;
      this.routine.LOAD_VALUE(0, condition);
      condition_end = this.routine.createLabel("condition_end");
      for (i = j = 0, ref = chain.length - 1; j <= ref; i = j += 1) {
        condition_next = this.routine.createLabel("condition_next");
        c = chain[i];
        c.condition.nowarning = true;
        this.compile(c.condition);
        this.routine.JUMPN(condition_next);
        this.locals.push();
        this.compileSequence(c.sequence);
        this.locals.pop();
        this.routine.JUMP(condition_end, condition);
        this.routine.setLabel(condition_next);
        if (i === chain.length - 1 && (c.else != null)) {
          this.locals.push();
          this.compileSequence(c.else);
          this.locals.pop();
        }
      }
      this.routine.setLabel(condition_end);
    }

    formatField(field) {
      if (field === "constructor") {
        field = "_constructor";
      }
      return field.toString().replace(/"/g, "\\\"");
    }

    compileCreateObject(statement) {
      var f, j, len, ref;
      this.routine.CREATE_OBJECT(statement);
      ref = statement.fields;
      for (j = 0, len = ref.length; j < len; j++) {
        f = ref[j];
        this.routine.LOAD_VALUE(f.field, statement);
        this.compile(f.value);
        this.routine.CREATE_PROPERTY(statement);
      }
    }

    compileCreateClass(statement) {
      var f, j, len, ref, variable;
      if (statement.ext != null) {
        statement.ext.nowarning = true;
        this.compile(statement.ext);
      } else {
        this.routine.LOAD_VALUE(0, statement);
      }
      variable = (statement.ext != null) && statement.ext instanceof Program.Variable ? statement.ext.identifier : 0;
      this.routine.CREATE_CLASS(variable, statement);
      ref = statement.fields;
      for (j = 0, len = ref.length; j < len; j++) {
        f = ref[j];
        this.routine.LOAD_VALUE(f.field, statement);
        this.compile(f.value);
        this.routine.CREATE_PROPERTY(statement);
      }
    }

    compileUpdateClass(statement, variable) {
      this.compileCreateClass(statement);
      return this.routine.UPDATE_CLASS(variable, statement);
    }

    compileNewCall(statement) {
      var a, call, i, j, len, ref;
      call = statement.expression;
      this.routine.LOAD_VALUE(0, statement); // reserve spot on stack for the class instance
      ref = call.args;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        a = ref[i];
        this.compile(a);
      }
      this.compile(call.expression);
      this.routine.NEW_CALL(call.args.length, statement);
      return this.routine.POP(statement); // pop return value of class constructor
    }

    compileAfter(after) {
      var r;
      r = this.compileFunctionBody(after);
      this.routine.LOAD_ROUTINE(r, after);
      this.compile(after.delay);
      if ((after.multiplier != null) && after.multiplier !== 1) {
        this.routine.LOAD_VALUE(after.multiplier, after);
        this.routine.MUL(after);
      }
      return this.routine.AFTER(after);
    }

    compileEvery(every) {
      var r;
      r = this.compileFunctionBody(every);
      this.routine.LOAD_ROUTINE(r, every);
      this.compile(every.delay);
      if ((every.multiplier != null) && every.multiplier !== 1) {
        this.routine.LOAD_VALUE(every.multiplier, every);
        this.routine.MUL(every);
      }
      return this.routine.EVERY(every);
    }

    compileDo(dostuff) {
      var r;
      r = this.compileFunctionBody(dostuff);
      this.routine.LOAD_ROUTINE(r, dostuff);
      return this.routine.DO(dostuff);
    }

    compileSleep(sleep) {
      this.compile(sleep.delay);
      if ((sleep.multiplier != null) && sleep.multiplier !== 1) {
        this.routine.LOAD_VALUE(sleep.multiplier, sleep);
        this.routine.MUL(sleep);
      }
      return this.routine.SLEEP(sleep);
    }

    compileDelete(del) {
      var chain, i, j, ref;
      if (del.field instanceof Program.Variable) {
        this.routine.LOAD_THIS(del);
        this.routine.LOAD_VALUE(del.field.identifier, del);
        this.routine.DELETE(del);
      } else {
        this.compile(del.field.expression);
        chain = del.field.chain;
        for (i = j = 0, ref = chain.length - 1; j <= ref; i = j += 1) {
          this.compile(chain[i]);
          if (i < chain.length - 1) {
            this.routine.LOAD_PROPERTY(del);
          }
        }
        this.routine.DELETE(del);
      }
    }

    exec(context) {
      this.processor = new Processor();
      this.processor.load(this.routine);
      return this.processor.run(context);
    }

  };

  Compiler.predefined_unary_functions = {
    "round": Math.round,
    "floor": Math.floor,
    "ceil": Math.ceil,
    "abs": Math.abs,
    "sqrt": Math.sqrt,
    "sin": Math.sin,
    "cos": Math.cos,
    "tan": Math.tan,
    "acos": Math.acos,
    "asin": Math.asin,
    "atan": Math.atan,
    "sind": function(x) {
      return Math.sin(x * Math.PI / 180);
    },
    "cosd": function(x) {
      return Math.cos(x * Math.PI / 180);
    },
    "tand": function(x) {
      return Math.tan(x * Math.PI / 180);
    },
    "asind": function(x) {
      return Math.asin(x) / Math.PI * 180;
    },
    "acosd": function(x) {
      return Math.acos(x) / Math.PI * 180;
    },
    "atand": function(x) {
      return Math.atan(x) / Math.PI * 180;
    },
    "log": Math.log,
    "exp": Math.exp
  };

  Compiler.predefined_binary_functions = {
    "min": Math.min,
    "max": Math.max,
    "pow": Math.pow,
    "atan2": Math.atan2,
    "atan2d": function(y, x) {
      return Math.atan2(y, x) / Math.PI * 180;
    }
  };

  Compiler.predefined_values = {
    PI: Math.PI,
    true: 1,
    false: 0
  };

  return Compiler;

}).call(this);

this.Locals = class Locals {
  constructor(compiler, parent = null) {
    this.compiler = compiler;
    this.parent = parent;
    this.layers = [];
    this.index = 0;
    this.max_index = 0;
    this.push();
    this.imports = [];
  }

  increment() {
    var spot;
    spot = this.index++;
    this.max_index = Math.max(this.index, this.max_index);
    return spot;
  }

  push() {
    return this.layers.push(new LocalLayer(this));
  }

  pop() {
    // resetting the @index below was causing erasure of outer locals
    // when used after the block ; such reset is not needed
    //@index = @layers[@layers.length-1].start_index
    return this.layers.splice(this.layers.length - 1, 1);
  }

  register(name) {
    return this.layers[this.layers.length - 1].register(name);
  }

  allocate() {
    return this.layers[this.layers.length - 1].allocate();
  }

  get(name) {
    var i, index, j, ref, v;
    if (name === "arguments") {
      this.arguments_used = true;
    }
    for (i = j = ref = this.layers.length - 1; j >= 0; i = j += -1) {
      v = this.layers[i].get(name);
      if (v != null) {
        return v;
      }
    }
    if (this.parent != null) {
      v = this.parent.get(name);
      if (v != null) {
        index = this.register(name);
        this.imports.push({
          name: name,
          index: index,
          source: v
        });
        return index;
      }
    }
    return null;
  }

};

LocalLayer = class LocalLayer {
  constructor(locals1) {
    this.locals = locals1;
    this.start_index = this.locals.index;
    this.registered = {};
  }

  register(name) {
    return this.registered[name] = this.locals.increment();
  }

  allocate() {
    return this.locals.increment();
  }

  get(name) {
    if (this.registered[name] != null) {
      return this.registered[name];
    } else {
      return null;
    }
  }

};


this.Parser = (function() {
  class Parser {
    constructor(input, filename = "") {
      this.input = input;
      this.filename = filename;
      if (/^\s*\/\/\s*javascript\s*\n/.test(this.input)) {
        this.input = 'system.javascript("""\n\n' + this.input.replace(/\\/g, "\\\\") + '\n\n""")';
      }
      this.tokenizer = new Tokenizer(this.input, this.filename);
      this.program = new Program();
      this.current_block = [];
      this.current = {
        line: 1,
        column: 1
      };
      this.verbose = false;
      this.nesting = 0;
      this.object_nesting = 0;
      this.not_terminated = [];
      this.api_reserved = {
        screen: true,
        audio: true,
        keyboard: true,
        gamepad: true,
        sprites: true,
        sounds: true,
        music: true,
        assets: true,
        asset_manager: true,
        maps: true,
        touch: true,
        mouse: true,
        fonts: true,
        Sound: true,
        Image: true,
        Sprite: true,
        Map: true,
        system: true,
        storage: true,
        print: true,
        random: true,
        Function: true,
        List: true,
        Object: true,
        String: true,
        Number: true
      };
    }

    nextToken() {
      var token;
      token = this.tokenizer.next();
      if (token == null) {
        this.unexpected_eof = true;
        throw "Unexpected end of file";
      }
      return this.current = token;
    }

    nextTokenOptional() {
      var token;
      token = this.tokenizer.next();
      if (token != null) {
        this.current = token;
      }
      return token;
    }

    parse() {
      var err, expression, nt, token;
      try {
        this.warnings = [];
        while (true) {
          expression = this.parseLine();
          if ((expression == null) && !this.tokenizer.finished()) {
            token = this.tokenizer.next();
            if ((token != null) && token.reserved_keyword) {
              if (token.value === "end") {
                this.error("Too many 'end'");
              } else {
                this.error(`Misuse of reserved keyword: '${token.value}'`);
              }
            } else {
              this.error("Unexpected data");
            }
          }
          if (expression === null) {
            break;
          }
          this.current_block.push(expression);
          this.program.add(expression);
          if (this.verbose) {
            console.info(expression);
          }
        }
        return this;
      } catch (error1) {
        err = error1;
        //console.info "Error at line: #{@current.line} column: #{@current.column}"
        if (this.not_terminated.length > 0 && err === "Unexpected end of file") {
          nt = this.not_terminated[this.not_terminated.length - 1];
          return this.error_info = {
            error: `Unterminated '${nt.value}' ; no matching 'end' found`,
            line: nt.line,
            column: nt.column
          };
        } else {
          return this.error_info = {
            error: err,
            line: this.current.line,
            column: this.current.column
          };
        }
      }
    }

    //console.error err
    parseLine() {
      var token;
      token = this.nextTokenOptional();
      if (token == null) {
        return null;
      }
      switch (token.type) {
        case Token.TYPE_RETURN:
          return new Program.Return(token, this.parseExpression());
        case Token.TYPE_BREAK:
          return new Program.Break(token);
        case Token.TYPE_CONTINUE:
          return new Program.Continue(token);
        case Token.TYPE_LOCAL:
          return this.parseLocalAssignment(token);
        default:
          this.tokenizer.pushBack(token);
          return this.parseExpression();
      }
    }

    parseExpression(filter, first_function_call = false) {
      var access, expression;
      expression = this.parseExpressionStart();
      if (expression == null) {
        return null;
      }
      while (true) {
        access = this.parseExpressionSuffix(expression, filter);
        if (access == null) {
          return expression;
        }
        if (first_function_call && access instanceof Program.FunctionCall) {
          return access;
        }
        expression = access;
      }
    }

    assertExpression(filter, first_function_call = false) {
      var exp;
      exp = this.parseExpression(filter, first_function_call);
      if (exp == null) {
        throw "Expression expected";
      }
      return exp;
    }

    parseExpressionSuffix(expression, filter) {
      var field, identifier, token;
      token = this.nextTokenOptional();
      if (token == null) {
        return (filter === "self" ? expression : null);
      }
      switch (token.type) {
        case Token.TYPE_DOT:
          if (expression instanceof Program.Value && expression.type === Program.Value.TYPE_NUMBER) {
            this.tokenizer.pushBack(token);
            return null;
          } else {
            this.tokenizer.changeNumberToIdentifier();
            identifier = this.assertBroadIdentifier("Expected identifier");
            return Program.CreateFieldAccess(token, expression, new Program.Value(identifier, Program.Value.TYPE_STRING, identifier.value));
          }
          break;
        case Token.TYPE_OPEN_BRACKET:
          field = this.assertExpression();
          this.assert(Token.TYPE_CLOSED_BRACKET, "Expected ']'");
          return Program.CreateFieldAccess(token, expression, field);
        case Token.TYPE_OPEN_BRACE:
          return this.parseFunctionCall(token, expression);
        case Token.TYPE_EQUALS:
          return this.parseAssignment(token, expression);
        case Token.TYPE_PLUS_EQUALS:
          return this.parseSelfAssignment(token, expression, token.type);
        case Token.TYPE_MINUS_EQUALS:
          return this.parseSelfAssignment(token, expression, token.type);
        case Token.TYPE_MULTIPLY_EQUALS:
          return this.parseSelfAssignment(token, expression, token.type);
        case Token.TYPE_DIVIDE_EQUALS:
          return this.parseSelfAssignment(token, expression, token.type);
        case Token.TYPE_MODULO_EQUALS:
        case Token.TYPE_AND_EQUALS:
        case Token.TYPE_OR_EQUALS:
          return this.parseSelfAssignment(token, expression, token.type);
        default:
          if (filter === "self") {
            this.tokenizer.pushBack(token);
            return expression;
          } else if (token.is_binary_operator && filter !== "noop") {
            return this.parseBinaryOperation(token, expression);
          } else {
            this.tokenizer.pushBack(token);
            return null;
          }
      }
    }

    parseExpressionStart() {
      var next, token;
      token = this.nextTokenOptional();
      if (token == null) {
        return null;
      }
      switch (token.type) {
        case Token.TYPE_IDENTIFIER: // variable name
          return new Program.Variable(token, token.value);
        case Token.TYPE_NUMBER:
          return this.parseNumberExpression(token);
        case Token.TYPE_PLUS:
          return this.assertExpression();
        case Token.TYPE_MINUS:
          return this.parseExpressionSuffix(new Program.Negate(token, this.assertExpression("noop")), "self");
        case Token.TYPE_NOT:
          return this.parseExpressionSuffix(new Program.Not(token, this.assertExpression("noop")), "self");
        case Token.TYPE_STRING:
          return this.parseStringExpression(token);
        case Token.TYPE_IF:
          return this.parseIf(token);
        case Token.TYPE_FOR:
          return this.parseFor(token);
        case Token.TYPE_WHILE:
          return this.parseWhile(token);
        case Token.TYPE_OPEN_BRACE:
          return this.parseBracedExpression(token);
        case Token.TYPE_OPEN_BRACKET:
          return this.parseArray(token);
        case Token.TYPE_FUNCTION:
          return this.parseFunction(token);
        case Token.TYPE_OBJECT:
          return this.parseObject(token);
        case Token.TYPE_CLASS:
          return this.parseClass(token);
        case Token.TYPE_NEW:
          return this.parseNew(token);
        case Token.TYPE_DOT:
          next = this.assert(Token.TYPE_NUMBER, "malformed number");
          if (!Number.isInteger(next.value)) {
            throw "malformed number";
          }
          return new Program.Value(token, Program.Value.TYPE_NUMBER, Number.parseFloat(`.${next.string_value}`));
        case Token.TYPE_AFTER:
          return this.parseAfter(token);
        case Token.TYPE_EVERY:
          return this.parseEvery(token);
        case Token.TYPE_DO:
          return this.parseDo(token);
        case Token.TYPE_SLEEP:
          return this.parseSleep(token);
        case Token.TYPE_DELETE:
          return this.parseDelete(token);
        default:
          this.tokenizer.pushBack(token);
          return null;
      }
    }

    parseNumberExpression(number) {
      return new Program.Value(number, Program.Value.TYPE_NUMBER, number.value);
    }

    parseStringExpression(string) {
      var token;
      token = this.nextTokenOptional();
      if (token == null) {
        return new Program.Value(string, Program.Value.TYPE_STRING, string.value);
      } else {
        this.tokenizer.pushBack(token);
        return new Program.Value(string, Program.Value.TYPE_STRING, string.value);
      }
    }

    parseArray(bracket) {
      var res, token;
      res = [];
      while (true) {
        token = this.nextToken();
        if (token.type === Token.TYPE_CLOSED_BRACKET) {
          return new Program.Value(bracket, Program.Value.TYPE_ARRAY, res);
        } else if (token.type === Token.TYPE_COMMA) {
          continue;
        } else {
          this.tokenizer.pushBack(token);
          res.push(this.assertExpression());
        }
      }
    }

    parseBinaryOperation(operation, term1) {
      var ops, terms, token;
      ops = [new Program.Operation(operation, operation.value)];
      terms = [term1];
      terms.push(this.assertExpression("noop"));
      while (true) {
        token = this.nextTokenOptional();
        if (token == null) {
          break;
        }
        if (!token.is_binary_operator) {
          this.tokenizer.pushBack(token);
          break;
        }
        ops.push(new Program.Operation(token, token.value));
        terms.push(this.assertExpression("noop"));
      }
      return Program.BuildOperations(ops, terms);
    }

    parseAssignment(token, expression) {
      var res;
      if (!(expression instanceof Program.Variable) && !(expression instanceof Program.Field)) {
        throw "Expected variable identifier or property";
      }
      if (this.object_nesting === 0 && expression instanceof Program.Variable && this.api_reserved[expression.identifier]) {
        this.warnings.push({
          type: "assigning_api_variable",
          identifier: expression.identifier,
          line: token.line,
          column: token.column
        });
      }
      if (expression instanceof Program.Field) {
        this.object_nesting += 1;
        res = new Program.Assignment(token, expression, this.assertExpression());
        this.object_nesting -= 1;
      } else {
        res = new Program.Assignment(token, expression, this.assertExpression());
      }
      return res;
    }

    parseSelfAssignment(token, expression, operation) {
      if (!(expression instanceof Program.Variable) && !(expression instanceof Program.Field)) {
        throw "Expected variable identifier or property";
      }
      return new Program.SelfAssignment(token, expression, operation, this.assertExpression());
    }

    parseLocalAssignment(local) {
      var identifier;
      identifier = this.assert(Token.TYPE_IDENTIFIER, "Expected identifier");
      this.assert(Token.TYPE_EQUALS, "Expected '='");
      return new Program.Assignment(local, new Program.Variable(identifier, identifier.value), this.assertExpression(), true);
    }

    parseBracedExpression(open) {
      var expression, token;
      expression = this.assertExpression();
      token = this.nextToken();
      if (token.type === Token.TYPE_CLOSED_BRACE) {
        return new Program.Braced(open, expression);
      } else {
        return this.error("missing closing parenthese");
      }
    }

    parseFunctionCall(brace_token, expression) {
      var args, start, token;
      args = [];
      this.last_function_call = new Program.FunctionCall(brace_token, expression, args);
      this.last_function_call.argslimits = [];
      while (true) {
        token = this.nextTokenOptional();
        if (token == null) {
          return this.error("missing closing parenthese");
        } else if (token.type === Token.TYPE_CLOSED_BRACE) {
          return new Program.FunctionCall(token, expression, args);
        } else if (token.type === Token.TYPE_COMMA) {
          continue;
        } else {
          this.tokenizer.pushBack(token);
          start = token.start;
          args.push(this.assertExpression());
          this.last_function_call.argslimits.push({
            start: start,
            end: this.tokenizer.index - 1
          });
        }
      }
    }

    addTerminable(token) {
      return this.not_terminated.push(token);
    }

    endTerminable() {
      if (this.not_terminated.length > 0) {
        this.not_terminated.splice(this.not_terminated.length - 1, 1);
      }
    }

    parseFunction(funk) {
      var args, line, sequence, token;
      this.nesting += 1;
      this.addTerminable(funk);
      args = this.parseFunctionArgs();
      sequence = [];
      while (true) {
        token = this.nextToken();
        if (token.type === Token.TYPE_END) {
          this.nesting -= 1;
          this.endTerminable();
          return new Program.Function(funk, args, sequence, token);
        } else {
          this.tokenizer.pushBack(token);
          line = this.parseLine();
          if (line != null) {
            sequence.push(line);
          } else {
            this.error("Unexpected data while parsing function");
          }
        }
      }
    }

    parseFunctionArgs() {
      var args, exp, last, token;
      token = this.nextToken();
      args = [];
      last = null;
      if (token.type !== Token.TYPE_OPEN_BRACE) {
        return this.error("Expected opening parenthese");
      }
      while (true) {
        token = this.nextToken();
        if (token.type === Token.TYPE_CLOSED_BRACE) {
          return args;
        } else if (token.type === Token.TYPE_COMMA) {
          last = null;
          continue;
        } else if (token.type === Token.TYPE_EQUALS && last === "argument") {
          exp = this.assertExpression();
          args[args.length - 1].default = exp;
        } else if (token.type === Token.TYPE_IDENTIFIER) {
          last = "argument";
          args.push({
            name: token.value
          });
        } else {
          return this.error("Unexpected token");
        }
      }
    }

    warningAssignmentCondition(expression) {
      if (expression instanceof Program.Assignment) {
        return this.warnings.push({
          type: "assignment_as_condition",
          line: expression.token.line,
          column: expression.token.column
        });
      }
    }

    parseIf(iftoken) {
      var chain, current, line, token;
      this.addTerminable(iftoken);
      current = {
        condition: this.assertExpression(),
        sequence: []
      };
      this.warningAssignmentCondition(current.condition);
      chain = [];
      token = this.nextToken();
      if (token.type !== Token.TYPE_THEN) {
        return this.error("Expected 'then'");
      }
      while (true) {
        token = this.nextToken();
        if (token.type === Token.TYPE_ELSIF) {
          chain.push(current);
          current = {
            condition: this.assertExpression(),
            sequence: []
          };
          this.warningAssignmentCondition(current.condition);
          this.assert(Token.TYPE_THEN, "Expected 'then'");
        } else if (token.type === Token.TYPE_ELSE) {
          current.else = [];
        } else if (token.type === Token.TYPE_END) {
          chain.push(current);
          this.endTerminable();
          return new Program.Condition(iftoken, chain);
        } else {
          this.tokenizer.pushBack(token);
          line = this.parseLine();
          if (line == null) {
            throw Error("Unexpected data while parsing if");
          }
          if (current.else != null) {
            current.else.push(line);
          } else {
            current.sequence.push(line);
          }
        }
      }
    }

    assert(type, error) {
      var token;
      token = this.nextToken();
      if (token.type !== type) {
        throw error;
      }
      return token;
    }

    assertBroadIdentifier(error) {
      var token;
      token = this.nextToken();
      if (token.type !== Token.TYPE_IDENTIFIER && token.reserved_keyword) {
        token.type = Token.TYPE_IDENTIFIER;
      }
      if (token.type !== Token.TYPE_IDENTIFIER) {
        throw error;
      }
      return token;
    }

    error(text) {
      throw text;
    }

    parseFor(fortoken) {
      var iterator, list, range_by, range_from, range_to, token;
      iterator = this.assertExpression();
      if (iterator instanceof Program.Assignment) {
        range_from = iterator.expression;
        iterator = iterator.field;
        token = this.nextToken();
        if (token.type !== Token.TYPE_TO) {
          return this.error("Expected 'to'");
        }
        range_to = this.assertExpression();
        token = this.nextToken();
        if (token.type === Token.TYPE_BY) {
          range_by = this.assertExpression();
        } else {
          range_by = 0;
          this.tokenizer.pushBack(token);
        }
        return new Program.For(fortoken, iterator.identifier, range_from, range_to, range_by, this.parseSequence(fortoken));
      } else if (iterator instanceof Program.Variable) {
        this.assert(Token.TYPE_IN, "Error expected keyword 'in'");
        list = this.assertExpression();
        return new Program.ForIn(fortoken, iterator.identifier, list, this.parseSequence(fortoken));
      } else {
        return this.error("Malformed for loop");
      }
    }

    parseWhile(whiletoken) {
      var condition;
      condition = this.assertExpression();
      return new Program.While(whiletoken, condition, this.parseSequence(whiletoken));
    }

    parseSequence(start_token) {
      var line, sequence, token;
      if (start_token != null) {
        this.addTerminable(start_token);
      }
      this.nesting += 1;
      sequence = [];
      while (true) {
        token = this.nextToken();
        if (token.type === Token.TYPE_END) {
          if (start_token != null) {
            this.endTerminable();
          }
          this.nesting -= 1;
          return sequence;
        } else {
          this.tokenizer.pushBack(token);
          line = this.parseLine();
          if (line == null) {
            this.error("Unexpected data");
          }
          sequence.push(line);
        }
      }
      return sequence;
    }

    parseObject(object) {
      var exp, fields, token;
      this.nesting += 1;
      this.object_nesting += 1;
      this.addTerminable(object);
      fields = [];
      while (true) {
        token = this.nextToken();
        if (token.type === Token.TYPE_END) {
          this.nesting -= 1;
          this.object_nesting -= 1;
          this.endTerminable();
          return new Program.CreateObject(object, fields);
        } else {
          if (token.type !== Token.TYPE_IDENTIFIER && token.reserved_keyword) {
            token.type = Token.TYPE_IDENTIFIER;
          }
          if (token.type === Token.TYPE_STRING) {
            token.type = Token.TYPE_IDENTIFIER;
          }
          if (token.type === Token.TYPE_IDENTIFIER) {
            this.assert(Token.TYPE_EQUALS, "Expected '='");
            exp = this.assertExpression();
            fields.push({
              field: token.value,
              value: exp
            });
          } else {
            return this.error("Malformed object");
          }
        }
      }
    }

    parseClass(object) {
      var exp, ext, fields, token;
      this.nesting += 1;
      this.object_nesting += 1;
      this.addTerminable(object);
      fields = [];
      token = this.nextToken();
      if (token.type === Token.TYPE_EXTENDS) {
        ext = this.assertExpression();
        token = this.nextToken();
      }
      while (true) {
        if (token.type === Token.TYPE_END) {
          this.nesting -= 1;
          this.object_nesting -= 1;
          this.endTerminable();
          return new Program.CreateClass(object, ext, fields);
        } else {
          if (token.type !== Token.TYPE_IDENTIFIER && token.reserved_keyword) {
            token.type = Token.TYPE_IDENTIFIER;
          }
          if (token.type === Token.TYPE_STRING) {
            token.type = Token.TYPE_IDENTIFIER;
          }
          if (token.type === Token.TYPE_IDENTIFIER) {
            this.assert(Token.TYPE_EQUALS, "Expected '='");
            exp = this.assertExpression();
            fields.push({
              field: token.value,
              value: exp
            });
          } else {
            return this.error("Malformed object");
          }
        }
        token = this.nextToken();
      }
    }

    parseNew(token) {
      var exp;
      exp = this.assertExpression(null, true);
      return new Program.NewCall(token, exp);
    }

    parseAfter(after) {
      var delay, line, multiplier, sequence, token;
      this.nesting += 1;
      this.addTerminable(after);
      delay = this.assertExpression();
      token = this.nextToken();
      multiplier = null;
      if (token.type === Token.TYPE_IDENTIFIER && this.multipliers[token.value]) {
        multiplier = this.multipliers[token.value];
        token = this.nextToken();
      }
      if ((token == null) || token.type !== Token.TYPE_DO) {
        this.error("Expected keyword 'do'");
      }
      sequence = [];
      while (true) {
        token = this.nextToken();
        if (token.type === Token.TYPE_END) {
          this.nesting -= 1;
          this.endTerminable();
          return new Program.After(after, delay, sequence, token, multiplier);
        } else {
          this.tokenizer.pushBack(token);
          line = this.parseLine();
          if (line != null) {
            sequence.push(line);
          } else {
            this.error("Unexpected data while parsing after");
          }
        }
      }
    }

    parseEvery(every) {
      var delay, line, multiplier, sequence, token;
      this.nesting += 1;
      this.addTerminable(every);
      delay = this.assertExpression();
      token = this.nextToken();
      multiplier = null;
      if (token.type === Token.TYPE_IDENTIFIER && this.multipliers[token.value]) {
        multiplier = this.multipliers[token.value];
        token = this.nextToken();
      }
      if ((token == null) || token.type !== Token.TYPE_DO) {
        this.error("Expected keyword 'do'");
      }
      sequence = [];
      while (true) {
        token = this.nextToken();
        if (token.type === Token.TYPE_END) {
          this.nesting -= 1;
          this.endTerminable();
          return new Program.Every(every, delay, sequence, token, multiplier);
        } else {
          this.tokenizer.pushBack(token);
          line = this.parseLine();
          if (line != null) {
            sequence.push(line);
          } else {
            this.error("Unexpected data while parsing after");
          }
        }
      }
    }

    parseDo(do_token) {
      var line, sequence, token;
      this.nesting += 1;
      this.addTerminable(do_token);
      sequence = [];
      while (true) {
        token = this.nextToken();
        if (token.type === Token.TYPE_END) {
          this.nesting -= 1;
          this.endTerminable();
          return new Program.Do(do_token, sequence, token);
        } else {
          this.tokenizer.pushBack(token);
          line = this.parseLine();
          if (line != null) {
            sequence.push(line);
          } else {
            this.error("Unexpected data while parsing after");
          }
        }
      }
    }

    parseSleep(sleep) {
      var delay, multiplier, token;
      delay = this.assertExpression();
      token = this.nextToken();
      multiplier = null;
      if (token != null) {
        if (token.type === Token.TYPE_IDENTIFIER && this.multipliers[token.value]) {
          multiplier = this.multipliers[token.value];
        } else {
          this.tokenizer.pushBack(token);
        }
      }
      return new Program.Sleep(sleep, delay, multiplier);
    }

    parseDelete(del) {
      var v;
      v = this.parseExpression();
      if ((v == null) || (!(v instanceof Program.Variable) && !(v instanceof Program.Field))) {
        return this.error("expecting variable name or property access after keyword `delete`");
      } else {
        return new Program.Delete(del, v);
      }
    }

  };

  Parser.prototype.multipliers = {
    millisecond: 1,
    milliseconds: 1,
    second: 1000,
    seconds: 1000,
    minute: 60000,
    minutes: 60000,
    hour: 60000 * 60,
    hours: 60000 * 60,
    day: 60000 * 60 * 24,
    days: 60000 * 60 * 24
  };

  return Parser;

}).call(this);


this.Processor = class Processor {
  constructor(runner) {
    this.runner = runner;
    this.locals = [];
    this.stack = [];
    this.call_stack = [];
    this.log = false;
    this.time_limit = 2e308;
    this.done = true;
  }

  load(routine1) {
    this.routine = routine1;
    return this.resetState();
  }

  resetState() {
    this.local_index = 0;
    this.stack_index = -1;
    this.op_index = 0;
    this.call_stack_index = 0;
    this.global = null;
    this.object = this.routine.object || null;
    this.locals_offset = 0;
    this.call_super = null;
    this.call_supername = "";
    return this.done = false;
  }

  resolveParentClass(obj, global) {
    if ((obj.class != null) && typeof obj.class === "string") {
      if (global[obj.class] != null) {
        obj.class = global[obj.class];
        return this.resolveParentClass(obj.class, global);
      }
    } else if (obj.class != null) {
      return this.resolveParentClass(obj.class, global);
    }
  }

  applyFunction(args) {}

  routineAsFunction(routine, context) {
    var f, proc;
    proc = new Processor(this.runner);
    f = function() {
      var a, count, i, j, k, ref, ref1;
      count = Math.min(routine.num_args, arguments.length);
      proc.load(routine);
      for (i = j = 0, ref = count - 1; j <= ref; i = j += 1) {
        proc.stack[++proc.stack_index] = arguments[i] || 0;
      }
      proc.stack[++proc.stack_index] = arguments.length;
      if (routine.uses_arguments) {
        a = [...arguments];
        for (i = k = 0, ref1 = a.length - 1; k <= ref1; i = k += 1) {
          if (a[i] == null) {
            a[i] = 0;
          }
        }
        proc.stack[++proc.stack_index] = a;
      }
      return proc.run(context);
    };
    //res = proc.stack[0]
    return f;
  }

  routineAsApplicableFunction(routine, context) {
    var f, proc;
    proc = new Processor(this.runner);
    f = function() {
      var a, count, i, j, k, ref, ref1, res;
      count = routine.num_args;
      proc.load(routine);
      proc.object = this;
      for (i = j = 0, ref = count - 1; j <= ref; i = j += 1) {
        proc.stack[++proc.stack_index] = arguments[i] || 0;
      }
      proc.stack[++proc.stack_index] = arguments.length;
      if (routine.uses_arguments) {
        a = [...arguments];
        for (i = k = 0, ref1 = a.length - 1; k <= ref1; i = k += 1) {
          if (a[i] == null) {
            a[i] = 0;
          }
        }
        proc.stack[++proc.stack_index] = a;
      }
      proc.run(context);
      return res = proc.stack[0];
    };
    return f;
  }

  argToNative(arg, context) {
    if (arg instanceof Routine) {
      return this.routineAsFunction(arg, context);
    } else {
      if (arg != null) {
        return arg;
      } else {
        return 0;
      }
    }
  }

  modulo(context, a, b) {
    var f, obj;
    if (Array.isArray(a)) {
      obj = context.global.List;
    } else if (typeof a === "string") {
      if (isFinite(a)) {
        a %= b;
        if (isFinite(a)) {
          return a;
        } else {
          return 0;
        }
      } else {
        obj = context.global.String;
      }
    } else {
      obj = a;
    }
    f = obj["%"];
    while ((f == null) && (obj.class != null)) {
      obj = obj.class;
      f = obj["%"];
    }
    if (f == null) {
      f = context.global.Object["%"];
    }
    if ((f != null) && f instanceof Routine) {
      if (f.as_function == null) {
        f.as_function = this.routineAsApplicableFunction(f, context);
      }
      f = f.as_function;
      return f.call(context.global, a, b);
    } else {
      return 0;
    }
  }

  add(context, a, b, self) {
    var f, obj;
    if (Array.isArray(a)) {
      obj = context.global.List;
    } else if (typeof a === "string") {
      obj = context.global.String;
    } else {
      obj = a;
    }
    f = obj["+"];
    while ((f == null) && (obj.class != null)) {
      obj = obj.class;
      f = obj["+"];
    }
    if (f == null) {
      f = context.global.Object["+"];
    }
    if (f != null) {
      if (f instanceof Routine) {
        if (f.as_function == null) {
          f.as_function = this.routineAsApplicableFunction(f, context);
        }
        f = f.as_function;
        return f.call(context.global, a, b, self);
      } else if (typeof f === "function") {
        return f.call(context.global, a, b, self);
      }
    } else {
      return 0;
    }
  }

  sub(context, a, b, self) {
    var f, obj;
    if (Array.isArray(a)) {
      obj = context.global.List;
    } else if (typeof a === "string") {
      if (isFinite(a)) {
        a -= b;
        if (isFinite(a)) {
          return a;
        } else {
          return 0;
        }
      } else {
        obj = context.global.String;
      }
    } else {
      obj = a;
    }
    f = obj["-"];
    while ((f == null) && (obj.class != null)) {
      obj = obj.class;
      f = obj["-"];
    }
    if (f == null) {
      f = context.global.Object["-"];
    }
    if (f != null) {
      if (f instanceof Routine) {
        if (f.as_function == null) {
          f.as_function = this.routineAsApplicableFunction(f, context);
        }
        f = f.as_function;
        return f.call(context.global, a, b, self);
      } else if (typeof f === "function") {
        return f.call(context.global, a, b, self);
      }
    } else {
      return 0;
    }
  }

  negate(context, a) {
    var f, obj;
    if (Array.isArray(a)) {
      obj = context.global.List;
    } else if (typeof a === "string") {
      if (isFinite(a)) {
        return -a;
      } else {
        obj = context.global.String;
      }
    } else {
      obj = a;
    }
    f = obj["-"];
    while ((f == null) && (obj.class != null)) {
      obj = obj.class;
      f = obj["-"];
    }
    if (f == null) {
      f = context.global.Object["-"];
    }
    if (f != null) {
      if (f instanceof Routine) {
        if (f.as_function == null) {
          f.as_function = this.routineAsApplicableFunction(f, context);
        }
        f = f.as_function;
        return f.call(context.global, 0, a);
      } else if (typeof f === "function") {
        return f.call(context.global, 0, a);
      }
    } else {
      return 0;
    }
  }

  mul(context, a, b, self) {
    var f, obj;
    if (Array.isArray(a)) {
      obj = context.global.List;
    } else if (typeof a === "string") {
      if (isFinite(a)) {
        a *= b;
        if (isFinite(a)) {
          return a;
        } else {
          return 0;
        }
      } else {
        obj = context.global.String;
      }
    } else {
      obj = a;
    }
    f = obj["*"];
    while ((f == null) && (obj.class != null)) {
      obj = obj.class;
      f = obj["*"];
    }
    if (f == null) {
      f = context.global.Object["*"];
    }
    if (f != null) {
      if (f instanceof Routine) {
        if (f.as_function == null) {
          f.as_function = this.routineAsApplicableFunction(f, context);
        }
        f = f.as_function;
        return f.call(context.global, a, b, self);
      } else if (typeof f === "function") {
        return f.call(context.global, a, b, self);
      }
    } else {
      return 0;
    }
  }

  div(context, a, b, self) {
    var f, obj;
    if (Array.isArray(a)) {
      obj = context.global.List;
    } else if (typeof a === "string") {
      if (isFinite(a)) {
        a /= b;
        if (isFinite(a)) {
          return a;
        } else {
          return 0;
        }
      } else {
        obj = context.global.String;
      }
    } else {
      obj = a;
    }
    f = obj["/"];
    while ((f == null) && (obj.class != null)) {
      obj = obj.class;
      f = obj["/"];
    }
    if (f == null) {
      f = context.global.Object["/"];
    }
    if (f != null) {
      if (f instanceof Routine) {
        if (f.as_function == null) {
          f.as_function = this.routineAsApplicableFunction(f, context);
        }
        f = f.as_function;
        return f.call(context.global, a, b, self);
      } else if (typeof f === "function") {
        return f.call(context.global, a, b, self);
      }
    } else {
      return 0;
    }
  }

  band(context, a, b, self) {
    var f, obj;
    if (Array.isArray(a)) {
      obj = context.global.List;
    } else if (typeof a === "string") {
      if (isFinite(a)) {
        a &= b;
        if (isFinite(a)) {
          return a;
        } else {
          return 0;
        }
      } else {
        obj = context.global.String;
      }
    } else {
      obj = a;
    }
    f = obj["&"];
    while ((f == null) && (obj.class != null)) {
      obj = obj.class;
      f = obj["&"];
    }
    if (f == null) {
      f = context.global.Object["&"];
    }
    if (f != null) {
      if (f instanceof Routine) {
        if (f.as_function == null) {
          f.as_function = this.routineAsApplicableFunction(f, context);
        }
        f = f.as_function;
        return f.call(context.global, a, b, self);
      } else if (typeof f === "function") {
        return f.call(context.global, a, b, self);
      }
    } else {
      return 0;
    }
  }

  bor(context, a, b, self) {
    var f, obj;
    if (Array.isArray(a)) {
      obj = context.global.List;
    } else if (typeof a === "string") {
      if (isFinite(a)) {
        a |= b;
        if (isFinite(a)) {
          return a;
        } else {
          return 0;
        }
      } else {
        obj = context.global.String;
      }
    } else {
      obj = a;
    }
    f = obj["|"];
    while ((f == null) && (obj.class != null)) {
      obj = obj.class;
      f = obj["|"];
    }
    if (f == null) {
      f = context.global.Object["|"];
    }
    if (f != null) {
      if (f instanceof Routine) {
        if (f.as_function == null) {
          f.as_function = this.routineAsApplicableFunction(f, context);
        }
        f = f.as_function;
        return f.call(context.global, a, b, self);
      } else if (typeof f === "function") {
        return f.call(context.global, a, b, self);
      }
    } else {
      return 0;
    }
  }

  run(context) {
    var a, arg1, args, argv, b, c, call_stack, call_stack_index, call_super, call_supername, con, cs, err, f, fc, field, global, i, i1, i2, id, index, ir, iter, iterator, j, k, key, l, len, length, local_index, locals, locals_offset, loop_by, loop_to, m, n, name, o, obj, object, op_count, op_index, opcodes, p, parent, q, r, rc, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, res, restore_op_index, routine, s, sleep_time, src, stack, stack_index, sup, t, token, u, v, value, w;
    routine = this.routine;
    opcodes = this.routine.opcodes;
    arg1 = this.routine.arg1;
    length = opcodes.length;
    op_index = this.op_index;
    stack = this.stack;
    stack_index = this.stack_index;
    locals = this.locals;
    local_index = this.local_index;
    global = this.global || context.global;
    object = this.object || global;
    call_stack = this.call_stack;
    call_stack_index = this.call_stack_index;
    call_super = this.call_super || global;
    call_supername = this.call_supername || "";
    locals_offset = this.locals_offset;
    op_count = 0;
    restore_op_index = -1;
    while (op_index < length) {
      switch (opcodes[op_index]) {
        case 1: // OPCODE_TYPE
          v = stack[stack_index];
          switch (typeof v) {
            case "number":
              stack[stack_index] = "number";
              break;
            case "string":
              stack[stack_index] = "string";
              break;
            case "function":
              stack[stack_index] = "function";
              break;
            case "object":
              if (Array.isArray(v)) {
                stack[stack_index] = "list";
              } else if (v instanceof Routine) {
                stack[stack_index] = "function";
              } else {
                stack[stack_index] = "object";
              }
          }
          op_index++;
          break;
        case 2: // OPCODE_TYPE_VARIABLE
          v = object[arg1[op_index]];
          if (v == null) {
            v = global[arg1[op_index]];
          }
          if (v == null) {
            stack[++stack_index] = 0;
          } else {
            switch (typeof v) {
              case "number":
                stack[++stack_index] = "number";
                break;
              case "string":
                stack[++stack_index] = "string";
                break;
              case "function":
                stack[++stack_index] = "function";
                break;
              default:
                if (Array.isArray(v)) {
                  stack[++stack_index] = "list";
                } else if (v instanceof Routine) {
                  stack[++stack_index] = "function";
                } else {
                  stack[++stack_index] = "object";
                }
            }
          }
          op_index++;
          break;
        case 3: // OPCODE_TYPE_PROPERTY
          v = stack[stack_index - 1][stack[stack_index]];
          if (v == null) {
            stack[--stack_index] = 0;
          } else {
            switch (typeof v) {
              case "number":
                stack[--stack_index] = "number";
                break;
              case "string":
                stack[--stack_index] = "string";
                break;
              case "function":
                stack[--stack_index] = "function";
                break;
              default:
                if (Array.isArray(v)) {
                  stack[--stack_index] = "list";
                } else if (v instanceof Routine) {
                  stack[--stack_index] = "function";
                } else {
                  stack[--stack_index] = "object";
                }
            }
          }
          op_index++;
          break;
        case 4: // OPCODE_LOAD_IMPORT
          stack[++stack_index] = routine.import_values[arg1[op_index++]];
          break;
        case 5: // OPCODE_LOAD_THIS
          stack[++stack_index] = object;
          op_index++;
          break;
        case 6: // OPCODE_LOAD_GLOBAL
          stack[++stack_index] = global;
          op_index++;
          break;
        case 10: // CODE_LOAD_VALUE
          stack[++stack_index] = arg1[op_index++];
          break;
        case 11: // OPCODE_LOAD_LOCAL
          stack[++stack_index] = locals[locals_offset + arg1[op_index++]];
          break;
        case 12: // OPCODE_LOAD_VARIABLE
          name = arg1[op_index];
          v = object[name];
          if ((v == null) && (object.class != null)) {
            obj = object;
            while ((v == null) && (obj.class != null)) {
              obj = obj.class;
              v = obj[name];
            }
          }
          if (v == null) {
            v = global[name];
          }
          if ((v == null) && !routine.ref[op_index].nowarning) {
            token = routine.ref[op_index].token;
            id = token.tokenizer.filename + "-" + token.line + "-" + token.column;
            if (!context.warnings.using_undefined_variable[id]) {
              context.warnings.using_undefined_variable[id] = {
                file: token.tokenizer.filename,
                line: token.line,
                column: token.column,
                expression: name
              };
            }
          }
          stack[++stack_index] = v != null ? v : 0;
          op_index++;
          break;
        case 13: // OPCODE_LOAD_LOCAL_OBJECT
          o = locals[locals_offset + arg1[op_index]];
          if (typeof o !== "object") {
            o = locals[locals_offset + arg1[op_index]] = {};
            token = routine.ref[op_index].token;
            id = token.tokenizer.filename + "-" + token.line + "-" + token.column;
            if (!context.warnings.assigning_field_to_undefined[id]) {
              context.warnings.assigning_field_to_undefined[id] = {
                file: token.tokenizer.filename,
                line: token.line,
                column: token.column,
                expression: token.value
              };
            }
          }
          stack[++stack_index] = o;
          op_index++;
          break;
        case 14: // OPCODE_LOAD_VARIABLE_OBJECT
          name = arg1[op_index];
          obj = object;
          v = obj[name];
          while ((v == null) && (obj.class != null)) {
            obj = obj.class;
            v = obj[name];
          }
          if ((v == null) && (global[name] != null)) {
            obj = global;
            v = global[name];
          }
          if ((v == null) || typeof v !== "object") {
            v = obj[name] = {};
            token = routine.ref[op_index].token;
            id = token.tokenizer.filename + "-" + token.line + "-" + token.column;
            if (!context.warnings.assigning_field_to_undefined[id]) {
              context.warnings.assigning_field_to_undefined[id] = {
                file: token.tokenizer.filename,
                line: token.line,
                column: token.column,
                expression: arg1[op_index]
              };
            }
          }
          stack[++stack_index] = v;
          op_index++;
          break;
        case 15: // OPCODE_POP
          stack_index--;
          op_index++;
          break;
        case 16: // OPCODE_LOAD_PROPERTY
          obj = stack[stack_index - 1];
          name = stack[stack_index];
          v = obj[name];
          while ((v == null) && (obj.class != null)) {
            obj = obj.class;
            v = obj[name];
          }
          if (v == null) {
            v = 0;
            if (!routine.ref[op_index].nowarning) {
              routine.ref[op_index].nowarning = true;
              if (!Array.isArray(obj)) {
                token = routine.ref[op_index].token;
                id = token.tokenizer.filename + "-" + token.line + "-" + token.column;
                context.warnings.using_undefined_variable[id] = {
                  file: token.tokenizer.filename,
                  line: token.line,
                  column: token.column,
                  expression: name
                };
              }
            }
          }
          stack[--stack_index] = v;
          op_index++;
          break;
        case 17: // OPCODE_LOAD_PROPERTY_OBJECT
          v = stack[stack_index - 1][stack[stack_index]];
          if (typeof v !== "object") {
            v = stack[stack_index - 1][stack[stack_index]] = {};
            token = routine.ref[op_index].token;
            id = token.tokenizer.filename + "-" + token.line + "-" + token.column;
            if (!context.warnings.assigning_field_to_undefined[id]) {
              context.warnings.assigning_field_to_undefined[id] = {
                file: token.tokenizer.filename,
                line: token.line,
                column: token.column,
                expression: stack[stack_index]
              };
            }
          }
          stack[--stack_index] = v;
          op_index++;
          break;
        case 18: // OPCODE_CREATE_OBJECT
          stack[++stack_index] = {};
          op_index++;
          break;
        case 19: // OPCODE_MAKE_OBJECT
          if (typeof stack[stack_index] !== "object") {
            stack[stack_index] = {};
          }
          op_index++;
          break;
        case 20: // OPCODE_CREATE_ARRAY
          stack[++stack_index] = [];
          op_index++;
          break;
        case 21: // OPCODE_STORE_LOCAL
          locals[locals_offset + arg1[op_index]] = stack[stack_index];
          op_index++;
          break;
        case 22: // OPCODE_STORE_LOCAL_POP
          locals[locals_offset + arg1[op_index]] = stack[stack_index--];
          op_index++;
          break;
        case 23: // OPCODE_STORE_VARIABLE
          object[arg1[op_index++]] = stack[stack_index];
          break;
        case 24: // OPCODE_CREATE_PROPERTY
          obj = stack[stack_index - 2];
          field = stack[stack_index - 1];
          obj[field] = stack[stack_index];
          stack_index -= 2;
          op_index++;
          break;
        case 25: // OPCODE_STORE_PROPERTY
          obj = stack[stack_index - 2];
          field = stack[stack_index - 1];
          stack[stack_index - 2] = obj[field] = stack[stack_index];
          stack_index -= 2;
          op_index++;
          break;
        case 26: // OPCODE_DELETE
          obj = stack[stack_index - 1];
          field = stack[stack_index];
          delete obj[field];
          stack[stack_index -= 1] = 0;
          op_index++;
          break;
        case 27: // OPCODE_UPDATE_CLASS
          name = arg1[op_index];
          // TODO: set classname to variable name
          if ((object[name] != null) && typeof object[name] === "object") {
            obj = object[name];
            src = stack[stack_index];
            for (key in src) {
              value = src[key];
              obj[key] = value;
            }
          } else {
            object[name] = stack[stack_index];
          }
          op_index++;
          break;
        case 28: // OPCODE_CREATE_CLASS
          res = {};
          parent = stack[stack_index];
          if (parent) {
            res.class = parent;
          } else if (arg1[op_index]) {
            res.class = arg1[op_index];
          }
          stack[stack_index] = res;
          op_index++;
          break;
        case 29: // OPCODE_NEW_CALL
          c = stack[stack_index];
          args = arg1[op_index];
          if (typeof c === "function") {
            a = [];
            for (i = j = 0, ref = args - 1; j <= ref; i = j += 1) {
              a.push(stack[stack_index - args + i]);
            }
            stack_index -= args;
            // NEW CALL is followed by a POP (to get rid of constructor return value)
            stack[stack_index - 1] = new c(...a);
            op_index++;
          } else {
            this.resolveParentClass(c, global);
            res = {
              class: c
            };
            con = c.constructor;
            while (!con && (c.class != null)) {
              c = c.class;
              con = c.constructor;
            }
            if ((con != null) && con instanceof Routine) {
              stack[stack_index - args - 1] = res;
              stack_index--;
              cs = call_stack[call_stack_index] || (call_stack[call_stack_index] = {});
              call_stack_index++;
              cs.routine = routine;
              cs.object = object;
              cs.super = call_super;
              cs.supername = call_supername;
              cs.op_index = op_index + 1;
              locals_offset += routine.locals_size;
              routine = con;
              opcodes = con.opcodes;
              arg1 = con.arg1;
              op_index = 0;
              length = opcodes.length;
              object = res;
              call_super = c;
              call_supername = "constructor";
              if (routine.uses_arguments) {
                argv = stack.slice(stack_index - args + 1, stack_index + 1);
              }
              if (args < con.num_args) {
                for (i = k = ref1 = args + 1, ref2 = con.num_args; k <= ref2; i = k += 1) {
                  stack[++stack_index] = 0;
                }
              } else if (args > con.num_args) {
                stack_index -= args - con.num_args;
              }
              stack[++stack_index] = args;
              if (routine.uses_arguments) {
                stack[++stack_index] = argv;
              }
            } else {
              stack_index -= args;
              stack[stack_index - 1] = res;
              op_index++;
            }
          }
          break;
        case 30: // OPCODE_ADD
          b = stack[stack_index--];
          a = stack[stack_index];
          if (typeof a === "number") {
            a += b;
            stack[stack_index] = isFinite(a) || typeof b === "string" ? a : 0;
          } else {
            stack[stack_index] = this.add(context, a, b, arg1[op_index]);
          }
          op_index++;
          break;
        case 31: // OPCODE_SUB
          b = stack[stack_index--];
          a = stack[stack_index];
          if (typeof a === "number") {
            a -= b;
            stack[stack_index] = isFinite(a) ? a : 0;
          } else {
            stack[stack_index] = this.sub(context, a, b, arg1[op_index]);
          }
          op_index++;
          break;
        case 32: // OPCODE_MUL
          b = stack[stack_index--];
          a = stack[stack_index];
          if (typeof a === "number") {
            a *= b;
            stack[stack_index] = isFinite(a) ? a : 0;
          } else {
            stack[stack_index] = this.mul(context, a, b);
          }
          op_index++;
          break;
        case 33: // OPCODE_DIV
          b = stack[stack_index--];
          a = stack[stack_index];
          if (typeof a === "number") {
            a /= b;
            stack[stack_index] = isFinite(a) ? a : 0;
          } else {
            stack[stack_index] = this.div(context, a, b);
          }
          op_index++;
          break;
        case 34: // OPCODE_MODULO
          b = stack[stack_index--];
          a = stack[stack_index];
          if (typeof a === "number" && typeof b === "number") {
            a %= b;
            stack[stack_index] = isFinite(a) ? a : 0;
          } else {
            stack[stack_index] = this.modulo(context, a, b);
          }
          op_index++;
          break;
        case 35: // OPCODE_BINARY_AND
          b = stack[stack_index--];
          a = stack[stack_index];
          if (typeof a === "number") {
            a &= b;
            stack[stack_index] = isFinite(a) ? a : 0;
          } else {
            stack[stack_index] = this.band(context, a, b);
          }
          op_index++;
          break;
        case 36: // OPCODE_BINARY_OR
          b = stack[stack_index--];
          a = stack[stack_index];
          if (typeof a === "number") {
            a |= b;
            stack[stack_index] = isFinite(a) ? a : 0;
          } else {
            stack[stack_index] = this.bor(context, a, b);
          }
          op_index++;
          break;
        case 37: // OPCODE_SHIFT_LEFT
          v = stack[stack_index - 1] << stack[stack_index];
          stack[--stack_index] = isFinite(v) ? v : 0;
          op_index++;
          break;
        case 38: // OPCODE_SHIFT_RIGHT
          v = stack[stack_index - 1] >> stack[stack_index];
          stack[--stack_index] = isFinite(v) ? v : 0;
          op_index++;
          break;
        case 39: // OPCODE_NEGATE
          a = stack[stack_index];
          if (typeof a === "number") {
            stack[stack_index] = -a;
          } else {
            stack[stack_index] = this.negate(context, a);
          }
          op_index++;
          break;
        case 50: // OPCODE_NOT
          stack[stack_index] = stack[stack_index] ? 0 : 1;
          op_index++;
          break;
        case 68: // OPCODE_LOAD_PROPERTY_ATOP
          obj = stack[stack_index - 1];
          name = stack[stack_index];
          v = obj[name];
          while ((v == null) && (obj.class != null)) {
            obj = obj.class;
            v = obj[name];
          }
          if (v == null) {
            v = 0;
            if (!routine.ref[op_index].nowarning) {
              routine.ref[op_index].nowarning = true;
              if (!Array.isArray(obj)) {
                token = routine.ref[op_index].token;
                id = token.tokenizer.filename + "-" + token.line + "-" + token.column;
                context.warnings.using_undefined_variable[id] = {
                  file: token.tokenizer.filename,
                  line: token.line,
                  column: token.column,
                  expression: name
                };
              }
            }
          }
          stack[++stack_index] = v;
          op_index++;
          break;
        case 40: // OPCODE_EQ
          stack[stack_index - 1] = stack[stack_index] === stack[stack_index - 1] ? 1 : 0;
          stack_index--;
          op_index++;
          break;
        case 41: // OPCODE_NEQ
          stack[stack_index - 1] = stack[stack_index] !== stack[stack_index - 1] ? 1 : 0;
          stack_index--;
          op_index++;
          break;
        case 42: // OPCODE_LT
          stack[stack_index - 1] = stack[stack_index - 1] < stack[stack_index] ? 1 : 0;
          stack_index--;
          op_index++;
          break;
        case 43: // OPCODE_GT
          stack[stack_index - 1] = stack[stack_index - 1] > stack[stack_index] ? 1 : 0;
          stack_index--;
          op_index++;
          break;
        case 44: // OPCODE_LTE
          stack[stack_index - 1] = stack[stack_index - 1] <= stack[stack_index] ? 1 : 0;
          stack_index--;
          op_index++;
          break;
        case 45: // OPCODE_GTE
          stack[stack_index - 1] = stack[stack_index - 1] >= stack[stack_index] ? 1 : 0;
          stack_index--;
          op_index++;
          break;
        case 95: // FORLOOP_INIT
          // fix loop_by if not set
          iter = arg1[op_index][0];
          loop_to = locals[locals_offset + iter + 1] = stack[stack_index - 1];
          loop_by = stack[stack_index];
          iterator = locals[locals_offset + iter];
          stack[--stack_index] = 0; // unload 2 values and load default value
          if (loop_by === 0) {
            locals[locals_offset + iter + 2] = loop_to > iterator ? 1 : -1;
            op_index++;
          } else {
            locals[locals_offset + iter + 2] = loop_by;
            if ((loop_by > 0 && iterator > loop_to) || (loop_by < 0 && iterator < loop_to)) {
              op_index = arg1[op_index][1];
            } else {
              op_index++;
            }
          }
          break;
        case 96: // FORLOOP_CONTROL
          iter = arg1[op_index][0];
          loop_by = locals[locals_offset + iter + 2];
          loop_to = locals[locals_offset + iter + 1];
          iterator = locals[locals_offset + iter];
          iterator += loop_by;
          if ((loop_by > 0 && iterator > loop_to) || (loop_by < 0 && iterator < loop_to)) {
            op_index++;
          } else {
            locals[locals_offset + iter] = iterator;
            op_index = arg1[op_index][1];
          }
          if (op_count++ > 100) {
            op_count = 0;
            if (Date.now() > this.time_limit) {
              restore_op_index = op_index;
              op_index = length; // stop the loop without adding a condition statement
            }
          }
          break;
        case 97: // FORIN_INIT
          v = stack[stack_index];
          stack[stack_index] = 0; // default result
          iterator = arg1[op_index][0];
          if (typeof v === "object") {
            if (Array.isArray(v)) {
              locals[locals_offset + iterator + 1] = v;
            } else {
              v = locals[locals_offset + iterator + 1] = Object.keys(v);
            }
          } else if (typeof v === "string") {
            v = locals[locals_offset + iterator + 1] = v.split("");
          } else {
            v = locals[locals_offset + iterator + 1] = [];
          }
          if (v.length === 0) {
            op_index = arg1[op_index][1];
          } else {
            value = v[0];
            // value could be undefined if the array is sparse
            locals[locals_offset + arg1[op_index][0]] = value != null ? value : 0;
            locals[locals_offset + iterator + 2] = 0;
            op_index++;
          }
          break;
        case 98: // FORIN_CONTROL
          iterator = arg1[op_index][0];
          index = locals[locals_offset + iterator + 2] += 1;
          v = locals[locals_offset + iterator + 1];
          if (index < v.length) {
            value = v[index];
            // value could be undefined if the array is sparse
            locals[locals_offset + iterator] = value != null ? value : 0;
            op_index = arg1[op_index][1];
          } else {
            op_index++;
          }
          if (op_count++ > 100) {
            op_count = 0;
            if (Date.now() > this.time_limit) {
              restore_op_index = op_index;
              op_index = length; // stop the loop without adding a condition statement
            }
          }
          break;
        case 80: // OPCODE_JUMP
          op_index = arg1[op_index];
          if (op_count++ > 100) {
            op_count = 0;
            if (Date.now() > this.time_limit) {
              restore_op_index = op_index;
              op_index = length; // stop the loop without adding a condition statement
            }
          }
          break;
        case 81: // OPCODE_JUMPY
          if (stack[stack_index--]) {
            op_index = arg1[op_index];
          } else {
            op_index++;
          }
          break;
        case 82: // OPCODE_JUMPN
          if (!stack[stack_index--]) {
            op_index = arg1[op_index];
          } else {
            op_index++;
          }
          break;
        case 83: // OPCODE_JUMPY_NOPOP
          if (stack[stack_index]) {
            op_index = arg1[op_index];
          } else {
            op_index++;
          }
          break;
        case 84: // OPCODE_JUMPN_NOPOP
          if (!stack[stack_index]) {
            op_index = arg1[op_index];
          } else {
            op_index++;
          }
          break;
        case 89: // OPCODE_LOAD_ROUTINE
          r = arg1[op_index++];
          rc = r.clone();
          ref3 = r.import_refs;
          for (l = 0, len = ref3.length; l < len; l++) {
            ir = ref3[l];
            if (ir === r.import_self) {
              rc.import_values.push(rc);
            } else {
              rc.import_values.push(locals[locals_offset + ir]);
            }
          }
          rc.object = object;
          stack[++stack_index] = rc;
          break;
        case 90: // OPCODE_FUNCTION_CALL
          args = arg1[op_index];
          f = stack[stack_index];
          if (f instanceof Routine) {
            stack_index--;
            cs = call_stack[call_stack_index] || (call_stack[call_stack_index] = {});
            call_stack_index++;
            cs.routine = routine;
            cs.object = object;
            cs.super = call_super;
            cs.supername = call_supername;
            cs.op_index = op_index + 1;
            locals_offset += routine.locals_size;
            routine = f;
            opcodes = f.opcodes;
            arg1 = f.arg1;
            op_index = 0;
            length = opcodes.length;
            object = routine.object != null ? routine.object : global;
            call_super = global;
            call_supername = "";
            if (routine.uses_arguments) {
              argv = stack.slice(stack_index - args + 1, stack_index + 1);
            }
            if (args < f.num_args) {
              for (i = m = ref4 = args + 1, ref5 = f.num_args; m <= ref5; i = m += 1) {
                stack[++stack_index] = 0;
              }
            } else if (args > f.num_args) {
              stack_index -= args - f.num_args;
            }
            stack[++stack_index] = args;
            if (routine.uses_arguments) {
              stack[++stack_index] = argv;
            }
          } else if (typeof f === "function") {
            switch (args) {
              case 0:
                try {
                  v = f();
                } catch (error) {
                  err = error;
                  console.error(err);
                  v = 0;
                }
                stack[stack_index] = v != null ? v : 0;
                break;
              case 1:
                try {
                  v = f(this.argToNative(stack[stack_index - 1], context));
                } catch (error) {
                  err = error;
                  console.error(err);
                  v = 0;
                }
                stack[stack_index - 1] = v != null ? v : 0;
                stack_index -= 1;
                break;
              default:
                argv = [];
                stack_index -= args;
                for (i = n = 0, ref6 = args - 1; n <= ref6; i = n += 1) {
                  argv[i] = this.argToNative(stack[stack_index + i], context);
                }
                try {
                  v = f.apply(null, argv);
                } catch (error) {
                  err = error;
                  console.error(err);
                  v = 0;
                }
                stack[stack_index] = v != null ? v : 0;
            }
            op_index++;
          } else {
            stack_index -= args;
            stack[stack_index] = f != null ? f : 0;
            token = routine.ref[op_index].token;
            id = token.tokenizer.filename + "-" + token.line + "-" + token.column;
            if (!context.warnings.invoking_non_function[id]) {
              fc = routine.ref[op_index];
              i1 = fc.expression.token.start;
              i2 = fc.token.start + fc.token.length;
              context.warnings.invoking_non_function[id] = {
                file: token.tokenizer.filename,
                line: token.line,
                column: token.column,
                expression: fc.token.tokenizer.input.substring(i1, i2)
              };
            }
            op_index++;
          }
          break;
        case 91: // OPCODE_FUNCTION_APPLY_VARIABLE
          name = stack[stack_index];
          sup = obj = object;
          f = obj[name];
          if (f == null) {
            while ((f == null) && (sup.class != null)) {
              sup = sup.class;
              f = sup[name];
            }
            if (f == null) {
              f = global.Object[name];
            }
            if (f == null) {
              f = global[name];
              sup = global;
              obj = global;
            }
          }
          args = arg1[op_index];
          if (f instanceof Routine) {
            stack_index -= 1;
            cs = call_stack[call_stack_index] || (call_stack[call_stack_index] = {});
            call_stack_index++;
            cs.routine = routine;
            cs.object = object;
            cs.super = call_super;
            cs.supername = call_supername;
            cs.op_index = op_index + 1;
            locals_offset += routine.locals_size;
            routine = f;
            opcodes = f.opcodes;
            arg1 = f.arg1;
            op_index = 0;
            length = opcodes.length;
            object = obj;
            call_super = sup;
            call_supername = name;
            if (routine.uses_arguments) {
              argv = stack.slice(stack_index - args + 1, stack_index + 1);
            }
            if (args < f.num_args) {
              for (i = p = ref7 = args + 1, ref8 = f.num_args; p <= ref8; i = p += 1) {
                stack[++stack_index] = 0;
              }
            } else if (args > f.num_args) {
              stack_index -= args - f.num_args;
            }
            stack[++stack_index] = args;
            if (routine.uses_arguments) {
              stack[++stack_index] = argv;
            }
          } else if (typeof f === "function") {
            switch (args) {
              case 0:
                try {
                  v = f.call(obj);
                } catch (error) {
                  err = error;
                  console.error(err);
                  v = 0;
                }
                stack[stack_index] = v != null ? v : 0;
                break;
              case 1:
                try {
                  v = f.call(obj, this.argToNative(stack[stack_index - 1], context));
                } catch (error) {
                  err = error;
                  console.error(err);
                  v = 0;
                }
                stack[--stack_index] = v != null ? v : 0;
                break;
              default:
                argv = [];
                stack_index -= args;
                for (i = q = 0, ref9 = args - 1; q <= ref9; i = q += 1) {
                  argv[i] = this.argToNative(stack[stack_index + i], context);
                }
                try {
                  v = f.apply(obj, argv);
                } catch (error) {
                  err = error;
                  console.error(err);
                  v = 0;
                }
                stack[stack_index] = v != null ? v : 0;
            }
            op_index++;
          } else {
            stack_index -= args;
            stack[stack_index] = f != null ? f : 0;
            token = routine.ref[op_index].token;
            id = token.tokenizer.filename + "-" + token.line + "-" + token.column;
            if (!context.warnings.invoking_non_function[id]) {
              fc = routine.ref[op_index];
              i1 = fc.expression.token.start;
              i2 = fc.token.start + fc.token.length;
              context.warnings.invoking_non_function[id] = {
                file: token.tokenizer.filename,
                line: token.line,
                column: token.column,
                expression: fc.token.tokenizer.input.substring(i1, i2)
              };
            }
            op_index++;
          }
          break;
        case 92: // OPCODE_FUNCTION_APPLY_PROPERTY
          obj = stack[stack_index - 1];
          sup = obj;
          name = stack[stack_index];
          f = obj[name];
          while ((f == null) && (sup.class != null)) {
            sup = sup.class;
            f = sup[name];
          }
          args = arg1[op_index];
          if (f == null) {
            if (obj instanceof Routine) {
              f = global.Function[name];
            } else if (typeof obj === "string") {
              f = global.String[name];
            } else if (typeof obj === "number") {
              f = global.Number[name];
            } else if (Array.isArray(obj)) {
              f = global.List[name];
            } else if (typeof obj === "object") {
              f = global.Object[name];
            }
          }
          if (f instanceof Routine) {
            stack_index -= 2;
            cs = call_stack[call_stack_index] || (call_stack[call_stack_index] = {});
            call_stack_index++;
            cs.object = object;
            cs.super = call_super;
            cs.supername = call_supername;
            cs.routine = routine;
            cs.op_index = op_index + 1;
            locals_offset += routine.locals_size;
            routine = f;
            opcodes = f.opcodes;
            arg1 = f.arg1;
            op_index = 0;
            length = opcodes.length;
            object = obj;
            call_super = sup;
            call_supername = name;
            if (routine.uses_arguments) {
              argv = stack.slice(stack_index - args + 1, stack_index + 1);
            }
            if (args < f.num_args) {
              for (i = s = ref10 = args + 1, ref11 = f.num_args; s <= ref11; i = s += 1) {
                stack[++stack_index] = 0;
              }
            } else if (args > f.num_args) {
              stack_index -= args - f.num_args;
            }
            stack[++stack_index] = args;
            if (routine.uses_arguments) {
              stack[++stack_index] = argv;
            }
          } else if (typeof f === "function") {
            switch (args) {
              case 0:
                try {
                  v = f.call(obj);
                } catch (error) {
                  err = error;
                  console.error(err);
                  v = 0;
                }
                stack[--stack_index] = v != null ? v : 0;
                break;
              case 1:
                try {
                  v = f.call(obj, this.argToNative(stack[stack_index - 2], context));
                } catch (error) {
                  err = error;
                  console.error(err);
                  v = 0;
                }
                stack[stack_index - 2] = v != null ? v : 0;
                stack_index -= 2;
                break;
              default:
                argv = [];
                stack_index -= args + 1;
                for (i = u = 0, ref12 = args - 1; u <= ref12; i = u += 1) {
                  argv[i] = this.argToNative(stack[stack_index + i], context);
                }
                try {
                  v = f.apply(obj, argv);
                } catch (error) {
                  err = error;
                  console.error(err);
                  v = 0;
                }
                stack[stack_index] = v != null ? v : 0;
            }
            op_index++;
          } else {
            stack_index -= args + 1;
            stack[stack_index] = f != null ? f : 0;
            token = routine.ref[op_index].token;
            id = token.tokenizer.filename + "-" + token.line + "-" + token.column;
            if (!context.warnings.invoking_non_function[id]) {
              fc = routine.ref[op_index];
              i1 = fc.expression.token.start;
              i2 = fc.token.start + fc.token.length;
              context.warnings.invoking_non_function[id] = {
                file: token.tokenizer.filename,
                line: token.line,
                column: token.column,
                expression: fc.token.tokenizer.input.substring(i1, i2)
              };
            }
            op_index++;
          }
          break;
        case 93: // OPCODE_SUPER_CALL
          if ((call_super != null) && (call_supername != null)) {
            sup = call_super;
            f = null;
            while ((f == null) && (sup.class != null)) {
              sup = sup.class;
              f = sup[call_supername];
            }
            if ((f != null) && f instanceof Routine) {
              args = arg1[op_index];
              cs = call_stack[call_stack_index] || (call_stack[call_stack_index] = {});
              call_stack_index++;
              cs.object = object;
              cs.super = call_super;
              cs.supername = call_supername;
              cs.routine = routine;
              cs.op_index = op_index + 1;
              locals_offset += routine.locals_size;
              routine = f;
              opcodes = f.opcodes;
              arg1 = f.arg1;
              op_index = 0;
              length = opcodes.length;
              call_super = sup;
              if (routine.uses_arguments) {
                argv = stack.slice(stack_index - args + 1, stack_index + 1);
              }
              if (args < f.num_args) {
                for (i = w = ref13 = args + 1, ref14 = f.num_args; w <= ref14; i = w += 1) {
                  stack[++stack_index] = 0;
                }
              } else if (args > f.num_args) {
                stack_index -= args - f.num_args;
              }
              stack[++stack_index] = args;
              if (routine.uses_arguments) {
                stack[++stack_index] = argv;
              }
            } else {
              args = arg1[op_index];
              stack_index -= args;
              stack[++stack_index] = 0;
              op_index++;
            }
          } else {
            args = arg1[op_index];
            stack_index -= args;
            stack[++stack_index] = 0;
            op_index++;
          }
          break;
        case 94: // OPCODE_RETURN
          local_index -= arg1[op_index];
          if (call_stack_index <= 0) {
            op_index = length;
          } else {
            cs = call_stack[--call_stack_index];
            object = cs.object;
            call_super = cs.super;
            call_supername = cs.supername;
            routine = cs.routine;
            op_index = cs.op_index;
            opcodes = routine.opcodes;
            arg1 = routine.arg1;
            locals_offset -= routine.locals_size;
            length = opcodes.length;
          }
          break;
        case 100: // OPCODE_UNARY_FUNC
          v = arg1[op_index](stack[stack_index]);
          stack[stack_index] = isFinite(v) ? v : 0;
          op_index++;
          break;
        case 101: // OPCODE_BINARY_FUNC
          v = arg1[op_index](stack[stack_index - 1], stack[stack_index]);
          stack[--stack_index] = isFinite(v) ? v : 0;
          op_index++;
          break;
        case 110: // OPCODE_AFTER
          t = this.runner.createThread(stack[stack_index - 1], stack[stack_index], false);
          stack[--stack_index] = t;
          op_index += 1;
          break;
        // add thread to the runner thread list
        case 111: // OPCODE_EVERY
          t = this.runner.createThread(stack[stack_index - 1], stack[stack_index], true);
          stack[--stack_index] = t;
          op_index += 1;
          break;
        // add thread to the runner thread list
        case 112: // OPCODE_DO
          t = this.runner.createThread(stack[stack_index], 0, false);
          stack[stack_index] = t;
          op_index += 1;
          break;
        // add thread to the runner thread list
        case 113: // OPCODE_SLEEP
          sleep_time = isFinite(stack[stack_index]) ? stack[stack_index] : 0;
          this.runner.sleep(sleep_time);
          op_index += 1;
          restore_op_index = op_index;
          op_index = length; // stop the thread
          break;
        case 200: // COMPILED
          stack_index = arg1[op_index](stack, stack_index, locals, locals_offset, object, global);
          op_index++;
          break;
        default:
          throw `Unsupported operation: ${opcodes[op_index]}`;
      }
    }
    if (restore_op_index >= 0) {
      this.op_index = restore_op_index;
      this.routine = routine;
      this.stack_index = stack_index;
      this.local_index = local_index;
      this.object = object;
      this.call_stack_index = call_stack_index;
      this.call_super = call_super;
      this.call_supername = call_supername;
      this.locals_offset = locals_offset;
      this.done = false;
    } else {
      this.op_index = 0;
      this.done = true;
      if (this.routine.callback != null) {
        this.routine.callback(stack[stack_index]);
        this.routine.callback = null;
      }
    }
    // console.info """stack_index: #{stack_index}"""
    // console.info stack
    if (this.log) {
      console.info("total operations: " + op_count);
      console.info(`stack_index: ${stack_index}`);
      console.info(`result: ${stack[stack_index]}`);
    }
    return stack[stack_index];
  }

};


this.Program = class Program {
  constructor() {
    this.statements = [];
  }

  add(statement) {
    return this.statements.push(statement);
  }

  isAssignment() {
    return this.statements.length > 0 && this.statements[this.statements.length - 1] instanceof Program.Assignment;
  }

};

this.Program.Expression = class Expression {
  constructor() {}

};

this.Program.Assignment = class Assignment {
  constructor(token1, field1, expression1, local) {
    this.token = token1;
    this.field = field1;
    this.expression = expression1;
    this.local = local;
  }

};

this.Program.SelfAssignment = class SelfAssignment {
  constructor(token1, field1, operation, expression1) {
    this.token = token1;
    this.field = field1;
    this.operation = operation;
    this.expression = expression1;
  }

};

this.Program.Value = (function() {
  class Value {
    constructor(token1, type, value1) {
      this.token = token1;
      this.type = type;
      this.value = value1;
    }

  };

  Value.TYPE_NUMBER = 1;

  Value.TYPE_STRING = 2;

  Value.TYPE_ARRAY = 3;

  Value.TYPE_OBJECT = 4;

  Value.TYPE_FUNCTION = 5;

  Value.TYPE_CLASS = 6;

  return Value;

}).call(this);

this.Program.CreateFieldAccess = function(token, expression, field) {
  if (expression instanceof Program.Field) {
    expression.appendField(field);
    return expression;
  } else {
    return new Program.Field(token, expression, [field]);
  }
};

this.Program.Variable = class Variable {
  constructor(token1, identifier) {
    this.token = token1;
    this.identifier = identifier;
  }

};

this.Program.Field = class Field {
  constructor(token1, expression1, chain) {
    this.token = token1;
    this.expression = expression1;
    this.chain = chain;
    this.token = this.expression.token;
  }

  appendField(field) {
    return this.chain.push(field);
  }

};

this.Program.BuildOperations = function(ops, terms) {
  var i, o, o1, o2, prec, t1, t2;
  while (ops.length > 1) {
    i = 0;
    prec = 0;
    while (i < ops.length - 1) {
      o1 = ops[i];
      o2 = ops[i + 1];
      if (Program.Precedence[o2.operation] <= Program.Precedence[o1.operation]) {
        break;
      }
      i++;
    }
    t1 = terms[i];
    t2 = terms[i + 1];
    o = new Program.Operation(ops[i].token, ops[i].operation, t1, t2);
    terms.splice(i, 2, o);
    ops.splice(i, 1);
  }
  return new Program.Operation(ops[0].token, ops[0].operation, terms[0], terms[1]);
};

this.Program.Operation = class Operation {
  constructor(token1, operation, term1, term2) {
    this.token = token1;
    this.operation = operation;
    this.term1 = term1;
    this.term2 = term2;
  }

};

this.Program.Negate = class Negate {
  constructor(token1, expression1) {
    this.token = token1;
    this.expression = expression1;
  }

};

this.Program.Not = class Not {
  constructor(token1, expression1) {
    this.token = token1;
    this.expression = expression1;
  }

};

this.Program.Braced = class Braced {
  constructor(token1, expression1) {
    this.token = token1;
    this.expression = expression1;
  }

};

this.Program.Return = class Return {
  constructor(token1, expression1) {
    this.token = token1;
    this.expression = expression1;
  }

};

this.Program.Condition = class Condition {
  constructor(token1, chain) {
    this.token = token1;
    this.chain = chain;
  }

};

this.Program.For = class For {
  constructor(token1, iterator, range_from, range_to, range_by, sequence) {
    this.token = token1;
    this.iterator = iterator;
    this.range_from = range_from;
    this.range_to = range_to;
    this.range_by = range_by;
    this.sequence = sequence;
  }

};

this.Program.ForIn = class ForIn {
  constructor(token1, iterator, list, sequence) {
    this.token = token1;
    this.iterator = iterator;
    this.list = list;
    this.sequence = sequence;
  }

};

this.Program.toString = function(value, nesting = 0) {
  var i, j, k, key, len, pref, ref, s, v;
  if (value instanceof Routine) {
    if (nesting === 0) {
      return value.source || "[function]";
    } else {
      return "[function]";
    }
  } else if (typeof value === "function") {
    return "[native function]";
  } else if (typeof value === "string") {
    return `"${value}"`;
  } else if (Array.isArray(value)) {
    if (nesting >= 1) {
      return "[list]";
    }
    s = "[";
    for (i = j = 0, len = value.length; j < len; i = ++j) {
      v = value[i];
      s += Program.toString(v, nesting + 1) + (i < value.length - 1 ? "," : "");
    }
    return s + "]";
  } else if (typeof value === "object") {
    if (nesting >= 1) {
      return "[object]";
    }
    s = "object\n";
    pref = "";
    for (i = k = 1, ref = nesting; k <= ref; i = k += 1) {
      pref += "  ";
    }
    for (key in value) {
      v = value[key];
      s += pref + `  ${key} = ${Program.toString(v, nesting + 1)}\n`;
    }
    return s + pref + "end";
  }
  return value || 0;
};

this.Program.While = class While {
  constructor(token1, condition, sequence) {
    this.token = token1;
    this.condition = condition;
    this.sequence = sequence;
  }

};

this.Program.Break = class Break {
  constructor(token1) {
    this.token = token1;
    this.nopop = true;
  }

};

this.Program.Continue = class Continue {
  constructor(token1) {
    this.token = token1;
    this.nopop = true;
  }

};

this.Program.Function = class Function {
  constructor(token1, args, sequence, end) {
    this.token = token1;
    this.args = args;
    this.sequence = sequence;
    this.source = "function" + this.token.tokenizer.input.substring(this.token.index, end.index + 2);
  }

};

this.Program.FunctionCall = class FunctionCall {
  constructor(token1, expression1, args) {
    this.token = token1;
    this.expression = expression1;
    this.args = args;
  }

};

this.Program.CreateObject = class CreateObject {
  constructor(token1, fields) {
    this.token = token1;
    this.fields = fields;
  }

};

this.Program.CreateClass = class CreateClass {
  constructor(token1, ext, fields) {
    this.token = token1;
    this.ext = ext;
    this.fields = fields;
  }

};

this.Program.NewCall = class NewCall {
  constructor(token1, expression1) {
    this.token = token1;
    this.expression = expression1;
    if (!(this.expression instanceof Program.FunctionCall)) {
      this.expression = new Program.FunctionCall(this.token, this.expression, []);
    }
  }

};

this.Program.After = class After {
  constructor(token1, delay, sequence, end, multiplier) {
    this.token = token1;
    this.delay = delay;
    this.sequence = sequence;
    this.multiplier = multiplier;
    this.source = "after " + this.token.tokenizer.input.substring(this.token.index, end.index + 2);
  }

};

this.Program.Every = class Every {
  constructor(token1, delay, sequence, end, multiplier) {
    this.token = token1;
    this.delay = delay;
    this.sequence = sequence;
    this.multiplier = multiplier;
    this.source = "every " + this.token.tokenizer.input.substring(this.token.index, end.index + 2);
  }

};

this.Program.Do = class Do {
  constructor(token1, sequence, end) {
    this.token = token1;
    this.sequence = sequence;
    this.source = "do " + this.token.tokenizer.input.substring(this.token.index, end.index + 2);
  }

};

this.Program.Sleep = class Sleep {
  constructor(token1, delay, multiplier) {
    this.token = token1;
    this.delay = delay;
    this.multiplier = multiplier;
  }

};

this.Program.Delete = class Delete {
  constructor(token1, field1) {
    this.token = token1;
    this.field = field1;
  }

};

this.Program.Precedence = {
  "^": 21,
  "/": 20,
  "*": 19,
  "%": 18,
  "+": 17,
  "-": 17,
  "<": 16,
  "<=": 15,
  ">": 14,
  ">=": 13,
  "==": 12,
  "!=": 11,
  "<<": 10,
  ">>": 9,
  "&": 8,
  "|": 7,
  "and": 6,
  "or": 5
};


this.Routine = class Routine {
  constructor(num_args) {
    this.num_args = num_args;
    this.ops = [];
    this.opcodes = [];
    this.arg1 = [];
    this.ref = [];
    this.label_count = 0;
    this.labels = {};
    this.transpile = false;
    this.import_refs = [];
    this.import_values = [];
    this.import_self = -1;
  }

  clone() {
    var r;
    r = new Routine(this.num_args);
    r.opcodes = this.opcodes;
    r.arg1 = this.arg1;
    r.ref = this.ref;
    r.locals_size = this.locals_size;
    r.uses_arguments = this.uses_arguments;
    return r;
  }

  createLabel(str = "label") {
    var name;
    return name = ":" + str + "_" + this.label_count++;
  }

  setLabel(name) {
    return this.labels[name] = this.opcodes.length;
  }

  optimize() {
    if (this.transpile) {
      new Transpiler().transpile(this);
    }
  }

  removeable(index) {
    var label, ref1, value;
    ref1 = this.labels;
    for (label in ref1) {
      value = ref1[label];
      if (value === index) {
        return false;
      }
    }
    return true;
  }

  remove(index) {
    var label, ref1, value;
    ref1 = this.labels;
    for (label in ref1) {
      value = ref1[label];
      if (value === index) {
        return false;
      } else if (value > index) {
        this.labels[label] -= 1;
      }
    }
    this.opcodes.splice(index, 1);
    this.arg1.splice(index, 1);
    this.ref.splice(index, 1);
    return true;
  }

  resolveLabels() {
    var i, j, ref1, ref2, ref3, results;
    results = [];
    for (i = j = 0, ref1 = this.opcodes.length - 1; (0 <= ref1 ? j <= ref1 : j >= ref1); i = 0 <= ref1 ? ++j : --j) {
      if ((ref2 = this.opcodes[i]) === OPCODES.JUMP || ref2 === OPCODES.JUMPY || ref2 === OPCODES.JUMPN || ref2 === OPCODES.JUMPY_NOPOP || ref2 === OPCODES.JUMPN_NOPOP) {
        if (this.labels[this.arg1[i]]) {
          results.push(this.arg1[i] = this.labels[this.arg1[i]]);
        } else {
          results.push(void 0);
        }
      } else if ((ref3 = this.opcodes[i]) === OPCODES.FORLOOP_CONTROL || ref3 === OPCODES.FORLOOP_INIT || ref3 === OPCODES.FORIN_CONTROL || ref3 === OPCODES.FORIN_INIT) {
        if (this.labels[this.arg1[i][1]]) {
          results.push(this.arg1[i][1] = this.labels[this.arg1[i][1]]);
        } else {
          results.push(void 0);
        }
      } else {
        results.push(void 0);
      }
    }
    return results;
  }

  OP(code, ref, v1 = 0) {
    this.opcodes.push(code);
    this.arg1.push(v1);
    return this.ref.push(ref);
  }

  OP_INSERT(code, ref, v1 = 0, index) {
    var label, ref1, value;
    this.opcodes.splice(index, 0, code);
    this.arg1.splice(index, 0, v1);
    this.ref.splice(index, 0, ref);
    ref1 = this.labels;
    for (label in ref1) {
      value = ref1[label];
      if (value >= index) {
        this.labels[label] += 1;
      }
    }
  }

  TYPE(ref) {
    return this.OP(OPCODES.TYPE, ref);
  }

  VARIABLE_TYPE(variable, ref) {
    return this.OP(OPCODES.VARIABLE_TYPE, ref, variable);
  }

  PROPERTY_TYPE(ref) {
    return this.OP(OPCODES.PROPERTY_TYPE, ref);
  }

  LOAD_THIS(ref) {
    return this.OP(OPCODES.LOAD_THIS, ref);
  }

  LOAD_GLOBAL(ref) {
    return this.OP(OPCODES.LOAD_GLOBAL, ref);
  }

  LOAD_VALUE(value, ref) {
    return this.OP(OPCODES.LOAD_VALUE, ref, value);
  }

  LOAD_LOCAL(index, ref) {
    return this.OP(OPCODES.LOAD_LOCAL, ref, index);
  }

  LOAD_VARIABLE(variable, ref) {
    return this.OP(OPCODES.LOAD_VARIABLE, ref, variable);
  }

  LOAD_LOCAL_OBJECT(index, ref) {
    return this.OP(OPCODES.LOAD_LOCAL_OBJECT, ref, index);
  }

  LOAD_VARIABLE_OBJECT(variable, ref) {
    return this.OP(OPCODES.LOAD_VARIABLE_OBJECT, ref, variable);
  }

  POP(ref) {
    return this.OP(OPCODES.POP, ref);
  }

  LOAD_PROPERTY(ref) {
    return this.OP(OPCODES.LOAD_PROPERTY, ref);
  }

  LOAD_PROPERTY_OBJECT(ref) {
    return this.OP(OPCODES.LOAD_PROPERTY_OBJECT, ref);
  }

  CREATE_OBJECT(ref) {
    return this.OP(OPCODES.CREATE_OBJECT, ref);
  }

  MAKE_OBJECT(ref) {
    return this.OP(OPCODES.MAKE_OBJECT, ref);
  }

  CREATE_ARRAY(ref) {
    return this.OP(OPCODES.CREATE_ARRAY, ref);
  }

  CREATE_CLASS(parent_var, ref) {
    return this.OP(OPCODES.CREATE_CLASS, ref, parent_var);
  }

  UPDATE_CLASS(variable, ref) {
    return this.OP(OPCODES.UPDATE_CLASS, ref, variable);
  }

  NEW_CALL(args, ref) {
    return this.OP(OPCODES.NEW_CALL, ref, args);
  }

  ADD(ref, self = 0) {
    return this.OP(OPCODES.ADD, ref, self);
  }

  SUB(ref, self = 0) {
    return this.OP(OPCODES.SUB, ref, self);
  }

  MUL(ref) {
    return this.OP(OPCODES.MUL, ref);
  }

  DIV(ref) {
    return this.OP(OPCODES.DIV, ref);
  }

  MODULO(ref) {
    return this.OP(OPCODES.MODULO, ref);
  }

  BINARY_AND(ref) {
    return this.OP(OPCODES.BINARY_AND, ref);
  }

  BINARY_OR(ref) {
    return this.OP(OPCODES.BINARY_OR, ref);
  }

  SHIFT_LEFT(ref) {
    return this.OP(OPCODES.SHIFT_LEFT, ref);
  }

  SHIFT_RIGHT(ref) {
    return this.OP(OPCODES.SHIFT_RIGHT, ref);
  }

  NEGATE(ref) {
    return this.OP(OPCODES.NEGATE, ref);
  }

  LOAD_PROPERTY_ATOP(ref) {
    return this.OP(OPCODES.LOAD_PROPERTY_ATOP, ref);
  }

  EQ(ref) {
    return this.OP(OPCODES.EQ, ref);
  }

  NEQ(ref) {
    return this.OP(OPCODES.NEQ, ref);
  }

  LT(ref) {
    return this.OP(OPCODES.LT, ref);
  }

  GT(ref) {
    return this.OP(OPCODES.GT, ref);
  }

  LTE(ref) {
    return this.OP(OPCODES.LTE, ref);
  }

  GTE(ref) {
    return this.OP(OPCODES.GTE, ref);
  }

  NOT(ref) {
    return this.OP(OPCODES.NOT, ref);
  }

  FORLOOP_INIT(iterator, ref) {
    return this.OP(OPCODES.FORLOOP_INIT, ref, iterator);
  }

  FORLOOP_CONTROL(args, ref) {
    return this.OP(OPCODES.FORLOOP_CONTROL, ref, args);
  }

  FORIN_INIT(args, ref) {
    return this.OP(OPCODES.FORIN_INIT, ref, args);
  }

  FORIN_CONTROL(args, ref) {
    return this.OP(OPCODES.FORIN_CONTROL, ref, args);
  }

  JUMP(index, ref) {
    return this.OP(OPCODES.JUMP, ref, index);
  }

  JUMPY(index, ref) {
    return this.OP(OPCODES.JUMPY, ref, index);
  }

  JUMPN(index, ref) {
    return this.OP(OPCODES.JUMPN, ref, index);
  }

  JUMPY_NOPOP(index, ref) {
    return this.OP(OPCODES.JUMPY_NOPOP, ref, index);
  }

  JUMPN_NOPOP(index, ref) {
    return this.OP(OPCODES.JUMPN_NOPOP, ref, index);
  }

  STORE_LOCAL(index, ref) {
    return this.OP(OPCODES.STORE_LOCAL, ref, index);
  }

  STORE_VARIABLE(field, ref) {
    return this.OP(OPCODES.STORE_VARIABLE, ref, field);
  }

  CREATE_PROPERTY(ref) {
    return this.OP(OPCODES.CREATE_PROPERTY, ref);
  }

  STORE_PROPERTY(ref) {
    return this.OP(OPCODES.STORE_PROPERTY, ref);
  }

  LOAD_ROUTINE(value, ref) {
    return this.OP(OPCODES.LOAD_ROUTINE, ref, value);
  }

  FUNCTION_CALL(args, ref) {
    return this.OP(OPCODES.FUNCTION_CALL, ref, args);
  }

  FUNCTION_APPLY_VARIABLE(args, ref) {
    return this.OP(OPCODES.FUNCTION_APPLY_VARIABLE, ref, args);
  }

  FUNCTION_APPLY_PROPERTY(args, ref) {
    return this.OP(OPCODES.FUNCTION_APPLY_PROPERTY, ref, args);
  }

  SUPER_CALL(args, ref) {
    return this.OP(OPCODES.SUPER_CALL, ref, args);
  }

  RETURN(ref) {
    return this.OP(OPCODES.RETURN, ref);
  }

  AFTER(ref) {
    return this.OP(OPCODES.AFTER, ref);
  }

  EVERY(ref) {
    return this.OP(OPCODES.EVERY, ref);
  }

  DO(ref) {
    return this.OP(OPCODES.DO, ref);
  }

  SLEEP(ref) {
    return this.OP(OPCODES.SLEEP, ref);
  }

  DELETE(ref) {
    return this.OP(OPCODES.DELETE, ref);
  }

  UNARY_OP(f, ref) {
    return this.OP(OPCODES.UNARY_OP, ref, f);
  }

  BINARY_OP(f, ref) {
    return this.OP(OPCODES.BINARY_OP, ref, f);
  }

  toString() {
    var i, j, len, op, ref1, s;
    s = "";
    ref1 = this.opcodes;
    for (i = j = 0, len = ref1.length; j < len; i = ++j) {
      op = ref1[i];
      s += OPCODES[op];
      if (this.arg1[i] != null) {
        //if typeof @arg1[i] != "function"
        s += ` ${this.arg1[i]}`;
      }
      s += "\n";
    }
    return s;
  }

  exportArg(arg) {
    if (arg == null) {
      return 0;
    } else if (arg instanceof Routine) {
      return arg.export();
    } else if (typeof arg === "function") {
      return arg.name;
    } else {
      return arg;
    }
  }

  export() {
    var args, i, j, ref1, res;
    args = [];
    for (i = j = 0, ref1 = this.arg1.length - 1; j <= ref1; i = j += 1) {
      args[i] = this.exportArg(this.arg1[i]);
    }
    res = {
      num_args: this.num_args,
      ops: this.opcodes,
      args: args,
      import_refs: this.import_refs,
      import_values: this.import_values,
      import_self: this.import_self,
      locals_size: this.locals_size
    };
    return res;
  }

  import(src) {
    var i, j, ref, ref1, token;
    this.num_args = src.num_args;
    this.opcodes = src.ops;
    this.arg1 = src.args;
    this.import_refs = src.import_refs;
    this.import_values = src.import_values;
    this.import_self = src.import_self;
    this.locals_size = src.locals_size;
    token = {
      line: 0,
      column: 0,
      start: 0,
      length: 0,
      index: 0,
      tokenizer: {
        filename: "filename",
        input: ""
      }
    };
    ref = {
      expression: {
        token: token
      },
      token: token
    };
    for (i = j = 0, ref1 = this.opcodes.length - 1; j <= ref1; i = j += 1) {
      if (this.opcodes[i] === 100) {
        this.arg1[i] = Compiler.predefined_unary_functions[this.arg1[i]];
      } else if (this.opcodes[i] === 101) {
        this.arg1[i] = Compiler.predefined_binary_functions[this.arg1[i]];
      } else if (typeof this.arg1[i] === "object" && !Array.isArray(this.arg1[i])) {
        this.arg1[i] = new Routine(0).import(this.arg1[i]);
      }
      this.ref[i] = ref;
    }
    return this;
  }

};

this.OPCODES_CLASS = class OPCODES_CLASS {
  constructor() {
    this.table = {};
    this.set("TYPE", 1);
    this.set("VARIABLE_TYPE", 2);
    this.set("PROPERTY_TYPE", 3);
    this.set("LOAD_IMPORT", 4);
    this.set("LOAD_THIS", 5);
    this.set("LOAD_GLOBAL", 6);
    this.set("LOAD_VALUE", 10);
    this.set("LOAD_LOCAL", 11);
    this.set("LOAD_VARIABLE", 12);
    this.set("LOAD_LOCAL_OBJECT", 13);
    this.set("LOAD_VARIABLE_OBJECT", 14);
    this.set("POP", 15);
    this.set("LOAD_PROPERTY", 16);
    this.set("LOAD_PROPERTY_OBJECT", 17);
    this.set("CREATE_OBJECT", 18);
    this.set("MAKE_OBJECT", 19);
    this.set("CREATE_ARRAY", 20);
    this.set("STORE_LOCAL", 21);
    this.set("STORE_VARIABLE", 23);
    this.set("CREATE_PROPERTY", 24);
    this.set("STORE_PROPERTY", 25);
    this.set("DELETE", 26);
    this.set("UPDATE_CLASS", 27);
    this.set("CREATE_CLASS", 28);
    this.set("NEW_CALL", 29);
    this.set("ADD", 30);
    this.set("SUB", 31);
    this.set("MUL", 32);
    this.set("DIV", 33);
    this.set("MODULO", 34);
    this.set("BINARY_AND", 35);
    this.set("BINARY_OR", 36);
    this.set("SHIFT_LEFT", 37);
    this.set("SHIFT_RIGHT", 38);
    this.set("NEGATE", 39);
    this.set("EQ", 40);
    this.set("NEQ", 41);
    this.set("LT", 42);
    this.set("GT", 43);
    this.set("LTE", 44);
    this.set("GTE", 45);
    this.set("NOT", 50);
    this.set("LOAD_PROPERTY_ATOP", 68);
    this.set("JUMP", 80);
    this.set("JUMPY", 81);
    this.set("JUMPN", 82);
    this.set("JUMPY_NOPOP", 83);
    this.set("JUMPN_NOPOP", 84);
    this.set("LOAD_ROUTINE", 89);
    this.set("FUNCTION_CALL", 90);
    this.set("FUNCTION_APPLY_VARIABLE", 91);
    this.set("FUNCTION_APPLY_PROPERTY", 92);
    this.set("SUPER_CALL", 93);
    this.set("RETURN", 94);
    this.set("FORLOOP_INIT", 95);
    this.set("FORLOOP_CONTROL", 96);
    this.set("FORIN_INIT", 97);
    this.set("FORIN_CONTROL", 98);
    this.set("UNARY_OP", 100);
    this.set("BINARY_OP", 101);
    this.set("COMPILED", 200);
    this.set("AFTER", 110);
    this.set("EVERY", 111);
    this.set("DO", 112);
    this.set("SLEEP", 113);
  }

  set(op, code) {
    this[op] = code;
    return this[code] = op;
  }

};

this.OPCODES = new this.OPCODES_CLASS;


this.Runner = class Runner {
  constructor(microvm) {
    this.microvm = microvm;
  }

  init() {
    this.initialized = true;
    this.system = this.microvm.context.global.system;
    this.system.preemptive = 1;
    this.system.threads = [];
    this.main_thread = new Thread(this);
    this.threads = [this.main_thread];
    this.current_thread = this.main_thread;
    this.thread_index = 0;
    this.microvm.context.global.print = this.microvm.context.meta.print;
    this.microvm.context.global.random = new Random(0);
    this.microvm.context.global.Function = {
      bind: function(obj) {
        var rc;
        if (this instanceof Routine) {
          rc = this.clone();
          rc.object = obj;
          return rc;
        } else {
          return this;
        }
      }
    };
    this.microvm.context.global.List = {
      sortList: (f) => {
        var funk;
        if ((f != null) && f instanceof Program.Function) {
          funk = function(a, b) {
            return f.call(this.microvm.context.global, [a, b], true);
          };
        } else if ((f != null) && typeof f === "function") {
          funk = f;
        }
        return this.sort(funk);
      },
      "+": function(a, b, self) {
        if (!self) { // not +=, clone array a
          a = [...a];
        }
        if (Array.isArray(b)) {
          return a.concat(b);
        } else {
          a.push(b);
          return a;
        }
      },
      "-": function(a, b, self) {
        var index;
        if (!self) { // not -=, clone array a
          a = [...a];
        }
        index = a.indexOf(b);
        if (index >= 0) {
          a.splice(index, 1);
        }
        return a;
      }
    };
    this.microvm.context.global.Object = {};
    this.microvm.context.global.String = {
      fromCharCode: function(...args) { return String.fromCharCode(...args) },
      "+": function(a, b) {
        return a + b;
      }
    };
    this.microvm.context.global.Number = {
      parse: function(s) {
        var res;
        res = Number.parseFloat(s);
        if (isFinite(res)) {
          return res;
        } else {
          return 0;
        }
      },
      toString: function() {
        return this.toString();
      }
    };
    this.fps = 60;
    this.fps_max = 60;
    this.cpu_load = 0;
    this.microvm.context.meta.print("microScript 2.0");
    return this.triggers_controls_update = true;
  }

  run(src, filename, callback) {
    var compiler, err, id, j, len, parser, program, ref, result, w;
    if (!this.initialized) {
      this.init();
    }
    parser = new Parser(src, filename);
    parser.parse();
    if (parser.error_info != null) {
      err = parser.error_info;
      err.type = "compile";
      throw err;
    }
    if (parser.warnings.length > 0) {
      ref = parser.warnings;
      for (j = 0, len = ref.length; j < len; j++) {
        w = ref[j];
        id = filename + "-" + w.line + "-" + w.column;
        switch (w.type) {
          case "assigning_api_variable":
            if (this.microvm.context.warnings.assigning_api_variable[id] == null) {
              this.microvm.context.warnings.assigning_api_variable[id] = {
                file: filename,
                line: w.line,
                column: w.column,
                expression: w.identifier
              };
            }
            break;
          case "assignment_as_condition":
            if (this.microvm.context.warnings.assignment_as_condition[id] == null) {
              this.microvm.context.warnings.assignment_as_condition[id] = {
                file: filename,
                line: w.line,
                column: w.column
              };
            }
        }
      }
    }
    program = parser.program;
    compiler = new Compiler(program);
    result = null;
    compiler.routine.callback = function(res) {
      if (callback != null) {
        return callback(Program.toString(res));
      } else {
        return result = res;
      }
    };
    this.main_thread.addCall(compiler.routine);
    this.tick();
    return result;
  }

  call(name, args) {
    var f, routine;
    if (name === "draw" || name === "update" || name === "serverUpdate") {
      if (this.microvm.context.global[name] != null) {
        this.main_thread.addCall(`${name}()`);
      }
      return;
    }
    if (this.microvm.context.global[name] != null) {
      if ((args == null) || !args.length) {
        return this.main_thread.addCall(`${name}()`);
      } else {
        routine = this.microvm.context.global[name];
        if (routine instanceof Routine) {
          f = this.main_thread.processor.routineAsFunction(routine, this.microvm.context);
          return f(...args);
        } else if (typeof routine === "function") {
          return routine(...args);
        }
      }
    } else {
      return 0;
    }
  }

  toString(obj) {
    return Program.toString(obj);
  }

  process(thread, time_limit) {
    var processor;
    processor = thread.processor;
    processor.time_limit = time_limit;
    this.current_thread = thread;
    return processor.run(this.microvm.context);
  }

  tick() {
    var dt, frame_time, i, index, j, k, len, load, margin, processing, processor, ref, ref1, t, time, time_limit, time_out;
    if (this.system.fps != null) {
      this.fps = this.fps * .9 + this.system.fps * .1;
    }
    this.fps_max = Math.max(this.fps, this.fps_max);
    frame_time = Math.min(16, Math.floor(1000 / this.fps_max));
    if (this.fps < 59) {
      margin = 10;
    } else {
      margin = Math.floor(1000 / this.fps * .8);
    }
    time = Date.now();
    time_limit = time + 100; // allow more time to prevent interrupting main_thread in the middle of a draw()
    time_out = this.system.preemptive ? time_limit : 2e308;
    processor = this.main_thread.processor;
    if (!processor.done) {
      if (this.main_thread.sleep_until != null) {
        if (Date.now() >= this.main_thread.sleep_until) {
          delete this.main_thread.sleep_until;
          this.process(this.main_thread, time_out);
        }
      } else {
        this.process(this.main_thread, time_out);
      }
    }
    while (processor.done && Date.now() < time_out && this.main_thread.loadNext()) {
      this.process(this.main_thread, time_out);
    }
    time_limit = time + margin; // secondary threads get remaining time
    time_out = this.system.preemptive ? time_limit : 2e308;
    processing = true;
    while (processing) {
      processing = false;
      ref = this.threads;
      for (j = 0, len = ref.length; j < len; j++) {
        t = ref[j];
        if (t !== this.main_thread) {
          if (t.paused || t.terminated) {
            continue;
          }
          processor = t.processor;
          if (!processor.done) {
            if (t.sleep_until != null) {
              if (Date.now() >= t.sleep_until) {
                delete t.sleep_until;
                this.process(t, time_out);
                processing = true;
              }
            } else {
              this.process(t, time_out);
              processing = true;
            }
          } else if (t.start_time != null) {
            if (t.repeat) {
              while (time >= t.start_time && !(t.paused || t.terminated)) {
                if (time >= t.start_time + 150) {
                  t.start_time = time + t.delay;
                } else {
                  t.start_time += t.delay;
                }
                processor.load(t.routine);
                this.process(t, time_out);
                processing = true;
              }
            } else {
              if (time >= t.start_time) {
                delete t.start_time;
                processor.load(t.routine);
                this.process(t, time_out);
                processing = true;
              }
            }
          } else {
            t.terminated = true;
          }
        }
      }
      if (Date.now() > time_limit) {
        break;
      }
    }
    for (i = k = ref1 = this.threads.length - 1; k >= 1; i = k += -1) {
      t = this.threads[i];
      if (t.terminated) {
        this.threads.splice(i, 1);
        index = this.system.threads.indexOf(t.interface);
        if (index >= 0) {
          this.system.threads.splice(index, 1);
        }
      }
    }
    t = Date.now() - time;
    dt = time_limit - time;
    load = t / dt * 100;
    this.cpu_load = this.cpu_load * .9 + load * .1;
    this.system.cpu_load = Math.min(100, Math.round(this.cpu_load));
  }

  createThread(routine, delay, repeat) {
    var i, j, ref, t;
    t = new Thread(this);
    t.routine = routine;
    this.threads.push(t);
    t.start_time = Date.now() + delay - 1000 / this.fps;
    if (repeat) {
      t.repeat = repeat;
      t.delay = delay;
    }
    this.system.threads.push(t.interface);
    for (i = j = 0, ref = routine.import_values.length - 1; j <= ref; i = j += 1) {
      if (routine.import_values[i] === routine) {
        routine.import_values[i] = t.interface;
      }
    }
    return t.interface;
  }

  sleep(value) {
    if (this.current_thread != null) {
      return this.current_thread.sleep_until = Date.now() + Math.max(0, value);
    }
  }

};

this.Thread = class Thread {
  constructor(runner) {
    this.runner = runner;
    this.loop = false;
    this.processor = new Processor(this.runner);
    this.paused = false;
    this.terminated = false;
    this.next_calls = [];
    this.interface = {
      pause: () => {
        return this.pause();
      },
      resume: () => {
        return this.resume();
      },
      stop: () => {
        return this.stop();
      },
      status: "running"
    };
  }

  addCall(call) {
    if (this.next_calls.indexOf(call) < 0) {
      return this.next_calls.push(call);
    }
  }

  loadNext() {
    var compiler, f, parser, program;
    if (this.next_calls.length > 0) {
      f = this.next_calls.splice(0, 1)[0];
      if (f instanceof Routine) {
        this.processor.load(f);
      } else {
        parser = new Parser(f, "");
        parser.parse();
        program = parser.program;
        compiler = new Compiler(program);
        this.processor.load(compiler.routine);
        if ((f === "update()" || f === "serverUpdate()") && (this.runner.updateControls != null)) {
          this.runner.updateControls();
        }
      }
      return true;
    } else {
      return false;
    }
  }

  pause() {
    if (this.interface.status === "running") {
      this.interface.status = "paused";
      this.paused = true;
      return 1;
    } else {
      return 0;
    }
  }

  resume() {
    if (this.interface.status === "paused") {
      this.interface.status = "running";
      this.paused = false;
      return 1;
    } else {
      return 0;
    }
  }

  stop() {
    this.interface.status = "stopped";
    this.terminated = true;
    return 1;
  }

};


this.Token = class Token {
  constructor(tokenizer, type, value, string_value) {
    this.tokenizer = tokenizer;
    this.type = type;
    this.value = value;
    this.string_value = string_value;
    this.line = this.tokenizer.line;
    this.column = this.tokenizer.column;
    this.start = this.tokenizer.token_start;
    this.length = this.tokenizer.index - this.start;
    this.index = this.tokenizer.index;
    if (this.type === Token.TYPE_IDENTIFIER && Token.predefined.hasOwnProperty(this.value)) {
      this.type = Token.predefined[this.value];
      this.reserved_keyword = true;
    }
    this.is_binary_operator = (this.type >= 30 && this.type <= 39) || (this.type >= 200 && this.type <= 201) || (this.type >= 2 && this.type <= 7);
  }

  toString() {
    return this.value + " : " + this.type;
  }

};

this.Token.TYPE_EQUALS = 1;

this.Token.TYPE_DOUBLE_EQUALS = 2;

this.Token.TYPE_GREATER = 3;

this.Token.TYPE_GREATER_OR_EQUALS = 4;

this.Token.TYPE_LOWER = 5;

this.Token.TYPE_LOWER_OR_EQUALS = 6;

this.Token.TYPE_UNEQUALS = 7;

this.Token.TYPE_IDENTIFIER = 10;

this.Token.TYPE_NUMBER = 11;

this.Token.TYPE_STRING = 12;

this.Token.TYPE_OPEN_BRACE = 20;

this.Token.TYPE_CLOSED_BRACE = 21;

// @Token.TYPE_OPEN_CURLY_BRACE = 22
// @Token.TYPE_CLOSED_CURLY_BRACE = 23
this.Token.TYPE_OPEN_BRACKET = 24;

this.Token.TYPE_CLOSED_BRACKET = 25;

this.Token.TYPE_COMMA = 26;

this.Token.TYPE_DOT = 27;

this.Token.TYPE_PLUS = 30;

this.Token.TYPE_MINUS = 31;

this.Token.TYPE_MULTIPLY = 32;

this.Token.TYPE_DIVIDE = 33;

this.Token.TYPE_POWER = 34;

this.Token.TYPE_MODULO = 35;

this.Token.TYPE_BINARY_AND = 36;

this.Token.TYPE_BINARY_OR = 37;

this.Token.TYPE_SHIFT_LEFT = 38;

this.Token.TYPE_SHIFT_RIGHT = 39;

this.Token.TYPE_PLUS_EQUALS = 40;

this.Token.TYPE_MINUS_EQUALS = 41;

this.Token.TYPE_MULTIPLY_EQUALS = 42;

this.Token.TYPE_DIVIDE_EQUALS = 43;

this.Token.TYPE_MODULO_EQUALS = 44;

this.Token.TYPE_AND_EQUALS = 45;

this.Token.TYPE_OR_EQUALS = 46;

this.Token.TYPE_RETURN = 50;

this.Token.TYPE_BREAK = 51;

this.Token.TYPE_CONTINUE = 52;

this.Token.TYPE_FUNCTION = 60;

this.Token.TYPE_AFTER = 61;

this.Token.TYPE_EVERY = 62;

this.Token.TYPE_DO = 63;

this.Token.TYPE_SLEEP = 64;

this.Token.TYPE_LOCAL = 70;

this.Token.TYPE_OBJECT = 80;

this.Token.TYPE_CLASS = 90;

this.Token.TYPE_EXTENDS = 91;

this.Token.TYPE_NEW = 92;

this.Token.TYPE_FOR = 100;

this.Token.TYPE_TO = 101;

this.Token.TYPE_BY = 102;

this.Token.TYPE_IN = 103;

this.Token.TYPE_WHILE = 104;

this.Token.TYPE_IF = 105;

this.Token.TYPE_THEN = 106;

this.Token.TYPE_ELSE = 107;

this.Token.TYPE_ELSIF = 108;

this.Token.TYPE_END = 120;

this.Token.TYPE_AND = 200;

this.Token.TYPE_OR = 201;

this.Token.TYPE_NOT = 202;

this.Token.TYPE_ERROR = 404;

this.Token.predefined = {};

this.Token.predefined["return"] = this.Token.TYPE_RETURN;

this.Token.predefined["break"] = this.Token.TYPE_BREAK;

this.Token.predefined["continue"] = this.Token.TYPE_CONTINUE;

this.Token.predefined["function"] = this.Token.TYPE_FUNCTION;

this.Token.predefined["for"] = this.Token.TYPE_FOR;

this.Token.predefined["to"] = this.Token.TYPE_TO;

this.Token.predefined["by"] = this.Token.TYPE_BY;

this.Token.predefined["in"] = this.Token.TYPE_IN;

this.Token.predefined["while"] = this.Token.TYPE_WHILE;

this.Token.predefined["if"] = this.Token.TYPE_IF;

this.Token.predefined["then"] = this.Token.TYPE_THEN;

this.Token.predefined["else"] = this.Token.TYPE_ELSE;

this.Token.predefined["elsif"] = this.Token.TYPE_ELSIF;

this.Token.predefined["end"] = this.Token.TYPE_END;

this.Token.predefined["object"] = this.Token.TYPE_OBJECT;

this.Token.predefined["class"] = this.Token.TYPE_CLASS;

this.Token.predefined["extends"] = this.Token.TYPE_EXTENDS;

this.Token.predefined["new"] = this.Token.TYPE_NEW;

this.Token.predefined["and"] = this.Token.TYPE_AND;

this.Token.predefined["or"] = this.Token.TYPE_OR;

this.Token.predefined["not"] = this.Token.TYPE_NOT;

this.Token.predefined["after"] = this.Token.TYPE_AFTER;

this.Token.predefined["every"] = this.Token.TYPE_EVERY;

this.Token.predefined["do"] = this.Token.TYPE_DO;

this.Token.predefined["sleep"] = this.Token.TYPE_SLEEP;

this.Token.predefined["delete"] = this.Token.TYPE_DELETE;

this.Token.predefined["local"] = this.Token.TYPE_LOCAL;


this.Tokenizer = class Tokenizer {
  constructor(input, filename) {
    this.input = input;
    this.filename = filename;
    this.index = 0;
    this.line = 1;
    this.column = 0;
    this.last_column = 0;
    this.buffer = [];
    this.chars = {};
    this.chars["("] = Token.TYPE_OPEN_BRACE;
    this.chars[")"] = Token.TYPE_CLOSED_BRACE;
    this.chars["["] = Token.TYPE_OPEN_BRACKET;
    this.chars["]"] = Token.TYPE_CLOSED_BRACKET;
    this.chars["{"] = Token.TYPE_OPEN_CURLY_BRACE;
    this.chars["}"] = Token.TYPE_CLOSED_CURLY_BRACE;
    this.chars["^"] = Token.TYPE_POWER;
    this.chars[","] = Token.TYPE_COMMA;
    this.chars["."] = Token.TYPE_DOT;
    this.doubles = {};
    this.doubles[">"] = [Token.TYPE_GREATER, Token.TYPE_GREATER_OR_EQUALS];
    this.doubles["<"] = [Token.TYPE_LOWER, Token.TYPE_LOWER_OR_EQUALS];
    this.doubles["="] = [Token.TYPE_EQUALS, Token.TYPE_DOUBLE_EQUALS];
    this.doubles["+"] = [Token.TYPE_PLUS, Token.TYPE_PLUS_EQUALS];
    this.doubles["-"] = [Token.TYPE_MINUS, Token.TYPE_MINUS_EQUALS];
    this.doubles["*"] = [Token.TYPE_MULTIPLY, Token.TYPE_MULTIPLY_EQUALS];
    this.doubles["/"] = [Token.TYPE_DIVIDE, Token.TYPE_DIVIDE_EQUALS];
    this.doubles["%"] = [Token.TYPE_MODULO, Token.TYPE_MODULO_EQUALS];
    this.doubles["&"] = [Token.TYPE_BINARY_AND, Token.TYPE_AND_EQUALS];
    this.doubles["|"] = [Token.TYPE_BINARY_OR, Token.TYPE_OR_EQUALS];
    this.shifts = {
      "<": Token.TYPE_SHIFT_LEFT,
      ">": Token.TYPE_SHIFT_RIGHT
    };
    this.letter_regex = RegExp(/^\p{L}/, 'u');
  }

  pushBack(token) {
    return this.buffer.splice(0, 0, token);
  }

  finished() {
    return this.index >= this.input.length && this.buffer.length === 0;
  }

  nextChar(ignore_comments = false) {
    var c, endseq;
    c = this.input.charAt(this.index++);
    if (c === "\n") {
      this.line += 1;
      this.last_column = this.column;
      this.column = 0;
    } else if (c === "/" && !ignore_comments) {
      if (this.input.charAt(this.index) === "/") {
        while (true) {
          c = this.input.charAt(this.index++);
          if (c === "\n" || this.index >= this.input.length) {
            break;
          }
        }
        this.line += 1;
        this.last_column = this.column;
        this.column = 0;
        return this.nextChar();
      } else if (this.input.charAt(this.index) === "*") {
        endseq = 0;
        while (true) {
          c = this.input.charAt(this.index++);
          if (c === "\n") {
            this.line += 1;
            this.last_column = this.column;
            this.column = 0;
            endseq = 0;
          } else if (c === "*") {
            endseq = 1;
          } else if (c === "/" && endseq === 1) {
            break;
          } else {
            endseq = 0;
          }
          if (this.index >= this.input.length) {
            break;
          }
        }
        return this.nextChar();
      }
    } else {
      this.column += 1;
    }
    return c;
  }

  rewind() {
    this.index -= 1;
    this.column -= 1;
    if (this.input.charAt(this.index) === "\n") {
      this.line -= 1;
      return this.column = this.last_column;
    }
  }

  next() {
    var c, code;
    if (this.buffer.length > 0) {
      return this.buffer.splice(0, 1)[0];
    }
    while (true) {
      if (this.index >= this.input.length) {
        return null;
      }
      c = this.nextChar();
      code = c.charCodeAt(0);
      if (code > 32 && code !== 160) {
        break;
      }
    }
    this.token_start = this.index - 1;
    if (this.doubles[c] != null) {
      return this.parseDouble(c, this.doubles[c]);
    }
    if (this.chars[c] != null) {
      return new Token(this, this.chars[c], c);
    }
    if (c === "!") {
      return this.parseUnequals(c);
    } else if (code >= 48 && code <= 57) {
      return this.parseNumber(c);
    } else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122) || code === 95 || this.letter_regex.test(c)) {
      return this.parseIdentifier(c);
    } else if (c === '"') {
      return this.parseString(c, '"');
    } else if (c === "'") {
      return this.parseString(c, "'");
    } else {
      return this.error("Syntax Error");
    }
  }

  changeNumberToIdentifier() {
    var i, j, ref, results, token, v;
    token = this.next();
    if ((token != null) && token.type === Token.TYPE_NUMBER) {
      v = token.string_value.split(".");
      results = [];
      for (i = j = ref = v.length - 1; j >= 0; i = j += -1) {
        if (v[i].length > 0) {
          this.pushBack(new Token(this, Token.TYPE_IDENTIFIER, v[i]));
        }
        if (i > 0) {
          results.push(this.pushBack(new Token(this, Token.TYPE_DOT, ".")));
        } else {
          results.push(void 0);
        }
      }
      return results;
    } else if ((token != null) && token.type === Token.TYPE_STRING) {
      return this.pushBack(new Token(this, Token.TYPE_IDENTIFIER, token.value));
    } else {
      return this.pushBack(token);
    }
  }

  parseDouble(c, d) {
    if ((this.shifts[c] != null) && this.index < this.input.length && this.input.charAt(this.index) === c) {
      this.nextChar();
      return new Token(this, this.shifts[c], c + c);
    } else if (this.index < this.input.length && this.input.charAt(this.index) === "=") {
      this.nextChar();
      return new Token(this, d[1], c + "=");
    } else {
      return new Token(this, d[0], c);
    }
  }

  parseEquals(c) {
    if (this.index < this.input.length && this.input.charAt(this.index) === "=") {
      this.nextChar();
      return new Token(this, Token.TYPE_DOUBLE_EQUALS, "==");
    } else {
      return new Token(this, Token.TYPE_EQUALS, "=");
    }
  }

  parseGreater(c) {
    if (this.index < this.input.length && this.input.charAt(this.index) === "=") {
      this.nextChar();
      return new Token(this, Token.TYPE_GREATER_OR_EQUALS, ">=");
    } else {
      return new Token(this, Token.TYPE_GREATER_OR_EQUALS, ">");
    }
  }

  parseLower(c) {
    if (this.index < this.input.length && this.input.charAt(this.index) === "=") {
      this.nextChar();
      return new Token(this, Token.TYPE_LOWER_OR_EQUALS, "<=");
    } else {
      return new Token(this, Token.TYPE_LOWER, "<");
    }
  }

  parseUnequals(c) {
    if (this.index < this.input.length && this.input.charAt(this.index) === "=") {
      this.nextChar();
      return new Token(this, Token.TYPE_UNEQUALS, "!=");
    } else {
      return this.error("Expected inequality !=");
    }
  }

  parseIdentifier(s) {
    var c, code;
    while (true) {
      if (this.index >= this.input.length) {
        return new Token(this, Token.TYPE_IDENTIFIER, s);
      }
      c = this.nextChar();
      code = c.charCodeAt(0);
      if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122) || code === 95 || (code >= 48 && code <= 57) || this.letter_regex.test(c)) {
        s += c;
      } else {
        this.rewind();
        return new Token(this, Token.TYPE_IDENTIFIER, s);
      }
    }
  }

  parseNumber(s) {
    var c, code, exp, pointed;
    pointed = false;
    exp = false;
    while (true) {
      if (this.index >= this.input.length) {
        return new Token(this, Token.TYPE_NUMBER, Number.parseFloat(s), s);
      }
      c = this.nextChar();
      code = c.charCodeAt(0);
      if (c === "." && !pointed && !exp) {
        pointed = true;
        s += c;
      } else if (code >= 48 && code <= 57) {
        s += c;
      } else if ((c === "e" || c === "E") && !exp && this.index < this.input.length) {
        exp = true;
        s += c;
        c = this.nextChar();
        if (c === "+" || c === "-") {
          s += c;
        } else {
          this.rewind();
        }
      } else if ((c === "x" || c === "X") && s === "0") {
        return this.parseHexNumber("0x");
      } else {
        this.rewind();
        return new Token(this, Token.TYPE_NUMBER, Number.parseFloat(s), s);
      }
    }
  }

  parseHexNumber(s) {
    var c;
    while (true) {
      if (this.index >= this.input.length) {
        return new Token(this, Token.TYPE_NUMBER, Number.parseInt(s), s);
      }
      c = this.nextChar();
      if (/[a-fA-F0-9]/.test(c)) {
        s += c;
      } else {
        this.rewind();
        return new Token(this, Token.TYPE_NUMBER, Number.parseInt(s), s);
      }
    }
  }

  parseString(s, close = '"') {
    var c, code, count_close, n;
    if (close === '"') {
      if (this.input.charAt(this.index) === '"' && this.input.charAt(this.index + 1) === '"' && this.input.charAt(this.index + 2) !== '"') {
        close = '"""';
        this.nextChar(true);
        this.nextChar(true);
      }
    }
    count_close = 0;
    while (true) {
      if (this.index >= this.input.length) {
        return this.error("Unclosed string value");
      }
      c = this.nextChar(true);
      code = c.charCodeAt(0);
      if (c === "\\") {
        n = this.nextChar(true);
        switch (n) {
          case "n":
            s += "\n";
            break;
          case "\\":
            s += "\\";
            break;
          case close:
            s += close;
            break;
          default:
            s += "\\" + n;
        }
      } else if (c === close) {
        n = this.nextChar(true);
        if (n === close) {
          s += c;
        } else {
          this.rewind();
          s += c;
          return new Token(this, Token.TYPE_STRING, s.substring(1, s.length - 1));
        }
      } else {
        if (close === '"""' && c === '"') {
          count_close += 1;
          if (count_close === 3) {
            return new Token(this, Token.TYPE_STRING, s.substring(1, s.length - 2));
          }
        } else {
          count_close = 0;
        }
        s += c;
      }
    }
  }

  error(s) {
    throw s;
  }

};


var Transpiler;

Transpiler = (function() {
  function Transpiler() {}

  Transpiler.prototype.transpile = function(r) {
    var i, j, l, op, ref, results;
    results = [];
    for (i = l = 0, ref = r.opcodes.length - 1; l <= ref; i = l += 1) {
      op = OPCODES[r.opcodes[i]];
      if (this.transpilable(op, r.arg1[i])) {
        j = i + 1;
        while (j < r.opcodes.length && r.removeable(j) && this.transpilable(OPCODES[r.opcodes[j]], r.arg1[j])) {
          j += 1;
        }
        j -= 1;
        if (j - i >= 2) {
          results.push(this.transpileSegment(r, i, j));
        } else {
          results.push(void 0);
        }
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Transpiler.prototype.transpileSegment = function(r, i, j) {
    var comp, err, index, k, l, m, ref, ref1, ref2, ref3, s;
    this.vcount = 0;
    this.stack = new Stack();
    this.locals = {};
    this.variables = {};
    s = "f = function(stack,stack_index,locals,locals_offset,object,global) {\n";
    for (k = l = ref = i, ref1 = j; l <= ref1; k = l += 1) {
      console.info(OPCODES[r.opcodes[k]] + " " + r.arg1[k]);
      comp = this[OPCODES[r.opcodes[k]]](r.arg1[k]);
      if (comp) {
        s += comp + "\n";
      }
    }
    for (index in this.stack.touched) {
      if (this.stack.touched[index]) {
        if (index < 0) {
          s += "stack[stack_index-" + (Math.abs(index)) + "] = " + this.stack.stack[index] + " ;\n";
        } else if (index > 0) {
          s += "stack[stack_index+" + index + "] = " + this.stack.stack[index] + " ;\n";
        } else {
          s += "stack[stack_index] = " + this.stack.stack[index] + " ;\n";
        }
      }
    }
    if (this.stack.index < 0) {
      s += "stack_index -= " + (Math.abs(this.stack.index)) + " ;\n";
    } else if (this.stack.index > 0) {
      s += "stack_index += " + this.stack.index + " ;\n";
    }
    s += "return stack_index ;\n}";
    console.info(s);
    try {
      eval(s);
    } catch (error) {
      err = error;
      console.error(s);
      console.error(err);
    }
    r.opcodes[i] = 200;
    r.arg1[i] = f;
    for (k = m = ref2 = i + 1, ref3 = j; m <= ref3; k = m += 1) {
      r.remove(i + 1);
    }
  };

  Transpiler.prototype.createVariable = function() {
    return "v" + (this.vcount++);
  };

  Transpiler.prototype.transpilable = function(op, arg) {
    var ref;
    if (op === "LOAD_VALUE") {
      return (ref = typeof arg) === "string" || ref === "number";
    } else {
      return this[op] != null;
    }
  };

  Transpiler.prototype.LOAD_VALUE = function(arg) {
    if (typeof arg === "string") {
      this.stack.push(" \"" + (arg.replace(/"/g, "\\\"")) + "\" ");
    } else if (typeof arg === "number") {
      this.stack.push(arg + "");
    }
    return "";
  };

  Transpiler.prototype.LOAD_LOCAL = function(arg) {
    var v;
    v = this.createVariable();
    this.stack.push(v);
    return "let " + v + " = locals[locals_offset+" + arg + "] ; // LOAD_LOCAL";
  };

  Transpiler.prototype.LOAD_LOCAL_OBJECT = function(arg) {
    var res, v;
    if (this.locals[arg] != null) {
      v = this.locals[arg];
      this.stack.push(v);
      return "if (typeof " + v + " != \"object\") { " + v + " = locals[locals_offset+" + arg + "] = {} } ;";
    } else {
      v = this.createVariable();
      res = "let " + v + " = locals[locals_offset+" + arg + "] ;\nif (typeof " + v + " != \"object\") { " + v + " = locals[locals_offset+" + arg + "] = {} } ;";
      this.stack.push(v);
      this.locals[arg] = v;
      return res;
    }
  };

  Transpiler.prototype.STORE_LOCAL = function(arg) {
    var v;
    v = this.stack.get();
    return "locals[locals_offset+" + arg + "] = " + v + " ; // STORE_LOCAL";
  };

  Transpiler.prototype.POP = function() {
    this.stack.pop();
    return "";
  };

  Transpiler.prototype.CREATE_PROPERTY = function(arg) {
    var res;
    res = (this.stack.get(-2)) + "[" + (this.stack.get(-1)) + "] = " + (this.stack.get()) + " ;";
    this.stack.pop();
    this.stack.pop();
    return res;
  };

  Transpiler.prototype.LOAD_PROPERTY = function(arg) {
    var res, v;
    v = this.createVariable();
    res = "let " + v + " = " + (this.stack.get(-1)) + "[" + (this.stack.get()) + "] ; // LOAD_PROPERTY\nif (" + v + " == null) { " + v + " = 0 ; }";
    this.stack.pop();
    this.stack.pop();
    this.stack.push(v);
    return res;
  };

  Transpiler.prototype.LOAD_PROPERTY_ATOP = function(arg) {
    var res, v;
    v = this.createVariable();
    res = "let " + v + " = " + (this.stack.get(-1)) + "[" + (this.stack.get()) + "] ; // LOAD_PROPERTY_ATOP\nif (" + v + " == null) { " + v + " = 0 ; }";
    this.stack.push(v);
    return res;
  };

  Transpiler.prototype.NEW_OBJECT = function() {
    var v;
    v = this.createVariable();
    this.stack.push(v);
    return "let " + v + " = {} ;";
  };

  Transpiler.prototype.NEW_ARRAY = function() {
    var v;
    v = this.createVariable();
    this.stack.push(v);
    return "let " + v + " = [] ;";
  };

  Transpiler.prototype.MAKE_OBJECT = function() {
    var res, v;
    v = this.createVariable();
    res = "let " + v + " = " + (this.stack.get()) + " ;\nif (typeof " + v + " != \"object\") " + v + " = {} ; ";
    this.stack.pop();
    this.stack.push(v);
    return res;
  };

  Transpiler.prototype.STORE_VARIABLE = function(arg) {
    if (this.variables[arg] != null) {
      return this.variables[arg] + " = object[\"" + arg + "\"] = " + (this.stack.get()) + " ; // STORE_VARIABLE";
    } else {
      return "object[\"" + arg + "\"] = " + (this.stack.get()) + " ; // STORE_VARIABLE";
    }
  };

  Transpiler.prototype.STORE_PROPERTY = function(arg) {
    var res, v;
    v = this.createVariable();
    res = "let " + v + " = " + (this.stack.get(-2)) + "[" + (this.stack.get(-1)) + "] = " + (this.stack.get(0)) + " ; // STORE_PROPERTY";
    this.stack.pop();
    this.stack.pop();
    this.stack.pop();
    this.stack.push(v);
    return res;
  };

  return Transpiler;

})();

this.Stack = (function() {
  function Stack() {
    this.stack = ["stack[stack_index]"];
    this.index = 0;
    this.touched = {};
  }

  Stack.prototype.push = function(value) {
    this.stack[++this.index] = value;
    return this.touched[this.index] = true;
  };

  Stack.prototype.pop = function() {
    var res;
    if (this.index >= 0) {
      res = this.stack.splice(this.index, 1)[0];
    } else if (this.stack[this.index] != null) {
      res = this.stack[this.index];
    } else {
      res = "stack[stack_index-" + this.index + "]";
    }
    this.index -= 1;
    return res;
  };

  Stack.prototype.get = function(index) {
    var i;
    if (index == null) {
      index = 0;
    }
    i = this.index + index;
    if (i >= 0) {
      return this.stack[i];
    } else if (this.stack[i] != null) {
      return this.stack[i];
    } else {
      return "stack[stack_index-" + (-i) + "]";
    }
  };

  return Stack;

})();


var Random;

Random = (function() {
  function Random(_seed, hash) {
    this._seed = _seed != null ? _seed : Math.random();
    if (hash == null) {
      hash = true;
    }
    if (this._seed === 0) {
      this._seed = Math.random();
    }
    if (this._seed < 1) {
      this._seed *= 1 << 30;
    }
    this.a = 13971;
    this.b = 12345;
    this.size = 1 << 30;
    this.mask = this.size - 1;
    this.norm = 1 / this.size;
    if (hash) {
      this.nextSeed();
      this.nextSeed();
      this.nextSeed();
    }
  }

  Random.prototype.next = function() {
    this._seed = (this._seed * this.a + this.b) & this.mask;
    return this._seed * this.norm;
  };

  Random.prototype.nextInt = function(num) {
    return Math.floor(this.next() * num);
  };

  Random.prototype.nextSeed = function() {
    return this._seed = (this._seed * this.a + this.b) & this.mask;
  };

  Random.prototype.seed = function(_seed) {
    this._seed = _seed != null ? _seed : Math.random();
    if (this._seed < 1) {
      this._seed *= 1 << 30;
    }
    this.nextSeed();
    this.nextSeed();
    return this.nextSeed();
  };

  Random.prototype.clone = function(seed) {
    if (seed != null) {
      return new Random(seed);
    } else {
      seed = this._seed;
      return new Random(seed, false);
    }
  };

  return Random;

})();

this.MicroVM = class MicroVM {
  constructor(meta = {}, global = {}, namespace1 = "/microstudio", preserve_ls = false) {
    var ctx, err;
    this.namespace = namespace1;
    this.preserve_ls = preserve_ls;
    if (meta.print == null) {
      meta.print = (text) => {
        if (typeof text === "object" && (this.runner != null)) {
          text = this.runner.toString(text);
        }
        return console.info(text);
      };
    }
    Array.prototype.insert = function(e) {
      this.splice(0, 0, e);
      return e;
    };
    Array.prototype.insertAt = function(e, i) {
      if (i >= 0 && i < this.length) {
        this.splice(i, 0, e);
      } else {
        this.push(e);
      }
      return e;
    };
    Array.prototype.remove = function(i) {
      if (i >= 0 && i < this.length) {
        return this.splice(i, 1)[0];
      } else {
        return 0;
      }
    };
    Array.prototype.removeAt = function(i) {
      if (i >= 0 && i < this.length) {
        return this.splice(i, 1)[0];
      } else {
        return 0;
      }
    };
    Array.prototype.removeElement = function(e) {
      var index;
      index = this.indexOf(e);
      if (index >= 0) {
        return this.splice(index, 1)[0];
      } else {
        return 0;
      }
    };
    Array.prototype.contains = function(e) {
      if (this.indexOf(e) >= 0) {
        return 1;
      } else {
        return 0;
      }
    };
    meta.round = function(x) {
      return Math.round(x);
    };
    meta.floor = function(x) {
      return Math.floor(x);
    };
    meta.ceil = function(x) {
      return Math.ceil(x);
    };
    meta.abs = function(x) {
      return Math.abs(x);
    };
    meta.min = function(x, y) {
      return Math.min(x, y);
    };
    meta.max = function(x, y) {
      return Math.max(x, y);
    };
    meta.sqrt = function(x) {
      return Math.sqrt(x);
    };
    meta.pow = function(x, y) {
      return Math.pow(x, y);
    };
    meta.sin = function(x) {
      return Math.sin(x);
    };
    meta.cos = function(x) {
      return Math.cos(x);
    };
    meta.tan = function(x) {
      return Math.tan(x);
    };
    meta.acos = function(x) {
      return Math.acos(x);
    };
    meta.asin = function(x) {
      return Math.asin(x);
    };
    meta.atan = function(x) {
      return Math.atan(x);
    };
    meta.atan2 = function(y, x) {
      return Math.atan2(y, x);
    };
    meta.sind = function(x) {
      return Math.sin(x / 180 * Math.PI);
    };
    meta.cosd = function(x) {
      return Math.cos(x / 180 * Math.PI);
    };
    meta.tand = function(x) {
      return Math.tan(x / 180 * Math.PI);
    };
    meta.acosd = function(x) {
      return Math.acos(x) * 180 / Math.PI;
    };
    meta.asind = function(x) {
      return Math.asin(x) * 180 / Math.PI;
    };
    meta.atand = function(x) {
      return Math.atan(x) * 180 / Math.PI;
    };
    meta.atan2d = function(y, x) {
      return Math.atan2(y, x) * 180 / Math.PI;
    };
    meta.log = function(x) {
      return Math.log(x);
    };
    meta.exp = function(x) {
      return Math.exp(x);
    };
    meta.random = new Random(0);
    meta.PI = Math.PI;
    meta.true = 1;
    meta.false = 0;
    global.system = {
      time: Date.now,
      language: navigator.language,
      update_rate: 60,
      inputs: {
        keyboard: 1,
        mouse: 1,
        touch: "ontouchstart" in window ? 1 : 0,
        gamepad: 0
      },
      prompt: (text, callback) => {
        return setTimeout((() => {
          var args, result;
          global.mouse.pressed = 0;
          global.touch.touching = 0;
          result = window.prompt(text);
          if ((callback != null) && typeof callback === "function") {
            args = [(result != null ? 1 : 0), result];
            this.context.timeout = Date.now() + 1000;
            return callback.apply(null, args);
          }
        }), 0);
      },
      say: (text) => {
        return setTimeout((() => {
          return window.alert(text);
        }), 0);
      }
    };
    try {
      global.system.inputs.keyboard = window.matchMedia("(pointer:fine)").matches ? 1 : 0;
      global.system.inputs.mouse = window.matchMedia("(any-hover:none)").matches ? 0 : 1;
    } catch (error1) {
      err = error1;
    }
    this.storage_service = this.createStorageService();
    global.storage = this.storage_service.api;
    meta.global = global;
    this.context = {
      meta: meta,
      global: global,
      local: global,
      object: global,
      breakable: 0,
      continuable: 0,
      returnable: 0,
      stack_size: 0
    };
    ctx = this.context;
    Array.prototype.sortList = function(f) {
      var funk;
      if ((f != null) && f instanceof Program.Function) {
        funk = function(a, b) {
          return f.call(ctx, [a, b], true);
        };
      } else if ((f != null) && typeof f === "function") {
        funk = f;
      }
      return this.sort(funk);
    };
    this.clearWarnings();
    this.runner = new Runner(this);
  }

  clearWarnings() {
    return this.context.warnings = {
      using_undefined_variable: {},
      assigning_field_to_undefined: {},
      invoking_non_function: {},
      assigning_api_variable: {},
      assignment_as_condition: {}
    };
  }

  setMeta(key, value) {
    return this.context.meta[key] = value;
  }

  setGlobal(key, value) {
    return this.context.global[key] = value;
  }

  run(program, timeout = 3000, filename = "", callback) {
    var err, res;
    this.program = program;
    this.error_info = null;
    this.context.timeout = Date.now() + timeout;
    this.context.stack_size = 0;
    try {
      res = this.runner.run(this.program, filename, callback);
      this.storage_service.check();
      if (res != null) {
        return this.runner.toString(res);
      } else {
        return null;
      }
    } catch (error1) {
      err = error1;
      if ((err.type != null) && (err.line != null) && (err.error != null)) {
        this.error_info = err;
      } else if ((this.context.location != null) && (this.context.location.token != null)) {
        this.error_info = {
          error: this.context.location.token.error_text || err,
          file: filename,
          line: this.context.location.token.line,
          column: this.context.location.token.column
        };
        console.info(`Error at line: ${this.context.location.token.line} column: ${this.context.location.token.column}`);
      } else {
        this.error_info = {
          error: err,
          file: filename
        };
      }
      console.error(err);
      return this.storage_service.check();
    }
  }

  call(name, args = [], timeout = 3000) {
    var err, res;
    this.error_info = null;
    this.context.timeout = Date.now() + timeout;
    this.context.stack_size = 0;
    try {
      res = this.runner.call(name, args);
      this.storage_service.check();
      return res;
    } catch (error1) {
      err = error1;
      console.error(err);
      if ((this.context.location != null) && (this.context.location.token != null)) {
        this.error_info = {
          error: this.context.location.token.error_text || err,
          line: this.context.location.token.line,
          column: this.context.location.token.column,
          file: this.context.location.token.file
        };
      } else {
        this.error_info = {
          error: err
        };
      }
      if ((this.context.location != null) && (this.context.location.token != null)) {
        console.info(`Error at line: ${this.context.location.token.line} column: ${this.context.location.token.column}`);
      }
      return this.storage_service.check();
    }
  }

  createStorageService() {
    var err, error, ls, namespace, s, service, storage, write_storage;
    try {
      ls = window.localStorage;
    } catch (error1) {
      error = error1; // in incognito mode, embedded by an iframe, localStorage isn't available
      console.info("localStorage not available");
      return service = {
        api: {
          set: function() {},
          get: function() {
            return 0;
          }
        },
        check: function() {}
      };
    }
    if (!this.preserve_ls) {
      try {
        delete window.localStorage;
      } catch (error1) {
        err = error1;
      }
    }
    storage = {};
    write_storage = false;
    namespace = this.namespace;
    try {
      s = ls.getItem(`ms${namespace}`);
      if (s) {
        storage = JSON.parse(s);
      }
    } catch (error1) {
      err = error1;
    }
    return service = {
      api: {
        set: (name, value) => {
          value = this.storableObject(value);
          if ((name != null) && (value != null)) {
            storage[name] = value;
            write_storage = true;
          }
          return value;
        },
        get: (name) => {
          if (name != null) {
            if (storage[name] != null) {
              return storage[name];
            } else {
              return 0;
            }
          } else {
            return 0;
          }
        }
      },
      check: () => {
        if (write_storage) {
          write_storage = false;
          try {
            return ls.setItem(`ms${namespace}`, JSON.stringify(storage));
          } catch (error1) {
            err = error1;
          }
        }
      }
    };
  }

  storableObject(value) {
    var referenced;
    referenced = [this.context.global.screen, this.context.global.system, this.context.global.keyboard, this.context.global.audio, this.context.global.gamepad, this.context.global.touch, this.context.global.mouse, this.context.global.sprites, this.context.global.maps];
    return this.makeStorableObject(value, referenced);
  }

  makeStorableObject(value, referenced) {
    var i, j, key, len, res, v;
    if (value == null) {
      return value;
    }
    if (typeof value === "function" || ((typeof Program !== "undefined" && Program !== null) && value instanceof Program.Function) || ((typeof Routine !== "undefined" && Routine !== null) && value instanceof Routine)) {
      return void 0;
    } else if (typeof value === "object") {
      if (referenced.indexOf(value) >= 0) {
        return void 0;
      }
      referenced = referenced.slice();
      referenced.push(value);
      if (Array.isArray(value)) {
        res = [];
        for (i = j = 0, len = value.length; j < len; i = ++j) {
          v = value[i];
          v = this.makeStorableObject(v, referenced);
          if (v != null) {
            res[i] = v;
          }
        }
        return res;
      } else {
        res = {};
        for (key in value) {
          v = value[key];
          if (key === "class") {
            continue;
          }
          v = this.makeStorableObject(v, referenced);
          if (v != null) {
            res[key] = v;
          }
        }
        return res;
      }
    } else {
      return value;
    }
  }

};

this.Watcher = class Watcher {
  constructor(runtime) {
    this.runtime = runtime;
    this.vm = this.runtime.vm;
  }

  update() {
    if (this.watching_variables) {
      return this.step();
    }
  }

  watch(variables) {
    this.watching = true;
    this.watching_variables = variables;
    this.exclusion_list = [this.vm.context.global.screen, this.vm.context.global.system, this.vm.context.global.keyboard, this.vm.context.global.audio, this.vm.context.global.gamepad, this.vm.context.global.touch, this.vm.context.global.mouse, this.vm.context.global.sprites, this.vm.context.global.maps, this.vm.context.global.sounds, this.vm.context.global.music, this.vm.context.global.assets, this.vm.context.global.asset_manager, this.vm.context.global.fonts, this.vm.context.global.storage];
    if (this.vm.context.global.Function != null) {
      this.exclusion_list.push(this.vm.context.global.Function);
    }
    if (this.vm.context.global.String != null) {
      this.exclusion_list.push(this.vm.context.global.String);
    }
    if (this.vm.context.global.List != null) {
      this.exclusion_list.push(this.vm.context.global.List);
    }
    if (this.vm.context.global.Number != null) {
      this.exclusion_list.push(this.vm.context.global.Number);
    }
    if (this.vm.context.global.Object != null) {
      this.exclusion_list.push(this.vm.context.global.Object);
    }
    if (this.vm.context.global.Image != null) {
      this.exclusion_list.push(this.vm.context.global.Image);
    }
    if (this.vm.context.global.Sound != null) {
      this.exclusion_list.push(this.vm.context.global.Sound);
    }
    if (this.vm.context.global.Sprite != null) {
      this.exclusion_list.push(this.vm.context.global.Sprite);
    }
    if (this.vm.context.global.Map != null) {
      this.exclusion_list.push(this.vm.context.global.Map);
    }
    if (this.vm.context.global.random != null) {
      this.exclusion_list.push(this.vm.context.global.random);
    }
    if (this.vm.context.global.print != null) {
      this.exclusion_list.push(this.vm.context.global.print);
    }
    return this.step();
  }

  stop() {
    return this.watching = false;
  }

  step(variables = this.watching_variables) {
    var index, j, len, res, v, value, vs;
    if (!this.watching) {
      return;
    }
    res = {};
    for (j = 0, len = variables.length; j < len; j++) {
      v = variables[j];
      if (v === "global") {
        value = this.vm.context.global;
      } else {
        vs = v.split(".");
        value = this.vm.context.global;
        index = 0;
        while (index < vs.length && (value != null)) {
          value = value[vs[index++]];
        }
      }
      if ((value != null) && this.exclusion_list.indexOf(value) < 0) {
        res[v] = this.exploreValue(value, 1, 10);
      }
    }
    return this.runtime.listener.postMessage({
      name: "watch_update",
      data: res
    });
  }

  exploreValue(value, depth = 1, array_max = 10) {
    var i, j, key, len, res, v;
    if (value == null) {
      return {
        type: "number",
        value: 0
      };
    }
    if (typeof value === "function" || value instanceof Program.Function || (typeof Routine !== "undefined" && Routine !== null) && value instanceof Routine) {
      return {
        type: "function",
        value: ""
      };
    } else if (typeof value === "object") {
      if (Array.isArray(value)) {
        if (depth === 0) {
          return {
            type: "list",
            value: "",
            length: value.length
          };
        }
        res = [];
        for (i = j = 0, len = value.length; j < len; i = ++j) {
          v = value[i];
          if (i >= 100) {
            break;
          }
          if (this.exclusion_list.indexOf(v) < 0) {
            res[i] = this.exploreValue(v, depth - 1, array_max);
          }
        }
        return res;
      } else {
        if (depth === 0) {
          v = "";
          if (value.classname) {
            v = "class " + value.classname;
          }
          if ((value.class != null) && (value.class.classname != null)) {
            v = value.class.classname;
          }
          return {
            type: "object",
            value: v
          };
        }
        res = {};
        for (key in value) {
          v = value[key];
          if (this.exclusion_list.indexOf(v) < 0) {
            res[key] = this.exploreValue(v, depth - 1, array_max);
          }
        }
        return res;
      }
    } else if (typeof value === "string") {
      return {
        type: "string",
        value: value.length < 43 ? value : value.substring(0, 40) + "..."
      };
    } else if (typeof value === "number") {
      return {
        type: "number",
        value: isFinite(value) ? value : 0
      };
    } else if (typeof value === "boolean") {
      return {
        type: "number",
        value: value ? 1 : 0
      };
    } else {
      return {
        type: "unknown",
        value: value
      };
    }
  }

};

this.AssetManager = class AssetManager {
  constructor(runtime) {
    this.runtime = runtime;
    this.interface = {
      loadFont: (font) => {
        return this.loadFont(font);
      },
      loadModel: (path, scene, callback) => {
        return this.loadModel(path, scene, callback);
      },
      loadImage: (path, callback) => {
        return this.loadImage(path, callback);
      },
      loadJSON: (path, callback) => {
        return this.loadJSON(path, callback);
      },
      loadText: (path, callback) => {
        return this.loadText(path, callback);
      },
      loadCSV: (path, callback) => {
        return this.loadCSV(path, callback);
      },
      loadMarkdown: (path, callback) => {
        return this.loadMarkdown(path, callback);
      },
      wasmInstance: (path, callback) => {
        return this.wasmInstance(path, callback);
      }
    };
  }

  getInterface() {
    return this.interface;
  }

  loadFont(font) {
    var err, file, name, split;
    if (typeof font !== "string") {
      return;
    }
    file = font.replace(/\//g, "-");
    split = file.split("-");
    name = split[split.length - 1];
    try {
      font = new FontFace(name, `url(assets/${file}.ttf)`);
      return font.load().then(() => {
        return document.fonts.add(font);
      });
    } catch (error) {
      err = error;
      return console.error(err);
    }
  }

  loadModel(path, scene, callback) {
    var loader;
    if (typeof BABYLON === "undefined" || BABYLON === null) {
      return;
    }
    loader = {
      ready: 0
    };
    if (this.runtime.assets[path] != null) {
      path = this.runtime.assets[path].file;
    } else {
      path = path.replace(/\//g, "-");
      path += ".glb";
    }
    return BABYLON.SceneLoader.LoadAssetContainer("", `assets/${path}`, scene, (container) => {
      loader.container = container;
      loader.ready = 1;
      if (callback) {
        return callback(container);
      }
    });
  }

  loadImage(path, callback) {
    var img, loader;
    loader = {
      ready: 0
    };
    if (this.runtime.assets[path] != null) {
      path = this.runtime.assets[path].file;
    }
    img = new Image;
    img.src = `assets/${path}`;
    img.onload = () => {
      var i;
      i = new msImage(img);
      loader.image = i;
      loader.ready = 1;
      if (callback) {
        return callback(i);
      }
    };
    return loader;
  }

  loadJSON(path, callback) {
    var loader;
    path = path.replace(/\//g, "-");
    path = `assets/${path}.json`;
    loader = {
      ready: 0
    };
    fetch(path).then((result) => {
      return result.json().then((data) => {
        loader.data = data;
        loader.ready = 1;
        if (callback) {
          return callback(data);
        }
      });
    });
    return loader;
  }

  loadText(path, callback, ext = "txt") {
    var loader;
    path = path.replace(/\//g, "-");
    path = `assets/${path}.${ext}`;
    loader = {
      ready: 0
    };
    fetch(path).then((result) => {
      return result.text().then((text) => {
        loader.text = text;
        loader.ready = 1;
        if (callback) {
          return callback(text);
        }
      });
    });
    return loader;
  }

  loadCSV(path, callback) {
    return this.loadText(path, callback, "csv");
  }

  loadMarkdown(path, callback) {
    return this.loadText(path, callback, "md");
  }

  wasmInstance(path, callback) {
    var loader;
    path = path.replace(/\//g, "-");
    path = `assets/${path}.wasm`;
    loader = {
      ready: 0
    };
    fetch(path).then((response) => {
      return response.arrayBuffer().then((buffer) => {
        return WebAssembly.instantiate(buffer).then((result) => {
          loader.instance = result.instance;
          loader.ready = 1;
          if (callback) {
            return callback(loader.instance);
          }
        });
      });
    });
    return loader;
  }

};

var WebSocket;

WebSocket = require("ws");

this.MPServer = class MPServer {
  constructor() {
    var impl;
    impl = new MPServerImpl(this);
    this.send = function(data) {
      var err;
      try {
        impl.sendMessage(data);
        return "sent";
      } catch (error) {
        err = error;
        console.error(err);
        return err.toString();
      }
    };
    this.close = function() {
      var err;
      try {
        return impl.close();
      } catch (error) {
        err = error;
        return console.error(err);
      }
    };
    this.new_connections = [];
    this.active_connections = [];
    this.closed_connections = [];
    this.messages = [];
    player.runtime.addServer(impl);
  }

};

this.MPServerImpl = class MPServerImpl {
  constructor(_interface) {
    this.interface = _interface;
    this.interface.status = "starting";
    this.reconnect_delay = 1000;
    this.clients = {};
    this.clients_connected = [];
    this.clients_disconnected = {};
    this.client_id = 1;
    this.start();
  }

  start() {
    var err;
    try {
      this.server = new WebSocket.Server({
        port: server_port
      });
      return this.server.on("connection", (socket, request) => {
        return this.clientConnected(socket);
      });
    } catch (error) {
      err = error;
      return console.error(err);
    }
  }

  clientConnected(socket) {
    var client;
    client = new MPClient(this, socket, this.client_id);
    this.clients_connected.push(client);
    this.clients[this.client_id] = client;
    return this.client_id++;
  }

  clientMessage(msg) {
    var client;
    if (msg.client_id == null) {
      return;
    }
    client = this.clients[msg.client_id];
    if (client != null) {
      return client.message(msg.data);
    }
  }

  clientDisconnected(client) {
    delete this.clients[client.client_id];
    return this.clients_disconnected[client.client_id] = true;
  }

  sendMessage(data) {
    return this.send({
      name: "mp_server_message",
      data: data
    });
  }

  send(data) {
    return this.socket.send(JSON.stringify(data));
  }

  update() {
    var c, client, closed_connections, connection, i, id, j, k, l, len, len1, len2, m, messages, n, new_connections, ref, ref1, ref2, ref3, ref4;
    new_connections = [];
    closed_connections = [];
    for (i = j = ref = this.interface.active_connections.length - 1; j >= 0; i = j += -1) {
      c = this.interface.active_connections[i];
      if (this.clients_disconnected[c.id]) {
        this.interface.active_connections.splice(i, 1);
        closed_connections.push(c);
      }
    }
    ref1 = this.clients_connected;
    for (k = 0, len = ref1.length; k < len; k++) {
      c = ref1[k];
      new_connections.push(c.interface);
      this.interface.active_connections.push(c.interface);
    }
    this.interface.new_connections = new_connections;
    this.interface.closed_connections = closed_connections;
    this.clients_disconnected = {};
    this.clients_connected = [];
    ref2 = this.clients;
    for (id in ref2) {
      client = ref2[id];
      client.update();
    }
    messages = [];
    ref3 = this.interface.active_connections;
    for (l = 0, len1 = ref3.length; l < len1; l++) {
      connection = ref3[l];
      ref4 = connection.messages;
      for (n = 0, len2 = ref4.length; n < len2; n++) {
        m = ref4[n];
        messages.push(m);
      }
    }
    this.interface.messages = messages;
  }

  close() {
    return this.socket.close();
  }

};

this.MPClient = class MPClient {
  constructor(server, socket1, client_id) {
    this.server = server;
    this.socket = socket1;
    this.client_id = client_id;
    this.interface = {
      id: this.client_id,
      status: "connected",
      messages: [],
      send: (data) => {
        return this.sendMessage(data);
      },
      disconnect: () => {
        return this.disconnect();
      }
    };
    this.message_buffer = [];
    this.socket.onmessage = (msg) => {
      var err;
      try {
        // console.info msg.data
        msg = JSON.parse(msg.data);
        switch (msg.name) {
          case "mp_update":
            this.interface.status = "running";
            return player.runtime.timer();
          case "mp_client_connection":
            return this.clientConnected(msg);
          case "mp_client_message":
            return this.clientMessage(msg);
          case "mp_client_disconnected":
            return this.disconnected();
        }
      } catch (error) {
        err = error;
        return console.error(err);
      }
    };
    this.socket.onclose = () => {
      return this.server.clientDisconnected(this);
    };
  }

  clientConnected(msg) {}

  clientMessage(msg) {
    return this.message_buffer.push(msg.data);
  }

  sendMessage(data) {
    var err;
    try {
      return this.socket.send(JSON.stringify({
        name: "mp_server_message",
        data: data
      }));
    } catch (error) {
      err = error;
      return console.error(err);
    }
  }

  disconnect() {
    var err;
    try {
      return this.socket.close();
    } catch (error) {
      err = error;
      return console.error(err);
    }
  }

  message(msg) {
    return this.message_buffer.push(msg.data);
  }

  disconnected() {
    return this.interface.status = "disconnected";
  }

  update() {
    var j, len, m, messages, ref;
    messages = [];
    ref = this.message_buffer;
    for (j = 0, len = ref.length; j < len; j++) {
      m = ref[j];
      messages.push({
        connection: this.interface,
        data: m
      });
    }
    this.interface.messages = messages;
    return this.message_buffer = [];
  }

};

this.Runtime = class Runtime {
  constructor(url1, sources, resources, listener) {
    this.url = url1;
    this.sources = sources;
    this.resources = resources;
    this.listener = listener;
    this.sprites = {};
    this.maps = {};
    this.sounds = {};
    this.music = {};
    this.assets = {};
    this.asset_manager = new AssetManager(this);
    this.previous_init = null;
    this.report_errors = true;
    this.log = (text) => {
      return this.listener.log(text);
    };
    this.update_memory = {};
    this.servers = [];
  }

  addServer(server) {
    return this.servers.push(server);
  }

  updateSource(file, src, reinit = false) {
    var err, init;
    if (this.vm == null) {
      return false;
    }
    if (src === this.update_memory[file]) {
      return false;
    }
    this.update_memory[file] = src;
    try {
      this.vm.run(src, 3000, file);
      this.listener.postMessage({
        name: "compile_success",
        file: file
      });
      this.reportWarnings();
      if (this.vm.error_info != null) {
        err = this.vm.error_info;
        err.type = "init";
        err.file = file;
        this.listener.reportError(err);
        return false;
      }
      if (this.vm.runner.getFunctionSource != null) {
        init = this.vm.runner.getFunctionSource("serverInit");
        if ((init != null) && init !== this.previous_init && reinit) {
          this.previous_init = init;
          this.vm.call("serverInit");
          if (this.vm.error_info != null) {
            err = this.vm.error_info;
            err.type = "serverInit";
            this.listener.reportError(err);
          }
        }
      }
      return true;
    } catch (error) {
      err = error;
      if (this.report_errors) {
        console.error(err);
        err.file = file;
        this.listener.reportError(err);
        return false;
      }
    }
  }

  start() {
    var j, key, len, m, name, ref, ref1, value;
    if (window.ms_async_load) {
      this.startReady();
    }
    if (Array.isArray(this.resources.maps)) {
      ref = this.resources.maps;
      for (j = 0, len = ref.length; j < len; j++) {
        m = ref[j];
        name = m.file.split(".")[0].replace(/-/g, "/");
        this.maps[name] = LoadMap(this.url + `maps/${m.file}?v=${m.version}`, () => {
          return this.checkStartReady();
        });
        this.maps[name].name = name;
      }
    } else if (this.resources.maps != null) {
      if (window.player == null) {
        window.player = this.listener;
      }
      ref1 = this.resources.maps;
      for (key in ref1) {
        value = ref1[key];
        this.updateMap(key, 0, value);
      }
    }
    this.checkStartReady();
  }

  checkStartReady() {
    var count, key, ready, ref, value;
    count = 0;
    ready = 0;
    ref = this.maps;
    for (key in ref) {
      value = ref[key];
      count += 1;
      if (value.ready) {
        ready += 1;
      }
    }
    if (ready < count) {
      if (!window.ms_async_load) {
        return;
      }
    } else {
      if (window.ms_async_load && (this.vm != null)) {
        this.vm.context.global.system.loading = 100;
      }
    }
    if (!this.started) {
      return this.startReady();
    }
  }

  startReady() {
    var err, file, global, init, j, len, lib, meta, namespace, ref, ref1, src;
    this.started = true;
    meta = {
      print: (text) => {
        if ((typeof text === "object" || typeof text === "function") && (this.vm != null)) {
          text = this.vm.runner.toString(text);
        }
        return this.listener.log(text);
      }
    };
    global = {
      sprites: this.sprites,
      sounds: this.sounds,
      music: this.music,
      assets: this.assets,
      asset_manager: this.asset_manager.getInterface(),
      maps: this.maps,
      Map: MicroMap
    };
    ref = window.ms_libs;
    for (j = 0, len = ref.length; j < len; j++) {
      lib = ref[j];
      switch (lib) {
        case "matterjs":
          global.Matter = Matter;
          break;
        case "cannonjs":
          global.CANNON = CANNON;
      }
    }
    namespace = location.pathname + "[server]";
    this.vm = new MicroVM(meta, global, namespace, location.hash === "#transpiler");
    this.vm.context.global.Server = MPServer;
    this.vm.context.global.system.pause = () => {
      return this.listener.codePaused();
    };
    this.vm.context.global.system.exit = () => {
      return this.exit();
    };
    if (!window.ms_async_load) {
      this.vm.context.global.system.loading = 100;
    }
    this.vm.context.global.system.javascript = System.javascript;
    System.runtime = this;
    ref1 = this.sources;
    for (file in ref1) {
      src = ref1[file];
      this.updateSource(file, src, false);
    }
    if (this.vm.runner.getFunctionSource != null) {
      init = this.vm.runner.getFunctionSource("serverInit");
      if (init != null) {
        this.previous_init = init;
        this.vm.call("serverInit");
        if (this.vm.error_info != null) {
          err = this.vm.error_info;
          err.type = "serverInit";
          this.listener.reportError(err);
        }
      }
    } else {
      this.vm.call("serverInit");
      if (this.vm.error_info != null) {
        err = this.vm.error_info;
        err.type = "serverInit";
        this.listener.reportError(err);
      }
    }
    this.dt = 1000 / 60;
    this.last_time = Date.now();
    this.current_frame = 0;
    this.floating_frame = 0;
    this.clock_interval = setInterval((() => {
      return this.clock();
    }), 16);
    this.watcher = new Watcher(this);
    return this.listener.postMessage({
      name: "started"
    });
  }

  updateMaps() {
    var key, map, ref;
    ref = this.maps;
    for (key in ref) {
      map = ref[key];
      map.needs_update = true;
    }
  }

  runCommand(command, callback) {
    var err, res, warnings;
    try {
      warnings = this.vm.context.warnings;
      this.vm.clearWarnings();
      res = this.vm.run(command, void 0, void 0, callback);
      this.reportWarnings();
      this.vm.context.warnings = warnings;
      if (this.vm.error_info != null) {
        err = this.vm.error_info;
        err.type = "exec";
        this.listener.reportError(err);
      }
      this.watcher.update();
      if (callback == null) {
        return res;
      } else if (res != null) {
        callback(res);
      }
      return null;
    } catch (error) {
      err = error;
      return this.listener.reportError(err);
    }
  }

  projectFileUpdated(type, file, version, data, properties) {
    switch (type) {
      case "maps":
        return this.updateMap(file, version, data);
      case "ms":
        return this.updateCode(file, version, data);
    }
  }

  projectFileDeleted(type, file) {
    switch (type) {
      case "maps":
        return delete this.maps[file.substring(0, file.length - 5).replace(/-/g, "/")];
    }
  }

  projectOptionsUpdated(msg) {}

  updateMap(name, version, data) {
    var m, url;
    name = name.replace(/-/g, "/");
    if (data != null) {
      m = this.maps[name];
      if (m != null) {
        UpdateMap(m, data);
        return m.needs_update = true;
      } else {
        m = new MicroMap(1, 1, 1, 1);
        UpdateMap(m, data);
        this.maps[name] = m;
        return this.maps[name].name = name;
      }
    } else {
      url = this.url + `maps/${name}.json?v=${version}`;
      m = this.maps[name];
      if (m != null) {
        return m.loadFile(url);
      } else {
        this.maps[name] = LoadMap(url);
        return this.maps[name].name = name;
      }
    }
  }

  updateCode(name, version, data) {
    var req, url;
    if (data != null) {
      this.sources[name] = data;
      if ((this.vm != null) && data !== this.update_memory[name]) {
        this.vm.clearWarnings();
      }
      return this.updateSource(name, data, true);
    } else {
      url = this.url + `ms/${name}.ms?v=${version}`;
      req = new XMLHttpRequest();
      req.onreadystatechange = (event) => {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) {
            this.sources[name] = req.responseText;
            return this.updateSource(name, this.sources[name], true);
          }
        }
      };
      req.open("GET", url);
      return req.send();
    }
  }

  stop() {
    this.stopped = true;
    clearInterval(this.clock_interval);
    return this.audio.cancelBeeps();
  }

  stepForward() {
    if (this.stopped) {
      this.updateCall();
      if (this.vm.runner.tick != null) {
        this.vm.runner.tick();
      }
      return this.watcher.update();
    }
  }

  resume() {
    if (this.stopped) {
      this.stopped = false;
      return this.clock_interval = setInterval((() => {
        return this.clock();
      }), 16);
    }
  }

  clock() {
    return this.timer();
  }

  timer() {
    var ds, dt, fps, i, j, ref, time;
    if (this.stopped) {
      return;
    }
    time = Date.now();
    if (Math.abs(time - this.last_time) > 160) {
      this.last_time = time - 16;
    }
    dt = time - this.last_time;
    this.dt = this.dt * .9 + dt * .1;
    this.last_time = time;
    this.vm.context.global.system.fps = Math.round(fps = 1000 / this.dt);
    this.floating_frame += this.dt * 60 / 1000;
    ds = Math.min(10, Math.round(this.floating_frame - this.current_frame));
    for (i = j = 1, ref = ds; j <= ref; i = j += 1) {
      this.updateCall();
      if (this.vm.runner.tick != null) {
        this.vm.runner.tick();
      }
    }
    this.current_frame += ds;
    if (ds > 0) {
      return this.watcher.update();
    }
  }

  updateControls() {
    var j, len, ref, results, s;
    ref = this.servers;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      s = ref[j];
      results.push(s.update());
    }
    return results;
  }

  updateCall() {
    var err;
    if (this.vm.runner.triggers_controls_update) {
      if (this.vm.runner.updateControls == null) {
        this.vm.runner.updateControls = () => {
          return this.updateControls();
        };
      }
    } else {
      this.updateControls();
    }
    try {
      this.vm.call("serverUpdate");
      this.reportWarnings();
      if (this.vm.error_info != null) {
        err = this.vm.error_info;
        err.type = "serverUpdate";
        return this.listener.reportError(err);
      }
    } catch (error) {
      err = error;
      if (this.report_errors) {
        return this.listener.reportError(err);
      }
    }
  }

  reportWarnings() {
    var key, ref, ref1, ref2, ref3, value;
    if (this.vm != null) {
      ref = this.vm.context.warnings.invoking_non_function;
      for (key in ref) {
        value = ref[key];
        if (!value.reported) {
          value.reported = true;
          this.listener.reportError({
            error: "",
            type: "non_function",
            expression: value.expression,
            line: value.line,
            column: value.column,
            file: value.file
          });
        }
      }
      ref1 = this.vm.context.warnings.using_undefined_variable;
      for (key in ref1) {
        value = ref1[key];
        if (!value.reported) {
          value.reported = true;
          this.listener.reportError({
            error: "",
            type: "undefined_variable",
            expression: value.expression,
            line: value.line,
            column: value.column,
            file: value.file
          });
        }
      }
      ref2 = this.vm.context.warnings.assigning_field_to_undefined;
      for (key in ref2) {
        value = ref2[key];
        if (!value.reported) {
          value.reported = true;
          this.listener.reportError({
            error: "",
            type: "assigning_undefined",
            expression: value.expression,
            line: value.line,
            column: value.column,
            file: value.file
          });
        }
      }
      ref3 = this.vm.context.warnings.assigning_api_variable;
      for (key in ref3) {
        value = ref3[key];
        if (!value.reported) {
          value.reported = true;
          this.listener.reportError({
            error: "",
            type: "assigning_api_variable",
            expression: value.expression,
            line: value.line,
            column: value.column,
            file: value.file
          });
        }
      }
    }
  }

  exit() {
    var err;
    this.stop();
    try {
      // microStudio embedded exit
      this.listener.exit();
    } catch (error) {
      err = error;
    }
    try {
      // TODO: Cordova exit, this might work
      if ((navigator.app != null) && (navigator.app.exitApp != null)) {
        navigator.app.exitApp();
      }
    } catch (error) {
      err = error;
    }
    try {
      // TODO: Electron exit, may already be covered by window.close()

      // Windowed mode exit
      return window.close();
    } catch (error) {
      err = error;
    }
  }

};

this.System = {
  javascript: function(s) {
    var err, f, res;
    try {
      f = eval(`res = function(global) { ${s} }`);
      res = f.call(player.runtime.vm.context.global, player.runtime.vm.context.global);
    } catch (error) {
      err = error;
      console.error(err);
    }
    if (res != null) {
      return res;
    } else {
      return 0;
    }
  }
};

this.Watcher = class Watcher {
  constructor(runtime) {
    this.runtime = runtime;
    this.vm = this.runtime.vm;
  }

  update() {
    if (this.watching_variables) {
      return this.step();
    }
  }

  watch(variables) {
    this.watching = true;
    this.watching_variables = variables;
    this.exclusion_list = [this.vm.context.global.screen, this.vm.context.global.system, this.vm.context.global.keyboard, this.vm.context.global.audio, this.vm.context.global.gamepad, this.vm.context.global.touch, this.vm.context.global.mouse, this.vm.context.global.sprites, this.vm.context.global.maps, this.vm.context.global.sounds, this.vm.context.global.music, this.vm.context.global.assets, this.vm.context.global.asset_manager, this.vm.context.global.fonts, this.vm.context.global.storage];
    if (this.vm.context.global.Function != null) {
      this.exclusion_list.push(this.vm.context.global.Function);
    }
    if (this.vm.context.global.String != null) {
      this.exclusion_list.push(this.vm.context.global.String);
    }
    if (this.vm.context.global.List != null) {
      this.exclusion_list.push(this.vm.context.global.List);
    }
    if (this.vm.context.global.Number != null) {
      this.exclusion_list.push(this.vm.context.global.Number);
    }
    if (this.vm.context.global.Object != null) {
      this.exclusion_list.push(this.vm.context.global.Object);
    }
    if (this.vm.context.global.Image != null) {
      this.exclusion_list.push(this.vm.context.global.Image);
    }
    if (this.vm.context.global.Sound != null) {
      this.exclusion_list.push(this.vm.context.global.Sound);
    }
    if (this.vm.context.global.Sprite != null) {
      this.exclusion_list.push(this.vm.context.global.Sprite);
    }
    if (this.vm.context.global.Map != null) {
      this.exclusion_list.push(this.vm.context.global.Map);
    }
    if (this.vm.context.global.random != null) {
      this.exclusion_list.push(this.vm.context.global.random);
    }
    if (this.vm.context.global.print != null) {
      this.exclusion_list.push(this.vm.context.global.print);
    }
    return this.step();
  }

  stop() {
    return this.watching = false;
  }

  step(variables = this.watching_variables) {
    var index, j, len, res, v, value, vs;
    if (!this.watching) {
      return;
    }
    res = {};
    for (j = 0, len = variables.length; j < len; j++) {
      v = variables[j];
      if (v === "global") {
        value = this.vm.context.global;
      } else {
        vs = v.split(".");
        value = this.vm.context.global;
        index = 0;
        while (index < vs.length && (value != null)) {
          value = value[vs[index++]];
        }
      }
      if ((value != null) && this.exclusion_list.indexOf(value) < 0) {
        res[v] = this.exploreValue(value, 1, 10);
      }
    }
    return this.runtime.listener.postMessage({
      name: "watch_update",
      data: res
    });
  }

  exploreValue(value, depth = 1, array_max = 10) {
    var i, j, key, len, res, v;
    if (value == null) {
      return {
        type: "number",
        value: 0
      };
    }
    if (typeof value === "function" || value instanceof Program.Function || (typeof Routine !== "undefined" && Routine !== null) && value instanceof Routine) {
      return {
        type: "function",
        value: ""
      };
    } else if (typeof value === "object") {
      if (Array.isArray(value)) {
        if (depth === 0) {
          return {
            type: "list",
            value: "",
            length: value.length
          };
        }
        res = [];
        for (i = j = 0, len = value.length; j < len; i = ++j) {
          v = value[i];
          if (i >= 100) {
            break;
          }
          if (this.exclusion_list.indexOf(v) < 0) {
            res[i] = this.exploreValue(v, depth - 1, array_max);
          }
        }
        return res;
      } else {
        if (depth === 0) {
          v = "";
          if (value.classname) {
            v = "class " + value.classname;
          }
          if ((value.class != null) && (value.class.classname != null)) {
            v = value.class.classname;
          }
          return {
            type: "object",
            value: v
          };
        }
        res = {};
        for (key in value) {
          v = value[key];
          if (this.exclusion_list.indexOf(v) < 0) {
            res[key] = this.exploreValue(v, depth - 1, array_max);
          }
        }
        return res;
      }
    } else if (typeof value === "string") {
      return {
        type: "string",
        value: value.length < 43 ? value : value.substring(0, 40) + "..."
      };
    } else if (typeof value === "number") {
      return {
        type: "number",
        value: isFinite(value) ? value : 0
      };
    } else if (typeof value === "boolean") {
      return {
        type: "number",
        value: value ? 1 : 0
      };
    } else {
      return {
        type: "unknown",
        value: value
      };
    }
  }

};

this.MicroMap = (function() {
  function MicroMap(width, height, block_width, block_height) {
    this.width = width;
    this.height = height;
    this.block_width = block_width;
    this.block_height = block_height;
    this.sprites = window.player.runtime.sprites;
    this.map = [];
    this.ready = true;
    this.clear();
  }

  MicroMap.prototype.clear = function() {
    var i, j, k, l, ref1, ref2;
    for (j = k = 0, ref1 = this.height - 1; k <= ref1; j = k += 1) {
      for (i = l = 0, ref2 = this.width - 1; l <= ref2; i = l += 1) {
        this.map[i + j * this.width] = null;
      }
    }
  };

  MicroMap.prototype.set = function(x, y, ref) {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      if (typeof ref === "string") {
        ref = ref.replace(/\//g, "-");
      }
      this.map[x + y * this.width] = ref;
      return this.needs_update = true;
    }
  };

  MicroMap.prototype.get = function(x, y) {
    var c;
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
      return 0;
    }
    c = this.map[x + y * this.width];
    if (typeof c === "string") {
      c = c.replace(/-/g, "/");
    }
    return c || 0;
  };

  MicroMap.prototype.getCanvas = function() {
    if ((this.canvas == null) || this.needs_update) {
      this.update();
    }
    return this.canvas;
  };

  MicroMap.prototype.draw = function(context, x, y, w, h) {
    var a, c, ctx, k, len, len1, ref1, time;
    if ((this.animated != null) && this.animated.length > 0) {
      time = Date.now();
      if ((this.buffer == null) || this.buffer.width !== this.block_width * this.width || this.buffer.height !== this.block_height * this.height) {
        console.info("creating buffer");
        this.buffer = document.createElement("canvas");
        this.buffer.width = this.block_width * this.width;
        this.buffer.height = this.block_height * this.height;
      }
      ctx = this.buffer.getContext("2d");
      ctx.clearRect(0, 0, this.buffer.width, this.buffer.height);
      ctx.drawImage(this.getCanvas(), 0, 0);
      ref1 = this.animated;
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        a = ref1[k];
        len = a.sprite.frames.length;
        c = a.sprite.frames[Math.floor(time / 1000 * a.sprite.fps) % len].canvas;
        if (a.tx != null) {
          ctx.drawImage(c, a.tx, a.ty, this.block_width, this.block_height, a.x, a.y, this.block_width, this.block_height);
        } else {
          ctx.drawImage(c, a.x, a.y, this.block_width, this.block_height);
        }
      }
      context.drawImage(this.buffer, x, y, w, h);
    } else {
      context.drawImage(this.getCanvas(), x, y, w, h);
    }
  };

  MicroMap.prototype.update = function() {
    var a, c, context, i, index, j, k, l, ref1, ref2, s, sprite, tx, ty, xy;
    this.needs_update = false;
    if (this.canvas == null) {
      this.canvas = document.createElement("canvas");
    }
    if (this.canvas.width !== this.width * this.block_width || this.canvas.height !== this.height * this.block_height) {
      this.canvas.width = this.width * this.block_width;
      this.canvas.height = this.height * this.block_height;
    }
    context = this.canvas.getContext("2d");
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.animated = [];
    for (j = k = 0, ref1 = this.height - 1; k <= ref1; j = k += 1) {
      for (i = l = 0, ref2 = this.width - 1; l <= ref2; i = l += 1) {
        index = i + (this.height - 1 - j) * this.width;
        s = this.map[index];
        if ((s != null) && s.length > 0) {
          s = s.split(":");
          sprite = this.sprites[s[0]];
          if (sprite == null) {
            sprite = this.sprites[s[0].replace(/-/g, "/")];
          }
          if ((sprite != null) && (sprite.frames[0] != null)) {
            if (sprite.frames.length > 1) {
              a = {
                x: this.block_width * i,
                y: this.block_height * j,
                w: this.block_width,
                h: this.block_height,
                sprite: sprite
              };
              if (s[1] != null) {
                xy = s[1].split(",");
                a.tx = xy[0] * this.block_width;
                a.ty = xy[1] * this.block_height;
              }
              this.animated.push(a);
              continue;
            }
            if (s[1] != null) {
              xy = s[1].split(",");
              tx = xy[0] * this.block_width;
              ty = xy[1] * this.block_height;
              c = sprite.frames[0].canvas;
              if ((c != null) && c.width > 0 && c.height > 0) {
                context.drawImage(c, tx, ty, this.block_width, this.block_height, this.block_width * i, this.block_height * j, this.block_width, this.block_height);
              }
            } else {
              c = sprite.frames[0].canvas;
              if ((c != null) && c.width > 0 && c.height > 0) {
                context.drawImage(c, this.block_width * i, this.block_height * j);
              }
            }
          }
        }
      }
    }
  };

  MicroMap.prototype.loadFile = function(url) {
    var req;
    req = new XMLHttpRequest();
    req.onreadystatechange = (function(_this) {
      return function(event) {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) {
            _this.load(req.responseText, _this.sprites);
            return _this.update();
          }
        }
      };
    })(this);
    req.open("GET", url);
    return req.send();
  };

  MicroMap.prototype.load = function(data, sprites) {
    var i, j, k, l, ref1, ref2, s;
    data = JSON.parse(data);
    this.width = data.width;
    this.height = data.height;
    this.block_width = data.block_width;
    this.block_height = data.block_height;
    for (j = k = 0, ref1 = data.height - 1; k <= ref1; j = k += 1) {
      for (i = l = 0, ref2 = data.width - 1; l <= ref2; i = l += 1) {
        s = data.data[i + j * data.width];
        if (s > 0) {
          this.map[i + j * data.width] = data.sprites[s];
        } else {
          this.map[i + j * data.width] = null;
        }
      }
    }
  };

  MicroMap.prototype.clone = function() {
    var i, j, k, l, map, ref1, ref2;
    map = new MicroMap(this.width, this.height, this.block_width, this.block_height, this.sprites);
    for (j = k = 0, ref1 = this.height - 1; k <= ref1; j = k += 1) {
      for (i = l = 0, ref2 = this.width - 1; l <= ref2; i = l += 1) {
        map.map[i + j * this.width] = this.map[i + j * this.width];
      }
    }
    map.needs_update = true;
    return map;
  };

  MicroMap.prototype.copyFrom = function(map) {
    var i, j, k, l, ref1, ref2;
    this.width = map.width;
    this.height = map.height;
    this.block_width = map.block_width;
    this.block_height = map.block_height;
    for (j = k = 0, ref1 = this.height - 1; k <= ref1; j = k += 1) {
      for (i = l = 0, ref2 = this.width - 1; l <= ref2; i = l += 1) {
        this.map[i + j * this.width] = map.map[i + j * this.width];
      }
    }
    this.update();
    return this;
  };

  return MicroMap;

})();

this.LoadMap = function(url, loaded) {
  var map, req;
  map = new MicroMap(1, 1, 1, 1);
  map.ready = false;
  req = new XMLHttpRequest();
  req.onreadystatechange = (function(_this) {
    return function(event) {
      if (req.readyState === XMLHttpRequest.DONE) {
        map.ready = true;
        if (req.status === 200) {
          UpdateMap(map, req.responseText);
        }
        map.needs_update = true;
        if (loaded != null) {
          return loaded();
        }
      }
    };
  })(this);
  req.open("GET", url);
  req.send();
  return map;
};

this.UpdateMap = function(map, data) {
  var i, j, k, l, ref1, ref2, s;
  data = JSON.parse(data);
  map.width = data.width;
  map.height = data.height;
  map.block_width = data.block_width;
  map.block_height = data.block_height;
  for (j = k = 0, ref1 = data.height - 1; k <= ref1; j = k += 1) {
    for (i = l = 0, ref2 = data.width - 1; l <= ref2; i = l += 1) {
      s = data.data[i + j * data.width];
      if (s > 0) {
        map.map[i + j * data.width] = data.sprites[s];
      } else {
        map.map[i + j * data.width] = null;
      }
    }
  }
  map.needs_update = true;
  return map;
};

this.SaveMap = function(map) {
  var data, i, index, j, k, l, list, m, n, o, ref1, ref2, ref3, ref4, s, table;
  index = 1;
  list = [0];
  table = {};
  for (j = k = 0, ref1 = map.height - 1; k <= ref1; j = k += 1) {
    for (i = l = 0, ref2 = map.width - 1; l <= ref2; i = l += 1) {
      s = map.map[i + j * map.width];
      if ((s != null) && s.length > 0 && (table[s] == null)) {
        list.push(s);
        table[s] = index++;
      }
    }
  }
  m = [];
  for (j = n = 0, ref3 = map.height - 1; n <= ref3; j = n += 1) {
    for (i = o = 0, ref4 = map.width - 1; o <= ref4; i = o += 1) {
      s = map.map[i + j * map.width];
      m[i + j * map.width] = (s != null) && s.length > 0 ? table[s] : 0;
    }
  }
  data = {
    width: map.width,
    height: map.height,
    block_width: map.block_width,
    block_height: map.block_height,
    sprites: list,
    data: m
  };
  return JSON.stringify(data);
};

this.Watch = (function() {
  function Watch(app) {
    var fn, i, len, ref, t;
    this.app = app;
    this.runwindow = this.app.runwindow;
    this.runwindow.addMessageListener("watch_update", (function(_this) {
      return function(msg) {
        return _this.watchUpdate(msg);
      };
    })(this));
    this.types = ["number", "string", "function", "object", "list"];
    ref = this.types;
    fn = (function(_this) {
      return function(t) {
        _this["filtered_type_" + t] = false;
        return document.getElementById("debug-watch-type-" + t).addEventListener("click", function() {
          _this["filtered_type_" + t] = !_this["filtered_type_" + t];
          if (_this["filtered_type_" + t]) {
            document.getElementById("debug-watch-type-" + t).classList.add("filtered");
          } else {
            document.getElementById("debug-watch-type-" + t).classList.remove("filtered");
          }
          return _this.updateFilters();
        });
      };
    })(this);
    for (i = 0, len = ref.length; i < len; i++) {
      t = ref[i];
      fn(t);
    }
    document.getElementById("debug-watch-filter").addEventListener("input", (function(_this) {
      return function() {
        _this.text_filter = document.getElementById("debug-watch-filter").value;
        return _this.updateFilters();
      };
    })(this));
    this.reset();
    this.app.runwindow.addListener((function(_this) {
      return function(event) {
        return _this.runtimeEvent(event);
      };
    })(this));
  }

  Watch.prototype.reset = function() {
    this.watch_lines = {};
    this.watch_list = ["global"];
    this.text_filter = "";
    document.getElementById("debug-watch-filter").value = "";
    return document.getElementById("debug-watch-content").innerHTML = "";
  };

  Watch.prototype.start = function() {
    this.started = true;
    return this.runwindow.postMessage({
      name: "watch",
      list: this.watch_list
    });
  };

  Watch.prototype.stop = function() {
    this.started = false;
    return this.runwindow.postMessage({
      name: "stop_watching"
    });
  };

  Watch.prototype.addWatch = function(w) {
    console.info("adding watch: " + w);
    this.watch_list.push(w);
    this.watch_list_updated = true;
    return this.start();
  };

  Watch.prototype.removeWatch = function(w) {
    var index;
    console.info("removing watch: " + w);
    index = this.watch_list.indexOf(w);
    if (w.indexOf(".") > 0) {
      delete this.watch_lines[w];
    }
    if (index >= 0) {
      this.watch_list.splice(index, 1);
      return this.start();
    }
  };

  Watch.prototype.watchUpdate = function(msg) {
    var alive, data, e, key, ref, ref1, set_key, set_value, value;
    if (!this.started) {
      return;
    }
    data = msg.data;
    alive = {};
    for (set_key in data) {
      set_value = data[set_key];
      if (set_key !== "global") {
        if (this.watch_lines.hasOwnProperty(set_key)) {
          alive[set_key] = true;
          this.watch_lines[set_key].updateContents(set_value);
        }
      }
    }
    e = document.getElementById("debug-watch-content");
    ref = data.global;
    for (key in ref) {
      value = ref[key];
      if (this.watch_lines.hasOwnProperty(key)) {
        this.watch_lines[key].updateValue(value);
      } else {
        this.watch_lines[key] = new WatchLine(this, e, key, value);
      }
      alive[key] = true;
    }
    if (!this.watch_list_updated) {
      ref1 = this.watch_lines;
      for (key in ref1) {
        value = ref1[key];
        if (!alive[key]) {
          value.remove();
          e.removeChild(value.element);
          delete this.watch_lines[key];
        }
      }
    }
    this.watch_list_updated = false;
  };

  Watch.prototype.isFiltered = function(w) {
    var v;
    v = w.value;
    if (this["filtered_type_" + v.type]) {
      return true;
    }
    if ((this.text_filter != null) && this.text_filter.length > 0 && w.prefixed.indexOf(this.text_filter) < 0) {
      return true;
    }
    return false;
  };

  Watch.prototype.updateFilters = function() {
    var key, ref, results, value;
    ref = this.watch_lines;
    results = [];
    for (key in ref) {
      value = ref[key];
      results.push(value.filterUpdate());
    }
    return results;
  };

  Watch.prototype.runtimeEvent = function(event) {
    switch (event) {
      case "play":
      case "reload":
        return this.reset();
      case "started":
        if (!this.app.appui.debug_splitbar.closed2) {
          this.reset();
          return this.start();
        }
        break;
      case "exit":
        this.started = false;
        return this.reset();
    }
  };

  return Watch;

})();

this.WatchLine = (function() {
  function WatchLine(watch, parent_element, variable, value1, prefix) {
    this.watch = watch;
    this.parent_element = parent_element;
    this.variable = variable;
    this.value = value1;
    this.prefix = prefix;
    this.prefixed = this.prefix != null ? this.prefix + "." + this.variable : this.variable;
    this.element = document.createElement("div");
    this.element.classList.add("watch-line");
    this.element.innerHTML = "<div class=\"watch-line-name\"><i class=\"fa\"></i> " + this.variable + "</div>\n<div class=\"watch-line-value\">" + (this.textValue()) + "</div>";
    this.element.classList.add(this.value.type);
    this.parent_element.appendChild(this.element);
    this.element.querySelector(".watch-line-value").addEventListener("click", (function(_this) {
      return function() {
        return _this.editValue();
      };
    })(this));
    this.element.querySelector("i").addEventListener("click", (function(_this) {
      return function() {
        var ref;
        if ((ref = _this.value.type) === "object" || ref === "list") {
          if (!_this.open) {
            _this.open = true;
            _this.watch.addWatch(_this.prefixed);
            _this.watch.watch_lines[_this.prefixed] = _this;
            _this.element.classList.add("open");
            if (_this.content != null) {
              return _this.content.style.display = "block";
            }
          } else {
            _this.open = false;
            _this.watch.removeWatch(_this.prefixed);
            _this.element.classList.remove("open");
            _this.watch_lines = {};
            if (_this.content != null) {
              _this.element.removeChild(_this.content);
              return _this.content = null;
            }
          }
        }
      };
    })(this));
    this.hidden = false;
    this.filterUpdate();
    this.watch_lines = {};
  }

  WatchLine.prototype.remove = function() {
    this.watch.removeWatch(this.prefixed);
    this.watch_lines = {};
    if (this.content != null) {
      this.element.removeChild(this.content);
      this.content = null;
    }
    this.element.classList.remove("open");
    return this.open = false;
  };

  WatchLine.prototype.textValue = function() {
    switch (this.value.type) {
      case "string":
        return '"' + this.value.value + '"';
      case "function":
        return "function()";
      case "list":
        return "[list:" + this.value.length + "]";
      case "object":
        return this.value.value || "object .. end";
      default:
        return this.value.value;
    }
  };

  WatchLine.prototype.updateValue = function(value) {
    var ref;
    if (value.type !== this.value.type) {
      this.element.classList.remove(this.value.type);
      this.element.classList.add(value.type);
      this.value.type = value.type;
      if ((this.content != null) && ((ref = this.value.type) !== "object" && ref !== "list")) {
        this.remove();
      }
    }
    if (value.value !== this.value.value || value.length !== this.value.length) {
      this.value.value = value.value;
      this.value.length = value.length;
      return this.element.querySelector(".watch-line-value").innerText = this.textValue();
    }
  };

  WatchLine.prototype.updateContents = function(data) {
    var active, key, ref, results, value;
    if (!this.open) {
      return;
    }
    if (!this.content) {
      this.content = document.createElement("div");
      this.content.classList.add("watch-line-content");
      this.element.appendChild(this.content);
    }
    active = {};
    for (key in data) {
      value = data[key];
      if (this.watch_lines.hasOwnProperty(key)) {
        this.watch_lines[key].updateValue(value);
      } else {
        this.watch_lines[key] = new WatchLine(this.watch, this.content, key, value, this.prefixed);
      }
      active[key] = true;
    }
    ref = this.watch_lines;
    results = [];
    for (key in ref) {
      value = ref[key];
      if (!active[key]) {
        delete this.watch_lines[key];
        value.remove();
        if (this.content != null) {
          results.push(this.content.removeChild(value.element));
        } else {
          results.push(void 0);
        }
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  WatchLine.prototype.filterUpdate = function() {
    var key, ref, results, value;
    if (this.hidden !== this.watch.isFiltered(this)) {
      this.hidden = !this.hidden;
      this.element.style.display = this.hidden ? "none" : "block";
    }
    ref = this.watch_lines;
    results = [];
    for (key in ref) {
      value = ref[key];
      results.push(value.filterUpdate());
    }
    return results;
  };

  WatchLine.prototype.editValue = function() {
    var input;
    if (this.value.type === "number" || this.value.type === "string") {
      input = document.createElement("input");
      input.type = "text";
      input.value = this.value.value;
      this.element.appendChild(input);
      input.addEventListener("blur", (function(_this) {
        return function() {
          return _this.element.removeChild(input);
        };
      })(this));
      input.addEventListener("keydown", (function(_this) {
        return function(event) {
          var err;
          if (event.key === "Enter") {
            event.preventDefault();
            if (input.value !== _this.value.value) {
              try {
                if (_this.value.type === "number") {
                  if (isFinite(parseFloat(input.value))) {
                    _this.watch.app.runwindow.runCommand(_this.prefixed + " = " + input.value, function() {});
                  }
                } else if (_this.value.type === "string") {
                  _this.watch.app.runwindow.runCommand(_this.prefixed + " = \"" + input.value + "\" ", function() {});
                }
              } catch (error) {
                err = error;
                console.error(err);
              }
            }
            return input.blur();
          }
        };
      })(this));
      return input.focus();
    }
  };

  return WatchLine;

})();

this.Player = class Player {
  constructor(listener) {
    this.listener = listener;
    //src = document.getElementById("code").innerText
    this.source_count = 0;
    this.sources = {};
    this.resources = resources;
    this.request_id = 1;
    this.pending_requests = {};
    this.sources.main = server_code;
    // player = new Player() must return before the server is started
    // to ensure global.player is defined
    setTimeout((() => {
      return this.start();
    }), 1);
  }

  start() {
    this.runtime = new Runtime("", this.sources, resources, this);
    this.terminal = new Terminal(this);
    this.terminal.start();
    this.runtime.start();
    return setInterval((() => {
      return this.runtime.clock();
    }), 16);
  }

  runCommand(cmd) {}

  reportError(err) {
    return this.terminal.error(err);
  }

  log(text) {
    return this.terminal.echo(text);
  }

  exit() {}

  call(name, args) {
    if ((this.runtime != null) && (this.runtime.vm != null)) {
      return this.runtime.vm.call(name, args);
    }
  }

  setGlobal(name, value) {
    if ((this.runtime != null) && (this.runtime.vm != null)) {
      return this.runtime.vm.context.global[name] = value;
    }
  }

  exec(command, callback) {
    if (this.runtime != null) {
      return this.runtime.runCommand(command, callback);
    }
  }

  postMessage(message) {
    return console.info(JSON.stringify(message));
  }

};

this.Terminal = class Terminal {
  constructor(runwindow) {
    this.runwindow = runwindow;
  }

  start() {}

  validateLine(v) {}

  setTrailingCaret() {}

  echo(text, scroll = false, classname) {
    return console.info(text);
  }

  error(text, scroll = false) {
    return console.error(text);
  }

  clear() {}

};



for (const prop in this) {
  global[prop] = this[prop] ;
}

var fs = require("fs") ;
fs.readFile("./config.json",(err,data)=> {
  global.server_port = process.env.PORT || 3000;
  if (! err) {
    console.info("config.json loaded") ;
    try {
      var config = JSON.parse(data) ;
      global.server_port = config.port || 3000 ;
    } catch (err) {
      console.info("could not parse config file") ;
    }
  } else {
    console.info("could not read config file") ;
  }
  console.info( "starting with port set to: "+global.server_port ) ;
  start() ;
}) ;
