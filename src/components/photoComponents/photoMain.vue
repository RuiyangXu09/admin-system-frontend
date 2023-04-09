<template>
    <div class="photo-wall">
        <el-row :gutter="10">
            <el-col v-for="photo in photos" :key="photo.id" :span="6">
            <div class="photo-card">
                <img :src="photo.url" alt="" class="photo-image">
                <el-button type="primary">Upload</el-button>
                <el-button type="danger">Delete</el-button>
            </div>
            </el-col>
        </el-row>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue'
  export default {
    name: 'PhotoWall',
    setup() {
      const state = reactive({
        photos: [
          {
            id: 1,
            title: 'Photo 1',
            description: 'This is the first photo',
            url: 'http://akarana.oss-ap-southeast-1.aliyuncs.com/car1.jpg'
          },
          {
            id: 2,
            title: 'Photo 2',
            description: 'This is the second photo',
            url: 'http://akarana.oss-ap-southeast-1.aliyuncs.com/car2.jpg'
          },
          {
            id: 3,
            title: 'Photo 3',
            description: 'This is the third photo',
            url: 'http://akarana.oss-ap-southeast-1.aliyuncs.com/car3.jpg'
          },
          {
            id: 4,
            title: 'Photo 4',
            description: 'This is the fourth photo',
            url: 'http://akarana.oss-ap-southeast-1.aliyuncs.com/car4.jpg'
          },
          {
            id: 5,
            title: 'Photo 4',
            description: 'This is the fourth photo',
            url: 'http://akarana.oss-ap-southeast-1.aliyuncs.com/car5.jpg'
          },
          {
            id: 6,
            title: 'Photo 4',
            description: 'This is the fourth photo',
            url: 'http://akarana.oss-ap-southeast-1.aliyuncs.com/car6.jpg'
          },
          {
            id: 7,
            title: 'Photo 4',
            description: 'This is the fourth photo',
            url: 'http://akarana.oss-ap-southeast-1.aliyuncs.com/car7.jpg'
          },
          {
            id: 8,
            title: 'Photo 4',
            description: 'This is the fourth photo',
            url: 'http://akarana.oss-ap-southeast-1.aliyuncs.com/car8.jpg'
          },
          {
            id: 9,
            title: 'Photo 4',
            description: 'This is the fourth photo',
            url: 'http://akarana.oss-ap-southeast-1.aliyuncs.com/car9.jpg'
          },
        ]
      })
  
      return {
        ...state
      }
    }
  }
  </script>
  
  <style scoped>
  .photo-wall {
    padding: 20px;
  }
  
  .photo-card {
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
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
  