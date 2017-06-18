<template>
  <div id="app">
    <headA></headA>
    <p>{{total}}</p>
    <child-a mes='coco' name='one' v-on:add='addCouter' v-on:reduce='redCouter'> </child-a>
    <child-a mes='jick' name='two' v-on:add='addCouter' v-on:reduce='redCouter'> </child-a>
    <p @click='show'>点击</p>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>

import headA from './components/headA'
import foot from './components/foot'
import childA from './components/child-a'


  export default {
    name: 'app',
    data(){
      return{
        total:0
      }
    },
    components: {
      headA ,foot, childA
    },
    methods:{
      addCouter:function(){
        this.total +=1;
        if(this.total>10){
          alert('最多买10个');
          this.total=10;
        }
      },
      redCouter:function(){
        this.total -=1;
        if(this.total<0){
          alert('哥们不能再少了啊');
          this.total=0;
        }
      },
      show:function(){
        return this.$store.state.total
      } 
    },

    events:{

    }

  }

</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:20px 240px;
}
</style>
