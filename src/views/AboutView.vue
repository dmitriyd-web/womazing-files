<template>
    <section class="page">
        <div class="container">
            <div class="row">
                <div class="title">
                    <h1>О бренде</h1>
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
                            <router-link class="current-page" to="/about">О бренде</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
    <div class="about">
        <div class="about-item">
            <div class="container">
                <div class="row">
                    <div class="about-item__image">
                        <img src="../assets/images/about-1.png">
                    </div>
                    <div class="about-item__text">
                        <h6>Идея и женщина</h6>
                        <p>Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.</p>
                        <p>Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний. </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-item">
            <div class="container">
                <div class="row">
                    <div class="about-item__text">
                        <h6>Магия в деталях</h6>
                        <p>Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.</p>
                        <p>Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало. </p>
                    </div>
                    <div class="about-item__image">
                        <img src="../assets/images/about-2.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>