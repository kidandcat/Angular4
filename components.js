riot.tag2('app-bar', '<div class="mui-appbar"> <yield></yield> </div>', '', '', function(opts) {
});

riot.tag2('form-field', '<div class="mui-textfield mui-textfield--float-label"> <input type="{type}" id="{id}" placeholder="{placeholder}"> <label for="{id}">{label}:</label> </div>', '', '', function(opts) {
        this.type = opts.type;
        this.label = opts.label;
        this.id = opts.pid || this.label;
        this.placeholder = opts.placeholder;
});

riot.tag2('form-select', '<div class="mui-select"> <select id="{id}"> <option if="{type == \'flavor\'}" each="{options}" value="{ID}"> {Name} - {VCPUs} CPUs, {RAM}MB ram, {Disk}GB Disk </option> <option if="{type == \'image\'}" each="{options}" value="{ID}"> {Name} </option> </select> <label for="{id}">{label}:</label> </div>', '', '', function(opts) {
        var self = this;
        this.label = opts.label;
        this.id = opts.pid || this.label;
        this.options = '';
        this.type = opts.type;
        var url = '';
        if(opts.type == 'flavor'){
          url = 'http://192.168.0.30:7000/list/flavor';
        }else if(opts.type == 'image'){
          url = 'http://192.168.0.30:7000/list/image';
        }

        get(url, function(res){
          self.options = JSON.parse(res);
          self.update();
        });
});

riot.tag2('main-form', '<div class="mui-container"> <div class="mui-panel"> <form-field type="text" pid="name" label="Nombre de la maquina"></form-field> <form-field pid="email" label="Email" type="email"></form-field> <form-select type="flavor" pid="flavor" label="Flavor"></form-select> <form-select type="image" pid="image" label="Image"></form-select> <button class="mui--z2 mui-btn mui-btn--primary" id="submit">Crear Maquina Virtual</button> </div> </div>', '', '', function(opts) {
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
        window.deactivateModal = function() {
          mui.overlay('off');
        }
});
