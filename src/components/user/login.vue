<template lang="jade">
form#loginForm
    .form-group
        label.control-label(for="username") 用户名
        input#username.form-control(placeholder="用户名")
    .form-group
        label(for="password") 密码
        input#password.form-control(type="password",placeholder="密码")    
    hr(style="margin-top:3rem;")
    button.btn.btn-primary.btn-block#submit(v-on:click="login($event)") 登录
</template>
<style>
    label{
        margin-bottom:1rem;
    }
    #submit {
        margin-top:3rem;
    }
</style>
<script>
    module.exports = {
        methods:{
            login:function(event){
                event.preventDefault();
                console.log("you have logined!");
                $('#header').show();
                this.$route.router.go('/search');
            }
        }
    }
</script>
