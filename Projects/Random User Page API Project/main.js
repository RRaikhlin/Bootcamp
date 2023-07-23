const loadUser = async function() {
    const p1 = new Person()    
    const data = new APIManager(p1)
    const render  = new Renderer(data, p1)
    await data.pushPerson()
//    await data.getGif()
    render.render()
}

loadUser()

const loadOnClick = $(document).on("click", "#loadUser", () => loadUser())