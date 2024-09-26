<template>
    <div>
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
            Cadastrar Usuário
        </h5>
        <a href="#" id="btn-back" class="text-blue-700 hover:underline dark:text-blue-500">
                <router-link to="/home">
                   voltar
                </router-link>
        </a>
    </div>
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form @submit="onSignUp()" class="space-y-6" action="#">
            <div id="user-name">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nome:
                </label>
                <input type="name" name="name" id="name" placeholder="Digite o nome"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
                    dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                    v-model = "name" 
                />
                <div class="error" v-if="errors.fullName">
                    {{errors.fullName}}
                </div>
            </div>
            <div id="user-email">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    E-mail:
                </label>
                <input type="email" name="email" id="email" placeholder="Digite o e-mail"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
                    dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                    v-model = "email" 
                />
                <div class="error" v-if="errors.email">
                    {{errors.email}}
                </div>
            </div>
            <div id="user-phone-number">
                <label for="tel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Telefone:
                </label>
                <input type="tel" name="phone-number" id="phone-number" placeholder="(xx) 9xxxx-xxxx"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
                    dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                    v-model = "tel" 
                />
                <div class="error" v-if="errors.phoneNumber">
                    {{errors.phoneNumber}}
                </div>
                <!--Implementar valdidation para phoneNumber-->
            </div>
            <div id="user-role">
                <label for="role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Função:
                </label>
                <select id="role">
                    <option value="administrator">Administrador</option>
                    <option value="student">Estudante</option>
                </select>
                <!--Implementar opções de Cargo e habilitar required-->
            <div class="error" v-if="errors.role">
                {{errors.role}}
            </div>
            <div id="user-password">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Senha:
                </label>
                <input type="password" name="password" id="password" 
                    placeholder="Digite a senha"  v-model = "password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 
                    dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                required />
                </div>
            </div>  
            <button id="btn-signup" type="submit" 
                class="w-full text-white bg-green-600 hover:bg-blue-800 focus:ring-4 focus:outline-none
                focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                dark:bg-emerald-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                Create account
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Already registered? 
                <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">
                    <router-link to="/login">
                        Go to Login Page
                    </router-link>
                </a>
                <br>
            </div>
        </form>
        
    </div>
    
</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            errors: [],
        }
    },
    methods: {
        onSignUp() {
            let validations = new SignUpValidations(this.email, this.password, this.firstName, this.lastName);
            this.errors = validations.checkValidations();
            if (this.errors.length) {
                return false;
            } else {
                this.$router.push({ name: 'login' });
            }
        }
    }
}
</script>