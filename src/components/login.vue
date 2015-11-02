<template lang="jade">
hr
.row
    .col-xs-12
        form
            .form-group
                label 用户名
                input#username.form-control(placeholder="用户名")
.row
    .col-xs-12
        form
            .form-group
                label 密码
                input#password.form-control(type="password",placeholder="密码")
hr
button.btn.btn-primary.btn-block(v-on:click="login()") 登录
</template>
<script>
    module.exports = {
        methods:{
            login:function(){
                console.log("you have logined!");
                this.$route.router.go('/search');
            }
        }
    }
</script>
