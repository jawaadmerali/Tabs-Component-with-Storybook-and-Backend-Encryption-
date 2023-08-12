<template>
  <div class="tabgroup-presentational mvt-searchfilter-body grid grid-xs-1 large">
    <header class="card-header">
      <ul :class="`tab tab-bookmark center small`">
        <li
          class="tab-head"
          v-for="tab in tabs"
          :key="tab"
          v-on:click="switchTab(tab);"
        >
          <div class="tab-content" :class="{
                'active': isActiveTab(tab),
                'left': textAlign === 'left',
                'right': textAlign === 'right',
                'center': textAlign === 'center'
              }">
            <slot :name="tabHeadSlotName(tab)">{{ tab }}</slot>
          </div>
        </li>
      </ul>
    </header>
    <main class="card-body">
      <div class="tab-panel"><slot :name="tabPanelSlotName"> </slot></div>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    initialTab: String,
    tabs: Array,
    textAlign: String,
  },
  data() {
    return {
      activeTab: this.initialTab
    };
  },
  computed: {
    tabPanelSlotName() {
      return `tab-panel-${this.activeTab}`;
    }
  },
  methods: {
    switchTab(tabName) {
      this.activeTab = tabName;
    },
    isActiveTab(tab) {
      return this.activeTab === tab;
    },
    tabHeadSlotName(tab) {
      return `tab-head-${tab}`;
    }
  }
};
</script>

<style lang="scss">
.tab-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  cursor: pointer;
  border-bottom: 1px solid black;
  &.active{
    border-bottom: 2px solid black;
  }
  &.left{
    align-items: start;
  }
  &.right{
    align-items: end;
  }
}
</style
