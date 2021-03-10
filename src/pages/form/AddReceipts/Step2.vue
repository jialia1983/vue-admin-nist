<template>
  <div>
    <a-form style="max-width: 500px; margin: 40px auto 0;">
      <a-alert
        :closable="true"
        :message="$t('note')"
        style="margin-bottom: 24px;"
      />
      <a-form-item
      :label="$t('user')"
      :labelCol="{span: 7}"
      :wrapperCol="{span: 10}"
    >
      <a-select :placeholder="$t('selectUser')">
        <a-select-option value='test1'>江亮</a-select-option>
        <a-select-option value='test2'>饶飞</a-select-option>
        <a-select-option value='test3'>王佳程</a-select-option>
       </a-select>
    </a-form-item>
      <a-form-item :wrapperCol="{span: 17, offset: 7}">
        <a-button :loading="loading" type="primary" @click="nextStep">{{$t('submit')}}</a-button>
        <a-button style="margin-left: 8px" @click="prevStep">{{$t('preStep')}}</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
    export default {
        name: 'Step2',
        i18n: require('./i18n'),
        data() {
            return {
                loading: false
            }
        },
        methods: {
            nextStep() {
                let _this = this
                _this.loading = true
                setTimeout(function() {
                    _this.$emit('nextStep')
                }, 1500)
            },
            prevStep() {
                this.$emit('prevStep')
            }
        }
    }
</script>

<style lang="less" scoped>
    .stepFormText {
        margin-bottom: 24px;
         :global {
            .ant-form-item-label,
            .ant-form-item-control {
                line-height: 22px;
            }
        }
    }
</style>