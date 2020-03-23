/*
var i = 0;
var j = 0;
var tag = '| Student | Web Developer | UI Designer |';
var txt = 'Just another guy, building random things!'; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */
/*
window.onload = function typetag() {
  if (i < tag.length) {
    document.getElementById("info-tag").innerHTML += tag.charAt(i);
    i++;
    setTimeout(typetag, speed);
  }
};
*/
$('.typist')
	.typist({
		speed: 15,
		text: '| Student | Web Developer | UI Designer\n'
	})
  .typistAdd('Just another guy, building random things!');
  

  