<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">EpiTodo</a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" v-if="!token">
                            <router-link to="/login" class="nav-link">Login</router-link>
                        </li>
                        <li class="nav-item" v-if="!token">
                            <router-link to="/register" class="nav-link">Register</router-link>
                        </li>
                        <li class="nav-item" v-if="token">
                            <button @click="logout" class="btn btn-link nav-link">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    name: 'App',
    setup() {
        const store = useStore();
        const token = computed(() => store.state.token);

        const logout = () => {
            store.dispatch('clearToken');
        };

        return {
            token,
            logout
        };
    }
};
</script>
  
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    padding-top: 4rem;
}
</style>
