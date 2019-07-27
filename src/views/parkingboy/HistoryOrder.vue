<template>
    <cell :title="'车牌号-粤C8888'"  inline-desc='2019-07-27 18:30:00'>
            <div>
                <x-button plain type="primary"  @click.native="robOrder">详情</x-button>
            </div>
      </cell>
</template>

<script>
export default {
      methods:{
        robOrder(){
            this.$router.push({path:'/HistoryOrderDetail'})
        }
    }
}
</script>

<style>

</style>
