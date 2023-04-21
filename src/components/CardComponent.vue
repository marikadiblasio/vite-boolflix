<template>
    <div class="col-12 col-md-6 col-lg-4 d-flex">
        <div class="card front w-100">
            <img class="front-img" :src="fullImgPath" :alt="title">
        </div>
        <div class="card back w-100">
            <img class="back-img back-img d-md-none" :src="fullImgPath" :alt="title">
            <div class="card-body">
                <h3>{{ title }}</h3>
                <h5>{{ originalTitle }}</h5>
                <div>{{ language }} <img class="flag" :src="'/images/' + flag + '.png'" alt=""></div>
                <div>
                    <h6>Trama</h6>
                    <p>{{ overview }}</p>
                </div>
            <div>
                {{ Math.round(vote) }}
                <i v-for="(n) in stars" :key="n.id" :class="{'voted': n.id <= Math.round(vote)}" class="fa-solid fa-star"></i>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {store} from '../data/store';
    export default {
        name: 'CardComponent',
        props: //['title', 'originalTitle', 'language', 'vote', 'image']
        {
            title: {
                type: String,
            },
            originalTitle: {
                type: String,
            },
            language: {
                type: String,
            },
            vote: {
                type: Number,
            },
            image: {
                type: String,
            },
            overview: {
                type: String,
            },
            imagePath: {
                type: String
            }
        },
        data(){
            return{
                store,
                flag: this.language === 'en' || this.language === 'es' || this.language === 'it' || this.language === 'de' ||this.language === 'fr'? this.language : 'unknown',
                stars: [
                    { id: 1},
                    { id: 2},
                    { id: 3},
                    { id: 4},
                    { id: 5},
                    { id: 6},
                    { id: 7},
                    { id: 8},
                    { id: 9},
                    { id: 10}
                ],
                baseImgUrl: 'https:image.tmdb.org/t/p/w342',
                // flags:['en', 'it', 'fr', 'de', 'es']
            }
        },
        computed: {
            fullImgPath(){
                if(this.imagePath===undefined){
                   return 'https://banner2.cleanpng.com/20190219/ue/kisspng-photographic-film-westchester-film-festival-otherm-classical-music-mayhem-music-and-myths-and-book-5c6cb0e9c89a56.7139856315506270498217.jpg'
                } else{
                    return this.baseImgUrl + this.imagePath;
                }
            },
            // flag(){
            //     if(this.flags.includes(this.language)){
            //         return this.language
            //     } else {
            //         return 'unknown'
            //     }
            // }
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
        height: 80vh;
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
    object-fit: cover;
   }
   .back-img{
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center;
   }
    .col-12.col-md-6.col-lg-4:hover .back{
        transform: rotateY(0);
    }
    .flag{
        width: 30px;
    }
    i.voted{
        color: orange;
    }
    @media screen and (min-height: 700px){
        .col-12.col-md-6.col-lg-4{
            height: 30vh;
        }
    }
        
    
</style>