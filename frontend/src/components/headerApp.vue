<template>
    <div class="page-header">
        <div class="btns-head">
        <!-- <img alt="Groupomana logo" src="../assets/icon-above-font.png"> -->
            <router-link to="/profil">
                <button class="btn btn-primary">
                    Mon profil
                </button>
            </router-link>
        
                <button class="btn btn-danger mr-5" @click.prevent="logOut()">
                    Se deconnecter
                </button>
        </div>
    <hr class="solid">
            
    </div>
</template>

<script>
export default {
    name: 'headerApp',
    methods: {
        logOut(){

        }
    }
}
</script>

<style scoped lang="scss">

.page-header {
    height: 10%; 
    background-color: rgb(58, 77, 90);
}

.btns-head {
    display: flex;
    justify-content: flex-end;
}

hr.solid {
    border-top: 1px rounded rgb(212, 212, 212);
}

.btn {
    margin-left: 1em;
    margin-top: 1em;
}

// hr.solid {
//   border-top: 3px solid #bbb;
// }


</style>