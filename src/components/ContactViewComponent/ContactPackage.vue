<template>
    <div class="contact">
        <div class="container">
            <div class="row">
                <div class="cards col-md-2 m-auto col-12">
                    <h4 class="title">Address</h4>
                    <p>198 West 21th Street, Suite 721 New York NY
                        10016</p>
                </div>
                <div class="cards col-md-2 m-auto col-12">
                    <h4 class="title">Contact Number</h4>
                    <a href="tel:+ 1235 2355 98">+ 1235 2355 98</a>
                </div>
                <div class="cards col-md-2 m-auto col-12">
                    <h4 class="title">Email Address</h4>
                    <a href="mailto:info@yoursite.com">info@yoursit
                        e.com</a>
                </div>
                <div class="cards col-md-2 m-auto col-12">
                    <h4 class="title">Website</h4>
                    <a href="//https:yoursite.com">yoursite.com</a>
                </div>
            </div>
        </div>
        <div class="gmapform container">
            <GoogleMaps />
            <form>
                <label for="#name">Name</label>
                <input type="text" id="name" placeholder=" Name">
                <label for="#mail">e-mail</label>
                <input type="email" id="mail" placeholder=" abc@example.com">
                <label for="#subject">Subject</label>
                <input type="text" id="subject" placeholder=" Subject">
                <textarea placeholder="Message" id="" cols="30" rows="2"></textarea>
                <div class="btn btn-outline-info">Submit</div>
            </form>
        </div>
    </div>
</template>
<script>
import GoogleMaps from './GoogleMaps.vue';
export default {
    name: 'ContactPackageComponent',
    components:{GoogleMaps,}
}
</script>
<style scoped lang="scss">
a {
    text-decoration: none;
}

* {
    color: #000;
}

.container:not(.gmapform) {
    padding: 1rem 0;
    height: 25vh;

    div {
        background-color: #fafafa;
        margin: 5px;
    }

    .row {
        padding: 1rem 0;
        height: 100%;
    }
}

.gmapform {
    padding: 1rem 0.5rem;
    background-color: #fafafa;
    display: flex;
    align-items: center;
    justify-content: space-between;

    form {
        display: flex;
        flex-direction: column;

        label {
            color: #1f1f1f;
        }

        textarea {
            margin: 5px 0;
        }

        input,
        textarea {
            border: 0;
            outline: 0;
        }

        input:focus,
        textarea:focus {
            border: 1px solid #5bc0de;

        }
    }
}</style>