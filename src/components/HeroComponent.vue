<template>
    <div>
        <video autoplay loop muted>
            <source src="../assets/media/Harry Potter Max Original Series Announcement Teaser (HD).mp4">
        </video>
    </div>
</template>
<script>
    export default {
        name: 'HeroComponent'
    }
</script>

<style lang="scss" scoped>
    div{
        width:100%;
        height: fit-content;
    }
    video{
        width: 100%;
    }
</style>