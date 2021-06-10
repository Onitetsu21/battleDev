<template>
  <div>
    <Welcome />
    <Form/>
  </div>
</template>

<script>
import Form from '../components/Form';
import Welcome from "../components/Welcome";
export default {
  name: "Info",
  components: {
    Welcome,
    Form
  }
}
</script>

<style scoped>

</style>