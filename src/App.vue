<script setup>

</script>

<template>
  <v-container fluid id="main-container">
    <v-card>
      <v-row>
        <v-col cols="12">
          <img id="imageLogo" src="@a/images/secretsanta.svg" alt="logo aplicación" />
        </v-col>
      </v-row>
      <router-view />
    </v-card>
  </v-container>

</template>

<style scoped>
#main-container {
  background-color: rgba(0, 149, 77, 0.21);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-card {
  width: 75%;
  height: 90%;
  border-radius: 12px;
  padding: 15px;
}
</style>
