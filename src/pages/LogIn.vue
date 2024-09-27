<template>

<div class="flex flex-col items-center bg-white border-none mx-0 
 md:flex-row md:max-w-full md:max-h-full md-shrink-0 dark:border-gray-700 dark:bg-gray-800    ">
<div class="flex flex-col justify-between w-1/2 leading-normal bg-green-700 bg-cover bg-h-full">
    <img class="object-scale-down h-625 w-652 top-148 left-26" 
    src="../assets/library-logo.png" alt="Logo da Livraria">
</div>
    <div class="flex flex-col justify-between p-4 leading-normal w-1/2 h-full bg-white">
        <div class="p-4 leading-normal border-gray-700 dark:border-gray-700">
        <form @submit.prevent="onLogin()" class="space-y-6" action="#">
            <p class="text-2xl font-medium text-dark-900 dark:text-white
                object-scale-down h-39 w-173 top-293 left-885">
                Bem vindo!
            </p>
            <p class="text-base font-light text-dark-700 dark:text-white
                object-scale-down h-37 w-418 top-341 left-885">
                Faça login para reservar e emprestar livros de uma forma simples e fácil
            </p>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Usuário
                </label>
                <input type="email" name="email" id="email" placeholder="Digite seu e-mail"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
                    dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                    v-model = "email" 
                />
                <div class="error" v-if="errors.email">
                    {{errors.email}}
                </div>
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Senha
                </label>
                <input type="password" name="password" id="password" 
                    placeholder="Digite sua senha"  v-model = "password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 
                    dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                required />
                <div class="error" v-if="errors.password">
                    {{errors.password}}
                </div>
            </div>
            <button type="submit" class="w-full text-white bg-green-700 hover:bg-green-800 
                focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg 
                text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Fazer Login
            </button>
            <a href="#" class="underline text-dark-700 hover:text-dark-800 
                dark:text-white-700 dark:hover:text-white-800">
                Não consegue acessar? Fale com um atendente
            </a>
        </form>
        </div>
    </div>
</div>

</template>

<script>
export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: '',
            errors: [],
        }
    },
    methods: {
        onLogin() {
            let validations = new SignUpValidations(this.email, this.password);
            this.errors = validations.checkValidations();
            if (this.errors.length) {
                return false;
            } else {
                this.$router.push({ name: 'signup' });
            }
        }
    }
}
</script>