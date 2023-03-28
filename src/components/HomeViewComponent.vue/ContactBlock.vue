<template>
    <div class="contact">
        <div class="content">
            <form class="row">
                <h2 class=" col-md-12">Request A Quote</h2>
                <p class=" col-md-12">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div class="f-name col-md-6"><input type="text" placeholder="Fname"></div>
                <div class="l-name col-md-6"><input type="text" placeholder="Lname"></div>
                <div class="course col-md-6"><input type="" placeholder="Courses"></div>
                <div class="phone col-md-6"><input type="text" placeholder="Phone"></div>
                <div class="mess col-md-6"><textarea name="Message" id="" cols="21" rows="1"></textarea></div>
                <div class="button col-md-6"><div class="btn btn-warning">Send</div></div>
            </form>
        </div>
    </div>
</template>

<script>
    export default{
        name:'ContactBlock',
    }
</script>

<style lang="scss" scoped>
    .contact{
        background-image: url("@/assets/images/bg_5.jpg");
        background-attachment: fixed;
        background-size: auto ;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: end;
        color: #fff;
        form{
            width: 40%;
            margin-left: 50%;
            background-color: #1eaaf1;
            h2,p{
                padding: 1rem 0 0.5rem 0.5rem;
            }
            p{
                opacity: 0.8;
            }
            input{
                padding: 0.5rem 0;
                color: #fff;
                background-color:#1eaaf1;
                margin: 0.5rem;
                outline: 0;
                border: 0;
                border-bottom: 1px solid #fff;
                &::placeholder{
                    color: #fff;
                    opacity: 0.8;
                }
            }
            .mess textarea{
                background-color: #1eaaf1;
                margin: 0.5rem;
                outline: 0;
                border: 0;
                border-bottom: 1px solid #fff;
                padding: 1rem 0;
            }
            .button{
                padding: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: center;
                .btn{
                    color: #fff;
                    width: 30%;
                    margin-left: 40%;
                }
            }
        }
    }
    @media (max-width:970px) {
        .contact form{
            width: 50%;
            margin-left: 40%;
        }
    }
</style>