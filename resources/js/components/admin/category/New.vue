<template>
	<section class="content">
		<div class="row">
			<div class="col-12">
				<div class="card card-primary" id="add-category">
	              <div class="card-header">
	                <h3 class="card-title">Add Category</h3>
	              </div>
	              <!-- /.card-header -->
	              <!-- form start -->
	              <form role="form" @submit.prevent="add" meth>
	                <div class="card-body">
	                  <div class="form-group">
	                    <label for="exampleInputEmail1">Category Name</label>
	                    <input v-model="form.cat_name" type="text" class="form-control" name="cat_name" placeholder="Enter Category Name" :class="{ 'is-invalid': form.errors.has('cat_name') }">
	                    <has-error :form="form" field="cat_name"></has-error>
	                  </div>
	                </div>
	                <!-- /.card-body -->

	                <div class="card-footer">
	                  <button type="submit" class="btn btn-primary">Submit</button>
	                </div>
	              </form>
	            </div>
			</div>
		</div>
	</section>
</template>
<script>
	export default{
		name: 'New',
		data(){
			return{
				form: new Form({
					cat_name: '',
				})
			}
		},
		methods:{
			add () {
		      // Submit the form via a POST request
		      this.form.post('/add-category')
		        .then(( response ) => { 
		        	this.$router.push('/category-list')
		        	Toast.fire({
					  type: 'success',
					  title: 'Category add successfully'
					})
		        }).catch(()=>{

		        })
		   	 }
		}
	}
</script>