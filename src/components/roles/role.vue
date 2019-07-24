<template>
  <el-card>
    <my-bread label1="权限管理" label2="角色列表"></my-bread>
    <el-table
      :data="roleDataList"
      height="650px"
      style="width: 100%;margin-top: 20px">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-row class="colTop" v-for="(item,index) in scope.row.children" :key="index">
            <el-col :span="4">
              <el-tag closable @close="deleteRoleRight(scope.row,item.id)" type="success">{{item.authName}}</el-tag>
              <i class="el-icon-arrow-right"></i>
            </el-col>
            <el-col :span="20">
              <el-row v-for="(item1,index) in item.children" :key="index">
                <el-col :span="4">
                  <el-tag closable @close="deleteRoleRight(scope.row,item1.id)" type="info">{{item1.authName}}</el-tag>
                  <i class="el-icon-arrow-right"></i>
                </el-col>
                <el-col :span="20">
                  <el-tag closable type="warning" @close="deleteRoleRight(scope.row,item2.id)"
                          v-for="(item2,index) in item1.children" :key="index">
                    {{item2.authName}}
                  </el-tag>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row v-if="scope.row.children.length==0">
            <el-col :span="24">未分配权限</el-col>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column
        type="index"
        label="#"
        width="60">
      </el-table-column>
      <el-table-column
        prop="roleName"
        label="角色名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="roleDesc"
        label="角色描述"
        width="180">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-edit"
            circle
            plain>
          </el-button>
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            circle
            plain>
          </el-button>
          <el-button
            size="mini"
            type="success"
            icon="el-icon-check"
            circle
            plain>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
  export default {
    name: "role",
    data() {
      return {roleDataList: []}
    },
    mounted() {
      this.getRoleList()
    },
    methods: {
      getRoleList() {
        this.$axios.get('roles').then((res) => {
          this.roleDataList = res.data.data
        })
      },
      //删除用户指定权限
      async deleteRoleRight(roleObj, rightId) {
        const res = await this.$axios.delete(`roles/${roleObj.id}/rights/${rightId}`);
        const {meta: {status, msg}, data} = res.data;
        if (status == 200) {
          this.$message.success(msg);
          //将返回值中角色当前拥有权限赋值给当前角色
          roleObj.children = data;
        } else {
          this.$message.warning(msg);
        }
      }
    }
  }
</script>


<style scoped>
  .colTop {
    margin-top: 10px;
  }
</style>
