<template>
	<div class="child" >
		<span>{{mes}}</span>
		<!-- <input type="text" v-model='content'>
 -->	    <input type='button' value='+' @click='add'>
            <input type='button'value='-' @click='reduce'>


	</div>
	</template>
<script >
	export default{
		data(){
		    return {
	          // counter: 0
			}
		},
		props:['mes'],

		methods:{
			add:function(){
              this.counter +=1;
              this.$emit('add')
			},
			reduce:function(){
				this.couter -=1;
				this.$emit('reduce')
			}
		},
		events: {

		}

	}
</script>