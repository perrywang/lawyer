<template  lang="jade">
.list-group
  a.list-group-item.container-fluid(v-link="{path:'/lawyers/1'}")  
    .col-xs-8
      h4(style="color:green;") 张伟
      p XXX律师事务所
      span 婚姻法，财产继承
    .col-xs-4(style="padding-top:0.7rem;text-align:right;")
      span.label.label-success 在线
  a.list-group-item.container-fluid(v-link="{path:'/lawyers/2'}")  
    .col-xs-8
      h4(style="color:green;") 潘东
      p XXX律师事务所
      span 婚姻法，财产继承
    .col-xs-4(style="padding-top:0.7rem;text-align:right;")
      span.label.label-default 离线
  a.list-group-item.container-fluid(v-link="{path:'/lawyers/3'}")  
    .col-xs-8
      h4(style="color:green;") 向南
      p XXX律师事务所
      span 婚姻法，财产继承
    .col-xs-4(style="padding-top:0.7rem;text-align:right;")
      span.label.label-success 在线
nav(style="text-align:center;")
  ul.pagination
    li
      a(href="#",aria-label="Previous")
        span(aria-hidden="true") &laquo;
    li
      a(href="#") 1
    li
      a(href="#") 2
    li
      a(href="#") 3
    li
      a(href="#",aria-label="Next")
        span(aria-hidden="true") &raquo;
</template>
<script>
export default {
	methods:{

	}
}
</script>