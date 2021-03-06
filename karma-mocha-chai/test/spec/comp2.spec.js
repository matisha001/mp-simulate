const path = require('path')
const expect = require('chai').expect

describe('comp2', () => {
    it ('should run successfully', () => {
        const id = simulate.load(path.resolve(__dirname, '../../src/comp2/index'), 'custom-comp')
        const comp = simulate.render(id, {prop: 'index.test.properties'})

        comp.attach(document.body)

        expect(simulate.match(comp.dom, `
            <wx-view class="custom-comp--index">index.test.properties</wx-view>
            <other-comp class="custom-comp--other"><wx-view class="other-comp--index">other.properties</wx-view></other-comp>
        `)).to.equal(true)
        expect(window.getComputedStyle(comp.querySelector('.index').dom).color).to.equal('rgb(0, 128, 0)')
        expect(window.getComputedStyle(comp.querySelector('.index').dom).width).to.equal('100px')
        expect(window.getComputedStyle(comp.querySelector('.other').querySelector('.index').dom).color).to.equal('rgb(255, 255, 0)')
        expect(comp.dom.tagName).to.equal('CUSTOM-COMP')
    })
})
