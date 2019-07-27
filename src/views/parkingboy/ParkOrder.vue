<template>
    <group >
      <cell :title="'车牌号-粤C8888'"  inline-desc='南方软件园-B5'>
            <div>
                <x-button plain type="primary" @click="robOrder" v-show="!isRobbing">抢单</x-button>
                <spinner type="ripple" v-show="isRobbing"></spinner>
            </div>
      </cell>
    </group>
</template>
<script>
export default {
    data(){
        return{
            isRobbing:false
        }
    },
    methods:{
        robOrder(){
            this.isRobbing=true
        }
    }
}
</script>
