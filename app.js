//app.js
App({
  onLaunch: function () {
    this.globalData={};
    this.loadUserInfo();
  },
  globalData: {
    userInfo: null
  },
  is_login:function(){
    if(this.globalData.userInfo){
      return true;
    }else{
      return false;
    }
  },
  setUserInfo:function(userInfo){
    this.globalData.userInfo=userInfo;
  },
  loadUserInfo:function(){
    wx.getSetting({
      success:res=>{
        const isUserInfo=res.authSetting['scope.userInfo'];
        if(isUserInfo){
          wx.getUserInfo({
            success:res=>{
              const userInfo=res.userInfo;
              this.globalData.userInfo=userInfo;
            }
          })
        }
      }
    })
  }
})