<template>
    <div class="mb-3" v-if="errorMessage">
        <span class="text-danger">{{ errorMessage }}</span>
    </div>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="onSubmit">
            <div class="mb-3">
                <label for="email" class="form-label">Email :</label>
                <input type="email" id="email" v-model="email" required placeholder="Enter your email"
                    class="form-control" />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password :</label>
                <input type="password" id="password" v-model="password" required placeholder="Enter your password"
                    class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>
  
<script>
import { useStore } from 'vuex';
import { ref } from 'vue';
import { login } from '@/services/authService';

export default {
    name: 'UserLogin',
    setup() {
        const store = useStore();
        const email = ref('');
        const password = ref('');
        const errorMessage = ref('');

        const onSubmit = async () => {
            try {
                const token = await login(email.value, password.value);
                store.dispatch('setToken', token);
            } catch (error) {
                errorMessage.value = error.response.data.msg;
            }
        };

        return {
            email,
            password,
            errorMessage,
            onSubmit
        };
    }
};
</script>
