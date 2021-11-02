<template>
    <div class="header">
        <router-link to="/news">News</router-link>
        <router-link to="/ask">Ask</router-link>
        <router-link to="/jobs">Jobs</router-link>
    </div>
</template>


<style scoped>
.header{
    color: white;
    background-color: yellowgreen;
    display: flex;
    padding: 12px;
}

.header .router-link-exact-active{
    color: darkolivegreen;
}

.header a{
    color: white;
}

</style>