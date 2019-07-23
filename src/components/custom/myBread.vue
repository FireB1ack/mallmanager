<template>
  <!--    自定义面包屑组件-->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{label1}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{label2}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: "myBread",
    props: ['label1', 'label2']
  }
</script>

<style scoped>

</style>
