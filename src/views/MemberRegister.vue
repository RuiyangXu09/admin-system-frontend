<template>
    <div class="register">
        <div class="backGroundImage"></div>
        <div class="register_container">
            <h1 class="h1">Akarana Caravan Club Member Register</h1>
            <el-form :model="register" :rules="rules" ref="ref_form">
                <!--member 信息输入-->
                <el-form-item prop="firstName">
                  <el-input v-model="register.firstName" placeholder="First Name" clearable>
                        <template #prepend>
                            <el-icon><Avatar /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item prop="lastName">
                    <el-input v-model="register.lastName" placeholder="Last Name" clearable>
                        <template #prepend>
                            <el-icon><Avatar /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item prop="phoneNumber">
                  <el-tooltip
                      class="box-item"
                      effect="light"
                      content="If No Phone Number, Please Input None"
                      placement="top"
                    >
                    <el-input v-model="register.phoneNumber" placeholder="Phone Number" clearable>
                        <template #prepend>
                            <el-icon><Phone /></el-icon>
                        </template>
                    </el-input>
                  </el-tooltip>
                    
                </el-form-item>

                <el-form-item prop="username">
                  <el-tooltip
                      class="box-item"
                      effect="light"
                      content="Do not enter a duplicate User Name"
                      placement="top"
                    >
                    <el-input v-model="register.username" placeholder="User Name" clearable>
                        <template #prepend>
                            <el-icon><UserFilled /></el-icon>
                        </template>
                    </el-input>
                  </el-tooltip> 
                </el-form-item>

                <el-form-item prop="password">
                    <el-input v-model="register.password" placeholder="Pass Word" clearable>
                        <template #prepend>
                            <el-icon><Key /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item prop="address">
                  <el-tooltip
                      class="box-item"
                      effect="light"
                      content="If No Address Info, Please Input None"
                      placement="top"
                    >
                    <el-input ref="googleInputRef" v-model="register.address" placeholder="Address" clearable>
                        <template #prepend>
                            <el-icon><House /></el-icon>
                        </template>
                    </el-input>
                    </el-tooltip>
                </el-form-item>

                <el-form-item prop="emailAddress">
                  <el-tooltip
                      class="box-item"
                      effect="light"
                      content="If No Email Address Info, Please Input None"
                      placement="top"
                    >
                    <el-input v-model="register.emailAddress" placeholder="Email Address" clearable>
                        <template #prepend>
                            <el-icon><Message /></el-icon>
                        </template>
                    </el-input>
                  </el-tooltip>
                </el-form-item>

                <el-form-item prop="birthday">
                  <el-tooltip
                      class="box-item"
                      effect="light"
                      content="If No Birthday Info, Please Input None"
                      placement="top"
                    >
                    <el-input v-model="register.birthday" placeholder="Birthday" clearable>
                        <template #prepend>
                            <el-icon><Calendar /></el-icon>
                        </template>
                    </el-input>
                    </el-tooltip>
                </el-form-item>

                <el-form-item prop="occupation">
                  <el-tooltip
                      class="box-item"
                      effect="light"
                      content="If No Occupation Info, Please Input None"
                      placement="top"
                    >
                    <el-input v-model="register.occupation" placeholder="Occupation" clearable>
                        <template #prepend>
                            <el-icon><CollectionTag /></el-icon>
                        </template>
                    </el-input>
                    </el-tooltip>
                </el-form-item>

                <el-form-item prop="couples">
                  <el-input v-model="register.couples" placeholder="Couples" type="number">
                        <template #prepend>
                          <el-icon><House /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item prop="dateJoined">
                  <el-tooltip
                      class="box-item"
                      effect="light"
                      content="If No Joined Date, Please Input None"
                      placement="top"
                    >
                    <el-input v-model="register.dateJoined" placeholder="Joined Date" clearable>
                        <template #prepend>
                          <el-icon><Timer /></el-icon>
                        </template>
                    </el-input>
                  </el-tooltip>
                </el-form-item>

                <el-form-item prop="notes">
                  <el-tooltip
                      class="box-item"
                      effect="light"
                      content="If No any Notes, Please Input None"
                      placement="top"
                    >
                    <el-input v-model="register.notes" placeholder="Notes" clearable>
                        <template #prepend>
                          <el-icon><ChatDotSquare /></el-icon>
                        </template>
                    </el-input>
                  </el-tooltip>
                </el-form-item>

                <el-form-item prop="emailFormate">
                  <el-input v-model="register.emailFormate" placeholder="Email Formate" clearable>
                        <template #prepend>
                          <el-icon><MessageBox /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item prop="memberType" class="el-form-item">
                  <el-select v-model="register.memberType" placeholder="Member Type" class="el-select">
                    <el-option
                      v-for="item in memberTypeOptions"
                      :key="item.register"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>

                <el-form-item prop="active">
                  <el-select v-model="register.active" placeholder="Active">
                    <el-option
                      v-for="item in active"
                      :key="item.register"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>

                <!--home button-->
                <el-button class="register_submit" @click="goHome">Cancel</el-button>
                <!--register button-->
                <el-button type="primary" class="register_submit" @click="Register">Register</el-button>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import router from '../router/index';
