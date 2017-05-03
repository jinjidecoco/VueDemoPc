<!-- 此页面通过路由 index.js设置 -->
<template>
  <div class='add-item'>
  <i class='add-icon'></i>
    <input class='input-text'type="text" placeholder=" 创建一个任务" v-model='toDo'>
    <input class='input-btn' type="button" value="确定" @click='add' checked="" @keyup.enter='add'>  
    <input class='input-btn' type="button" value="删除">  
    <ul class='items'>
      <li v-for =" toDo in toDos " class='item' :class='{ completed: toDo.completed}'>
         <input class='toggle' type="checkbox" v-model="toDo.completed">
         {{ toDo.name}}
         <span v-if="toDo.completed">已完成</span>
         <span v-if="!toDo.completed">未完成</span>
         <i class='delete' @click='remove'></i>
      </li>
    </ul> 
   <!--  <span>{{text}}</span>
 -->  </div>
</template>

<script>

export default {
  name: 'hello',
  data() {
    return{
      toDos:[ ],
      // name: ''
    }
  },
  methods:{ 
    add:function(){
       this.toDos.push({
          name: this.toDo,
          completed: false
       })
       this.toDo=''
    },
    remove:function(toDo){
      this.toDos.splice(this.toDos.indexOf(toDo), 1)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.add-item{
  position: relative;
}
.input-text{
  display: inline-block;
  height:40px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-top: 20px;
  padding: 0 100px;
}
.input-btn{
  padding: 0 15px;
  height:40px;
  line-height: 40px;
  border:1px solid #ccc;
  border-radius: 3px;
  background: #fff;
   &:hover{
    background:#18ffff;
    border:1px solid #18ffff ;
    outline: none;
    cursor:pointer;
  }
}
.add-icon{
   background: url(../assets/creat.png) no-repeat  center center;
   display: inline-block;
   width: 36px;
   height: 36px;
   background-size: 90%;
   position: absolute;
   top:23px;
   left: 460px;
}
.items{
    list-style: none;
    text-align: left;
  .item{
    margin-top:20px;
    background: #e3f2fd;
    padding:8px 20px;
    &:hover{
      cursor:pointer;
    }
    .delete{
      background: url(../assets/delete.png) no-repeat center center;
      display:inline-block;
      width:16px;
      height:16px;
      float:right;
    }
  }
  .completed{
      color:#fff;
  }
  .toggle{
    font-size:20px;
  }
}
a {
  color: #42b983;
}
</style>
