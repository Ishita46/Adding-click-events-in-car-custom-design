AFRAME.registerComponent("car", {
    schema: {
        radius: {type: "number", default: 150},
        height: {type: "number", default: 3},
    },

    update: function(){
        window.addEventListener("click", e =>{
            this.data.clickCounter = this.data.clickCounter + 1;
            if (this.data.clickCounter === 1) {
                const rotation = {x: 0, y: 20, x: 0};
                this.el.setAttribute("rotation", rotation);
            } else if (this.data.clickCounter === 2);
        })
    }
});