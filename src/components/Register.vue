<template>
    <div class="mb-3" v-if="errorMessage">
        <span class="text-danger">{{ errorMessage }}</span>
    </div>
    <div>
        <h2>Register</h2>
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
            <div class="mb-3">
                <label for="firstname" class="form-label">First Name :</label>
                <input type="text" id="firstname" v-model="firstname" required placeholder="Enter your first name"
                    class="form-control" />
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Last Name :</label>
                <input type="text" id="name" v-model="name" required placeholder="Enter your last name"
                    class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
</template>  

<script>
import { register } from '@/services/authService';

export default {
    name: 'UserRegister',
    data() {
        return {
            email: '',
            password: '',
            firstname: '',
            name: '',
            errorMessage: ''
        };
    },
    methods: {
        async onSubmit() {
            try {
                // todo : do something with the returned jwt token
                await register(this.email, this.password, this.firstname, this.name);
            } catch (error) {
                this.errorMessage = error.response.data.msg;
            }
        }
    }
};
</script>
