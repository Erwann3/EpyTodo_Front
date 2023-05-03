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
import { login } from '@/services/authService';

export default {
    name: 'UserLogin',
    data() {
        return {
            email: '',
            password: '',
            errorMessage: ''
        };
    },
    methods: {
        async onSubmit() {
            try {
                // todo : do something with the token returned by it
                await login(this.email, this.password);
            } catch (error) {
                this.errorMessage = error.response.data.msg;
            }
        }
    }
};
</script>
