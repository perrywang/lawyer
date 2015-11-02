<template>
<hr/>
<label>选择城市</label>
<select v-model="city" class="form-control">
  <option>北京</option>
  <option>上海</option>
  <option>杭州</option>
  <option>成都</option>
  <option>深圳</option>
</select>
<label>选择主题</label>
<select v-model="spec" class="form-control">
  <option>婚姻法</option>
  <option>公司法</option>
  <option>企业法规</option>
</select>
<hr/>
<button class="btn btn-primary btn-block" v-on:click="search()">查询</button>
</template>

<script>
export default {
	data: function(){
		return {
		    city:"上海",
		    spec:"婚姻法"
		}
	},
	methods:{
        search:function(){
            console.log("entering search route");
            console.log("city is "+this.city);
            console.log("spec is "+this.spec);
            this.$route.router.go('/lawyers');
        }
	}
}
</script>
