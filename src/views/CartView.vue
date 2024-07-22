<template>
    <section class="page">
        <div class="container">
            <div class="row">
                <div class="title">
                    <h1>Корзина</h1>
                </div>
                <nav class="breadcrumb">
                    <ul>
                        <li>
                            <router-link to="/">Главная</router-link>
                        </li>
                        <li>
                            <span>—</span>
                        </li>
                        <li>
                            <router-link class="current-page" to="/">Корзина</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
    <div class="cart">
        <div class="container">
            <div class="row">
                <div class="cart-table">
                    <div class="table-header">
                        <div class="col-1">
                            <p>Товар</p>
                        </div>
                        <div class="col-4">
                            <p>Кол-во</p>
                        </div>
                        <div class="col-4">
                            <p>Всего</p>
                        </div>
                    </div>
                    <div class="table-product"
                        v-for="(tovar, index) in this.$store.state.tovarsInBasket"
                        :key="tovar"
                    >
                        <div class="col-1">
                            <img class="product-remove" src="../assets/images/remove-product.svg"
                                @click="removeTovar(this.$store.state.tovarsInBasket[index].id)"
                            >
                            <div class="product-image">
                                <img :src="this.$store.state.tovarsInBasket[index].photo">
                            </div>
                            <p>{{ this.$store.state.tovarsInBasket[index].name }}</p>
                        </div>
                        <div class="col-4">
                            <p>{{ this.$store.state.tovarsInBasket[index].count }}</p>
                        </div>
                        <div class="col-4">
                            <p>{{ this.$store.state.tovarsInBasket[index].discount_price * this.$store.state.tovarsInBasket[index].count }} $</p>
                        </div>
                    </div>
                    <div class="table-footer">
                        <div class="price-total">
                            <p>Итого: <span>${{ this.$store.state.totalPrice }}</span></p>
                        </div>
                        <a class="btn btn-blue" 
                            @click="show_info()"
                        >Оформить заказ</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            show_info() {
                console.log(this.$store.state.totalPrice)
                alert(`Вы заказали товаров на сумму: ${this.$store.state.totalPrice}$`)
            },
            removeTovar(tovarIdRemove) {
                this.$store.commit('removeTovar', tovarIdRemove)
            }
        }
    }
</script>
