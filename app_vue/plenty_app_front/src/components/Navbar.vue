<template>
    <nav class="main-nav">
        <ul>
            <li class="nav"><router-link :to="{ name: 'Home' }">Home</router-link></li>
            <li class="nav"><router-link :to="{ name: 'About' }">About</router-link></li>
            <li class="nav"><router-link :to="{ name: 'Login' }">Log In</router-link></li>
            <li class="nav"><router-link :to="{ name: 'Signin' }">Sign In</router-link></li>
            <li class="nav"><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            
        }
    }
}
</script>

<style>
ul{
    list-style-type: none;
    padding: 0;
}
a{
    color: #42b983
}
li.nav{
    display: inline-block;
    margin: 10px;
}
a.router-link-exact-active{
    color: purple;
}
</style>
