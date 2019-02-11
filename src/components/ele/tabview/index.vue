<template>
  <div class="tabview">
    <el-tabs type="border-card">
    <el-tab-pane label="合同审核">
      <!-- 合同审核 -->
      <contract-audit></contract-audit>
      </el-tab-pane>
    <el-tab-pane label="合同执行">
      <!-- 合同执行 -->
      <contract-execution></contract-execution>
    </el-tab-pane>
    <el-tab-pane label="合同完成">
      <!-- 合同完成 -->
      <contract-completion></contract-completion>
    </el-tab-pane>
    <el-tab-pane label="合同终止">
      <!-- 合同终止 -->
      <contract-termination></contract-termination>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import contractAudit from './components/contract-audit.vue';
import contractExecution from './components/contract-execution.vue';
import contractCompletion from './components/contract-completion.vue';
import contractTermination from './components/contract-termination.vue';
export default {
  components: {
    contractAudit,
    contractExecution,
    contractCompletion,
    contractTermination
  }
}
</script>

<style>

</style>
