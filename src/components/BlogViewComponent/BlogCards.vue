<template>
<div class="bg">
    <div class="container">
        <div class="row">
            <a href="#" class="">
                <div class="up">
                    <div class="img">
                        <img src="@/assets/images/image_1.jpg.webp" alt="image...">
                    </div>
                    <div class="when">
                        <p class="day">27</p>
                        <p>january</p>
                        <p>2019</p>
                    </div>
                </div>
                <div class="down">
                    <div class="cent">
                        <div class="title">skills to develop your child memory</div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.</p>
                    </div>
                    <div class="more">
                        <div class="btn btn-warning text-light">read more <i class="fa-solid fa-arrow-right"></i></div>
                        <div class="txt">admin <i class="fa-solid fa-envelope-open-text"></i>3</div>
                    </div>
                </div>
            </a>
            <a href="#" class="">
                <div class="up">
                    <div class="img">
                        <img src="@/assets/images/image_2.jpg.webp" alt="image...">
                    </div>
                    <div class="when">
                        <p class="day">27</p>
                        <p>january</p>
                        <p>2019</p>
                    </div>
                </div>
                <div class="down">
                    <div class="cent">
                        <div class="title">skills to develop your child memory</div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.</p>
                    </div>
                    <div class="more">
                        <div class="btn btn-warning text-light">read more <i class="fa-solid fa-arrow-right"></i></div>
                        <div class="txt">admin <i class="fa-solid fa-envelope-open-text"></i>3</div>
                    </div>
                </div>
            </a>
            <a href="#" class="">
                <div class="up">
                    <div class="img">
                        <img src="@/assets/images/image_3.jpg.webp" alt="image...">
                    </div>
                    <div class="when">
                        <p class="day">27</p>
                        <p>january</p>
                        <p>2019</p>
                    </div>
                </div>
                <div class="down">
                    <div class="cent">
                        <div class="title">skills to develop your child memory</div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.</p>
                    </div>
                    <div class="more">
                        <div class="btn btn-warning text-light">read more <i class="fa-solid fa-arrow-right"></i></div>
                        <div class="txt">admin <i class="fa-solid fa-envelope-open-text"></i>3</div>
                    </div>
                </div>
            </a>
            <a href="#" class="">
                <div class="up">
                    <div class="img">
                        <img src="@/assets/images/image_4.jpg.webp" alt="image...">
                    </div>
                    <div class="when">
                        <p class="day">27</p>
                        <p>january</p>
                        <p>2019</p>
                    </div>
                </div>
                <div class="down">
                    <div class="cent">
                        <div class="title">skills to develop your child memory</div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.</p>
                    </div>
                    <div class="more">
                        <div class="btn btn-warning text-light">read more <i class="fa-solid fa-arrow-right"></i></div>
                        <div class="txt">admin <i class="fa-solid fa-envelope-open-text"></i>3</div>
                    </div>
                </div>
            </a>
            <a href="#" class="">
                <div class="up">
                    <div class="img">
                        <img src="@/assets/images/image_5.webp" alt="image...">
                    </div>
                    <div class="when">
                        <p class="day">27</p>
                        <p>january</p>
                        <p>2019</p>
                    </div>
                </div>
                <div class="down">
                    <div class="cent">
                        <div class="title">skills to develop your child memory</div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.</p>
                    </div>
                    <div class="more">
                        <div class="btn btn-warning text-light">read more <i class="fa-solid fa-arrow-right"></i></div>
                        <div class="txt">admin <i class="fa-solid fa-envelope-open-text"></i>3</div>
                    </div>
                </div>
            </a>
            <a href="#" class="">
                <div class="up">
                    <div class="img">
                        <img src="@/assets/images/image_6.webp" alt="image...">
                    </div>
                    <div class="when">
                        <p class="day">27</p>
                        <p>january</p>
                        <p>2019</p>
                    </div>
                </div>
                <div class="down">
                    <div class="cent">
                        <div class="title">skills to develop your child memory</div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.</p>
                    </div>
                    <div class="more">
                        <div class="btn btn-warning text-light">read more <i class="fa-solid fa-arrow-right"></i></div>
                        <div class="txt">admin <i class="fa-solid fa-envelope-open-text"></i>3</div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'BlogCards',
}
</script>

<style lang="scss" scoped>
.bg{
    background-color: #fafafa;
}
.container {
    width: 80%;
    *{
        text-transform: capitalize;
    }
    display: flex;
    align-items: center;
    justify-content: space-around;
    .row {
        padding: 5rem 0;
        margin: auto;

        a {
            color: #1f1f1f;
            text-decoration: none;
            background-color: #fff;
            padding: 0;
            width: 30%;
            margin: 0.7rem;

            .when {
                line-height: 3px;
            }

            .up {
                position: relative;
                overflow: hidden;
                .img {

                    img {
                        width: 100%;
                    }
                }
                .when{
                    position: absolute;
                    top: 65%;
                    left: 0;
                    padding:0.5rem 0.2rem;
                    text-align: center;
                    background-color: #5d50c6;
                    color: #fff;
                    .day{
                        margin-top: 0.5rem;
                        font-size: 25px;
                    }
                    p:not(.day){
                        opacity: 0.9;
                    }
                }
            }
            .down{
                padding: 0.5rem ;
                .title{
                    font-weight: bold;
                }
                p{
                    font-size: 14px;
                    opacity: 0.8;
                }
                .more{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    .txt{
                        color: #5d50c6;
                        font-size: 12px;
                        i
                        {
                            color:#1f1f1f;
                            opacity: 0.8;
                        }
                    }
                }
            }
        }
    }
}
@media (max-width:870px) {
    .container{
        .row{
            a{
                width: 45%;
                margin:1rem;
                .up{
                    .when{
                        top: 60%;
                    }
                }
            }
        }
    }
}
@media (max-width:830px) {
    .container{
        .row{
            a{
                width: 100%;
                margin: 1rem auto;
            }
        }
    }
}
</style>