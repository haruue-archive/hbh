function initSubMenuDisplay(){
  return ['hidden','hidden'];
}
Page({
  data:{
     subMenuDispaly:initSubMenuDisplay(),
     currentTab:-1,
     isSelectA: [true, false, false, false, false, false, false, false, false, false]
  },
   tapMainMenu:function(e){
     console.log(e);
     var index = parseInt(e.currentTarget.dataset.index);
     console.log(index);
     var newSubMenuDisplay = initSubMenuDisplay();
     if(this.data.subMenuDispaly[index] == 'hidden'){
          newSubMenuDisplay[index] = 'show';
          this.setData({currentTab:index});
     }else{
          newSubMenuDisplay[index] = 'hidden';
          this.setData({currentTab:-1});
     }
     this.setData({subMenuDispaly:newSubMenuDisplay});
  },
   selectAItem: function (e) {
     console.log(e.currentTarget.dataset.index);
     var index = e.currentTarget.dataset.index;
     var array=this.data.isSelectA;
     for(var i=0;i<=9;i++){
       if(i==index){
         array[i]=true;
       }else{
         array[i]=false;
       }
     }
     var i = parseInt(e.currentTarget.dataset.index);
     var newSubMenuDisplay = initSubMenuDisplay();
     newSubMenuDisplay[0]='hidden'
     this.setData({isSelectA:array,
     currentTab:-1});
     this.setData({ subMenuDispaly: newSubMenuDisplay });
   }
})