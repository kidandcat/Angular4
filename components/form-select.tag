<form-select>
    <div class="mui-select">
        <select id="{id}">
          <option if={type == 'flavor'} each={options} value="{ID}">
            {Name} - {VCPUs} CPUs, {RAM}MB ram, {Disk}GB Disk
          </option>
          <option if={type == 'image'} each={options} value="{ID}">
            {Name}
          </option>
        </select>
        <label for="{id}">{label}:</label>
    </div>

    <script>
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
    </script>

</form-select>
