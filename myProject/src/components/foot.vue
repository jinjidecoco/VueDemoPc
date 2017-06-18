<template>
	<div class="foot">
		<p>{{msg}}</p>
	</div>
</template>
<script type="text/javascript">
	export default{
     name:'foot',
     data(){
       return {
          msg:'今天的日期是:'
       }
     },
     created(){
     	this.getDate();
     },
     methods:{
     	getDate:function(msg){
     		var d= new Date();
     	   this.msg= '今天的日期是' + (d.getMonth()+ 1) +'月'+ d.getDate();
     	   console.log(d.getDate());
        }
	}

}
</script>
<style lang='less'>
	p{
	   /*position: absolute;*/
	   bottom: 0;
	   background: #ccc;
	   text-align:center;
	   height:60px;
	   display: inline-block;
	   line-height: 60px;
	   width:100%;
	   clear:both;
	}
</style>