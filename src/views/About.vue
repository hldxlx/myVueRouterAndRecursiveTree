<template>
  <div class="about">
    <my-cont btn-value="搜搜"></my-cont>
    <h1>This is an about page</h1>
    <div v-html="kk"></div>
    <mySelect></mySelect>
    <mySelect></mySelect>
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
          <a class="active" href="#all">所有任务</a>
          <a href="#unfinished">未完成的任务</a>
          <a href="#finished">完成的任务</a>
        </li>
      </ul>
      <h3 class="big-title">任务列表：</h3>
      <div class="tasks">
        <span class="no-task-tip" v-show="!list.length">还没有添加任何任务</span>
        <ul class="todo-list">
          <li class="todo" :class="{completed: item.isChecked,editing: item === edtorTodos}" v-for="item in filteredList" >
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
  import mySelect from '../components/select'
  export default {
    data(){
      return{
        kk:'<div>vvv</div>',
        list:[],
        todo:"",
        edtorTodos:"",//记录正在编辑的数据
        beforeTitle:'',//记录正在编辑的数据的title
        visibility:"all", //通过这个属性值的变化对数据进行筛选
        hash:"",
        filter:{}
      }
    },
    mounted:function () {
      this.init();
      var self = this;
      this.$nextTick(() => {
          window.addEventListener("hashchange",function(){
            self.hash = window.location.hash;
          console.log(self.hash,'======hash3366')
       })
      })

    },
    watch:{ //深度监控数据
      list:{
        handler:function(){
          this.save('miao-li',this.list);
        },
        deep:true
      }
    },
    computed:{
      noCheckeLength:function(){
        return this.list.filter(function(item){
          return !item.isChecked
        }).length
      },
      filteredList:function () {

        //找到了过滤函数就返回过滤后的数据；如果没有 返回所有数据
        return this.filter['all'] ? this.filter['all'](this.list) : this.list ;
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
    components:{
      mySelect
    },
    methods:{
      init(){
//       this.list = [
//          {
//            title:"吃饭打豆豆",
//            isChecked:false //状态为false，为不选中  任务未完成
//          },
//          {
//            title:"妙味课堂",
//            isChecked:true   //状态为true，为选中    任务完成
//          }
//        ];
        this.list = this.fetch('miao-li');
        this.watchHashChange();
        //过滤时有三种情况 all finished unfinished
        this.filter = {
          all:function (list) {
            console.log('all');
            return list;
          },
          finished:function (list) {
            console.log('finished');
            return list.filter(function (item) {
              return item.isChecked;
            })
          },
          unfinished:function (list) {
            console.log('unfinished');
            return list.filter(function (item) {
              return !item.isChecked;
            })
          }
        }

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
      },
      save(key,value){
//		localStorage.setItem(key,value); 此列中 value 的值是 list 数组，所以要将 value 转为字符串
        localStorage.setItem(key,JSON.stringify(value));
      },
      fetch(key){
        return JSON.parse(localStorage.getItem(key)) || [];
      },
      watchHashChange(){
        this.hash = window.location.hash.slice(1);
        this.visibility = this.hash;
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
