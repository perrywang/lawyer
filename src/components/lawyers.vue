<template>
<div class="list-group">
	<a v-link="{path:'/lawyers/1'}" class="list-group-item">
       <h4 style="color:green;">张三</h4>
       <p>XXX律师事务所</p>
	</a>
	<a v-link="{path:'/lawyers/1'}" class="list-group-item">
	   <h4 style="color:green;">李四</h4>
       <p>XXX律师事务所</p>
    </a>
	<a v-link="{path:'/lawyers/1'}" class="list-group-item">
	   <h4 style="color:green;">王军</h4>
       <p>XXX律师事务所</p>
    </a>
	<a v-link="{path:'/lawyers/1'}" class="list-group-item">
	   <h4 style="color:green;">高大林</h4>
       <p>XXX律师事务所</p>
    </a>
</div>

<nav style="text-align:center;">
  <ul class="pagination">
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>
<script>
export default {
	methods:{

	}
}
</script>