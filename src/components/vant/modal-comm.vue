<template>
  <div>
    <rule-modal
      ref="rule-modal">
      </rule-modal>
  </div>
</template>

<script>
import ruleModal from './rule-modal'
export default {
  components: {
    ruleModal
  },
  methods: {
    handleOpen() {
      this.$refs['rule-modal'].handleOpen();
    }
  }
}
</script>

<style>

</style>
