<template>
    <!--编辑当前信息的edit功能 使用dialog对话框 内嵌一个form表单-->
    <el-dialog title="Edit" modelValue="popShow" width="30%" center :show-close="false">
        <el-form :model="editData" ref="ruleFromRef" :rules="rules">
          <el-form-item label="First Name" prop="firstName">
            <!--input first name-->
            <el-input v-model="editData.firstName" placeholder="First Name" />
          </el-form-item>
          
          <el-form-item label="Last Name" prop="lastName">
            <!--input last name-->
            <el-input v-model="editData.lastName" placeholder="Last Name" />
          </el-form-item>

          <el-form-item label="Phone Number" prop="phoneNumber">
            <!--input Phone number-->
            <el-input v-model="editData.phoneNumber" placeholder="Phone Number" />
          </el-form-item>

          <el-form-item label="User Name" prop="username">
            <!--input user name-->
            <el-input v-model="editData.username" placeholder="User Name" />
          </el-form-item>

          <el-form-item label="Pass Word" prop="password">
            <!--input user name-->
            <el-input v-model="editData.password" placeholder="Password" />
          </el-form-item>

          <el-form-item label="Address" prop="address">
            <!--input user name-->
            <el-input v-model="editData.address" placeholder="Address" />
          </el-form-item>

          <el-form-item label="Email Address" prop="emailAddress">
            <!--input user name-->
            <el-input v-model="editData.emailAddress" placeholder="Email Address" />
          </el-form-item>

          <el-form-item label="Birthday" prop="birthday">
            <!--input user name-->
            <el-input v-model="editData.birthday" placeholder="Birthday" />
          </el-form-item>

          <el-form-item label="Occupation" prop="occupation">
            <!--input user name-->
            <el-input v-model="editData.occupation" placeholder="Occupation" />
          </el-form-item>

          <el-form-item label="Couples" prop="couples">
            <!--input user name-->
            <el-input v-model="editData.couples" placeholder="Couples" type="number"/>
          </el-form-item>

          <el-form-item label="Date Joined" prop="dateJoined">
            <!--input user name-->
            <el-input v-model="editData.dateJoined" placeholder="Date Joined" />
          </el-form-item>

          <el-form-item label="Notes" prop="notes">
            <!--input user name-->
            <el-input v-model="editData.notes" placeholder="Notes" />
          </el-form-item>

          <el-form-item label="Email Formatted" prop="emailFormate">
            <!--input user name-->
            <el-input v-model="editData.emailFormate" placeholder="Email Formatted" />
          </el-form-item>

          <el-form-item prop="memberType">
            <el-select v-model="editData.memberType" placeholder="Member Type">
              <el-option
                v-for="item in memberTypeOptions"
                :key="item.editData"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item prop="active">
            <el-select v-model="editData.active" placeholder="Active">
              <el-option
                v-for="item in active"
                :key="item.editData"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item>
            <!--2 buttons confirm and cancel-->
            <el-button @click="confirmClick('cancel')">Cancel</el-button>
            <el-button type="primary" @click="submitForm(ruleFromRef)">Confirm</el-button>
          </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script setup>
import { defineProps, reactive, ref} from 'vue';

const  { popShow, message, confirmClick } = defineProps(['popShow', 'message', 'confirmClick'])
/**
 * 编辑组件维护的数据
 */
const editData = reactive({
    id: message.id,
    firstName: message.firstName,
    lastName: message.lastName,
    phoneNumber: message.phoneNumber,
    username: message.username,
    password: message.password,
    address: message.address,
    emailAddress: message.emailAddress,
    birthday: message.birthday,
    occupation: message.occupation,
    couples: message.couples,
    dateJoined: message.dateJoined,
    notes: message.notes,
    emailFormate: message.emailFormate,
    memberType: message.memberType,
    active: message.active
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
emailAddress:[{required: 'true', trigger: 'blur', message: 'Please input the Email Address'}],
dateJoined:[{required: 'true', trigger: 'blur', message: 'Please input a Date'}],
emailFormate:[{required: 'true', trigger: 'blur', message: 'Please input a Email Formatted'}],
}

/**
 * 表单的校验规则
 */
const ruleFromRef = ref(null);
//初始渲染为空，当表单完成从数据库提取数据传递到前端的渲染后,就可以拿到对应的元素
const submitForm = async(fromEl) =>{
    if (!fromEl) return;
    await fromEl.validate((valid, fields) =>{
        if(valid){
            confirmClick({firstName: editData.firstName, lastName: editData.lastName, phoneNumber: editData.phoneNumber,
              username:editData.username, password:editData.password, address:editData.address, emailAddress:editData.emailAddress, birthday:editData.birthday, occupation:editData.occupation,
              couples:editData.couples, dateJoined:editData.dateJoined, notes: editData.notes, emailFormate: editData.emailFormate, memberType: editData.memberType, active: editData.active, id:editData.id})
        }else{
            console.log('Error Submit', fields);
        }
    })
}
</script>

<style lang="less" scoped>
.dialog-footer button:first-child{
  margin-right: 10px;
}

:deep(.el-form-item__label) {
  width: 110px !important;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

:deep(.el-form-item__content) {
  justify-content: center;
  margin-left: 0 !important;
}
</style>