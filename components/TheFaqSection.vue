<template>
    <section class="faqSection">
        <div class="standAubrac">
            <div class="standAubracContainer">
                <p>
                Notre viande de boeuf vient directement de notre élevage en <span>Aubrac</span> 
                ou le bien être animal est notre priorité.
                Elle est garantie filière Bleu Blan Coeur. 
                Nos animaux sont nourris au lin et au foin sans OGM, 
                ni antibiotiques préventifs.
                </p>
                <img src="~/assets/bleu_blanc_coeur.png" alt="Bleu Blanc Coeur logo">
            </div>
        </div>
        <div class="faqQuestions">
            <h1>faq</h1>
            <div v-for="question in questions" :key="question">
                <details>
                    <summary>{{question.question}}</summary>
                    <p>{{question.answer}}</p>
                </details>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .faqSection {
        margin: 0 auto;
        max-width: 1000px;
        height: 400px;
        display: flex;
        flex-direction: row;
        gap: 50px;
        .standAubrac {
            width: 80%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("~/assets/stand_aubrac.jpg");
            .standAubracContainer {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                backdrop-filter: contrast(55%);
                p {
                    width: 50%;
                    font-size: 16px;
                    text-align: justify;
                    color: $white;
                    span {
                        font-size: 16px;
                        color: $primary;
                    }
                }

                img {
                    width: 65px;
                    height: 65px;
                }
            }
        }
        .faqQuestions {
            width: 80%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1 {
                font-size: 40px;
                text-transform: uppercase;
            }

            details {
                transition: all 0.3s;
                padding: 1em;
                border-radius: 10px;
                margin-bottom: 10px;
                width: 100%;
                box-shadow: 0px 2px 6px rgba(51, 50, 48, 0.15);
                summary {
                    display: flex;
                    flex-direction: row-reverse;
                    justify-content: space-between;
                }
            }

            details > summary::before {
                content: '▶️';
            }

            details[open] > summary::before {
                content: '🔽';
            }
            details[open] {
                padding: unset;
                summary {
                    padding: 0.5em;
                    background-color: $black;
                    color: $white;
                    border-radius: 10px 10px 0 0;
                }
                p {
                    padding: 0.5em;
                }
            }
        }
    }
    @media screen and (max-width: 1000px) {
        .faqSection {
            justify-content: center;
            flex-direction: column-reverse;
            height: fit-content;
            .standAubrac {
                margin-top: 20px;
                margin: 0 auto;
                height: 200px;
                .standAubracContainer {
                    p {
                        font-size: 12px;
                        span {
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
</style>

<script>
    export default {
        name: 'Faq',
        data() {
            return {
                questions: [
                    {
                        question: 'Comment est votre aligot ?',
                        answer: 'Il est bon.',
                    },
                    {
                        question: 'Votre viande est-elle d’origine française ?',
                        answer: 'Notre viande est complètement d\'origine française, elle vient même de l\'Aubrac (ah c\'est marrant)',
                    },
                    {
                        question: 'Peut-on privatiser le corner ?',
                        answer: 'Carrément ! que ce soit pour n\'importe quelle raison ! (même pour fêter un mariage)',
                    },
                    {
                        question: 'Organisez-vous des évènements ?',
                        answer: 'lorem ipsum',
                    }
                ]
            }
        },
    }
</script>