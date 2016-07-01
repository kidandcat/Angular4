riot.tag2('app-bar', '<div class="mui-appbar"> <yield></yield> </div>', '', '', function(opts) {
});

riot.tag2('form-field', '<div class="mui-textfield mui-textfield--float-label"> <input type="{type}" id="{id}" placeholder="{placeholder}"> <label for="{id}">{label}:</label> </div>', 'form-field label,[riot-tag="form-field"] label,[data-is="form-field"] label{ margin-right: 15px; }', '', function(opts) {
        this.type = opts.type;
        this.label = opts.label;
        this.id = opts.id || this.label;
        this.placeholder = opts.placeholder;
});

riot.tag2('form-select', '<div> <label for="{id}">{label}:</label> <div class="mui-textfield"> <input type="{type}" id="{id}" placeholder="{placeholder}"> </div> </div>', 'form-select label,[riot-tag="form-select"] label,[data-is="form-select"] label{ margin-right: 15px; }', '', function(opts) {
        this.type = opts.type;
        this.label = opts.label;
        this.id = opts.id || this.label;
        this.placeholder = opts.placeholder;

        this.options
});

riot.tag2('main-form', '<div class="mui-container"> <div class="mui-panel"> <form-field type="text" id="name" label="Nombre de la maquina"></form-field> <form-field id="email" label="Email" type="email"></form-field> <form-field type="text" id="flavors" label="Flavor"></form-field> <form-field type="select" id="flavors" label="Flavor"></form-field> <button type="submit" class="mui--z2 mui-btn mui-btn--primary">Crear Maquina Virtual</button> </div> </div>', '', '', function(opts) {
});

riot.tag2('modal-loading', '', '', '', function(opts) {
        window.activateModal = function() {

            var loader = document.createElement('div');
            loader.style.position = "fixed";
            loader.style.top = '50%';
            loader.style.left = '50%';
            loader.style.transform = 'translate(-50%,-50%)';
            var img = document.createElement('img');
            img.src = 'img/ring.svg';
            loader.appendChild(img);

            mui.overlay('on', loader);
        }
});
