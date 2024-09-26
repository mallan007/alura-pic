<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
        <h1>SignUp Page</h1>
        <hr />
    </div>
    <form>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password">
        </div>
        <button type="submit" class="btn btn-primary">SignUp'</button>
    </form>
    <div class="btn-home">
        <router-link to="/">Voltar</router-link>
    </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'SignUp'
}
</script>