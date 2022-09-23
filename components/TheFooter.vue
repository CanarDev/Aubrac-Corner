<template>
    <footer>
        <div class="bannerFooter">
            <p>D’autres questions ? N’hésitez pas à nous contacter directement !</p>
            <a>Contact</a>
        </div>
        <div class="border"></div>
        <div class="footerContainer">
            <div class="footerContent">
                <q class="citation">De la bière, de la viande et des copains</q>
                <a class="instaLink" href="https://www.instagram.com/aubraccorner/" target="_blank">@aubraccorner</a>
                <div class="footerImg">
                    <img class="maisonAubrac" src="~/assets/maison_aubrac.png" alt="maison de l'aubrac logo">
                    <p>tous droits réservés ©2022</p>
                </div>
                <ul>
                    <li>Mentions légales</li>
                    <li>CGU</li>
                    <li>Cookies</li>
                    <li>Politique de confidentialité</li>
                </ul>
            </div>
            <img class="aubrac" src="~/assets/aubrac_out_typo.png" alt="aubrac logo without txt">
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    footer {
        margin-top: 50px;
        padding: 1em;
        background-color: $black;
        .bannerFooter {
            padding: 1em;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            p, a {
                color: $white;
            }
            a {
                cursor: pointer;
                padding: 1em;
                background-color: $primary;
                border-radius: 50px;
            }
        }
        .border {
            margin: 0 auto;
            width: 65%;
            border-bottom: 1px solid #565656;
        }
        .footerContainer {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            .footerContent {
                padding: 1em;
                display: flex;
                flex-direction: column;
                gap: 25px;

                .citation {
                    color: $primary;
                    font-weight: 600;
                    font-size: 24px;
                }

                .instaLink {
                    font-weight: 600;
                } 
                .footerImg {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 15px;
                    .maisonAubrac {
                        width: 30px;
                        height: 30px;
                    }
                }
            }

            a, p, li, q {
                color: $white;
            }
            ul {
                display: flex;
                flex-direction: row;
                gap: 20px;

                li {
                    cursor: pointer;
                }
            }
            .aubrac {
                width: 70px;
                height: 70px;
            }
        }
    }
    @media screen and (max-width: 700px) {
        footer {
            .bannerFooter {
                gap: 20px;
                flex-direction: column;
                justify-content: center;
            }
            .footerContainer {
                flex-direction: column;
                text-align: center;
                ul {
                    justify-content: center;
                }
                .footerContent {
                    .footerImg {
                        flex-direction: column;
                    }
                }
            }
        }
    }
</style>