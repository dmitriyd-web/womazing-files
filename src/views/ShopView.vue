<template>
    <section class="page">
        <div class="container">
            <div class="row">
                <div class="title">
                    <h1>Магазин</h1>
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
                            <router-link class="current-page" to="/">Магазин</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
    <section class="products products-shop">
        <div class="container">
            <div class="row">
                <router-link class="product" to="/tovar"
                    v-if="tovarsArray.length == 0"
                    v-for="(tovar, index) in this.$store.state.tovars.slice(0, 9)"
                    :key="tovar"
                    @click="setCurrentTovar(this.$store.state.tovars[index].id)"
                >
                    <div class="product-image">
                        <div class="product-image__shadow">
                            <img src="../assets/images/arrow-product.svg">
                        </div>
                        <img class="product-photo" :src="this.$store.state.tovars[index].photo">
                    </div>
                    <p class="product-name">{{ this.$store.state.tovars[index].name }}</p>
                    <p class="product-priсes">
                        <span class="full-price" 
                            v-if="this.$store.state.tovars[index].full_price != ''"
                        >${{ this.$store.state.tovars[index].full_price }}
                        </span>
                        <span class="discount-price" 
                            v-if="this.$store.state.tovars[index].discount_price != ''"
                        >${{ this.$store.state.tovars[index].discount_price }}
                        </span>
                    </p>
                </router-link>
                <router-link class="product" to="/tovar"
                    v-else
                    v-for="(showTovar, index) in this.tovarsArray"
                    :key="showTovar"
                    @click="setCurrentTovar(this.tovarsArray[index].id)"
                >
                    <div class="product-image">
                        <div class="product-image__shadow">
                            <img src="../assets/images/arrow-product.svg">
                        </div>
                        <img class="product-photo" :src="this.tovarsArray[index].photo">
                    </div>
                    <p class="product-name">{{ this.tovarsArray[index].name }}</p>
                    <p class="product-priсes">
                        <span class="full-price" 
                            v-if="this.tovarsArray[index].full_price != ''"
                        >${{ this.tovarsArray[index].full_price }}
                        </span>
                        <span class="discount-price" 
                            v-if="this.tovarsArray[index].discount_price != ''"
                        >${{ this.tovarsArray[index].discount_price }}
                        </span>
                    </p>
                </router-link>
                <ul class="pagination">
                    <li
                        v-for="(item, index) in this.allPaginationCount"
                    >
                        <a
                            v-bind:class="[((index + 1) == this.currentPage) ? 'current' : '']"
                            @click="changePage(index + 1)"
                        >{{ index + 1 }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                currentPage: 1,
                allPages: this.$store.state.tovars.map(item => item.name).length,
                allPaginationCount: 0,
                tovarsArray: []
            }
        },
        mounted(){
            this.allPaginationCount = Math.floor(this.$store.state.tovars.map(item => item.name).length / 9) + 1
        },
        methods: {
            setCurrentTovar(tovarId) {
                this.$store.commit('setCurrentTovar', tovarId)
            },
            changePage(pageNumber) {
                this.currentPage = pageNumber
                this.tovarsArray = this.$store.state.tovars.slice(9 * (this.currentPage - 1), 9 * this.currentPage)
            }
        }
    }
    
</script>