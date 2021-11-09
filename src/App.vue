<template>
  <div>
    <textBoxes>
      <p>User name </p><input v-model="userName" type="text"/> 
      <p>Password </p><input v-model="password" type="password"/>
    </textBoxes>

    
    <p><button id="btn1" type="button" @click="register_user(this.userName, this.password)">Register User</button></p>
  </div>
  <div class="popup">      
        <Modal
          v-show="isModalVisible"
          @close="closeModal"
        />        
</div>
</template>
<script>

const axios = require('axios').default;
import Modal from './components/modal_dialog.vue';


export default {
  name: "App",
  
  data: function ()
  {
    return {
      isModalVisible: false,

    }

  },

  components: {
    Modal,
  },

  methods: {
    register_user: function (username, password) {

      // send a POST request
      this.showModal()
      axios({
        method: 'post',
        // url: '/login',
        url: "/username_password",
        data: {
          username: username,
          password: password,
        }
      })

    },

    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
};


</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.textBoxes {
  border-block-color: black;
}
</style>
