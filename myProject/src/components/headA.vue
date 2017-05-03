<template>
	<div class='header'>
	    <span>{{ msg }}</span>	
	</div>
</template>
<script >

	export default {
	  name: 'headA',
	  data() {
	    return {
	      msg: '我的计划表'
	    }
	  }
}
</script>
<style lang='less'>
	.header{
		background:#f1f5f5;
		height:60px;
		line-height: 60px;
	}

</style>