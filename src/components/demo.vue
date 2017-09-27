<template>
<div class="welcome">
<div class="form-horizontal">
<fieldset>

<!-- Form Name -->
<legend>Welcome to Water App</legend>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput"></label>  
  <div class="col-md-4">
  <input id="textinput" name="textinput" type="text" placeholder="Name" class="form-control input-md" required="true" v-model="name">
    
  </div>
</div>

<!-- Select Basic -->
<div class="form-group">
  <label class="col-md-4 control-label" for="glass"></label>
  <div class="col-md-4">
    <select id="glass" name="glass" class="form-control" required v-model="glass">
      <option disabled selected>Number of glass water per day</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </div>
</div>
<button class="btn btn-primary" @click="register()">Submit</button>


</fieldset>
</div>

</div>
</template>

<script>
	export default{
		name:'form',
		data(){
			return {
				is_in:localStorage.status,
				glass:'',
				name:''
			}
		},
		methods:{
			register(){
				localStorage.total=this.glass;
				localStorage.name=this.name;
				this.$router.push({ path: '/me' })

			}
		}
	}
</script>

<style>
	
</style>