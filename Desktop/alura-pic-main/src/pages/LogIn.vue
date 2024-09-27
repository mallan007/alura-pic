<template>
    <div id="login-page"
        class="flex flex-col items-center font-inter bg-white border-none mx-0 
            md:flex-row md:max-w-full md:max-h-full md-shrink-0 dark:border-gray-700 dark:bg-gray-800">

        <div id="login-img"
            class="flex flex-col justify-between w-1/2 leading-normal bg-green-700 bg-cover bg-h-full"
             >
            <img class="object-scale-down h-625 w-652 top-148 left-26" 
                src="../assets/library-loginpage.png" alt="Biblioteca"
            >
        </div>
        <!-- Here's the division between image andLogin Form -->
        <div id="login-form"
            class="flex flex-col justify-between p-4 leading-normal w-1/2 h-full bg-white gap-x-600">
            <div id="login-form-title"
             class="mb-4 text-left text-dark-900 dark:text-white h-[335] w-[429]">
                <p class="text-3xl font-medium text-dark-900 dark:text-white
                    object-scale-down h-39 w-173 top-293 left-885">
                    Bem vindo!
                </p>
                <p class="text-base font-small text-dark-900 dark:text-white p-1
                    object-scale-down h-37 w-418 top-341 left-885">
                    Faça login para reservar e emprestar livros de uma forma simples e fácil
                </p>
            </div>

            <div id="login-form-fields"
             class="bg-white border border-gray-200 rounded-lg shadow px-4 py-4
                dark:bg-gray-800 dark:border-gray-700
                object-scale-down min-w-320 h-[335] w-[429] top-395 left-874">
                <form class="space-y-4">

                    <div>
                        <label for="email" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">
                            Usuário
                        </label>
                        <input type="email" name="email" id="email" placeholder="Digite seu e-mail" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
                            dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required v-model="email" />
                        <div class="error" v-if="errors.email">
                            {{ errors.email }}
                        </div>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">
                            Senha</label>
                        <input type="password" name="password" id="password" placeholder="Digite sua senha"
                            v-model="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 
                            dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        <div class="error" v-if="errors.password">
                            {{ errors.password }}
                        </div>
                    </div>
                    <button type="submit" @submit.prevent="onLogin()" action="#"
                    class="w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4
                        focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 text-center
                        dark:bg-green-600 dark:hover:bg-green-800 dark:focus:ring-green-800">
                        Fazer Login
                    </button>
                    <div class="text-sm font-medium text-decoration-underline text-gray-500 dark:text-gray-300">
                        <a href="https://wa.me/5585985898072/?text=urlencodedtex" class="text-dark-700 hover:underline dark:text-dark-500">
                            Não consegue acessar? Fale com um atendente
                        </a>
                        <!--Criar uma rota para o atendente: Botão de atendimento online (ícone e link)-->
                        <br>
                        <br>
                        <a href="#" class="text-dark-700 hover:underline dark:text-dark-500">
                            <router-link to="/signup">
                                Criar nova conta
                            </router-link>
                        </a>
                    </div>
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
            let validations = new Validations(this.email, this.password);
            this.errors = validations.checkValidations();
            if (this.errors.length) {
                return false;
            } else {
                this.$router.push({ name: 'home' }); //Ir para a rota Home se for validado o login
            }
        }
    }
    /*
    data: keys: { email: email, password: password }
    Function Login -> axios GET method
    Router Link to Home after Login auth
    Check Tokens in .env
    */
}
</script>