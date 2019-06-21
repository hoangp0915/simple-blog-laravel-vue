<template>
	<section class="content">
      <div class="row">
        <div class="col-12">
        	<div class="card">
              <div class="card-header">
                <h3 class="card-title">Category List</h3>
 
                <div class="card-tools">
                  <!-- <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                    <div class="input-group-append">
                      <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                    </div>
                  </div> -->
                  <button class="btn btn-primary" title="Add Category">
                    <router-link to="/add-category">
                      <i class="fa fa-user-plus text-light"></i>
                    </router-link>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <tr>
                    <th class="text-center" width="10%">S1</th>
                    <th>Category Name</th>
                    <th width="10%">Actions</th>
                    
                  </tr>
                  <tr>
                    <td class="text-center">1</td>
                    <td>{{getallCategory}}</td>
                    <td>
            						<a href="" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></a>
            						<a href="" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></a>
                    </td>
                    
                  </tr>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    <!-- /.content -->
</template>
<script>
	export default{
		name: 'List',
    mounted(){

    },
    computed:{
      getallCategory(){
          this.$store.dispatch("allCategory")
      }
    },
    methods:{

    }
	}
</script>