describe('scroll', () => {
    it ('should run successfully', async () => {
        const comp = {
            dom: document.createElement('div')
        }
        const child = document.createElement('div')
        document.body.appendChild(comp.dom)
        comp.dom.style.cssText = 'position: relative; width: 100px; height: 100px; overflow: scroll;'
        comp.dom.appendChild(child)
        child.style.cssText = 'position: relative; width: 1000px; height: 1000px;';
        expect(comp.dom.scrollTop).toEqual(0)
        let scrollTopList = []
        let scrollLeftList = []
        comp.dom.addEventListener('scroll', evt => {
            scrollTopList.push(comp.dom.scrollTop)
            scrollLeftList.push(comp.dom.scrollLeft)
        })
        simulate.scroll(comp, 40, 10)
        await simulate.sleep(15)
        expect(comp.dom.scrollTop).toEqual(40)
        scrollTopList = []
        simulate.scroll(comp, 30, 3)
        await simulate.sleep(10)
        expect(comp.dom.scrollTop).toEqual(30)
        scrollTopList = []
        simulate.scroll(comp, -100, 7)
        await simulate.sleep(10)
        expect(comp.dom.scrollTop).toEqual(0)
        scrollLeftList = []
        simulate.scroll(comp, 10, 6, 'scrollLeft')
        await simulate.sleep(10)
        expect(comp.dom.scrollLeft).toEqual(10)
    })
})
