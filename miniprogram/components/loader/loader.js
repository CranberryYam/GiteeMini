Component({
    properties: {
        text: { 
            type: String,
            value: '正在为您努力加载哦 😊'
        }
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