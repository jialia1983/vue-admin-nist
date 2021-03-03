<template>
  <div>
    <a-form style="max-width: 1200px; margin: 40px auto 0;">
      <a-form-item
      :label="$t('title')"
      :labelCol="{span: 7}"
      :wrapperCol="{span: 10}"
    >

      <a-select :placeholder="$t('selectInput')"  v-decorator="['repository.auditor', {rules: [{ required: true, message: $t('selectInput')}]}]">
        <a-select-option value='test1'>内部运维</a-select-option>
        <a-select-option value='test2'>项目部署</a-select-option>
        <a-select-option value='test3'>项目运维</a-select-option>
       </a-select>
    </a-form-item>

    <a-form-item
    :label="$t('z_title')"
    :labelCol="{span: 7}"
    :wrapperCol="{span: 10}"
  >

    <a-select :placeholder="$t('z_selectInput')">
      <a-select-option value='test1'>测试1</a-select-option>
      <a-select-option value='test2'>测试2</a-select-option>
      <a-select-option value='test3'>测试3</a-select-option>
     </a-select>
  </a-form-item>

  <a-form-item
    :label="$t('urgency')"
    :labelCol="{span: 7}"
    :wrapperCol="{span: 10}"
  >

    <a-select :placeholder="$t('z_urgency')">
      <a-select-option value='test1'>低</a-select-option>
      <a-select-option value='test2'>中</a-select-option>
      <a-select-option value='test3'>高</a-select-option>
      <a-select-option value='test3'>非常高</a-select-option>
     </a-select>
  </a-form-item>


    <a-form-item
    :label="$t('metrics')"
    :labelCol="{span: 7}"
    :wrapperCol="{span: 10}"
  >
    <a-input :placeholder="$t('metricsInput')" />
  </a-form-item>

    <a-form-item
      :label="$t('describe')"
      :labelCol="{span: 7}"
      :wrapperCol="{span: 10}"
    >
      <a-textarea rows="10" :placeholder="$t('describeInput')"/>
    </a-form-item>
      <a-form-item :wrapperCol="{span: 17, offset: 7}">
        <a-button type="primary" @click="nextStep">{{$t('nextStep')}}</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
    export default {
        name: 'Step1',
        i18n: require('./i18n'),
        methods: {
            nextStep() {
                this.$emit('nextStep')
            }
        }
    }
</script>

<style scoped>

</style>