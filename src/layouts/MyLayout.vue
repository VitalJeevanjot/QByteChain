<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header class="no-shadow">
      <q-toolbar :inverted="$q.theme === 'ios'" color="white">
        <q-toolbar-title class="text-black">
          <div align="center">
            Byteball Explorer
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <q-page>
        <div class="row justify-center q-pa-sm">
          <div class=""> </div>
          <div class="col-8">
          <q-search icon="search" color="black"  inverted clearable v-model="model" placeholder="Unit id"/>
           </div>
          <div class="q-pl-md">
            <q-btn color="black" size="md" icon="search" @click="getjoint"/>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      model: ''
    }
  },
  methods: {
    getjoint: function () {
      this.$byteballClient.api.getJoint(this.model.trim(), function (err, result) {
        console.log(err, result)
      })
    }
  },
  mounted () {
  }
}
</script>

<style>
</style>
