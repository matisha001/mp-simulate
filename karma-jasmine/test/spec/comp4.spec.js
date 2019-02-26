const path = require('path')

describe('comp4', () => {
    it ('should run successfully', async () => {
        const id = simulate.load(path.resolve(__dirname, '../../src/comp4/index'))
        const comp = simulate.render(id)

        const parent = document.createElement('parent-wrapper')
        comp.attach(parent)

        expect(comp.dom.innerHTML).toEqual('<other-comp><wx-view>component b</wx-view></other-comp>')
    })
})
