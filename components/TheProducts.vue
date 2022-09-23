<template>
    <section class="productsSection">
        <h2>Nos Produits</h2>
        <div class="productsContainer">
            <div v-for="product in products" :key="product">
                <div class="productsContent">
                    <img v-bind:src="product.img" alt="image product">
                    <p>{{product.name}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Products',
        data() {
            return {
                products: [
                    {
                        img: require('~/assets/img_products/burger-chevre.jpg'),
                        name: 'Le burger au fromage de chèvre',
                    },
                    {
                        img: require('~/assets/img_products/cheeseburger-vegetarien-au-chevre.jpg'),
                        name: 'Le Burger végétarien au fromage de chèvre',
                    },
                    {
                        img: require('~/assets/img_products/chesse-burger.jpg'),
                        name: 'Le Cheeseburger',
                    },
                    {
                        img: require('~/assets/img_products/ribs-de-boeufs-au-miel-et-aligot.jpg'),
                        name: 'Les ribs de boeufs au miel et aligot',
                    },
                    {
                        img: require('~/assets/img_products/Steak-au-poivre.jpg'),
                        name: 'Le Steack au poivre',
                    },
                    {
                        img: require('~/assets/img_products/Veggie-Cantal.jpg'),
                        name: 'Le Burger veggie au Cantal',
                    },
                    {
                        img: require('~/assets/img_products/cheesecake-oreo.jpg'),
                        name: 'Cheesecake à l\'Oreo',
                    },
                    {
                        img: require('~/assets/img_products/tiramisu.jpg'),
                        name: 'Le Tiramisu',
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .productsSection {
        margin: 0 auto;
        margin-bottom: 50px;
        h2 {
            font-size: 40px;
            margin-bottom: 25px;
        }
        &-title {
            width: max-content;
        }
        .productsContainer {
            display: flex;
            flex-direction: row;
            gap: 20px;
            overflow: scroll;
            .productsContent {
                display: flex;
                flex-direction: column;

                img {
                    width: 240px;
                    height: 300px;
                    border-radius: 10px 10px 0 0;
                }
                p {
                    padding: 1em;
                    text-align: center;
                    color: $white;
                    height: 50px;
                    font-weight: 500;
                    background-color: $black;
                    border-radius: 0 0 10px 10px;
                }
            }
        }
    }
</style>