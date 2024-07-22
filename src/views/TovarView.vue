<template>
    <section class="page">
        <div class="container">
            <div class="row">
                <div class="title">
                    <h1>{{ this.$store.state.tovarIdPage[0].name }}</h1>
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
                            <router-link class="current-page" to="/">{{ this.$store.state.tovarIdPage[0].name }}</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
    <div class="single-product">
        <div class="container">
            <div class="row">
                <div class="product-image">
                    <img :src="this.$store.state.tovarIdPage[0].photo">
                </div>
                <div class="product-info">
                    <p class="product-priсes">
                        <span class="full-price">{{this.$store.state.tovarIdPage[0].discount_price}} $</span> 
                        <span class="discount-price">{{ this.$store.state.tovarIdPage[0].full_price }} $</span>
                    </p>
                    <div class="product-color">
                        <div class="product-color__item brown"></div>
                        <div class="product-color__item grey choosen"></div>
                        <div class="product-color__item pink"></div>
                        <div class="product-color__item orange"></div>
                    </div>
                    <form class="add-tovar">
                        <input type="text" v-model="tovarCountAdd">
                        <router-link class="btn btn-blue"
                            @click="addTovar(this.$store.state.tovarIdPage[0].id)"
                            to="/cart"
                        >Добавить в корзину</router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tovarCountAdd: 1
            }
        },
        methods: {
            addTovar(tovarId) {
                let currentTovarAdd = []
                for (let i = 0; i < this.$store.state.tovars.length; i++) {
                    if (this.$store.state.tovars[i].id === tovarId) {
                        currentTovarAdd = this.$store.state.tovars[i]
                        currentTovarAdd.count = +(this.tovarCountAdd)
                    }
                }
                this.$store.commit('addTovar', currentTovarAdd)
            }
        }
    }
</script>