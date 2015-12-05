<template lang="jade">
form
    .form-group
        label.control-label(for="area") 选择地区
        select#area.form-control
            option 上海
            option 昆山
            option 苏州
    .form-group
        label.control-label(for="business") 选择业务
        select#business.form-control
            option 法律相关
            option 税务相关
            option 会计相关
    hr(style="margin-top:3rem;")
    button.btn.btn-primary.btn-block#search(v-on:click="search($event)") 搜索
</template>
<style>
    #search {
        margin-top:3rem;
    }
</style>
<script>
export default {
	data: function(){
		return {
		    city:"北京",
		    spec:"婚姻法"
		}
	},
	methods:{
        search:function(event){
            event.preventDefault();
            console.log("entering search route");
            console.log("city is "+this.city);
            console.log("spec is "+this.spec);
            this.$route.router.go('/lawyers');
        }
	}
}
</script>
