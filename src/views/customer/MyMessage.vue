<template>
  <div>
      <card>
      <div slot="content" class="card-padding">
        <div>
        <img src="../../assets/image/item6.png" style="display:inline-block;">
        <span style="color:#999;font-size:12px;">2019年07月08日 18:09</span>
        </div>
        <p style="font-size:14px;line-height:1.2;">停车员已经将您的车停放好了！</p>
      </div>
    </card>
    <card>
      <div slot="content" class="card-padding">
        <div>
        <img src="../../assets/image/item6.png" style="display:inline-block;">
        <span style="color:#999;font-size:12px;">2019年07月08日 18:09</span>
        </div>
        <p style="font-size:14px;line-height:1.2;">停车员已经将您的车取好了！</p>
      </div>
    </card>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
.vux-card-content{
  margin:10px
}
.card-padding span{
  float:right;
}
.card-padding p{
  margin:1px 0 10px 30px;
}
.weui-panel.weui-panel_access{
  margin-top:0;
}
</style>
