<script>
export default {
  name: "LandingPage",
  methods: {
    gotoIniciarSesion() {
      this.$router.push('/login')
    },
    gotoRegistrarse() {
      this.$router.push('/sing_in')
    }
  },
}
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <p>
          Bienvenido a Secret Santa, la página que te ayuda a crear tus sorteos del amigo invisible.
        </p>
        <p>
          Podrás mandar el resultado del sorteo por whatsapp o email.
        </p>
        <p>
          Si ya hiciste algún sorteo con nosotros
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <span class="btn" @click="gotoIniciarSesion">Inicia Sesión</span>
      </v-col>
      <v-col cols="12">
        <p>
          Si vas a hacer un nuevo sorteo puedes registrarte para que se quede todo guardado o continuar
        </p>
      </v-col>
      <v-col cols="12">
        <span class="btn" @click="gotoRegistrarse">Registrate</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        Si ya hiciste un sorteo y quieres entrar al resumen y la posibilidad de volver a enviar los correos, usa el
        localizador
      </v-col>
      <v-col cols="12">
        <v-form validate-on="submit">
          <v-row class="d-flex justify-content-center align-items-center">
            <v-col cols="8">
              <v-text-field v-model="userName" :rules="rules" label="Identificador" variant="outlined"
                class="input-text" density="compact"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-btn :loading="loading" class="btn-form-green" text="Enviar" type="submit"></v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-end">
        <v-btn class="btn" to="/form_friends">
          Comenzar
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.btn-form-green {
  background-color: rgba(0, 149, 113, 0.73) !important;
  text-transform: capitalize !important;
  color: white !important;
  font-family: "Montserrat", sans-serif !important;
}
</style>