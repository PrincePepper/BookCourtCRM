<template>
    <div class='CatalogBook'>
        <tittle class="CatalogBook-name">{{ book_data.title }}</tittle>
    </div>
</template>
  
<script>

    export default {
        name: 'CatalogBook',
        components: {

        },
        props: {
            book_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {

            }
        },
        computed: {},
        methods: {

        }
    }
</script>
  
<style lang="scss">
    .CatalogBook {
        box-shadow: 0 0 20px 0 #eccab7;
        &-name {
            font-family: "Playfair Display";
            font-size: 32px;
            text-align: center;
            display: block;
            font-weight: bold;
        }
        &-image {
            width: 150px;
            height:250px;
            padding-top: 40px;
            margin-right: 40px;
            margin-left: 40px;
        }
    }
    
</style>
  