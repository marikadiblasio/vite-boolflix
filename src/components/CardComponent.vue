<template>
    <div class="col-12 col-md-6 col-lg-4 d-flex">
        <div class="card front w-100 h-100">
            <img class="front-img" :src="fullImgPath" :alt="item.title || item.name">
        </div>
        <div class="card back w-100 h-100">
            <img class="back-img" :src="fullImgPath" :alt="item.title || item.name">
            <div class="card-body">
                <h3>{{ item.title }}</h3>
                <h5>{{ item.original_title || item.original_name}}</h5>
                <div><img class="flag" :src="'/images/svg/language-' + item.original_language + '.svg'" :alt="item.original_language"></div>
                <div v-if="item.overview">
                    <h6>Trama</h6>
                    <p>{{ item.overview }}</p>
                </div>
            <div>
                {{ Math.round(item.vote_average)/2 }}
                <i v-for="(n) in stars" :key="n.id" :class="(n.id <= Math.round(item.vote_average)/2) ? 'fa-solid' : 'fa-regular'" class=" fa-star"></i>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {store} from '../data/store';
    export default {
        name: 'CardComponent',
        props: ['item'],
        data(){
            return{
                store,
                // flag: this.language === 'en' || this.language === 'es' || this.language === 'it' || this.language === 'de' ||this.language === 'fr'? this.language : 'unknown',
                stars: [
                    { id: 1},
                    { id: 2},
                    { id: 3},
                    { id: 4},
                    { id: 5},
                ],
                baseImgUrl: 'https:image.tmdb.org/t/p/w342',
            }
        },
        computed: {
            fullImgPath(){
                if(this.item.poster_path === undefined || this.item.poster_path === null){
                   return 'https://banner2.cleanpng.com/20190219/ue/kisspng-photographic-film-westchester-film-festival-otherm-classical-music-mayhem-music-and-myths-and-book-5c6cb0e9c89a56.7139856315506270498217.jpg'
                } else{
                    return this.baseImgUrl + this.item.poster_path;
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .col-12.col-md-6.col-lg-4:hover .front{
        transform: rotateY(180deg);
    }
    .col-12.col-md-6.col-lg-4{
        transition: transform 0.8s;
        transform-style: preserve-3d;
        perspective: 1000px;
        height: 90vh;
    }
    .back{
        transform: rotateY(180deg);
         position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }
    .front{
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }
   .front-img{
    width: 100%;
    height: 100%;
   }
   .back-img{
    width: 100%;
    height: 40%;
    object-fit: cover;
    object-position: bottom;
   }
    .col-12.col-md-6.col-lg-4:hover .back{
        transform: rotateY(0);
    }
    .flag{
        width: 30px;
    }
    .card-body{
        height: 60%;
        overflow-y: auto;
    }
    @media screen and (min-height: 700px){
        .col-12.col-md-6.col-lg-4{
            height: 500px;
        }
    }
        
    
</style>