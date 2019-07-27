<template>
  <div>
    <div style="overflow-y: auto">
      <group label-width="5em">
        <cell primary="content" :is-link="true">
          <div slot="value">
            parking parking parking parking parking parking
          </div>
          <img class="park-img" slot="title" :src="parkImg"/>
        </cell>
      </group>
      <group label-width="5em">
        <cell primary="content" :is-link="true" value=" fetch fetch fetch fetch fetch fetch fetch fetch">
          <img class="park-img" slot="title" :src="fetchImg"/>
        </cell>
      </group>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      parkImg: require('../../assets/image/park.png'),
      fetchImg: require('../../assets/image/fetch.png'),
      imgSrc: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
    }
  },
  methods: {

  }
}
</script>

<style>
  .sub-item {
    color: #888;
  }
  .slide {
    padding: 0 20px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
</style>
