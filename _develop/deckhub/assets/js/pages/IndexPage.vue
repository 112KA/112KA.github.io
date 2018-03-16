<template>
  <div>
    <tabs ref="tabs"></tabs>
    <deck ref="deck_main"></deck>
    <div>
      <div>
        <b-btn @click="shuffle">shuffle</b-btn>
        <b-btn @click="edit">edit</b-btn>
      </div>

      <b-btn @click="export_to_app" variant="primary" class="m-1">export</b-btn>
    </div>
  </div>
</template>


<script>


import data from '../Data';
// import Deck from '../components/Deck.vue'
import VueRouter from 'vue-router'

export default {
  data() {
    return {
    }
  },

  created() {
    let pNextTick = new Promise((resolve, reject) => {
      this.$nextTick(() => {
        resolve();
      });
    });

    Promise.all([data.init(), pNextTick])
      .then(() => {
        this.$refs.tabs.selectTab(data.slotIndex);

        let cards = data.getCardsBySlotIndex(data.slotIndex);
        this.$refs.deck_main.set_cards(cards);

        this.$refs.tabs.$on('CHANGE', () => {
          let index = this.$refs.tabs.selectedTabIndex
          , cards = data.getCardsBySlotIndex(index);
          this.$refs.deck_main.set_cards(cards);
          data.saveSlotIndex(index);
        });
      });
  },

  methods: {
    shuffle() {
      const cards = data.getShuffleCards();
      this.$refs.deck_main.set_cards(cards);
      data.saveCardsBySlotIndex(this.$refs.tabs.selectedTabIndex, cards);
    },

    edit() {

    },

    export_to_app() {

    },
  },
}
</script>


<style scoped>

</style>