import { reactive, ref, onMounted } from "vue";
import { getRegister } from '../api/index';
/**
 * 初始的ref
 */
const ref_form = ref(null);
const googleInputRef = ref(null);

/**
 * register表单的数据声明
 */
const register = reactive({
    firstName:'',
    lastName:'',
    phoneNumber:'',
    username:'',
    password:'',
    address:'',
    emailAddress:'',
    birthday:'',
    occupation:'',
    couples: '',
    dateJoined: '',
    notes: '',
    emailFormate: '',
    memberType: '',
    active: '',
})

const memberTypeOptions = reactive([
    { value: 'R', label: 'Regular' },
    { value: 'LM', label: 'Life Member' },
    { value: 'AM', label: ' Associate Member' },
    { value: 'P', label: 'Prospective' },
]);

const active = reactive([
    { value: 'A', label: 'Active' },
    { value: 'I', label: 'Inactive' },
]);

/**
 * register表单的数据检验
 * 定义rules的检验 检查输入框是否为空
 */
const rules = {
firstName:[{required: 'true', trigger: 'blur', message: 'Please input First Name'}],
lastName:[{required: 'true', trigger: 'blur', message: 'Please input Last Name'}],
phoneNumber:[{required: 'true', trigger: 'blur', message: 'Please input Phone Number'}],
username:[{required: 'true', trigger: 'blur', message: 'Please input the User Name'}],
password:[{required: 'true', trigger: 'blur', message: 'Please input the Password'}],
address:[{required: 'true', trigger: 'blur', message: 'Please input the Address'}],
emailAddress:[{required: 'true', trigger: 'blur', message: 'Please input the Email Address'}],
birthday:[{required: 'true', trigger: 'blur', message: 'Please input the Birthday'}],
occupation:[{required: 'true', trigger: 'blur', message: 'Please input the Occupation'}],
couples:[{required: 'true', trigger: 'blur', message: 'Please input a Number'}],
dateJoined:[{required: 'true', trigger: 'blur', message: 'Please input a Date'}],
notes:[{required: 'true', trigger: 'blur', message: 'Please input a Notes'}],
emailFormate:[{required: 'true', trigger: 'blur', message: 'Please input a Email Formate'}],
}

/**
 * 注册方法
 */
 const Register = () =>{
  ref_form.value.validate((val) =>{
    if (val) {
      getRegisterData()
    }
  })
}

/**
 * member info 注册接口的调用
 */
//注册的接口调用
const getRegisterData = async() =>{
  //注册接口
  const res = await getRegister({firstName: register.firstName, lastName: register.lastName, phoneNumber: register.phoneNumber, username: register.username, password: register.password, address: register.address, emailAddress: register.emailAddress, birthday: register.birthday, occupation: register.occupation, memberType: register.memberType, couples: register.couples, dateJoined: register.dateJoined, notes: register.notes, active: register.active, emailFormate: register.emailFormate})
  
  //当接口中的token传入成功 注册时打印message
  if (res?.message) {
    ElMessage({
    message: 'Register Success!',
    type: 'success',
  })
  //需要传入router index.js中的path: '/home'
  router.push('/home');
  }
}

//click to home button
const goHome = () =>{
    router.push('/home');
}

//Add address autofill
onMounted(() => {
  //创建一个自动补全对象
  const autocomplete = new google.maps.places.Autocomplete(
    googleInputRef.value.$el.querySelector('input'), {
      types: ['address'],
      //限制地址为nz
      componentRestrictions: { country: "nz" }
  });

  //当用户选择一个自动完成建议后，触发place_changed事件
  autocomplete.addListener('place_changed', () => {
    //获取选择的地址
    const place = autocomplete.getPlace();
    //将用户选择的地点的格式化地址存储到register.address中。
    register.address = place.formatted_address;
  });
});
</script>

<style lang="less" scoped>
@-webkit-keyframes fadenum{
  0% {
    opacity: 0;
  }

  100% {
    opacity: 100;
  }
}
//class login样式
  .register {
    height: 100%;
    .backGroundImage{
      height: 100%;
      background-image: url("../assets/akarana.png");
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: 50% 50%;
      background-color: darkgray;
    }

    //icon样式
    .el_icon{
      height: 30px !important;
    }
  
    //登录框样式
    .register_container{
      animation: fadenum 1s ease;
      position: absolute;
      z-index: 1;
      width: 400px;
      top:50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 1s;
      min-height: 200px;
      text-align: center;
      background-color: whitesmoke;
      border-radius: 10px;
      padding: 20px;
    }

    //登录框中h1样式
    h1{
      font-size: 20px;
      transition: all 1s;
      font-weight: bold;
      margin-bottom: 36px;
    }

    .el_form{
      border-radius: 20px;
    }

    .el_card{
      .register_submit{
        width: 100%;
        height: 50px;
        border-radius: 20px;
      }

      :deep(.el-input-group_prepend){
        padding: 0 10px;
      }
    }
  }
.el-form-item {
  display: flex;
  justify-content: center;
}

.el-select {
    width: 100%;
}
</style>