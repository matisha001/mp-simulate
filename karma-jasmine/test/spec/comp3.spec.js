const path = require('path')

describe('comp3', () => {
    it ('should run successfully', async () => {
        const childId = simulate.load({
            id: 'abc',
            template: '<div><slot/></div>',
        })
        const id = simulate.load(path.resolve(__dirname, '../../src/comp3/index'), { less: true })
        const comp = simulate.render(id)

        comp.attach(document.body)

        const view = comp.querySelector('.index')
        expect(view.dom.innerHTML).toEqual('<div>index.properties</div>')
        expect(window.getComputedStyle(comp.querySelector('.inner').dom).color).toEqual('rgb(255, 0, 0)')
        
        view.dispatchEvent('touchstart')
        view.dispatchEvent('touchend')
        await simulate.sleep(10)
        expect(view.dom.innerHTML).toEqual('<div>comp3.properties</div>')

        expect(comp.instance.print()).toEqual(123)
    })
})
