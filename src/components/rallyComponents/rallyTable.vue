<template>
    <div class="table">
        <el-table :data="list" border stripe style="width: 1390px; height: 100%;">
            <!--first colum-->
            <el-table-column prop="id" label="ID">

            </el-table-column>

            <el-table-column prop="image" label="Cover Image">
                <template #default="scope">
                    <img :src="scope.row.image" style="width: 100px; height: 100px;">
                </template>
            </el-table-column>

            <el-table-column prop="mainTitle" label="Main Title">

            </el-table-column>

            <el-table-column prop="subTitle" label="Sub Title">

            </el-table-column>

            <el-table-column prop="time" label="Time">

            </el-table-column>

            <el-table-column prop="status" label="Status">

            </el-table-column>

            <el-table-column label="Operation">
                <template #default="scope">
                    <!--preview button-->
                    <el-button :icon="ZoomIn" circle @click="previewClick(scope.row)" />
                    <!--confirm button scop.row.id传递局部对应的id值-->
                    <el-popconfirm title="Are you sure to close this rally?" @confirm="setupHandle(scope.row.id)">
                        <template #reference>
                            <el-button :icon="Check" type="success" circle />
                        </template>
                    </el-popconfirm>
                    <!--edit button-->
                    <el-button type="primary" :icon="Edit" circle @click="editClick(scope.row)"/>
                    <!--delete button scope.row.id传递局部对应的id值-->
                    <el-popconfirm title="Are you sure to delete this rally?" @confirm="deleteHandle(scope.row.id)">
                        <template #reference>
                            <el-button type="danger" :icon="Delete" circle ></el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { defineProps,onMounted } from 'vue';
import { Edit, Delete, ZoomIn, Check} from '@element-plus/icons-vue'
const {list, previewClick, deleteHandle, setupHandle, editClick} = defineProps(['list', 'previewClick', 'deleteHandle', 'setupHandle', 'editClick']);
</script>

<style lang="less" scoped>

</style>