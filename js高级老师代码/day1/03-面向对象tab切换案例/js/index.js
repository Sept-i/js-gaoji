// 1.找标题
// 2.遍历标题，设置自定义属性,绑定事件
// 
var that = null
class Tab {
    constructor(id){
        that = this;
        this.main = document.querySelector(id);
        this.lis = this.main.querySelectorAll(".fisrstnav li");
        this.sections = this.main.querySelectorAll(".tabscon section");

        this.init()

    }
    // 2.初始化 遍历标题,设置自定义属性,绑定事件
    init(){
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab
        }
    }

    // 封装tab切换
    toggleTab(){
        that.remove();
        this.classList.add("liactive")
        that.sections[this.index].classList.add("conactive")
    }

    remove(){
        for(var j=0;j<this.lis.length;j++){
            this.lis[j].classList.remove("liactive");
            this.sections[j].classList.remove("conactive");
        }
    }
}
var tab = new Tab("#tab");