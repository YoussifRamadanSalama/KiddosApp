<template>
    <div class="MediaBlock row">
        <div class="MbContent mbc1 col-md-3 col-12">
            <span class="icon teacher">
                <i class="fa-solid fa-chalkboard-user"></i>
            </span>
            <h3>Certified Teachers</h3>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        </div>
        <div class="MbContent mbc2 col-md-3 col-12">
            <span class="icon reading">
                <i class="fa-solid fa-book-open-reader"></i>
            </span>
            <h3>Special Education</h3>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        </div>
        <div class="MbContent mbc3 col-md-3 col-12">
            <span class="icon book">
                <i class="fa-solid fa-book"></i>
            </span>
            <h3>Book & Library</h3>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        </div>
        <div class="MbContent mbc4 col-md-3 col-12">
            <span class="icon certification">
                <i class="fa-solid fa-certificate"></i>
            </span>
            <h3>Certification</h3>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        </div>
    </div>
</template>

<script>
    export default{
        name:'MediaBlock',
    }
</script>

<style lang="scss" scoped>
:root {
  -main-paint: #1eaaf1;
}
    .MediaBlock{
        text-transform: capitalize;
        color: #fff;
        position: relative;
        z-index: 1;
        width: 100%;
        padding: 0;
        margin: 0;
        text-align: center;
        .MbContent{
            span{
                background-color: #fff;
                border-radius: 50%;
                width: 95px;
                padding: 20px 0;
                margin: -45px auto auto auto;
                display: flex;
                align-items: center;
                justify-content: center;
                i{
                    font-size: 50px;
                }
            }
            h3{
                padding: 5px 0;
            }
            p{
                opacity: 0.8;
                padding-bottom:2.5rem ;
            }
            &.mbc1{
                background-color: #1eabf1ea;
            }
            &.mbc2{
                background-color: rgb(74, 180, 74);
            }
            &.mbc3{
                background-color: rgb(154, 71, 231);
            }
            &.mbc4{
                background-color: rgb(210, 53, 53);
            }
            .icon{
                color:#1eaaf1;
            }
        }
    }
</style>