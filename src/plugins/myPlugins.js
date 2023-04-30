let myPlugins = {}


myPlugins.install = function (Vue , options){
    console.log("调用自定义插件" , Vue , options)
    //Vue.prototype.$bus 任何组件都可以使用
    //Vue.directive  全局指令
    //Vue.component  全局组件
    //Vue.filter  全局过滤器
    Vue.directive(options.name , (element , binding) => {
        console.log(element , binding)

        //大小写转换
        element.innerHTML = binding.value.toUpperCase()

        //binding.modifiers修饰符
    })
}


export default myPlugins