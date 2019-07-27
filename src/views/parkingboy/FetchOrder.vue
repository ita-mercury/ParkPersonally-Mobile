<template>
    <group >
      <cell :title="'车牌号-粤C8888'"  inline-desc='停车场A 39号'>
          <div>
              <x-button plain type="primary" @click.native="robOrder" v-show="!isRobbing">抢单</x-button>
              <spinner type="ripple" v-show="isRobbing"></spinner>
          </div>
      </cell>
    </group>
</template>

<script>
export default {
  data () {
    return {
      isRobbing: false
    }
  },
  methods: {
    robOrder () {
      this.$router.push({path: '/FetchOrderDetail'})
    }
  }
}
</script>

<style>

</style>
