<template>
  <div class="photo-wall">
    <!-- <el-row :gutter="10">
      <el-col v-for="photo in photo.list" :key="photo.id" :span="6">
        <div class="photo-card">
          <img :src="photo.url" alt="" class="photo-image">
          <el-button type="danger">Delete</el-button>
        </div>
      </el-col>
      <el-button type="primary">Upload</el-button>
    </el-row> -->
    <el-row>
      <el-upload v-model:file-list="photo.list" 
      list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
      <el-icon><Plus /></el-icon>
      </el-upload>
      <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image" />
      </el-dialog>
    </el-row>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const photo = reactive({
  list: [
    {
      id: 1,
      url: 'http://akarana.oss-ap-southeast-1.aliyuncs.com/car1.jpg'
    },
    {
      id: 2,
      url: 'http://akarana.oss-ap-southeast-1.aliyuncs.com/car2.jpg'
    },
    {
      id: 3,
      url: 'http://akarana.oss-ap-southeast-1.aliyuncs.com/car3.jpg'
    },
    {
      id: 4,
      url: 'http://akarana.oss-ap-southeast-1.aliyuncs.com/car4.jpg'
    },
    {
      id: 5,
      url: 'http://akarana.oss-ap-southeast-1.aliyuncs.com/car5.jpg'
    },
    {
      id: 6,
      url: 'http://akarana.oss-ap-southeast-1.aliyuncs.com/car6.jpg'
    },
    {
      id: 7,
      url: 'http://akarana.oss-ap-southeast-1.aliyuncs.com/car7.jpg'
    },
    {
      id: 8,
      url: 'http://akarana.oss-ap-southeast-1.aliyuncs.com/car8.jpg'
    },
    {
      id: 9,
      url: 'http://akarana.oss-ap-southeast-1.aliyuncs.com/car9.jpg'
    },
  ]
})
</script>
  
  <style scoped>
  .photo-wall {
    padding: 20px;
  }
  
  .photo-card {
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 20px;
  }
  
  .photo-image {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .photo-info {
    padding: 10px;
  }
  
  .photo-title {
    font-weight: bold;
    margin: 0 0 10px;
  }
  
  .photo-description {
    margin: 0;
  }

  
  </style>
  