<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-html="kk"></div>
    <div class="main">
      <h3 class="big-title">添加任务：</h3>
      <input
        v-on:keyup.13="addTodo"
        v-model="todo"
        type="text"
        class="task-input"
        placeholder="例如：吃饭睡觉打豆豆；    提示：+回车即可添加任务"
      />
      <ul class="task-count" v-show="list.length">
        <li>{{noCheckeLength}}个任务未完成</li>
        <li class="action">
          <a class="active" href="#">所有任务</a>
          <a href="#">未完成的任务</a>
          <a href="#">完成的任务</a>
        </li>
      </ul>
      <h3 class="big-title">任务列表：</h3>
      <div class="tasks">
        <span class="no-task-tip" v-show="!list.length">还没有添加任何任务</span>
        <ul class="todo-list">
          <li class="todo" :class="{completed: item.isChecked,editing: item === edtorTodos}" v-for="item in list" >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="item.isChecked" />
              <label @dblclick="edtorTodo(item)">{{ item.title }}</label>
              <button class="destroy" @click="deleteTodo(item)"></button>
            </div>
            <input
              v-foucs="edtorTodos === item"
              class="edit"
              type="text"
              v-model = "item.title"
              @blur="edtorTodoed(item)"
              @keyup.13="edtorTodoed(item)"
              @keyup.esc="cancelTodo(item)"
            />
          </li>
        </ul>
      </div>
  </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data(){
      return{
        kk:'<div>vvv</div>',
        list:[],
        todo:"",
        edtorTodos:"",//记录正在编辑的数据
        beforeTitle:'' //记录正在编辑的数据的title
      }
    },
    mounted:function () {
      this.init();
    },
    computed:{
      noCheckeLength:function(){
        return this.list.filter(function(item){
          return !item.isChecked
        }).length
      }
    },
    directives:{
      "foucs":{
        update(el,binding){
          if(binding.value){
            el.focus();
          }
        }
      }
    },
    methods:{
      init(){
       this.list = [
          {
            title:"吃饭打豆豆",
            isChecked:false //状态为false，为不选中  任务未完成
          },
          {
            title:"妙味课堂",
            isChecked:true   //状态为true，为选中    任务完成
          }
        ];
      },
      addTodo(){
        this.list.push({
          title:this.todo,
          isChecked:false
        });
        this.todo = "";
        console.log(this.todo)
      },
      edtorTodo(todo){
        this.beforeTitle = todo.title;
        this.edtorTodos = todo;
      },
      edtorTodoed(todo){ //编辑任务成功
        this.edtorTodos = '';
      },
      cancelTodo(todo){  //取消编辑任务

        todo.title = this.beforeTitle;

        this.beforeTitle = '';

        //让div显示出来，input隐藏
        this.edtorTodos = '';
      }

    }
  }
</script>
<style>
  .todo-list li.completed label {
    color: #d9d9d9;
    text-decoration: line-through;
  }
  .todo-list li.editing {
    border-bottom: none;
    padding: 0;
  }

  .todo-list li.editing .edit {
    display: block;
    width: 506px;
    padding: 13px 17px 12px 17px;
    margin: 0 0 0 43px;
  }

  .todo-list li.editing .view {
    display: none;
  }
  .todo-list li .edit {
    display: none;
  }

  .todo-list li.editing:last-child {
    margin-bottom: -1px;
  }

</style>
