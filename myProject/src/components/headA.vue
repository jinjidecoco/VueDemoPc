<template>
	<div class='header'>
	    <span>{{ msg }}</span>	
	</div>
</template>
<script>

	export default {
	  name: 'headA',
	  data() {
	    return {
	      msg: '我的计划表'
	    }
	  },
	  methods:{
	  	showtime:function(){
           var oDate= new Date();
           Date.getMonth() +1;
           Date.getDate();
	  	}
	  }
}
</script>
<style lang='less'>
	.header{
		background:#fafafa;
		height:60px;
		line-height: 60px;
	}
    
</style>