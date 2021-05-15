Component({
    properties: {
        titleZero: { 
            type: String,
            value: 'Open'
        },
        titleOne: { 
            type: String,
            value: 'Closed'
        }
    },

    data: {
        btn1Class: 'btn-on',
        btn2Class: 'btn-off'
    },

    methods: {
        tapZero: function() {
            this.setData({
                btn1Class: 'btn-on',
                btn2Class: 'btn-off'
            })
            this.triggerEvent('click', this.properties.titleZero)
        },
        tapOne: function() {
            this.setData({
                btn1Class: 'btn-off',
                btn2Class: 'btn-on'
            })
            this.triggerEvent('click', this.properties.titleOne)
        }
    }
})