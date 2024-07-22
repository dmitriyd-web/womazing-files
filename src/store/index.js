import { createStore } from 'vuex'

export default createStore({
	state: {
		//tovarsInBasket: []
		tovarsInBasket: [],
		totalPrice: 0,
		tovarIdPage: [],
		tovars: [
			{ id: 11, name: 'Футболка USA', photo: require('../assets/images/tovar-1.png'), full_price: 229, discount_price: 129, count: 0 },
			{ id: 22, name: 'Купальник Glow', photo: require('../assets/images/tovar-2.png'), full_price: '', discount_price: 149, count: 0 },
			{ id: 33, name: 'Свитшот Sweet Shot', photo: require('../assets/images/tovar-3.png'), full_price: 200, discount_price: 159, count: 0 },
			{ id: 44, name: 'Розовая футболка', photo: require('../assets/images/tovar-4.jpg'), full_price: 230, discount_price: 199, count: 0 },
			{ id: 55, name: 'Черная футболка с воротником', photo: require('../assets/images/tovar-5.jpg'), full_price: '', discount_price: 159, count: 0 },
			{ id: 66, name: 'Бирюзовая футболка', photo: require('../assets/images/tovar-6.jpg'), full_price: 250, discount_price: 139, count: 0 },
			{ id: 77, name: 'Желтая футболка', photo: require('../assets/images/tovar-7.jpg'), full_price: 330, discount_price: 219, count: 0 },
			{ id: 88, name: 'Оранжевая футболка', photo: require('../assets/images/tovar-8.jpg'), full_price: 210, discount_price: 179, count: 0 },
			{ id: 99, name: 'Красная футболка', photo: require('../assets/images/tovar-9.jpg'), full_price: 290, discount_price: 219, count: 0 },
			{ id: 100, name: 'Красная футболка', photo: require('../assets/images/tovar-9.jpg'), full_price: 290, discount_price: 219, count: 0 },
			{ id: 101, name: 'Оранжевая футболка', photo: require('../assets/images/tovar-8.jpg'), full_price: 210, discount_price: 179, count: 0 },
			{ id: 102, name: 'Оранжевая футболка', photo: require('../assets/images/tovar-8.jpg'), full_price: 210, discount_price: 179, count: 0 },
			{ id: 103, name: 'Черная футболка с воротником', photo: require('../assets/images/tovar-5.jpg'), full_price: '', discount_price: 159, count: 0 },
			{ id: 104, name: 'Бирюзовая футболка', photo: require('../assets/images/tovar-6.jpg'), full_price: 250, discount_price: 139, count: 0 },
			{ id: 105, name: 'Желтая футболка', photo: require('../assets/images/tovar-7.jpg'), full_price: 330, discount_price: 219, count: 0 },
			{ id: 106, name: 'Оранжевая футболка', photo: require('../assets/images/tovar-8.jpg'), full_price: 210, discount_price: 179, count: 0 },
			{ id: 107, name: 'Красная футболка', photo: require('../assets/images/tovar-9.jpg'), full_price: 290, discount_price: 219, count: 0 },
			{ id: 108, name: 'Красная футболка', photo: require('../assets/images/tovar-9.jpg'), full_price: 290, discount_price: 219, count: 0 },
			{ id: 109, name: 'Оранжевая футболка', photo: require('../assets/images/tovar-8.jpg'), full_price: 210, discount_price: 179, count: 0 },
			{ id: 110, name: 'Оранжевая футболка', photo: require('../assets/images/tovar-8.jpg'), full_price: 210, discount_price: 179, count: 0 }
		],
		//showPaginetionElements: state.tovars.slice(0, 9)
	},
	getters: {
		
	},
	mutations: {

		//	сохранение текущей корзины
		
		getLocalStorage(state, storage) {
			state.tovarsInBasket = JSON.parse(storage)
			for (let i = 0; i < state.tovarsInBasket.length; i++) {
				state.totalPrice += +(state.tovarsInBasket[i].discount_price * state.tovarsInBasket[i].count)
			}
		},
		
		//	добавление товара из корзины

		addTovar(state, currentTovarAdd) {
			//state.tovarsInBasket = []
			//state.totalPrice = []
			if (state.tovarsInBasket.length < 1) {
				state.tovarsInBasket.unshift(currentTovarAdd)
			}	else {
				for (let i = 0; i < state.tovarsInBasket.length; i++) {
					if (state.tovarsInBasket[i].id === currentTovarAdd.id) {
						state.tovarsInBasket.splice(i, 1)
						//state.totalPrice += state.tovarsInBasket[i].discount_price
					}
					//state.totalPrice += state.tovarsInBasket[i].discount_price * state.tovarsInBasket[i].count
				}

				state.tovarsInBasket.unshift(currentTovarAdd)
			}
			state.totalPrice = 0
			for (let j = 0; j < state.tovarsInBasket.length; j++) {
				state.totalPrice += +(state.tovarsInBasket[j].discount_price * state.tovarsInBasket[j].count)
			}
			localStorage.setItem("tovarsInBasket", JSON.stringify(state.tovarsInBasket))
		},

		//	удалние товара из корзины

		removeTovar(state, tovarIdRemove) {
			for (let i = 0; i < state.tovarsInBasket.length; i++) {
				if (state.tovarsInBasket[i].id === tovarIdRemove) {
					state.totalPrice -= +(state.tovarsInBasket[i].discount_price * state.tovarsInBasket[i].count)
					state.tovarsInBasket.splice(i, 1)
					localStorage.setItem("tovarsInBasket", JSON.stringify(state.tovarsInBasket))
				}
			}
		},

		//	id товара при переходе на страницу товара

		setCurrentTovar(state, tovarId) {
			//tovarIdPage = []
			for (let i = 0; i < state.tovars.length; i++) {
				if (state.tovars[i].id === tovarId) {
					state.tovarIdPage.unshift(state.tovars[i])
				}
			}
		},
	},
	actions: {

	},
	modules: {
	}
})
