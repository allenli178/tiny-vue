export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'modal',
      type: 'component',
      props: [
        {
          name: 'before-close',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '可以配置一个拦截弹窗关闭的方法。如果方法返回 false 值，则拦截弹窗关闭；否则不拦截',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'cancel-btn-props',
          linkTo: 'button#API',
          type: 'Button.props',
          defaultValue: '{}',
          desc: {
            'zh-CN': '自定义取消按钮的 props ，可选值与 Button 组件一致',
            'en-US':
              'Customize the props of the cancel button. The optional values ​​are consistent with the Button component'
          },
          mode: ['pc'],
          pcDemo: 'modal-footer'
        },
        {
          name: 'cancel-content',
          type: 'string',
          defaultValue: "'取消'",
          desc: {
            'zh-CN': '自定义取消按钮内容',
            'en-US': 'Customize cancel button content'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-footer',
          mfDemo: ''
        },
        {
          name: 'confirm-btn-props',
          linkTo: 'button#API',
          type: 'Button.props',
          defaultValue: '{}',
          desc: {
            'zh-CN': '自定义确认按钮 props，可选值与 Button 组件一致',
            'en-US':
              'Customize the confirmation button props, the optional values are consistent with the Button component'
          },
          mode: ['pc'],
          pcDemo: 'modal-footer'
        },
        {
          name: 'confirm-content',
          type: 'string',
          defaultValue: "'确认'",
          desc: {
            'zh-CN': '自定义确认按钮内容',
            'en-US': 'Customize confirmation button content'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-footer',
          mfDemo: ''
        },
        {
          name: 'custom-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '组件自定义 class 样式',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'description',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '组件详情信息',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'duration',
          type: 'number | string',
          defaultValue: '3000',
          desc: {
            'zh-CN': "自动关闭的延时，仅当 type 为 'message' 有效",
            'en-US': "Delay for automatic shutdown, only valid when type is 'message'"
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'message-close',
          mfDemo: ''
        },
        {
          name: 'esc-closable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否允许按 Esc 键关闭窗口',
            'en-US': 'Whether to allow pressing the Esc key to close a window'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-other',
          mfDemo: ''
        },
        {
          name: 'footer-dragable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '控制底部可拖拽',
            'en-US': 'Control bottom dragable'
          },
          mode: ['pc'],
          pcDemo: 'modal-footer'
        },
        {
          name: 'fullscreen',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否最大化显示',
            'en-US': 'Whether to maximize the display'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-size',
          mfDemo: ''
        },
        {
          name: 'height',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口的高度',
            'en-US': 'window height'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-size',
          mfDemo: ''
        },
        {
          name: 'id',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': "如果不想窗口重复点击，可以设置唯一的 id 防止重复提示，仅当 type 为 'message' 有效",
            'en-US':
              "If you don't want the window to be clicked repeatedly, you can set a unique id to prevent repeated prompts. This is only valid when type is 'message'"
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'message-id',
          mfDemo: ''
        },
        {
          name: 'is-form-reset',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '关闭弹窗时，是否重置表单数据',
            'en-US': 'Whether to reset the form data when closing the pop-up window'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-other',
          mfDemo: ''
        },
        {
          name: 'lock-scroll',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否锁住滚动条，不允许页面滚动',
            'en-US': 'Whether to lock the scroll bar and not allow the page to scroll'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-lock',
          mfDemo: ''
        },
        {
          name: 'lock-view',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否锁住页面，不允许窗口之外的任何操作',
            'en-US': 'Whether to lock the page and not allow any operations outside the window'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-lock',
          mfDemo: ''
        },
        {
          name: 'mask',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示遮罩层',
            'en-US': 'Whether to display the mask layer'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-mask',
          mfDemo: ''
        },
        {
          name: 'mask-closable',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否允许点击遮罩层关闭窗口',
            'en-US': 'Whether to allow clicking on the mask layer to close the window'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-mask',
          mfDemo: ''
        },
        {
          name: 'message',
          type: 'string | VNode | () => string | VNode',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口的内容',
            'en-US': 'Window contents'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'message-closable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': "'message' 类型弹窗是否显示关闭按钮",
            'en-US': "Whether the 'message' type pop-up window displays a close button"
          },
          mode: ['pc'],
          pcDemo: 'message-closable'
        },
        {
          name: 'min-height',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口的最小高度',
            'en-US': 'Minimum height of window'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-resize',
          mfDemo: ''
        },
        {
          name: 'min-width',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口的最小宽度',
            'en-US': 'The minimum width of the window'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-resize',
          mfDemo: ''
        },
        {
          name: 'modelValue / v-model',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示',
            'en-US': 'Whether to display'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'options',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': "多选选项，格式为 [{ value: 'value1', name: '选项1' }, ...]",
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'position',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': "弹出框位置，默认居中显示，设置值为 'bottom-right' 时弹出框显示在右下角",
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'resize',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否允许拖动调整窗口大小',
            'en-US': 'Whether to allow dragging to resize the window'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-resize',
          mfDemo: ''
        },
        {
          name: 'show-close',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示关闭按钮，默认值为 true',
            'en-US': ''
          },
          meta: {
            stable: '3.22.0'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-other',
          mfDemo: ''
        },
        {
          name: 'show-footer',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示底部',
            'en-US': 'Display bottom'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-footer',
          mfDemo: ''
        },
        {
          name: 'show-header',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示头部',
            'en-US': 'Display Header'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-header',
          mfDemo: ''
        },
        {
          name: 'status',
          typeAnchorName: 'IStatus',
          type: 'IStatus',
          defaultValue: "'info'",
          desc: {
            'zh-CN': "消息状态，当 type 为 'alert'、'message'、'confirm' 时有效",
            'en-US': "Message status, valid when type is 'alert', 'message', 'confirm'"
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'status',
          mfDemo: ''
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口的标题',
            'en-US': 'Window title'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-header',
          mfDemo: ''
        },
        {
          name: 'top',
          type: 'number | string',
          defaultValue: '80',
          desc: {
            'zh-CN': "消息距离顶部的位置，仅当 type 为 'message' 时有效",
            'en-US': "The position of the message from the top, only valid when type is 'message'"
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'message-top',
          mfDemo: ''
        },
        {
          name: 'type',
          type: "'alert' | 'confirm' | 'message'",
          defaultValue: "'alert'",
          desc: {
            'zh-CN': '窗口类型',
            'en-US': 'Window type'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'v-model',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'width',
          type: 'number | string',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口的宽度（设置宽度像素或者百分比，浏览器窗口大小改变可居中显示)',
            'en-US':
              'The width of the window(Set the width in pixels or percentages, and the browser window size can be changed to display in the center)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-size',
          mfDemo: ''
        },
        {
          name: 'z-index',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义堆叠顺序（对于某些特殊场景，比如被遮挡时可能会用到）',
            'en-US': 'Customize the stacking order (may be used in some special scenarios, such as when it is blocked)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-other',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'cancel',
          typeAnchorName: 'IModalEventParam',
          type: '(params: IModalEventParam, event: Event) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击取消按钮时会触发该事件',
            'en-US': 'This event is triggered when the Cancel button is clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-event',
          mfDemo: ''
        },
        {
          name: 'close',
          typeAnchorName: 'IModalEventParam',
          type: '(params: IModalEventParam, event: Event) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击关闭按钮时会触发该事件',
            'en-US': 'This event is triggered when the close button is clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-event',
          mfDemo: ''
        },
        {
          name: 'confirm',
          typeAnchorName: 'IModalEventParam',
          type: '(params: IModalEventParam, event: Event) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击确定按钮时会触发该事件',
            'en-US': 'This event is triggered when the OK button is clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-event',
          mfDemo: ''
        },
        {
          name: 'hide',
          typeAnchorName: 'IModalEventParam',
          type: '(params: IModalEventParam) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '在窗口关闭时会触发该事件',
            'en-US': 'This event is triggered when the window is closed'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-event',
          mfDemo: ''
        },
        {
          name: 'show',
          typeAnchorName: 'IModalEventParam',
          type: '(params: IModalEventParam) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '在窗口显示时会触发该事件',
            'en-US': 'This event is triggered when the window is displayed'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-event',
          mfDemo: ''
        },
        {
          name: 'zoom',
          typeAnchorName: 'IModalEventParam',
          type: '(params: IModalEventParam, event: Event) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口缩放时会触发该事件',
            'en-US': 'This event is triggered when a window is zoomed in or out'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-event',
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
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-fn-slots',
          mfDemo: ''
        },
        {
          name: 'footer',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '窗口底部的模板',
            'en-US': 'Template at the bottom of the window'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'modal-fn-slots',
          mfDemo: ''
        }
      ]
    }
  ],
  types: [
    {
      name: 'IModalEventParam',
      type: 'interface',
      code: `
interface IModalEventParam {
  type: 'alert' | 'message' | 'confirm' // 弹窗类型
  $modal: ComponentPublicInstance // Modal组件实例
}
`
    },
    {
      name: 'IStatus',
      type: 'type',
      code: `
          type IStatus = 'info' | 'success' | 'warning' | 'error' | 'loading'
      `
    }
  ]
}
