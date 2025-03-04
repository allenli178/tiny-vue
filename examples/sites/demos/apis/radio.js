export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'radio',
      type: 'component',
      props: [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用',
            'en-US': 'Disable'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'dynamic-disable',
          mfDemo: ''
        },
        {
          name: 'display-only',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否只读状态',
            'en-US': 'Is display only'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'display-only',
          mfDemo: ''
        },
        {
          name: 'label',
          type: 'boolean | number | string',
          defaultValue: '',
          desc: {
            'zh-CN': 'radio 选中时的值',
            'en-US': 'Value when radio is selected'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'modelValue / v-model',
          type: 'boolean | number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': 'Bound Value'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'name',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '原生 name 属性',
            'en-US': 'Native name attribute'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'tabindex',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': 'Radio 组件的 tabindex。默认值为 1 ',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '单选框文本内容',
            'en-US': 'Radio Box Text Content'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'radio-text',
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'change',
          type: '(value: boolean | number | string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值变化时触发的事件',
            'en-US': 'Event triggered when the binding value changes'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'radio-events',
          mfDemo: ''
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': 'radio 的默认插槽',
            'en-US': 'Radio default slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'default-slot',
          mfDemo: ''
        }
      ]
    },
    {
      name: 'radio-group',
      type: 'component',
      props: [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用单选组',
            'en-US': 'Disable radio group'
          },
          mode: ['pc'],
          pcDemo: 'dynamic-disable'
        },
        {
          name: 'display-only',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否只读状态',
            'en-US': 'Is display only'
          },
          mode: ['pc'],
          pcDemo: 'display-only'
        },
        {
          name: 'fill',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '按钮形式单选选中时的背景颜色',
            'en-US': 'Set the background color for button form when radio selected'
          },
          mode: ['pc'],
          pcDemo: 'active-color'
        },
        {
          name: 'modelValue / v-model',
          type: 'string[] | number[]',
          defaultValue: '',
          desc: {
            'zh-CN': '单选组绑定值',
            'en-US': 'Radio group binding value'
          },
          mode: ['pc'],
          pcDemo: 'radio-group'
        },
        {
          name: 'options',
          typeAnchorName: 'IRadioGroupOptions',
          type: 'IRadioGroupOptions[]',
          defaultValue: '',
          desc: {
            'zh-CN': '配置式单选组设置列表',
            'en-US': 'Configuration based radio group settings list'
          },
          mode: ['pc'],
          pcDemo: 'group-options'
        },
        {
          name: 'size',
          type: "'medium' | small' | 'mini'",
          defaultValue: '',
          desc: {
            'zh-CN': '单选组尺寸',
            'en-US': 'Radio Group Size'
          },
          mode: ['pc'],
          pcDemo: 'radio-size'
        },
        {
          name: 'text-color',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '按钮形式单选激活时的文本颜色',
            'en-US': 'Set the text color for button format radio active'
          },
          mode: ['pc'],
          pcDemo: 'active-color'
        },
        {
          name: 'type',
          type: "'radio' | 'button'",
          defaultValue: "'radio'",
          desc: {
            'zh-CN': '配置式单选组的展示形式',
            'en-US': 'Set the display format of configurable radio groups'
          },
          mode: ['pc'],
          pcDemo: 'group-options'
        },
        {
          name: 'vertical',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '垂直显示单选组',
            'en-US': 'Vertical display of radio groups'
          },
          mode: ['pc'],
          pcDemo: 'vertical'
        }
      ],
      events: [
        {
          name: 'change',
          type: '(value: number[] | string[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值变化时触发的事件',
            'en-US': 'Event triggered when the binding value changes'
          },
          mode: ['pc'],
          pcDemo: 'radio-events'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': 'radio-group 的默认插槽',
            'en-US': 'Radio group default slot'
          },
          mode: ['pc'],
          pcDemo: 'radio-group'
        }
      ]
    },
    {
      name: 'radio-button',
      type: 'component',
      props: [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用',
            'en-US': 'Is disabled'
          },
          mode: ['pc'],
          pcDemo: 'dynamic-disable'
        },
        {
          name: 'label',
          type: 'boolean | number | string',
          defaultValue: '',
          desc: {
            'zh-CN': 'Radio 的 value',
            'en-US': 'Radio value'
          },
          mode: ['pc'],
          pcDemo: 'radio-group'
        },
        {
          name: 'name',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '原生name属性',
            'en-US': 'Native name attribute'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '单选框文本内容',
            'en-US': 'Radio Box Text Content'
          },
          mode: ['pc'],
          pcDemo: 'radio-text'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          mode: ['pc'],
          pcDemo: 'default-slot'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IRadioGroupOptions',
      type: 'interface',
      code: `
interface IRadioGroupOptions {
  label: string // 选中时对应的值
  text?: number // 描述文本
  events?: {
    click?: (e: Event) => void // 点击事件
    change?: (e: Event) => void // change事件
  }
}`
    }
  ]
}
