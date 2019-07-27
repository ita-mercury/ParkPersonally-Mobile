<template>
    <group >
      <cell :title="'车牌号-粤C8888'"  inline-desc='南方软件园-B5'>
            <div>
                <x-button plain type="primary" @click.native="robOrder"  v-show="!order.isRobbing">抢单</x-button>
                <spinner type="ripple" v-show="order.isRobbing"></spinner>
            </div>
      </cell>
    </group>
</template>
<script>
export default {
    data(){
        return{
            order:{
                isRobbing:false
            }
            
        }
    },
    methods:{
        robOrder(){
            this.order.isRobbing=true
        }
    }
}
</script>
