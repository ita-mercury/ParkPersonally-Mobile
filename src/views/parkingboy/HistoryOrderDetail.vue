<template>
    <group>
       <x-input title="订单类型" v-model="orderType" disabled="false"></x-input>
       <x-input title="车牌号" v-model="number" disabled="false"></x-input>
       <x-input title="车辆位置" v-model="position" disabled="false"></x-input>
       <x-input title="交车地址" v-model="address" disabled="false"></x-input>
       <x-input title="车主电话" v-model="phone" disabled="false"></x-input>
       <x-input title="订单生成时间" v-model="time" disabled="false"></x-input>
    </group>
</template>

<script>
export default {
     data () {
          return {
              orderType:'停车订单',
              number:'车牌号-粤C8888',
              position:'停车场A 39号',
              address:'南方软件园-B5',
              phone:'18711345569',
              time:'2019-07-27 18:30:00',
              
          }
        },
        methods: {
        
        },
}
</script>

<style>

</style>
