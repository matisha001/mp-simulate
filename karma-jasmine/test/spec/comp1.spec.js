const path = require('path')

describe('comp1', () => {
    it ('should run successfully', () => {
        const id = simulate.load(path.resolve(__dirname, '../../src/comp1/index'))
        const comp = simulate.render(id, {prop: 'index.test.properties'})

        comp.attach(document.body)

        expect(simulate.match(comp.dom, '<wx-view class="main--index">index.test.properties</wx-view>')).toEqual(true)
        expect(window.getComputedStyle(comp.querySelector('.index').dom).color).toEqual('rgb(0, 128, 0)')
        expect(comp.dom.tagName).toEqual('MAIN')
    })
})
