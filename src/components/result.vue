<template>
    <div>
        <br>
         <br> <br> <br> <br> <br> <br>
          <br> <br> <br> <br>
           <br> <br> <br> <br>
            <br> <br> <br>
        <h1>结果为{{$store.state.msg}}</h1>
    </div>
</template>
<script>
export default {
    methods:{
        change(){
            // 改变msg
            console.log(this.$store)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>