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
          <q-search icon="search" color="black" inverted clearable v-model="model" placeholder="Unit id" />
        </div>
        <div class="q-pl-md">
          <q-btn color="black" size="md" icon="search" @click="getjoint" />
        </div>
      </div>
      <q-list highlight class="full-width">
        <q-list-header>Author</q-list-header>
        <q-item>
          <a :href= "'https://explorer.byteball.org/#' + address">{{address}}</a>
        </q-item>

        <q-list-header>Parent</q-list-header>
        <q-item>
          <a :href= "'https://explorer.byteball.org/#' + parent">{{parent}}</a>
        </q-item>

        <q-list-header>Time</q-list-header>
        <q-item>
          {{time}}
        </q-item>

        <q-list-header>Fees</q-list-header>
        <q-item>
          {{fees}}
        </q-item>

        <q-list-header>Main Chain Index</q-list-header>
        <q-item>
          {{mci}}
        </q-item>
      </q-list>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      model: '',
      address: '',
      parent: '',
      time: new Date(),
      fees: 0,
      mci: 0
    }
  },
  methods: {
    getjoint: function () {
      console.log(this.model)
      this.$byteballClient.api.getJoint(this.model.trim(), (err, result) => {
        console.log(err, result)
        this.address = result.joint.unit.authors[0].address
        this.parent = result.joint.unit.parent_units[0]
        this.time = new Date(Number(result.joint.unit.timestamp + '' + 100))
        this.fees = result.joint.unit.payload_commission + result.joint.unit.headers_commission
        this.mci = result.joint.unit.main_chain_index
        // this.inputs = result.joint.unit.messages
      })
    }
  },
  mounted () {}
}
</script>

<style>
</style>
