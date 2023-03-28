<template>
    <div class="block ">
        <div class="image "> 
            <img src="@/assets/images/image_1.jpg" alt="img...">
            <div class="icon"><i class="fa-brands fa-square-instagram"></i></div>
        </div>
        <div class="image "> 
            <img src="@/assets/images/image_2.jpg" alt="img...">
            <div class="icon"><i class="fa-brands fa-square-instagram"></i></div>
        </div>
        <div class="image "> 
            <img src="@/assets/images/image_3.jpg" alt="img...">
            <div class="icon"><i class="fa-brands fa-square-instagram"></i></div>
        </div>
        <div class="image "> 
            <img src="@/assets/images/image_4.jpg" alt="img...">
            <div class="icon"><i class="fa-brands fa-square-instagram"></i></div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'ImageBlock',
    }
</script>

<style lang="scss" scoped>
    .block{
        overflow: hidden;
        display: flex;
        .image{
            overflow: hidden;
            margin: 0;
            padding: 0;
            position: relative;
            .icon{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: 0.2s ease-in;
                i{
                    color: #1eaaf1;
                    font-size: 30px;
                    display: none;
                    transition: 0.5s ease-in-out;
                    cursor: pointer;
                }
                &:hover i{
                    display: block;
                }
            }
            img{
                width: 100%;
            }
        }
    }
    @media (max-width:760px) {
        .block{
            flex-wrap: wrap;
        }
    }
</style>