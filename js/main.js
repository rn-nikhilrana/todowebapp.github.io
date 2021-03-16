var d = new Date();
document.getElementById('todayDate').value = d.toLocaleDateString();

$(function () {
    var i=0;
    $('#add').on('click',function() {
        i++;
        var value = $('#inputText').val();
        if(value === "")
        {
            alert("Please fill up.");
        }
        else{
            $('#overflow').append('<h5 class="rounded my-2" id="rem'+i+'"> '+value+' <i class="fas fa-times" onclick="remv('+i+')"></i></h5>');
        }
    })
});
function remv(id)
{
    $('#rem'+id).remove();
}


var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });