<template>
    <div class="all-plants">
        <h1>All Plants</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Latin name</th>
                <th>Actions</th>
            </tr>
            <tr v-for="plant in plants" :key="plant.id">
                <td>{{ plant.name }}</td>
                <td>{{ plant.latin_name }}</td>
                <td>
                    <button><a href="">Details</a></button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import PlantsApi from '@/services/api/AllPlants'
export default {
    name: 'AllPlants',
    data() {
        return {
           plants: []
        }
    },
    created() {
        PlantsApi.getAllPlants()
        .then(plants => {this.plants = plants})
        .catch(error => console.log(error))
    }
}
</script>

<style scoped>
a{
    color: #42b983
}
ul{
    list-style-type: none;
}
li{
    display: initial;
    margin: 10px;
}
table{
    border-collapse: collapse;
    width: 100%;
}
table, th, td {
    border: 1px solid darkgreen;
}
</style>
