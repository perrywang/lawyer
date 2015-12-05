<template lang="jade">
form
	.form-group
		label(for="QContent") 问题描述：
		textarea#QContent.form-control(rows="7")
	button.btn.btn-primary.btn-block(v-on:click="submitQ($event)") 提交
</template>

<script>
	module.exports = {
        methods:{
            submitQ:function(event){
                event.preventDefault();
                toastr.success('提交成功','',{positionClass: "toast-bottom-full-width"});
            }
        }
    }
</script>