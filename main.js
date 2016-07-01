window.onload = function() {
    var tags = riot.mount('*');
    var submit = document.querySelector('#submit');
    submit.addEventListener('click', function(){
      activateModal();
      var name = document.querySelector('#name').value;
      var email = document.querySelector('#email').value;
      var flavor = document.querySelector('#flavor');
      flavor = flavor.options[flavor.selectedIndex].value;
      var image = document.querySelector('#image');
      image = image.options[image.selectedIndex].value;

      get('http://192.168.0.30:7000/new/instance/'+flavor+'/'+image+'/'+name+'/'+email, function(res){
        deactivateModal();
        console.log('Res', res);
        document.querySelector('#name').value = '';
        document.querySelector('#email').value = '';
      });
    });



}

function get(url, cb) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
               cb(xmlhttp.response);
           }
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
