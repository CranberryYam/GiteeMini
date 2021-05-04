Component({
    properties: {
        repo_name: { 
            type: String,
            value: 'Repo Name'
        },
        title: { 
            type: String,
            value: 'Title is loading...'
        },
        state: { 
            type: String,
            value: '开启的'
        },
        time: { 
            type: String,
            value: '1小时前'
        },
        comments: { 
            type: Number,
            value: 0
        },
        labels: { 
            type: Array,
            value: ['bug']
        },
    }
})
