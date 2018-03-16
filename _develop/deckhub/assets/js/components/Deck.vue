<template>
	<ul class="clearfix">
		<li v-for="card in cards">
			<div><p>{{ card.locale["jp"].name }}</p></div>
			<!-- <div><p>{{ card }}</p></div> -->
		</li>
	</ul>
</template>

<script>
export default {
  data() {
    return {
      cards: []
    }
  },
  methods: {
  	set_cards(list) {
  		this.cards = list;
  	}
  }
}
</script>

<style scoped>

ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

li {
	position: relative;
	display: block;
	float: left;
	width: 25%;
	/*color: #ffbb00;*/
	background: #eeeeee;
}

li:before {
	display: block;
	content: '';
	padding-top: 100%;
}

li:nth-child(2),li:nth-child(4),li:nth-child(5),li:nth-child(7) {
	background: #dddddd;
}

li>div {
	position: absolute;
	top: 0; left: 0;
	width: 100%; height: 100%;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
}

</style>
