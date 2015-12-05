<template lang="jade">
h2 张伟
img.img-responsive(style="width:120px;height:140px")
p
|我国著名法律教授，华东政法学院教授，擅长复杂的财产继承相关法律纠纷，在上海，昆山，苏州地区享有极高声誉
hr
button.btn.btn-primary.btn-block(v-on:click="askQuestion()") 我要咨询
</template>
<style>
	.btn-primary {
		margin-top:5rem;
	}
	p {
		margin-top:2rem;
	}
</style>

<script>
export default {
    methods:{
        askQuestion:function(){
            this.$route.router.go("/questioning");
        }
    }
	
}
</script>