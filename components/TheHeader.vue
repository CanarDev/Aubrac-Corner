<template>
    <header>
        <nav>
            <img class="NavLogo" src="~/assets/aubrac_logo.png" alt="logo aubrac">
            <ul>
                <li><a href="">le concept</a></li>
                <li><a href="">nos produits</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">contact</a></li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    nav {
        .NavLogo {
            width: 125px;
            height: 35px;
        }

        background-color: $black;
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 70px;

        ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 50px;
            a {
                color: $white;
            }
        }
    }
    @media screen and (max-width: 700px) {
        nav {
        ul {
            display: none;
        }
    }
    }
</style>