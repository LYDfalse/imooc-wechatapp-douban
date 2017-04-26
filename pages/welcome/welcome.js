Page({
    onTap:function(){
        console.log(111);
        // wx.redirectTo({
        //   url: '../posts/post'
        // })
        wx.navigateTo({
          url: '../posts/post'
        })
    }
})