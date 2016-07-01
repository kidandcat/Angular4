window.onload = function() {
    var tags = riot.mount('*');
    tags[0].name = 'Jairo';
    riot.update();
    console.log('tags', tags);
}
