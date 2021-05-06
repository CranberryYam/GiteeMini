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
            value: ['bug', 'test', 'performance', 'task', 'serious']
        },
    },
    lifetimes: {
        attached: function() {
            // 在组件实例进入页面节点树时执行
        }
    },
    // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
    attached: function() {
    
    }
})
