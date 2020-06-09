<template>
    <div>
      
        <button  @click="change">+</button> 
        <h1>{{$store.getters.getMsg}}</h1>
    </div>
</template>
<script>
export default {
    methods:{
        change(){
            // 不能在这里面改变msg
             //this.$store.state.msg++
             // 一定要通过调用 vuex 本身提供得改变数据得方法来改变数据
                // 如果有异步得要求 不能这样写!
                // 要先调用 action中得方法
            // this.$store.commit('increment',"change")

            // 
            this.$store.dispatch('increment',"change")
        }
    }
}
</script>
<style lang="scss" scoped>

</style>