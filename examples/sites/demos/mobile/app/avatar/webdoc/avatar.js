export default {
  column: '2',
  owner: '',
  apis: [
    {
      name: 'avatar',
      type: 'component',
      props: [
        {
          name: 'alt',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置图片的备用文字描述</p>',
            'en-US': 'display different button'
          },
          demoId: 'avatar-src-set'
        },
        {
          name: 'error',
          type: 'Function()',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置img 标签的 onerror 函数</p>',
            'en-US': 'display different button'
          },
          demoId: 'avatar-src-set'
        },
        {
          name: 'fit',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置图片的 object-fit</p>',
            'en-US': 'display different button'
          },
          demoId: 'avatar-src-set'
        },
        {
          name: 'icon',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置显示内容为icon</p>',
            'en-US': 'display different button'
          },
          demoId: 'avatar-src-set'
        },
        {
          name: 'shape',
          type: 'string',
          defaultValue: 'circle',
          desc: {
            'zh-CN': '<p>该属性的可选值为 circle | square</p>',
            'en-US': 'display different button'
          },
          demoId: 'avatar-src-set'
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>该属性的可选值为 large|medium|small</p>',
            'en-US': 'display different button'
          },
          demoId: 'avatar-size'
        },
        {
          name: 'src',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置图片链接地址</p>',
            'en-US': 'display different button'
          },
          demoId: 'avatar-src-set'
        },
        {
          name: 'src-set',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>设置源图容器</p>',
            'en-US': 'display different button'
          },
          demoId: 'avatar-src-set'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '<p>组件默认插槽</p>',
            'en-US': 'Click'
          },
          demoId: 'avatar-src-set'
        }
      ]
    }
  ],
  demos: [
    {
      demoId: 'avatar-size',
      name: {
        'zh-CN': '设置头像大小',
        'en-US': 'button type'
      },
      desc: {
        'zh-CN':
          '<p><code>size</code>可设置为<code>large,medium,small</code>,如果不能满足需要，可以设置<code>size</code>为<code>number</code>类型自定义大小</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['avatar-size.vue']
    },
    {
      demoId: 'avatar-src-set',
      name: {
        'zh-CN': '设置头像',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN':
          '<p>\n        <code>src</code>设置<code>img</code>的展示源，<code>img</code>原生属性<br>\n        <code>srcSet</code>设置<code>img</code>在不同情况下的图片源的集合，<code>img</code>原生属性<br>\n        <code>icon</code>设置图标头像<br>\n        <code>fit</code>设置填充样式,默认为<code>cover</code>可选<code>fill，contain，cover，none，scale-down</code><br>\n        <code>error</code>设置<code>img</code>标签的<code>onerror</code>函数<br>\n        <code>shape</code>设置形状,默认为<code>circle可选circle,square</code>\n          </p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['avatar-src-set.vue']
    }
  ]
}
