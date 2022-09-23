<template>
    <section class="conceptSection">
        <h2>Notre Concept</h2>
        <div class="conceptsContainer">
            <div class="conceptsTogglesList">
                <a href="" class="conceptsToggle active">midi</a>
                <a href="" class="conceptsToggle">soir</a>
            </div>
            <div class="conceptsList">
                <div class="menuCard">
                    <p>Viande +</p>
                    <p>Garniture +</p>
                    <p>Boisson <span>ou</span> Dessert</p>
                    <p class="menuPrice">16€</p>
                </div>
                <div class="menuCard">
                    <p>Viande +</p>
                    <p>Garniture +</p>
                    <p>Boisson <span>et</span> Dessert</p>
                    <p class="menuPrice">18€</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .conceptSection {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        margin-bottom: 50px;
        h2 {
            font-size: 40px;
            margin-bottom: 25px;
        }
        .conceptsTogglesList {
            display: flex;
            flex-direction: row;
            background-color: #ededed;
            width: max-content;
            margin-bottom: 25px;
            border-radius: 50px;
            .conceptsToggle {
                padding: 1em;
                font-size: 16px;
            }
            .active {
                background-color: $primary;
                color: $white;
                border-radius: 50px;
            }
        }
        .conceptsList {
            display: flex;
            flex-direction: row;
            gap: 20px;
        }
        .menuCard {
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 250px;
            height: 200px;
            background-color: $primary;
            p {
                text-align: center;
                color: $white;

                span {
                    text-transform: uppercase;
                    font-size: 16px;
                    font-weight: bold;
                }
            }
            .menuPrice {
                    border-radius: 60px;
                    padding: 0.5em; 
                    background-color: $white;
                    color: $primary
                }
        }
    }
    @media screen and (max-width: 600px) {
        .conceptSection {
            align-items: center;
            .conceptsList{
                flex-direction: column;
            }
        }
    }
</style>