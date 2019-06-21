export default{
	state:{
		category:"This is category"
	},
	getters:{
		getCategory(state){
			return state.category
		}
	},
	actions:{
		allCategory(state, payload){
			axios.get('/category')
			.then((response) => {
				console.log(response.data)
			})
		}
	},
	mutations:{

	}

}
