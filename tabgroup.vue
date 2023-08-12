<template>
  <div>
    <TabGroupPresentational :tabs="tabs" :initialTab="initialTab" :textAlign="textAlign">
      <template v-slot:tab-head-for-sale>
        For Sale
      </template>
      <template v-slot:tab-panel-for-sale>
        <h2 class="title">For Sale Content</h2>
      </template>
      <template v-slot:tab-head-for-rent>
        For Rent
      </template>
      <template v-slot:tab-panel-for-rent>
        <h2 class="title">For Rent Content</h2>
      </template>
      <template v-slot:tab-head-sold>
        Sold
      </template>
      <template v-slot:tab-panel-sold>
        <h3 class="title">Sold Content</h3>
      </template>
    </TabGroupPresentational>
  </div>
</template>

<script>
import TabGroupPresentational from './tabgroup.presentational.vue';

export default {
  name: 'TabGroup',
  components: {
    TabGroupPresentational,
  },
  props: {
    textAlign: String,
    tabs: Array,
    initialTab: String,
  },
  data() {
    return {
      initialTab: 'for-sale',
      tabs: ['for-sale', 'for-rent', 'sold']
    };
  },
};
</script>

<style lang="scss">
@import "../../vweb/common/components/mvtsearchfilter/mvt-searchfilter.scss";
</style>
