# react-factory-elements
Small library helping to write react components w/o jsx

## Example

Simple elements
```javascript
import { elements, factory } from 'react-factory-elements'
import { render } from 'react-dom'

const { h1, div, p, ul, li, section } = elements

const Header = factory(({ children }) =>
  h1({ style: { color: 'violet' } }, children)
)

const FlexContainer = factory(({ children }) =>
  div({ style: { display: 'flex' } }, children)
)

const Page = factory(({ items }) =>
  section(
    Header('Hello world'),
    FlexContainer(
      ul({ style: { marginRight: '25px' } },
        items.map(item => li({ key: item }, `Item ${item}`))
      ),
      div(
        p('Oh, wait... what is it?'),
        p('Is it still react?')
      )
    )
  )
)

render(Page({ items: [1, 2, 3, 5] }), document.getElementById('app'))

```
