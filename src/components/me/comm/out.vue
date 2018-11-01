<template>
  <div>
		<inside 
		:data="list"
		@change="handle">
			<div slot="top">opopop</div>
			<div>
				<p>具名的slot</p>
				<button @click="go">go</button>
			</div>
		</inside>
	</div>
</template>

<script>
import inside from './inside'
export default {
	components:{ inside },
	data(){
		return{
			list:[
				{title:'op',length:10},
				{title:'op1',length:9},
				{title:'op2',length:8},
			]
		}
	},
	methods:{
		go(){
			// this.$emit('change');
		},
		handle(){
			console.log('handle');
		}
	}
}
</script>

<style>

</style>
