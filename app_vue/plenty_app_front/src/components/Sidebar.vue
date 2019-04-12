<template>
    <nav class="side-nav">
        <ul>
            <li class="side"><router-link :to="{ name: 'Profile' }">Profile</router-link></li>
            <li class="side"><router-link :to="{ name: 'MyPlants' }">My Plants</router-link></li>
            <li class="side"><router-link :to="{ name: 'Reminders' }">Reminders</router-link></li>
            <li class="side"><router-link :to="{ name: 'AllPlants' }">All Plants</router-link></li>
            <li class="side"><router-link :to="{ name: 'Home' }">Log out</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Sidebar',
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
li.side{
    margin: 10px;
}
a.router-link-exact-active{
    color: purple
}
</style>
