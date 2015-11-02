<template>
<h2>律师详情<h2>
<button v-on:click="askQuestion()" class="btn btn-block">
我要咨询
</button>
</template>
<script>
export default {
    methods:{
        askQuestion:function(){
            this.$route.router.go("/questioning");
        }
    }
	
}
</script>