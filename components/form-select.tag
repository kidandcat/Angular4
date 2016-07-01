<form-select>
    <div>
      <label for="{id}">{label}:</label>
        <div class="mui-textfield">
            <input type="{type}" id="{id}" placeholder={placeholder}>
        </div>
    </div>

    <style scoped>
        label {
            margin-right: 15px;
        }


    </style>

    <script>
        this.type = opts.type;
        this.label = opts.label;
        this.id = opts.id || this.label;
        this.placeholder = opts.placeholder;

        this.options
    </script>

</form-select>
