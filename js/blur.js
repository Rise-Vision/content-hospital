var content = document.querySelector('.content');
var duplicate = content.cloneNode(true);
var contentBlurred = document.createElement('div');
contentBlurred.className = 'content-blurred';
contentBlurred.appendChild(duplicate);

var blurBox = document.querySelector('.blur-box');
blurBox.insertBefore(contentBlurred, blurBox.firstChild);

$('.content-wrapper .content').scroll(function(){
  $(duplicate).scrollTop($('.content').scrollTop());
  $(duplicate).scrollLeft($('.content').scrollLeft()); 
});

$(window).on('resize',function(){
  $(duplicate).css({
    'width':window.innerWidth,
    'height':window.innerHeight,
    'margin-Top':-blurBox.offsetTop,
    'margin-left':-blurBox.offsetLeft
  });  
}).trigger('resize');

//console.log(duplicate);


// offset to demo blurring
//content.scrollTop = 5;